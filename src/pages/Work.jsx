import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/projects.js';

export default function Work() {
  return (
    <>
      <section className="hero hero--page">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--light">Our work</p>
            <h1 className="display display--md">Demonstrations, honestly labeled.</h1>
            <p className="lede">
              Real client projects will appear here once they are available and approved for publication. Until then,
              these concept and demo projects show how we approach each service.
            </p>
          </div>
        </div>
      </section>
      <section className="section section--tint" aria-labelledby="real-t">
        <div className="wrap two-col">
          <div>
            <p className="eyebrow">Adding real projects</p>
            <h2 id="real-t" className="h2">
              Have a similar project in mind?
            </h2>
          </div>
          <div className="prose">
            <p>
              Tell us what you are trying to do and we will explain how we would approach it, what it would involve
              and what we would need from you.
            </p>
            <div className="btn-row">
              <Link className="btn btn--dark" to="/contact/">
                Discuss a Similar Project
              </Link>
              <Link className="btn btn--ghost-dark" to="/services/">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
