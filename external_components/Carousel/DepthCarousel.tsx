"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  PointerEvent as ReactPointerEvent,
  KeyboardEvent as ReactKeyboardEvent,
} from "react";
import gsap from "gsap";

export type DepthCarouselItem =
  | string
  | {
      image: string;
      alt?: string;
    };

type TiltDirection = "left" | "right";

export interface DepthCarouselProps {
  items?: DepthCarouselItem[];

  /**
   * Maximum/base card dimensions.
   * The actual rendered card automatically scales
   * according to the available parent container.
   */
  cardWidth?: number;
  cardHeight?: number;

  /**
   * Optional maximum dimensions for the carousel.
   *
   * These are no longer treated as fixed dimensions.
   * The carousel always remains fluid inside its parent.
   */
  containerWidth?: number;
  containerHeight?: number;

  radius?: number;
  tint?: string;

  depth?: number;
  spread?: number;

  tilt?: number;
  tiltDirection?: TiltDirection;

  perspective?: number;

  visibleCards?: number;
  falloff?: number;
  blur?: number;

  duration?: number;
  ease?: string;

  autoplay?: boolean;
  autoplayDelay?: number;

  loop?: boolean;

  showControls?: boolean;
  showIndicators?: boolean;

  controlsPosition?: "inside" | "outside";
  indicatorsPosition?: "inside" | "outside";

  onChange?: (
    index: number,
    item: {
      image: string;
      alt?: string;
    }
  ) => void;

  className?: string;
}

interface CarouselConfig {
  count: number;

  depth: number;
  spread: number;

  tilt: number;
  tiltDirection: TiltDirection;

  visibleCards: number;
  falloff: number;
  blur: number;

  duration: number;
  ease: string;

  loop: boolean;

  cardWidth: number;
  cardHeight: number;

  autoplayDelay: number;
}

interface DragState {
  x: number;
  startPos: number;
  lastX: number;
  lastT: number;
  v: number;
  moved: boolean;
  id: number;
}

const DEFAULT_ITEMS: DepthCarouselItem[] = [
  {
    image: "https://picsum.photos/seed/depth1/800/1000",
    alt: "Slide 1",
  },
  {
    image: "https://picsum.photos/seed/depth2/800/1000",
    alt: "Slide 2",
  },
  {
    image: "https://picsum.photos/seed/depth3/800/1000",
    alt: "Slide 3",
  },
  {
    image: "https://picsum.photos/seed/depth4/800/1000",
    alt: "Slide 4",
  },
  {
    image: "https://picsum.photos/seed/depth5/800/1000",
    alt: "Slide 5",
  },
  {
    image: "https://picsum.photos/seed/depth6/800/1000",
    alt: "Slide 6",
  },
];

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

const normalizeItem = (item: DepthCarouselItem) => {
  return typeof item === "string"
    ? {
        image: item,
        alt: "",
      }
    : item;
};

const DepthCarousel = ({
  items = DEFAULT_ITEMS,

  cardWidth = 300,
  cardHeight = 380,

  containerWidth,
  containerHeight,

  radius = 18,
  tint = "#05060a",

  depth = 220,
  spread = 90,

  tilt = 22,
  tiltDirection = "right",

  perspective = 1400,

  visibleCards = 4,
  falloff = 0.2,
  blur = 6,

  duration = 700,
  ease = "power3.out",

  autoplay = false,
  autoplayDelay = 3200,

  loop = true,

  showControls = true,
  showIndicators = true,

  controlsPosition = "inside",
  indicatorsPosition = "inside",

  onChange,

  className = "",
}: DepthCarouselProps) => {
  const data = useMemo(() => (Array.isArray(items) ? items : []).map(normalizeItem), [items]);

  const count = data.length;

  const rootRef = useRef<HTMLDivElement | null>(null);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const overlayRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const posRef = useRef(0);
  const focusRef = useRef(0);

  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const scaleRef = useRef(1);

  /**
   * Current available carousel dimensions.
   */
  const sizeRef = useRef({
    width: 0,
    height: 0,
  });

  const cfgRef = useRef<CarouselConfig>({} as CarouselConfig);

  const onChangeRef = useRef(onChange);

  const dragRef = useRef<DragState | null>(null);

  const wheelTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const autoTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const reducedRef = useRef(false);

  const [active, setActive] = useState(0);

  onChangeRef.current = onChange;

  /*
   * Keep the configuration in refs so GSAP callbacks
   * always have access to the latest values.
   */
  cfgRef.current = {
    count,

    depth,
    spread,

    tilt,
    tiltDirection,

    visibleCards,
    falloff,
    blur,

    duration,
    ease,

    loop,

    cardWidth,
    cardHeight,

    autoplayDelay,
  };

  /**
   * Responsive layout engine.
   *
   * The cards themselves remain at their base dimensions.
   * scaleRef controls their actual visual size.
   */
  const layout = useCallback((pos: number) => {
    const cfg = cfgRef.current;
    const n = cfg.count;

    if (!n) return;

    const dir = cfg.tiltDirection === "left" ? -1 : 1;

    const scale = scaleRef.current;

    for (let i = 0; i < n; i += 1) {
      const el = cardRefs.current[i];

      if (!el) continue;

      let d = i - pos;

      /*
       * Infinite carousel wrapping.
       */
      if (cfg.loop && n > 1) {
        d = ((d % n) + n) % n;

        if (d > n / 2) {
          d -= n;
        }
      }

      const back = Math.max(0, d);
      const distance = Math.abs(d);

      /*
       * Determine which cards remain visible.
       */
      const shown = distance <= cfg.visibleCards + 0.5;

      /*
       * Depth.
       */
      const tz = -cfg.depth * d;

      /*
       * Horizontal fan.
       */
      const tx = dir * cfg.spread * d;

      /*
       * Rotate cards toward the depth direction.
       */
      const ry = dir * cfg.tilt * clamp(d, 0, 1);

      /*
       * Front card has full opacity.
       * Cards moving behind the front card fade.
       */
      let opacity = d < 0 ? Math.max(0, 1 + d) : 1;

      if (!shown) {
        opacity = 0;
      }

      /*
       * Progressive brightness falloff.
       */
      const brightness = Math.max(0.15, 1 - back * cfg.falloff);

      /*
       * Progressive blur.
       */
      const blurPx =
        cfg.blur > 0 ? Math.min(cfg.blur, (back / Math.max(1, cfg.visibleCards)) * cfg.blur) : 0;

      /*
       * Z-index keeps the front card above
       * the cards behind it.
       */
      const zi = Math.round(2000 - d * 20);

      el.style.transform = [
        "translate(-50%, -50%)",
        `scale(${scale})`,
        `translateX(${tx.toFixed(2)}px)`,
        `translateZ(${tz.toFixed(2)}px)`,
        `rotateY(${ry.toFixed(3)}deg)`,
      ].join(" ");

      el.style.opacity = opacity.toFixed(3);

      el.style.filter = `brightness(${brightness.toFixed(3)}) blur(${blurPx.toFixed(2)}px)`;

      el.style.zIndex = String(zi);

      el.style.pointerEvents = shown && opacity > 0.05 ? "auto" : "none";

      const overlay = overlayRefs.current[i];

      if (overlay) {
        overlay.style.opacity = clamp(back * cfg.falloff * 1.25, 0, 0.86).toFixed(3);
      }
    }
  }, []);

  /**
   * Notify parent when active slide changes.
   */
  const notify = useCallback(
    (index: number) => {
      setActive(index);

      onChangeRef.current?.(index, data[index]);
    },
    [data]
  );

  /**
   * Animate to a specific carousel position.
   */
  const tweenTo = useCallback(
    (target: number, animate: boolean) => {
      tweenRef.current?.kill();

      const cfg = cfgRef.current;

      const proxy = {
        p: posRef.current,
      };

      const tweenDuration = animate && !reducedRef.current ? cfg.duration / 1000 : 0;

      tweenRef.current = gsap.to(proxy, {
        p: target,

        duration: tweenDuration,

        ease: cfg.ease,

        onUpdate: () => {
          posRef.current = proxy.p;

          layout(proxy.p);
        },

        onComplete: () => {
          const n = cfg.count;

          if (n > 0) {
            posRef.current = ((posRef.current % n) + n) % n;
          }

          layout(posRef.current);
        },
      });
    },
    [layout]
  );

  /**
   * Set active carousel slide.
   */
  const setFocus = useCallback(
    (rawIndex: number, animate = true) => {
      const cfg = cfgRef.current;

      const n = cfg.count;

      if (!n) return;

      const index = cfg.loop ? ((rawIndex % n) + n) % n : clamp(rawIndex, 0, n - 1);

      let delta = index - posRef.current;

      if (cfg.loop && n > 1) {
        delta = ((delta % n) + n) % n;

        if (delta > n / 2) {
          delta -= n;
        }
      }

      tweenTo(posRef.current + delta, animate);

      if (index !== focusRef.current) {
        focusRef.current = index;

        notify(index);
      }
    },
    [notify, tweenTo]
  );

  const navigateBy = useCallback(
    (step: number) => {
      setFocus(focusRef.current + step, true);
    },
    [setFocus]
  );

  /**
   * ============================================================
   * RESPONSIVE SIZE OBSERVER
   * ============================================================
   *
   * This is the important part.
   *
   * The carousel measures its actual parent size and
   * scales the cards accordingly.
   */
  useEffect(() => {
    const root = rootRef.current;

    if (!root) return;

    const updateScale = () => {
      const cfg = cfgRef.current;

      const width = root.clientWidth;

      const height = root.clientHeight;

      if (!width || !height || !cfg.cardWidth || !cfg.cardHeight) {
        return;
      }

      sizeRef.current = {
        width,
        height,
      };

      /*
       * Horizontal space required by the card,
       * including the fan/spread effect.
       */
      const horizontalNeeded = cfg.cardWidth + Math.abs(cfg.spread) * 2;

      /*
       * Scale required to fit horizontally.
       */
      const widthScale = width / horizontalNeeded;

      /*
       * Scale required to fit vertically.
       */
      const heightScale = height / cfg.cardHeight;

      /*
       * Use whichever dimension is more restrictive.
       */
      let nextScale = Math.min(widthScale, heightScale);

      /*
       * Avoid microscopic cards on extremely
       * narrow containers.
       */
      nextScale = Math.max(nextScale, 0.22);

      scaleRef.current = nextScale;

      layout(posRef.current);
    };

    const observer = new ResizeObserver(updateScale);

    observer.observe(root);

    updateScale();

    return () => observer.disconnect();
  }, [layout]);

  /**
   * Recalculate layout when carousel
   * configuration changes.
   */
  useEffect(() => {
    layout(posRef.current);
  }, [
    layout,
    depth,
    spread,
    tilt,
    tiltDirection,
    visibleCards,
    falloff,
    blur,
    cardWidth,
    cardHeight,
    radius,
    count,
  ]);

  /**
   * ============================================================
   * WHEEL NAVIGATION
   * ============================================================
   */
  useEffect(() => {
    const root = rootRef.current;

    if (!root) return;

    const onWheel = (event: WheelEvent) => {
      const cfg = cfgRef.current;

      if (cfg.count < 2) return;

      event.preventDefault();

      tweenRef.current?.kill();

      const raw = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;

      const delta = event.deltaMode === 1 ? raw * 24 : raw;

      /*
       * Use the actual responsive scale
       * when calculating wheel movement.
       */
      const effectiveCardWidth = cfg.cardWidth * scaleRef.current;

      const step = clamp(delta / Math.max(effectiveCardWidth * 0.9, 1), -0.6, 0.6);

      posRef.current += step;

      layout(posRef.current);

      if (wheelTimerRef.current) {
        clearTimeout(wheelTimerRef.current);
      }

      wheelTimerRef.current = setTimeout(() => {
        setFocus(Math.round(posRef.current), true);
      }, 130);
    };

    root.addEventListener("wheel", onWheel, {
      passive: false,
    });

    return () => {
      root.removeEventListener("wheel", onWheel);

      if (wheelTimerRef.current) {
        clearTimeout(wheelTimerRef.current);
      }
    };
  }, [layout, setFocus]);

  /**
   * ============================================================
   * POINTER / DRAG
   * ============================================================
   */
  const onPointerDown = useCallback((event: ReactPointerEvent<HTMLDivElement>) => {
    const cfg = cfgRef.current;

    if (cfg.count < 2) {
      return;
    }

    tweenRef.current?.kill();

    dragRef.current = {
      x: event.clientX,

      startPos: posRef.current,

      lastX: event.clientX,

      lastT: performance.now(),

      v: 0,

      moved: false,

      id: event.pointerId,
    };
  }, []);

  const onPointerMove = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      const drag = dragRef.current;

      if (!drag) return;

      const cfg = cfgRef.current;

      const effectiveCardWidth = cfg.cardWidth * scaleRef.current;

      const stepPx = Math.max(effectiveCardWidth * 0.55, 40);

      const dx = event.clientX - drag.x;

      if (!drag.moved && Math.abs(dx) > 4) {
        drag.moved = true;

        rootRef.current?.setPointerCapture(drag.id);
      }

      if (!drag.moved) {
        return;
      }

      const now = performance.now();

      const dt = Math.max(now - drag.lastT, 1);

      drag.v = (event.clientX - drag.lastX) / dt;

      drag.lastX = event.clientX;

      drag.lastT = now;

      posRef.current = drag.startPos - dx / stepPx;

      layout(posRef.current);
    },
    [layout]
  );

  const onPointerEnd = useCallback(() => {
    const drag = dragRef.current;

    if (!drag) return;

    dragRef.current = null;

    if (!drag.moved) {
      return;
    }

    const cfg = cfgRef.current;

    const effectiveCardWidth = cfg.cardWidth * scaleRef.current;

    const stepPx = Math.max(effectiveCardWidth * 0.55, 40);

    const projected = posRef.current - (drag.v * 180) / stepPx;

    setFocus(Math.round(projected), true);
  }, [setFocus]);

  /**
   * ============================================================
   * KEYBOARD
   * ============================================================
   */
  const onKeyDown = useCallback(
    (event: ReactKeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();

        navigateBy(-1);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();

        navigateBy(1);
      }
    },
    [navigateBy]
  );

  /**
   * ============================================================
   * CARD CLICK
   * ============================================================
   */
  const onCardClick = useCallback(
    (index: number) => {
      if (dragRef.current?.moved) {
        return;
      }

      setFocus(index, true);
    },
    [setFocus]
  );

  /**
   * ============================================================
   * AUTOPLAY
   * ============================================================
   */
  useEffect(() => {
    reducedRef.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!autoplay || reducedRef.current || count < 2) {
      return;
    }

    const root = rootRef.current;

    let hovered = false;
    let focused = false;

    const stop = () => {
      if (autoTimerRef.current) {
        clearInterval(autoTimerRef.current);
      }

      autoTimerRef.current = null;
    };

    const start = () => {
      stop();

      autoTimerRef.current = setInterval(
        () => {
          if (!hovered && !focused) {
            navigateBy(1);
          }
        },
        Math.max(autoplayDelay, 600)
      );
    };

    const onEnter = () => {
      hovered = true;
    };

    const onLeave = () => {
      hovered = false;
    };

    const onFocusIn = () => {
      focused = true;
    };

    const onFocusOut = () => {
      focused = false;
    };

    root?.addEventListener("mouseenter", onEnter);

    root?.addEventListener("mouseleave", onLeave);

    root?.addEventListener("focusin", onFocusIn);

    root?.addEventListener("focusout", onFocusOut);

    start();

    return () => {
      stop();

      root?.removeEventListener("mouseenter", onEnter);

      root?.removeEventListener("mouseleave", onLeave);

      root?.removeEventListener("focusin", onFocusIn);

      root?.removeEventListener("focusout", onFocusOut);
    };
  }, [autoplay, autoplayDelay, count, navigateBy]);

  /**
   * ============================================================
   * CLEANUP
   * ============================================================
   */
  useEffect(() => {
    return () => {
      tweenRef.current?.kill();

      if (wheelTimerRef.current) {
        clearTimeout(wheelTimerRef.current);
      }

      if (autoTimerRef.current) {
        clearInterval(autoTimerRef.current);
      }
    };
  }, []);

  /**
   * ============================================================
   * RENDER
   * ============================================================
   */
  return (
    <>
      <div
        ref={rootRef}
        className={`
          relative
          w-full
          h-full
          min-w-0
          min-h-0
          touch-pan-y
          select-none
          overflow-visible
          outline-none
          [perspective-origin:50%_50%]
          active:cursor-grabbing
          focus-visible:rounded-xl
          focus-visible:outline-2
          focus-visible:outline-white/50
          focus-visible:[outline-offset:4px]
          ${className}
        `.trim()}
        style={{
          perspective: `${perspective}px`,
          maxWidth: containerWidth ? `${containerWidth}px` : undefined,
          maxHeight: containerHeight ? `${containerHeight}px` : undefined,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        role="group"
        aria-roledescription="carousel"
        aria-label="Depth carousel"
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
        onKeyDown={onKeyDown}
      >
        {/* ==================================================== */}
        {/* 3D CARD STACK */}
        {/* ==================================================== */}

        <div
          className="
            absolute
            inset-0
            [transform-style:preserve-3d]
          "
        >
          {data.map((item, index) => (
            <div
              key={`${item.image}-${index}`}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              className="
                  absolute
                  left-1/2
                  top-1/2
                  cursor-pointer
                  overflow-hidden
                  bg-[#0b0d12]
                  shadow-[0_30px_60px_-20px_rgba(0,0,0,0.65),0_8px_20px_-10px_rgba(0,0,0,0.5)]
                  [transform-origin:center]
                  [will-change:transform,opacity,filter]
                "
              style={{
                width: cardWidth,
                height: cardHeight,
                borderRadius: radius,
              }}
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${count}`}
              aria-hidden={active !== index}
              onClick={() => onCardClick(index)}
            >
              <img
                className="
                    block
                    h-full
                    w-full
                    select-none
                    object-cover
                    [pointer-events:none]
                    [-webkit-user-drag:none]
                  "
                src={item.image}
                alt={item.alt || ""}
                draggable={false}
              />

              {/* Depth tint */}

              <span
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-0
                    mix-blend-multiply
                  "
                ref={(element) => {
                  overlayRefs.current[index] = element;
                }}
                style={{
                  background: tint,
                }}
              />
            </div>
          ))}
        </div>

        {/* ==================================================== */}
        {/* INSIDE CONTROLS */}
        {/* ==================================================== */}

        {showControls && count > 1 && controlsPosition === "inside" && (
          <>
            <button
              type="button"
              className="
                  absolute
                  left-2
                  top-1/2
                  z-[3000]
                  grid
                  h-9
                  w-9
                  -translate-y-1/2
                  place-items-center
                  rounded-full
                  border
                  border-white/20
                  bg-[rgba(18,20,26,0.55)]
                  text-white
                  backdrop-blur-md
                  transition-[background,border-color,transform]
                  duration-200
                  hover:border-white/40
                  hover:bg-[rgba(28,31,40,0.85)]
                  active:scale-95
                  sm:left-4
                  sm:h-[42px]
                  sm:w-[42px]
                "
              aria-label="Previous slide"
              onClick={() => navigateBy(-1)}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path
                  d="M15 5l-7 7 7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              className="
                  absolute
                  right-2
                  top-1/2
                  z-[3000]
                  grid
                  h-9
                  w-9
                  -translate-y-1/2
                  place-items-center
                  rounded-full
                  border
                  border-white/20
                  bg-[rgba(18,20,26,0.55)]
                  text-white
                  backdrop-blur-md
                  transition-[background,border-color,transform]
                  duration-200
                  hover:border-white/40
                  hover:bg-[rgba(28,31,40,0.85)]
                  active:scale-95
                  sm:right-4
                  sm:h-[42px]
                  sm:w-[42px]
                "
              aria-label="Next slide"
              onClick={() => navigateBy(1)}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path
                  d="M9 5l7 7-7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </>
        )}

        {/* ==================================================== */}
        {/* INSIDE INDICATORS */}
        {/* ==================================================== */}

        {showIndicators && count > 1 && indicatorsPosition === "inside" && (
          <div
            className="
                absolute
                bottom-3
                left-1/2
                z-[3000]
                flex
                max-w-[calc(100%-32px)]
                -translate-x-1/2
                gap-1.5
                overflow-hidden
                rounded-full
                bg-[rgba(14,16,22,0.4)]
                px-2.5
                py-1.5
                backdrop-blur-sm
                sm:bottom-4
                sm:gap-2
                sm:px-3
                sm:py-2
              "
            role="tablist"
            aria-label="Slides"
          >
            {data.map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={active === index}
                aria-label={`Go to slide ${index + 1}`}
                className={`
                      h-[6px]
                      cursor-pointer
                      rounded-full
                      transition-[width,background]
                      duration-[250ms]
                      ${active === index ? "w-4 bg-white sm:w-5" : "w-[6px] bg-white/30"}
                    `}
                onClick={() => setFocus(index, true)}
              />
            ))}
          </div>
        )}
      </div>

      {/* ====================================================== */}
      {/* OUTSIDE INDICATORS */}
      {/* ====================================================== */}

      {showIndicators && count > 1 && indicatorsPosition === "outside" && (
        <div
          className="
              mt-[1vh]
              flex
              justify-center
              gap-1.5
              overflow-hidden
            "
          role="tablist"
          aria-label="Slides"
        >
          {data.map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={active === index}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                    h-[6px]
                    cursor-pointer
                    rounded-full
                    transition-[width,background]
                    duration-[250ms]
                    ${active === index ? "w-4 bg-white sm:w-5" : "w-[6px] bg-white/30"}
                  `}
              onClick={() => setFocus(index, true)}
            />
          ))}
        </div>
      )}

      {/* ====================================================== */}
      {/* OUTSIDE CONTROLS */}
      {/* ====================================================== */}

      {showControls && count > 1 && controlsPosition === "outside" && (
        <div className="mt-[1vh] flex justify-center gap-3">
          <button
            type="button"
            className="
                grid
                h-9
                w-9
                place-items-center
                rounded-full
                border
                border-white/20
                bg-[rgba(18,20,26,0.55)]
                text-white
                backdrop-blur-md
                transition-[background,border-color,transform]
                duration-200
                hover:border-white/40
                hover:bg-[rgba(28,31,40,0.85)]
                active:scale-95
                sm:h-[42px]
                sm:w-[42px]
              "
            aria-label="Previous slide"
            onClick={() => navigateBy(-1)}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                d="M15 5l-7 7 7 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            className="
                grid
                h-9
                w-9
                place-items-center
                rounded-full
                border
                border-white/20
                bg-[rgba(18,20,26,0.55)]
                text-white
                backdrop-blur-md
                transition-[background,border-color,transform]
                duration-200
                hover:border-white/40
                hover:bg-[rgba(28,31,40,0.85)]
                active:scale-95
                sm:h-[42px]
                sm:w-[42px]
              "
            aria-label="Next slide"
            onClick={() => navigateBy(1)}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                d="M9 5l7 7-7 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default DepthCarousel;
/*
import DepthCarousel from './DepthCarousel';

const items = [
  { image: 'https://picsum.photos/seed/a/800/1000', alt: 'One' },
  { image: 'https://picsum.photos/seed/b/800/1000', alt: 'Two' },
  { image: 'https://picsum.photos/seed/c/800/1000', alt: 'Three' },
  { image: 'https://picsum.photos/seed/d/800/1000', alt: 'Four' },
  { image: 'https://picsum.photos/seed/e/800/1000', alt: 'Five' }
];

<div style={{ height: '500px', position: 'relative' }}>
  <DepthCarousel
    items={items}
    depth={220}
    spread={90}
    tilt={22}
    tiltDirection="right"
    perspective={1400}
    visibleCards={4}
    falloff={0.2}
    blur={6}
    autoplay={false}
    loop
    cardWidth={300}
    cardHeight={380}
    radius={18}
    tint="#05060a"
    duration={700}
    ease="power3.out"
    autoplayDelay={3200}
    showControls
    showIndicators
/>
</div>

*/

/*

Props
Property	Type	Default	Description
items	Array<string | { image: string; alt?: string }>	6 sample images	Slides to display. Pass image URLs or objects with an image URL and alt text.
cardWidth	number	300	Width of each card in pixels.
cardHeight	number	380	Height of each card in pixels.
radius	number	18	Corner rounding of the cards in pixels.
tint	string	"#05060a"	Colour multiplied over cards as they recede, shading the depth of the stack.
depth	number	220	Z distance in pixels between each card along the depth rail. Higher values push the stack further back.
spread	number	90	Lateral offset in pixels applied per card so the stack fans out to one side.
tilt	number	22	Degrees each receding card rotates around the vertical axis, revealing its edge.
tiltDirection	"left" | "right"	"right"	Which side the stack fans and tilts toward.
perspective	number	1400	CSS perspective in pixels. Lower values exaggerate the depth foreshortening.
visibleCards	number	4	How many cards deep remain visible before further ones fade out.
falloff	number	0.2	How quickly brightness, tint and blur ramp up with depth.
blur	number	6	Maximum blur in pixels applied to the furthest visible card.
duration	number	700	Length of the advance transition in milliseconds.
ease	string	"power3.out"	GSAP easing used for navigation transitions.
autoplay	boolean	false	Auto-advance the carousel, pausing on hover or focus.
autoplayDelay	number	3200	Delay between auto-advances in milliseconds.
loop	boolean	true	Wrap seamlessly from the last card back to the first.
showControls	boolean	true	Show the previous / next arrow buttons.
showIndicators	boolean	true	Show the dot indicators.
onChange	(index: number, item) => void	undefined	Called whenever the focused card changes.

 */
