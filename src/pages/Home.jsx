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
              One consultancy for your digital growth.
            </h2>
          </div>
          <div className="prose">
            <p>
              Just In Consultancy brings web development, SEO, digital marketing, AI automation, data analysis, content
              creation, video editing, website security, and rapid prototyping together under one roof.
            </p>
            <p>
              We help businesses build a stronger online presence, automate repetitive processes, improve website
              performance, create better content, and use technology to support sustainable digital growth.
            </p>
            <p>
              Instead of managing multiple specialists, you get one connected team focused on understanding your goals,
              solving the right problems, and delivering practical digital solutions.
            </p>
            <p>
              Not sure what you need? <Link to="/contact/">Tell us what you’re trying to achieve</Link>, and we’ll help
              you find the right solution.
            </p>
          </div>
        </div>
      </section>
