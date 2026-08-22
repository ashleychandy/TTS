"use client";

import Link from "next/link";
import { useFitText } from "@/hooks/useFitText";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import { mainNavigation, footerNavigation } from "@/data/navigation";
import StarIcon from "@/components/ui/StarIcon";

export default function Footer() {
  const { containerRef, textRef, fontSize } = useFitText(24);

  return (
    <footer className="bg-[radial-gradient(circle_at_50%_0%,#6a000f_0%,#300005_50%,#150000_100%)] text-white font-sans px-[3vw] py-[3vw] pb-0 flex flex-col overflow-hidden relative isolate md:px-5 md:py-8 md:pb-0 sm:px-4 sm:py-8 sm:pb-0">
      <div className="flex justify-between items-center mb-[2vw] pb-[3vw] border-b border-white/10 md:flex-col md:items-start md:gap-6 md:mb-12 md:pb-6 sm:flex-col sm:items-start sm:gap-6 sm:mb-10 sm:pb-6">
        <p className="text-[clamp(10px,0.9vw,14px)] leading-[1.6] font-normal uppercase tracking-[0.02em] max-w-[32vw] md:max-w-full md:text-sm sm:text-xs">
          WE ARE AN INDEPENDENT CREATIVE AGENCY.
          <br />
          WE COMBINE BOLD VISION WITH SHARP
          <br />
          EXECUTION AND DELIVER WITH SPEED.
        </p>

        <StarIcon
          className="w-[3vw] h-[3vw] md:w-8 md:h-8 sm:w-7 sm:h-7 md:self-start sm:self-start"
          fill="#ffffff"
        />
      </div>

      <div className="grid grid-cols-[1.75fr_1fr_1fr_1fr] gap-[clamp(20px,2vw,32px)_clamp(20px,3vw,36px)] mb-[clamp(40px,8vw,80px)] items-start pt-[clamp(16px,2vw,24px)] md:grid-cols-2 md:gap-[clamp(24px,5vw,32px)_clamp(20px,4vw,28px)] md:mb-14 md:pt-0 sm:grid-cols-1 sm:gap-6 sm:mb-10">
        <div className="flex flex-col gap-[clamp(8px,0.4vw,12px)] justify-start items-start md:gap-2 sm:gap-2">
          <div className="text-[clamp(12px,1vw,16px)] font-medium tracking-[0.04em] m-0 p-0 leading-none text-[#ccaa88] md:text-sm sm:text-xs">
            {SITE_CONFIG.name}
          </div>
          <div className="text-[clamp(12px,1vw,16px)] font-medium tracking-[0.04em] m-0 p-0 leading-none text-[#ccaa88] md:text-sm sm:text-xs">
            BASED ON EARTH
          </div>

          <div className="w-full flex flex-col items-start mt-[clamp(4px,0.4vw,8px)]">
            <span className="block w-fit leading-none">
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="text-[clamp(12px,1vw,16px)] font-normal text-white no-underline uppercase tracking-[0.04em] transition-opacity duration-300 hover:opacity-60 inline leading-none m-0 p-0 whitespace-nowrap w-fit md:text-sm sm:text-xs"
              >
                {SITE_CONFIG.contactEmail}
              </a>
            </span>
          </div>

          <div className="text-[clamp(8px,0.7vw,11px)] opacity-80 mt-[clamp(8px,0.8vw,12px)] md:text-xs sm:text-[10px]">
            © 2026 {SITE_CONFIG.name}
          </div>
        </div>

        <div className="flex flex-col gap-[clamp(8px,0.4vw,12px)] justify-start items-start md:gap-2 sm:gap-2">
          <div
            className="text-[clamp(12px,1vw,16px)] font-medium tracking-[0.04em] m-0 p-0 leading-none text-[#ccaa88] md:text-sm sm:text-xs"
            style={{ marginBottom: "clamp(4px, 0.4vw, 8px)" }}
          >
            NAVIGATION
          </div>
          {mainNavigation
            .filter((link) => !link.disabled)
            .map((link, index) => (
              <span key={`nav-${link.label}-${index}`} className="block w-fit leading-none">
                <Link
                  href={link.href}
                  className="text-[clamp(12px,1vw,16px)] font-normal text-white no-underline uppercase tracking-[0.04em] transition-opacity duration-300 hover:opacity-60 inline leading-none m-0 p-0 whitespace-nowrap w-fit md:text-sm sm:text-xs"
                >
                  {link.label}
                </Link>
              </span>
            ))}
        </div>

        <div className="flex flex-col gap-[clamp(8px,0.4vw,12px)] justify-start items-start md:gap-2 sm:gap-2">
          <div
            className="text-[clamp(12px,1vw,16px)] font-medium tracking-[0.04em] m-0 p-0 leading-none text-[#ccaa88] md:text-sm sm:text-xs"
            style={{ marginBottom: "clamp(4px, 0.4vw, 8px)" }}
          >
            LEGAL
          </div>
          {footerNavigation.legal.map((link, index) => (
            <span key={`legal-${link.label}-${index}`} className="block w-fit leading-none">
              <Link
                href={link.href}
                className="text-[clamp(12px,1vw,16px)] font-normal text-white no-underline uppercase tracking-[0.04em] transition-opacity duration-300 hover:opacity-60 inline leading-none m-0 p-0 whitespace-nowrap w-fit md:text-sm sm:text-xs"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-[clamp(8px,0.4vw,12px)] justify-start items-start md:gap-2 sm:gap-2">
          <div
            className="text-[clamp(12px,1vw,16px)] font-medium tracking-[0.04em] m-0 p-0 leading-none text-[#ccaa88] md:text-sm sm:text-xs"
            style={{ marginBottom: "clamp(4px, 0.4vw, 8px)" }}
          >
            SOCIAL
          </div>
          <span className="block w-fit leading-none">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[clamp(12px,1vw,16px)] font-normal text-white no-underline uppercase tracking-[0.04em] transition-opacity duration-300 hover:opacity-60 inline leading-none m-0 p-0 whitespace-nowrap w-fit md:text-sm sm:text-xs"
            >
              INSTAGRAM
            </a>
          </span>

          <span className="block w-fit leading-none">
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[clamp(12px,1vw,16px)] font-normal text-white no-underline uppercase tracking-[0.04em] transition-opacity duration-300 hover:opacity-60 inline leading-none m-0 p-0 whitespace-nowrap w-fit md:text-sm sm:text-xs"
            >
              LINKEDIN
            </a>
          </span>
        </div>
      </div>

      <div
        className="w-full flex justify-center items-end mb-[clamp(-20px,-1.5vw,-12px)] pb-[clamp(12px,2vw,24px)] min-h-[clamp(100px,30vw,350px)] md:mb-[-2vw] md:pb-6 sm:mb-[-2vw] sm:pb-6"
        ref={containerRef}
      >
        <h2
          className="font-black tracking-[-0.03em] leading-[0.85] uppercase m-0 p-0 whitespace-nowrap text-[clamp(80px,24vw,500px)] md:text-[20vw] md:-tracking-[0.04em] sm:text-[22vw]"
          ref={textRef}
          style={fontSize ? { fontSize: `${fontSize}px` } : undefined}
        >
          AGENCY
        </h2>
      </div>
    </footer>
  );
}
