import { Button } from "@/components/ui/button";

export default function UserProfilePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 lg:px-12">
      <div className="space-y-2">
        <span className="text-xs font-semibold tracking-widest text-accent-primary uppercase">
          Guest Account
        </span>
        <h1 className="text-3xl font-light tracking-tight text-text-primary sm:text-4xl">
          Profile & Preferences
        </h1>
        <p className="text-sm text-text-secondary">
          Update your contact details, nationality, and national identification
          for expedited check-ins.
        </p>
      </div>

      <div className="mt-8 bg-bg-surface p-6 sm:p-8">
        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                disabled
                className="mt-1.5 w-full border border-border-subtle bg-bg-elevated px-4 py-2.5 text-sm text-text-secondary opacity-80"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-text-secondary uppercase">
                Nationality
              </label>
              <select className="mt-1.5 w-full border border-border-subtle bg-bg-primary px-4 py-2.5 text-sm text-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none">
                <option value="IT">Italy</option>
                <option value="US" selected>
                  United States
                </option>
                <option value="UK">United Kingdom</option>
                <option value="DE">Germany</option>
                <option value="FR">France</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-text-secondary uppercase">
                National ID / Passport Number
              </label>
              <input
                type="text"
                defaultValue="PASSPORT-987123"
                className="mt-1.5 w-full border border-border-subtle bg-bg-primary px-4 py-2.5 text-sm text-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
              />
            </div>
          </div>

          <div className="pt-4">
            <Button type="button" size="default" className="px-6">
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
