import { serviceList } from './services.js';

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
  '/insights/': {
    title: 'Insights | Just In Consultancy',
    description:
      'Upcoming articles on web development, AI automation, video editing, research and writing, data analysis, website security and SEO.',
  },
};

for (const s of serviceList) {
  pages[`/services/${s.slug}/`] = { title: s.meta.title, description: s.meta.description };
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
