"use client";

import { SideNav, type SideNavItem } from "@/components/layout/side-nav";
import { cn } from "@/lib/utils";
import { ArrowLeft, CalendarDays, LayoutDashboard, User } from "lucide-react";
import Link from "next/link";

const userNavItems: SideNavItem[] = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Bookings", href: "/bookings", icon: CalendarDays },
  { name: "Profile", href: "/me", icon: User },
];

export function UserSideNav() {
  return (
    <SideNav
      items={userNavItems}
      logoHref="/dashboard"
      subtitle="Guest Portal"
      ariaLabel="Guest navigation"
      renderFooter={(isMinimized) => (
        <Link
          href="/"
          title={isMinimized ? "Back to Home" : undefined}
          className={cn(
            "flex items-center gap-2.5 px-2 py-1.5 text-xs text-link transition-colors hover:underline focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none",
            isMinimized && "md:justify-center md:px-0"
          )}
        >
          <ArrowLeft className="h-4 w-4 shrink-0" />
          <span className={cn(isMinimized && "md:sr-only")}>Back to Home</span>
        </Link>
      )}
    />
  );
}
