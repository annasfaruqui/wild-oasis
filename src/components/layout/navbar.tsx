import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import logoImage from "@public/brand/logo.webp";

export function Navbar() {
  return (
    <header className="absolute top-0 right-0 left-0 z-50 px-6 py-5 lg:px-12">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={logoImage}
            alt="The Wild Oasis Logo"
            width={48}
            height={48}
            className="h-10 w-10 object-contain md:h-12 md:w-12"
            priority
          />
          <span className="text-xl font-semibold tracking-tight text-white drop-shadow-sm md:text-2xl">
            The Wild Oasis
          </span>
        </Link>

        <div className="flex items-center gap-4 text-sm font-medium text-white/90 md:gap-6 md:text-base">
          <Link
            href="/cabins"
            className="drop-shadow-sm transition-colors hover:text-accent-400"
          >
            Cabins
          </Link>
          <Link
            href="/about"
            className="drop-shadow-sm transition-colors hover:text-accent-400"
          >
            About
          </Link>
          <Link
            href="/dashboard"
            className="drop-shadow-sm transition-colors hover:text-accent-400"
          >
            Guest Area
          </Link>
          <Link
            href="/admin/dashboard"
            className="rounded-full bg-brand-accent px-4 py-1.5 text-xs font-semibold text-primary-950 shadow-md transition-all hover:bg-brand-accent-hover md:text-sm"
          >
            Staff Portal
          </Link>

          <ThemeToggle className="ml-1" />
        </div>
      </nav>
    </header>
  );
}
