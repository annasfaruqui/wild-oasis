import { CurrentYear } from "@/components/layout/current-year";
import logoImage from "@public/brand/logo.webp";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-bg-surface text-text-secondary transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src={logoImage}
                alt="The Wild Oasis Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-semibold text-text-primary">
                The Wild Oasis
              </span>
            </div>
            <p className="max-w-md text-sm text-text-secondary">
              Where luxury living meets untouched wilderness in the heart of the
              Dolomites. An intimate mountain retreat managed with devotion
              since 1962.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider text-text-primary uppercase">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              <li>
                <Link
                  href="/cabins-overview"
                  className="transition-colors hover:text-link focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
                >
                  Cabins
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-link focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="transition-colors hover:text-link focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
                >
                  Guest Area
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider text-text-primary uppercase">
              Location & Contact
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              Dolomites, Trentino-Alto Adige
              <br />
              Italy
              <br />
              <a
                className="transition-colors hover:text-link focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
                href="mailto:hello@thewildoasis.com"
              >
                hello@thewildoasis.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-border-subtle pt-6 text-center text-xs text-text-secondary">
          &copy; <CurrentYear /> The Wild Oasis. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
