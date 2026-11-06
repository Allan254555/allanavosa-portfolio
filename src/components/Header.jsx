import { useEffect, useState } from 'react';
import { navLinks, profile } from '../data/portfolio.js';

export default function Header({ current }) {
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState('');

  // On the home page, About and Contact are sections: highlight whichever is mid-screen.
  useEffect(() => {
    if (current !== 'home' || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setSection(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    document.querySelectorAll('main > section[id], main > div[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [current]);

  const isActive = (link) => (link.section ? current === 'home' && section === link.section : current === link.page);

  return (
    <header className="top">
      <div className="wrap">
        <a className="brand" href="/">
          <span className="mark" aria-hidden="true" />{profile.name.toUpperCase()}
        </a>
        <nav className={`links${open ? ' open' : ''}`} id="nav">
          {navLinks.map((link) => {
            const active = isActive(link);
            return (
              <a
                key={link.href}
                href={link.href}
                className={active ? 'on' : undefined}
                aria-current={active && !link.section ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
        <button
          className="burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="nav"
          onClick={() => setOpen((o) => !o)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
    </header>
  );
}
