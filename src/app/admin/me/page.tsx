import { Button } from "@/components/ui/button";

export default function AdminProfilePage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div className="space-y-1">
        <span className="text-xs font-semibold tracking-widest text-accent-primary uppercase">
          Staff Account
        </span>
        <h1 className="text-3xl font-light text-text-primary">
          Account Settings
        </h1>
        <p className="text-sm text-text-secondary">
          Update administrative credentials and notification preferences.
        </p>
      </div>

      <div className="bg-bg-surface p-6 sm:p-8">
        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-text-secondary uppercase">
                Staff Name
              </label>
              <input
                type="text"
                defaultValue="Jonas Schmedtmann"
                className="mt-1.5 w-full border border-border-subtle bg-bg-primary px-4 py-2.5 text-sm text-text-primary transition-colors focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-text-secondary uppercase">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="jonas@thewildoasis.com"
                disabled
                className="mt-1.5 w-full border border-border-subtle bg-bg-elevated px-4 py-2.5 text-sm text-text-secondary opacity-80"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-text-secondary uppercase">
              Role & Permissions
            </label>
            <div className="mt-1.5 inline-flex items-center gap-2 bg-bg-elevated px-4 py-2 text-sm font-medium text-accent-primary">
              Administrator (Full Access)
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
