"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Sparkle, ArrowUpRight } from "./icons";
import { NAV_LINKS, SOCIALS } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  const linkColor = menuOpen
    ? "text-pure-white"
    : scrolled
    ? "text-deep-black"
    : "text-pure-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled && !menuOpen ? "bg-pure-white/95 backdrop-blur-sm border-b border-black/5" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1800px] items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="#home"
          className={`flex items-center gap-2 font-display text-lg tracking-wide ${linkColor}`}
        >
          <Sparkle className="h-4 w-4" />
          BUREAU
        </Link>

        <nav className={`hidden items-center gap-8 lg:flex ${linkColor}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="eyebrow opacity-80 transition-opacity hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className={`eyebrow inline-flex items-center gap-1.5 rounded-full border px-5 py-2.5 transition-colors ${
              scrolled
                ? "border-deep-black text-deep-black hover:bg-deep-black hover:text-pure-white"
                : "border-pure-white/70 text-pure-white hover:bg-pure-white hover:text-deep-black"
            }`}
          >
            Let&apos;s Talk
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className={`relative z-[60] flex h-9 w-9 flex-col items-center justify-center gap-[5px] lg:hidden ${linkColor}`}
        >
          <span
            className={`block h-[1.5px] w-6 bg-current transition-transform duration-300 ${
              menuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-current transition-transform duration-300 ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Full-screen mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-deep-black transition-opacity duration-300 lg:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-between px-6 pb-10 pt-28">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display border-b border-white/10 py-4 text-3xl text-pure-white transition-colors hover:text-heat-red"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-between text-pure-white/60">
            <div className="flex gap-4 eyebrow">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} className="hover:text-pure-white">
                  {s.label}
                </a>
              ))}
            </div>
            <span className="eyebrow">EN</span>
          </div>
        </div>
      </div>
    </header>
  );
}
