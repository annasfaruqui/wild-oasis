"use client";

import { useSidebar } from "@/components/layout/sidebar-provider";
import { Button } from "@/components/ui/button";
import { Menu, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

export interface DashboardHeaderProps {
  userName: string;
  userAvatar: string | StaticImageData;
  userSubtitle?: string;
  profileHref?: string;
}

export function DashboardHeader({
  userName,
  userAvatar,
  userSubtitle,
  profileHref = "/me",
}: DashboardHeaderProps) {
  const { isMinimized, toggleMinimized, openMobile } = useSidebar();

  return (
    <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center justify-between border-b border-border-subtle bg-bg-surface/95 px-4 backdrop-blur-md sm:px-6 lg:px-8">
      {/* Left: Mobile Drawer Trigger + Desktop Expand/Shrink Control */}
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={openMobile}
          aria-label="Open navigation menu"
          className="text-text-secondary hover:text-text-primary md:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={toggleMinimized}
          aria-label={isMinimized ? "Expand sidebar" : "Shrink sidebar"}
          title={isMinimized ? "Expand sidebar" : "Shrink sidebar"}
          className="hidden text-text-secondary hover:text-text-primary md:inline-flex"
        >
          {isMinimized ? (
            <PanelLeftOpen className="h-4.5 w-4.5" />
          ) : (
            <PanelLeftClose className="h-4.5 w-4.5" />
          )}
        </Button>
      </div>

      {/* Right: User Profile Avatar & Name */}
      <Link
        href={profileHref}
        className="ml-auto flex items-center gap-3 px-2 py-1 transition-colors hover:bg-bg-hover focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
      >
        <div className="hidden text-right sm:block">
          <span className="block text-sm font-medium text-text-primary">
            {userName}
          </span>
          {userSubtitle && (
            <span className="block text-[11px] text-text-secondary">
              {userSubtitle}
            </span>
          )}
        </div>
        <span className="text-sm font-medium text-text-primary sm:hidden">
          {userName.split(" ")[0]}
        </span>
        <Image
          src={userAvatar}
          alt={userName}
          width={36}
          height={36}
          className="h-9 w-9 shrink-0 rounded-full border border-border-subtle bg-bg-elevated object-cover"
        />
      </Link>
    </header>
  );
}
