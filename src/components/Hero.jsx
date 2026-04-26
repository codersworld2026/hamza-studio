import {
  Sparkles,
  Mic,
  ArrowRight,
  Users,
  MessageCircle,
  TrendingUp,
  UserCircle2,
} from "lucide-react";
import LaptopMockup from "./LaptopMockup.jsx";
import StatCard from "./StatCard.jsx";
import { WHATSAPP_URL } from "../config/contact.js";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* === BACKGROUND DECOR === */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* radial gradient */}
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(1100px 600px at 78% 18%, #e3edff 0%, rgba(247,248,251,0) 60%), radial-gradient(700px 500px at 8% 70%, #ffe4d0 0%, rgba(247,248,251,0) 60%)",
          }}
        />
        {/* faint dotted grid */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.14]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="dotgrid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1.4" cy="1.4" r="1.4" fill="#1a2a5e" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotgrid)" />
        </svg>

        {/* Pale blue blob (top right) */}
        <div className="absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-skysoft-200/70 blur-3xl" />
        {/* Soft peach blob (left) */}
        <div className="absolute -left-32 top-40 h-[400px] w-[400px] rounded-full bg-peach-100/60 blur-3xl" />

        {/* Orange swoosh (top left) */}
        <svg className="absolute left-[6%] top-[14%] h-16 w-44 text-peach-400/70" viewBox="0 0 200 60" fill="none">
          <path d="M5 35 Q 60 5 120 30 T 195 25" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        </svg>

        {/* Star (right side) */}
        <svg className="absolute right-[5%] top-[42%] h-10 w-10 text-ink-900/70" viewBox="0 0 40 40" fill="none">
          <path d="M20 4l3.6 11.2H35l-9.2 6.8 3.6 11.2L20 26.4l-9.4 6.8 3.6-11.2L5 15.2h11.4L20 4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>

        {/* Squiggle (bottom right) */}
        <svg className="absolute right-[6%] bottom-[16%] h-9 w-28 text-peach-400/80" viewBox="0 0 120 40" fill="none">
          <path d="M2 20 Q 20 2 40 20 T 80 20 T 118 20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>

        {/* Small dot cluster */}
        <svg className="absolute right-16 top-32 h-16 w-16 text-brand-300/60" viewBox="0 0 64 64" fill="currentColor">
          {Array.from({ length: 4 }).map((_, r) =>
            Array.from({ length: 4 }).map((_, c) => (
              <circle key={`a-${r}-${c}`} cx={6 + c * 16} cy={6 + r * 16} r="1.6" />
            ))
          )}
        </svg>

        {/* Tiny accent dots */}
        <span className="absolute right-[20%] top-[10%] h-2 w-2 rounded-full bg-brand-400/70" />
        <span className="absolute left-[10%] top-[58%] h-1.5 w-1.5 rounded-full bg-brand-300" />
      </div>

      {/* === HERO CONTENT === */}
      <div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl flex-col justify-center px-5 pb-12 pt-12 sm:px-8 lg:px-10 lg:pb-16 lg:pt-14">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[42fr_58fr] lg:gap-14">
          {/* LEFT — copy */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/15 bg-white/70 px-4 py-1.5 text-[13px] font-medium text-brand-700 shadow-[0_4px_14px_-6px_rgba(37,99,235,0.25)] backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" strokeWidth={2.4} />
              Modern websites. Real results.
            </div>

            <h1 className="mt-6 font-display text-[34px] font-semibold leading-[1.05] tracking-[-0.02em] text-ink-900 sm:text-[42px] lg:text-[46px]">
              Websites That
              <br />
              Help Small
              <br />
              Businesses{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-brand-500">Grow</span>
                <svg
                  aria-hidden
                  className="absolute -bottom-2 left-0 h-3 w-full"
                  viewBox="0 0 200 14"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 9 Q 50 1 100 7 T 197 5"
                    stroke="#ff9a5a"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>

            {/* Slogan — main brand promise */}
            <div className="mt-7 flex items-start gap-4">
              <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white shadow-[0_14px_28px_-10px_rgba(37,99,235,0.7)] ring-2 ring-white">
                <Mic className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <p className="font-display text-[22px] font-bold leading-[1.2] tracking-tight text-ink-900 sm:text-[26px] lg:text-[28px]">
                Just send me a voice note and{" "}
                <span className="text-brand-500">consider it done.</span>
              </p>
            </div>

            <p className="mt-5 text-[14.5px] leading-relaxed text-ink-500">
              I build clean, modern websites for small businesses, freelancers
              and startups — designed to help you look professional and win
              more business.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact-form"
                className="group inline-flex items-center gap-3 rounded-full bg-brand-500 px-10 py-5 text-[20px] font-extrabold text-white shadow-[0_22px_44px_-14px_rgba(37,99,235,0.75)] ring-1 ring-brand-500/20 transition-all hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-[0_28px_50px_-14px_rgba(37,99,235,0.8)]"
              >
                Start Your Website
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" strokeWidth={2.8} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3.5 rounded-full border-2 border-emerald-500/45 bg-white px-9 py-[18px] text-[20px] font-extrabold text-emerald-700 shadow-[0_18px_36px_-14px_rgba(16,185,129,0.55)] transition-all hover:-translate-y-0.5 hover:border-emerald-500 hover:bg-emerald-50/50 hover:text-emerald-800"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_10px_22px_-6px_rgba(16,185,129,0.7)] ring-2 ring-white">
                  <MessageCircle className="h-6 w-6" strokeWidth={2.6} />
                </span>
                Send a Voice Note
              </a>
            </div>

            {/* Personal brand line — promoted */}
            <div className="mt-7 inline-flex items-center gap-2.5 text-[16px] font-bold text-ink-700">
              <UserCircle2 className="h-5 w-5 text-brand-500" strokeWidth={2.4} />
              Work directly with Hamza from first message to launch.
            </div>
          </div>

          {/* RIGHT — visual */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-[640px] px-6 sm:px-10 lg:px-14">
              {/* Soft pedestal blob behind */}
              <div
                aria-hidden
                className="absolute inset-x-6 inset-y-4 -z-10 rounded-[42%] bg-gradient-to-br from-skysoft-200/80 to-skysoft-100/60 blur-2xl"
              />
              {/* Dashed ring decoration */}
              <div
                aria-hidden
                className="absolute -right-2 -top-2 -z-10 h-28 w-28 rounded-full border-2 border-dashed border-brand-300/50"
              />

              <LaptopMockup />

              {/* Floating cards (desktop only) — 3 cards, no clipping */}
              <div className="pointer-events-none absolute inset-0 hidden lg:block">
                {/* Leads — top-left, kept inside frame */}
                <div className="animate-float-slow absolute left-[-2%] top-[6%]">
                  <StatCard
                    Icon={Users}
                    iconBg="bg-brand-50"
                    iconColor="text-brand-500"
                    label="Leads"
                    value="128"
                    delta="24%"
                    size="sm"
                  />
                </div>

                {/* Enquiries — top-right, kept inside frame */}
                <div className="animate-float-med absolute right-[-2%] top-[14%]">
                  <StatCard
                    Icon={MessageCircle}
                    iconBg="bg-emerald-50"
                    iconColor="text-emerald-600"
                    label="Enquiries"
                    value="56"
                    delta="30%"
                    size="sm"
                  />
                </div>

                {/* Website Traffic — bottom center, just below laptop */}
                <div className="animate-float-fast absolute -bottom-6 left-1/2 -translate-x-1/2">
                  <StatCard
                    Icon={TrendingUp}
                    iconBg="bg-peach-100"
                    iconColor="text-peach-400"
                    label="Website Traffic"
                    value="2.4K"
                    delta="28%"
                    size="sm"
                  />
                </div>
              </div>
            </div>

            {/* Mobile/tablet stat cards */}
            <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:hidden">
              <StatCard Icon={Users} iconBg="bg-brand-50" iconColor="text-brand-500" label="Leads" value="128" delta="24%" size="sm" className="!w-full" />
              <StatCard Icon={MessageCircle} iconBg="bg-emerald-50" iconColor="text-emerald-600" label="Enquiries" value="56" delta="30%" size="sm" className="!w-full" />
              <StatCard Icon={TrendingUp} iconBg="bg-peach-100" iconColor="text-peach-400" label="Website Traffic" value="2.4K" delta="28%" size="sm" className="!w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
