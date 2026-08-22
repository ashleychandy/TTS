import Link from "next/link";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="bg-[#222325] text-[#f4f4f4] font-sans w-full h-screen overflow-hidden relative isolate md:h-auto md:min-h-screen md:overflow-y-auto">
      <div className="absolute top-1/2 left-1/2 w-full text-center -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none md:top-20 md:-translate-y-0 md:py-10 sm:top-16 sm:py-8">
        <div className="text-[55vw] font-bold text-[#d9001c] leading-[0.8] -tracking-[0.06em] blur-[2.5vw] scale-x-110 inline-block md:text-[80vw] md:blur-[20px] sm:text-[80vw] sm:blur-[20px]">
          404
        </div>
      </div>

      <div className="absolute top-[3vw] right-[3vw] text-[0.8vw] tracking-widest uppercase font-medium leading-[1.3] text-right z-10 md:top-auto md:bottom-[3vw] md:right-auto md:left-[3vw] md:text-[10px] md:text-left md:mb-[30px] sm:bottom-[3vw] sm:left-[3vw] sm:text-[10px] sm:text-left">
        BASED ON EARTH
        <br />
        WORKING WORLDWIDE
      </div>

      <main className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center md:top-auto md:left-auto md:right-auto md:translate-x-0 md:translate-y-0 md:py-20 sm:py-16">
        <div className="text-[1.2vw] font-medium mb-[0.2vw] tracking-widest md:text-sm sm:text-xs">
          404
        </div>
        <h1 className="text-[2vw] font-bold uppercase -tracking-[0.02em] mb-[1.5vw] md:text-2xl md:mb-5 sm:text-xl sm:mb-4">
          ERROR PAGE
        </h1>

        <Link
          href="/"
          className="bg-[#7a1a21] text-[#f4f4f4] px-[1.5vw] py-[0.7vw] rounded-full text-[0.75vw] font-semibold uppercase tracking-widest border border-white/10 transition-all duration-300 hover:bg-[#d9001c] hover:scale-105 inline-flex items-center gap-[0.3vw] md:px-5 md:py-2.5 md:text-xs sm:px-5 sm:py-2.5 sm:text-[11px]"
        >
          GO BACK <span>↗</span>
        </Link>
      </main>

      <div className="absolute bottom-[3vw] left-[3vw] text-[0.8vw] tracking-widest uppercase font-medium leading-[1.3] z-10 md:hidden sm:hidden">
        © 2026 {SITE_CONFIG.name}
      </div>

      <div className="absolute bottom-[3vw] right-[3vw] flex gap-[1.5vw] text-[0.8vw] tracking-widest uppercase font-medium leading-[1.3] z-10 md:bottom-[3vw] md:left-1/2 md:right-auto md:translate-x-[-50%] md:w-full md:justify-center md:gap-4 sm:bottom-[3vw] sm:left-1/2 sm:-translate-x-1/2 sm:w-full sm:justify-center sm:gap-4">
        <a
          href={SOCIAL_LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity duration-300 hover:opacity-60 md:text-[10px] sm:text-[10px]"
        >
          INSTAGRAM ↗
        </a>
        <a
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity duration-300 hover:opacity-60 md:text-[10px] sm:text-[10px]"
        >
          LINKEDIN ↗
        </a>
      </div>
    </div>
  );
}
