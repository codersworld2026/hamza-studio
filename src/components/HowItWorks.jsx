export default function HowItWorks() {
  return (
    <section className="how section" id="how">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">How it works</span>
          <h2>
            Three steps to a site that <em>shines</em>
          </h2>
          <p>
            No briefs, no jargon, no endless calls. Tell us what you need in your own words — we&rsquo;ll
            handle the rest.
          </p>
        </div>

        <div className="steps">
          <article className="step reveal">
            <span className="step__num">1</span>
            <svg className="step__icon" viewBox="0 0 64 64" fill="none" stroke="#17233D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <rect x="25" y="10" width="14" height="26" rx="7" fill="#FF6B35" />
              <path d="M16 30a16 16 0 0 0 32 0M32 46v8M22 54h20" />
            </svg>
            <h3>Send a voice note</h3>
            <p>
              Ramble about your business, your vibe, what you sell. 60 seconds is plenty — we&rsquo;ll
              pull out the good stuff.
            </p>
          </article>
          <article className="step reveal" data-d="1">
            <span className="step__num">2</span>
            <svg className="step__icon" viewBox="0 0 64 64" fill="none" stroke="#17233D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <rect x="8" y="14" width="48" height="32" rx="5" fill="#A7C4A1" />
              <path d="M8 24h48M16 19h.01M22 19h.01M28 50h8" />
            </svg>
            <h3>We design &amp; build</h3>
            <p>
              You get a clean, modern, mobile-ready site that looks like you spent thousands — with
              copy that sounds like you.
            </p>
          </article>
          <article className="step reveal" data-d="2">
            <span className="step__num">3</span>
            <svg className="step__icon" viewBox="0 0 64 64" fill="none" stroke="#17233D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M32 8c10 6 14 16 12 28-2 10-8 16-12 18-4-2-10-8-12-18C18 24 22 14 32 8Z" fill="#FFC445" />
              <circle cx="32" cy="26" r="5" fill="#FFF6E9" />
              <path d="M24 48l-6 8M40 48l6 8" />
            </svg>
            <h3>Launch &amp; grow</h3>
            <p>
              We push it live, hook up your domain, and you start looking professional and winning more
              business. Good days, all ways.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
