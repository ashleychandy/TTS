import Image from "next/image";
import Reveal from "./Reveal";
import { StarMark, ArrowUpRight } from "./icons";

export default function CTA() {
  return (
    <section id="contact" className="relative bg-pure-white pt-24 md:pt-32">
      <div className="mx-auto max-w-[1800px] px-6 md:px-10">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <span className="eyebrow text-heat-red">Let&apos;s Work</span>
            <h2 className="font-display mt-6 text-[11vw] leading-[0.98] sm:text-[6.5vw] lg:text-[58px]">
              Ready to build
              <br />
              something great?
            </h2>
            <p className="mt-6 max-w-sm text-cold-grey">
              We turn ideas into bold visual identities and digital
              experiences that stand out and sell.
            </p>

            <div className="mt-10 flex items-center gap-8">
              <a
                href="mailto:hello@bureau-studio.com"
                className="eyebrow inline-flex items-center gap-2 rounded-full bg-raw-red px-7 py-4 text-pure-white transition-colors hover:bg-heat-red"
              >
                Start a Project
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <StarMark className="h-8 w-8 text-raw-red" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-deep-black md:aspect-[4/4.6]">
              <Image
                src="/images/hero-portrait.jpg"
                alt="Studio portrait, red backlight"
                fill
                sizes="(min-width: 768px) 45vw, 92vw"
                className="object-cover object-[65%_15%]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
