import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection.jsx';
import { posts, topics, formatDate, readingMinutes } from '../data/blog.js';
import { getService } from '../data/services.js';

export default function Blog() {
  return (
    <>
      <section className="hero hero--page">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--light">Blog</p>
            <h1 className="display display--md">Practical guides on doing digital work well.</h1>
            <p className="lede">
              Plain-language articles on websites, automation, security, SEO, video, writing and data, written to help
              you make better decisions.
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
          <ul className="blog-list">
            {posts.map((p) => (
              <li key={p.slug} className="blog-row">
                <article>
                  <p className="blog-row__meta">
                    <span className="tag">{p.category}</span>
                    <time dateTime={p.date}>{formatDate(p.date)}</time>
                    <span>{readingMinutes(p)} min read</span>
                  </p>
                  <h3 className="blog-row__title">
                    <Link to={`/blog/${p.slug}/`}>{p.title}</Link>
                  </h3>
                  <p className="blog-row__excerpt">{p.excerpt}</p>
                  <Link className="blog-row__more" to={`/blog/${p.slug}/`}>
                    Read the article <span aria-hidden="true">→</span>
                    <span className="sr-only">: {p.title}</span>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="topics-t">
        <div className="wrap">
          <p className="eyebrow">Topics</p>
          <h2 id="topics-t" className="h2">
            What we write about.
          </h2>
          <div className="topics">
            {topics.map((t) => (
              <div className="topic" key={t.id}>
                <h3>{t.name}</h3>
                <p>{t.text}</p>
                <Link to={`/services/${t.service}/`}>{getService(t.service).name} service →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a topic you want covered?"
        text="Tell us what you would like to understand better. It helps us decide what to write next."
        primary={{ to: '/contact/', label: 'Contact the Consultancy' }}
        secondary={{ to: '/book/', label: 'Book a Consultation' }}
      />
    </>
  );
}
