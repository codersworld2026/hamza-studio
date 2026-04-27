import { MapPin, User, ImageOff } from "lucide-react";

/**
 * About section — every slot is an explicit placeholder until real content is supplied.
 *
 * To replace, edit the four constants below. Removing the [PLACEHOLDER] prefix
 * is what flips the corresponding badge off.
 */
const ABOUT = {
  photo: null, // path to a square image under public/, e.g. "/about-hamza.jpg"
  name: "[PLACEHOLDER] Full name",
  location: "[PLACEHOLDER] City, Country",
  bio: "[PLACEHOLDER] Short bio paragraph — 2–3 sentences about who you are, your background, and how you ended up building websites for small businesses.",
};

const isPlaceholder = (value) =>
  typeof value === "string" && value.startsWith("[PLACEHOLDER]");

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-10 h-[360px] w-[360px] rounded-full bg-skysoft-200/50 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-[280px] w-[280px] rounded-full bg-peach-100/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-20 pt-12 sm:px-8 lg:px-10 lg:pb-28">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[40fr_60fr] lg:gap-14">
          {/* Photo */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-ink-900/5 bg-white shadow-[0_30px_60px_-30px_rgba(11,23,51,0.25)]">
              {ABOUT.photo ? (
                <img
                  src={ABOUT.photo}
                  alt={isPlaceholder(ABOUT.name) ? "Profile photo" : ABOUT.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-skysoft-100 via-white to-peach-100/50 text-ink-400">
                  <ImageOff className="h-7 w-7" strokeWidth={1.8} />
                  <span className="rounded-full bg-peach-400 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                    Placeholder
                  </span>
                  <span className="text-[11.5px] font-semibold uppercase tracking-[0.18em]">
                    [PLACEHOLDER: profile photo]
                  </span>
                </div>
              )}
            </div>

            {/* Decorative ring */}
            <div
              aria-hidden
              className="absolute -bottom-3 -right-3 -z-10 h-32 w-32 rounded-3xl border-2 border-dashed border-brand-300/50"
            />
          </div>

          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/15 bg-white/70 px-4 py-1.5 text-[12.5px] font-semibold text-brand-700 backdrop-blur">
              <User className="h-3.5 w-3.5" strokeWidth={2.4} />
              About
            </div>

            <h2 className="mt-5 font-display text-[34px] font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-[42px]">
              {isPlaceholder(ABOUT.name) ? (
                <>
                  Hi, I&rsquo;m{" "}
                  <PlaceholderInline>{ABOUT.name}</PlaceholderInline>.
                </>
              ) : (
                <>Hi, I&rsquo;m <span className="text-brand-500">{ABOUT.name}</span>.</>
              )}
            </h2>

            <div className="mt-4 inline-flex items-center gap-1.5 text-[14px] text-ink-500">
              <MapPin className="h-4 w-4 text-brand-500" strokeWidth={2.2} />
              {isPlaceholder(ABOUT.location) ? (
                <PlaceholderInline>{ABOUT.location}</PlaceholderInline>
              ) : (
                <span className="font-semibold text-ink-700">{ABOUT.location}</span>
              )}
            </div>

            <div className="mt-6 max-w-xl text-[16px] leading-relaxed text-ink-500">
              {isPlaceholder(ABOUT.bio) ? (
                <PlaceholderInline block>{ABOUT.bio}</PlaceholderInline>
              ) : (
                <p>{ABOUT.bio}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PlaceholderInline({ children, block = false }) {
  const Tag = block ? "p" : "span";
  return (
    <Tag className="inline-block rounded-md border border-dashed border-peach-400/60 bg-peach-100/40 px-2 py-0.5 text-peach-400/90">
      {children}
    </Tag>
  );
}
