// Single source of truth for the service pages.
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
    metaTitle: "Website Design for Small to Medium Businesses (UK & Qatar) | Northlight Studios",
    metaDescription:
      "Website design for small to medium businesses with 1–50 employees in the UK, Qatar and beyond. Fast, mobile-first, conversion-focused sites built to grow.",
    h1: "Website design for growing businesses",
    lede:
      "We design fast, modern, mobile-first websites for small to medium businesses with 1–50 employees — in the UK, Qatar and the wider Middle East, built to look professional and win more business.",
    intro: [
      "Your website is often the first impression a customer gets. We design websites that load quickly, read clearly on every screen, and guide visitors towards getting in touch.",
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
      { q: "How long does a website take?", a: "Most sites take 1–3 weeks depending on the number of pages and how quickly content is ready." },
      { q: "Do you work with businesses outside the UK?", a: "Yes. We work with small to medium businesses across the UK, in Qatar and the Middle East, and remotely worldwide." },
      { q: "Will my site work on mobile?", a: "Always. Every site we design is mobile-first and tested across phones, tablets and desktops." },
    ],
    related: ["website-redesign", "app-development", "seo"],
  },
  {
    slug: "website-redesign",
    icon: "redesign",
    navLabel: "Website Redesign",
    cardTitle: "Website redesign",
    cardDesc:
      "Modernise a tired or slow site — better looks, better speed, better results, on every screen.",
    metaTitle: "Website Redesign for Small to Medium Businesses | Northlight Studios",
    metaDescription:
      "Website redesign for small to medium businesses in the UK and Qatar. We modernise dated, slow or hard-to-use sites — improving design, speed, mobile experience and conversions.",
    h1: "Website redesign that works harder",
    lede:
      "We redesign and improve existing websites for small to medium businesses — modernising the look, speeding things up, and making every page work on every screen.",
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
    related: ["website-design", "testing-debugging", "seo"],
  },
  {
    slug: "app-development",
    icon: "app",
    navLabel: "App Development",
    cardTitle: "App development",
    cardDesc:
      "Custom web and mobile apps — booking tools, dashboards, portals and the features your team uses every day.",
    metaTitle: "App Development for Small to Medium Businesses | Northlight Studios",
    metaDescription:
      "Custom app development for small to medium businesses with 1–50 employees. We build web and mobile apps, booking tools, dashboards and customer portals — UK, Qatar and remote.",
    h1: "App development for growing businesses",
    lede:
      "We build custom web and mobile apps for small to medium businesses with 1–50 employees — booking tools, dashboards, customer portals and the day-to-day features your team actually needs.",
    intro: [
      "Off-the-shelf software rarely fits how you really work. We build apps around your process — so the tools match your business, not the other way round.",
      "Whether it's a customer-facing app or an internal tool to save your team hours, we keep it simple, fast and easy to use on any device.",
    ],
    includes: [
      "Custom web apps tailored to your workflow",
      "Mobile-friendly apps that work on any device",
      "Booking, quote, invoice and customer-flow tools",
      "Admin dashboards to manage your business in one place",
      "Secure logins, user accounts and permissions",
      "Integrations with the tools and data you already use",
    ],
    process: [
      { title: "Map it out", desc: "We learn how you work and agree exactly what the app needs to do." },
      { title: "Design & build", desc: "We design and build a clean, fast app — and show you progress as we go." },
      { title: "Launch & support", desc: "We ship it, train your team, and stay on hand as you grow." },
    ],
    faqs: [
      { q: "What kind of apps do you build?", a: "Web apps, mobile-friendly apps, internal tools, customer portals, booking systems and admin dashboards — built around your business." },
      { q: "Can you connect an app to my existing systems?", a: "Yes. We integrate with the tools, data and services you already use wherever there's an API." },
      { q: "Will the app work on phones?", a: "Yes — everything we build is responsive and tested across phones, tablets and desktops." },
    ],
    related: ["shopify-apps", "automation", "website-design"],
  },
  {
    slug: "shopify-apps",
    icon: "shopify",
    navLabel: "Shopify Apps",
    cardTitle: "Shopify apps",
    cardDesc:
      "Custom Shopify apps, store features and automations — product, checkout, booking, quote and invoice tools that fit your shop.",
    metaTitle: "Shopify Apps & Store Features for Small to Medium Businesses | Northlight Studios",
    metaDescription:
      "Custom Shopify apps for small to medium businesses with 1–50 employees. We build Shopify store features, product, checkout, booking, quote and invoice tools, automations and admin dashboards.",
    h1: "Custom Shopify apps & store features",
    lede:
      "We build custom Shopify apps, store features and automations for small to medium businesses with 1–50 employees — the product, checkout, booking, quote and invoice tools your shop is missing.",
    intro: [
      "Shopify is brilliant out of the box, but every shop hits a point where it needs something custom. That's where we come in.",
      "We build the features and apps Shopify doesn't offer as standard — and connect your store to the other tools you rely on, so everything works together.",
    ],
    includes: [
      "Custom Shopify apps built for your store",
      "New Shopify store features and customisations",
      "Product, checkout, booking, quote and invoice tools",
      "Customer-flow tools that smooth the path to purchase",
      "Automation that connects Shopify to your other systems",
      "Admin dashboards to run your Shopify business at a glance",
    ],
    process: [
      { title: "Understand your store", desc: "We look at how your shop runs and what's slowing it down." },
      { title: "Build the feature", desc: "We build the app or feature and test it against your real store." },
      { title: "Launch & maintain", desc: "We roll it out safely and keep it running as Shopify updates." },
    ],
    faqs: [
      { q: "Can you build a private Shopify app just for my store?", a: "Yes. We build custom (private) Shopify apps and features tailored to your store, as well as automations that connect it to your other tools." },
      { q: "Can you add checkout or booking features?", a: "Yes — product, checkout, booking, quote, invoice and customer-flow tools are all things we can build." },
      { q: "Can you connect Shopify to my other systems?", a: "Yes. We automate links between Shopify and your CRM, accounting, email or internal tools wherever there's an API." },
    ],
    related: ["app-development", "automation", "website-design"],
  },
  {
    slug: "seo",
    icon: "seo",
    navLabel: "SEO Services",
    cardTitle: "SEO services",
    cardDesc:
      "Get found on Google. Technical, on-page and content SEO built for small to medium businesses.",
    metaTitle: "SEO Services for Small to Medium Businesses (UK & Qatar) | Northlight Studios",
    metaDescription:
      "SEO services for small to medium businesses in the UK, Qatar and the Middle East. Technical SEO, on-page optimisation and content that helps you rank and grow.",
    h1: "SEO services that get you found",
    lede:
      "We help small to medium businesses get found on Google with practical, jargon-free SEO — technical foundations, on-page optimisation and content that targets the right keywords.",
    intro: [
      "Great design only pays off when people can find you. Our SEO services help small to medium businesses in the UK, Qatar and the wider Middle East rank for the searches that bring real customers.",
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
      { q: "How long until I see SEO results?", a: "SEO is a medium-term play — most businesses see meaningful movement within 3–6 months, depending on competition." },
      { q: "Do you do SEO for sites you didn't build?", a: "Yes. We provide SEO services for existing sites, whoever built them." },
      { q: "Do you cover Qatar and the Middle East?", a: "Yes — we optimise for UK search and for businesses targeting Qatar and the wider region." },
    ],
    related: ["local-seo", "website-design", "testing-debugging"],
  },
  {
    slug: "local-seo",
    icon: "localseo",
    navLabel: "Local SEO",
    cardTitle: "Local SEO",
    cardDesc:
      "Show up in local searches and maps so nearby customers find you first.",
    metaTitle: "Local SEO for Small to Medium Businesses | Northlight Studios",
    metaDescription:
      "Local SEO for small to medium businesses in the UK and Qatar. Rank in local searches and on Google Maps so nearby customers find your business first.",
    h1: "Local SEO that brings nearby customers",
    lede:
      "We help small to medium businesses show up where local customers are looking — in map results, local searches and 'near me' queries across the UK and Qatar.",
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
      { q: "Can you help businesses in Doha?", a: "Yes. We support small to medium businesses targeting local customers in Qatar as well as across the UK." },
    ],
    related: ["seo", "website-design", "website-maintenance"],
  },
  {
    slug: "testing-debugging",
    icon: "debug",
    navLabel: "Testing & Debugging",
    cardTitle: "Testing & debugging",
    cardDesc:
      "Find and fix bugs, broken layouts and mobile issues — plus faster speed, better SEO and rock-solid reliability.",
    metaTitle: "Website Testing & Debugging for Small to Medium Businesses | Northlight Studios",
    metaDescription:
      "Website testing and debugging for small to medium businesses with 1–50 employees. We find and fix bugs, broken layouts and mobile issues, test forms and checkouts, and improve speed, SEO and reliability.",
    h1: "Testing & debugging that fixes what's broken",
    lede:
      "Something not working right? We find and fix website bugs for small to medium businesses with 1–50 employees — broken layouts, mobile issues, dodgy forms and checkouts, slow pages and messy code.",
    intro: [
      "When your site is buggy or slow, it quietly costs you customers. We track down what's going wrong and fix it — no jargon, no finger-pointing.",
      "Whether it's a single broken page or a site that needs a proper clean-up, we test the whole journey and get everything working the way it should.",
    ],
    includes: [
      "Find and fix website bugs and broken features",
      "Repair broken layouts and design glitches",
      "Fix mobile and responsiveness issues",
      "Test forms, buttons, checkout flows and user journeys",
      "Improve speed, SEO and reliability",
      "Clean up messy or inherited code",
    ],
    process: [
      { title: "Diagnose", desc: "We test your site and pinpoint exactly what's broken or slow." },
      { title: "Fix & test", desc: "We fix the issues and re-test across devices and browsers." },
      { title: "Hand back", desc: "We hand back a faster, cleaner, working site — with notes on what changed." },
    ],
    faqs: [
      { q: "Can you fix a site you didn't build?", a: "Yes. Most debugging work we do is on sites built by someone else — we'll happily dig into whatever you've got." },
      { q: "My site breaks on mobile — can you help?", a: "Definitely. Mobile and responsiveness fixes are one of the most common things we're asked for." },
      { q: "Can you test my forms and checkout?", a: "Yes — we test forms, buttons, checkout flows and the full user journey to make sure nothing's dropping customers." },
    ],
    related: ["website-redesign", "website-maintenance", "seo"],
  },
  {
    slug: "automation",
    icon: "automation",
    navLabel: "Automation & Tools",
    cardTitle: "Automation & tools",
    cardDesc:
      "Automate the repetitive stuff — connect your tools, sync your data and build small apps that save your team hours.",
    metaTitle: "Business Automation & Tools for Small to Medium Businesses | Northlight Studios",
    metaDescription:
      "Automation and custom tools for small to medium businesses with 1–50 employees. We connect your apps, sync data and build tools that cut out the repetitive work.",
    h1: "Automation & tools that save you time",
    lede:
      "We help small to medium businesses with 1–50 employees automate the repetitive work — connecting your tools, syncing your data and building simple apps that do the boring jobs for you.",
    intro: [
      "Most teams lose hours every week to copying data between apps and doing the same tasks by hand. Automation gives that time back.",
      "We connect the tools you already use, set up workflows that run themselves, and build small custom tools where off-the-shelf options fall short.",
    ],
    includes: [
      "Connect the apps and tools you already use",
      "Automatic workflows that run without you",
      "Sync data between systems so nothing's typed twice",
      "Custom internal tools and admin dashboards",
      "Automated emails, reports and notifications",
      "Integrations with Shopify, CRMs and accounting tools",
    ],
    process: [
      { title: "Spot the busywork", desc: "We find the repetitive tasks costing your team the most time." },
      { title: "Automate it", desc: "We connect your tools and build workflows that run themselves." },
      { title: "Refine", desc: "We tune everything as your business grows and needs change." },
    ],
    faqs: [
      { q: "What can you automate?", a: "Data entry, syncing between apps, emails, reports, notifications, and many of the repetitive tasks your team does by hand." },
      { q: "Will automation work with my current tools?", a: "Usually, yes. We connect to most popular apps — and where there's an API, we can build a link." },
      { q: "Do I need a big budget to start?", a: "No. We often start with one time-consuming task, prove the value, then expand from there." },
    ],
    related: ["app-development", "shopify-apps", "website-maintenance"],
  },
  {
    slug: "landing-pages",
    icon: "landing",
    navLabel: "Landing Pages",
    cardTitle: "Landing pages",
    cardDesc:
      "High-converting single pages for a launch, campaign or ad — built to capture leads.",
    metaTitle: "High-Converting Landing Pages for Small to Medium Businesses | Northlight Studios",
    metaDescription:
      "Landing page design for small to medium businesses in the UK and Qatar. Fast, focused, high-converting pages for launches, campaigns and ad traffic.",
    h1: "Landing pages built to convert",
    lede:
      "We design focused, high-converting landing pages for small to medium businesses — perfect for a launch, a campaign, or turning ad clicks into enquiries and sales.",
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
    related: ["website-design", "seo", "app-development"],
  },
  {
    slug: "website-maintenance",
    icon: "maintenance",
    navLabel: "Website Maintenance",
    cardTitle: "Website maintenance",
    cardDesc:
      "We maintain and update your site — content, backups, security and tweaks — so you don't have to.",
    metaTitle: "Website Maintenance & Care Plans for Small to Medium Businesses | Northlight Studios",
    metaDescription:
      "Website maintenance for small to medium businesses in the UK and Qatar. Updates, backups, security, performance checks and content tweaks so your site stays fast, safe and fresh.",
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
      { q: "Can you maintain a site you didn't build?", a: "Yes — we look after existing websites whoever built them." },
      { q: "Is it a contract?", a: "Care is month-to-month — stay because it's useful, not because you're locked in." },
    ],
    related: ["testing-debugging", "website-redesign", "seo"],
  },
];

export const SERVICES_BY_SLUG = Object.fromEntries(SERVICES.map((s) => [s.slug, s]));
