import Breadcrumb from "../components/Breadcrumb.jsx";
import BookingEmbed from "../components/BookingEmbed.jsx";

const EXPECT = [
  "A friendly, no-pressure chat — not a sales pitch",
  "A quick look at your current site, app or idea",
  "Honest advice on websites, apps, SEO and automation priorities",
  "Clear next steps, whether or not we work together",
];

export default function Book() {
  return (
    <article className="bookpage">
      <section className="page-hero section">
        <div className="hero__bg" />
        <div className="wrap">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Book a call" }]} />
          <h1>Book a 30-minute strategy call</h1>
          <p className="lede">
            Pick a time that suits you and we&rsquo;ll talk through your goals and where a new website,
            app, Shopify tool or SEO could help your business grow — UK, Qatar or fully remote.
          </p>
        </div>
      </section>

      <section className="book-body section">
        <div className="wrap">
          <div className="book-body__grid">
            <aside className="book-expect">
              <h2>What to expect</h2>
              <ul className="ticklist">
                {EXPECT.map((item, i) => (
                  <li key={i}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m4 13 5 5L20 6" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
            <div className="booking__card">
              <BookingEmbed />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
