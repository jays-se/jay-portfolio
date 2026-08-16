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
      "Software engineer building production-ready web applications with React, TypeScript and modern web technologies.",
    ogDescription:
      "Software engineer building production-ready web applications.",
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
