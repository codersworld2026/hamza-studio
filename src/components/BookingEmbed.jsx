import { useEffect, useState } from "react";
import { CAL_BOOKING_URL } from "../config/site.js";
import { WHATSAPP_URL, EMAIL_URL } from "../config/contact.js";
import { getConsent, setConsent, CONSENT_EVENT } from "../lib/consent.js";

// Region-proof Cal.com embed: a plain iframe to the booking page (works for
// cal.eu / cal.com alike). Gated on cookie consent — the third-party iframe is
// only loaded once the visitor accepts (UK PECR / EU GDPR compliant).
const SRC = `${CAL_BOOKING_URL}?embed=true&layout=month_view`;

function Fallback() {
  return (
    <p className="booking__fallback">
      Prefer another way?{" "}
      <a href={CAL_BOOKING_URL} target="_blank" rel="noopener noreferrer">Open the booking page</a>,{" "}
      <a href={EMAIL_URL}>email us</a> or{" "}
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">message on WhatsApp</a>.
    </p>
  );
}

export default function BookingEmbed() {
  const [allowed, setAllowed] = useState(() => getConsent() === "accepted");

  useEffect(() => {
    const onConsent = (e) => setAllowed(e.detail === "accepted");
    window.addEventListener(CONSENT_EVENT, onConsent);
    return () => window.removeEventListener(CONSENT_EVENT, onConsent);
  }, []);

  if (!allowed) {
    return (
      <div className="booking__embed">
        <div className="cal-gate">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0F5D5A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="4" width="18" height="17" rx="2.5" />
            <path d="M8 2v4M16 2v4M3 10h18M9 15l2 2 3-4" />
          </svg>
          <p>
            The booking calendar is provided by <strong>Cal.com</strong>, a third party that may set
            cookies. Load it to pick a time, or reach us directly.
          </p>
          <button className="btn btn--primary" onClick={() => setConsent("accepted")}>
            Load booking calendar
          </button>
          <Fallback />
        </div>
      </div>
    );
  }

  return (
    <div className="booking__embed">
      <iframe className="cal-embed" src={SRC} title="Book a call with Northlight Studios" loading="lazy" />
      <Fallback />
    </div>
  );
}
