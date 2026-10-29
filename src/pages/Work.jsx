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
            <h1 className="display display--md">Digital solutions designed around your business.</h1>
            <p className="lede">
              Explore our work across web development, AI automation, SEO, digital marketing, and data analysis. 
              Discover how we approach business challenges, connect technology, and build practical digital solutions.
            </p>
          </div>
        </div>
      </section>
      <section className="section section--tint" aria-labelledby="real-t">
        <div className="wrap two-col">
          <div>
            <p className="eyebrow">Adding real projects</p>
            <h2 id="real-t" className="h2">
              Let's solve your next digital challenge.
            </h2>
          </div>
          <div className="prose">
            <p>
              Tell us what your business needs. 
              We'll discuss your goals, recommend the right digital services, and outline a practical approach to bringing your project to life.
            </p>
            <div className="btn-row">
              <Link className="btn btn--dark" to="/contact/">
                Discuss Your Project
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
