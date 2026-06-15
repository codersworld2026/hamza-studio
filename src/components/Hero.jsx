import { useVoiceModal } from "../context/VoiceModalContext.jsx";
import { RainbowWave, SmileySun, StampBadge, TreatSticker } from "./Motifs.jsx";

export default function Hero() {
  const { open } = useVoiceModal();

  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="hero__dots" />
      <div className="wrap">
        <div className="hero__grid">
          {/* LEFT */}
          <div className="hero__copy">
            <span className="hero__pill reveal">
              <svg className="dot-spin" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3 2.2 5.2L20 10l-5.2 2.2L12 18l-2.2-5.8L4 10l5.8-1.8Z" />
              </svg>
              Modern websites. Real results.
            </span>

            <h1 className="reveal" data-d="1">
              Websites That<br />
              Help Small<br />
              Businesses{" "}
              <span className="grow">
                Grow
                <svg viewBox="0 0 220 40" preserveAspectRatio="none" fill="none">
                  <path d="M4 26C50 12 110 10 160 18c30 5 48 12 54 16" stroke="#FFC445" strokeWidth="9" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <div className="hero__voice reveal" data-d="1">
              <span className="mic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="3" width="6" height="11" rx="3" />
                  <path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8" />
                </svg>
              </span>
              <p>
                Just send me a voice note and <span className="done">consider it done.</span>
              </p>
            </div>

            <p className="hero__lede reveal" data-d="2">
              I build clean, modern websites for small businesses, freelancers and startups —
              designed to help you look professional and win more business.
            </p>

            <div className="hero__ctas reveal" data-d="2">
              <a className="btn btn--primary" href="#contact">
                Start Your Website
                <span className="arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </a>
              <button className="btn btn--cream" onClick={open}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F5D5A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4L3 21l1.1-3.6A8.4 8.4 0 1 1 21 11.5Z" />
                  <path d="M9 10.5v2M12 9v5M15 10.5v2" />
                </svg>
                Send a Voice Note
              </button>
            </div>

            <div className="hero__trust reveal" data-d="3">
              <div className="avas">
                <span className="ava" style={{ background: "#FF6B35" }}>A</span>
                <span className="ava" style={{ background: "#0F5D5A" }}>M</span>
                <span className="ava" style={{ background: "#FFC445", color: "#17233D" }}>S</span>
                <span className="ava" style={{ background: "#A7C4A1", color: "#17233D" }}>J</span>
              </div>
              <span>Work directly with Hamza — first message to launch.</span>
            </div>
          </div>

          {/* RIGHT — retro browser mockup */}
          <div className="hero__visual reveal" data-d="2">
            <svg className="sparkle" style={{ top: "-12px", right: "18%", width: "34px" }} viewBox="0 0 24 24" fill="currentColor">
              <path d="m12 0 2.6 8.4L24 12l-9.4 3.6L12 24l-2.6-8.4L0 12l9.4-3.6Z" />
            </svg>
            <svg className="sparkle" style={{ bottom: "8%", left: "-10px", width: "26px", animationDelay: "1s" }} viewBox="0 0 24 24" fill="currentColor">
              <path d="m12 0 2.6 8.4L24 12l-9.4 3.6L12 24l-2.6-8.4L0 12l9.4-3.6Z" />
            </svg>

            <div className="browser">
              <div className="browser__bar">
                <div className="dotrow">
                  <i style={{ background: "#FF6B35" }} />
                  <i style={{ background: "#FFC445" }} />
                  <i style={{ background: "#A7C4A1" }} />
                </div>
                <div className="browser__url">hamza.studio</div>
              </div>
              <div className="browser__screen">
                <div className="mini">
                  <span className="mini__eyebrow">Good coffee, good vibes</span>
                  <h3>
                    Start Your <em>Sunny</em> Morning
                  </h3>
                  <div className="mini__btns">
                    <span className="p p1" />
                    <span className="p p2" />
                  </div>
                  <div className="mini__sun-wrap">
                    <SmileySun face="#FF6B35" ray="#FFC445" />
                  </div>
                </div>
              </div>
            </div>

            {/* floating stickers */}
            <div className="float-badge float-badge--stamp" style={{ "--rot": "-8deg" }}>
              <StampBadge id="hero" />
            </div>
            <div className="float-badge float-badge--treat" style={{ "--rot": "7deg" }}>
              <TreatSticker />
            </div>
          </div>
        </div>
      </div>

      {/* rainbow wave divider */}
      <div className="hero__wave">
        <RainbowWave h={132} />
      </div>
    </section>
  );
}
