"use client";

import * as React from "react";

interface SidebarContextValue {
  /** Whether the desktop sidebar is minimized to icon-only mode */
  isMinimized: boolean;
  setIsMinimized: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMinimized: () => void;
  /** Whether the mobile drawer is currently visible */
  isMobileOpen: boolean;
  setIsMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openMobile: () => void;
  closeMobile: () => void;
}

const SidebarContext = React.createContext<SidebarContextValue | null>(null);

/**
 * Provides shared expand/minimize (desktop) and open/close (mobile) state
 * between SideNav and DashboardHeader.
 */
export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isMinimized, setIsMinimized] = React.useState(false);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  const value = React.useMemo<SidebarContextValue>(
    () => ({
      isMinimized,
      setIsMinimized,
      toggleMinimized: () => setIsMinimized((prev) => !prev),
      isMobileOpen,
      setIsMobileOpen,
      openMobile: () => setIsMobileOpen(true),
      closeMobile: () => setIsMobileOpen(false),
    }),
    [isMinimized, isMobileOpen]
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}

/**
 * Hook to access shared sidebar state. Throws if used outside SidebarProvider.
 */
export function useSidebar(): SidebarContextValue {
  const ctx = React.useContext(SidebarContext);
  if (!ctx) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return ctx;
}

/**
 * Optional variant returning null when outside a SidebarProvider,
 * allowing standalone SideNav usage with internal fallback state.
 */
export function useOptionalSidebar(): SidebarContextValue | null {
  return React.useContext(SidebarContext);
}
