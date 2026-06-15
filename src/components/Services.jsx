export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">What I make</span>
          <h2>
            Everything your small business <em>needs</em> online
          </h2>
          <p>One person, start to finish. No handoffs, no mystery invoices.</p>
        </div>

        <div className="svc-grid">
          <article className="svc reveal">
            <span className="svc__chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="14" rx="2.5" />
                <path d="M3 9h18M7 22h10" />
              </svg>
            </span>
            <div>
              <h3>Business websites</h3>
              <p>
                A polished one-pager or multi-page site that tells your story and turns visitors into
                customers.
              </p>
            </div>
          </article>

          <article className="svc reveal" data-d="1">
            <span className="svc__chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9 12 3l9 6v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
                <path d="M9 21v-6h6v6" />
              </svg>
            </span>
            <div>
              <h3>Landing pages</h3>
              <p>
                High-converting single pages for a launch, a campaign, or an offer — built to capture
                leads.
              </p>
            </div>
          </article>

          <article className="svc reveal" data-d="2">
            <span className="svc__chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
              </svg>
            </span>
            <div>
              <h3>Redesigns &amp; refreshes</h3>
              <p>
                Got a tired old site? I&rsquo;ll modernize the look, speed it up, and make it work on
                every screen.
              </p>
            </div>
          </article>

          <article className="svc reveal" data-d="3">
            <span className="svc__chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v18M5 8l7-5 7 5" />
                <circle cx="12" cy="15" r="3" />
              </svg>
            </span>
            <div>
              <h3>Care &amp; updates</h3>
              <p>
                Monthly tweaks, content swaps and backups so your site stays fresh while you run the
                show.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
