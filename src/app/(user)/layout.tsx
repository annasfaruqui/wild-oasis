import Link from "next/link";
import Image from "next/image";
import logoImage from "@public/brand/logo.webp";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-bg-primary text-text-primary transition-colors duration-200 selection:bg-action-primary selection:text-action-text">
      {/* User Navigation Header */}
      <header className="bg-bg-surface">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
          <Link
            href="/"
            className="flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
          >
            <Image
              src={logoImage}
              alt="The Wild Oasis Logo"
              width={40}
              height={40}
              className="h-9 w-9 object-contain"
            />
            <span className="text-lg font-semibold tracking-tight text-text-primary md:text-xl">
              The Wild Oasis
            </span>
          </Link>

          <div className="flex items-center gap-4 text-sm font-medium text-text-secondary md:gap-6">
            <Link
              href="/cabins"
              className="transition-colors hover:text-text-primary focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
            >
              Cabins
            </Link>
            <Link
              href="/bookings"
              className="transition-colors hover:text-text-primary focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
            >
              Bookings
            </Link>
            <Link
              href="/dashboard"
              className="transition-colors hover:text-text-primary focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
            >
              Dashboard
            </Link>
            <Link
              href="/me"
              className="transition-colors hover:text-text-primary focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
            >
              Profile
            </Link>
            <Link
              href="/admin/dashboard"
              className="bg-bg-elevated px-3 py-1 text-xs font-semibold text-text-primary transition-colors hover:bg-bg-hover focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
            >
              Staff
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-1">{children}</main>
    </div>
  );
}
