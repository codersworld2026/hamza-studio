import { useVoiceModal } from "../context/VoiceModalContext.jsx";
import { RisingSun } from "./Motifs.jsx";

export default function CTA() {
  const { open } = useVoiceModal();

  return (
    <section className="cta">
      <div className="cta__sun">
        <RisingSun />
      </div>
      <div className="wrap">
        <span className="cta__eyebrow">Ready when you are</span>
        <h2>
          Start Your <em>Sunny</em> Website
        </h2>
        <p>
          Tell us about your business — drop us a voice note or fill in the form below. We&rsquo;ll
          send back a plan, a price, and a timeline, usually same day.
        </p>
        <div className="cta__ctas">
          <button className="btn btn--cream" onClick={open}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F5D5A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="3" width="6" height="11" rx="3" />
              <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
            </svg>
            Send a Voice Note
          </button>
          <a className="btn btn--teal" href="#contact">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFF6E9" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 7h16M4 12h16M4 17h10" />
            </svg>
            Fill out the form
          </a>
        </div>
      </div>
    </section>
  );
}
