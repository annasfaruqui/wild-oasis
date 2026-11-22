import Image from "next/image";
import Link from "next/link";
import cabin001 from "@public/cabins/cabin-001.webp";
import cabin002 from "@public/cabins/cabin-002.webp";
import cabin003 from "@public/cabins/cabin-003.webp";
import cabin004 from "@public/cabins/cabin-004.webp";

const cabinsList = [
  {
    id: 1,
    name: "001 — Timber Ridge",
    maxCapacity: 2,
    regularPrice: 250,
    discount: 0,
    image: cabin001,
    description:
      "A peaceful wooden cabin tucked beneath towering pines with open valley views.",
  },
  {
    id: 2,
    name: "002 — Pine Hollow",
    maxCapacity: 4,
    regularPrice: 350,
    discount: 25,
    image: cabin002,
    description:
      "Spacious stone-and-cedar sanctuary with outdoor hot tub and hearth fireplace.",
  },
  {
    id: 3,
    name: "003 — Alpine Loft",
    maxCapacity: 6,
    regularPrice: 450,
    discount: 50,
    image: cabin003,
    description:
      "Cathedral timber ceiling and panoramic glass wall overlooking the jagged peaks.",
  },
  {
    id: 4,
    name: "004 — Eagle Crest",
    maxCapacity: 8,
    regularPrice: 550,
    discount: 0,
    image: cabin004,
    description:
      "Our largest luxury family lodge with private sauna and wrap-around deck.",
  },
];

export default function UserCabinsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
      {/* Header */}
      <div className="space-y-2">
        <span className="text-xs font-semibold tracking-widest text-accent-primary uppercase">
          Private Retreats
        </span>
        <h1 className="text-3xl font-light tracking-tight text-text-primary sm:text-4xl">
          Available Cabins
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-text-secondary">
          Cozy mountain cabins tucked in the secluded forest of the Dolomites.
          Experience raw nature with refined modern comforts.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="mt-8 flex flex-wrap gap-2">
        <button className="bg-action-primary px-4 py-2 text-xs font-semibold text-action-text transition-colors duration-200 hover:bg-action-primary-hover focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none">
          All Cabins
        </button>
        <button className="bg-bg-surface px-4 py-2 text-xs font-medium text-text-secondary transition-colors duration-200 hover:bg-bg-hover hover:text-text-primary focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none">
          1&mdash;3 Guests
        </button>
        <button className="bg-bg-surface px-4 py-2 text-xs font-medium text-text-secondary transition-colors duration-200 hover:bg-bg-hover hover:text-text-primary focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none">
          4&mdash;7 Guests
        </button>
        <button className="bg-bg-surface px-4 py-2 text-xs font-medium text-text-secondary transition-colors duration-200 hover:bg-bg-hover hover:text-text-primary focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none">
          8&mdash;12 Guests
        </button>
      </div>

      {/* Cabin Cards Grid */}
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        {cabinsList.map((cabin) => (
          <div
            key={cabin.id}
            className="overflow-hidden bg-bg-surface transition-colors"
          >
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

            <div className="space-y-4 p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium text-text-primary">
                    Cabin {cabin.name}
                  </h3>
                  <span className="mt-1 inline-block bg-bg-elevated px-3 py-1 text-xs text-text-secondary">
                    Up to {cabin.maxCapacity} guests
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-semibold text-text-primary">
                    ${cabin.regularPrice - cabin.discount}
                  </div>
                  {cabin.discount > 0 && (
                    <span className="text-xs text-text-secondary line-through">
                      ${cabin.regularPrice}
                    </span>
                  )}
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
                  href="/checkout"
                  className="inline-flex w-full items-center justify-center bg-action-primary px-6 py-3 text-sm font-semibold text-action-text transition-colors duration-200 hover:bg-action-primary-hover focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
                >
                  Reserve Cabin
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
