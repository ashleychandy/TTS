/**
 * Smooth scroll utility functions
 * Provides enhanced smooth scrolling with easing
 */

/**
 * Smooth scroll to element with easing
 * @param elementId - ID of the target element
 * @param offset - Offset from top in pixels (default: 100)
 * @param duration - Animation duration in ms (default: 1000)
 */
export function smoothScrollToElement(
  elementId: string,
  offset: number = 100,
  duration: number = 1000
): void {
  const element = document.getElementById(elementId);
  if (!element) return;

  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  // Easing function (ease-in-out)
  function easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

/**
 * Smooth scroll to top
 * @param duration - Animation duration in ms (default: 800)
 */
export function smoothScrollToTop(duration: number = 800): void {
  const startPosition = window.pageYOffset;
  let startTime: number | null = null;

  function easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startPosition * (1 - ease));

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

/**
 * Check if smooth scroll is supported
 */
export function isSmoothScrollSupported(): boolean {
  return 'scrollBehavior' in document.documentElement.style;
}
