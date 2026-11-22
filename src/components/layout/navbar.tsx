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
          <span className="text-xl font-semibold tracking-tight text-white md:text-2xl">
            The Wild Oasis
          </span>
        </Link>

        <div className="flex items-center gap-4 text-sm font-medium text-white/90 md:gap-6 md:text-base">
          <Link
            href="/cabins"
            className="transition-colors hover:text-accent-primary focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
          >
            Cabins
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-accent-primary focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
          >
            About
          </Link>
          <Link
            href="/dashboard"
            className="transition-colors hover:text-accent-primary focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
          >
            Guest Area
          </Link>
          <Link
            href="/admin/dashboard"
            className="bg-action-primary px-4 py-1.5 text-xs font-semibold text-action-text transition-colors duration-200 hover:bg-action-primary-hover focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none md:text-sm"
          >
            Staff Portal
          </Link>

          <ThemeToggle className="ml-1" />
        </div>
      </nav>
    </header>
  );
}
