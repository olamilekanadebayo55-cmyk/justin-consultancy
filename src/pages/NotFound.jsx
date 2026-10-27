import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="hero notfound">
      <div className="wrap">
        <p className="notfound__code" aria-hidden="true">
          404
        </p>
        <h1 className="display display--md">This page could not be found.</h1>
        <p className="lede">The address may be mistyped, or the page may have moved. These links will get you back on track.</p>
        <div className="btn-row">
          <Link className="btn btn--accent" to="/">
            Go to the homepage
          </Link>
          <Link className="btn btn--ghost" to="/services/">
            Explore Our Services
          </Link>
          <Link className="btn btn--ghost" to="/contact/">
            Contact the Consultancy
          </Link>
        </div>
      </div>
    </section>
  );
}
