/**
 * StarIcon component - Reusable 4-pointed star SVG
 * 
 * @param className - Optional CSS class name
 * @param fill - Fill color (default: currentColor)
 */

interface StarIconProps {
  className?: string;
  fill?: string;
}

export default function StarIcon({ className, fill = "currentColor" }: StarIconProps) {
  return (
    <svg 
      className={className}
      viewBox="0 0 100 100" 
      width="100%" 
      height="100%"
      aria-hidden="true"
    >
      <path
        d="M 50,0 C 50,35 35,50 0,50 C 35,50 50,65 50,100 C 50,65 65,50 100,50 C 65,50 50,35 50,0 Z"
        fill={fill}
      />
    </svg>
  );
}
