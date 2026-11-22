import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="rounded-2xl bg-bg-surface p-8">
      <h1 className="text-2xl font-semibold tracking-tight text-text-primary">
        Create Your Account
      </h1>
      <p className="mt-2 text-sm text-text-secondary">
        Sign up to book luxury cabins and experience alpine paradise.
      </p>

      <div className="mt-6 flex flex-col gap-4">
        <div className="rounded-lg bg-bg-elevated p-6 text-center text-sm text-text-secondary">
          Clerk SignUp component will be rendered here.
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-text-secondary">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-link transition-colors duration-200 hover:underline focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
        >
          Log in
        </Link>
      </p>
    </div>
  );
}
