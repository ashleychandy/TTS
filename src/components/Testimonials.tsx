"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { StarMark, ArrowLeft, ArrowRight } from "./icons";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = TESTIMONIALS.length;
  const active = TESTIMONIALS[index];

  const go = (dir: 1 | -1) => {
    setIndex((prev) => (prev + dir + total) % total);
  };

  return (
    <section id="testimonials" className="relative bg-deep-black py-24 text-pure-white md:py-32">
      <div className="mx-auto max-w-[1800px] px-6 md:px-10">
        <Reveal>
          <div className="mb-14 flex items-start gap-4 md:mb-20">
            <StarMark className="h-8 w-8 shrink-0 text-heat-red" />
            <h2 className="font-display max-w-2xl text-[9vw] leading-[1.05] sm:text-[5.5vw] lg:text-[46px]">
              Designed to be impossible to ignore and built to last
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid gap-10 rounded-3xl bg-raw-red/20 p-6 ring-1 ring-pure-white/10 md:grid-cols-[280px_1fr] md:gap-14 md:p-12">
            <div className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-2xl bg-deep-black">
              <Image
                src={active.image}
                alt={active.name}
                fill
                sizes="280px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <span className="font-display block text-5xl leading-none text-heat-red">
                  &ldquo;
                </span>
                <p className="font-display mt-4 max-w-2xl text-xl leading-snug sm:text-2xl">
                  {active.quote}
                </p>
                <p className="mt-6 eyebrow text-pure-white/50">
                  &mdash; {active.name}, {active.role}
                </p>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-pure-white/25 transition-colors hover:border-pure-white hover:bg-pure-white hover:text-deep-black"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-pure-white/25 transition-colors hover:border-pure-white hover:bg-pure-white hover:text-deep-black"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
                <span className="eyebrow ml-2 text-pure-white/40">
                  {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
