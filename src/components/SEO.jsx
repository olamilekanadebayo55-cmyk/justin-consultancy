import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getMeta, isKnownPath } from '../data/pageMeta.js';
import { canonicalFor, jsonLdFor, OG_IMAGE_PATH } from '../seo.js';
import { SITE_URL } from '../data/site.js';

function setTag(selector, create, attr, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}
const meta = (name, content) =>
  setTag(`meta[name="${name}"]`, () => Object.assign(document.createElement('meta'), { name }), 'content', content);
const prop = (property, content) =>
  setTag(
    `meta[property="${property}"]`,
    () => {
      const m = document.createElement('meta');
      m.setAttribute('property', property);
      return m;
    },
    'content',
    content
  );

/**
 * Keeps <head> in sync on client-side navigation. The initial HTML for every route is
 * prerendered with the same values (see scripts/prerender.mjs), so crawlers get them
 * without running JavaScript. Metadata lives in src/data/pageMeta.js.
 */
export default function SEO() {
  const { pathname } = useLocation();
  useEffect(() => {
    const m = getMeta(pathname);
    const url = canonicalFor(pathname);
    document.title = m.title;
    meta('description', m.description);
    setTag('link[rel="canonical"]', () => Object.assign(document.createElement('link'), { rel: 'canonical' }), 'href', url);
    prop('og:type', m.article ? 'article' : 'website');
    prop('og:title', m.title);
    prop('og:description', m.description);
    prop('og:url', url);
    prop('og:image', `${SITE_URL}${OG_IMAGE_PATH}`);
    meta('twitter:title', m.title);
    meta('twitter:description', m.description);
    const robots = document.head.querySelector('meta[name="robots"]');
    if (!isKnownPath(pathname)) meta('robots', 'noindex');
    else if (robots) robots.remove();

    // Structured data: replace or remove so it always matches the current page.
    const ld = isKnownPath(pathname) ? jsonLdFor(pathname) : null;
    let script = document.getElementById('ld-json');
    if (ld) {
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = 'ld-json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(ld);
    } else if (script) {
      script.remove();
    }
  }, [pathname]);
  return null;
}
