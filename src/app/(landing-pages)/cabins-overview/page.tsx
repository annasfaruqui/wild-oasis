import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import cabin001 from "@public/cabins/cabin-001.webp";
import cabin002 from "@public/cabins/cabin-002.webp";
import cabin003 from "@public/cabins/cabin-003.webp";
import cabin004 from "@public/cabins/cabin-004.webp";

const previewCabins = [
  {
    id: 1,
    name: "Cabin 001 — Timber Ridge",
    maxCapacity: 2,
    regularPrice: 250,
    image: cabin001,
    description:
      "A romantic sanctuary for two with panoramic valley vistas and a private wood-fired hot tub.",
  },
  {
    id: 2,
    name: "Cabin 002 — Pine Hollow",
    maxCapacity: 4,
    regularPrice: 350,
    image: cabin002,
    description:
      "Surrounded by ancient pines, featuring an open stone fireplace and spacious cedar deck.",
  },
  {
    id: 3,
    name: "Cabin 003 — Alpine Loft",
    maxCapacity: 6,
    regularPrice: 450,
    image: cabin003,
    description:
      "Two-story timber loft with cathedral ceilings and sweeping views of the craggy mountain peaks.",
  },
  {
    id: 4,
    name: "Cabin 004 — Eagle Crest",
    maxCapacity: 8,
    regularPrice: 550,
    image: cabin004,
    description:
      "Our premier retreat cabin designed for families, featuring a chef kitchen and private sauna.",
  },
];

export default function CabinsOverviewPage() {
  return (
    <div className="flex min-h-screen flex-col bg-bg-primary text-text-primary transition-colors duration-200 selection:bg-action-primary selection:text-action-text">
      <Navbar />

      {/* Hero Header */}
      <section className="relative flex min-h-[45vh] items-center justify-center bg-bg-surface px-6 pt-24 text-center">
        <div className="mx-auto max-w-4xl space-y-4">
          <span className="text-xs font-semibold tracking-widest text-accent-primary uppercase">
            Luxury Cabin Collection
          </span>
          <h1 className="text-4xl font-light tracking-tight text-text-primary sm:text-6xl">
            Our Mountain Sanctuary
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
            Each cabin is individually designed to blend seamlessly with the
            alpine forest while offering private luxury, modern warmth, and
            peaceful rest.
          </p>
        </div>
      </section>

      {/* Cabins Showcase Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {previewCabins.map((cabin) => (
            <div key={cabin.id} className="overflow-hidden bg-bg-surface">
              <div className="relative aspect-16/10 w-full overflow-hidden">
                <Image
                  src={cabin.image}
                  alt={cabin.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>

              <div className="space-y-4 p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-medium text-text-primary">
                      {cabin.name}
                    </h2>
                    <span className="mt-1 inline-block text-xs font-medium text-accent-secondary">
                      Up to {cabin.maxCapacity} guests &bull; Dolomites, Italy
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-semibold text-text-primary">
                      ${cabin.regularPrice}
                    </span>
                    <span className="block text-xs text-text-secondary">
                      / night
                    </span>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-text-secondary">
                  {cabin.description}
                </p>

                <div className="pt-2">
                  <Link
                    href="/cabins"
                    className="inline-flex w-full items-center justify-center bg-action-primary px-6 py-3 text-sm font-semibold text-action-text transition-colors duration-200 hover:bg-action-primary-hover focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
                  >
                    View Availability & Book
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-bg-surface p-8 text-center sm:p-12">
          <h3 className="text-2xl font-light text-text-primary sm:text-3xl">
            Ready to plan your escape?
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-text-secondary">
            Sign in to access real-time dates, exclusive member discounts, and
            flexible reservation management.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/signup"
              className="bg-action-primary px-8 py-3 text-sm font-semibold text-action-text transition-colors duration-200 hover:bg-action-primary-hover focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
            >
              Create Account
            </Link>
            <Link
              href="/login"
              className="bg-bg-elevated px-8 py-3 text-sm font-medium text-text-primary transition-colors duration-200 hover:bg-bg-hover focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
