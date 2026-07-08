export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Selected Work", href: "#work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;

export const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "LinkedIn", href: "https://linkedin.com" },
] as const;

export const SERVICE_PHOTOS = [
  { src: "/images/portrait-1.jpg", alt: "Portrait study, red studio light" },
  { src: "/images/portrait-2.jpg", alt: "Portrait in denim jacket, red backlight" },
  { src: "/images/portrait-3.jpg", alt: "Portrait in orange jacket, red backdrop" },
  { src: "/images/portrait-4.jpg", alt: "Portrait with motion-blur light streaks" },
] as const;

export const WAYS = [
  {
    index: "01",
    title: "Brand Identity",
    body: "Logo, color, typography, tone of voice. Everything that makes a brand recognizable at first glance.",
  },
  {
    index: "02",
    title: "Digital Design",
    body: "Landing pages, websites, UI/UX. Interfaces that convert and leave an impression.",
  },
  {
    index: "03",
    title: "Art Direction",
    body: "From concept to final output. We own the visual idea at every stage of the process.",
  },
  {
    index: "04",
    title: "Creative Studio",
    body: "Campaigns, content, visual systems for social media and beyond.",
  },
] as const;

export const WORKS = [
  {
    title: "Forma — Selected Works",
    category: "Digital Design",
    year: "22–23",
    image: "/images/portrait-1.jpg",
    size: "tall",
  },
  {
    title: "Nocturne Identity",
    category: "Brand Identity",
    year: "22–23",
    image: "/images/portrait-2.jpg",
    size: "short",
  },
  {
    title: "Halo Gallery",
    category: "Digital Design",
    year: "23–24",
    image: "/images/portrait-3.jpg",
    size: "mid",
  },
  {
    title: "Ember Studio",
    category: "Brand Identity",
    year: "24–25",
    image: "/images/fourways-portrait.jpg",
    size: "tall",
  },
  {
    title: "Static Works",
    category: "Digital Design",
    year: "25–26",
    image: "/images/portrait-4.jpg",
    size: "short",
  },
  {
    title: "Marrow Brand",
    category: "Brand Identity",
    year: "25–26",
    image: "/images/testimonial-1.jpg",
    size: "mid",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Working with the team was a turning point. They didn't just redesign our visuals — they helped us understand who we are and how we should be seen. Now our brand actually stands out.",
    name: "Brand Owner",
    role: "Client Review — Case #005",
    image: "/images/testimonial-1.jpg",
  },
  {
    quote:
      "They moved at startup speed without ever feeling rushed. Every decision was intentional, and the final identity was sharper than anything we briefed for.",
    name: "Founder",
    role: "Client Review — Case #004",
    image: "/images/portrait-2.jpg",
  },
  {
    quote:
      "Impossible to ignore was the goal, and that's exactly what we got. The site converts, the brand travels, and people remember us now.",
    name: "Marketing Lead",
    role: "Client Review — Case #003",
    image: "/images/portrait-3.jpg",
  },
] as const;

export const PROCESS_STEPS = [
  {
    index: "01",
    title: "Research",
    body: "Every project starts with deep research — your market, your audience, your competitors. Only then do we pick up the pencil.",
  },
  {
    index: "02",
    title: "Direction",
    body: "We land on one clear visual idea and pressure-test it before a single pixel goes to production.",
  },
  {
    index: "03",
    title: "Build",
    body: "From the first conversation to the final file — we follow a proven process that keeps everything sharp and on time.",
  },
  {
    index: "04",
    title: "Launch",
    body: "We ship, measure, and stay close for the first weeks in market to make sure the work is actually working.",
  },
] as const;
