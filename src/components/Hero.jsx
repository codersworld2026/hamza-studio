import { useVoiceModal } from "../context/VoiceModalContext.jsx";
import { SERVICES_BY_SLUG } from "../config/services.js";
import { ServiceIcon } from "./icons.jsx";
import { RainbowWave } from "./Motifs.jsx";

const WHAT_WE_DO = [
  { slug: "website-design", label: "We design & build websites" },
  { slug: "app-development", label: "We build web & mobile apps" },
  { slug: "shopify-apps", label: "We build Shopify apps & tools" },
  { slug: "seo", label: "We provide SEO services" },
  { slug: "automation", label: "We automate your busywork" },
];

export default function Hero() {
  const { open } = useVoiceModal();

  return (
    <section className="hero">
      <div className="hero__bg" />
      <div className="hero__dots" />
      <div className="wrap">
        <div className="hero__grid">
          {/* LEFT — clear value proposition */}
          <div className="hero__copy">
            <span className="hero__pill reveal">
              <svg className="dot-spin" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3 2.2 5.2L20 10l-5.2 2.2L12 18l-2.2-5.8L4 10l5.8-1.8Z" />
              </svg>
              Websites, apps &amp; SEO for small businesses
            </span>

            <h1 className="reveal" data-d="1">
              Websites &amp; Apps that Help Businesses{" "}
              <span className="grow">
                Grow
                <svg viewBox="0 0 220 40" preserveAspectRatio="none" fill="none">
                  <path d="M4 26C50 12 110 10 160 18c30 5 48 12 54 16" stroke="#FFC445" strokeWidth="9" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="hero__lede reveal" data-d="2">
              We&rsquo;re a web design, app &amp; SEO studio for small to medium businesses with
              1&ndash;50 employees. We build fast websites, custom apps and Shopify tools, sharpen your
              SEO, and automate the busywork. UK · Qatar · Remote.
            </p>

            <div className="hero__ctas reveal" data-d="2">
              <a className="btn btn--primary" href="/book">
                Book a 30-min strategy call
                <span className="arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </a>
              <button className="btn btn--cream" onClick={open}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F5D5A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="3" width="6" height="11" rx="3" />
                  <path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8" />
                </svg>
                Send a voice note
              </button>
            </div>

            <div className="hero__trust reveal" data-d="3">
              <div className="avas">
                <span className="ava" style={{ background: "#FF6B35" }}>U</span>
                <span className="ava" style={{ background: "#0F5D5A" }}>K</span>
                <span className="ava" style={{ background: "#FFC445", color: "#17233D" }}>Q</span>
                <span className="ava" style={{ background: "#A7C4A1", color: "#17233D" }}>A</span>
              </div>
              <span>Work directly with our team — first message to launch.</span>
            </div>
          </div>

          {/* RIGHT — "What we do" at a glance, linking into service pages */}
          <div className="hero__visual reveal" data-d="2">
            <div className="whatwedo">
              <span className="whatwedo__eyebrow">What we do</span>
              <ul className="whatwedo__list">
                {WHAT_WE_DO.map(({ slug, label }) => (
                  <li key={slug}>
                    <a href={`/services/${slug}`}>
                      <span className="whatwedo__ic">
                        <ServiceIcon name={SERVICES_BY_SLUG[slug].icon} />
                      </span>
                      <span className="whatwedo__label">{label}</span>
                      <span className="whatwedo__arrow">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <a className="whatwedo__all" href="/#services">
                See all services →
              </a>
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
