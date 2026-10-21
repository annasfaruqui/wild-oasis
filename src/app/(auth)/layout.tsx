import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-bg-primary p-6 text-text-primary selection:bg-brand-accent selection:text-primary-950 transition-colors duration-200">
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>

      <Link href="/" className="mb-8 flex items-center gap-3">
        <Image
          src="/brand/logo.webp"
          alt="The Wild Oasis Logo"
          width={44}
          height={44}
          className="h-10 w-10 object-contain"
        />
        <span className="text-xl font-semibold tracking-tight text-text-primary">
          The Wild Oasis
        </span>
      </Link>
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
}
