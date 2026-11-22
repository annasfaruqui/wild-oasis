export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <span className="text-xs font-semibold tracking-widest text-accent-primary uppercase">
          Operations
        </span>
        <h1 className="text-3xl font-light text-text-primary">Dashboard</h1>
        <p className="text-sm text-text-secondary">
          Summary of current occupancy, revenue, and daily guest turnover.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-bg-surface p-6">
          <span className="text-xs font-medium text-text-secondary uppercase">
            Total Bookings
          </span>
          <div className="mt-2 text-3xl font-semibold text-text-primary">
            84
          </div>
          <p className="mt-1 text-xs text-accent-tertiary">
            +12% vs last month
          </p>
        </div>

        <div className="bg-bg-surface p-6">
          <span className="text-xs font-medium text-text-secondary uppercase">
            Total Revenue
          </span>
          <div className="mt-2 text-3xl font-semibold text-text-primary">
            $38,450
          </div>
          <p className="mt-1 text-xs text-accent-tertiary">
            +8.5% vs last month
          </p>
        </div>

        <div className="bg-bg-surface p-6">
          <span className="text-xs font-medium text-text-secondary uppercase">
            Occupancy Rate
          </span>
          <div className="mt-2 text-3xl font-semibold text-accent-primary">
            78.4%
          </div>
          <p className="mt-1 text-xs text-text-secondary">8 luxury cabins</p>
        </div>

        <div className="bg-bg-surface p-6">
          <span className="text-xs font-medium text-text-secondary uppercase">
            Today&apos;s Check-ins
          </span>
          <div className="mt-2 text-3xl font-semibold text-text-primary">4</div>
          <p className="mt-1 text-xs text-text-secondary">
            2 check-outs scheduled
          </p>
        </div>
      </div>

      {/* Today's Activity */}
      <div className="bg-bg-surface p-6 sm:p-8">
        <h2 className="text-xl font-medium text-text-primary">
          Today&apos;s Activity
        </h2>
        <p className="mt-1 text-xs text-text-secondary">
          Arrivals and departures scheduled for today.
        </p>

        <div className="mt-6 divide-y divide-border-subtle">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <span className="bg-accent-tertiary/15 px-3 py-1 text-xs font-medium text-accent-tertiary">
                Arriving
              </span>
              <div>
                <span className="font-medium text-text-primary">
                  Eleanor Vance
                </span>
                <span className="block text-xs text-text-secondary">
                  Cabin 001 &bull; 6 nights
                </span>
              </div>
            </div>
            <button className="bg-action-primary px-4 py-1.5 text-xs font-semibold text-action-text transition-colors duration-200 hover:bg-action-primary-hover focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none">
              Check in
            </button>
          </div>

          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <span className="bg-status-warning/15 px-3 py-1 text-xs font-medium text-status-warning">
                Departing
              </span>
              <div>
                <span className="font-medium text-text-primary">
                  Marcus Aurelius
                </span>
                <span className="block text-xs text-text-secondary">
                  Cabin 004 &bull; 4 nights
                </span>
              </div>
            </div>
            <button className="bg-bg-elevated px-4 py-1.5 text-xs font-medium text-text-primary transition-colors hover:bg-bg-hover focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none">
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
