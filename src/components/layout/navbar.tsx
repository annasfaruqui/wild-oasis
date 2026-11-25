"use client";

import { LinkButton } from "@/components/ui/link-button";
import logoImage from "@public/brand/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavbarProps {
  /**
   * If true, enables sticky positioning that brings in the navbar ONLY after
   * the hero section has completely scrolled out of the screen.
   */
  sticky?: boolean;
  className?: string;
}

function NavContent() {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src={logoImage}
          alt="The Wild Oasis Logo"
          width={48}
          height={48}
          className="h-10 w-10 object-contain md:h-12 md:w-12"
          priority
        />
        <span className="text-xl font-semibold tracking-tight text-text-primary md:text-2xl">
          The Wild Oasis
        </span>
      </Link>

      <div className="flex items-center gap-4 text-sm font-medium text-text-primary/90 md:gap-6 md:text-base">
        <Link
          href="/cabins-overview"
          className="transition-colors hover:text-accent-primary focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
        >
          Cabins
        </Link>
        <Link
          href="/about"
          className="transition-colors hover:text-accent-primary focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
        >
          About
        </Link>
        <LinkButton href="/login" size="xs" className="px-4 py-1.5 md:text-sm">
          Login
        </LinkButton>
      </div>
    </nav>
  );
}

export function Navbar({ sticky = false, className = "" }: NavbarProps) {
  const [isPastHero, setIsPastHero] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!sticky) {
      setIsPastHero(false);
      return;
    }

    const checkScrollPosition = () => {
      const heroElement = document.getElementById("hero-section");
      if (heroElement) {
        const rect = heroElement.getBoundingClientRect();
        // Fully out of the screen from scrolling: rect.bottom <= 0
        setIsPastHero(rect.bottom <= 0);
      } else {
        // Fallback for pages without a dedicated hero section
        setIsPastHero(window.scrollY > 400);
      }
    };

    // Evaluate scroll position on mount and route changes
    checkScrollPosition();

    window.addEventListener("scroll", checkScrollPosition, { passive: true });
    window.addEventListener("resize", checkScrollPosition, { passive: true });

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, [sticky, pathname]);

  return (
    <>
      {/* 1. Initial Navbar: stays in its initial position at the top and scrolls naturally with the page */}
      <header
        className={`absolute top-0 right-0 left-0 z-30 px-6 py-5 lg:px-12 ${className}`.trim()}
      >
        <NavContent />
      </header>

      {/* 2. Sticky Floating Navbar: slides smoothly into view ONLY after the hero section is completely out of the screen */}
      {sticky && (
        <header
          aria-hidden={!isPastHero}
          className={`fixed top-0 right-0 left-0 z-50 border-b border-border-subtle/50 bg-bg-primary/95 px-6 py-3.5 backdrop-blur-md transition-all duration-300 ease-in-out lg:px-12 ${
            isPastHero
              ? "visible translate-y-0 opacity-100"
              : "pointer-events-none invisible -translate-y-full opacity-0"
          } ${className}`.trim()}
        >
          <NavContent />
        </header>
      )}
    </>
  );
}
