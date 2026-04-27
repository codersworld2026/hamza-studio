import { ArrowUpRight, Briefcase, ImageOff } from "lucide-react";

/**
 * Work / Portfolio section.
 *
 * Pass an array of project entries via `projects`:
 *   {
 *     id:           "slug",
 *     title:        "Project title",
 *     description:  "1–2 sentence description",
 *     outcome:      "Measurable outcome (e.g. '+40% bookings in 3 months')",
 *     screenshot:   "/screenshots/project-name.png" | null,
 *     url:          "https://example.com" | null,
 *     isPlaceholder: false,
 *   }
 *
 * If the array is empty, the section renders a clean "coming soon" empty state
 * — never invented projects.
 */

const DEFAULT_PROJECTS = [
  {
    id: "placeholder-1",
    title: "[PLACEHOLDER] Project name",
    description:
      "[PLACEHOLDER] Replace this with a 1–2 sentence description of the real project.",
    outcome:
      "[PLACEHOLDER] Replace with a measurable outcome (e.g. '+40% bookings in 3 months').",
    screenshot: null,
    url: null,
    isPlaceholder: true,
  },
];

export default function Work({ projects = DEFAULT_PROJECTS }) {
  const hasProjects = Array.isArray(projects) && projects.length > 0;

  return (
    <section id="work" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8 lg:px-10 lg:pb-28 lg:pt-28">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/15 bg-white/70 px-4 py-1.5 text-[12.5px] font-semibold text-brand-700 backdrop-blur">
            <Briefcase className="h-3.5 w-3.5" strokeWidth={2.4} />
            Recent work
          </div>
          <h2 className="mt-5 font-display text-[34px] font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-[42px]">
            Selected{" "}
            <span className="text-brand-500">projects</span>.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-ink-500">
            A few of the websites I&rsquo;ve built for small businesses,
            freelancers and startups.
          </p>
        </div>

        {/* Empty state */}
        {!hasProjects && (
          <div className="mx-auto mt-14 max-w-xl rounded-3xl border border-dashed border-ink-900/15 bg-white/60 p-10 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-skysoft-100 text-brand-500">
              <Briefcase className="h-5 w-5" strokeWidth={2.2} />
            </div>
            <h3 className="mt-4 font-display text-[20px] font-semibold tracking-tight text-ink-900">
              Recent work coming soon
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
              I&rsquo;m putting the finishing touches on case studies. In the
              meantime, send me a voice note and I&rsquo;ll talk you through
              recent builds.
            </p>
          </div>
        )}

        {/* Projects grid */}
        {hasProjects && (
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const { title, description, outcome, screenshot, url, isPlaceholder } = project;

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border bg-white shadow-[0_18px_40px_-22px_rgba(11,23,51,0.18)] transition-all hover:-translate-y-1 hover:shadow-[0_28px_48px_-22px_rgba(11,23,51,0.22)] ${
        isPlaceholder
          ? "border-dashed border-ink-900/15"
          : "border-ink-900/5"
      }`}
    >
      {/* Screenshot / placeholder */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-ink-900/5 bg-skysoft-100">
        {screenshot ? (
          <img
            src={screenshot}
            alt={`${title} screenshot`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-skysoft-100 via-white to-peach-100/40">
            <div className="flex flex-col items-center gap-2 text-ink-400">
              <ImageOff className="h-6 w-6" strokeWidth={1.8} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                {isPlaceholder ? "Placeholder" : "Screenshot pending"}
              </span>
            </div>
          </div>
        )}

        {isPlaceholder && (
          <div className="absolute left-3 top-3 rounded-full bg-peach-400 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
            Placeholder
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-6">
        <h3 className="font-display text-[18px] font-bold tracking-tight text-ink-900">
          {title}
        </h3>
        <p className="mt-2 text-[13.5px] leading-relaxed text-ink-500">
          {description}
        </p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-[12px] font-bold text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          {outcome}
        </div>

        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-bold text-brand-600 transition-colors hover:text-brand-700"
          >
            Visit site
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.4} />
          </a>
        )}
      </div>
    </article>
  );
}
