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
        className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle bg-bg-secondary opacity-60 ${className}`}
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
      title={isDark ? "Switch to cozy luxury light mode" : "Switch to midnight alpine dark mode"}
      className={`relative inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle bg-bg-secondary text-text-secondary shadow-sm transition-all duration-200 hover:border-brand-accent hover:text-brand-accent hover:shadow-md active:scale-95 ${className}`}
    >
      {isDark ? (
        <Sun className="h-4 w-4 transition-transform duration-300 hover:rotate-45 text-accent-400" />
      ) : (
        <Moon className="h-4 w-4 transition-transform duration-300 -hover:rotate-12 text-primary-700" />
      )}
    </button>
  );
}
