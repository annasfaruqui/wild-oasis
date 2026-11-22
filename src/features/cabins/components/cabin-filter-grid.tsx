"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cabins } from "@/data/data-cabins";

export type CapacityFilter = "all" | "small" | "medium" | "large";

interface CabinFilterGridProps {
  actionLabel?: string;
  actionHref?: string;
  showDiscount?: boolean;
  /**
   * If true, the cabin list is constrained to an internal scrollable container,
   * keeping the filter bar always visible and stationary above the cards.
   */
  scrollable?: boolean;
  /** Alias for scrollable */
  scrollableList?: boolean;
  /**
   * If true, pins the filter bar to the top of the viewport on page scroll,
   * keeping the active filter always visible as you browse.
   */
  stickyFilter?: boolean;
  /** Alias for stickyFilter */
  sticky?: boolean;
  /** Optional custom max-height class for scrollable mode (e.g. "max-h-[75vh]") */
  maxHeight?: string;
}

export function CabinFilterGrid({
  actionLabel = "Reserve Cabin",
  actionHref = "/checkout",
  showDiscount = true,
  scrollable = false,
  scrollableList = false,
  stickyFilter = false,
  sticky = false,
  maxHeight = "max-h-[75vh]",
}: CabinFilterGridProps) {
  const [activeFilter, setActiveFilter] = useState<CapacityFilter>("all");

  const isScrollable = scrollable || scrollableList;
  const isSticky = stickyFilter || sticky;

  const filteredCabins = cabins.filter((cabin) => {
    if (activeFilter === "small") return cabin.maxCapacity <= 3;
    if (activeFilter === "medium")
      return cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7;
    if (activeFilter === "large") return cabin.maxCapacity >= 8;
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Filter Tabs */}
      <div
        className={
          isSticky
            ? "sticky top-18.25 z-20 -mx-4 bg-bg-primary/95 px-4 py-3 backdrop-blur-md md:top-20.25"
            : undefined
        }
      >
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveFilter("all")}
            className={`cursor-pointer px-4 py-2 text-xs transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none ${
              activeFilter === "all"
                ? "bg-action-primary font-semibold text-action-text"
                : "bg-bg-surface font-medium text-text-secondary hover:bg-bg-hover hover:text-text-primary"
            }`}
          >
            All Cabins ({cabins.length})
          </button>
          <button
            onClick={() => setActiveFilter("small")}
            className={`cursor-pointer px-4 py-2 text-xs transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none ${
              activeFilter === "small"
                ? "bg-action-primary font-semibold text-action-text"
                : "bg-bg-surface font-medium text-text-secondary hover:bg-bg-hover hover:text-text-primary"
            }`}
          >
            1&mdash;3 Guests
          </button>
          <button
            onClick={() => setActiveFilter("medium")}
            className={`cursor-pointer px-4 py-2 text-xs transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none ${
              activeFilter === "medium"
                ? "bg-action-primary font-semibold text-action-text"
                : "bg-bg-surface font-medium text-text-secondary hover:bg-bg-hover hover:text-text-primary"
            }`}
          >
            4&mdash;7 Guests
          </button>
          <button
            onClick={() => setActiveFilter("large")}
            className={`cursor-pointer px-4 py-2 text-xs transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none ${
              activeFilter === "large"
                ? "bg-action-primary font-semibold text-action-text"
                : "bg-bg-surface font-medium text-text-secondary hover:bg-bg-hover hover:text-text-primary"
            }`}
          >
            8&mdash;12 Guests
          </button>
        </div>
      </div>

      {/* Cabin Cards Grid Container */}
      <div
        className={
          isScrollable
            ? `${maxHeight} no-scrollbar scrollbar-none overflow-y-auto scroll-smooth [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden`
            : undefined
        }
      >
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCabins.map((cabin) => {
            const effectivePrice =
              showDiscount && cabin.discount > 0
                ? cabin.regularPrice - cabin.discount
                : cabin.regularPrice;

            return (
              <div
                key={cabin.id}
                className="flex flex-col overflow-hidden bg-bg-surface transition-colors"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden bg-bg-elevated">
                  <Image
                    src={cabin.image}
                    alt={cabin.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between space-y-4 px-4 py-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-5 items-start justify-between gap-1.5">
                      <div className="col-span-3 space-y-1">
                        <h3 className="text-lg leading-5 font-medium text-text-primary">
                          Cabin {cabin.name}
                        </h3>
                        <span className="mt-1 inline-block bg-bg-elevated px-2.5 py-0.5 text-xs text-text-secondary">
                          Up to {cabin.maxCapacity} guests
                        </span>
                      </div>

                      <div className="col-span-2 flex flex-col items-end">
                        <span className="text-xl font-semibold text-text-primary">
                          ${effectivePrice} / night
                        </span>

                        {showDiscount && cabin.discount > 0 && (
                          <span className="text-xs text-text-secondary line-through">
                            ${cabin.regularPrice} /night
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="line-clamp-3 text-xs leading-relaxed text-text-secondary sm:text-sm">
                      {cabin.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={actionHref}
                      className="inline-flex w-full items-center justify-center bg-action-primary px-6 py-3 text-sm font-semibold text-action-text transition-colors duration-200 hover:bg-action-primary-hover focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:outline-none"
                    >
                      {actionLabel}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
