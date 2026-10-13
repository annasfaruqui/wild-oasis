import Link from "next/link";
import Image from "next/image";

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

        <div className="flex items-center gap-6 md:gap-8 text-sm md:text-base font-medium text-white/90">
          <Link
            href="/cabins"
            className="transition-colors hover:text-amber-300 drop-shadow-sm"
          >
            Cabins
          </Link>
          <Link
            href="#about"
            className="transition-colors hover:text-amber-300 drop-shadow-sm"
          >
            About
          </Link>
          <Link
            href="/account"
            className="transition-colors hover:text-amber-300 drop-shadow-sm"
          >
            Guest Area
          </Link>
          <Link
            href="/dashboard"
            className="rounded-full bg-amber-500/90 px-4 py-1.5 text-xs md:text-sm font-semibold text-neutral-900 shadow-md transition-all hover:bg-amber-400"
          >
            Staff Portal
          </Link>
        </div>
      </nav>
    </header>
  );
}
