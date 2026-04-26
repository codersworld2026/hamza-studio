export default function Logo({ className = "h-10 w-10" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hamza-logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1d4fd8" />
          <stop offset="100%" stopColor="#0b1733" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#hamza-logo-grad)" />
      <path
        d="M16 13.5v21M32 13.5v21M16 24h16"
        stroke="#ffffff"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="24" r="2.2" fill="#ff9a5a" />
    </svg>
  );
}
