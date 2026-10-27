// Portfolio entries. All current entries are CONCEPT / DEMO projects, not client work.
// To add a real project: add an object with `kind: 'Client project'` and fill in `results`
// ONLY with verified information. Remove `concept: true` for real work.

export const projects = [
  {
    id: 'consultancy-site',
    kind: 'Demo build',
    concept: true,
    title: 'Just In Consultancy website',
    type: 'Multi-page website',
    service: 'web-development',
    context: 'The site you are browsing, built as a working demonstration of our own standards.',
    objective: 'Present eight services clearly, give each its own URL, and turn interest into well-formed enquiries.',
    approach:
      'React with React Router, prerendered HTML for every page, a single content source for services, accessible navigation and a server-side validated contact form.',
    deliverables: ['Multi-page React site', 'Prerendered routes and sitemap', 'Security headers and CSP', 'Contact endpoint'],
    results: 'Not applicable. This is a demonstration, so no performance claims are made.',
  },
  {
    id: 'lead-flow',
    kind: 'Concept project',
    concept: true,
    title: 'Enquiry-to-follow-up workflow',
    type: 'Automation design',
    service: 'ai-automation',
    context: 'A hypothetical service business receiving enquiries through a web form.',
    objective: 'Make sure every enquiry is recorded, acknowledged and assigned without manual copying.',
    approach:
      'Map the current steps, then design a workflow: form submission, CRM record, internal notification, acknowledgement email and a follow-up reminder, with a human review point for qualified leads.',
    deliverables: ['Process map', 'Workflow diagram', 'Error-handling plan', 'Handover documentation outline'],
    results: 'Not applicable. No live system was built or measured.',
  },
  {
    id: 'creator-edit-system',
    kind: 'Concept project',
    concept: true,
    title: 'Long-form to short-form edit plan',
    type: 'Video editing workflow',
    service: 'video-editing',
    context: 'A hypothetical creator publishing a weekly talking-head video.',
    objective: 'Turn one recording into a long-form video and several short vertical clips with consistent captions.',
    approach:
      'Define a caption style, pacing rules and a clip-selection checklist, then apply them to every episode.',
    deliverables: ['Style guide', 'Caption template', 'Clip-selection checklist', 'Export specification per platform'],
    results: 'Not applicable. Video samples will be added when real, approved work is available.',
  },
  {
    id: 'kpi-view',
    kind: 'Illustrative example',
    concept: true,
    title: 'Monthly KPI overview',
    type: 'Data reporting',
    service: 'data-analysis',
    context: 'A hypothetical small business tracking enquiries, conversions and sources in spreadsheets.',
    objective: 'Replace manual monthly reporting with one consistent, readable view.',
    approach:
      'Define each metric once, clean the source data, build a repeatable summary and write a short plain-language commentary.',
    deliverables: ['Metric definitions', 'Cleaned dataset template', 'Dashboard layout', 'Commentary template'],
    results: 'Not applicable. Any numbers shown on this site for this example are made up.',
  },
  {
    id: 'security-baseline',
    kind: 'Concept project',
    concept: true,
    title: 'Website security baseline review',
    type: 'Security configuration',
    service: 'website-security',
    context: 'A hypothetical small business site with a contact form and no documented security setup.',
    objective: 'Establish a clear baseline and a prioritised list of improvements.',
    approach:
      'Review HTTPS, security headers, form handling, dependencies, access and backups, then rank findings by realistic risk and effort.',
    deliverables: ['Findings report template', 'Header configuration', 'Form validation checklist', 'Backup and restore notes'],
    results: 'Not applicable. No real site was assessed.',
  },
  {
    id: 'content-brief',
    kind: 'Illustrative example',
    concept: true,
    title: 'Research-led content brief',
    type: 'Research and writing',
    service: 'research-writing',
    context: 'A hypothetical consultancy planning its first resource articles.',
    objective: 'Give writers a brief that covers audience, search intent, sources and structure.',
    approach: 'Research the topic, capture questions readers ask, list reputable sources and propose an outline.',
    deliverables: ['Content brief template', 'Source list format', 'Outline', 'Metadata suggestions'],
    results: 'Not applicable. No article has been published from this brief.',
  },
];

export const getProject = (id) => projects.find((p) => p.id === id);
