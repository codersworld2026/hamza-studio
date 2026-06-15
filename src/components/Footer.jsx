import { useVoiceModal } from "../context/VoiceModalContext.jsx";
import { SOCIALS, WHATSAPP_URL, EMAIL_URL } from "../config/contact.js";
import { StampBadge } from "./Motifs.jsx";

const EMAIL = EMAIL_URL.replace(/^mailto:/, "");

export default function Footer() {
  const { open } = useVoiceModal();

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand">
            <a className="brand" href="#top">
              <span className="brand__badge">H</span>
              <span className="brand__name">
                Hamza Studio<span className="dot">.</span>
              </span>
            </a>
            <p>
              Modern websites for small businesses that want to look professional and win more
              business. Good days, all ways.
            </p>
            <div className="footer__stamp">
              <StampBadge id="foot" />
            </div>
          </div>

          <div>
            <h4>Studio</h4>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#how">How it works</a></li>
              <li><a href="#contact">Get a quote</a></li>
              <li><a href="#top">About Hamza</a></li>
            </ul>
          </div>

          <div>
            <h4>Get started</h4>
            <ul>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    open();
                  }}
                >
                  Send a voice note
                </a>
              </li>
              <li><a href={EMAIL_URL}>Email me</a></li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li><a href="#contact">Book a call</a></li>
            </ul>
          </div>

          <div>
            <h4>Say hi</h4>
            <ul>
              <li><a href={EMAIL_URL}>{EMAIL}</a></li>
              <li>
                <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer">
                  @hamzastudio86
                </a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Hamza Studio. Built by hand, launched fast.</span>
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
            <a href={SOCIALS.x} target="_blank" rel="noopener noreferrer" aria-label="X">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5 3h3l-7 8 8.2 10h-6.4l-5-6.1L8 21H5l7.5-8.6L4.6 3H11l4.5 5.6Z" />
              </svg>
            </a>
            <a href="#privacy" aria-label="Privacy policy" style={{ width: "auto", borderRadius: "999px", padding: "0 16px", fontWeight: 700, fontSize: ".82rem" }}>
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
