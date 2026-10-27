// Static prerender: renders every route to HTML so crawlers (and visitors before JS loads) get real
// content and per-page metadata. Runs after the client build and the SSR build (see `npm run build`).
import { readFile, writeFile, mkdir, readdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const serverDir = path.join(root, 'dist-server');

const entry = (await readdir(serverDir)).find((f) => /^entry-server\.(m?js)$/.test(f));
if (!entry) throw new Error('SSR bundle not found in dist-server/');
const { render, buildHeadHtml, allPaths, SITE_URL } = await import(pathToFileURL(path.join(serverDir, entry)).href);

const template = await readFile(path.join(dist, 'index.html'), 'utf8');
if (!template.includes('<!--app-html-->') || !template.includes('<!--app-head-->')) {
  throw new Error('index.html template is missing the <!--app-head--> / <!--app-html--> placeholders');
}

const fill = (p) => template.replace('<!--app-head-->', buildHeadHtml(p)).replace('<!--app-html-->', render(p));

for (const p of allPaths) {
  const html = fill(p);
  const file = p === '/' ? path.join(dist, 'index.html') : path.join(dist, p, 'index.html');
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, html);
}

// 404 page (Vercel serves dist/404.html with a 404 status for unknown URLs).
await writeFile(path.join(dist, '404.html'), fill('/__not-found__/'));

const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  allPaths.map((p) => `  <url><loc>${SITE_URL}${p}</loc></url>`).join('\n') +
  `\n</urlset>\n`;
await writeFile(path.join(dist, 'sitemap.xml'), sitemap);

await rm(serverDir, { recursive: true, force: true });
console.log(`Prerendered ${allPaths.length} routes + 404.html + sitemap.xml (${SITE_URL})`);
