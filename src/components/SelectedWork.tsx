import Image from "next/image";
import Reveal from "./Reveal";
import { ArrowUpRight } from "./icons";
import { WORKS } from "@/lib/data";

const SIZE_CLASSES: Record<string, string> = {
  tall: "md:row-span-2 aspect-[4/5] md:aspect-auto",
  mid: "md:row-span-2 aspect-[4/5] md:aspect-auto",
  short: "aspect-[4/3]",
};

export default function SelectedWork() {
  return (
    <section id="work" className="relative bg-pure-white py-24 md:py-32">
      <div className="mx-auto max-w-[1800px] px-6 md:px-10">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-black/10 pb-8">
            <div>
              <span className="eyebrow text-cold-grey">
                Selected Works &middot; Creative Agency
              </span>
              <h2 className="font-display mt-4 text-[12vw] leading-none sm:text-[7vw] lg:text-[64px]">
                Selected <span className="text-heat-red">Works</span>
              </h2>
            </div>
            <p className="eyebrow max-w-xs text-heat-red">
              12+ projects delivered
              <br />
              across 4 disciplines
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:auto-rows-[220px] md:gap-6">
          {WORKS.map((work, i) => (
            <Reveal key={work.title} delay={(i % 3) * 90} className={SIZE_CLASSES[work.size]}>
              <a
                href="#contact"
                className="group relative block h-full w-full overflow-hidden rounded-2xl bg-deep-black"
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 92vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/85 via-deep-black/10 to-transparent" />

                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-pure-white/90 text-deep-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </div>

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                  <span className="font-display text-lg leading-tight text-pure-white">
                    {work.title}
                  </span>
                  <span className="eyebrow shrink-0 text-right text-pure-white/70">
                    {work.category}
                    <br />
                    {work.year}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
