/**
 * Custom hook for dynamically fitting text to container width
 * Measures text at a reference size and scales to fit available space
 * 
 * @param paddingPx - Horizontal padding in pixels to account for (default: 24)
 * @returns Object with containerRef, textRef, and calculated fontSize
 */

import { useLayoutEffect, useRef, useState } from "react";

export function useFitText(paddingPx = 24) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const [fontSize, setFontSize] = useState<number | null>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    let resizeTimeout: NodeJS.Timeout;

    const fit = () => {
      const available = container.clientWidth - paddingPx * 2;
      if (available <= 0) return;

      const prevFontSize = text.style.fontSize;
      text.style.fontSize = "100px"; // fixed reference size
      const natural = text.scrollWidth; // real width at 100px
      text.style.fontSize = prevFontSize;

      if (natural > 0) setFontSize((available / natural) * 100);
    };

    // Debounced resize handler (100ms)
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(fit, 100);
    };

    // measure only after the real font has loaded, not the fallback
    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(fit);
    } else {
      fit();
    }

    const observer = new ResizeObserver(handleResize);
    observer.observe(container);
    return () => {
      observer.disconnect();
      clearTimeout(resizeTimeout);
    };
  }, [paddingPx]);

  return { containerRef, textRef, fontSize };
}
