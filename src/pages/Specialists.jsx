import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection.jsx';
import TeamCard from '../components/TeamCard.jsx';
import { team } from '../data/team.js';

export default function Specialists() {
  return (
    <>
      <section className="hero hero--page">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--light">Our specialists</p>
            <h1 className="display display--md">A dedicated specialist for every service.</h1>
            <p className="lede">
              Each service is led by a professional who works in that field day to day. You can discuss your project with
              them through us, and view their individual profiles where linked below.
            </p>
            <div className="btn-row">
              <Link className="btn btn--accent" to="/book/">
                Book a Consultation
              </Link>
              <Link className="btn btn--ghost" to="/services/">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="team-t">
        <div className="wrap">
          <h2 id="team-t" className="h2">
            Meet the team behind Just In Consultancy
          </h2>
          <div className="prose" style={{ marginTop: '1.25rem' }}>
            <p>
              <strong>
                We’re a team of digital specialists helping businesses solve practical technology and growth
                challenges.
              </strong>
            </p>
            <p>
              Our expertise spans web development, AI automation, data analysis, video editing, research and content
              writing, rapid prototyping, website security, SEO and digital marketing.
            </p>
            <p>
              We bring the right skills together based on each project—whether you need a high-performing website, an
              automated workflow, better data insights, engaging content, or improved online visibility.
            </p>
            <p>
              Our approach is simple: understand the problem, build the right solution, and deliver work that creates
              real value.
            </p>
          </div>
          <div className="team-grid">
            {team.map((m) => (
              <TeamCard key={m.id} member={m} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="how-t">
        <div className="wrap two-col">
          <div>
            <p className="eyebrow">Working with a specialist</p>
            <h2 id="how-t" className="h2">
              Not sure who you need?
            </h2>
          </div>
          <div className="prose">
            <p>
              Many projects involve more than one specialist, for example a new website with SEO and security work. Tell
              us what you are trying to achieve and we will recommend who should be involved.
            </p>
            <div className="btn-row">
              <Link className="btn btn--dark" to="/contact/">
                Start a Project
              </Link>
              <Link className="btn btn--ghost-dark" to="/book/">
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Talk to the right specialist."
        text="Book a 30-minute consultation or send a project inquiry and we will connect you with the right person."
        primary={{ to: '/book/', label: 'Book a Consultation' }}
        secondary={{ to: '/contact/', label: 'Start a Project' }}
      />
    </>
  );
}
