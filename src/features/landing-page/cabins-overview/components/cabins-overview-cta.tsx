import Link from "next/link";

export function CabinsOverviewCta() {
  return (
    <div className="mt-16 bg-bg-surface p-8 text-center sm:p-12">
      <h3 className="text-2xl font-light text-text-primary sm:text-3xl">
        Ready to plan your escape?
      </h3>
      <p className="mx-auto mt-2 max-w-xl text-sm text-text-secondary">
        Sign in to access real-time dates, exclusive member discounts, and
        flexible reservation management.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <Link
          href="/signup"
          className="bg-action-primary px-8 py-3 text-sm font-semibold text-action-text transition-colors duration-200 hover:bg-action-primary-hover focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
        >
          Create Account
        </Link>
        <Link
          href="/login"
          className="bg-bg-elevated px-8 py-3 text-sm font-medium text-text-primary transition-colors duration-200 hover:bg-bg-hover focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}
