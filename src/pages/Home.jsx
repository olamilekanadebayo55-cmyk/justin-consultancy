import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection.jsx';
import FAQSection from '../components/FAQSection.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import TeamCard from '../components/TeamCard.jsx';
import { posts, formatDate } from '../data/blog.js';
import { team } from '../data/team.js';
import { groups, homeFaqs, principles, processSteps } from '../data/site.js';
import { projects } from '../data/projects.js';

const featured = ['consultancy-site', 'lead-flow', 'security-baseline'].map((id) => projects.find((p) => p.id === id));

export default function Home() {
  return (
    <>
      <section className="hero hero--home hero--photo">
        <picture className="hero__bg">
          <img
            src="/hero-1280.webp"
            srcSet="/hero-640.webp 640w, /hero-960.webp 960w, /hero-1280.webp 1280w, /hero-1920.webp 1920w"
            sizes="100vw"
            width="1920"
            height="1072"
            alt="A small team meeting around a table, with a workflow diagram on the wall screen behind them"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--light">Digital consultancy</p>
            <h1 className="display">Your next stage of digital growth starts here.</h1>
            <p className="lede">
              From well-built websites and engaging video to practical automation and data-driven marketing, Just In
              Consultancy helps businesses turn digital challenges into clear, workable next steps.
            </p>
            <div className="btn-row">
              <Link className="btn btn--accent" to="/contact/">
                Discuss Your Project
              </Link>
              <Link className="btn btn--ghost" to="/services/">
                Explore Our Services
              </Link>
            </div>
            <p className="hero__note">
              For businesses, entrepreneurs, creators and organizations. We scope honestly and do not promise rankings,
              revenue or other outcomes we cannot control.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="intro-t">
        <div className="wrap two-col">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 id="intro-t" className="h2">
              One consultancy for the digital work around your business.
            </h2>
          </div>
          <div className="prose">
            <p>
              Just In Consultancy covers eight connected services: web development, video editing, AI automation,
              research and writing, data analysis, vibe coding, website security, and SEO and digital marketing.
            </p>
            <p>
              Having them under one roof means the pieces fit together. A website is built with search basics and
              security already considered, an automation connects to the reporting you actually need, and the video
              or articles you publish support the same message.
            </p>
            <p>
              Not sure where to start? Describe the problem on the <Link to="/contact/">contact page</Link> and we
              will suggest the service, or combination of services, that fits.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="groups-t">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Services</p>
            <h2 id="groups-t" className="h2">
              Four areas of work, eight services.
            </h2>
          </div>
          <div className="groups">
            {groups.map((g) => (
              <div className="group" key={g.id}>
                <div>
                  <span className="group__letter">{g.letter}</span>
                  <h3 className="group__name">{g.name}</h3>
                  <p className="group__blurb">{g.blurb}</p>
                </div>
                <ul>
                  {g.services.map((slug) => (
                    <ServiceCard key={slug} slug={slug} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="btn-row">
            <Link className="btn btn--dark" to="/services/">
              See the full services overview
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="work-t">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Selected work</p>
            <h2 id="work-t" className="h2">
              Demonstrations of how we approach projects.
            </h2>
            <p className="muted" style={{ maxWidth: '58ch' }}>
              These are clearly labeled demo and concept projects. They show our process and standards; they are not
              client work, and no results are claimed.
            </p>
          </div>
          <div className="projects">
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
          <div className="btn-row">
            <Link className="btn btn--dark" to="/work/">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="team-t">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Our specialists</p>
            <h2 id="team-t" className="h2">
              A dedicated professional for every service.
            </h2>
            <p className="muted" style={{ maxWidth: '58ch' }}>
              Each service is led by a specialist who does that work every day. Meet them, and view their profiles.
            </p>
          </div>
          <ul className="team-mini">
            {team.map((m) => (
              <TeamCard key={m.id} member={m} compact />
            ))}
          </ul>
          <div className="btn-row">
            <Link className="btn btn--dark" to="/specialists/">
              Meet the Specialists
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="process-t">
        <div className="wrap">
          <p className="eyebrow eyebrow--light">How we work</p>
          <h2 id="process-t" className="h2 h2--light">
            A clear process from first message to handover.
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

      <section className="section" aria-labelledby="why-t">
        <div className="wrap two-col">
          <div>
            <p className="eyebrow">Why work with us</p>
            <h2 id="why-t" className="h2">
              What you can expect.
            </h2>
            <p className="muted">
              Principles we hold ourselves to. <Link to="/about/">More about our approach</Link>.
            </p>
          </div>
          <ol className="principles" style={{ marginTop: 0 }}>
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

      <section className="section" aria-labelledby="blog-t">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">From the blog</p>
            <h2 id="blog-t" className="h2">
              Practical guides, in plain language.
            </h2>
          </div>
          <ul className="blog-list">
            {posts.slice(0, 3).map((p) => (
              <li key={p.slug} className="blog-row">
                <article>
                  <p className="blog-row__meta">
                    <span className="tag">{p.category}</span>
                    <time dateTime={p.date}>{formatDate(p.date)}</time>
                  </p>
                  <h3 className="blog-row__title">
                    <Link to={`/blog/${p.slug}/`}>{p.title}</Link>
                  </h3>
                  <p className="blog-row__excerpt">{p.excerpt}</p>
                </article>
              </li>
            ))}
          </ul>
          <div className="btn-row">
            <Link className="btn btn--dark" to="/blog/">
              Read the Blog
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={homeFaqs} id="home-faq" />

      <CTASection
        title="Let’s work out your next step."
        text="Book a 30-minute consultation, or send a short description of what you need. You will get questions or a proposed scope back before any work begins."
        primary={{ to: '/book/', label: 'Book a Consultation' }}
        secondary={{ to: '/contact/', label: 'Start a Project' }}
      />
    </>
  );
}
