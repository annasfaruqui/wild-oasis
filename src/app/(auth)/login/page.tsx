import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="rounded-2xl border border-border-subtle bg-bg-secondary p-8 shadow-xl">
      <h1 className="text-2xl font-semibold tracking-tight text-text-primary">
        Welcome Back
      </h1>
      <p className="mt-2 text-sm text-text-secondary">
        Sign in to your account to manage your reservations or access staff portals.
      </p>

      <div className="mt-6 flex flex-col gap-4">
        <div className="rounded-lg border border-dashed border-border-subtle bg-bg-tertiary p-6 text-center text-sm text-text-muted">
          Clerk SignIn component will be rendered here.
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-text-secondary">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-brand-accent hover:text-brand-accent-hover font-medium">
          Sign up
        </Link>
      </p>
    </div>
  );
}
