import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.ComponentProps<"input">;

/**
 * Themed shadcn-style Input using semantic Wild Oasis design tokens.
 */
export function Input({ className, type, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full border border-border-subtle bg-bg-elevated px-4 py-3 text-sm text-text-primary transition-colors placeholder:text-text-secondary/50 focus:border-border-focus focus-visible:ring-1 focus-visible:ring-border-focus focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60",
        className
      )}
      {...props}
    />
  );
}
