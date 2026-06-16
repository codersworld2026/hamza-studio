// Single source of truth for the six service pages.
// Drives: the homepage "Services" cards, the /services/* pages, footer links and the sitemap.
// Keep claims here accurate — these describe what we offer, not past results.

export const SERVICES = [
  {
    slug: "website-design",
    icon: "design",
    navLabel: "Website Design",
    cardTitle: "Website design",
    cardDesc:
      "Clean, modern, mobile-first websites that tell your story and turn visitors into customers.",
    metaTitle: "Website Design for SMEs (UK & Qatar) | Northlight Studios",
    metaDescription:
      "Professional website design for SMEs in the UK, Qatar and beyond. We design fast, mobile-first, conversion-focused sites that help small and medium businesses grow.",
    h1: "Website design for SMEs",
    lede:
      "We design fast, modern, mobile-first websites for SMEs in the UK, Qatar and the wider Middle East — built to look professional and win more business.",
    intro: [
      "Your website is often the first impression a customer gets. We design SME websites that load quickly, read clearly on every screen, and guide visitors towards getting in touch.",
      "Every site is built around your goals — whether that's enquiries, bookings or sales — with copy and structure that search engines and people both understand.",
    ],
    includes: [
      "A bespoke, mobile-first design tailored to your brand",
      "Conversion-focused layout and clear calls to action",
      "SEO-ready structure, headings and metadata from day one",
      "Fast performance and accessible, semantic markup",
      "Contact forms, maps and the integrations you need",
      "Training so you can keep your content fresh",
    ],
    process: [
      { title: "Discover", desc: "We learn your business, audience and goals — a quick call or a voice note is plenty." },
      { title: "Design & build", desc: "We design and build a modern, responsive site with copy that sounds like you." },
      { title: "Launch & support", desc: "We connect your domain, go live, and support you after launch." },
    ],
    faqs: [
      { q: "How long does a website take?", a: "Most SME sites take 1–3 weeks depending on the number of pages and how quickly content is ready." },
      { q: "Do you work with SMEs outside the UK?", a: "Yes. We work with SMEs across the UK, in Qatar and the Middle East, and remotely worldwide." },
      { q: "Will my site work on mobile?", a: "Always. Every site we design is mobile-first and tested across phones, tablets and desktops." },
    ],
    related: ["website-redesign", "seo", "landing-pages"],
  },
  {
    slug: "website-redesign",
    icon: "redesign",
    navLabel: "Website Redesign",
    cardTitle: "Website redesign",
    cardDesc:
      "Modernise a tired or slow site — better looks, better speed, better results, on every screen.",
    metaTitle: "Website Redesign Services for SMEs | Northlight Studios",
    metaDescription:
      "Website redesign for SMEs in the UK and Qatar. We modernise dated, slow or hard-to-use sites — improving design, speed, mobile experience and conversions.",
    h1: "Website redesign that works harder",
    lede:
      "We redesign and improve existing websites for SMEs — modernising the look, speeding things up, and making every page work on every screen.",
    intro: [
      "If your current site feels dated, loads slowly or doesn't convert, a redesign can transform results without starting from scratch.",
      "We audit what you have, keep what works, and rebuild the rest around a clearer structure and stronger calls to action — carrying your SEO equity across safely.",
    ],
    includes: [
      "A review of your current site, speed and structure",
      "A refreshed, modern, mobile-first design",
      "Improved navigation and clearer calls to action",
      "Performance and Core Web Vitals improvements",
      "Careful migration that protects existing SEO rankings",
      "Redirects so no links or traffic are lost",
    ],
    process: [
      { title: "Audit", desc: "We assess design, speed, content and search performance to find quick wins." },
      { title: "Redesign", desc: "We rebuild around a clearer structure, modern visuals and better UX." },
      { title: "Migrate safely", desc: "We launch with redirects in place to protect your rankings and links." },
    ],
    faqs: [
      { q: "Will a redesign hurt my Google rankings?", a: "No — handled properly it usually helps. We map redirects and preserve your existing SEO during migration." },
      { q: "Can you keep my current branding?", a: "Yes. We can refresh your existing brand or work to a full rebrand — your call." },
      { q: "Do I need to move hosting?", a: "Not necessarily. We work with your current setup or recommend a faster option if it helps." },
    ],
    related: ["website-design", "seo", "website-maintenance"],
  },
  {
    slug: "seo",
    icon: "seo",
    navLabel: "SEO Services",
    cardTitle: "SEO services",
    cardDesc:
      "Get found on Google. Technical, on-page and content SEO built for SMEs in the UK & Middle East.",
    metaTitle: "SEO Services for SMEs (UK & Qatar) | Northlight Studios",
    metaDescription:
      "SEO services for SMEs in the UK, Qatar and the Middle East. Technical SEO, on-page optimisation and content that helps small and medium businesses rank and grow.",
    h1: "SEO services for SMEs",
    lede:
      "We help SMEs get found on Google with practical, jargon-free SEO — technical foundations, on-page optimisation and content that targets the right keywords.",
    intro: [
      "Great design only pays off when people can find you. Our SEO services help SMEs in the UK, Qatar and the wider Middle East rank for the searches that bring real customers.",
      "We focus on the fundamentals that move the needle: a fast, crawlable site, clear page structure, the right keywords in the right places, and content that answers what your audience is searching for.",
    ],
    includes: [
      "Technical SEO audit and fixes (speed, crawling, indexing)",
      "Keyword research focused on buyer intent",
      "On-page optimisation: titles, meta, headings and content",
      "Internal linking and site-structure improvements",
      "Schema / structured data and sitemap setup",
      "Clear, plain-English reporting on what's working",
    ],
    process: [
      { title: "Audit & research", desc: "We review your site and find the keywords worth targeting." },
      { title: "Optimise", desc: "We fix the technical foundations and optimise pages and content." },
      { title: "Measure & grow", desc: "We track rankings and traffic, then iterate on what works." },
    ],
    faqs: [
      { q: "How long until I see SEO results?", a: "SEO is a medium-term play — most SMEs see meaningful movement within 3–6 months, depending on competition." },
      { q: "Do you do SEO for sites you didn't build?", a: "Yes. We provide SEO services for existing sites, whoever built them." },
      { q: "Do you cover Qatar and the Middle East?", a: "Yes — we optimise for UK search and for SMEs targeting Qatar and the wider region." },
    ],
    related: ["local-seo", "website-design", "website-redesign"],
  },
  {
    slug: "local-seo",
    icon: "localseo",
    navLabel: "Local SEO",
    cardTitle: "Local SEO",
    cardDesc:
      "Show up in local searches and maps so nearby customers find you first.",
    metaTitle: "Local SEO Services for SMEs | Northlight Studios",
    metaDescription:
      "Local SEO for SMEs in the UK and Qatar. We help you rank in local searches and on Google Maps so nearby customers find your business first.",
    h1: "Local SEO that brings nearby customers",
    lede:
      "We help SMEs show up where local customers are looking — in map results, local searches and 'near me' queries across the UK and Qatar.",
    intro: [
      "When someone nearby searches for what you offer, you want to be the business they find. Local SEO puts you on the map — literally.",
      "We optimise your Google Business Profile, local listings and on-site signals so you rank for location-based searches in your area.",
    ],
    includes: [
      "Google Business Profile setup and optimisation",
      "Local keyword research and on-page targeting",
      "Consistent name, address and phone (NAP) across listings",
      "Location and service-area pages that rank",
      "Local schema / structured data",
      "Review strategy to build trust and visibility",
    ],
    process: [
      { title: "Set up", desc: "We optimise your business profile and core local listings." },
      { title: "Optimise on-site", desc: "We build location and service-area pages that target local searches." },
      { title: "Build authority", desc: "We strengthen reviews, citations and local signals over time." },
    ],
    faqs: [
      { q: "What is local SEO?", a: "Local SEO helps your business appear in map results and location-based searches like 'web design near me'." },
      { q: "Do you optimise Google Business Profiles?", a: "Yes — that's a core part of every local SEO engagement." },
      { q: "Can you help businesses in Doha?", a: "Yes. We support SMEs targeting local customers in Qatar as well as across the UK." },
    ],
    related: ["seo", "website-design", "website-maintenance"],
  },
  {
    slug: "landing-pages",
    icon: "landing",
    navLabel: "Landing Pages",
    cardTitle: "Landing pages",
    cardDesc:
      "High-converting single pages for a launch, campaign or ad — built to capture leads.",
    metaTitle: "High-Converting Landing Pages for SMEs | Northlight Studios",
    metaDescription:
      "Landing page design for SMEs in the UK and Qatar. We build fast, focused, high-converting landing pages for launches, campaigns and ad traffic.",
    h1: "Landing pages built to convert",
    lede:
      "We design focused, high-converting landing pages for SMEs — perfect for a launch, a campaign, or turning ad clicks into enquiries and sales.",
    intro: [
      "A landing page has one job: convert. We strip away distractions and build a single, persuasive page around your offer.",
      "Whether you're running ads, launching a product, or capturing leads, we design pages that load fast and guide visitors to act.",
    ],
    includes: [
      "A single, focused page built around one goal",
      "Persuasive copy and clear, repeated calls to action",
      "Fast load times for paid and organic traffic",
      "Lead-capture forms and tracking-ready setup",
      "Mobile-first design that converts on any device",
      "A/B-test-friendly structure",
    ],
    process: [
      { title: "Define the offer", desc: "We clarify the single action you want visitors to take." },
      { title: "Design & write", desc: "We craft persuasive copy and a focused, fast layout." },
      { title: "Launch & refine", desc: "We ship it and help you test and improve conversion." },
    ],
    faqs: [
      { q: "How is a landing page different from a website?", a: "A landing page is a single, focused page built to convert one type of visitor — ideal for ads and campaigns." },
      { q: "Can you connect it to my ads?", a: "Yes — we build pages that are ready for tracking and your ad platforms." },
      { q: "How fast can you turn one around?", a: "Most single landing pages can be delivered in a matter of days." },
    ],
    related: ["website-design", "seo", "website-maintenance"],
  },
  {
    slug: "website-maintenance",
    icon: "maintenance",
    navLabel: "Website Maintenance",
    cardTitle: "Website maintenance",
    cardDesc:
      "We maintain and update your site — content, backups, security and tweaks — so you don't have to.",
    metaTitle: "Website Maintenance & Care Plans for SMEs | Northlight Studios",
    metaDescription:
      "Website maintenance for SMEs in the UK and Qatar. Updates, backups, security, performance checks and content tweaks so your site stays fast, safe and fresh.",
    h1: "Website maintenance & care",
    lede:
      "We maintain and update your site so it stays fast, secure and current — content swaps, backups, security and performance, all handled for you.",
    intro: [
      "A website isn't a one-off — it needs looking after. Our care plans keep your site healthy so you can focus on running your business.",
      "From content updates to backups, security and speed checks, we handle the upkeep and you stay free to do what you do best.",
    ],
    includes: [
      "Regular software, plugin and content updates",
      "Scheduled backups and quick restores",
      "Security monitoring and hardening",
      "Performance and uptime checks",
      "Small content and design tweaks on request",
      "Priority support when you need a change",
    ],
    process: [
      { title: "Onboard", desc: "We review your site and set up backups and monitoring." },
      { title: "Maintain", desc: "We keep everything updated, backed up and secure." },
      { title: "Improve", desc: "We make ongoing tweaks and flag opportunities to grow." },
    ],
    faqs: [
      { q: "What's included in a care plan?", a: "Updates, backups, security, performance checks and small content or design tweaks on request." },
      { q: "Can you maintain a site you didn't build?", a: "Yes — we look after existing SME websites whoever built them." },
      { q: "Is it a contract?", a: "Care is month-to-month — stay because it's useful, not because you're locked in." },
    ],
    related: ["website-redesign", "seo", "website-design"],
  },
];

export const SERVICES_BY_SLUG = Object.fromEntries(SERVICES.map((s) => [s.slug, s]));
