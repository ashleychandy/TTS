type IconProps = {
  className?: string;
};

/** Four-point sparkle mark used as the wordmark glyph + section accents. */
export function Sparkle({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 0C20.7 9.6 21.8 15.2 24.6 18.6 27.5 22 33 23.6 40 24 32.5 24.7 27 26.2 24 29.4 21.1 32.6 20.4 37 20 40 19.6 37 18.9 32.6 16 29.4 13 26.2 7.5 24.7 0 24 7 23.6 12.5 22 15.4 18.6 18.2 15.2 19.3 9.6 20 0Z" />
    </svg>
  );
}

/** Five-point star mark used in the CTA section. */
export function StarMark({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0c.6 4.7 1.5 7.7 3.3 9.5C17.1 11.3 20 12.2 24 12.8c-4 .6-6.9 1.5-8.7 3.3C13.5 17.9 12.6 20.9 12 25c-.6-4.1-1.5-7.1-3.3-8.9C6.9 14.3 4 13.4 0 12.8c4-.6 6.9-1.5 8.7-3.3C10.5 7.7 11.4 4.7 12 0Z" />
    </svg>
  );
}

export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      className={className}
      aria-hidden="true"
    >
      <path d="M4 12L12 4M12 4H5.5M12 4V10.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowLeft({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      className={className}
      aria-hidden="true"
    >
      <path d="M12 8H4M4 8L8 4M4 8L8 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRight({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      className={className}
      aria-hidden="true"
    >
      <path d="M4 8H12M12 8L8 4M12 8L8 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
