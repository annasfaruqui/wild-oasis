"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, type LucideIcon } from "lucide-react";
import logoImage from "@public/brand/logo.webp";
import { Button } from "@/components/ui/button";
import { useOptionalSidebar } from "@/components/layout/sidebar-provider";
import { cn } from "@/lib/utils";

export interface SideNavItem {
  name: string;
  href: string;
  icon: LucideIcon;
}

export interface SideNavProps {
  /** Navigation links displayed in the drawer */
  items: SideNavItem[];
  /** Destination when clicking the brand logo */
  logoHref: string;
  /** Optional portal subtitle shown beneath the brand name (e.g. "Guest Portal", "Staff Portal") */
  subtitle?: string;
  /** Optional footer slot; receives whether desktop view is minimized to icons only */
  renderFooter?: (isMinimized: boolean) => React.ReactNode;
  /** Accessible label for the navigation landmark */
  ariaLabel?: string;
}

/**
 * Shared collapsible drawer sidebar supporting full (icon + text) and
 * minimized (icon-only) modes on desktop, and completely hidden when
 * minimized on mobile screens. Controlled via SidebarProvider when present.
 */
export function SideNav({
  items,
  logoHref,
  subtitle,
  renderFooter,
  ariaLabel = "Sidebar navigation",
}: SideNavProps) {
  const pathname = usePathname();
  const sidebarCtx = useOptionalSidebar();

  const [fallbackMinimized] = useState(false);
  const [fallbackMobileOpen, setFallbackMobileOpen] = useState(false);

  const isMinimized = sidebarCtx ? sidebarCtx.isMinimized : fallbackMinimized;
  const isMobileOpen = sidebarCtx
    ? sidebarCtx.isMobileOpen
    : fallbackMobileOpen;
  const closeMobile = sidebarCtx
    ? sidebarCtx.closeMobile
    : () => setFallbackMobileOpen(false);

  const isRouteActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          aria-hidden="true"
          onClick={closeMobile}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs md:hidden"
        />
      )}

      {/* Drawer Sidebar: completely hidden off-canvas when minimized on mobile; icon-only vs full on desktop */}
      <aside
        aria-label={ariaLabel}
        className={cn(
          "flex flex-col justify-between border-r border-border-subtle bg-bg-surface transition-all duration-300 ease-in-out",
          // Mobile drawer behavior: disappears completely when minimized (!isMobileOpen)
          "fixed inset-y-0 left-0 z-50 w-64",
          isMobileOpen
            ? "visible translate-x-0"
            : "pointer-events-none invisible -translate-x-full",
          // Desktop sticky drawer behavior
          "md:pointer-events-auto md:visible md:sticky md:top-0 md:z-30 md:h-screen md:shrink-0 md:translate-x-0",
          isMinimized ? "md:w-20" : "md:w-64"
        )}
      >
        <div className="flex flex-col">
          {/* Top Brand Row (64px height matching DashboardHeader) */}
          <div
            className={cn(
              "flex h-16 items-center justify-between border-b border-border-subtle px-4",
              isMinimized && "md:justify-center md:px-0"
            )}
          >
            <Link
              href={logoHref}
              onClick={closeMobile}
              title="The Wild Oasis"
              className="flex items-center gap-3 overflow-hidden focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
            >
              <Image
                src={logoImage}
                alt="The Wild Oasis Logo"
                width={40}
                height={40}
                className="h-9 w-9 shrink-0 object-contain"
                priority
              />
              <div
                className={cn(
                  "min-w-0 transition-opacity duration-200",
                  isMinimized && "md:hidden"
                )}
              >
                <span className="block truncate text-base font-semibold tracking-tight text-text-primary">
                  The Wild Oasis
                </span>
                {subtitle && (
                  <span className="block truncate text-[10px] font-semibold tracking-wider text-accent-primary uppercase">
                    {subtitle}
                  </span>
                )}
              </div>
            </Link>

            {/* Mobile Close Button */}
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={closeMobile}
              aria-label="Close navigation menu"
              className="h-8 w-8 text-text-secondary hover:text-text-primary md:hidden"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1 p-4">
            {items.map((item) => {
              const Icon = item.icon;
              const active = isRouteActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobile}
                  aria-current={active ? "page" : undefined}
                  title={isMinimized ? item.name : undefined}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 text-sm transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none",
                    isMinimized && "md:justify-center md:px-0",
                    active
                      ? "border-l-2 border-accent-primary bg-bg-elevated font-medium text-accent-primary"
                      : "border-l-2 border-transparent text-text-secondary hover:bg-bg-hover hover:text-text-primary"
                  )}
                >
                  <Icon className="h-4.5 w-4.5 shrink-0" />
                  <span className={cn("truncate", isMinimized && "md:sr-only")}>
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Optional Footer Section */}
        {renderFooter && (
          <div className="border-t border-border-subtle p-4">
            {renderFooter(isMinimized)}
          </div>
        )}
      </aside>
    </>
  );
}
