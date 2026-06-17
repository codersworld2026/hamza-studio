// Inline icons (stroke = currentColor) for service cards/pages and area cards.

const P = { fill: "none", stroke: "currentColor", strokeWidth: 2.2, strokeLinecap: "round", strokeLinejoin: "round" };

const SERVICE_PATHS = {
  design: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2.5" />
      <path d="M3 9h18M7 22h10" />
    </>
  ),
  redesign: (
    <>
      <path d="M21 12a9 9 0 1 1-2.6-6.4" />
      <path d="M21 3v5h-5" />
    </>
  ),
  seo: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3M8 12l2 2 3-4" />
    </>
  ),
  localseo: (
    <>
      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  landing: (
    <>
      <path d="M12 2c3.5 2.5 5 6 4.5 11-.5 4-3 7-4.5 8-1.5-1-4-4-4.5-8C7 8 8.5 4.5 12 2Z" />
      <circle cx="12" cy="9" r="2" />
      <path d="M8 17l-3 4M16 17l3 4" />
    </>
  ),
  maintenance: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0-5.2 5.2L4 17l3 3 5.5-5.5a4 4 0 0 0 5.2-5.2l-2.3 2.3-2.7-.7-.7-2.7Z" />
    </>
  ),
  app: (
    <>
      <rect x="6" y="2.5" width="12" height="19" rx="3" />
      <path d="M6 7h12M6 17h12M10.5 19.5h3" />
    </>
  ),
  shopify: (
    <>
      <path d="M6.5 8h11l-1 11.5a1.5 1.5 0 0 1-1.5 1.4H9a1.5 1.5 0 0 1-1.5-1.4Z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </>
  ),
  debug: (
    <>
      <rect x="8" y="9" width="8" height="10" rx="4" />
      <path d="M12 9v10M9.5 9 8 6.5M14.5 9 16 6.5M8 12.5H5M16 12.5h3M8 15.5l-2.8 1.5M16 15.5l2.8 1.5" />
    </>
  ),
  automation: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 4.5v2M12 17.5v2M4.5 12h2M17.5 12h2M6.7 6.7l1.4 1.4M15.9 15.9l1.4 1.4M17.3 6.7l-1.4 1.4M8.1 15.9l-1.4 1.4" />
    </>
  ),
};

export function ServiceIcon({ name, className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...P} aria-hidden="true">
      {SERVICE_PATHS[name] || SERVICE_PATHS.design}
    </svg>
  );
}

const AREA_PATHS = {
  uk: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
  qa: (
    <>
      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  remote: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 9h18M3 15h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
};

export function AreaIcon({ name, className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...P} aria-hidden="true">
      {AREA_PATHS[name] || AREA_PATHS.remote}
    </svg>
  );
}
