import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import about1Image from "@public/about/about-1.webp";
import about2Image from "@public/about/about-2.webp";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-bg-primary text-text-primary transition-colors duration-200 selection:bg-action-primary selection:text-action-text">
      <Navbar />

      {/* Header Banner */}
      <section className="relative flex min-h-[50vh] items-center justify-center bg-bg-surface px-6 pt-24 text-center">
        <div className="mx-auto max-w-4xl space-y-4">
          <span className="text-xs font-semibold tracking-widest text-accent-primary uppercase">
            Our Heritage & Story
          </span>
          <h1 className="text-4xl font-light tracking-tight text-text-primary sm:text-6xl">
            Where Wilderness Meets Hospitality
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Nestled in the pristine Italian Dolomites since 1962, The Wild Oasis
            is an intimate haven dedicated to mindful luxury and authentic
            mountain traditions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl space-y-24 px-6 py-20 lg:px-12">
        {/* Story Section 1 */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-6 lg:col-span-7">
            <span className="text-xs font-semibold tracking-widest text-accent-primary uppercase">
              The Sanctuary
            </span>
            <h2 className="text-3xl font-normal tracking-tight text-text-primary sm:text-4xl">
              A Quiet Haven in the Peaks
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-text-secondary">
              <p>
                Our philosophy is simple: authentic luxury does not compete with
                nature, it frames it. Built with locally harvested timber and
                native stone, every cabin is positioned for solitude, pristine
                mountain panoramas, and total tranquility.
              </p>
              <p>
                Whether you spend your afternoon wandering fragrant pine forests
                or relaxing in an open-air cedar hot tub under starlit skies,
                The Wild Oasis offers an environment where time gently slows
                down.
              </p>
            </div>
          </div>
          <div className="relative aspect-4/3 overflow-hidden lg:col-span-5">
            <Image
              src={about1Image}
              alt="Cozy cabin campfire gathering"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </div>

        {/* Philosophy Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="bg-bg-surface p-8">
            <span className="text-sm font-semibold text-accent-primary">
              01
            </span>
            <h3 className="mt-4 text-xl font-medium text-text-primary">
              Natural Materials
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              Handcrafted walnut, aged pine, and untreated wool blankets that
              age gracefully with every passing season.
            </p>
          </div>
          <div className="bg-bg-surface p-8">
            <span className="text-sm font-semibold text-accent-primary">
              02
            </span>
            <h3 className="mt-4 text-xl font-medium text-text-primary">
              Intimate Seclusion
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              Only eight private cabins spread across thirty wooded acres,
              ensuring serenity, personal space, and quiet rest.
            </p>
          </div>
          <div className="bg-bg-surface p-8">
            <span className="text-sm font-semibold text-accent-primary">
              03
            </span>
            <h3 className="mt-4 text-xl font-medium text-text-primary">
              Sustainable Stewardship
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              Powered by alpine solar arrays and heated with closed-loop
              geothermal systems that protect our fragile wilderness.
            </p>
          </div>
        </div>

        {/* Story Section 2 */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="relative order-2 aspect-4/3 overflow-hidden lg:order-1 lg:col-span-5">
            <Image
              src={about2Image}
              alt="The family team of The Wild Oasis"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              placeholder="blur"
              className="object-cover"
            />
          </div>
          <div className="order-1 space-y-6 lg:order-2 lg:col-span-7">
            <span className="text-xs font-semibold tracking-widest text-accent-primary uppercase">
              Family Guided
            </span>
            <h2 className="text-3xl font-normal tracking-tight text-text-primary sm:text-4xl">
              Three Generations of Care
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-text-secondary">
              <p>
                Since 1962, our family has personally welcomed guests from
                across the globe. We treat every visitor as an extended guest of
                our home, sharing secret trails, local sourdough loaves, and
                personalized itineraries.
              </p>
              <p>
                We invite you to experience the harmony of the Dolomites with
                us.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/cabins"
                className="inline-flex bg-action-primary px-6 py-3 text-sm font-semibold text-action-text transition-colors duration-200 hover:bg-action-primary-hover focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
              >
                Explore Our Cabins
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
