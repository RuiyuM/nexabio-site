/** Build a native, editable one-page US Letter poster with Artifact Tool.
 * Set ARTIFACT_NODE_MODULES if @oai/artifact-tool is outside this project.
 * Edits can also be made directly in the delivered PPTX using PowerPoint.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(process.env.ARTIFACT_NODE_MODULES
  ? path.join(process.env.ARTIFACT_NODE_MODULES, '_poster_loader.cjs')
  : import.meta.url);
const { Presentation, PresentationFile } = await import(pathToFileURL(require.resolve('@oai/artifact-tool')).href);
const copy = JSON.parse(await fs.readFile(path.join(root, 'poster/content.json'), 'utf8'));
const links = JSON.parse(await fs.readFile(path.join(root, 'forms/links.json'), 'utf8'));
const out = path.join(root, '.poster-build');
await fs.mkdir(out, { recursive: true });

const presentation = Presentation.create({ slideSize: { width: 816, height: 1056 } });
const slide = presentation.slides.add();
slide.background.fill = '#FFFFFF';
const green = '#154F43', orange = '#C7602C', ink = '#203B34', muted = '#50635C';
function block(x, y, w, h, fill) {
  return slide.shapes.add({geometry:'rect', position:{left:x,top:y,width:w,height:h},fill,line:{fill:'none',width:0}});
}
function text(value, x, y, w, h, size=20, color=ink, bold=false) {
  const box = slide.shapes.add({geometry:'textbox',position:{left:x,top:y,width:w,height:h},fill:'none',line:{fill:'none',width:0}});
  box.text=value;
  box.text.style={typeface:'Arial',fontSize:size,color,bold,autoFit:'none',wrap:'square',verticalAlignment:'top',insets:{left:0,right:0,top:0,bottom:0}};
  return box;
}

block(0,0,816,12,orange);
block(0,12,816,333,green);
slide.images.add({blob:new Uint8Array(await fs.readFile(path.join(root,'public/brand/nexabio-logo-dark-v1.png'))),contentType:'image/png',alt:'NEXABio polymer-loop logo',fit:'contain',position:{left:30,top:16,width:300,height:100}});
text(copy.institution,48,110,690,26,19,'#DDECE5');
text(copy.eyebrow,48,146,690,22,15,'#EDBF9A',true);
text(copy.headline,48,180,720,107,43,'#FFFFFF',true);
text(copy.intro,48,290,720,46,18,'#FFFFFF');

text(copy.audienceHeading,48,376,720,33,25,green,true);
text(copy.audience,48,418,720,65,19,muted);

text(copy.activitiesHeading,48,505,720,33,25,green,true);
copy.activities.forEach((item,i)=>{
  const x=48+i*245;
  block(x,552,218,3,orange);
  text(item.title,x,570,225,30,20,green,true);
  text(item.description,x,608,225,55,17,muted);
});

text(copy.researchHeading,48,690,720,32,24,green,true);
text(copy.research,48,733,720,55,19,muted);

block(32,811,752,181,'#EDF4EE');
text(copy.cta,52,832,506,35,27,green,true);
text(copy.ctaDescription,52,877,506,71,18,ink);
const shortUrl=links.responderUrl.replace(/^https:\/\//,'');
text([{runs:[{run:shortUrl,link:{uri:links.responderUrl,isExternal:true}}]}],52,960,520,23,17,green,true);
slide.images.add({blob:new Uint8Array(await fs.readFile(path.join(root,'poster/qr-code.png'))),contentType:'image/png',alt:`Scan to complete the NEXABio student interest form: ${links.responderUrl}`,fit:'contain',position:{left:600,top:829,width:152,height:152}});
text(copy.ctaNote,48,1000,720,16,12,muted);
text(copy.footer,48,1020,720,16,12,muted);

slide.speakerNotes.textFrame.setText([
  'NEXABio student recruitment draft. US Letter portrait. The selected polymer-loop logo and the QR are separate images; body text remains editable.',
  'Content: supplied NSF_CyberTraining.pdf and content/program.json. The original proposal is private and is not included in this repository.',
  copy.team,
  'Dates, eligibility, funding acknowledgment, and participant support are unconfirmed. No award, stipend, or enrollment guarantee is made.',
  'Form: '+links.responderUrl,
  'Brand: user-selected concept B, polymer loops. Logo source and usage: public/brand/README.md.',
  'Editing instructions: poster/README.md. Changing the target form requires regenerating and replacing the QR image.',
].join('\n'));
await (await PresentationFile.exportPptx(presentation)).save(path.join(out,'candidate.pptx'));
const png=await presentation.export({slide,format:'png',scale:1});
await fs.writeFile(path.join(out,'candidate.png'),new Uint8Array(await png.arrayBuffer()));
console.log('Wrote .poster-build/candidate.pptx and candidate.png. Finalize and review before distribution.');
