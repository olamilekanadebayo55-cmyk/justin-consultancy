import { Link } from 'react-router-dom';
import { site } from '../data/site.js';

const params = 'background_color=f6f2ea&text_color=121830&primary_color=2342d6&hide_gdpr_banner=1';

export default function Book() {
  const url = site.booking.calendlyUrl;
  return (
    <>
      <section className="hero hero--page hero--light">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--light">Consultation</p>
            <h1 className="display display--md">Book a 30-minute consultation.</h1>
            <p className="lede">
              Choose a time that suits you. We will talk through your project, which services fit, and sensible next
              steps. No obligation to proceed.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="cal-t">
        <div className="wrap book-grid">
          <div>
            <h2 id="cal-t" className="h2">
              Pick a time
            </h2>
            <div className="book-frame">
              <iframe
                title="Schedule a 30-minute consultation with Just In Consultancy"
                src={`${url}?${params}`}
                loading="lazy"
                width="100%"
                height="720"
              />
            </div>
            <p className="form__fine" style={{ marginTop: '1rem' }}>
              Scheduling is provided by Calendly, which loads its own content in the frame above. If the calendar does not
              appear, <a href={url} target="_blank" rel="noopener noreferrer">open it in a new tab<span className="sr-only"> (opens in a new tab)</span></a>.
            </p>
          </div>
          <aside aria-label="What to expect">
            <div className="aside-box">
              <h2>What to expect</h2>
              <ol>
                <li>You choose a 30-minute slot and receive a calendar confirmation.</li>
                <li>We discuss what you are trying to achieve and what you have already tried.</li>
                <li>We suggest which service, or combination of services, fits, and what a scope could look like.</li>
              </ol>
            </div>
            <div className="aside-box">
              <h2>Prefer to write?</h2>
              <p>
                <Link to="/contact/">Send a project inquiry</Link> instead and we will reply with questions or a proposed
                scope.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
