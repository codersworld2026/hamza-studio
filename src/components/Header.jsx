import { useEffect, useState } from "react";
import { useVoiceModal } from "../context/VoiceModalContext.jsx";
import { BRAND } from "../config/site.js";

const LINKS = [
  {
    href: "/#services",
    label: "Services",
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </>
    ),
  },
  {
    href: "/work",
    label: "Work",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2.5" />
        <path d="M3 9h18M9 22h6" />
      </>
    ),
  },
  {
    href: "/book",
    label: "Book a call",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="17" rx="2.5" />
        <path d="M8 2v4M16 2v4M3 10h18M9 15l2 2 3-4" />
      </>
    ),
  },
  {
    href: "/#contact",
    label: "Contact",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
  },
];

export default function Header() {
  const { open } = useVoiceModal();
  const [stuck, setStuck] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`nav${stuck ? " is-stuck" : ""}${menuOpen ? " menu-open" : ""}`} id="nav">
      <div className="wrap">
        <div className="nav__inner">
          <a className="brand" href="/" aria-label={`${BRAND} home`} onClick={closeMenu}>
            <span className="brand__badge">N</span>
            <span>
              <span className="brand__name">
                {BRAND}
                <span className="dot">.</span>
              </span>
              <span className="brand__tag">Websites &amp; SEO that help SMEs grow</span>
            </span>
          </a>

          <nav className="nav__links" aria-label="Primary">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  {l.icon}
                </svg>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nav__actions">
            <button className="btn btn--cream btn--sm btn--label-hide" onClick={open}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F5D5A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="3" width="6" height="11" rx="3" />
                <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
              </svg>
              Voice Note
            </button>
            <a className="btn btn--primary btn--sm btn--talk" href="/book">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="17" rx="2.5" />
                <path d="M8 2v4M16 2v4M3 10h18" />
              </svg>
              Book a call
            </a>
            <button
              className="nav__toggle"
              aria-label="Menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#17233D" strokeWidth="2.6" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#17233D" strokeWidth="2.6" strokeLinecap="round">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <div className={`nav__menu${menuOpen ? " open" : ""}`}>
          <div className="nav__menu-inner">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={closeMenu}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  {l.icon}
                </svg>
                {l.label}
              </a>
            ))}
            <button
              className="btn btn--cream"
              onClick={() => {
                closeMenu();
                open();
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F5D5A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="3" width="6" height="11" rx="3" />
                <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
              </svg>
              Send a Voice Note
            </button>
            <a className="btn btn--primary" href="/book" onClick={closeMenu}>
              Book a strategy call
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
