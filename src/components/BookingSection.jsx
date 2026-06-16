import BookingEmbed from "./BookingEmbed.jsx";

export default function BookingSection() {
  return (
    <section className="booking section" id="book">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">No-pressure chat</span>
          <h2>
            Book a <em>30-minute</em> strategy call
          </h2>
          <p>
            Grab a free slot and we&rsquo;ll talk through your goals, your website and where SEO could
            help — whether you&rsquo;re in the UK, Qatar or working remotely. No hard sell.
          </p>
        </div>
        <div className="booking__card reveal" data-d="1">
          <BookingEmbed />
        </div>
      </div>
    </section>
  );
}
