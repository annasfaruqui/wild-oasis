import { LinkButton } from "@/components/ui/link-button";
import bgImage from "@public/brand/bg.webp";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="hero-section"
      className="relative flex min-h-screen items-center justify-center px-6 text-center"
    >
      <Image
        src={bgImage}
        alt="Dolomites mountain range with forest cabins"
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        quality={85}
        className="object-cover object-center brightness-70"
      />
      {/* Top subtle vignette for navbar clarity */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-linear-to-b from-black/40 via-black/15 to-transparent" />

      {/* Bottom premium black gradient for text legibility and cinematic depth */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/75 via-black/50 to-transparent" />

      <div className="relative z-10 max-w-4xl space-y-6 pt-24 pb-16">
        <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-widest text-accent-primary uppercase backdrop-blur-md">
          The Dolomites &bull; Italy
        </span>
        <h1 className="text-5xl font-light tracking-tight text-text-primary sm:text-7xl md:text-8xl">
          Welcome to paradise.
        </h1>
        <p className="mx-auto max-w-2xl text-base leading-relaxed font-light text-text-secondary sm:text-xl">
          Where raw nature and refined comfort blend seamlessly. Disconnect from
          the noise and immerse yourself in pristine alpine wilderness.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <LinkButton href="/cabins-overview" size="xl">
            Explore Luxury Cabins
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
