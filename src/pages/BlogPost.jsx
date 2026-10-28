import { Link, useParams } from 'react-router-dom';
import CTASection from '../components/CTASection.jsx';
import NotFound from './NotFound.jsx';
import { BLOG_AUTHOR, formatDate, getPost, posts, readingMinutes, slugify } from '../data/blog.js';
import { getService } from '../data/services.js';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);
  if (!post) return <NotFound />;
  const service = getService(post.service);
  const headings = post.body.filter((b) => b.h2).map((b) => b.h2);
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <section className="hero hero--page">
        <div className="wrap">
          <div className="hero__copy">
            <nav aria-label="Breadcrumb" className="crumbs">
              <ol>
                <li>
                  <Link to="/blog/">Blog</Link>
                </li>
                <li aria-current="page">{post.category}</li>
              </ol>
            </nav>
            <h1 className="display display--md">{post.title}</h1>
            <p className="lede">{post.excerpt}</p>
            <p className="post-meta">
              <span>By {BLOG_AUTHOR}</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>{readingMinutes(post)} min read</span>
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap post-layout">
          <aside className="toc" aria-label="In this article">
            <p className="toc__title">In this article</p>
            <ol>
              {headings.map((h) => (
                <li key={h}>
                  <a href={`#${slugify(h)}`}>{h}</a>
                </li>
              ))}
            </ol>
          </aside>

          <article className="post">
            {post.body.map((b, i) => {
              if (b.h2) return <h2 key={i} id={slugify(b.h2)}>{b.h2}</h2>;
              if (b.p) return <p key={i}>{b.p}</p>;
              if (b.ul) return <ul key={i}>{b.ul.map((x) => <li key={x}>{x}</li>)}</ul>;
              if (b.ol) return <ol key={i}>{b.ol.map((x) => <li key={x}>{x}</li>)}</ol>;
              return null;
            })}

            <aside className="callout" aria-label="Related service">
              <p className="callout__title">Need help with this?</p>
              <p>
                Our <Link to={`/services/${service.slug}/`}>{service.name}</Link> service covers exactly this. Tell us about
                your situation or talk it through on a call.
              </p>
              <div className="btn-row">
                <Link className="btn btn--dark btn--sm" to={`/contact/?service=${service.slug}`}>
                  Request a Quote
                </Link>
                <Link className="btn btn--ghost-dark btn--sm" to="/book/">
                  Book a Consultation
                </Link>
              </div>
            </aside>
          </article>
        </div>
      </section>

      {more.length > 0 && (
        <section className="section section--tint" aria-labelledby="more-t">
          <div className="wrap">
            <p className="eyebrow">Keep reading</p>
            <h2 id="more-t" className="h2">
              More from the blog
            </h2>
            <ul className="blog-list">
              {more.map((p) => (
                <li key={p.slug} className="blog-row">
                  <article>
                    <p className="blog-row__meta">
                      <span className="tag">{p.category}</span>
                      <span>{readingMinutes(p)} min read</span>
                    </p>
                    <h3 className="blog-row__title">
                      <Link to={`/blog/${p.slug}/`}>{p.title}</Link>
                    </h3>
                    <p className="blog-row__excerpt">{p.excerpt}</p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CTASection
        primary={{ to: '/book/', label: 'Book a Consultation' }}
        secondary={{ to: '/blog/', label: 'Back to the Blog' }}
      />
    </>
  );
}
