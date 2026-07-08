import Image from "next/image";
import Reveal from "./Reveal";
import { Sparkle } from "./icons";
import { SERVICE_PHOTOS } from "@/lib/data";

export default function AboutIntro() {
  return (
    <section id="about" className="relative bg-pure-white py-24 md:py-32">
      <div className="mx-auto max-w-[1800px] px-6 md:px-10">
        <div className="flex items-start justify-between">
          <Reveal>
            <h2 className="font-display max-w-4xl text-[9vw] leading-[1.02] sm:text-[6vw] lg:text-[58px]">
              <span className="text-heat-red">We help ambitious</span>
              <br />
              <span className="text-heat-red">turn bold ideas into brands</span>
              <br />
              <span className="text-cold-grey">powerful visual identities</span>
              <br />
              <span className="text-cold-grey">and digital experiences</span>
            </h2>
          </Reveal>
          <Sparkle className="hidden h-8 w-8 shrink-0 text-heat-red md:block" />
        </div>

        <Reveal delay={100}>
          <p className="mt-8 max-w-md eyebrow font-medium normal-case tracking-normal text-cold-grey">
            We create brands, visual systems and digital experiences that help
            companies stand out in a fast-moving world.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {SERVICE_PHOTOS.map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-deep-black"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 768px) 22vw, 45vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
