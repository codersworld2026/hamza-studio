// Central site/brand config. Update these in one place.

export const BRAND = "Northlight Studios";
export const BRAND_SHORT = "Northlight";

// Base URL used for canonical tags, sitemap and schema.
// TODO: change to your real domain once the Northlight Studios domain is live.
export const SITE_URL = "https://hamza-studio.pages.dev";

// Your Cal.com booking page. NOTE: this account is on the EU region (cal.eu).
// The username page shows all your event types. To lock the embed to one event
// (e.g. a 30-min strategy call), append its slug — copy the URL of that event
// type from Cal.com, e.g. "https://cal.eu/hamza-suliman-75oolh/strategy-call".
export const CAL_BOOKING_URL = "https://www.cal.eu/hamza-suliman-75oolh";

export const TAGLINE = "Websites, apps & SEO that help businesses grow";

// Where we work — used by the "Areas we serve" section and schema.
export const AREAS = [
  {
    key: "uk",
    name: "United Kingdom",
    note: "Websites, apps and SEO for small to medium businesses across the UK.",
  },
  {
    key: "qa",
    name: "Qatar & the Middle East",
    note: "Supporting small to medium businesses in Doha and across the region.",
  },
  {
    key: "remote",
    name: "Remote / Worldwide",
    note: "Fully remote delivery — work with us from anywhere.",
  },
];
