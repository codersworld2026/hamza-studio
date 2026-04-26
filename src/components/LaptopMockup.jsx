import {
  Sparkles,
  ArrowUpRight,
  MessageSquare,
  CalendarCheck,
  FileText,
  TrendingUp,
} from "lucide-react";

const ACTIVITY = [
  { Icon: MessageSquare,  title: "New enquiry received",  meta: "2m ago",  color: "text-brand-500",   bg: "bg-brand-50" },
  { Icon: CalendarCheck,  title: "Booking confirmed",     meta: "14m ago", color: "text-emerald-600", bg: "bg-emerald-50" },
  { Icon: FileText,       title: "Quote request sent",    meta: "1h ago",  color: "text-peach-400",   bg: "bg-peach-100" },
  { Icon: TrendingUp,     title: "Website traffic up 28%", meta: "today",  color: "text-brand-600",   bg: "bg-skysoft-200" },
];

const STATS = [
  { label: "Enquiries", value: "+30%", color: "text-brand-500", bg: "bg-brand-50" },
  { label: "Bookings",  value: "+18%", color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Traffic",   value: "+28%", color: "text-peach-400", bg: "bg-peach-100" },
];

/**
 * Premium laptop mockup — pure HTML/SVG, no images.
 * Slight perspective tilt + layered window behind for depth.
 * Inner page now shows a small-business activity feed (enquiry/booking/quote/traffic).
 */
export default function LaptopMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[680px]">
      {/* Soft pedestal shadow under laptop */}
      <div
        aria-hidden
        className="absolute inset-x-8 -bottom-6 h-10 rounded-[100%] bg-ink-900/25 blur-2xl"
      />

      {/* Layered ghost window behind for depth */}
      <div
        aria-hidden
        className="absolute -left-8 -top-8 hidden h-[78%] w-[88%] rotate-[-6deg] rounded-3xl border border-ink-900/5 bg-white/70 shadow-[0_30px_60px_-30px_rgba(11,23,51,0.25)] backdrop-blur-sm md:block"
      >
        <div className="flex items-center gap-1.5 px-4 py-2.5">
          <span className="h-2 w-2 rounded-full bg-ink-900/15" />
          <span className="h-2 w-2 rounded-full bg-ink-900/15" />
          <span className="h-2 w-2 rounded-full bg-ink-900/15" />
        </div>
        <div className="space-y-2 px-5">
          <div className="h-2 w-32 rounded-full bg-ink-900/10" />
          <div className="h-2 w-44 rounded-full bg-ink-900/10" />
          <div className="h-2 w-24 rounded-full bg-ink-900/10" />
        </div>
      </div>

      {/* Laptop with subtle 3D tilt */}
      <div
        className="relative"
        style={{
          transform: "perspective(1400px) rotateY(-7deg) rotateX(3deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Laptop body */}
        <div className="relative aspect-[16/10] rounded-[24px] bg-gradient-to-b from-ink-800 to-ink-900 p-3 shadow-[0_50px_80px_-30px_rgba(11,23,51,0.55),0_20px_40px_-20px_rgba(11,23,51,0.4)] ring-1 ring-ink-900/10">
          {/* Screen */}
          <div className="relative h-full w-full overflow-hidden rounded-[16px] bg-white">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-ink-900/5 bg-skysoft-100/60 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff6058]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              <div className="ml-3 hidden h-5 flex-1 items-center rounded-md bg-white px-2 text-[9px] text-ink-400 ring-1 ring-ink-900/5 sm:flex">
                hamza.studio
              </div>
            </div>

            {/* Page content */}
            <div className="grid h-[calc(100%-2.5rem)] grid-cols-12 gap-3 p-4 sm:gap-4 sm:p-5">
              {/* Top nav */}
              <div className="col-span-12 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-md bg-gradient-to-br from-brand-500 to-ink-900">
                    <span className="text-[8px] font-black text-white">H</span>
                  </div>
                  <div className="text-[10px] font-bold text-ink-900">Hamza Studio</div>
                </div>
                <div className="hidden items-center gap-3 sm:flex">
                  <div className="h-1.5 w-7 rounded-full bg-ink-900/10" />
                  <div className="h-1.5 w-9 rounded-full bg-ink-900/10" />
                  <div className="h-1.5 w-7 rounded-full bg-ink-900/10" />
                  <div className="h-1.5 w-8 rounded-full bg-ink-900/10" />
                  <div className="rounded-full bg-brand-500 px-2.5 py-1 text-[8px] font-semibold text-white">
                    Book Now
                  </div>
                </div>
              </div>

              {/* Hero copy */}
              <div className="col-span-12 flex flex-col justify-center gap-1.5 sm:col-span-7">
                <div className="inline-flex w-fit items-center gap-1 rounded-full bg-skysoft-200 px-2 py-0.5 text-[7px] font-semibold text-brand-600">
                  <Sparkles className="h-2 w-2" /> Built for small business
                </div>
                <div className="text-[14px] leading-tight font-bold text-ink-900 sm:text-[17px]">
                  Websites that
                  <br />
                  <span className="text-brand-500">grow your business</span>.
                </div>
                <div className="text-[8px] leading-snug text-ink-500 sm:text-[10px]">
                  Clean, modern sites that bring in real
                  <br />
                  enquiries — not just visitors.
                </div>
                <div className="mt-1 flex items-center gap-1.5">
                  <div className="inline-flex w-fit items-center gap-1 rounded-full bg-brand-500 px-3 py-1.5 text-[8px] font-semibold text-white shadow-md sm:text-[10px]">
                    Get in Touch
                    <ArrowUpRight className="h-2.5 w-2.5" />
                  </div>
                  <div className="inline-flex w-fit items-center gap-1 rounded-full border border-ink-900/10 bg-white px-3 py-1.5 text-[8px] font-semibold text-ink-900 sm:text-[10px]">
                    See Work
                  </div>
                </div>
              </div>

              {/* Activity feed */}
              <div className="relative col-span-12 hidden overflow-hidden rounded-lg border border-ink-900/5 bg-gradient-to-br from-skysoft-100 to-white p-2.5 sm:col-span-5 sm:block">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-[8px] font-bold uppercase tracking-wider text-ink-700">
                      Live Activity
                    </span>
                  </div>
                  <span className="text-[7px] text-ink-400">today</span>
                </div>
                <div className="space-y-1.5">
                  {ACTIVITY.map(({ Icon, title, meta, color, bg }) => (
                    <div
                      key={title}
                      className="flex items-center gap-1.5 rounded-md bg-white p-1.5 shadow-[0_2px_6px_-3px_rgba(11,23,51,0.18)] ring-1 ring-ink-900/5"
                    >
                      <span className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded ${bg} ${color}`}>
                        <Icon className="h-2.5 w-2.5" strokeWidth={2.4} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-[7px] font-semibold text-ink-900 sm:text-[8px]">
                          {title}
                        </div>
                        <div className="text-[6px] text-ink-400 sm:text-[7px]">
                          {meta}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats row */}
              <div className="col-span-12 mt-1 grid grid-cols-3 gap-2 sm:gap-3">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-lg border border-ink-900/5 bg-white p-2 shadow-[0_4px_12px_-6px_rgba(11,23,51,0.15)]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-[7px] font-semibold uppercase tracking-wider text-ink-400 sm:text-[8px]">
                        {s.label}
                      </div>
                      <span className={`flex h-3.5 w-3.5 items-center justify-center rounded ${s.bg} ${s.color}`}>
                        <TrendingUp className="h-2 w-2" strokeWidth={2.6} />
                      </span>
                    </div>
                    <div className={`mt-1 text-[12px] font-bold sm:text-[14px] ${s.color}`}>
                      {s.value}
                    </div>
                    <svg viewBox="0 0 80 18" className="mt-0.5 h-3 w-full">
                      <path
                        d="M0 14 Q 12 10 20 9 T 40 6 T 60 4 T 80 2"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        fill="none"
                        strokeLinecap="round"
                        className={s.color}
                      />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Laptop base / hinge */}
        <div className="relative mx-auto h-3 w-[106%] -translate-y-px rounded-b-2xl bg-gradient-to-b from-ink-700 to-ink-900 shadow-[0_18px_30px_-18px_rgba(11,23,51,0.45)]">
          <div className="absolute left-1/2 top-0 h-1.5 w-28 -translate-x-1/2 rounded-b-xl bg-ink-900/70" />
        </div>
      </div>
    </div>
  );
}
