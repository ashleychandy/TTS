import Image from "next/image";
import { Sparkle } from "./icons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-deep-black text-pure-white"
    >
      <Image
        src="/images/hero-portrait.jpg"
        alt="Studio portrait, red backlight"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[65%_20%] opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black/70 via-raw-red/20 to-deep-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep-black/60 via-transparent to-transparent" />

      {/* top meta row */}
      <div className="relative mx-auto mt-auto w-full max-w-[1800px] px-6 pt-32 md:px-10">
        <div className="flex flex-wrap items-start justify-between gap-6 eyebrow text-pure-white/70">
          <span>Digital Design</span>
          <span className="hidden text-center sm:block">
            Creative agency exploring bold ideas,
            <br />
            visual systems and digital experiences.
          </span>
          <span className="text-right">
            Based in Europe
            <br />
            Working Worldwide
          </span>
        </div>
      </div>

      {/* wordmark */}
      <div className="relative mx-auto w-full max-w-[1800px] px-6 pb-10 pt-16 md:px-10">
        <div className="mb-6 flex items-center gap-2 eyebrow text-heat-red">
          <Sparkle className="h-3.5 w-3.5" />
          Raw Creative Agency
        </div>
        <h1 className="font-display text-[19vw] leading-[0.82] tracking-tight sm:text-[16vw] lg:text-[160px]">
          Create
        </h1>
      </div>

      <div className="relative mx-auto w-full max-w-[1800px] px-6 pb-10 md:px-10">
        <div className="h-px w-full bg-pure-white/15" />
        <div className="flex items-center justify-between pt-4 eyebrow text-pure-white/50">
          <span>Scroll to explore</span>
          <span>2026</span>
        </div>
      </div>
    </section>
  );
}
