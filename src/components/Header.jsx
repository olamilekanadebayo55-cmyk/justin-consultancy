import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Wordmark from './Wordmark.jsx';
import { groups } from '../data/site.js';
import { getService } from '../data/services.js';

const simpleLinks = [
  { to: '/specialists/', label: 'Specialists' },
  { to: '/work/', label: 'Our Work' },
  { to: '/blog/', label: 'Blog' },
  { to: '/about/', label: 'About' },
];

function ServicesMenuContent() {
  return (
    <div className="mega__grid">
      {groups.map((g) => (
        <div key={g.id} className="mega__group">
          <p className="mega__title">{g.name}</p>
          <ul>
            {g.services.map((slug) => (
              <li key={slug}>
                <NavLink to={`/services/${slug}/`}>{getService(slug).name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="mega__all">
        <NavLink to="/services/" end>
          All services overview →
        </NavLink>
      </div>
    </div>
  );
}

export default function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);
  const menuBtnRef = useRef(null);
  const mobileBtnRef = useRef(null);

  // Close menus whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  // Escape closes menus; click outside closes the desktop dropdown.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      if (menuOpen) {
        setMenuOpen(false);
        menuBtnRef.current?.focus();
      }
      if (mobileOpen) {
        setMobileOpen(false);
        mobileBtnRef.current?.focus();
      }
    };
    const onClick = (e) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [menuOpen, mobileOpen]);

  const servicesActive = pathname.startsWith('/services');

  return (
    <header className="site-header">
      <div className="wrap site-header__bar">
        <Wordmark />

        <nav className="nav" aria-label="Primary">
          <div className="nav__item" ref={menuRef}>
            <button
              ref={menuBtnRef}
              type="button"
              className={`nav__link nav__btn${servicesActive ? ' is-active' : ''}`}
              aria-expanded={menuOpen}
              aria-controls="services-menu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              Services
              <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" className={menuOpen ? 'flip' : ''}>
                <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            <div id="services-menu" className="mega" hidden={!menuOpen}>
              <ServicesMenuContent />
            </div>
          </div>
          {simpleLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className="nav__link">
              {l.label}
            </NavLink>
          ))}
          <Link to="/book/" className="btn btn--accent btn--sm">
            Book a Consultation
          </Link>
        </nav>

        <button
          ref={mobileBtnRef}
          type="button"
          className="burger"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
          <span className={`burger__bars${mobileOpen ? ' is-open' : ''}`} aria-hidden="true" />
        </button>
      </div>

      <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile" hidden={!mobileOpen}>
        <div className="wrap">
          {groups.map((g) => (
            <div key={g.id} className="mobile-nav__group">
              <p className="mega__title">{g.name}</p>
              <ul>
                {g.services.map((slug) => (
                  <li key={slug}>
                    <NavLink to={`/services/${slug}/`}>{getService(slug).name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <ul className="mobile-nav__main">
            <li>
              <NavLink to="/services/" end>
                All services
              </NavLink>
            </li>
            {simpleLinks.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to}>{l.label}</NavLink>
              </li>
            ))}
          </ul>
          <Link to="/book/" className="btn btn--accent btn--block">
            Book a Consultation
          </Link>
          <Link to="/contact/" className="btn btn--ghost btn--block" style={{ marginTop: '0.75rem' }}>
            Start a Project
          </Link>
        </div>
      </nav>
    </header>
  );
}
