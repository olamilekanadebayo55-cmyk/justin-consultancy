// Post-build sanity checks on dist/: metadata uniqueness, headings, canonical URLs, internal links, sitemap.
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const dist = path.resolve(import.meta.dirname, '..', 'dist');
const sitemap = await readFile(path.join(dist, 'sitemap.xml'), 'utf8');
const locs = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
const origin = new URL(locs[0]).origin;
const paths = locs.map((l) => new URL(l).pathname);
const fileFor = (p) => path.join(dist, p, 'index.html');
const exists = (f) => stat(f).then((s) => s.isFile(), () => false);

let problems = 0;
const fail = (m) => { problems++; console.error('FAIL', m); };
const titles = new Map();
const descs = new Map();
const required = ['/', '/services/', '/work/', '/about/', '/contact/', '/insights/',
  ...['web-development', 'video-editing', 'ai-automation', 'research-writing', 'data-analysis', 'vibe-coding', 'website-security', 'seo-digital-marketing'].map((s) => `/services/${s}/`)];
for (const r of required) if (!paths.includes(r)) fail(`sitemap missing ${r}`);

for (const p of paths) {
  const html = await readFile(fileFor(p), 'utf8');
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const desc = html.match(/<meta name="description" content="(.*?)"/)?.[1];
  const canon = html.match(/<link rel="canonical" href="(.*?)"/)?.[1];
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (!title) fail(`${p}: no <title>`);
  if (!desc) fail(`${p}: no meta description`);
  if (canon !== origin + p) fail(`${p}: canonical is ${canon}`);
  if (h1s !== 1) fail(`${p}: ${h1s} <h1> elements`);
  if (!html.includes('og:title')) fail(`${p}: no Open Graph tags`);
  if (titles.has(title)) fail(`${p}: duplicate title with ${titles.get(title)}`); else titles.set(title, p);
  if (descs.has(desc)) fail(`${p}: duplicate description with ${descs.get(desc)}`); else descs.set(desc, p);
  for (const m of html.matchAll(/href="(\/[^"#?]*)(?:[?#][^"]*)?"/g)) {
    const href = m[1];
    const ok = path.extname(href) ? await exists(path.join(dist, href)) : await exists(fileFor(href));
    if (!ok) fail(`${p}: broken internal link ${href}`);
    else if (!path.extname(href) && !href.endsWith('/')) fail(`${p}: link missing trailing slash ${href}`);
  }
  for (const m of html.matchAll(/(?:src|href)="(\/assets\/[^"]+)"/g)) if (!(await exists(path.join(dist, m[1])))) fail(`${p}: missing asset ${m[1]}`);
}
const nf = await readFile(path.join(dist, '404.html'), 'utf8');
if (!nf.includes('noindex')) fail('404.html should be noindex');
console.log(problems ? `\n${problems} problem(s)` : `OK: ${paths.length} routes checked (titles, descriptions, canonicals, h1, links, assets).`);
process.exit(problems ? 1 : 0);
