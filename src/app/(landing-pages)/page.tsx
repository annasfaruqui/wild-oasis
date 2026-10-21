import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-bg-primary text-text-primary selection:bg-brand-accent selection:text-primary-950 transition-colors duration-200">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center px-6 text-center">
        <Image
          src="/brand/bg.webp"
          alt="Dolomites mountain range with forest cabins"
          fill
          priority
          quality={85}
          className="object-cover object-center brightness-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/60 via-transparent to-primary-950/90" />

        <div className="relative z-10 max-w-4xl space-y-6 pt-20">
          <span className="inline-block rounded-full border border-brand-accent/30 bg-primary-950/70 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent-300 backdrop-blur-md">
            The Dolomites &bull; Italy
          </span>
          <h1 className="text-5xl font-light tracking-tight text-accent-50 sm:text-7xl md:text-8xl">
            Welcome to paradise.
          </h1>
          <p className="mx-auto max-w-2xl text-base text-primary-100 sm:text-xl font-light leading-relaxed">
            Where raw nature and refined comfort blend seamlessly. Disconnect
            from the noise and immerse yourself in pristine alpine wilderness.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/cabins"
              className="rounded-lg bg-brand-accent px-8 py-4 text-base font-semibold text-primary-950 shadow-xl transition-all duration-300 hover:bg-brand-accent-hover hover:shadow-brand-accent/20 hover:-translate-y-0.5"
            >
              Explore Luxury Cabins
            </Link>
            <Link
              href="/dashboard"
              className="rounded-lg border border-border-subtle bg-primary-950/70 px-8 py-4 text-base font-medium text-accent-50 backdrop-blur-md transition-all duration-300 hover:bg-primary-900/90 hover:border-brand-accent"
            >
              Guest Portal
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 bg-bg-secondary py-24 sm:py-32 transition-colors duration-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 space-y-28">
          
          {/* Story 1 */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-6 lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
                Our Sanctuary
              </span>
              <h2 className="text-3xl font-normal tracking-tight text-text-primary sm:text-5xl">
                Welcome to The Wild Oasis
              </h2>
              <div className="space-y-4 text-base text-text-secondary leading-relaxed font-light">
                <p>
                  Where nature&apos;s splendor and luxurious living meet in harmony.
                  Tucked away in the secluded heart of the Italian Dolomites, this
                  is your serene retreat away from the world.
                </p>
                <p>
                  Our bespoke wooden cabins provide a cozy base, but the real
                  freedom is found in the surrounding alpine woods. Wander through
                  towering pine groves, breathe in crisp alpine air, and gaze at
                  unending starscapes from your private hot tub or fire pit.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-2xl lg:col-span-5 aspect-[4/3] border border-border-subtle">
              <Image
                src="/about/about-1.webp"
                alt="Family sitting around campfire outside wooden cabin"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Story 2 */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="relative order-2 lg:order-1 overflow-hidden rounded-2xl shadow-2xl lg:col-span-5 aspect-[4/3] border border-border-subtle">
              <Image
                src="/about/about-2.webp"
                alt="The family team running The Wild Oasis"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="order-1 lg:order-2 space-y-6 lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
                Heritage & Tradition
              </span>
              <h2 className="text-3xl font-normal tracking-tight text-text-primary sm:text-5xl">
                Managed by our family since 1962
              </h2>
              <div className="space-y-4 text-base text-text-secondary leading-relaxed font-light">
                <p>
                  For over six decades, The Wild Oasis has remained a family-guided
                  haven. Founded by our grandparents, every corner has been shaped
                  with care and commitment to authentic hospitality.
                </p>
                <p>
                  Here, you are not simply a reservation number; you are part of
                  our extended community. Experience genuine warmth, bespoke
                  mountain service, and memories that last a lifetime.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/cabins"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent transition-colors hover:text-brand-accent-hover"
                >
                  Discover available dates &rarr;
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
