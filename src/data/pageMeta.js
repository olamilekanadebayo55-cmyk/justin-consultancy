import { serviceList } from './services.js';
import { posts } from './blog.js';

// Single source of truth for per-route SEO metadata and the sitemap.
// Keys are normalised paths WITH a trailing slash.

const pages = {
  '/': {
    title: 'Just In Consultancy | Web, Video, Automation & Digital Services',
    description:
      'Just In Consultancy helps businesses with web development, video editing, AI automation, research, data analysis, website security and SEO. Start a project inquiry.',
  },
  '/services/': {
    title: 'Services | Just In Consultancy',
    description:
      'Explore all eight services: web development, video editing, AI automation, research and writing, data analysis, vibe coding, website security and SEO.',
  },
  '/work/': {
    title: 'Our Work | Concept & Demo Projects | Just In Consultancy',
    description:
      'Concept and demonstration projects showing how Just In Consultancy approaches websites, automation, video, data, security and content. Clearly labeled, no invented clients.',
  },
  '/about/': {
    title: 'About Just In Consultancy | Mission & Working Principles',
    description:
      'Our mission, approach and working principles: plain language, honest scoping, evidence over hype and work built to be maintained.',
  },
  '/contact/': {
    title: 'Contact & Start a Project | Just In Consultancy',
    description:
      'Send a project inquiry to Just In Consultancy. Tell us what you need and which service fits, and we will reply with questions or a proposed scope.',
  },
  '/specialists/': {
    title: 'Our Specialists | Web, Video, Automation & More | Just In Consultancy',
    description:
      'Meet the specialists behind each Just In Consultancy service: web development, video editing, AI automation, writing, data, security and SEO.',
  },
  '/blog/': {
    title: 'Blog | Practical Guides on Web, Automation & Security | Just In Consultancy',
    description:
      'Practical, plain-language guides on web development, AI automation, website security, SEO, video, writing and data from Just In Consultancy.',
  },
  '/book/': {
    title: 'Book a 30-Minute Consultation | Just In Consultancy',
    description:
      'Pick a time for a 30-minute consultation with Just In Consultancy to discuss your project and which services fit. Scheduling via Calendly.',
  },
};

for (const s of serviceList) {
  pages[`/services/${s.slug}/`] = { title: s.meta.title, description: s.meta.description };
}

for (const p of posts) {
  pages[`/blog/${p.slug}/`] = { title: `${p.metaTitle} | Just In Consultancy`, description: p.description, article: p };
}

export const notFoundMeta = {
  title: 'Page not found | Just In Consultancy',
  description: 'The page you are looking for does not exist. Browse our services or start a project inquiry.',
};

export const normalizePath = (p = '/') => {
  let path = p.split(/[?#]/)[0] || '/';
  if (!path.startsWith('/')) path = '/' + path;
  if (!path.endsWith('/')) path += '/';
  return path;
};

export const getMeta = (path) => pages[normalizePath(path)] || notFoundMeta;
export const isKnownPath = (path) => Boolean(pages[normalizePath(path)]);
export const allPaths = Object.keys(pages);
