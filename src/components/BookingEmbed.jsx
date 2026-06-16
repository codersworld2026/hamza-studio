import { useEffect, useRef } from "react";
import { CAL_LINK } from "../config/site.js";
import { WHATSAPP_URL, EMAIL_URL } from "../config/contact.js";

// Embeds a Cal.com inline scheduler.
// TODO: set your real link in src/config/site.js (CAL_LINK), e.g. "yourname/30min".
export default function BookingEmbed() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    // Official Cal.com embed loader (loads the script once, then exposes window.Cal).
    (function (C, A, L) {
      const p = function (a, ar) { a.q.push(ar); };
      const d = C.document;
      C.Cal = C.Cal || function () {
        const cal = C.Cal;
        const ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else {
            p(cal, ar);
          }
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal("init", { origin: "https://cal.com" });
    window.Cal("inline", { elementOrSelector: el, calLink: CAL_LINK });
    window.Cal("ui", { hideEventTypeDetails: false, layout: "month_view" });

    return () => {
      // Clear the injected iframe if the component unmounts.
      el.innerHTML = "";
    };
  }, []);

  return (
    <div className="booking__embed">
      <div ref={ref} className="cal-embed" style={{ width: "100%", minHeight: 560, overflow: "auto" }} />
      <p className="booking__fallback">
        Calendar not loading?{" "}
        <a href={EMAIL_URL}>Email us</a> or{" "}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">message on WhatsApp</a>{" "}
        and we&rsquo;ll find a time.
      </p>
    </div>
  );
}
