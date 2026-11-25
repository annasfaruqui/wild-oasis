import { OnboardingForm } from "@/features/auth/components/onboarding-form";
import { Suspense } from "react";

export default function OnboardingPage() {
  return (
    <Suspense
      fallback={
        <div className="border border-border-subtle bg-bg-surface p-8 text-center text-sm text-text-secondary">
          Loading profile setup...
        </div>
      }
    >
      <OnboardingForm />
    </Suspense>
  );
}
