// Vercel serverless function: POST /api/contact
// Validates the inquiry, then emails it via Resend. Secrets stay on the server (see .env.example).
// If the environment variables are missing it answers 503 so the website never shows a false "sent" message.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const SERVICES = {
  'web-development': 'Web Development',
  'video-editing': 'Video Editing',
  'ai-automation': 'AI Automation',
  'research-writing': 'Research and Article Writing',
  'data-analysis': 'Data Analysis',
  'vibe-coding': 'Vibe Coding and Rapid Prototyping',
  'website-security': 'Website Security',
  'seo-digital-marketing': 'SEO and Digital Marketing',
  'not-sure': 'Not sure yet',
};

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const clean = (v, max) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
const oneLine = (v) => v.replace(/[\r\n]+/g, ' ');

// Best-effort rate limit (per warm function instance). Not a substitute for a WAF.
const hits = new Map();
function limited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  }

  // Same-origin check (blocks casual cross-site posts).
  const origin = req.headers.origin;
  if (origin) {
    try {
      if (new URL(origin).host !== req.headers.host) return res.status(403).json({ ok: false, error: 'forbidden' });
    } catch {
      return res.status(403).json({ ok: false, error: 'forbidden' });
    }
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      body = {};
    }
  }
  body = body && typeof body === 'object' ? body : {};

  // Honeypot: pretend success so bots learn nothing.
  if (clean(body.website, 200)) return res.status(200).json({ ok: true });

  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'unknown';
  if (limited(ip)) return res.status(429).json({ ok: false, error: 'rate_limited' });

  const data = {
    name: clean(body.name, 120),
    email: clean(body.email, 160),
    company: clean(body.company, 160),
    service: clean(body.service, 40),
    budget: clean(body.budget, 40),
    method: clean(body.method, 40),
    message: clean(body.message, 5000),
  };

  const errors = {};
  if (!data.name) errors.name = 'Enter your full name.';
  if (!EMAIL_RE.test(data.email)) errors.email = 'Enter a valid email address.';
  if (!SERVICES[data.service]) errors.service = 'Choose a service.';
  if (data.message.length < 20) errors.message = 'Add a little more detail (at least 20 characters).';
  if (Object.keys(errors).length) return res.status(422).json({ ok: false, errors });

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    console.error('Contact form is not configured: set RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL.');
    return res.status(503).json({ ok: false, error: 'not_configured' });
  }

  const rows = [
    ['Name', data.name],
    ['Email', data.email],
    ['Company', data.company || '-'],
    ['Service', SERVICES[data.service]],
    ['Budget', data.budget || '-'],
    ['Preferred contact', data.method || '-'],
  ];
  const html =
    `<h2>New project inquiry</h2><table cellpadding="6">` +
    rows.map(([k, v]) => `<tr><th align="left">${esc(k)}</th><td>${esc(v)}</td></tr>`).join('') +
    `</table><h3>Project description</h3><p style="white-space:pre-wrap">${esc(data.message)}</p>`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n') + `\n\n${data.message}`;

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: data.email,
        subject: oneLine(`New inquiry: ${SERVICES[data.service]} from ${data.name}`).slice(0, 200),
        html,
        text,
      }),
    });
    if (!r.ok) {
      console.error('Resend error', r.status, await r.text().catch(() => ''));
      return res.status(502).json({ ok: false, error: 'send_failed' });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Resend request failed', err);
    return res.status(502).json({ ok: false, error: 'send_failed' });
  }
}
