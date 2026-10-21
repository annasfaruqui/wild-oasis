export default function OnboardingPage() {
  return (
    <div className="rounded-2xl border border-border-subtle bg-bg-secondary p-8 shadow-xl">
      <h1 className="text-2xl font-semibold tracking-tight text-text-primary">
        Complete Your Profile
      </h1>
      <p className="mt-2 text-sm text-text-secondary">
        Please provide your details to finish setting up your account.
      </p>

      <div className="mt-6 flex flex-col gap-4">
        <div className="rounded-lg border border-dashed border-border-subtle bg-bg-tertiary p-6 text-center text-sm text-text-muted">
          Profile onboarding form (Full Name, Nationality & Flag selector, National ID) will be rendered here.
        </div>
      </div>
    </div>
  );
}
