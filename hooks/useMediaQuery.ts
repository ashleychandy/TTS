/**
 * Custom hook for responsive media queries
 * Returns true if the media query matches
 * 
 * @param query - CSS media query string
 * @returns Boolean indicating if query matches
 */

import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    // Set initial value
    setMatches(media.matches);

    // Create listener
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Modern browsers
    if (media.addEventListener) {
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    }
    
    // Fallback for older browsers
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [query]);

  return matches;
}

// Re-export for convenience
export { MEDIA_QUERIES as BREAKPOINTS } from "@/lib/constants";
