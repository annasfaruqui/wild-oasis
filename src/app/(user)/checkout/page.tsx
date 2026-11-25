import { Button } from "@/components/ui/button";

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 lg:px-12">
      <div className="space-y-2">
        <span className="text-xs font-semibold tracking-widest text-accent-primary uppercase">
          Finalize Reservation
        </span>
        <h1 className="text-3xl font-light tracking-tight text-text-primary sm:text-4xl">
          Booking Confirmation
        </h1>
        <p className="text-sm text-text-secondary">
          Review your reservation summary and enter guest contact information.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-12">
        {/* Form Details */}
        <div className="space-y-6 md:col-span-7">
          <div className="bg-bg-surface p-6 sm:p-8">
            <h2 className="text-lg font-medium text-text-primary">
              Guest Details
            </h2>

            <form className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-text-secondary uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="Eleanor Vance"
                  className="mt-1.5 w-full border border-border-subtle bg-bg-primary px-4 py-2.5 text-sm text-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-text-secondary uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="eleanor.vance@example.com"
                  className="mt-1.5 w-full border border-border-subtle bg-bg-primary px-4 py-2.5 text-sm text-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-text-secondary uppercase">
                  Number of Guests
                </label>
                <select className="mt-1.5 w-full border border-border-subtle bg-bg-primary px-4 py-2.5 text-sm text-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none">
                  <option>1 guest</option>
                  <option selected>2 guests</option>
                  <option>3 guests</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-text-secondary uppercase">
                  Special Notes / Requests
                </label>
                <textarea
                  rows={3}
                  placeholder="Late check-in, dietary restrictions..."
                  className="mt-1.5 w-full border border-border-subtle bg-bg-primary px-4 py-2.5 text-sm text-text-primary transition-colors placeholder:text-text-secondary focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
                />
              </div>

              <div className="pt-2">
                <Button type="button" size="lg" className="w-full">
                  Confirm Booking
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Summary Card */}
        <div className="space-y-6 md:col-span-5">
          <div className="bg-bg-surface p-6 sm:p-8">
            <h2 className="text-lg font-medium text-text-primary">
              Stay Summary
            </h2>

            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-text-secondary">Cabin</span>
                <span className="font-medium text-text-primary">
                  001 — Timber Ridge
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Dates</span>
                <span className="font-medium text-text-primary">
                  Aug 14 &mdash; Aug 20, 2026
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Duration</span>
                <span className="font-medium text-text-primary">6 nights</span>
              </div>
            </div>

            <div className="mt-6 space-y-2 border-t border-border-subtle pt-4 text-sm">
              <div className="flex justify-between">
                <span className="text-text-secondary">
                  $250 &times; 6 nights
                </span>
                <span className="text-text-primary">$1,500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Breakfast package</span>
                <span className="text-text-primary">$90</span>
              </div>
            </div>

            <div className="mt-6 bg-bg-elevated p-4">
              <div className="flex items-center justify-between">
                <span className="font-medium text-text-primary">Total Due</span>
                <span className="text-2xl font-semibold text-text-primary">
                  $1,590
                </span>
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-text-secondary">
              Free cancellation up to 14 days before check-in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
