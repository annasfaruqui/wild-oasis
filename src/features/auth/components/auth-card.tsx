"use client";

import { Button } from "@/components/ui/button";
import googleLogo from "@public/icons/google-logo.webp";
import metaLogo from "@public/icons/meta-logo.webp";
import Image from "next/image";
import Link from "next/link";

interface AuthCardProps {
  eyebrow: string;
  title: string;
  footerPrompt: string;
  footerLinkLabel: string;
  footerLinkHref: string;
  children: React.ReactNode;
}

export function AuthCard({
  eyebrow,
  title,
  footerPrompt,
  footerLinkLabel,
  footerLinkHref,
  children,
}: AuthCardProps) {
  return (
    <div className="border border-border-subtle bg-bg-surface p-8 sm:p-10">
      {/* Header */}
      <div className="space-y-2 text-center sm:text-left">
        <span className="text-xs font-semibold tracking-widest text-accent-primary uppercase">
          {eyebrow}
        </span>
        <h1 className="text-2xl font-light tracking-tight text-text-primary sm:text-3xl">
          {title}
        </h1>
      </div>

      {/* Social Login Placeholders */}
      <div className="mt-8 space-y-3">
        <Button
          type="button"
          variant="outline"
          size="md"
          onClick={() => {
            console.log(
              "Placeholder: Sign in with Google (will use Clerk authenticateWithRedirect)"
            );
          }}
          className="w-full gap-3"
        >
          <Image
            src={googleLogo}
            alt="Google logo"
            width={18}
            height={18}
            className="h-4.5 w-4.5 object-contain"
          />
          <span>Sign in with Google</span>
        </Button>

        <Button
          type="button"
          variant="outline"
          size="md"
          onClick={() => {
            console.log(
              "Placeholder: Sign in with Meta (will use Clerk authenticateWithRedirect)"
            );
          }}
          className="w-full gap-3"
        >
          <Image
            src={metaLogo}
            alt="Meta logo"
            width={18}
            height={18}
            className="h-4.5 w-4.5 object-contain"
          />
          <span>Sign in with Meta</span>
        </Button>
      </div>

      {/* Divider */}
      <div className="relative my-6 text-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border-subtle" />
        </div>
        <span className="relative bg-bg-surface px-4 text-xs font-semibold tracking-wider text-text-secondary uppercase">
          Or continue with email
        </span>
      </div>

      {/* Form Slot */}
      {children}

      {/* Footer Link */}
      <p className="mt-8 text-center text-xs text-text-secondary">
        {footerPrompt}{" "}
        <Link
          href={footerLinkHref}
          className="font-medium text-link transition-colors hover:underline focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
        >
          {footerLinkLabel}
        </Link>
      </p>
    </div>
  );
}
