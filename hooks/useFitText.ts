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
      const availableWidth = container.clientWidth - paddingPx * 2;
      const availableHeight = container.clientHeight - paddingPx * 2;
      if (availableWidth <= 0 || availableHeight <= 0) return;

      const prevFontSize = text.style.fontSize;
      text.style.fontSize = "100px";
      const naturalWidth = text.scrollWidth;
      const naturalHeight = text.scrollHeight;
      text.style.fontSize = prevFontSize;

      if (naturalWidth > 0 && naturalHeight > 0) {
        const widthScale = (availableWidth / naturalWidth) * 100;
        const heightScale = (availableHeight / naturalHeight) * 100;
        const scale = Math.min(widthScale, heightScale);
        setFontSize(scale);
      }
    };

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(fit, 100);
    };

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
