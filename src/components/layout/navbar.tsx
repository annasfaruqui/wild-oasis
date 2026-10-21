import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-5 lg:px-12">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/logo.webp"
            alt="The Wild Oasis Logo"
            width={48}
            height={48}
            className="h-10 w-10 md:h-12 md:w-12 object-contain"
            priority
          />
          <span className="text-xl md:text-2xl font-semibold tracking-tight text-white drop-shadow-sm">
            The Wild Oasis
          </span>
        </Link>

        <div className="flex items-center gap-4 md:gap-6 text-sm md:text-base font-medium text-white/90">
          <Link
            href="/cabins"
            className="transition-colors hover:text-accent-400 drop-shadow-sm"
          >
            Cabins
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-accent-400 drop-shadow-sm"
          >
            About
          </Link>
          <Link
            href="/dashboard"
            className="transition-colors hover:text-accent-400 drop-shadow-sm"
          >
            Guest Area
          </Link>
          <Link
            href="/admin/dashboard"
            className="rounded-full bg-brand-accent px-4 py-1.5 text-xs md:text-sm font-semibold text-primary-950 shadow-md transition-all hover:bg-brand-accent-hover"
          >
            Staff Portal
          </Link>

          <ThemeToggle className="ml-1" />
        </div>
      </nav>
    </header>
  );
}
