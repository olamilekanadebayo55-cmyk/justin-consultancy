import { Link } from 'react-router-dom';
import Wordmark from './Wordmark.jsx';
import { groups, site } from '../data/site.js';
import { getService } from '../data/services.js';

export default function Footer() {
  const { contact, social } = site;
  const socials = Object.entries(social).filter(([, url]) => url);
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__grid">
        <div className="site-footer__brand">
          <Wordmark light />
          <p>
            Practical digital services: web, video, automation, research, data, security and marketing.
          </p>
        <div className="btn-row" style={{ marginTop: 0 }}>
            <Link to="/book/" className="btn btn--accent btn--sm">
              Book a Consultation
            </Link>
            <Link to="/contact/" className="btn btn--ghost btn--sm">
              Start a Project
            </Link>
          </div>
          {(contact.email || contact.phone || contact.whatsapp || contact.location || socials.length > 0) && (
            <ul className="site-footer__contact">
              {contact.email && (
                <li>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </li>
              )}
              {contact.phone && (
                <li>
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
                </li>
              )}
              {contact.whatsapp && <li>WhatsApp: {contact.whatsapp}</li>}
              {contact.location && <li>{contact.location}</li>}
              {socials.map(([name, url]) => (
                <li key={name}>
                  <a href={url} rel="noopener noreferrer" target="_blank">
                    {name[0].toUpperCase() + name.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <nav aria-label="Services" className="site-footer__services">
          {groups.map((g) => (
            <div key={g.id}>
              <p className="footer-title">{g.name}</p>
              <ul>
                {g.services.map((slug) => (
                  <li key={slug}>
                    <Link to={`/services/${slug}/`}>{getService(slug).name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <nav aria-label="Company">
          <p className="footer-title">Company</p>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services/">All services</Link>
            </li>
            <li>
              <Link to="/specialists/">Specialists</Link>
            </li>
            <li>
              <Link to="/work/">Our Work</Link>
            </li>
            <li>
              <Link to="/blog/">Blog</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/book/">Book a Consultation</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="wrap site-footer__legal">
        <p>© {new Date().getFullYear()} Just In Consultancy. All rights reserved.</p>
        <p>Portfolio items are labeled concept or demo projects unless stated otherwise.</p>
      </div>
    </footer>
  );
}
