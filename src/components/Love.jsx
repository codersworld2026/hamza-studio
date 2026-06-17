export default function Love() {
  return (
    <section className="love section">
      <div className="wrap">
        <div className="love__grid">
          {/* Brand promise — not a customer testimonial. Honest studio voice. */}
          <div className="quote-card reveal">
            <div className="mark">“</div>
            <blockquote>
              Everything we build has one job: make your business look like the real deal — and bring
              in more of the right customers.
            </blockquote>
            <div className="who">
              <span className="ava">N</span>
              <div>
                <b>The Northlight Studios promise</b>
                <span>Good days, all ways</span>
              </div>
            </div>
          </div>

          <div className="sticker-wall reveal" data-d="1" aria-hidden="true">
            <span className="sticker sticker--1">Good days ✦</span>
            <span className="sticker sticker--2">Treat yourself</span>
            <span className="sticker sticker--3">Stay gold</span>
            <span className="sticker sticker--4">☕ Good vibes</span>
            <span className="sticker sticker--5">Made by hand</span>
          </div>
        </div>
      </div>
    </section>
  );
}
