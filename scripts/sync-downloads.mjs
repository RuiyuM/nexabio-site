// Keep one editable master in poster/; copy reviewed deliverables into the site.
import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
const files = ['NEXABio-student-interest.pdf', 'NEXABio-student-interest.pptx'];
const links = JSON.parse(readFileSync('forms/links.json', 'utf8'));
const program = JSON.parse(readFileSync('content/program.json', 'utf8'));
if (program.application.formUrl !== links.responderUrl) {
  throw new Error('Website form URL differs from forms/links.json. Update both when replacing the form.');
}
mkdirSync('public/downloads', { recursive: true });
for (const file of files) copyFileSync(`poster/${file}`, `public/downloads/${file}`);
console.log('Reviewed poster downloads synchronized.');
