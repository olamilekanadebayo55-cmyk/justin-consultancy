import CTASection from '../components/CTASection.jsx';
import { principles, processSteps } from '../data/site.js';

export default function About() {
  return (
    <>
      <section className="hero hero--page">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--light">About</p>
            <h1 className="display display--md">Practical digital work, explained plainly.</h1>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="mission-t">
        <div className="wrap">
          <p className="eyebrow">Mission</p>
          <h2 id="mission-t" className="sr-only">
            Our mission
          </h2>
          <p className="statement">
            To help businesses and individuals solve digital problems with clear thinking, careful work and honest
            advice.
          </p>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="approach-t">
        <div className="wrap two-col">
          <div>
            <p className="eyebrow">Approach</p>
            <h2 id="approach-t" className="h2">
              How we approach client projects.
            </h2>
          </div>
          <div className="prose">
            <p>
              Just In Consultancy brings web development, video editing, AI automation, research and writing, data
              analysis, vibe coding, website security and SEO together. The value is in connecting them: a site that is
              fast, secure and findable, content that supports it, and automation and reporting that save time.
            </p>
            <p>
              We listen first, agree a written scope, build in visible stages, test before handover and document what
              we deliver. Where AI tools speed up the work, a person still reviews, tests and takes responsibility for
              the result.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="principles-t">
        <div className="wrap">
          <p className="eyebrow">Working principles</p>
          <h2 id="principles-t" className="h2">
            What guides the work.
          </h2>
          <ol className="principles">
            {principles.map((p) => (
              <li className="principle" key={p.title}>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="comm-t">
        <div className="wrap">
          <p className="eyebrow eyebrow--light">Communication</p>
          <h2 id="comm-t" className="h2 h2--light">
            Clear communication at every stage.
          </h2>
          <ol className="steps">
            {processSteps.map((s, i) => (
              <li key={s.title}>
                <span className="steps__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection
        title="Ready for a clear next step?"
        text="Tell us about your project and we will reply with questions or a proposed scope."
        primary={{ to: '/contact/', label: 'Contact the Consultancy' }}
        secondary={{ to: '/services/', label: 'Explore Our Services' }}
      />
    </>
  );
}
