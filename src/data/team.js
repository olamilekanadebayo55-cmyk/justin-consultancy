// Specialist profiles. EVERY entry below is a PLACEHOLDER until you fill it in.
//
// For each person, edit:
//   name      - real name
//   bio       - 2-3 sentences of real background
//   photo     - path to an image you add under /public/team/, e.g. '/team/web-developer.jpg'
//               (leave '' to show the neutral placeholder portrait)
//   fiverr    - full URL of their Fiverr profile, e.g. 'https://www.fiverr.com/username'
//               (leave '' and the button shows "Fiverr profile coming soon")
//   placeholder - set to false once the profile is real (removes the "Placeholder profile" label)

export const team = [
  { id: 'web-developer', service: 'web-development', role: 'Web Developer', initials: 'WD' },
  { id: 'video-editor', service: 'video-editing', role: 'Video Editor', initials: 'VE' },
  { id: 'automation-specialist', service: 'ai-automation', role: 'AI Automation Specialist', initials: 'AA' },
  { id: 'research-writer', service: 'research-writing', role: 'Research & Content Writer', initials: 'RW' },
  { id: 'data-analyst', service: 'data-analysis', role: 'Data Analyst', initials: 'DA' },
  { id: 'prototyping-developer', service: 'vibe-coding', role: 'Rapid Prototyping Developer', initials: 'RP' },
  { id: 'security-specialist', service: 'website-security', role: 'Website Security Specialist', initials: 'WS' },
  { id: 'seo-specialist', service: 'seo-digital-marketing', role: 'SEO & Digital Marketing Specialist', initials: 'SM' },
].map((m) => ({
  name: 'Name to be added',
  bio: 'Short professional bio to be added. Replace this placeholder with the specialist’s real background, experience and the kind of projects they handle.',
  photo: '',
  fiverr: '',
  placeholder: true,
  ...m,
}));

export const getSpecialistForService = (slug) => team.find((m) => m.service === slug);
