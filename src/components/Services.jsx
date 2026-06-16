import { SERVICES } from "../config/services.js";
import { ServiceIcon } from "./icons.jsx";

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">What we do</span>
          <h2>
            Everything your SME <em>needs</em> online
          </h2>
          <p>
            From first build to ongoing growth — web design, redesign and SEO for SMEs in the UK,
            Qatar and beyond. One team, start to finish.
          </p>
        </div>

        <div className="svc-grid">
          {SERVICES.map((s, i) => (
            <a className="svc reveal" data-d={String(i % 4)} key={s.slug} href={`/services/${s.slug}`}>
              <span className="svc__chip">
                <ServiceIcon name={s.icon} />
              </span>
              <div>
                <h3>{s.cardTitle}</h3>
                <p>{s.cardDesc}</p>
                <span className="svc__more">
                  Learn more
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
