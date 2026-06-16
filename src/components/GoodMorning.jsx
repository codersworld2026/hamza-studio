import { SmileySun, StampBadge, TreatSticker } from "./Motifs.jsx";

export default function GoodMorning() {
  return (
    <section className="showcase section">
      <div className="wrap">
        <div className="showcase__grid">
          <div className="showcase__copy reveal">
            <span className="eyebrow">A little personality</span>
            <h2>
              Sites that feel like a <em>good morning</em>
            </h2>
            <p>
              Modern doesn&rsquo;t have to mean cold. We craft warm, characterful designs that feel
              human — the kind of site your customers actually enjoy using, on every device.
            </p>
            <a className="btn btn--primary" href="/work">
              See our work
              <span className="arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </a>
          </div>

          <div className="hero__visual showcase__visual reveal" data-d="1">
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
                <div className="browser__url">yourbusiness.co.uk</div>
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

            <div className="float-badge float-badge--stamp" style={{ "--rot": "-8deg" }}>
              <StampBadge id="showcase" />
            </div>
            <div className="float-badge float-badge--treat" style={{ "--rot": "7deg" }}>
              <TreatSticker />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
