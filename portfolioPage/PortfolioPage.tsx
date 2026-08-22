"use client";

import React from "react";
import DepthCarousel from "@/external_components/Carousel/DepthCarousel";
import Footer from "@/components/Footer";
import { useFitText } from "@/hooks/useFitText";

const portfolioImages = [
  "/Portfolio/1.png",
  "/Portfolio/2.png",
  "/Portfolio/3.png",
  "/Portfolio/4.png",
  "/Portfolio/5.png",
  "/Portfolio/6.png",
  "/Portfolio/7.png",
  "/Portfolio/8.png",
];

const projects = [
  {
    number: "01",
    slug: "model-shoot",
    title: ["MODEL", "SHOOT"],
    category: "FASHION / EDITORIAL / CAMPAIGN",
    year: "2026",
    images: portfolioImages,
  },
  {
    number: "02",
    slug: "ugc-content",
    title: ["UGC", "CONTENT"],
    category: "CREATOR / SOCIAL / PRODUCT",
    year: "2026",
    images: portfolioImages,
  },
  {
    number: "03",
    slug: "product-campaign",
    title: ["PRODUCT", "CAMPAIGN"],
    category: "AI / CREATIVE / E-COMMERCE",
    year: "2026",
    images: portfolioImages,
  },
];

export default function Portfolio() {
  const titleFit = useFitText(8);

  return (
    <main className="relative min-h-screen w-full overflow-x-clip bg-[#720000] text-[#f4eee7]">
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          inset-0
          z-0
          bg-[radial-gradient(circle_at_50%_12%,rgba(170,0,0,0.22),transparent_42%),linear-gradient(180deg,#720000_0%,#760000_52%,#700000_100%)]
        "
      />

      <div className="relative z-10 w-full">
        <section
          className="
            flex
            min-h-[100svh]
            w-full
            items-center
            justify-center
            overflow-hidden
            px-[2vw]
          "
        >
          <h1
            className="
              m-0
              w-full
              select-none
              text-center
              font-sans
              text-[clamp(3rem,15vw,17.5rem)]
              font-black
              uppercase
              leading-[0.72]
              tracking-[-0.08em]
              text-[#f4eee7]
            "
          >
            PORTFOLIO
          </h1>
        </section>

        <section id="portfolio-projects" className="w-full">
          {projects.map((project) => (
            <article
              id={`project-${project.number}`}
              key={project.slug}
              className="
                relative
                flex
                min-h-[100svh]
                w-full
                items-center
                overflow-visible
                px-[2vw]
                py-[10vh]
              "
            >
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-0
                  right-0
                  top-0
                  h-px
                  bg-[#f4eee7]/10
                "
              />

              <div
                className="
                  mx-auto
                  grid
                  w-full
                  max-w-[2200px]
                  grid-cols-[27%_73%]
                  items-center
                "
              >
                <div
                  className="
                    relative
                    z-30
                    flex
                    min-w-0
                    w-full
                    h-[70vh]
                    items-stretch
                    justify-center
                  "
                >
                  <div
                    ref={titleFit.containerRef}
                    className="
                      w-full
                      h-full
                      rounded-2xl
                      border
                      border-[#f4eee7]/10
                      bg-[#f4eee7]/5
                      p-8
                      backdrop-blur-sm
                      flex
                      flex-col
                      items-center
                      justify-center
                    "
                  >
                    <span
                      className="
                        mb-[0.5rem]
                        block
                        font-sans
                        text-[clamp(1rem,2vw,2rem)]
                        font-normal
                        leading-none
                        tracking-[-0.04em]
                        text-[#f4eee7]/45
                      "
                    >
                      {project.number}
                    </span>

                    <h2
                      ref={titleFit.textRef}
                      className="
                        m-0
                        mb-[0.5rem]
                        w-full
                        text-center
                        font-sans
                        font-black
                        uppercase
                        leading-[0.78]
                        tracking-[-0.065em]
                        text-[#f4eee7]
                      "
                      style={{
                        fontSize: titleFit.fontSize ? `${titleFit.fontSize}px` : '100px'
                      }}
                    >
                      {project.title.map((line, index) => (
                        <React.Fragment key={`${project.slug}-${line}`}>
                          {line}

                          {index < project.title.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </h2>

                    <p
                      className="
                        m-0
                        max-w-[360px]
                        font-sans
                        text-[clamp(9px,0.85vw,11px)]
                        font-medium
                        uppercase
                        leading-[1.55]
                        tracking-[0.1em]
                        text-[#f4eee7]/75
                      "
                    >
                      {project.category}
                    </p>
                  </div>
                </div>

                <div
                  className="
                    relative
                    z-10
                    flex
                    min-w-0
                    w-full
                    h-[70vh]
                    items-center
                    justify-start
                    overflow-visible
                    -translate-x-[8%]
                  "
                >
                  <DepthCarousel
                    items={project.images.map((image, index) => ({
                      image,
                      alt: `${project.title.join(" ")} — portfolio image ${
                        index + 1
                      } of ${project.images.length}`,
                    }))}
                    cardWidth={800}
                    cardHeight={600}
                    radius={14}
                    tint="#720000"
                    depth={5}
                    spread={55}
                    tilt={0}
                    tiltDirection="right"
                    perspective={1700}
                    visibleCards={4}
                    falloff={0.08}
                    blur={2}
                    duration={900}
                    ease="power3.out"
                    autoplay
                    autoplayDelay={5000}
                    loop
                    showControls={false}
                    showIndicators={false}
                    controlsPosition="outside"
                    indicatorsPosition="outside"
                  />
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>

      <Footer />
    </main>
  );
}