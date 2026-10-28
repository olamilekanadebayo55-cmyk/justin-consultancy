import { getMeta, isKnownPath, normalizePath } from './data/pageMeta.js';
import { SITE_URL, site } from './data/site.js';
import { BLOG_AUTHOR } from './data/blog.js';

export const OG_IMAGE_PATH = '/og-image.png';

export const canonicalFor = (path) => `${SITE_URL}${normalizePath(path)}`;

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * Structured data. Only verified facts are used: the organization name and URL, and for blog posts
 * the headline, description, dates and URL. No ratings, addresses or credentials are invented.
 */
export function jsonLdFor(path) {
  const norm = normalizePath(path);
  const meta = getMeta(path);
  if (norm === '/') return { '@context': 'https://schema.org', '@type': 'Organization', name: site.name, url: SITE_URL };
  const post = meta.article;
  if (!post) return null;
  const url = canonicalFor(path);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.updated || post.date,
        mainEntityOfPage: url,
        image: `${SITE_URL}${OG_IMAGE_PATH}`,
        keywords: (post.keywords || []).join(', '),
        author: { '@type': 'Organization', name: BLOG_AUTHOR },
        publisher: { '@type': 'Organization', name: site.name, url: SITE_URL },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog/` },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
      },
    ],
  };
}

/** Builds the <head> tags injected into each prerendered page. */
export function buildHeadHtml(path) {
  const meta = getMeta(path);
  const known = isKnownPath(path);
  const url = canonicalFor(path);
  const post = meta.article;
  const tags = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    known ? `<link rel="canonical" href="${url}" />` : '<meta name="robots" content="noindex" />',
    `<meta property="og:type" content="${post ? 'article' : 'website'}" />`,
    `<meta property="og:site_name" content="${esc(site.name)}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${SITE_URL}${OG_IMAGE_PATH}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
  ];
  if (post) {
    tags.push(`<meta property="article:published_time" content="${post.date}" />`);
    tags.push(`<meta property="article:section" content="${esc(post.category)}" />`);
  }
  const ld = known ? jsonLdFor(path) : null;
  if (ld) tags.push(`<script type="application/ld+json" id="ld-json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>`);
  return tags.join('\n    ');
}
