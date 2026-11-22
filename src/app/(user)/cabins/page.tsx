import { CabinFilterGrid } from "@/features/cabins/components/cabin-filter-grid";

export default function UserCabinsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
      {/* Header */}
      <div className="space-y-2 pb-8">
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

      {/* Interactive Filter and Responsive Grid */}
      <CabinFilterGrid
        actionLabel="Reserve Cabin"
        actionHref="/checkout"
        showDiscount={true}
      />
    </div>
  );
}
