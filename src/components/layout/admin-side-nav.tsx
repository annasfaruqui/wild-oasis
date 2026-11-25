"use client";

import Link from "next/link";
import {
  ArrowLeft,
  CalendarCheck,
  LayoutDashboard,
  Settings,
  Trees,
  UserCheck,
  UsersRound,
} from "lucide-react";
import { SideNav, type SideNavItem } from "@/components/layout/side-nav";
import { cn } from "@/lib/utils";

const adminNavItems: SideNavItem[] = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Bookings", href: "/admin/bookings", icon: CalendarCheck },
  { name: "Cabins", href: "/admin/cabins", icon: Trees },
  { name: "Staff & Roles", href: "/admin/employees", icon: UsersRound },
  { name: "Guests Directory", href: "/admin/guests", icon: UserCheck },
  { name: "Account Settings", href: "/admin/me", icon: Settings },
];

/**
 * Staff & administrator sidebar navigation for `admin/layout.tsx`.
 */
export function AdminSideNav() {
  return (
    <SideNav
      items={adminNavItems}
      logoHref="/admin/dashboard"
      subtitle="Staff Portal"
      ariaLabel="Admin navigation"
      renderFooter={(isMinimized) => (
        <div className="space-y-3">
          <div
            title={
              isMinimized ? "Jonas Schmedtmann (Administrator)" : undefined
            }
            className={cn(
              "bg-bg-elevated p-3 text-xs",
              isMinimized && "md:flex md:justify-center md:p-2"
            )}
          >
            {isMinimized ? (
              <>
                <span className="hidden h-7 w-7 items-center justify-center bg-accent-primary/15 text-[11px] font-semibold text-accent-primary md:flex">
                  JS
                </span>
                <div className="md:hidden">
                  <span className="font-semibold text-text-primary">
                    Jonas Schmedtmann
                  </span>
                  <span className="block text-text-secondary">
                    Administrator
                  </span>
                </div>
              </>
            ) : (
              <>
                <span className="font-semibold text-text-primary">
                  Jonas Schmedtmann
                </span>
                <span className="block text-text-secondary">Administrator</span>
              </>
            )}
          </div>

          <Link
            href="/"
            title={isMinimized ? "Back to Guest Site" : undefined}
            className={cn(
              "flex items-center justify-center gap-2 text-xs text-link transition-colors hover:underline focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none",
              isMinimized && "md:px-0"
            )}
          >
            <ArrowLeft className="h-3.5 w-3.5 shrink-0" />
            <span className={cn(isMinimized && "md:sr-only")}>
              Back to Guest Site
            </span>
          </Link>
        </div>
      )}
    />
  );
}
