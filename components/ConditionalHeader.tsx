"use client";

import { usePathname } from "next/navigation";
import FloatingHeader from "@/components/FloatingHeader";

export default function ConditionalHeader() {
  const pathname = usePathname();
  const isProductPage = pathname?.startsWith("/products");

  if (isProductPage) return null;
  
  return <FloatingHeader />;
}
