import { Link } from 'react-router-dom';

export default function CTASection({
  title = 'Have a project in mind?',
  text = 'Tell us what you need and which service fits. We reply with questions or a proposed scope before any work begins.',
  primary = { to: '/contact/', label: 'Discuss Your Project' },
  secondary = { to: '/services/', label: 'Explore Our Services' },
  tone = 'dark',
}) {
  return (
    <section className={`cta cta--${tone}`} aria-labelledby="cta-title">
      <div className="wrap cta__inner">
        <h2 id="cta-title" className="cta__title">
          {title}
        </h2>
        <div className="cta__side">
          <p>{text}</p>
          <div className="btn-row">
            <Link className="btn btn--accent" to={primary.to}>
              {primary.label}
            </Link>
            {secondary && (
              <Link className="btn btn--ghost" to={secondary.to}>
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
