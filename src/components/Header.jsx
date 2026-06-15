import { useEffect, useState } from "react";
import { useVoiceModal } from "../context/VoiceModalContext.jsx";

const LINKS = [
  {
    href: "#services",
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
    href: "#how",
    label: "How it works",
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" />
      </>
    ),
  },
  {
    href: "#contact",
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
          <a className="brand" href="#top" aria-label="Hamza Studio home" onClick={closeMenu}>
            <span className="brand__badge">H</span>
            <span>
              <span className="brand__name">
                Hamza Studio<span className="dot">.</span>
              </span>
              <span className="brand__tag">“Just send me a voice note and consider it done.”</span>
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
              Send Voice Note
            </button>
            <a className="btn btn--primary btn--sm btn--talk" href="#contact">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4L3 21l1.1-3.6A8.4 8.4 0 1 1 21 11.5Z" />
              </svg>
              Let&rsquo;s Talk
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
            <a className="btn btn--primary" href="#contact" onClick={closeMenu}>
              Let&rsquo;s Talk
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
