import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="rounded-2xl bg-bg-surface p-8">
      <h1 className="text-2xl font-semibold tracking-tight text-text-primary">
        Welcome Back
      </h1>
      <p className="mt-2 text-sm text-text-secondary">
        Sign in to your account to manage your reservations or access staff
        portals.
      </p>

      <div className="mt-6 flex flex-col gap-4">
        <div className="rounded-lg bg-bg-elevated p-6 text-center text-sm text-text-secondary">
          Clerk SignIn component will be rendered here.
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-text-secondary">
        Don&apos;t have an account?{" "}
        <Link
          href="/signup"
          className="font-medium text-link transition-colors duration-200 hover:underline focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
