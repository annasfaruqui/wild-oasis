import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="space-y-1">
        <span className="text-xs font-semibold tracking-widest text-accent-primary uppercase">
          Welcome
        </span>
        <h1 className="text-3xl font-light text-text-primary">Admin Portal</h1>
        <p className="text-sm text-text-secondary">
          Welcome to The Wild Oasis hotel management and operations portal.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Link
          href="/admin/dashboard"
          className="rounded-2xl bg-bg-surface p-6 transition-colors hover:bg-bg-hover focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
        >
          <h3 className="text-lg font-medium text-text-primary">
            Executive Dashboard
          </h3>
          <p className="mt-1 text-xs text-text-secondary">
            View live occupancy rates, sales performance, and today&apos;s
            activity.
          </p>
        </Link>
        <Link
          href="/admin/bookings"
          className="rounded-2xl bg-bg-surface p-6 transition-colors hover:bg-bg-hover focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
        >
          <h3 className="text-lg font-medium text-text-primary">
            Bookings Management
          </h3>
          <p className="mt-1 text-xs text-text-secondary">
            Check-in, check-out, and manage guest reservations in real time.
          </p>
        </Link>
      </div>
    </div>
  );
}
