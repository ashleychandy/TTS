import Reveal from "./Reveal";
import { Sparkle } from "./icons";

export default function Philosophy() {
  return (
    <section className="relative bg-pure-white py-24 md:py-32">
      <div className="mx-auto max-w-[1800px] px-6 md:px-10">
        <div className="flex items-start justify-between gap-8">
          <span className="eyebrow shrink-0 text-cold-grey">
            Not for
            <br />
            everyone
          </span>
          <Sparkle className="hidden h-7 w-7 shrink-0 text-heat-red md:block" />
        </div>

        <Reveal>
          <p className="font-display mt-8 max-w-5xl text-[8vw] leading-[1.05] sm:text-[5vw] lg:text-[46px]">
            <span className="text-heat-red">Great brands aren&apos;t built</span>{" "}
            <span className="text-heat-red">on templates or safe</span>{" "}
            <span className="text-cold-grey">choices. They&apos;re built on</span>{" "}
            <span className="text-cold-grey">bold decisions, </span>
            <span className="text-deep-black">clear vision, </span>
            <span className="text-deep-black">and the refusal to blend in.</span>
          </p>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-10 max-w-sm eyebrow font-medium normal-case tracking-normal text-cold-grey">
            We&apos;re not here to play it safe. We&apos;re here to make you
            unforgettable.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
