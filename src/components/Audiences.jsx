import { Hammer, BriefcaseBusiness, Store, Rocket, Users } from "lucide-react";

const AUDIENCES = [
  {
    title: "Trades & Services",
    body: "Plumbers, electricians, builders and carpenters — a sharp site that shows your work and turns calls into booked jobs.",
    Icon: Hammer,
    iconBg: "bg-brand-50",
    iconColor: "text-brand-500",
    accent: "from-brand-50 to-white",
  },
  {
    title: "Freelancers",
    body: "Designers, photographers, coaches — a clean portfolio that makes you look established so you can charge more.",
    Icon: BriefcaseBusiness,
    iconBg: "bg-peach-100",
    iconColor: "text-peach-400",
    accent: "from-peach-100 to-white",
  },
  {
    title: "Local Businesses",
    body: "Cafés, salons, gyms and clinics — drive bookings and rank in local search with a site that loads fast on mobile.",
    Icon: Store,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    accent: "from-emerald-50 to-white",
  },
  {
    title: "Startups",
    body: "Early-stage founders — a modern landing page that explains your idea clearly and converts visitors into early users.",
    Icon: Rocket,
    iconBg: "bg-skysoft-200",
    iconColor: "text-brand-600",
    accent: "from-skysoft-100 to-white",
  },
];

export default function Audiences() {
  return (
    <section id="audiences" className="relative scroll-mt-24">
      {/* Soft background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-skysoft-200/50 blur-3xl" />
        <div className="absolute -right-40 bottom-20 h-[380px] w-[380px] rounded-full bg-peach-100/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-24 pt-12 sm:px-8 lg:px-10 lg:pb-32">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-peach-400/30 bg-white/70 px-4 py-1.5 text-[12.5px] font-semibold text-peach-400 backdrop-blur">
            <Users className="h-3.5 w-3.5" strokeWidth={2.4} />
            Who I work with
          </div>
          <h2 className="mt-5 font-display text-[34px] font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-[42px]">
            Built for{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-brand-500">Real Small Businesses</span>
              <svg aria-hidden className="absolute -bottom-1.5 left-0 h-2.5 w-full" viewBox="0 0 200 14" preserveAspectRatio="none">
                <path d="M3 9 Q 50 1 100 7 T 197 5" stroke="#ff9a5a" strokeWidth="3" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-ink-500">
            Whether you're booking jobs, taking enquiries or launching
            something new — your website should pull its weight.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {AUDIENCES.map((a) => (
            <div
              key={a.title}
              className="group relative overflow-hidden rounded-2xl border border-ink-900/5 bg-white p-6 shadow-[0_18px_40px_-22px_rgba(11,23,51,0.18)] transition-all hover:-translate-y-1 hover:shadow-[0_28px_48px_-22px_rgba(11,23,51,0.25)]"
            >
              {/* corner accent */}
              <div
                aria-hidden
                className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${a.accent} opacity-70 blur-xl transition-opacity group-hover:opacity-100`}
              />

              <div className={`relative flex h-12 w-12 items-center justify-center rounded-xl ${a.iconBg} ${a.iconColor}`}>
                <a.Icon className="h-5 w-5" strokeWidth={2.2} />
              </div>

              <h3 className="relative mt-5 text-[17px] font-bold tracking-tight text-ink-900">
                {a.title}
              </h3>
              <p className="relative mt-2 text-[13.5px] leading-relaxed text-ink-500">
                {a.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
