import { useVoiceModal } from "../context/VoiceModalContext.jsx";
import { EMAIL_URL } from "../config/contact.js";
import { RisingSun } from "./Motifs.jsx";

export default function CTA() {
  const { open } = useVoiceModal();

  return (
    <section className="cta" id="contact">
      <div className="cta__sun">
        <RisingSun />
      </div>
      <div className="wrap">
        <span className="cta__eyebrow">Ready when you are</span>
        <h2>
          Start Your <em>Sunny</em> Website
        </h2>
        <p>
          Tell me about your business in a quick voice note. I&rsquo;ll send back a plan, a price, and
          a timeline — usually same day.
        </p>
        <div className="cta__ctas">
          <button className="btn btn--cream" onClick={open}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F5D5A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="3" width="6" height="11" rx="3" />
              <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
            </svg>
            Send a Voice Note
          </button>
          <a className="btn btn--teal" href={EMAIL_URL}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFF6E9" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2.5" />
              <path d="m4 7 8 6 8-6" />
            </svg>
            Email me instead
          </a>
        </div>
      </div>
    </section>
  );
}
