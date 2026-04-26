import { useState } from "react";
import {
  Send,
  User,
  Mail,
  Phone,
  Lightbulb,
  MessageCircle,
  Mic,
  ShieldCheck,
  UserCircle2,
  ListChecks,
  Check,
} from "lucide-react";
import { EMAIL_URL, WHATSAPP_URL } from "../config/contact.js";

const FIELDS = [
  { name: "name",  label: "Your name",     placeholder: "Jane Doe",        type: "text",  Icon: User,  required: true },
  { name: "email", label: "Email address", placeholder: "you@example.com", type: "email", Icon: Mail,  required: true },
  { name: "phone", label: "Phone number",  placeholder: "+44 7000 000000", type: "tel",   Icon: Phone, required: false },
];

const TRUST_POINTS = [
  { Icon: ShieldCheck,  title: "No confusing agency process" },
  { Icon: UserCircle2,  title: "Work directly with Hamza" },
  { Icon: ListChecks,   title: "Clear updates from first message to launch" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", idea: "" });

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = `New project enquiry from ${form.name || "a visitor"}`;
    const body =
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone || "(not provided)"}\n\n` +
      `Project idea:\n${form.idea}`;

    const base = EMAIL_URL.startsWith("mailto:") ? EMAIL_URL : `mailto:${EMAIL_URL}`;
    window.location.href = `${base}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="relative scroll-mt-24">
      {/* soft background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-10 h-[360px] w-[360px] rounded-full bg-skysoft-200/60 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[360px] w-[360px] rounded-full bg-emerald-100/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-24 pt-10 sm:px-8 lg:px-10 lg:pb-32">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-white/70 px-4 py-1.5 text-[12.5px] font-semibold text-emerald-700 backdrop-blur">
            <MessageCircle className="h-3.5 w-3.5" strokeWidth={2.4} />
            Let&rsquo;s Talk
          </div>
          <h2 className="mt-5 font-display text-[34px] font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-[42px]">
            Tell me about your{" "}
            <span className="text-brand-500">project</span>.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-ink-500">
            The fastest way to start: send a quick voice note on WhatsApp.
            Prefer to type? Use the form below.
          </p>
        </div>

        {/* PRIMARY: WhatsApp */}
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl border border-emerald-500/25 bg-gradient-to-br from-emerald-50/80 via-white to-white p-6 shadow-[0_24px_60px_-24px_rgba(16,185,129,0.35)] sm:p-8">
            {/* subtle decoration */}
            <div aria-hidden className="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-emerald-300/25 blur-3xl" />
            <div aria-hidden className="absolute -left-12 -bottom-16 h-40 w-40 rounded-full bg-emerald-200/30 blur-3xl" />

            <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-[0_18px_36px_-12px_rgba(16,185,129,0.7)] ring-4 ring-white">
                <Mic className="h-7 w-7" strokeWidth={2.4} />
              </div>

              <div className="flex-1">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                  Fastest reply
                </div>
                <h3 className="mt-2 font-display text-[24px] font-bold tracking-tight text-ink-900 sm:text-[28px]">
                  Prefer WhatsApp?
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-500">
                  Send me a quick voice note explaining what you need, and
                  I&rsquo;ll reply with the next steps.
                </p>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center gap-2.5 self-stretch rounded-full bg-emerald-500 px-7 py-4 text-[15px] font-extrabold text-white shadow-[0_16px_36px_-12px_rgba(16,185,129,0.7)] ring-1 ring-emerald-500/30 transition-all hover:-translate-y-0.5 hover:bg-emerald-600 sm:self-center"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 ring-2 ring-white/30">
                  <MessageCircle className="h-4 w-4" strokeWidth={2.6} />
                </span>
                Send a Voice Note
              </a>
            </div>
          </div>

          {/* Trust points */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {TRUST_POINTS.map(({ Icon, title }) => (
              <div
                key={title}
                className="flex items-center gap-2.5 rounded-xl border border-ink-900/5 bg-white px-3.5 py-3 text-[13px] font-semibold text-ink-700 shadow-[0_6px_18px_-12px_rgba(11,23,51,0.18)]"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Icon className="h-4 w-4" strokeWidth={2.2} />
                </span>
                {title}
              </div>
            ))}
          </div>
        </div>

        {/* SECONDARY: form divider */}
        <div className="mx-auto mt-16 flex max-w-3xl items-center gap-4">
          <span className="h-px flex-1 bg-ink-900/10" />
          <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-ink-400">
            Or fill in the form
          </span>
          <span className="h-px flex-1 bg-ink-900/10" />
        </div>

        {/* SECONDARY: form */}
        <form
          id="contact-form"
          onSubmit={onSubmit}
          className="relative mx-auto mt-8 max-w-3xl scroll-mt-24 rounded-3xl border border-ink-900/5 bg-white p-6 shadow-[0_30px_60px_-30px_rgba(11,23,51,0.25)] sm:p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {FIELDS.map(({ name, label, placeholder, type, Icon, required }) => (
              <div key={name} className={name === "phone" ? "sm:col-span-2" : ""}>
                <label htmlFor={name} className="mb-1.5 block text-[13px] font-semibold text-ink-700">
                  {label} {required && <span className="text-brand-500">*</span>}
                </label>
                <div className="relative">
                  <Icon className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" strokeWidth={2.2} />
                  <input
                    id={name}
                    name={name}
                    type={type}
                    required={required}
                    value={form[name]}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="w-full rounded-xl border border-ink-900/10 bg-white py-3 pl-10 pr-3.5 text-[14.5px] text-ink-900 placeholder:text-ink-400/80 transition-all outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15"
                  />
                </div>
              </div>
            ))}

            <div className="sm:col-span-2">
              <label htmlFor="idea" className="mb-1.5 block text-[13px] font-semibold text-ink-700">
                Tell me about your idea <span className="text-brand-500">*</span>
              </label>
              <div className="relative">
                <Lightbulb className="absolute left-3.5 top-3.5 h-4 w-4 text-ink-400" strokeWidth={2.2} />
                <textarea
                  id="idea"
                  name="idea"
                  required
                  rows={5}
                  value={form.idea}
                  onChange={onChange}
                  placeholder="A few lines about your business, what you need, and any deadlines…"
                  className="w-full resize-none rounded-xl border border-ink-900/10 bg-white py-3 pl-10 pr-3.5 text-[14.5px] text-ink-900 placeholder:text-ink-400/80 transition-all outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-[15px] font-bold text-white shadow-[0_14px_30px_-12px_rgba(37,99,235,0.7)] ring-1 ring-brand-500/20 transition-all hover:-translate-y-0.5 hover:bg-brand-600"
          >
            Send Enquiry
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.4} />
          </button>

          <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[12px] text-ink-400">
            <Check className="h-3.5 w-3.5 text-emerald-500" strokeWidth={2.6} />
            Your details will only be used to reply to your enquiry.
          </p>
        </form>
      </div>
    </section>
  );
}
