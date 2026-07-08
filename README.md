# Bureau — Raw Creative Agency

A Next.js (App Router) rebuild of the Bureau creative-agency landing page
design, including the 404 page. Built with TypeScript, Tailwind CSS v4, and
self-hosted fonts (no external font CDN calls at build or runtime).

## Stack

- **Next.js 16** (App Router, React 19)
- **Tailwind CSS v4** (CSS-first `@theme` config, see `src/app/globals.css`)
- **@fontsource/archivo** — self-hosted display typeface (stands in for the
  original Benzin display face used in the source design)
- All icons are small inline SVGs in `src/components/icons.tsx` to keep the
  bundle lean

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Structure

```
src/
  app/
    layout.tsx        Root layout, font + metadata
    page.tsx           Composes all homepage sections
    not-found.tsx       Custom 404 page
    globals.css         Design tokens (colors, type, motion)
  components/
    Header.tsx           Sticky nav + full-screen mobile menu
    Hero.tsx              Full-bleed portrait hero, oversized wordmark
    AboutIntro.tsx         Statement + 4-photo strip
    FourWays.tsx            Numbered services list on portrait bg
    SelectedWork.tsx         Masonry-style project grid
    Philosophy.tsx            Manifesto statement section
    Process.tsx                Big wordmark + numbered process steps
    Testimonials.tsx            Client-side quote carousel
    CTA.tsx                      Closing call to action
    Footer.tsx                     Nav columns + giant wordmark
    Reveal.tsx                     IntersectionObserver scroll-reveal
    icons.tsx                       Sparkle / star / arrow SVGs
  lib/
    data.ts        All copy/content lives here — nav links, services,
                     work items, testimonials, process steps
public/images/    Local JPGs used across the site
```

## Design tokens

Defined in `src/app/globals.css` under `@theme inline`:

| Token | Hex |
|---|---|
| `raw-red` | `#8F151B` |
| `heat-red` | `#CC0921` |
| `deep-black` | `#252525` |
| `pure-white` | `#FFFFFF` |
| `cold-grey` | `#686868` |

Used as Tailwind utilities directly, e.g. `bg-raw-red`, `text-heat-red`.

## Content

All copy lives in `src/lib/data.ts` — swap nav labels, service descriptions,
work items, and testimonials there without touching component markup.

## Images

`public/images/` contains placeholder studio photography adapted from the
original reference design. Swap in your own licensed photography before
shipping to production — filenames are referenced directly in `data.ts` and
each component, so a same-name replacement is a drop-in swap.

## Notes on fonts

The original reference used **Benzin** (display) and **Helvetica Neue**
(body). Benzin isn't freely licensable for web self-hosting, so this build
uses **Archivo** (800/900 weight) as a close-in-spirit bold grotesque
stand-in, self-hosted via `@fontsource/archivo`. Body copy uses a system
font stack (`Helvetica Neue, Helvetica, Arial, sans-serif`) which resolves
to real Helvetica Neue on macOS/iOS and a clean fallback elsewhere. If you
own a Benzin/Helvetica Neue web license, drop the `.woff2` files into
`public/fonts/` and wire them up with `@font-face` in `globals.css`.
