"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function OnboardingForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialEmail = searchParams.get("email") || "";

  const [fullName, setFullName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle avatar image selection
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatar(file.name);
      const previewUrl = URL.createObjectURL(file);
      setAvatarPreview(previewUrl);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    // Validate password existence and equality
    if (!password || !confirmPassword) {
      setError("Please provide and confirm your password.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match. Please re-enter.");
      return;
    }

    setIsSubmitting(true);

    // Fake Auth completion: log all onboarding fields and route to dashboard
    console.log("Onboarding profile submitted:", {
      email: initialEmail,
      fullName,
      avatar: avatar || "default-avatar.webp",
      country: country || "Not specified",
      password,
      confirmPassword,
    });

    router.push("/dashboard");
  };

  return (
    <div className="border border-border-subtle bg-bg-surface p-8 sm:p-10">
      {/* Header */}
      <div className="space-y-2 text-center sm:text-left">
        <span className="text-xs font-semibold tracking-widest text-accent-primary uppercase">
          Step 2 of 2 &bull; Profile Setup
        </span>
        <h1 className="text-2xl font-light tracking-tight text-text-primary sm:text-3xl">
          Complete Your Profile
        </h1>
        <p className="text-sm font-light text-text-secondary">
          {initialEmail
            ? `Setting up account for ${initialEmail}. Enter your details below.`
            : "Enter your personal details to finalize your mountain sanctuary account."}
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        {error && (
          <div className="border-color-status-error/40 bg-color-status-error/10 text-color-status-error border p-3 text-xs">
            {error}
          </div>
        )}

        {/* 1. Full Name */}
        <div>
          <Label htmlFor="fullName">
            Full Name <span className="text-accent-primary">*</span>
          </Label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Jonas Schmedtmann"
          />
        </div>

        {/* 2. Avatar Selection */}
        <div>
          <Label htmlFor="avatar">Profile Avatar</Label>
          <div className="flex items-center gap-4">
            <div className="relative flex h-16 w-16 shrink-0 items-center justify-center border border-border-subtle bg-bg-elevated text-text-secondary">
              {avatarPreview ? (
                <Image
                  src={avatarPreview}
                  alt="Avatar preview"
                  fill
                  className="object-cover"
                />
              ) : (
                <span className="text-xs font-medium text-text-secondary/70">
                  Photo
                </span>
              )}
            </div>

            <div className="flex-1">
              <input
                id="avatar"
                name="avatar"
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="w-full cursor-pointer text-xs text-text-secondary file:mr-3 file:cursor-pointer file:border-0 file:bg-bg-elevated file:px-3 file:py-2 file:text-xs file:font-medium file:text-text-primary hover:file:bg-bg-hover"
              />
              <p className="mt-1 text-[11px] text-text-secondary/70">
                JPG, PNG or WebP. Max 5MB.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Country (Placeholder as requested) */}
        <div>
          <Label htmlFor="country">Country of Residence</Label>
          <Input
            id="country"
            name="country"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Select or enter your country (coming soon...)"
          />
        </div>

        {/* 4. Password */}
        <div>
          <Label htmlFor="password">
            Create Password <span className="text-accent-primary">*</span>
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
          />
        </div>

        {/* 5. Confirm Password */}
        <div>
          <Label htmlFor="confirmPassword">
            Confirm Password <span className="text-accent-primary">*</span>
          </Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
          />
        </div>

        {/* Submit */}
        <Button
          type="submit"
          size="lg"
          isLoading={isSubmitting}
          className="w-full tracking-wide uppercase"
        >
          {isSubmitting
            ? "Finalizing Account..."
            : "Complete & Enter Sanctuary"}
        </Button>
      </form>
    </div>
  );
}
