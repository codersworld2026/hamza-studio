/**
 * Premium laptop mockup — pure HTML/SVG, no images.
 * Slight perspective tilt + layered window behind for depth.
 *
 * Inside the screen we render a clean "Recent project — coming soon" placeholder
 * until a real project screenshot is supplied (see <ScreenContent />).
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

            {/* Page content — placeholder until a real project screenshot is supplied */}
            <ScreenContent />
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

function ScreenContent() {
  return (
    <div className="flex h-[calc(100%-2.5rem)] items-center justify-center bg-gradient-to-br from-skysoft-100/50 via-white to-peach-100/30 p-5 sm:p-8">
      <div className="w-full max-w-md text-center">
        {/* Skeleton hero — pale, intentionally vague */}
        <div className="mx-auto rounded-xl border border-ink-900/5 bg-white p-5 shadow-[0_14px_30px_-18px_rgba(11,23,51,0.18)]">
          <div className="mx-auto h-2.5 w-2/3 rounded-full bg-ink-900/10" />
          <div className="mx-auto mt-2 h-2.5 w-1/2 rounded-full bg-ink-900/10" />
          <div className="mx-auto mt-4 h-1.5 w-3/4 rounded-full bg-ink-900/8" />
          <div className="mx-auto mt-1.5 h-1.5 w-2/3 rounded-full bg-ink-900/8" />
          <div className="mx-auto mt-1.5 h-1.5 w-1/2 rounded-full bg-ink-900/8" />

          <div className="mt-5 flex items-center justify-center gap-2">
            <div className="h-5 w-20 rounded-full bg-brand-500/80" />
            <div className="h-5 w-16 rounded-full bg-ink-900/8" />
          </div>
        </div>

        <div className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-ink-500 ring-1 ring-ink-900/5 shadow-[0_4px_10px_-6px_rgba(11,23,51,0.15)]">
          <span className="h-1.5 w-1.5 rounded-full bg-peach-400" />
          Recent project — coming soon
        </div>
      </div>
    </div>
  );
}
