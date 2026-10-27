import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { groups } from '../data/site.js';
import { getService } from '../data/services.js';

const guide = [
  ['You need a new or better website', 'web-development'],
  ['You have an idea and want to test it quickly', 'vibe-coding'],
  ['You want to reduce avoidable website risks', 'website-security'],
  ['You have footage to turn into videos', 'video-editing'],
  ['You need researched articles or website copy', 'research-writing'],
  ['You do the same tasks by hand every week', 'ai-automation'],
  ['You have data but no clear picture', 'data-analysis'],
  ['You want to be easier to find and understand', 'seo-digital-marketing'],
];

export default function Services() {
  let n = 0;
  return (
    <>
      <section className="hero hero--page">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--light">Services</p>
            <h1 className="display display--md">Eight services, built to work together.</h1>
            <p className="lede">
              We start from the problem you are trying to solve, then recommend the smallest set of services that
              solves it well. Every service has its own page with deliverables, process, tools and common questions.
            </p>
            <div className="btn-row">
              <Link className="btn btn--accent" to="/contact/">
                Discuss Your Project
              </Link>
              <Link className="btn btn--ghost" to="/work/">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="approach-t">
        <div className="wrap two-col">
          <div>
            <p className="eyebrow">Our approach</p>
            <h2 id="approach-t" className="h2">
              Problem first, tools second.
            </h2>
          </div>
          <div className="prose">
            <p>
              We explain the business problem before we describe the technology. A website, a workflow or a video is
              a means to an end, so we begin with what you need visitors, customers or your team to be able to do.
            </p>
            <p>
              You receive a written scope that says what is included, what is not, and what depends on third parties.
              We do not guarantee rankings, revenue or growth, because those depend on factors outside any
              consultant’s control.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="all-t">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">All services</p>
            <h2 id="all-t" className="h2">
              Grouped by the kind of problem they solve.
            </h2>
          </div>
          <div className="groups">
            {groups.map((g) => (
              <div className="group" key={g.id}>
                <div>
                  <span className="group__letter">Group {g.letter}</span>
                  <h3 className="group__name">{g.name}</h3>
                  <p className="group__blurb">{g.blurb}</p>
                </div>
                <ul>
                  {g.services.map((slug) => (
                    <ServiceCard key={slug} slug={slug} index={n++} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="guide-t">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Which service fits?</p>
            <h2 id="guide-t" className="h2">
              Start from your situation.
            </h2>
          </div>
          <ul className="guide">
            {guide.map(([situation, slug]) => (
              <li key={slug}>
                <span>{situation}</span>
                <Link to={`/services/${slug}/`}>{getService(slug).name} →</Link>
              </li>
            ))}
          </ul>
          <p className="muted" style={{ maxWidth: '60ch' }}>
            Still unsure, or need a combination? Choose “Not sure yet” on the <Link to="/contact/">project form</Link>{' '}
            and describe what you are trying to achieve.
          </p>
        </div>
      </section>

      <CTASection
        title="Tell us what you need."
        text="Send a project inquiry and we will reply with questions or a proposed scope."
        primary={{ to: '/contact/', label: 'Start a Project' }}
        secondary={{ to: '/work/', label: 'View Our Work' }}
      />
    </>
  );
}
