import Image from "next/image";
import { introCards } from "@/data/intro";
import StarIcon from "@/components/ui/StarIcon";

export default function Intro() {
  return (
    <section className="bg-bg font-sans text-primary-red-brand overflow-x-hidden w-full min-h-screen relative isolate">
      <div
        className="absolute top-[3.5vw] left-[4vw] w-[3.5vw] h-[3.5vw] lg:top-5 lg:left-5 lg:w-7 lg:h-7 md:top-5 md:left-5 md:w-7 md:h-7 sm:top-4 sm:left-4 sm:w-6 sm:h-6"
        aria-hidden="true"
      >
        <StarIcon fill="#a80015" />
      </div>

      <div className="absolute top-[3.5vw] right-[4vw] text-[0.8vw] font-medium tracking-[0.02em] leading-[1.2] uppercase text-left lg:top-5 lg:right-5 lg:text-xs md:top-5 md:right-5 md:text-[10px] md:leading-[1.3] sm:top-4 sm:right-4 sm:text-[9px] sm:leading-[1.3]">
        CREATE
        <br />
        THE FUTURE
      </div>

      <div className="absolute bottom-[3.5vw] left-[4vw] text-[0.8vw] font-medium tracking-[0.02em] leading-[1.2] uppercase lg:bottom-5 lg:left-5 lg:text-xs md:bottom-5 md:left-5 md:text-[10px] sm:bottom-4 sm:left-4 sm:text-[9px]">
        THIS IS OUR
        <br />
        PLAYGROUND
      </div>

      <div className="pt-[8vw] pl-[21vw] pr-[6vw] pb-[4vw] flex flex-col lg:pt-20 lg:pl-5 lg:pr-5 lg:pb-10 md:pt-20 md:pl-5 md:pr-5 md:pb-10 sm:pt-[70px] sm:pl-4 sm:pr-4 sm:pb-8">
        <div className="flex flex-col items-start">
          <h2 className="inline-flex flex-col items-start text-[4.6vw] font-medium -tracking-[0.04em] leading-[1.05] uppercase lg:text-[3.8vw] md:text-[28px] md:leading-[1.1] sm:text-[24px]">
            <span className="whitespace-nowrap self-end lg:self-start md:self-start">
              WE HELP AMBITIOUS
            </span>
            <span className="whitespace-normal lg:text-left md:whitespace-normal md:text-left">
              TURN BOLD IDEAS INTO BRANDS
            </span>
            <span className="flex items-center gap-[0.2vw] lg:gap-1 md:gap-1 sm:gap-0.5">
              <span className="text-[#7d7d7d]">POWERFUL VISUAL</span>

              <span
                className="inline-block w-[3.8vw] h-[3.8vw] align-middle translate-y-[-0.3vw] mx-[0.2vw] lg:w-[3.2vw] lg:h-[3.2vw] md:w-[26px] md:h-[26px] md:translate-y-[-2px] md:mx-0 sm:w-[22px] sm:h-[22px]"
                aria-hidden="true"
              >
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                  <defs>
                    <mask id="star-mask">
                      <rect width="100" height="100" fill="white" />
                      <path
                        d="M 50,18 C 50,38 38,50 18,50 C 38,50 50,62 50,82 C 50,62 62,50 82,50 C 62,50 50,38 50,18 Z"
                        fill="black"
                      />
                    </mask>
                  </defs>
                  <circle cx="50" cy="50" r="48" fill="#a80015" mask="url(#star-mask)" />
                </svg>
              </span>

              <span className="text-[#7d7d7d]">IDENTITIES</span>
            </span>
            <span>AND DIGITAL EXPERIENCES</span>
          </h2>

          <p className="mt-[1.8vw] text-[1.1vw] font-normal text-[#7d7d7d] leading-[1.25] max-w-[40vw] lg:text-[1.4vw] md:text-[13px] md:max-w-full md:leading-[1.4] md:mt-6 sm:text-[12px] sm:mt-5">
            WE CREATE BRANDS, VISUAL SYSTEMS AND DIGITAL EXPERIENCES
            <br />
            THAT HELP COMPANIES STAND OUT IN A FAST-MOVING WORLD.
          </p>
        </div>

        <div className="mt-[4.5vw] grid grid-cols-4 gap-[2vw] w-full lg:grid-cols-2 lg:gap-[2.5vw] md:grid-cols-1 md:gap-4 md:mt-10 sm:gap-4">
          {introCards.map((item) => (
            <article
              key={item.id}
              className="aspect-[1/1.35] rounded-[1.2vw] relative overflow-hidden bg-[radial-gradient(circle_at_50%_35%,#b80016_0%,#6e000d_55%,#1f0002_100%)] lg:rounded-lg md:rounded-xl md:min-h-[280px] sm:rounded-xl sm:min-h-[240px]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
