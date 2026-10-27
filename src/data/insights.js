// Insights content. To publish an article later, add an object to `articles`:
//   { slug, title, summary, topic, date: '2026-01-31', status: 'published' }
// Then create a route/page for it. Nothing is invented here: the list is empty until real articles exist.

export const articles = [];

export const topics = [
  { id: 'web-development', name: 'Web development', text: 'Planning, building and maintaining websites that are fast, accessible and easy to update.', service: 'web-development' },
  { id: 'ai-automation', name: 'AI automation', text: 'Which workflows are worth automating, and how to keep a person in the loop.', service: 'ai-automation' },
  { id: 'video-editing', name: 'Video editing', text: 'Pacing, captions and formats for long-form and short-form video.', service: 'video-editing' },
  { id: 'research-writing', name: 'Research and writing', text: 'Turning research into clear, useful articles and website content.', service: 'research-writing' },
  { id: 'data-analysis', name: 'Data analysis', text: 'Cleaning data, choosing metrics and reporting in plain language.', service: 'data-analysis' },
  { id: 'website-security', name: 'Website security', text: 'Practical baseline measures for small business websites.', service: 'website-security' },
  { id: 'seo-digital-marketing', name: 'SEO and digital marketing', text: 'Technical foundations, on-page basics and sensible expectations.', service: 'seo-digital-marketing' },
];
