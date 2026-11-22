import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import bgImage from "@public/brand/bg.webp";
import about1Image from "@public/about/about-1.webp";
import about2Image from "@public/about/about-2.webp";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-bg-primary text-text-primary transition-colors duration-200 selection:bg-action-primary selection:text-action-text">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center px-6 text-center">
        <Image
          src={bgImage}
          alt="Dolomites mountain range with forest cabins"
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          quality={85}
          className="object-cover object-center brightness-60"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#19140f]/75 via-transparent to-[#19140f]/95" />

        <div className="relative z-10 max-w-4xl space-y-6 pt-20">
          <span className="inline-block bg-[#19140f]/70 px-4 py-1.5 text-xs font-medium tracking-widest text-accent-primary uppercase backdrop-blur-md">
            The Dolomites &bull; Italy
          </span>
          <h1 className="text-5xl font-light tracking-tight text-[#f5ebdd] sm:text-7xl md:text-8xl">
            Welcome to paradise.
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed font-light text-[#bdb09f] sm:text-xl">
            Where raw nature and refined comfort blend seamlessly. Disconnect
            from the noise and immerse yourself in pristine alpine wilderness.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/cabins"
              className="bg-action-primary px-8 py-4 text-base font-semibold text-action-text transition-colors duration-200 hover:bg-action-primary-hover focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
            >
              Explore Luxury Cabins
            </Link>
            <Link
              href="/dashboard"
              className="bg-[#2b241c]/80 px-8 py-4 text-base font-medium text-[#f5ebdd] backdrop-blur-md transition-colors duration-200 hover:bg-[#19140f] focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
            >
              Guest Portal
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative z-10 bg-bg-surface py-24 transition-colors duration-200 sm:py-32"
      >
        <div className="mx-auto max-w-7xl space-y-28 px-6 lg:px-12">
          {/* Story 1 */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="space-y-6 lg:col-span-7">
              <span className="text-xs font-semibold tracking-widest text-accent-primary uppercase">
                Our Sanctuary
              </span>
              <h2 className="text-3xl font-normal tracking-tight text-text-primary sm:text-5xl">
                Welcome to The Wild Oasis
              </h2>
              <div className="space-y-4 text-base leading-relaxed font-light text-text-secondary">
                <p>
                  Where nature&apos;s splendor and luxurious living meet in
                  harmony. Tucked away in the secluded heart of the Italian
                  Dolomites, this is your serene retreat away from the world.
                </p>
                <p>
                  Our bespoke wooden cabins provide a cozy base, but the real
                  freedom is found in the surrounding alpine woods. Wander
                  through towering pine groves, breathe in crisp alpine air, and
                  gaze at unending starscapes from your private hot tub or fire
                  pit.
                </p>
              </div>
            </div>

            <div className="relative aspect-4/3 overflow-hidden lg:col-span-5">
              <Image
                src={about1Image}
                alt="Family sitting around campfire outside wooden cabin"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                placeholder="blur"
                className="object-cover"
              />
            </div>
          </div>

          {/* Story 2 */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="relative order-2 aspect-4/3 overflow-hidden lg:order-1 lg:col-span-5">
              <Image
                src={about2Image}
                alt="The family team running The Wild Oasis"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                placeholder="blur"
                className="object-cover"
              />
            </div>

            <div className="order-1 space-y-6 lg:order-2 lg:col-span-7">
              <span className="text-xs font-semibold tracking-widest text-accent-primary uppercase">
                Heritage & Tradition
              </span>
              <h2 className="text-3xl font-normal tracking-tight text-text-primary sm:text-5xl">
                Managed by our family since 1962
              </h2>
              <div className="space-y-4 text-base leading-relaxed font-light text-text-secondary">
                <p>
                  For over six decades, The Wild Oasis has remained a
                  family-guided haven. Founded by our grandparents, every corner
                  has been shaped with care and commitment to authentic
                  hospitality.
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
                  className="inline-flex items-center gap-2 text-sm font-semibold text-link transition-colors duration-200 hover:underline focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
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
