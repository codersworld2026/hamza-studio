import { CAL_BOOKING_URL } from "../config/site.js";
import { WHATSAPP_URL, EMAIL_URL } from "../config/contact.js";

// Region-proof Cal.com embed: a plain iframe to the booking page (works for
// cal.eu / cal.com alike, no embed-script origin config needed).
// Change the booking page in src/config/site.js (CAL_BOOKING_URL).
const SRC = `${CAL_BOOKING_URL}?embed=true&layout=month_view`;

export default function BookingEmbed() {
  return (
    <div className="booking__embed">
      <iframe
        className="cal-embed"
        src={SRC}
        title="Book a call with Northlight Studios"
        loading="lazy"
      />
      <p className="booking__fallback">
        Prefer another way?{" "}
        <a href={CAL_BOOKING_URL} target="_blank" rel="noopener noreferrer">Open the booking page</a>,{" "}
        <a href={EMAIL_URL}>email us</a> or{" "}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">message on WhatsApp</a>.
      </p>
    </div>
  );
}
