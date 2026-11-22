import Image from "next/image";
import Link from "next/link";
import cabin001 from "@public/cabins/cabin-001.webp";

export default function UserBookingsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
      <div className="space-y-2">
        <span className="text-xs font-semibold tracking-widest text-accent-primary uppercase">
          Your Stays
        </span>
        <h1 className="text-3xl font-light tracking-tight text-text-primary sm:text-4xl">
          Reservations
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-text-secondary">
          View your upcoming retreat dates, past memories, and manage stay
          details.
        </p>
      </div>

      <div className="mt-8 space-y-6">
        {/* Active Booking Card */}
        <div className="overflow-hidden bg-bg-surface p-6 sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-6">
              <div className="relative h-24 w-32 shrink-0 overflow-hidden">
                <Image
                  src={cabin001}
                  alt="Cabin 001"
                  fill
                  sizes="128px"
                  placeholder="blur"
                  className="object-cover"
                />
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-medium text-text-primary">
                    Cabin 001 — Timber Ridge
                  </h3>
                  <span className="bg-status-success/15 px-3 py-0.5 text-xs font-medium text-status-success">
                    Confirmed
                  </span>
                </div>
                <p className="text-sm text-text-secondary">
                  Aug 14, 2026 &mdash; Aug 20, 2026 (6 nights)
                </p>
                <p className="text-xs text-text-secondary">
                  2 guests &bull; Breakfast included
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center justify-between gap-4 md:flex-col md:items-end">
              <div className="text-right">
                <span className="text-xl font-semibold text-text-primary">
                  $1,590
                </span>
                <span className="block text-xs text-text-secondary">
                  Total paid
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button className="bg-bg-elevated px-4 py-2 text-xs font-medium text-text-primary transition-colors hover:bg-bg-hover focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none">
                  Edit Details
                </button>
                <button className="bg-bg-elevated px-4 py-2 text-xs font-medium text-status-error transition-colors hover:bg-bg-hover focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Empty / Explore More */}
        <div className="bg-bg-surface p-8 text-center">
          <h4 className="text-base font-medium text-text-primary">
            Looking for your next wilderness retreat?
          </h4>
          <p className="mt-1 text-sm text-text-secondary">
            Discover other secluded cabins for autumn and winter stays.
          </p>
          <div className="mt-4">
            <Link
              href="/cabins"
              className="inline-flex bg-action-primary px-6 py-2.5 text-sm font-semibold text-action-text transition-colors duration-200 hover:bg-action-primary-hover focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
            >
              Explore Cabins
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
