import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection.jsx';
import { articles, topics } from '../data/insights.js';

export default function Insights() {
  return (
    <>
      <section className="hero hero--page">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--light">Insights</p>
            <h1 className="display display--md">Notes on doing digital work well.</h1>
            <p className="lede">
              Articles are being prepared on the topics below. Nothing is published yet, and we will only add pieces
              that have been reviewed and approved.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="latest-t">
        <div className="wrap">
          <p className="eyebrow">Latest</p>
          <h2 id="latest-t" className="h2">
            Articles
          </h2>
          {articles.length === 0 ? (
            <div className="empty-state">
              <h3>First articles coming soon.</h3>
              <p>
                In the meantime, the <Link to="/services/">service pages</Link> explain each area in depth, and the{' '}
                <Link to="/contact/">contact page</Link> is the best way to ask a specific question.
              </p>
            </div>
          ) : (
            <div className="articles">
              {articles.map((a) => (
                <article className="article-card" key={a.slug}>
                  <p className="tag">{a.topic}</p>
                  <h3>{a.title}</h3>
                  <p>{a.summary}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="topics-t">
        <div className="wrap">
          <p className="eyebrow">Topics</p>
          <h2 id="topics-t" className="h2">
            What we plan to cover.
          </h2>
          <div className="topics">
            {topics.map((t) => (
              <div className="topic" key={t.id}>
                <h3>{t.name}</h3>
                <p>{t.text}</p>
                <Link to={`/services/${t.service}/`}>Related service →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a topic you want covered?"
        text="Tell us what you would like to understand better. It helps us decide what to write next."
        primary={{ to: '/contact/', label: 'Contact the Consultancy' }}
        secondary={{ to: '/services/', label: 'Explore Our Services' }}
      />
    </>
  );
}
