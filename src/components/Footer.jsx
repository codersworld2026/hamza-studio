import { useVoiceModal } from "../context/VoiceModalContext.jsx";
import { SOCIALS, WHATSAPP_URL, EMAIL_URL } from "../config/contact.js";
import { BRAND } from "../config/site.js";
import { SERVICES } from "../config/services.js";
import { StampBadge } from "./Motifs.jsx";

const EMAIL = EMAIL_URL.replace(/^mailto:/, "");

export default function Footer() {
  const { open } = useVoiceModal();

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand">
            <a className="brand" href="/">
              <span className="brand__badge">N</span>
              <span className="brand__name">
                {BRAND}
                <span className="dot">.</span>
              </span>
            </a>
            <p>
              We build websites, apps and Shopify tools for small to medium businesses with
              1&ndash;50 employees in the UK, Qatar and beyond — plus the SEO that helps people find
              them. Good days, all ways.
            </p>
            <div className="footer__stamp">
              <StampBadge id="foot" />
            </div>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <a href={`/services/${s.slug}`}>{s.navLabel}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              <li><a href="/work">Work</a></li>
              <li><a href="/book">Book a call</a></li>
              <li><a href="/#contact">Contact</a></li>
              <li><a href="/#areas">Areas we serve</a></li>
              <li><a href="/privacy">Privacy</a></li>
            </ul>
          </div>

          <div>
            <h4>Say hi</h4>
            <ul>
              <li>
                <a
                  href="/#contact"
                  onClick={(e) => {
                    if (window.location.pathname === "/") {
                      e.preventDefault();
                      open();
                    }
                  }}
                >
                  Send a voice note
                </a>
              </li>
              <li><a href={EMAIL_URL}>{EMAIL}</a></li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer">
                  @hamzastudio86
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {BRAND}. Websites, apps &amp; SEO for small businesses · UK · Qatar · Remote.</span>
          <div className="footer__social">
            <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4L3 21l1.1-3.6A8.4 8.4 0 1 1 21 11.5Z" />
                <path d="M8.5 9.5c0 4 2 6 6 6" />
              </svg>
            </a>
            <a href={SOCIALS.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.5 3c.35 2.2 1.6 3.6 3.7 3.85v2.55c-1.25.12-2.45-.18-3.6-.82v5.95c0 3.4-2.7 6-6 6-2.95 0-5.45-2.1-5.9-4.95-.5-3.25 1.85-6.05 5-6.35v2.6c-1.5.27-2.6 1.6-2.45 3.15.13 1.45 1.4 2.55 2.85 2.5 1.6-.05 2.75-1.35 2.75-3V3h3.65Z" />
              </svg>
            </a>
            <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4.7 18 5 18 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
