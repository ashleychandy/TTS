import Image from "next/image";
import Reveal from "./Reveal";
import { Sparkle } from "./icons";
import { WAYS } from "@/lib/data";

export default function FourWays() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-raw-red py-24 text-pure-white md:py-32"
    >
      <Image
        src="/images/fourways-portrait.jpg"
        alt="Studio portrait, close crop, red rim light"
        fill
        sizes="100vw"
        className="object-cover object-[70%_30%] opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-deep-black/90 via-raw-red/40 to-raw-red/10" />

      <div className="relative mx-auto max-w-[1800px] px-6 md:px-10">
        <Reveal>
          <div className="mb-16 flex items-start justify-between md:mb-24">
            <h2 className="font-display max-w-xl text-[10vw] leading-[1.02] sm:text-[6vw] lg:text-[52px]">
              Four ways to make
              <br />
              your brand unforgettable
            </h2>
            <Sparkle className="hidden h-8 w-8 shrink-0 md:block" />
          </div>
        </Reveal>

        <div className="grid gap-y-14 md:grid-cols-2 md:gap-x-16 md:gap-y-20">
          {WAYS.map((way, i) => (
            <Reveal key={way.index} delay={i * 90}>
              <div
                className={`max-w-sm border-t border-pure-white/20 pt-6 ${
                  i % 2 === 1 ? "md:ml-auto md:text-right" : ""
                }`}
              >
                <span className="eyebrow text-heat-red">{way.index}</span>
                <h3 className="font-display mt-3 text-2xl md:text-3xl">
                  {way.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-pure-white/70">
                  {way.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
