"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`inline-flex h-9 w-9 items-center justify-center bg-bg-surface opacity-60 ${className}`}
        aria-hidden="true"
      >
        <span className="h-4 w-4" />
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`inline-flex h-9 w-9 items-center justify-center bg-bg-surface text-text-secondary transition-colors duration-200 hover:bg-bg-hover hover:text-text-primary focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none ${className}`}
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-accent-primary transition-colors" />
      ) : (
        <Moon className="h-4 w-4 text-text-primary transition-colors" />
      )}
    </button>
  );
}
