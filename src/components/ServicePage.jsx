import { Link } from 'react-router-dom';
import { getService, services } from '../data/services.js';
import { groups } from '../data/site.js';
import Signature from './Signatures.jsx';
import FAQSection from './FAQSection.jsx';
import CTASection from './CTASection.jsx';
import Avatar from './Avatar.jsx';
import FiverrButton from './FiverrButton.jsx';
import { getSpecialistForService } from '../data/team.js';

/**
 * Renders a service page from its data entry. Each service has its own page component
 * (src/pages/*.jsx) that passes its slug and picks a hero/layout variant.
 */
export default function ServicePage({ slug, variant = 'split' }) {
  const s = getService(slug);
  const group = groups.find((g) => g.id === s.group);
  const specialist = getSpecialistForService(s.slug);
  return (
    <>
      <section className={`hero hero--service hero--${variant}`}>
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <nav aria-label="Breadcrumb" className="crumbs">
              <ol>
                <li>
                  <Link to="/services/">Services</Link>
                </li>
                <li aria-current="page">{s.name}</li>
              </ol>
            </nav>
            <p className="eyebrow eyebrow--light">
              {group.letter} · {group.name}
            </p>
            <h1 className="display display--md">{s.h1}</h1>
            <p className="lede">{s.intro}</p>
            <div className="btn-row">
              <Link className="btn btn--accent" to={`/contact/?service=${s.slug}`}>
                Request a Quote
              </Link>
              <a className="btn btn--ghost" href="#deliverables">
                See deliverables
              </a>
            </div>
          </div>
          <div className="hero__visual">
            <Signature name={s.signature} />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="problems-t">
        <div className="wrap two-col">
          <div>
            <p className="eyebrow">Why people come to us</p>
            <h2 id="problems-t" className="h2">
              Problems this service can help address
            </h2>
          </div>
          <ul className="rule-list">
            {s.problems.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="suitable-t">
        <div className="wrap two-col">
          <div>
            <p className="eyebrow">Who it is for</p>
            <h2 id="suitable-t" className="h2">
              Suitable for
            </h2>
          </div>
          <ul className="chips">
            {s.suitableFor.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="deliverables" aria-labelledby="deliv-t">
        <div className="wrap two-col">
          <div>
            <p className="eyebrow">What you receive</p>
            <h2 id="deliv-t" className="h2">
              Deliverables
            </h2>
            <p className="muted">Exact deliverables are agreed in a written scope before work begins.</p>
          </div>
          <ul className="check-list">
            {s.deliverables.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="proc-t">
        <div className="wrap">
          <p className="eyebrow eyebrow--light">How it works</p>
          <h2 id="proc-t" className="h2 h2--light">
            The working process
          </h2>
          <ol className="steps">
            {s.process.map((p, i) => (
              <li key={p.title}>
                <span className="steps__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="tools-t">
        <div className="wrap two-col">
          <div>
            <p className="eyebrow">Tools</p>
            <h2 id="tools-t" className="h2">
              Tools and technologies
            </h2>
            <p className="muted">Chosen to fit your project and existing accounts, not to pad a list.</p>
          </div>
          <ul className="chips chips--outline">
            {s.tools.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="demo-t">
        <div className="wrap demo">
          <div>
            <span className="tag">{s.demo.label}</span>
            <h2 id="demo-t" className="h2">
              {s.demo.title}
            </h2>
          </div>
          <div>
            <p>{s.demo.text}</p>
            <Link className="btn btn--dark" to={s.demo.href}>
              {s.demo.cta}
            </Link>
          </div>
        </div>
      </section>
            {specialist && (
        <section className="section section--tint" aria-labelledby="spec-t">
          <div className="wrap specialist-strip">
            <Avatar member={specialist} size="md" />
            <div>
              <p className="eyebrow">Your specialist</p>
              <h2 id="spec-t" className="h2">
                {specialist.role}
              </h2>
              <p className="muted" style={{ maxWidth: '58ch' }}>
                {specialist.placeholder ? 'Profile to be added.' : specialist.bio}
              </p>
              <div className="btn-row">
                <FiverrButton member={specialist} />
                <Link className="btn btn--sm btn--ghost-dark" to="/specialists/">
                  All specialists
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <FAQSection faqs={s.faqs} id={`${s.slug}-faq`} title={`${s.name}: common questions`} />

      <section className="section" aria-labelledby="related-t">
        <div className="wrap">
          <p className="eyebrow">Related</p>
          <h2 id="related-t" className="h2">
            Services that often go with this one
          </h2>
          <ul className="related">
            {s.related.map((r) => (
              <li key={r}>
                <Link to={`/services/${r}/`}>
                  <span>{services[r].name}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title={`Ready to talk about ${s.name.toLowerCase()}?`}
        primary={{ to: `/contact/?service=${s.slug}`, label: 'Request a Quote' }}
        secondary={{ to: '/book/', label: 'Book a Consultation' }}
      />
    </>
  );
}
