"use client";

import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import StarIcon from "@/components/ui/StarIcon";

interface FloatingHeaderProps {
  position?: "left" | "right";
}

export default function FloatingHeader({ position = "left" }: FloatingHeaderProps) {
  const headerClasses =
    position === "right"
      ? "fixed top-[2.5vw] right-[2.5vw] z-[1000] flex items-center gap-[3vw] flex-row-reverse lg:top-5 lg:right-5 lg:gap-8 md:top-4 md:right-4 md:gap-6 sm:flex-col sm:items-end sm:gap-3"
      : "fixed top-[2.5vw] left-[2.5vw] z-[1000] flex items-center gap-[3vw] lg:top-5 lg:left-5 lg:gap-8 md:top-4 md:left-4 md:gap-6 sm:flex-col sm:items-start sm:gap-3";

  return (
    <header className={headerClasses}>
      <Link
        href="/"
        className="flex items-center gap-1.5 font-medium text-[0.85vw] tracking-[0.05em] leading-[1.2] uppercase font-sans text-accent no-underline bg-transparent border-none cursor-pointer transition-opacity duration-200 hover:opacity-70 p-0 lg:text-sm md:text-[13px] md:gap-2 sm:text-xs"
        aria-label={`Home - ${SITE_CONFIG.name}`}
      >
        <StarIcon
          className="w-[1.2vw] h-[1.2vw] flex-shrink-0 lg:w-[18px] lg:h-[18px] md:w-4 md:h-4 sm:w-4 sm:h-4"
          fill="currentColor"
          aria-hidden="true"
        />
        <span>{SITE_CONFIG.name}</span>
      </Link>

      <Link
        href="/portfolio"
        className="flex items-center gap-1.5 font-medium text-[0.85vw] tracking-[0.05em] leading-[1.2] uppercase font-sans text-accent no-underline bg-transparent border-none cursor-pointer transition-opacity duration-200 hover:opacity-70 p-0 lg:text-sm md:text-[13px] md:px-2 md:py-2 md:min-h-11 sm:text-xs sm:px-2 sm:py-2 sm:min-h-11"
      >
        PORTFOLIO
      </Link>
    </header>
  );
}
