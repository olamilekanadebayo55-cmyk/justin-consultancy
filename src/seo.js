import { getMeta, isKnownPath, normalizePath } from './data/pageMeta.js';
import { SITE_URL, site } from './data/site.js';

export const OG_IMAGE_PATH = '/og-image.png';

export const canonicalFor = (path) => `${SITE_URL}${normalizePath(path)}`;

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Builds the <head> tags injected into each prerendered page. */
export function buildHeadHtml(path) {
  const meta = getMeta(path);
  const known = isKnownPath(path);
  const url = canonicalFor(path);
  const tags = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    known ? `<link rel="canonical" href="${url}" />` : '<meta name="robots" content="noindex" />',
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(site.name)}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${SITE_URL}${OG_IMAGE_PATH}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
  ];
  if (normalizePath(path) === '/') {
    // Only verified facts: name and URL.
    tags.push(
      `<script type="application/ld+json">${JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: site.name,
        url: SITE_URL,
      })}</script>`
    );
  }
  return tags.join('\n    ');
}
