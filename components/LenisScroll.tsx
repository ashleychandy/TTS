"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

interface LenisScrollProps {
  children: React.ReactNode;
}

export default function LenisScroll({ children }: LenisScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      anchors: true,
      stopInertiaOnNavigate: true,
    });

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
