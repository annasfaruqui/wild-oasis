"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useClerk, useSignUp } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthCard } from "@/features/auth/components/auth-card";

export function SignupForm() {
  const router = useRouter();
  // Clerk headless utilities providing auth context and signup resources
  const signUp = useSignUp();
  const clerk = useClerk();
  void signUp;
  void clerk;

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);

    // Fake Auth flow: logs email and forwards user to complete onboarding profile
    console.log("Clerk SignUp initiated with email:", email);

    // Redirect to profile onboarding page
    router.push(`/onboarding?email=${encodeURIComponent(email.trim())}`);
  };

  return (
    <AuthCard
      eyebrow="Welcome to The Wild Oasis"
      title="Create your account"
      footerPrompt="Already have an account?"
      footerLinkLabel="Log in here"
      footerLinkHref="/login"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="guest@example.com"
          />
        </div>

        <Button
          type="submit"
          size="lg"
          isLoading={isLoading}
          className="w-full tracking-wide uppercase"
        >
          {isLoading ? "Proceeding..." : "Sign up with email"}
        </Button>
      </form>
    </AuthCard>
  );
}
