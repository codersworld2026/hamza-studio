import { useEffect, useState } from "react";
import { getConsent, setConsent, CONSENT_EVENT } from "../lib/consent.js";

export default function CookieConsent() {
  const [show, setShow] = useState(() => !getConsent());

  useEffect(() => {
    const onConsent = () => setShow(false);
    window.addEventListener(CONSENT_EVENT, onConsent);
    return () => window.removeEventListener(CONSENT_EVENT, onConsent);
  }, []);

  if (!show) return null;

  return (
    <div className="cookie" role="dialog" aria-label="Cookie notice" aria-live="polite">
      <div className="cookie__inner">
        <p className="cookie__text">
          We don&rsquo;t use tracking or advertising cookies. Our booking calendar (Cal.com) is a
          third party that may set cookies — it only loads if you accept. <a href="/privacy">Privacy policy</a>.
        </p>
        <div className="cookie__actions">
          <button className="btn btn--cream btn--sm" onClick={() => setConsent("rejected")}>
            Reject
          </button>
          <button className="btn btn--primary btn--sm" onClick={() => setConsent("accepted")}>
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
