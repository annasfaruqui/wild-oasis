import { CabinsOverviewHero } from "@/features/landing-page/components/cabins-overview-hero";
import { CabinFilterGrid } from "@/components/cabins/cabin-filter-grid";
import { CabinsOverviewCta } from "@/features/landing-page/components/cabins-overview-cta";

export default function CabinsOverviewPage() {
  return (
    <div className="flex min-h-screen flex-col bg-bg-primary text-text-primary transition-colors duration-200 selection:bg-action-primary selection:text-action-text">
      <CabinsOverviewHero />

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
        <CabinFilterGrid
          actionLabel="View Availability & Book"
          actionHref="/login"
          showDiscount={true}
          scrollable={true}
        />
        <CabinsOverviewCta />
      </section>
    </div>
  );
}
