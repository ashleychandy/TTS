"use client";

import Image from "next/image";
import { useFitText } from "@/hooks/useFitText";

export default function Hero() {
  const { containerRef, textRef, fontSize } = useFitText(24);

  return (
    <section className="bg-[radial-gradient(circle_at_40%_40%,#7e030a_0%,#4a0002_60%,#200000_100%)] text-white font-sans overflow-hidden h-screen w-full max-w-screen relative isolate md:h-auto md:min-h-screen md:overflow-y-auto sm:h-auto sm:min-h-screen sm:overflow-y-auto">
      <Image
        src="/LandingPage/hero.png"
        alt=""
        fill
        className="object-cover z-0"
        priority
        sizes="100vw"
      />
      <div className="flex flex-col h-full px-[2.5vw] relative overflow-hidden z-10 md:px-5 sm:px-4">
        <header className="grid grid-cols-[20%_20%_1fr_auto] items-center auto-rows-max text-[0.85vw] tracking-[0.05em] leading-[1.2] uppercase font-normal text-white md:grid-cols-2 md:gap-4 md:text-[11px] md:leading-[1.4] sm:gap-3 sm:text-[10px]">
          <div></div>
          <div>
            <br />
          </div>
          <div>
            ART
            <br />
            DIRECTION
          </div>
          <div className="text-right md:text-left">
            BASED ON EARTH
            <br />
            WORKING WORLDWIDE
          </div>
        </header>

        <div className="flex-grow relative flex items-center md:flex-col md:items-start md:pt-10 md:gap-8 sm:py-8 sm:gap-8">
          <p className="absolute left-0 top-[45%] text-[0.85vw] tracking-[0.05em] leading-[1.3] uppercase text-white md:relative md:top-auto md:left-auto md:text-[11px] sm:text-[10px]">
            DIGITAL DESIGN
          </p>

          <div className="absolute left-1/2 top-[35%] md:relative md:left-0 md:top-auto">
            <p className="text-[1.5vw] leading-[1.1] font-normal -tracking-[0.02em] text-white mb-[2.5vw] md:text-[22px] md:leading-[1.15] md:mb-6 sm:text-[18px] sm:mb-5">
              neighbr studios
              <br />
              TURNING BOLD IDEAS,
              <br />
              VISUAL SYSTEMS AND
              <br />
              DIGITAL EXPERIENCES.
            </p>

            <div className="flex gap-[11vw] pl-[15vw] text-[0.85vw] tracking-[0.05em] leading-[1.2] uppercase text-white md:gap-10 md:pl-0 md:text-[11px] sm:flex-col sm:gap-3 sm:text-[10px]">
              <div>
                CREATIVE
                <br />
                STUDIO
              </div>
              <div>
                BRAND
                <br />
                IDENTITY
              </div>
            </div>
          </div>
        </div>

        <footer
          className="w-full flex justify-center items-end mb-[-1.5vw] min-h-[clamp(100px,30vw,350px)] md:mt-10 md:mb-[-20px] sm:mt-8 sm:mb-[-2vw]"
          ref={containerRef}
        >
          <h1
            className="text-[clamp(80px,24vw,500px)] font-black -tracking-[0.03em] leading-[0.85] uppercase m-0 p-0 whitespace-nowrap text-white md:text-[20vw] md:-tracking-[0.04em] sm:text-[22vw]"
            ref={textRef}
            style={fontSize ? { fontSize: `${fontSize}px` } : undefined}
          >
            CREATE
          </h1>
        </footer>
      </div>
    </section>
  );
}
