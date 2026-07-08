import Image from "next/image";
import Reveal from "./Reveal";
import { StarMark } from "./icons";
import { PROCESS_STEPS } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="relative bg-raw-red text-pure-white">
      <div className="relative overflow-hidden">
        <Image
          src="/images/hero-portrait.jpg"
          alt="Studio portrait, red backdrop, black coat"
          fill
          sizes="100vw"
          className="object-cover object-[38%_15%] opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-raw-red/85 via-raw-red/50 to-deep-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-black/70 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-[1800px] px-6 pb-10 pt-28 md:px-10 md:pb-16 md:pt-36">
          <Reveal>
            <StarMark className="h-7 w-7 text-pure-white" />
          </Reveal>

          <Reveal delay={80}>
            <span className="mt-8 block eyebrow text-pure-white/70">
              Our process
              <br />
              Step by step
              <br />
              How we work
            </span>
          </Reveal>

          <Reveal delay={140}>
            <h2 className="font-display mt-10 text-[22vw] leading-[0.85] sm:text-[16vw] lg:text-[170px]">
              Process
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1800px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-10 md:grid-cols-2 md:gap-x-16 md:gap-y-16">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.index} delay={i * 90}>
              <div className="border-t border-pure-white/20 pt-6">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-3xl md:text-4xl">
                    {step.index}
                  </span>
                  <span className="eyebrow text-pure-white/50">{step.title}</span>
                </div>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-pure-white/70">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
