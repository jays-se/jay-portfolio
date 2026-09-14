import { siteUrl as productionSiteUrl } from "@/lib/site-url"

/**
 * Production SEO helpers.
 * Canonical host only — never preview/deployment URLs.
 * Base URL is always without a trailing slash (see `@/lib/site-url`).
 */
export const siteUrl = productionSiteUrl

export const seo = {
  home: {
    title: "Jay Shrivastava — Software Engineer",
    description:
      "Software engineer specializing in complex product UI, frontend architecture, state management, and data-heavy views with React, TypeScript, and modern web technologies.",
    ogDescription:
      "Complex product UI, architecture, and data-heavy interfaces — React, TypeScript, design systems.",
    keywords: [
      "Jay Shrivastava",
      "Software Engineer",
      "Frontend Engineer",
      "React",
      "TypeScript",
      "Next.js",
      "product UI",
      "frontend architecture",
      "state management",
      "design systems",
      "data-heavy interfaces",
    ],
    path: "/",
  },
  freelance: {
    title: "Full-Stack Web Development — Jay Shrivastava",
    description:
      "Production-ready websites and web applications built from requirements through deployment.",
    ogDescription:
      "Production-ready web applications built from requirements through deployment.",
    path: "/freelance",
  },
} as const

/**
 * Join the production origin with a path without creating `//` after the host.
 * "/" → https://host/
 * "/freelance" → https://host/freelance
 */
export function absoluteUrl(path = "/"): string {
  const normalized =
    !path || path === "/"
      ? "/"
      : path.startsWith("/")
        ? path
        : `/${path}`

  if (normalized === "/") return `${siteUrl}/`
  return `${siteUrl}${normalized}`
}
