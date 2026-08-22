"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-bg px-10 py-10 text-center font-sans">
      <div>
        <h2 className="text-[120px] font-black text-primary-red-brand leading-none m-0 mb-6 md:text-7xl sm:text-6xl">
          500
        </h2>
        <h1 className="text-[32px] font-bold m-0 mb-4 text-[#333] md:text-2xl sm:text-xl">
          Something Went Wrong
        </h1>
        <p className="text-base text-[#666] mb-8 max-w-[500px] md:text-sm sm:text-sm">
          We encountered an unexpected error. Our team has been notified and we&apos;re working to
          fix it.
        </p>
        <div className="flex gap-4 justify-center md:flex-col sm:flex-col">
          <button
            onClick={reset}
            className="bg-primary-red-brand text-white border-none px-8 py-3 text-sm cursor-pointer uppercase font-semibold rounded transition-all duration-300 hover:bg-[#8a0011] hover:translate-y-[-2px] md:w-full sm:w-full"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="bg-transparent text-primary-red-brand border-2 border-primary-red-brand px-8 py-3 text-sm cursor-pointer uppercase font-semibold no-underline rounded transition-all duration-300 hover:bg-primary-red-brand hover:text-white hover:translate-y-[-2px] md:w-full sm:w-full inline-flex items-center justify-center"
          >
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
