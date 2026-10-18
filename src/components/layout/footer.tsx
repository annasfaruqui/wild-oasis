import Link from "next/link";
import Image from "next/image";
import { CurrentYear } from "./current-year";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-900 text-neutral-300">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/brand/logo.webp"
                alt="The Wild Oasis Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-semibold text-white">
                The Wild Oasis
              </span>
            </div>
            <p className="max-w-md text-sm text-neutral-400">
              Where luxury living meets untouched wilderness in the heart of
              the Dolomites. An intimate mountain retreat managed with devotion
              since 1962.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
              <li>
                <Link href="/cabins" className="hover:text-amber-400 transition-colors">
                  Cabins
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-amber-400 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/account" className="hover:text-amber-400 transition-colors">
                  Customer Portal
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-amber-400 transition-colors">
                  Employee Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Location & Contact
            </h4>
            <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
              Dolomites, Trentino-Alto Adige<br />
              Italy<br />
              hello@thewildoasis.com
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-800 pt-6 text-center text-xs text-neutral-500">
          &copy; <CurrentYear /> The Wild Oasis. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
