import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import logoImage from "@public/brand/logo.webp";

const adminNavItems = [
  { name: "Dashboard", href: "/admin/dashboard" },
  { name: "Bookings", href: "/admin/bookings" },
  { name: "Cabins", href: "/admin/cabins" },
  { name: "Staff & Roles", href: "/admin/employees" },
  { name: "Guests Directory", href: "/admin/guests" },
  { name: "Account Settings", href: "/admin/me" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-bg-primary text-text-primary transition-colors duration-200 selection:bg-action-primary selection:text-action-text">
      {/* Sidebar */}
      <aside className="flex w-64 flex-col justify-between bg-bg-surface p-6">
        <div className="space-y-8">
          {/* Logo & Brand */}
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
            <div>
              <span className="block text-base font-semibold text-text-primary">
                The Wild Oasis
              </span>
              <span className="block text-[10px] font-semibold tracking-wider text-accent-primary uppercase">
                Staff Portal
              </span>
            </div>
          </Link>

          {/* Navigation Items */}
          <nav className="space-y-1">
            {adminNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center rounded-lg px-3 py-2 text-sm text-text-secondary transition-colors duration-150 hover:bg-bg-hover hover:text-text-primary focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="space-y-4 pt-6">
          <div className="flex items-center justify-between">
            <span className="text-xs text-text-secondary">Theme</span>
            <ThemeToggle />
          </div>

          <div className="rounded-xl bg-bg-elevated p-3 text-xs">
            <span className="font-semibold text-text-primary">
              Jonas Schmedtmann
            </span>
            <span className="block text-text-secondary">Administrator</span>
          </div>

          <Link
            href="/"
            className="block text-center text-xs text-link transition-colors hover:underline focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
          >
            &larr; Back to Guest Site
          </Link>
        </div>
      </aside>

      {/* Main Admin Content */}
      <main className="flex-1 p-8 sm:p-10">{children}</main>
    </div>
  );
}
