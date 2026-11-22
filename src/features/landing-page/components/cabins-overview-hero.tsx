export function CabinsOverviewHero() {
  return (
    <section
      id="hero-section"
      className="relative border-b border-border-subtle bg-bg-surface/50 px-6 pt-32 pb-14 sm:pt-36 sm:pb-16 lg:px-12 lg:pt-40 lg:pb-18"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <span className="inline-block text-xs font-semibold tracking-widest text-accent-primary uppercase">
              Luxury Cabin Collection &bull; The Dolomites
            </span>
            <h1 className="text-4xl font-light tracking-tight text-text-primary sm:text-6xl lg:text-7xl">
              Our Mountain Sanctuary
            </h1>
          </div>

          <div className="max-w-md space-y-4 lg:pb-2">
            <p className="text-sm leading-relaxed font-light text-text-secondary sm:text-base">
              Each cabin is individually designed to blend seamlessly with the
              alpine forest while offering private luxury, modern warmth, and
              peaceful rest.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-accent-secondary">
              <span>12 Bespoke Chalets</span>
              <span>&bull;</span>
              <span>1&ndash;12 Guest Capacity</span>
              <span>&bull;</span>
              <span>Wood-Fired Hot Tubs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
