import Image from "next/image";
import Link from "next/link";
import about1Image from "@public/about/about-1.webp";
import about2Image from "@public/about/about-2.webp";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 py-24 transition-colors duration-200 sm:py-32"
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
                freedom is found in the surrounding alpine woods. Wander through
                towering pine groves, breathe in crisp alpine air, and gaze at
                unending starscapes from your private hot tub or fire pit.
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
                href="/cabins-overview"
                className="inline-flex bg-action-primary px-6 py-3 text-sm font-semibold text-action-text transition-colors duration-200 hover:bg-action-primary-hover focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
              >
                Explore Our Cabins
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
