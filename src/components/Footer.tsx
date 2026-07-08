import { Sparkle, ArrowUpRight } from "./icons";
import { NAV_LINKS, SOCIALS } from "@/lib/data";

const LEGAL = [
  { label: "Privacy Policy", href: "#" },
  { label: "Cookie Policy", href: "#" },
] as const;

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-gradient-to-br from-raw-red via-raw-red to-deep-black text-pure-white md:mt-32">
      <div className="mx-auto max-w-[1800px] px-6 pb-16 pt-16 md:px-10 md:pt-20">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <p className="max-w-sm eyebrow font-medium normal-case leading-relaxed tracking-normal text-pure-white/80">
            We are an independent creative agency based in Europe. We combine
            bold vision with sharp execution and deliver at startup speed.
          </p>
          <Sparkle className="h-8 w-8 text-pure-white/80" />
        </div>

        <div className="mt-16 grid grid-cols-2 gap-10 md:grid-cols-4">
          <div>
            <p className="eyebrow text-pure-white/50">Creative Agency</p>
            <p className="eyebrow mt-2 text-pure-white/50">Based in Europe</p>
            <a
              href="mailto:hello@bureau-studio.com"
              className="mt-6 block text-sm text-pure-white hover:text-pure-white/70"
            >
              hello@bureau-studio.com
            </a>
            <a
              href="tel:+380000000000"
              className="mt-1 block text-sm font-semibold text-pure-white hover:text-pure-white/70"
            >
              +38 000 000 000
            </a>
          </div>

          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="eyebrow text-pure-white/80 hover:text-pure-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <nav className="flex flex-col gap-3">
            {LEGAL.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="eyebrow text-pure-white/80 hover:text-pure-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <nav className="flex flex-col gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="eyebrow inline-flex items-center gap-1 text-pure-white/80 hover:text-pure-white"
              >
                {s.label}
                <ArrowUpRight className="h-3 w-3" />
              </a>
            ))}
          </nav>
        </div>

        <p className="mt-16 eyebrow text-pure-white/40">© 2026 Bureau Creative Agency</p>
      </div>

      <div className="relative select-none px-6 pb-4 md:px-10">
        <span className="font-display block text-[19vw] leading-[0.78] text-pure-white sm:text-[15vw] lg:text-[210px]">
          AGENCY
        </span>
      </div>
    </footer>
  );
}
