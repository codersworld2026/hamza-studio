import { useState } from "react";
import {
  Menu,
  X,
  MessageCircle,
  Mic,
  LayoutGrid,
  UserCircle2,
  Mail,
} from "lucide-react";
import Logo from "./Logo.jsx";
import { WHATSAPP_URL } from "../config/contact.js";

const NAV_LINKS = [
  { label: "Services", href: "#services", Icon: LayoutGrid },
  { label: "About", href: "#about", Icon: UserCircle2 },
  { label: "Contact", href: "#contact", Icon: Mail },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-ink-900/5 bg-white/70 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <a href="#" className="group flex items-center gap-3">
          <Logo className="h-12 w-12 transition-transform group-hover:-rotate-3 sm:h-14 sm:w-14" />
          <span className="flex flex-col leading-none">
            <span className="inline-flex items-baseline gap-1 text-[26px] font-extrabold tracking-tight sm:text-[32px]">
              <span className="bg-gradient-to-br from-brand-600 via-brand-700 to-ink-900 bg-clip-text text-transparent">
                Hamza Studio
              </span>
              <span
                aria-hidden
                className="h-2 w-2 translate-y-[1px] rounded-full bg-peach-400 shadow-[0_0_0_3px_rgba(255,154,90,0.18)] sm:h-2.5 sm:w-2.5"
              />
            </span>
            <span className="font-script mt-1 text-[16px] font-bold leading-none tracking-tight text-ink-500 sm:text-[19px]">
              “Just send me a voice note and consider it done.”
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex xl:gap-12">
          {NAV_LINKS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              className="group inline-flex items-center gap-2 text-[18px] font-extrabold text-ink-700 transition-colors hover:text-ink-900"
            >
              <Icon className="h-[18px] w-[18px] transition-colors group-hover:text-brand-500" strokeWidth={2.4} />
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-emerald-500/25 bg-white px-4 py-2.5 text-[14px] font-bold text-emerald-700 shadow-[0_8px_20px_-14px_rgba(16,185,129,0.4)] transition-all hover:-translate-y-0.5 hover:border-emerald-500/50 hover:text-emerald-800 lg:inline-flex"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
              <Mic className="h-3 w-3" strokeWidth={2.6} />
            </span>
            Send Voice Note
          </a>

          <a
            href="#contact-form"
            className="hidden items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-[14px] font-bold text-white shadow-[0_10px_24px_-10px_rgba(37,99,235,0.7)] ring-1 ring-brand-500/20 transition-all hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-[0_16px_32px_-12px_rgba(37,99,235,0.7)] sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2.4} />
            Let&rsquo;s Talk
          </a>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ink-900/10 bg-white text-ink-900 lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink-900/5 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
            {NAV_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-3 rounded-xl px-3 py-3 text-base font-bold text-ink-700 hover:bg-skysoft-100"
              >
                <Icon className="h-4 w-4 text-brand-500" strokeWidth={2.2} />
                {label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/25 bg-white px-6 py-3 text-sm font-bold text-emerald-700"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
                <Mic className="h-3 w-3" strokeWidth={2.6} />
              </span>
              Send Voice Note
            </a>
            <a
              href="#contact-form"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-bold text-white shadow-[0_8px_24px_-10px_rgba(37,99,235,0.65)] hover:bg-brand-600"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={2.4} />
              Let&rsquo;s Talk
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
