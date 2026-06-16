import Breadcrumb from "../components/Breadcrumb.jsx";

// Placeholder slots — ready for real content. No fabricated brands, quotes or numbers.
const SLOTS = [1, 2, 3, 4, 5, 6];

export default function Work() {
  return (
    <article className="workpage">
      <section className="page-hero section">
        <div className="hero__bg" />
        <div className="wrap">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Work" }]} />
          <h1>Our work</h1>
          <p className="lede">
            A look at websites and SEO projects we&rsquo;ve delivered for SMEs — with the results that
            matter. UK, Qatar and remote.
          </p>
        </div>
      </section>

      <section className="work-body section">
        <div className="wrap">
          <div className="legal__note" role="note">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M10.3 3.6 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0Z" />
              <path d="M12 9v4M12 17h.01" />
            </svg>
            <p>
              <strong>Sample layout — awaiting your real content.</strong> Send screenshots, a one-line
              outcome and a client quote for each project and we&rsquo;ll drop them straight in. Nothing
              here is invented.
            </p>
          </div>

          <div className="work-grid">
            {SLOTS.map((n) => (
              <article className="work-card" key={n}>
                <div className="work-shot" role="img" aria-label={`Placeholder for project ${n} screenshot`}>
                  <span>Screenshot</span>
                </div>
                <div className="work-card__body">
                  <span className="work-card__tag">[ Project type ]</span>
                  <h3>[ Project name ]</h3>
                  <p>[ One line on what we did and the outcome — e.g. “New site + SEO, more enquiries.” ]</p>
                </div>
              </article>
            ))}
          </div>

          <div className="work-quotes">
            <div className="section-head">
              <span className="eyebrow">What clients say</span>
              <h2>
                Real words from <em>real clients</em>
              </h2>
              <p>Genuine testimonials will appear here once you share them — no placeholders go live.</p>
            </div>
            <div className="work-quotes__grid">
              {[1, 2, 3].map((n) => (
                <blockquote className="work-quote" key={n}>
                  <div className="mark">“</div>
                  <p>[ Client testimonial goes here ]</p>
                  <footer>
                    <span className="work-quote__ava" aria-hidden="true">–</span>
                    <span>[ Client name, business ]</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>

          <div className="work-cta">
            <h2>Want to be our next case study?</h2>
            <p>Let&rsquo;s build something worth showing off.</p>
            <div className="work-cta__btns">
              <a className="btn btn--primary" href="/book">Book a strategy call</a>
              <a className="btn btn--cream" href="/#contact">Get in touch</a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
