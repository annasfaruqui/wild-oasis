"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthCard } from "@/features/auth/components/auth-card";
import { useClerk, useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LoginForm() {
  const router = useRouter();
  // Clerk headless utilities providing auth context and sign-in resources
  const signIn = useSignIn();
  const clerk = useClerk();
  void signIn;
  void clerk;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim() || !password) return;

    setIsLoading(true);

    // Fake Auth flow: logs credentials and routes to dashboard
    console.log("Clerk SignIn submitted:", {
      email: email.trim(),
      password,
    });

    router.push("/dashboard");
  };

  return (
    <AuthCard
      eyebrow="Welcome Back"
      title="Login to your account"
      footerPrompt="Don't have an account?"
      footerLinkLabel="Sign up here"
      footerLinkHref="/signup"
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

        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
          />
        </div>

        <Button
          type="submit"
          size="lg"
          isLoading={isLoading}
          className="w-full tracking-wide uppercase"
        >
          {isLoading ? "Signing in..." : "Sign in with email"}
        </Button>
      </form>
    </AuthCard>
  );
}
