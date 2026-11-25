import * as React from "react";
import Link, { type LinkProps } from "next/link";
import { type VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "@/components/ui/button";

export interface LinkButtonProps
  extends
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    LinkProps,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

/**
 * Navigation button combining Next.js Link with the themed shadcn Button styling.
 */
export function LinkButton({
  href,
  variant = "default",
  size = "default",
  className,
  children,
  prefetch,
  replace,
  scroll,
  shallow,
  locale,
  ...props
}: LinkButtonProps) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <Link
        href={href}
        prefetch={prefetch}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        locale={locale}
        {...props}
      >
        {children}
      </Link>
    </Button>
  );
}
