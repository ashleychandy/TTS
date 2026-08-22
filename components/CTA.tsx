"use client";

import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import StarIcon from "@/components/ui/StarIcon";

export default function CTA() {
  return (
    <section
      className="bg-bg font-sans grid grid-cols-2 gap-[4vw] px-[3vw] py-[4vw] relative isolate md:grid-cols-1 md:gap-12 md:px-5 md:py-12 sm:gap-9 sm:px-4 sm:py-10"
      aria-labelledby="cta-heading"
    >
      <div className="flex flex-col justify-between md:gap-8 sm:gap-8">
        <div>
          <p className="text-[0.7vw] font-medium text-primary-red-medium uppercase tracking-[0.05em] mb-[8vw] md:text-[11px] md:mb-6 sm:text-[10px] sm:mb-5">
            LET&apos;S WORK
          </p>
          <h2
            id="cta-heading"
            className="text-[4.5vw] font-semibold text-primary-red-dark uppercase leading-[1.05] -tracking-[0.03em] mb-[2vw] md:text-[38px] md:leading-[1.08] md:mb-6 sm:text-[32px] sm:mb-5"
          >
            READY TO BUILD
            <br />
            SOMETHING GREAT?
          </h2>

          <div className="pl-0 mb-[6vw] md:mb-8 sm:mb-8">
            <p className="text-[0.9vw] font-normal text-text-dark uppercase leading-[1.4] tracking-[0.02em] max-w-[25vw] mb-[2.5vw] md:text-[13px] md:max-w-full md:leading-[1.5] md:mb-6 sm:text-[12px] sm:mb-5">
              WE TURN IDEAS INTO BOLD VISUAL IDENTITIES AND DIGITAL EXPERIENCES THAT STAND OUT AND
              SELL.
            </p>
            <a
              href={`mailto:${SITE_CONFIG.contactEmail}`}
              className="inline-block bg-primary-red-dark text-white px-[2vw] py-[1vw] rounded-full text-[0.8vw] font-medium uppercase tracking-[0.05em] no-underline transition-all duration-300 ease-out hover:translate-y-[-2px] hover:bg-[#550000] md:text-[13px] md:px-7 md:py-3.5 md:min-h-12 md:inline-flex md:items-center md:justify-center sm:text-[12px] sm:px-6 sm:py-3.5 sm:w-full"
              aria-label="Start a project - Contact us via email"
            >
              START A PROJECT
            </a>
          </div>
        </div>

        <StarIcon className="w-[3vw] h-[3vw] md:w-11 md:h-11 sm:w-10 sm:h-10" fill="#6e0505" />
      </div>

      <div className="flex items-center justify-end relative w-full md:order-first">
        <div className="relative w-full aspect-[1.05] rounded-[1vw] overflow-hidden md:aspect-square md:rounded-lg sm:rounded-2.5xl">
          <Image
            src="/LandingPage/contact.png"
            alt="Contact page visual"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
