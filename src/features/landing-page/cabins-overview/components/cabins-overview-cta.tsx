import { LinkButton } from "@/components/ui/link-button";

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
        <LinkButton href="/signup" size="lg">
          Create Account
        </LinkButton>
        <LinkButton href="/login" variant="secondary" size="lg">
          Sign In
        </LinkButton>
      </div>
    </div>
  );
}
