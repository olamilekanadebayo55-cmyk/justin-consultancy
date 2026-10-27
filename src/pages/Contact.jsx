import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { serviceList } from '../data/services.js';
import { site } from '../data/site.js';

const budgets = ['Not sure yet', 'Under $500', '$500 – $2,000', '$2,000 – $5,000', '$5,000 – $10,000', '$10,000+'];
const methods = ['Email', 'Phone call', 'WhatsApp', 'No preference'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'Enter your full name.';
  if (!v.email.trim()) e.email = 'Enter your email address.';
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'Enter a valid email address, for example name@example.com.';
  if (!v.service) e.service = 'Choose the service you need, or “Not sure yet”.';
  if (!v.message.trim()) e.message = 'Describe your project in a few sentences.';
  else if (v.message.trim().length < 20) e.message = 'Add a little more detail (at least 20 characters).';
  return e;
}

function Field({ id, label, optional, error, hint, children }) {
  return (
    <div className="field">
      <label className="field__label" htmlFor={id}>
        {label}{' '}
        {optional ? <span className="field__opt">(optional)</span> : <span className="field__req" aria-hidden="true">*</span>}
      </label>
      {hint && (
        <p className="field__hint" id={`${id}-hint`}>
          {hint}
        </p>
      )}
      {children}
      {error && (
        <p className="field__error" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const [params] = useSearchParams();
  const requested = params.get('service');
  const requestedService = serviceList.some((s) => s.slug === requested) ? requested : '';

  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    method: '',
    website: '', // honeypot: real visitors never see or fill this
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [serverError, setServerError] = useState('');
  const formRef = useRef(null);
  const statusRef = useRef(null);

  // Preselect the service from ?service=… after hydration (keeps server and client markup identical).
  useEffect(() => {
    if (requestedService) setValues((v) => (v.service ? v : { ...v, service: requestedService }));
  }, [requestedService]);

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));
  const describe = (id, hasHint) => [errors[id] && `${id}-error`, hasHint && `${id}-hint`].filter(Boolean).join(' ') || undefined;

  async function onSubmit(ev) {
    ev.preventDefault();
    const found = validate(values);
    setErrors(found);
    setServerError('');
    const firstKey = Object.keys(found)[0];
    if (firstKey) {
      formRef.current?.querySelector(`#${firstKey}`)?.focus();
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      let data = {};
      try {
        data = await res.json();
      } catch {
        /* non-JSON response, handled below */
      }
      if (res.ok && data.ok) {
        setStatus('success');
        setTimeout(() => statusRef.current?.focus(), 0);
        return;
      }
      if (res.status === 422 && data.errors) {
        setErrors(data.errors);
        setStatus('idle');
        return;
      }
      setServerError(
        res.status === 503
          ? 'The contact form is not fully set up yet, so your message was not sent. Please try again later.'
          : 'Something went wrong and your message was not sent. Please try again in a moment.'
      );
      setStatus('error');
    } catch {
      setServerError('We could not reach the server, so your message was not sent. Check your connection and try again.');
      setStatus('error');
    }
    setTimeout(() => statusRef.current?.focus(), 0);
  }

  const { contact } = site;

  return (
    <>
      <section className="hero hero--page hero--light">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--light">Contact</p>
            <h1 className="display display--md">Start a project.</h1>
            <p className="lede">
              Tell us what you need. We reply with questions or a proposed scope before any work begins, and we never
              promise outcomes we cannot control.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="form-t">
        <div className="wrap contact-grid">
          <div>
            <h2 id="form-t" className="h2" style={{ marginBottom: '1.75rem' }}>
              Project inquiry
            </h2>

            {status === 'success' ? (
              <div className="form__status form__status--ok" role="status" tabIndex={-1} ref={statusRef}>
                <h2>Thank you, your inquiry has been sent.</h2>
                <p>We will review it and reply by your preferred method with questions or a proposed scope.</p>
              </div>
            ) : (
              <form ref={formRef} className="form" onSubmit={onSubmit} noValidate aria-describedby="form-fine">
                {(status === 'error' || Object.keys(errors).length > 0) && (
                  <div className="form__status form__status--error" role="alert" tabIndex={-1} ref={statusRef}>
                    {serverError || 'Please fix the highlighted fields and try again.'}
                  </div>
                )}

                <div className="form__row">
                  <Field id="name" label="Full name" error={errors.name}>
                    <input id="name" name="name" className="field__input" autoComplete="name" required
                      value={values.name} onChange={set('name')}
                      aria-invalid={Boolean(errors.name)} aria-describedby={describe('name')} maxLength={120} />
                  </Field>
                  <Field id="email" label="Email address" error={errors.email}>
                    <input id="email" name="email" type="email" className="field__input" autoComplete="email" required
                      value={values.email} onChange={set('email')}
                      aria-invalid={Boolean(errors.email)} aria-describedby={describe('email')} maxLength={160} />
                  </Field>
                </div>

                <div className="form__row">
                  <Field id="company" label="Company or organization" optional>
                    <input id="company" name="company" className="field__input" autoComplete="organization"
                      value={values.company} onChange={set('company')} maxLength={160} />
                  </Field>
                  <Field id="service" label="Service required" error={errors.service}>
                    <select id="service" name="service" className="field__input" required
                      value={values.service} onChange={set('service')}
                      aria-invalid={Boolean(errors.service)} aria-describedby={describe('service')}>
                      <option value="">Select a service…</option>
                      {serviceList.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.name}
                        </option>
                      ))}
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </Field>
                </div>

                <div className="form__row">
                  <Field id="budget" label="Project budget" optional>
                    <select id="budget" name="budget" className="field__input" value={values.budget} onChange={set('budget')}>
                      <option value="">Prefer not to say</option>
                      {budgets.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field id="method" label="Preferred contact method" optional>
                    <select id="method" name="method" className="field__input" value={values.method} onChange={set('method')}>
                      <option value="">No preference</option>
                      {methods.filter((m) => m !== 'No preference').map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field id="message" label="Project description" error={errors.message}
                  hint="What are you trying to achieve, and by when? Links or examples help.">
                  <textarea id="message" name="message" className="field__input" required
                    value={values.message} onChange={set('message')}
                    aria-invalid={Boolean(errors.message)} aria-describedby={describe('message', true)} maxLength={5000} />
                </Field>

                {/* Honeypot for basic spam protection. Hidden from people and assistive tech. */}
                <div className="hp" aria-hidden="true">
                  <label htmlFor="website">Leave this field empty</label>
                  <input id="website" name="website" tabIndex={-1} autoComplete="off"
                    value={values.website} onChange={set('website')} />
                </div>

                <div>
                  <button type="submit" className="btn btn--dark" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : 'Send inquiry'}
                  </button>
                </div>
                <p className="form__fine" id="form-fine">
                  Fields marked * are required. We only use what you send to reply to your inquiry.
                </p>
              </form>
            )}
          </div>

          <aside aria-label="What happens next">
            <div className="aside-box">
              <h2>What happens next</h2>
              <ol>
                <li>We read your inquiry and note any questions.</li>
                <li>We reply by your preferred method, usually with questions or a proposed scope.</li>
                <li>If it is a fit, you receive a written scope before any work begins.</li>
              </ol>
            </div>
            {(contact.email || contact.phone || contact.whatsapp || contact.location) && (
              <div className="aside-box">
                <h2>Other ways to reach us</h2>
                <ul>
                  {contact.email && (
                    <li>
                      <a href={`mailto:${contact.email}`}>{contact.email}</a>
                    </li>
                  )}
                  {contact.phone && <li>{contact.phone}</li>}
                  {contact.whatsapp && <li>WhatsApp: {contact.whatsapp}</li>}
                  {contact.location && <li>{contact.location}</li>}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}
