import { useEffect } from "react";
import { SERVICES_BY_SLUG } from "../config/services.js";
import { ServiceIcon } from "../components/icons.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";

export default function ServicePage({ slug }) {
  const service = SERVICES_BY_SLUG[slug];

  useEffect(() => {
    if (service) document.title = service.metaTitle;
  }, [service]);

  if (!service) {
    return (
      <section className="page-hero section">
        <div className="wrap">
          <h1>Service not found</h1>
          <p className="lede">That page doesn&rsquo;t exist. <a href="/#services">See all our services →</a></p>
        </div>
      </section>
    );
  }

  const related = (service.related || [])
    .map((s) => SERVICES_BY_SLUG[s])
    .filter(Boolean);

  return (
    <article className="servicepage">
      <section className="page-hero section">
        <div className="hero__bg" />
        <div className="wrap">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/#services" },
              { label: service.navLabel },
            ]}
          />
          <span className="page-hero__ic">
            <ServiceIcon name={service.icon} />
          </span>
          <h1>{service.h1}</h1>
          <p className="lede">{service.lede}</p>
          <div className="page-hero__ctas">
            <a className="btn btn--primary" href="/book">
              Book a strategy call
              <span className="arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </a>
            <a className="btn btn--cream" href="/#contact">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <section className="svc-body section">
        <div className="wrap">
          <div className="svc-body__grid">
            <div className="svc-body__main">
              {service.intro.map((p, i) => (
                <p className="svc-body__p" key={i}>{p}</p>
              ))}

              <h2>What&rsquo;s included</h2>
              <ul className="ticklist">
                {service.includes.map((item, i) => (
                  <li key={i}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m4 13 5 5L20 6" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <h2>How it works</h2>
              <ol className="processlist">
                {service.process.map((step, i) => (
                  <li key={i}>
                    <span className="processlist__num">{i + 1}</span>
                    <div>
                      <b>{step.title}</b>
                      <p>{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>

              {service.faqs?.length > 0 && (
                <>
                  <h2>FAQs</h2>
                  <div className="faqs">
                    {service.faqs.map((f, i) => (
                      <details className="faq" key={i}>
                        <summary>{f.q}</summary>
                        <p>{f.a}</p>
                      </details>
                    ))}
                  </div>
                </>
              )}
            </div>

            <aside className="svc-aside">
              <div className="aside-card">
                <h3>Ready to grow?</h3>
                <p>Book a free 30-minute strategy call, or send a quick message — we reply fast.</p>
                <a className="btn btn--primary" href="/book">Book a call</a>
                <a className="btn btn--cream" href="/#contact">Send a message</a>
              </div>

              {related.length > 0 && (
                <div className="aside-card">
                  <h3>Related services</h3>
                  <ul className="aside-links">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <a href={`/services/${r.slug}`}>
                          <ServiceIcon name={r.icon} />
                          {r.navLabel}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </article>
  );
}
