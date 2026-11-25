import * as React from "react";
import { cn } from "@/lib/utils";

export type LabelProps = React.ComponentProps<"label">;

/**
 * Themed form Label matching The Wild Oasis uppercase typography conventions.
 */
export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      data-slot="label"
      className={cn(
        "mb-1.5 block text-xs font-medium tracking-wide text-text-secondary uppercase",
        className
      )}
      {...props}
    />
  );
}
