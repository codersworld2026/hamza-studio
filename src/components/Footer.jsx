import { MessageCircle, Mail } from "lucide-react";
import Logo from "./Logo.jsx";
import { SOCIALS, WHATSAPP_URL, EMAIL_URL } from "../config/contact.js";

/* Brand-correct inline SVG marks (lucide doesn't ship the new X / IG glyphs cleanly) */
const XIcon = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.84l-5.36-6.99L4.16 22H.9l8.04-9.18L.62 2h7l4.84 6.39L18.244 2zm-1.2 18h1.84L7.05 4H5.13l11.91 16z" />
  </svg>
);

const InstagramIcon = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const SOCIAL_LINKS = [
  { name: "X",         href: SOCIALS.x,         Icon: XIcon },
  { name: "Instagram", href: SOCIALS.instagram, Icon: InstagramIcon },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-900/5 bg-white/60 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-14">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          {/* Brand */}
          <div>
            <a href="#" className="group flex items-center gap-3">
              <Logo className="h-12 w-12 transition-transform group-hover:-rotate-3" />
              <span className="inline-flex items-baseline gap-1 text-[24px] font-extrabold tracking-tight">
                <span className="bg-gradient-to-br from-brand-600 via-brand-700 to-ink-900 bg-clip-text text-transparent">
                  Hamza Studio
                </span>
                <span aria-hidden className="h-2 w-2 translate-y-[1px] rounded-full bg-peach-400" />
              </span>
            </a>
            <p className="mt-4 max-w-md text-[14px] leading-relaxed text-ink-500">
              Modern websites for small businesses, freelancers and startups —
              designed to help you look professional and win more business.
            </p>
          </div>

          {/* Direct contact + socials */}
          <div className="flex flex-col items-start gap-5 lg:items-end">
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-white px-4 py-2 text-[13px] font-bold text-emerald-700 transition-all hover:-translate-y-0.5 hover:border-emerald-500/50"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2.4} />
                WhatsApp
              </a>
              <a
                href={EMAIL_URL}
                className="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-white px-4 py-2 text-[13px] font-bold text-ink-700 transition-all hover:-translate-y-0.5 hover:border-ink-900/25"
              >
                <Mail className="h-4 w-4" strokeWidth={2.4} />
                Email
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-ink-400">
                Follow
              </span>
              <ul className="flex items-center gap-2">
                {SOCIAL_LINKS.map(({ name, href, Icon }) => (
                  <li key={name}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className="group flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 bg-white text-ink-700 shadow-[0_4px_12px_-8px_rgba(11,23,51,0.2)] transition-all hover:-translate-y-0.5 hover:border-brand-500/40 hover:bg-brand-500 hover:text-white hover:shadow-[0_10px_22px_-10px_rgba(37,99,235,0.6)]"
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider + bottom row */}
        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-3 border-t border-ink-900/5 pt-6 text-[12.5px] text-ink-400 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Hamza Studio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="#privacy"
              className="font-semibold text-ink-500 transition-colors hover:text-ink-900"
            >
              Privacy
            </a>
            <span aria-hidden>·</span>
            <p>Designed &amp; built by Hamza.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
