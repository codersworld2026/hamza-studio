import { Zap, ShieldCheck, Heart, Sparkles } from "lucide-react";

const FEATURES = [
  {
    title: "Fast & Reliable",
    body: "Websites that load fast and work perfectly on every device.",
    Icon: Zap,
    iconBg: "bg-brand-50",
    iconColor: "text-brand-500",
  },
  {
    title: "Built to Convert",
    body: "Designed to turn visitors into leads and paying customers.",
    Icon: ShieldCheck,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Support You Can Count On",
    body: "Ongoing care, edits, and answers — whenever you need them.",
    Icon: Heart,
    iconBg: "bg-peach-100",
    iconColor: "text-peach-400",
  },
];

export default function Features() {
  return (
    <section id="services" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8 lg:px-10 lg:pb-28 lg:pt-28">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/15 bg-white/70 px-4 py-1.5 text-[12.5px] font-semibold text-brand-700 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2.4} />
            Why work with me
          </div>
          <h2 className="mt-5 font-display text-[34px] font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-[42px]">
            Why Small Businesses Choose{" "}
            <span className="text-brand-500">Hamza Studio</span>
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-ink-500">
            Simple communication, fast delivery and websites built to bring in
            real enquiries.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-2xl border border-ink-900/5 bg-white p-7 shadow-[0_18px_40px_-22px_rgba(11,23,51,0.18)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_48px_-20px_rgba(11,23,51,0.22)]"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${f.iconBg} ${f.iconColor}`}
              >
                <f.Icon className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <h3 className="mt-5 text-[17px] font-semibold tracking-tight text-ink-900">
                {f.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
