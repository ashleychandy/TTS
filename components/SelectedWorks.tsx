"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { works } from "@/data/works";

interface ImageDimensions {
  [key: number]: { width: number; height: number };
}

const itemSizes: { [key: number]: number } = {
  1: 1.6,
  2: 1,
  3: 1,
  4: 1.6,
  5: 1,
  6: 1,
};

export default function SelectedWorks() {
  const [imageDimensions, setImageDimensions] = useState<ImageDimensions>({});
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const loadImageDimensions = async () => {
      const dimensions: ImageDimensions = {};

      for (const work of works) {
        try {
          const img = new window.Image();
          await new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve;
            img.src = work.image;
          });
          dimensions[work.id] = {
            width: img.naturalWidth || 1,
            height: img.naturalHeight || 1,
          };
        } catch {
          dimensions[work.id] = { width: 1, height: 1 };
        }
      }

      setImageDimensions(dimensions);
    };

    loadImageDimensions();
  }, []);

  useEffect(() => {
    const calculateScale = () => {
      let maxRight = 0;
      let maxBottom = 0;

      const itemPositions: { [key: number]: { x: number; y: number; w: number; h: number } } = {
        1: { x: 2.5, y: 18, w: 18.5, h: 24 },
        2: { x: 23.5, y: 18, w: 11.5, h: 12 },
        3: { x: 37.5, y: 40.5, w: 11.5, h: 12 },
        4: { x: 51.5, y: 40.5, w: 18.5, h: 24.5 },
        5: { x: 72.5, y: 62.5, w: 11.5, h: 12.5 },
        6: { x: 86.5, y: 40.5, w: 11.5, h: 12 },
      };

      Object.entries(itemPositions).forEach(([, pos]) => {
        const right = pos.x + pos.w;
        const bottom = pos.y + pos.h;
        maxRight = Math.max(maxRight, right);
        maxBottom = Math.max(maxBottom, bottom);
      });

      const scaleX = 100 / maxRight;
      const scaleY = 100 / maxBottom;
      const calculatedScale = Math.min(scaleX, scaleY, 1);

      setScale(calculatedScale);
    };

    calculateScale();
  }, []);

  const getItemStyle = (workId: number) => {
    const dims = imageDimensions[workId];
    const sizeMultiplier = itemSizes[workId] || 1;
    const baseWidth = 11.5 * sizeMultiplier;

    const width = baseWidth * scale;
    let height = width;

    if (dims && dims.height > 0) {
      const aspectRatio = dims.width / dims.height;
      height = width / aspectRatio;
    }

    return {
      "--item-width": `${width}vw`,
      "--item-height": `${height}vw`,
    } as React.CSSProperties;
  };

  const itemPositions = {
    1: "top-[18vh] left-[2.5vw]",
    2: "top-[18vh] left-[23.5vw]",
    3: "top-[40.5vh] left-[37.5vw]",
    4: "top-[40.5vh] left-[51.5vw]",
    5: "top-[62.5vh] left-[72.5vw]",
    6: "top-[40.5vh] right-[2.5vw]",
  } as const;

  return (
    <section
      className="bg-bg font-sans text-[#1a1a1a] w-full h-screen relative isolate md:overflow-y-auto md:h-auto md:min-h-screen md:pt-6 md:px-5 md:pb-[60px] md:flex md:flex-col sm:py-5 sm:px-4 sm:pb-12"
      aria-labelledby="selected-works-heading"
    >
      <div className="absolute top-[3.5vw] left-[3vw] text-[0.75vw] tracking-[0.04em] uppercase m-0 p-0 leading-[1.2] md:static md:text-[10px] md:mb-2 md:leading-[1.4] sm:text-[9px] sm:mb-2">
        SELECTED WORKS
      </div>
      <div
        className="absolute top-[3.5vw] left-1/2 -translate-x-1/2 text-[0.75vw] tracking-[0.04em] uppercase m-0 p-0 leading-[1.2] hidden md:hidden sm:hidden"
        aria-hidden="true"
      >
        neighbr studios
      </div>
      <div
        className="absolute top-[3.5vw] right-[3vw] text-[0.75vw] tracking-[0.04em] uppercase m-0 p-0 leading-[1.2] hidden md:hidden sm:hidden"
        aria-hidden="true"
      >
        2026 — BEYOND
      </div>

      <h2
        id="selected-works-heading"
        className="absolute top-[23vh] right-[2.5vw] text-primary-red-selected text-[5.8vw] font-medium leading-[0.95] -tracking-[0.04em] uppercase text-left md:static md:text-[44px] md:my-8 md:right-auto md:color-primary-red-selected sm:text-4xl sm:my-6 sm:right-auto"
      >
        SELECTED
        <br />
        WORKS
      </h2>

      {works.map((work) => {
        const posClass = itemPositions[work.id as keyof typeof itemPositions];
        return (
          <article
            key={work.id}
            className={`absolute flex flex-col ${posClass} md:static md:w-full md:mb-8 md:h-auto sm:mb-6`}
            style={getItemStyle(work.id)}
          >
            <div
              className="bg-[#110000] rounded-[0.6vw] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] w-full h-[var(--item-height,12vw)] relative overflow-hidden flex-shrink-0 md:rounded-xl md:aspect-[1/1.1] md:h-auto md:min-h-[280px] sm:rounded-[10px] sm:min-h-[240px]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 100%), radial-gradient(circle at 60% 40%, #7a0012 0%, #300005 50%, #0a0000 100%)",
              }}
            >
              {imageDimensions[work.id] && (
                <Image
                  src={work.image}
                  alt={work.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              )}
            </div>
          </article>
        );
      })}

      <div className="absolute bottom-[3.5vw] left-[3vw] text-primary-red-selected text-[0.75vw] leading-[1.3] tracking-[0.02em] uppercase md:static md:mt-8 md:text-[10px] md:leading-[1.5] sm:mt-6 sm:text-[9px]">
        6 PROJECTS
        <br />
        ACROSS 4 DISCIPLINES
      </div>
    </section>
  );
}
