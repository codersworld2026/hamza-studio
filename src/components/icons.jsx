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
