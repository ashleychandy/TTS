import Link from "next/link";
import { Sparkle, ArrowUpRight } from "@/components/icons";
import { SOCIALS } from "@/lib/data";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-deep-black text-pure-white">
      <div className="flex items-center justify-between px-6 py-8 md:px-10">
        <Link href="/" className="font-display flex items-center gap-2 text-base">
          <Sparkle className="h-3.5 w-3.5" />
          BUREAU
        </Link>
        <span className="eyebrow hidden text-right text-pure-white/50 sm:block">
          Based in Europe
          <br />
          Working Worldwide
        </span>
      </div>

      <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-16 text-center">
        <span
          aria-hidden="true"
          className="font-display pointer-events-none absolute select-none text-[52vw] leading-none text-heat-red/90 sm:text-[38vw] lg:text-[440px]"
        >
          404
        </span>

        <div className="relative">
          <p className="eyebrow text-pure-white/60">404</p>
          <h1 className="font-display mt-2 text-2xl sm:text-3xl">Error Page</h1>
          <Link
            href="/"
            className="eyebrow mt-8 inline-flex items-center gap-1.5 rounded-full bg-heat-red px-6 py-3 text-pure-white transition-colors hover:bg-raw-red"
          >
            Go Back
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-between px-6 py-8 eyebrow text-pure-white/40 md:px-10">
        <span>© 2026 Creative Agency</span>
        <div className="hidden gap-4 sm:flex">
          {SOCIALS.map((s) => (
            <a key={s.label} href={s.href} className="hover:text-pure-white">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
