// Blog content. To add an article: add an object to `posts` (newest first) and redeploy.
// Page titles, descriptions, canonical URLs, Open Graph tags, Article structured data,
// the sitemap and prerendering are all generated automatically from these entries.
//
// Body blocks: { h2 }, { p }, { ul: [...] }, { ol: [...] }
// Keep `description` to roughly 150 characters and `metaTitle` under about 60.

export const BLOG_AUTHOR = 'Just In Consultancy';

export const posts = [
  {
    slug: 'website-security-checklist-small-business',
    title: 'A Basic Website Security Checklist for Small Business Owners',
    metaTitle: 'Website Security Checklist for Small Businesses',
    description:
      'A plain-language website security checklist: HTTPS, updates, strong logins, backups, security headers and form validation. Practical steps, no jargon.',
    excerpt:
      'Most website problems come from avoidable basics. Work through this checklist to reduce your risk and recover faster if something goes wrong.',
    category: 'Website security',
    service: 'website-security',
    date: '2026-10-27',
    keywords: ['website security checklist', 'small business website security', 'security headers', 'website backups'],
    body: [
      { p: 'No website can be made completely immune to attack. What you can do is remove the avoidable risks, make the remaining ones harder to exploit, and make sure you can recover quickly. This checklist covers the basics that matter most for a typical small business website.' },
      { h2: '1. Use HTTPS everywhere' },
      { p: 'HTTPS encrypts traffic between your visitors and your site. Most hosts provide certificates automatically. Check that every page loads over HTTPS, that http:// addresses redirect to https://, and that no images or scripts are still loaded over plain http, which browsers may block or flag.' },
      { h2: '2. Keep software and dependencies updated' },
      { p: 'Outdated content management systems, plugins, themes and code packages are one of the most common ways sites get compromised, because known weaknesses are publicly documented. Make updating a routine rather than an emergency.' },
      { ul: ['List every platform, plugin and package your site depends on.', 'Remove anything you no longer use.', 'Apply security updates promptly, and test the site afterwards.', 'Use your platform’s or package manager’s audit tools to flag known vulnerabilities.'] },
      { h2: '3. Protect logins' },
      { p: 'Weak or reused passwords are easy to guess or buy. Use a password manager to create a unique, long password for each account, and turn on multi-factor authentication for your hosting, domain registrar, email and site admin accounts.' },
      { h2: '4. Give people only the access they need' },
      { p: 'Not everyone needs administrator rights. Give each person their own account with the lowest level of access that lets them do their job, and remove accounts promptly when someone leaves. Shared logins make it impossible to know who did what.' },
      { h2: '5. Back up regularly and test the restore' },
      { p: 'A backup you have never restored is a hope, not a plan. Keep copies in more than one place, including at least one that is separate from your hosting account, and practise restoring from them so you know how long it takes and that the files are complete.' },
      { h2: '6. Add security headers' },
      { p: 'HTTP security headers tell browsers how to treat your site. Common ones include Strict-Transport-Security (always use HTTPS), X-Content-Type-Options (do not guess file types), a frame-ancestors rule or X-Frame-Options (limit who can embed your pages) and a Content-Security-Policy that restricts where scripts and other resources can load from. A Content-Security-Policy needs to match the resources your site really uses, so introduce it carefully and test every page.' },
      { h2: '7. Validate everything users send you' },
      { p: 'Contact forms, search boxes and any other input should be checked on the server, not only in the browser, because browser checks can be bypassed. Limit field lengths, check formats, escape content before displaying or emailing it, and add basic spam protection such as a honeypot field or rate limiting.' },
      { h2: '8. Limit third-party scripts' },
      { p: 'Every analytics, chat or advertising script you add runs with access to your pages. Keep only those you need, load them from reputable providers, and review them from time to time.' },
      { h2: '9. Know what to do if something goes wrong' },
      { p: 'Write down who to contact, how to take the site offline if needed, how to restore a backup and how to change passwords quickly. Serious incidents may need your hosting provider or a specialist incident-response service.' },
      { h2: 'What this checklist does not cover' },
      { p: 'This is a baseline, not an audit. It does not replace a review of your specific setup, and it does not involve testing systems for weaknesses. If you would like a second pair of eyes on your configuration, our website security service reviews and hardens sites you own or are authorised to manage.' },
    ],
  },
  {
    slug: 'which-business-tasks-are-worth-automating',
    title: 'Which Business Tasks Are Worth Automating? A Practical Filter',
    metaTitle: 'Which Business Tasks Are Worth Automating?',
    description:
      'Not every task should be automated. Use this practical filter to decide which workflows are worth automating, and where a person should stay involved.',
    excerpt:
      'Automation saves time when the task is frequent, rule-based and low-risk. Here is a simple filter for choosing what to automate first.',
    category: 'AI automation',
    service: 'ai-automation',
    date: '2026-10-27',
    keywords: ['business process automation', 'workflow automation', 'what to automate', 'n8n Make Zapier'],
    body: [
      { p: 'It is tempting to try to automate everything once you see what tools like n8n, Make.com or Zapier can do. In practice, the best results come from automating a few well-chosen tasks and leaving the rest alone. This filter helps you decide.' },
      { h2: 'Start with the problem, not the tool' },
      { p: 'Write down what is actually going wrong: enquiries that wait too long for a reply, details copied by hand between systems, reminders that get forgotten. A clear problem tells you what a good automation looks like and how you will know it worked.' },
      { h2: 'The five-question filter' },
      { ol: [
        'Is it repeated often? Tasks done daily or weekly repay the effort of building an automation. Tasks done twice a year usually do not.',
        'Are the steps predictable? If a person follows the same rules each time, a workflow can too. If the task needs judgment or empathy, keep a person in charge.',
        'What does a mistake cost? Low-risk steps such as sending an internal notification are good candidates. High-risk steps such as issuing refunds should include human approval.',
        'Is the process stable? Automating a process that is still changing means rebuilding the automation every time. Settle the process first.',
        'Is the data available? Automations need information in a usable form, such as form fields, CRM records or spreadsheet columns. Messy or missing data needs to be fixed first.',
      ] },
      { h2: 'Good first candidates' },
      { ul: [
        'Sending new website enquiries into a CRM or spreadsheet automatically.',
        'Notifying the right person when a form is submitted.',
        'Sending a prompt acknowledgement email so people know you received their message.',
        'Reminding your team to follow up after a set number of days.',
        'Copying confirmed details from one tool into another to avoid retyping.',
      ] },
      { h2: 'Where to keep a human involved' },
      { p: 'Decisions that affect customers, money or reputation deserve a person’s review. A sensible pattern is to let the automation prepare a draft or a recommendation, and have someone approve it before it is sent. This is especially true when AI is used to classify messages or draft replies, because its output can be wrong.' },
      { h2: 'Plan for failure' },
      { p: 'Connected tools change, passwords expire and services go down. Build in error notifications and logs so a failure is visible, and document each workflow so someone else can understand it later. Use your own accounts so you stay in control of what you have built.' },
      { h2: 'Start small and review' },
      { p: 'Pick one workflow, build it, test it with realistic cases including odd ones, then watch how it behaves for a few weeks. Decide from your own experience whether it is saving time before moving on to the next. If you would like help mapping your processes and choosing what to automate, our AI automation service starts with exactly that.' },
    ],
  },
  {
    slug: 'how-to-brief-a-website-project',
    title: 'How to Brief a Website Project: A Checklist for Small Businesses',
    metaTitle: 'How to Brief a Website Project: A Checklist',
    description:
      'A clear brief saves time and money on a website project. Use this checklist covering goals, audience, pages, content, examples, budget and ownership.',
    excerpt:
      'A good website starts with a good brief. This checklist helps you explain your goals, audience, content and constraints before any design begins.',
    category: 'Web development',
    service: 'web-development',
    date: '2026-10-27',
    keywords: ['website brief', 'website project checklist', 'web design brief', 'small business website'],
    body: [
      { p: 'Most website projects that go over time or budget share a cause: the goals and content were not clear at the start. A written brief does not need to be long, but it should answer the questions below. Whether you are working with a developer, an agency or a freelancer, it will make the first conversation far more productive.' },
      { h2: '1. What is the website for?' },
      { p: 'Describe the main thing you want visitors to do: send an enquiry, book a call, buy a product, read your articles. Choose one primary action and one or two secondary ones. Everything on the site should help visitors take them.' },
      { h2: '2. Who is it for?' },
      { p: 'Describe your typical visitor: what they already know, what they are trying to solve, and what might stop them from contacting you. Knowing this shapes the wording, structure and calls to action far more than colours or fonts do.' },
      { h2: '3. Which pages do you need?' },
      { p: 'List the pages you expect, such as home, services, about, contact and any case studies or articles. For a service business, give each major service its own page, so visitors and search engines can find exactly what they want.' },
      { h2: '4. What content exists already?' },
      { ul: ['Do you have written copy, or does it need to be written?', 'Do you have professional photos, videos or a logo, and do you own the rights to them?', 'Is there content on an old site that must be kept or redirected?'] },
      { p: 'Content is the most common cause of delay. Gathering it early keeps the project on schedule.' },
      { h2: '5. Share examples you like and dislike' },
      { p: 'Collect a few websites you admire and note what you like about each, such as clarity, tone or layout. Mention ones you dislike too. The goal is to communicate a direction, not to copy anyone.' },
      { h2: '6. Features and integrations' },
      { p: 'Note anything the site must connect to: a contact form that sends email, a booking calendar, a newsletter tool, analytics, a CRM or payments. Each integration adds work and sometimes ongoing costs, so it is worth listing them early.' },
      { h2: '7. Budget and timeline' },
      { p: 'Share a realistic budget range and any fixed dates, such as a product launch. A range lets the developer propose the best approach for what you can spend, rather than guessing.' },
      { h2: '8. Ownership and access' },
      { p: 'Make sure your business owns its domain name, hosting account and site files, and that you know who has access to them. Ask how the site will be updated and maintained after launch, and who will do it.' },
      { h2: 'Turn your answers into a one-page brief' },
      { p: 'Put your answers under these eight headings on a single page and share it before the first call. If you would like help shaping the brief, or you are not sure what you need, tell us about your project and we will suggest a sensible scope.' },
    ],
  },
];

export const topics = [
  { id: 'web-development', name: 'Web development', text: 'Planning, building and maintaining websites that are fast, accessible and easy to update.', service: 'web-development' },
  { id: 'ai-automation', name: 'AI automation', text: 'Which workflows are worth automating, and how to keep a person in the loop.', service: 'ai-automation' },
  { id: 'video-editing', name: 'Video editing', text: 'Pacing, captions and formats for long-form and short-form video.', service: 'video-editing' },
  { id: 'research-writing', name: 'Research and writing', text: 'Turning research into clear, useful articles and website content.', service: 'research-writing' },
  { id: 'data-analysis', name: 'Data analysis', text: 'Cleaning data, choosing metrics and reporting in plain language.', service: 'data-analysis' },
  { id: 'website-security', name: 'Website security', text: 'Practical baseline measures for small business websites.', service: 'website-security' },
  { id: 'seo-digital-marketing', name: 'SEO and digital marketing', text: 'Technical foundations, on-page basics and sensible expectations.', service: 'seo-digital-marketing' },
];

export const getPost = (slug) => posts.find((p) => p.slug === slug);

const WPM = 200;
export const wordCount = (post) =>
  post.body
    .flatMap((b) => [b.h2, b.p, ...(b.ul || []), ...(b.ol || [])])
    .filter(Boolean)
    .join(' ')
    .split(/\s+/).length;
export const readingMinutes = (post) => Math.max(1, Math.round(wordCount(post) / WPM));

export const formatDate = (iso) =>
  new Date(iso + 'T00:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

export const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
