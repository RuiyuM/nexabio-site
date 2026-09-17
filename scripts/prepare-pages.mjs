import { existsSync, mkdirSync, readFileSync, readdirSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = 'dist/client';
const prefix = '/nexabio-site/';
if (!existsSync(join(root, 'index.html'))) {
  throw new Error('Static export has no index.html. Refusing to publish an empty website.');
}
// Vinext emits assetPrefix as a physical folder; Pages supplies this mount itself.
const nested = join(root, 'nexabio-site');
if (existsSync(nested)) {
  for (const name of readdirSync(nested)) {
    const destination = join(root, name);
    if (existsSync(destination)) throw new Error(`Unexpected duplicate export path: ${name}`);
    renameSync(join(nested, name), destination);
  }
  rmSync(nested, { recursive: true });
}
rmSync(join(root, '.vite'), { recursive: true, force: true });
writeFileSync(join(root, '.nojekyll'), '');
const html = readFileSync(join(root, 'index.html'), 'utf8');
if (!html.includes('NEXABio') || !html.includes('Draft for review')) {
  throw new Error('The exported homepage is missing project content or draft status.');
}
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
for (const [, anchor] of html.matchAll(/href="#([^"]+)"/g)) {
  if (!ids.has(anchor)) throw new Error(`Broken section link: #${anchor}`);
}
for (const [, url] of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
  if (url.startsWith('https:') || url.startsWith('mailto:') || url.startsWith('data:')) continue;
  if (!url.startsWith(prefix)) throw new Error(`Asset lacks the GitHub Pages prefix: ${url}`);
  const path = decodeURIComponent(url.split('?')[0].slice(prefix.length));
  if (!existsSync(join(root, path))) throw new Error(`Missing exported asset: ${url}`);
}
console.log('GitHub Pages export verified: homepage, section links, and local assets.');
