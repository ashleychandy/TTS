import Image from "next/image";
import { services } from "@/data/services";
import StarIcon from "@/components/ui/StarIcon";

export default function FourWays() {
  return (
    <section
      className="text-white font-sans overflow-hidden w-full h-screen relative isolate bg-[#1a1a1a] md:overflow-y-auto md:h-auto md:min-h-screen md:pt-20 md:pb-[60px] md:px-5 sm:pt-[70px] sm:pb-12 sm:px-4"
      aria-labelledby="four-ways-heading"
    >
      <Image
        src="/LandingPage/Four Ways.png"
        alt=""
        fill
        className="object-cover z-0 md:hidden sm:hidden"
        sizes="100vw"
      />
      <div className="relative w-full h-full z-10 md:h-auto md:flex md:flex-col md:gap-8 sm:gap-6">
        <StarIcon
          className="absolute top-[10vh] right-[4.5vw] w-[3.5vw] h-[3.5vw] md:absolute md:top-5 md:right-5 md:w-8 md:h-8 sm:top-4 sm:right-4 sm:w-7 sm:h-7"
          fill="#ffffff"
        />

        <h2
          id="four-ways-heading"
          className="absolute top-[10vh] left-[4.5vw] text-[5.5vw] font-semibold leading-[1.05] -tracking-[0.04em] uppercase text-white md:static md:text-[40px] md:leading-[1.15] md:mb-4 sm:text-[32px] sm:leading-[1.1] sm:mb-3"
        >
          <span>FOUR WAYS TO </span>
          <span>MAKE YOUR BRAND</span>
          <span className="block ml-[5vw] md:ml-5 sm:ml-4">UNFORGETTABLE</span>
        </h2>

        {services.map((service, index) => {
          const itemClasses = [
            "top-[48vh] left-[4.5vw]",
            "bottom-[12vh] left-[21vw]",
            "top-[39vh] right-[14vw]",
            "bottom-[21vh] right-[4.5vw]",
          ];

          return (
            <article
              key={service.id}
              className={`absolute text-[0.9vw] font-normal leading-[1.25] tracking-[0.02em] uppercase text-white max-w-[12vw] break-words md:static md:text-[14px] md:max-w-full md:leading-[1.7] md:py-6 md:px-5 md:rounded-lg md:bg-transparent sm:text-[13px] sm:leading-[1.7] sm:py-5 sm:px-4 sm:rounded-[10px] sm:bg-transparent ${itemClasses[index]}`}
            >
              <span className="block mr-0 mb-[0.3vw] text-white md:mb-3 md:font-bold md:text-base md:text-white/80 sm:mb-[10px] sm:text-[15px] sm:font-bold">
                {service.num}
              </span>
              <strong className="block font-semibold mb-[0.2vw] text-white md:text-[15px] md:tracking-[0.03em] md:mb-2 sm:text-sm sm:mb-1.5">
                {service.title}.
              </strong>
              <span className="block text-white md:opacity-90 md:leading-[1.65] sm:opacity-90">
                {" "}
                {service.desc}
              </span>
            </article>
          );
        })}
      </div>
    </section>
  );
}
