// Central site configuration. Edit values here; nothing else needs to change.

export const SITE_URL = (import.meta.env?.VITE_SITE_URL || 'https://justinconsultancy.com').replace(/\/$/, '');

export const site = {
  name: 'Just In Consultancy',
  shortName: 'Just In',
  url: SITE_URL,
  tagline: 'Practical digital services for ambitious businesses.',
  // OWNER TODO: fill these in when real details are available.
  // Empty values are simply not displayed anywhere on the site.
  contact: {
    email: '',
    phone: '',
    whatsapp: '',
    location: '',
  },
  social: {
    // linkedin: 'https://www.linkedin.com/...',
    // youtube: 'https://www.youtube.com/...',
  },
};

export const groups = [
  {
    id: 'digital-experiences',
    letter: 'A',
    name: 'Digital Experiences',
    blurb: 'Websites, prototypes and the security that keeps them dependable.',
    services: ['web-development', 'vibe-coding', 'website-security'],
  },
  {
    id: 'creative-content',
    letter: 'B',
    name: 'Creative & Content',
    blurb: 'Video and writing that explain your work clearly and hold attention.',
    services: ['video-editing', 'research-writing'],
  },
  {
    id: 'automation-intelligence',
    letter: 'C',
    name: 'Automation & Intelligence',
    blurb: 'Fewer repetitive tasks, clearer numbers, better-informed decisions.',
    services: ['ai-automation', 'data-analysis'],
  },
  {
    id: 'growth-marketing',
    letter: 'D',
    name: 'Growth & Marketing',
    blurb: 'Being found, understood and chosen by the right audience.',
    services: ['seo-digital-marketing'],
  },
];

export const processSteps = [
  {
    title: 'Listen',
    text: 'We start with your goals, audience, constraints and what you have already tried, before proposing anything.',
  },
  {
    title: 'Scope',
    text: 'You receive a written scope: deliverables, timeline, what is included, and what is deliberately left out.',
  },
  {
    title: 'Build',
    text: 'Work happens in visible stages, with check-ins and review points so there are no surprises at the end.',
  },
  {
    title: 'Test',
    text: 'Everything is checked on real devices, real data or real workflows before it is handed over.',
  },
  {
    title: 'Hand over',
    text: 'You get the files, documentation and a walkthrough, plus guidance on maintaining what we built.',
  },
];

export const principles = [
  {
    title: 'Plain language first',
    text: 'You should understand what we are proposing and why. Jargon is explained or left out.',
  },
  {
    title: 'Honest scoping',
    text: 'We say what is realistic, what depends on third parties, and what we would not recommend.',
  },
  {
    title: 'Evidence over hype',
    text: 'We do not promise rankings, revenue or guaranteed outcomes. We focus on work that can be inspected and tested.',
  },
  {
    title: 'Built to be maintained',
    text: 'Clean structure, sensible documentation and no unnecessary dependencies, so your project does not depend on us forever.',
  },
  {
    title: 'Security and accessibility as defaults',
    text: 'They are part of the build, not an optional extra added at the end.',
  },
];

export const homeFaqs = [
  {
    q: 'Who does Just In Consultancy work with?',
    a: 'Businesses, entrepreneurs, creators and organizations that need help with websites, video, automation, writing, data, security or marketing. If you are unsure which service fits, the project form has a "Not sure yet" option.',
  },
  {
    q: 'How do I start a project?',
    a: 'Send a project inquiry through the contact page with a short description of what you need. We reply with questions or a proposed scope before any work begins.',
  },
  {
    q: 'Can you combine services in one project?',
    a: 'Yes. Many projects naturally combine services, for example a new website with SEO foundations, or an automation with a reporting dashboard. We scope them together so the pieces fit.',
  },
  {
    q: 'Do you guarantee results such as rankings or sales?',
    a: 'No. Search rankings, sales and audience growth depend on many factors outside any consultant’s control. We commit to clear deliverables, quality work and honest recommendations.',
  },
  {
    q: 'Is the portfolio real client work?',
    a: 'The projects currently shown are clearly labeled concept or demonstration projects. Real client work will be added when it is available and approved for publication.',
  },
];
