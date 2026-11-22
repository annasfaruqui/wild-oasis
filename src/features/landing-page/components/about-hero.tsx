export function AboutHero() {
  return (
    <section
      id="hero-section"
      className="relative border-b border-border-subtle bg-bg-surface/50 px-6 pt-32 pb-14 sm:pt-36 sm:pb-16 lg:px-12 lg:pt-40 lg:pb-18"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <span className="inline-block text-xs font-semibold tracking-widest text-accent-primary uppercase">
              Our Heritage &bull; Established 1962
            </span>
            <h1 className="text-4xl font-light tracking-tight text-text-primary sm:text-6xl lg:text-7xl">
              Where Wilderness Meets Hospitality
            </h1>
          </div>

          <div className="max-w-md space-y-4 lg:pb-2">
            <p className="text-sm leading-relaxed font-light text-text-secondary sm:text-base">
              Nestled in the pristine Italian Dolomites since 1962, The Wild
              Oasis is an intimate sanctuary dedicated to mindful luxury,
              authentic mountain traditions, and raw alpine nature.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-accent-secondary">
              <span>Three Generations</span>
              <span>&bull;</span>
              <span>60+ Years of Stewardship</span>
              <span>&bull;</span>
              <span>Trentino-Alto Adige</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
