import { Quote } from "lucide-react";

/**
 * Testimonials section — supply 1–3 entries via the `testimonials` prop.
 * Renders nothing when the array is empty (no fake "coming soon" placeholder,
 * since that itself reads like fabricated trust signal).
 *
 * Entry shape:
 *   {
 *     id:      "slug",
 *     quote:   "What the client said.",
 *     name:    "Client name",
 *     role:    "Owner, Acme Café"  // role + business
 *     avatar:  "/avatars/client.jpg" | null,
 *   }
 */
export default function Testimonials({ testimonials = [] }) {
  if (!Array.isArray(testimonials) || testimonials.length === 0) {
    return null;
  }

  const cols =
    testimonials.length === 1
      ? "lg:grid-cols-1"
      : testimonials.length === 2
        ? "lg:grid-cols-2"
        : "lg:grid-cols-3";

  return (
    <section id="testimonials" className="relative scroll-mt-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-10 h-[320px] w-[320px] rounded-full bg-skysoft-200/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-20 pt-12 sm:px-8 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/15 bg-white/70 px-4 py-1.5 text-[12.5px] font-semibold text-brand-700 backdrop-blur">
            <Quote className="h-3.5 w-3.5" strokeWidth={2.4} />
            Testimonials
          </div>
          <h2 className="mt-5 font-display text-[34px] font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-[42px]">
            What clients{" "}
            <span className="text-brand-500">say</span>.
          </h2>
        </div>

        <div className={`mt-12 grid grid-cols-1 gap-6 ${cols} lg:gap-8`}>
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  const { quote, name, role, avatar } = testimonial;

  return (
    <figure className="relative flex h-full flex-col rounded-2xl border border-ink-900/5 bg-white p-7 shadow-[0_18px_40px_-22px_rgba(11,23,51,0.18)]">
      <Quote className="h-6 w-6 text-brand-500/30" strokeWidth={2} />
      <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-700">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-900/5 pt-5">
        {avatar ? (
          <img
            src={avatar}
            alt={`${name} avatar`}
            loading="lazy"
            className="h-10 w-10 rounded-full object-cover ring-1 ring-ink-900/10"
          />
        ) : (
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-skysoft-200 text-[13px] font-bold text-brand-700 ring-1 ring-ink-900/5">
            {name?.[0] ?? "—"}
          </span>
        )}
        <div>
          <div className="text-[13.5px] font-bold text-ink-900">{name}</div>
          {role && <div className="text-[12.5px] text-ink-500">{role}</div>}
        </div>
      </figcaption>
    </figure>
  );
}
