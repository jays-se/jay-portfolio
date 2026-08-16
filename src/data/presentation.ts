import type { ModePresentation } from "@/types/presentation"

/** Frozen professional portfolio presentation for `/` */
export const professional: ModePresentation = {
  mode: "professional",
  meta: {
    title: "Jay Shrivastava — Software Engineer",
    description:
      "Software engineer building production-ready web applications with React, TypeScript, and a focus on architecture and complex data-driven experiences.",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Software Engineer",
    headline: "Software engineer building production-ready web applications.",
    summary:
      "I build scalable product interfaces with React and TypeScript, with a focus on architecture, maintainability and complex data-driven experiences.",
    focus: "React · TypeScript · Architecture · Design Systems · Performance",
    primaryCta: { label: "View Work", href: "#work" },
    secondaryCta: { label: "Contact Me", href: "#contact" },
  },
  work: {
    heading: "Selected engineering work",
    intro:
      "Case studies from production systems — architecture, UI platforms, and data-intensive product surfaces. Details stay within what can be shared publicly.",
  },
  footerTagline: "Software Engineer · React · TypeScript · Next.js",
  headerCta: { label: "View Work", href: "#work" },
  showAvailabilityChip: false,
}

export function getPresentation() {
  return professional
}
