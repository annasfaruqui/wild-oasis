import Link from "next/link";

export default function UserDashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
      <div className="space-y-2">
        <span className="text-xs font-semibold tracking-widest text-accent-primary uppercase">
          Guest Portal
        </span>
        <h1 className="text-3xl font-light tracking-tight text-text-primary sm:text-4xl">
          Welcome back, Eleanor
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-text-secondary">
          Manage your upcoming reservations, account preferences, and past
          stays.
        </p>
      </div>

      {/* Metrics Row */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="bg-bg-surface p-6">
          <span className="text-xs font-medium text-text-secondary uppercase">
            Upcoming Stays
          </span>
          <div className="mt-2 text-3xl font-semibold text-text-primary">1</div>
          <p className="mt-1 text-xs text-text-secondary">
            Next: Aug 14, 2026 (Cabin 001)
          </p>
        </div>

        <div className="bg-bg-surface p-6">
          <span className="text-xs font-medium text-text-secondary uppercase">
            Completed Trips
          </span>
          <div className="mt-2 text-3xl font-semibold text-text-primary">3</div>
          <p className="mt-1 text-xs text-text-secondary">
            Member since June 2023
          </p>
        </div>

        <div className="bg-bg-surface p-6">
          <span className="text-xs font-medium text-text-secondary uppercase">
            Loyalty Tier
          </span>
          <div className="mt-2 text-3xl font-semibold text-accent-primary">
            Alpine Pioneer
          </div>
          <p className="mt-1 text-xs text-text-secondary">
            10% automatic booking discount
          </p>
        </div>
      </div>

      {/* Action Banners */}
      <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3">
        <div className="bg-bg-surface p-8">
          <h2 className="text-xl font-medium text-text-primary">
            Active Reservation
          </h2>
          <p className="mt-2 text-sm text-text-secondary">
            You are booked for 6 nights at Cabin 001 &mdash; Timber Ridge
            starting August 14, 2026.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="/bookings"
              className="bg-action-primary px-5 py-2.5 text-xs font-semibold text-action-text transition-colors duration-200 hover:bg-action-primary-hover focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
            >
              View Reservation
            </Link>
          </div>
        </div>

        <div className="bg-bg-surface p-8">
          <h2 className="text-xl font-medium text-text-primary">
            Explore More Cabins
          </h2>
          <p className="mt-2 text-sm text-text-secondary">
            Browse our eight secluded architectural retreats tucked away in the
            Dolomites forest.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="/cabins"
              className="bg-bg-elevated px-5 py-2.5 text-xs font-medium text-text-primary transition-colors duration-200 hover:bg-bg-hover focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
            >
              Browse Catalog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
