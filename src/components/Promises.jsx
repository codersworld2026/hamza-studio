export default function Promises() {
  return (
    <section className="promises">
      <div className="wrap">
        <div className="promises__row">
          <div className="promise reveal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="m4 13 5 5L20 6" />
            </svg>
            No agency runaround
          </div>
          <div className="promise reveal" data-d="1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 2 4 14h7l-1 8 9-12h-7Z" />
            </svg>
            Launch in days, not months
          </div>
          <div className="promise reveal" data-d="2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="3" width="6" height="11" rx="3" />
              <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
            </svg>
            Voice notes welcome
          </div>
          <div className="promise reveal" data-d="3">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v18M5 8l7-5 7 5M5 8v8l7 5 7-5V8" />
            </svg>
            Built to actually convert
          </div>
        </div>
      </div>
    </section>
  );
}
