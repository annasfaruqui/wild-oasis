import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-none whitespace-nowrap transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-action-primary font-semibold text-action-text hover:bg-action-primary-hover",
        secondary:
          "bg-bg-elevated font-medium text-text-primary hover:bg-bg-hover",
        surface:
          "bg-bg-surface font-medium text-text-secondary hover:bg-bg-hover hover:text-text-primary",
        outline:
          "border border-border-subtle bg-bg-elevated font-medium text-text-primary hover:bg-bg-hover",
        ghost:
          "bg-transparent font-medium text-text-secondary hover:bg-bg-hover hover:text-text-primary",
        destructive:
          "bg-bg-elevated font-medium text-status-error hover:bg-bg-hover",
        link: "font-medium text-link underline-offset-4 hover:underline",
      },
      size: {
        xs: "px-3 py-1.5 text-xs",
        sm: "px-4 py-2 text-xs",
        default: "px-5 py-2.5 text-sm",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-3.5 text-sm",
        xl: "px-8 py-4 text-base",
        icon: "h-9 w-9 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  /** Render as child element via Radix Slot (useful for composing custom triggers) */
  asChild?: boolean;
  /** Disables the button and displays an inline spinner */
  isLoading?: boolean;
}

/**
 * Themed shadcn Button built with semantic Wild Oasis design tokens.
 */
export function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  isLoading = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      disabled={disabled || isLoading}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <>
          {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
          {children}
        </>
      )}
    </Comp>
  );
}

export { buttonVariants };
