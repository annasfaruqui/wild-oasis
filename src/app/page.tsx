import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-950 text-stone-100 selection:bg-amber-500 selection:text-stone-900">
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
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-transparent to-stone-950/90" />

        <div className="relative z-10 max-w-4xl space-y-6 pt-20">
          <span className="inline-block rounded-full border border-amber-400/30 bg-stone-900/60 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-amber-300 backdrop-blur-md">
            The Dolomites &bull; Italy
          </span>
          <h1 className="text-5xl font-light tracking-tight text-stone-50 sm:text-7xl md:text-8xl">
            Welcome to paradise.
          </h1>
          <p className="mx-auto max-w-2xl text-base text-stone-300 sm:text-xl font-light leading-relaxed">
            Where raw nature and refined comfort blend seamlessly. Disconnect
            from the noise and immerse yourself in pristine alpine wilderness.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/cabins"
              className="rounded-lg bg-amber-500 px-8 py-4 text-base font-semibold text-stone-900 shadow-xl transition-all duration-300 hover:bg-amber-400 hover:shadow-amber-500/20 hover:-translate-y-0.5"
            >
              Explore Luxury Cabins
            </Link>
            <Link
              href="/account"
              className="rounded-lg border border-stone-400/40 bg-stone-900/60 px-8 py-4 text-base font-medium text-stone-100 backdrop-blur-md transition-all duration-300 hover:bg-stone-800/80 hover:border-amber-400/50"
            >
              Guest Portal
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 bg-stone-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 space-y-28">
          
          {/* Story 1 */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-6 lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                Our Sanctuary
              </span>
              <h2 className="text-3xl font-normal tracking-tight text-stone-50 sm:text-5xl">
                Welcome to The Wild Oasis
              </h2>
              <div className="space-y-4 text-base text-stone-300 leading-relaxed font-light">
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

            <div className="relative overflow-hidden rounded-2xl shadow-2xl lg:col-span-5 aspect-[4/3]">
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
            <div className="relative order-2 lg:order-1 overflow-hidden rounded-2xl shadow-2xl lg:col-span-5 aspect-[4/3]">
              <Image
                src="/about/about-2.webp"
                alt="The family team running The Wild Oasis"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="order-1 lg:order-2 space-y-6 lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                Heritage & Tradition
              </span>
              <h2 className="text-3xl font-normal tracking-tight text-stone-50 sm:text-5xl">
                Managed by our family since 1962
              </h2>
              <div className="space-y-4 text-base text-stone-300 leading-relaxed font-light">
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
                  className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 transition-colors hover:text-amber-300"
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
