import type { SiteConfig } from "@/types/site"

/**
 * Temporary source of truth for `/freelance` availability messaging.
 * Later this may move to PostgreSQL + admin.
 * Only the exact string `"true"` means available.
 */
export function isFreelanceAvailable(): boolean {
  return process.env.NEXT_PUBLIC_FREELANCE_AVAILABLE === "true"
}

/**
 * Site-wide configuration.
 * Personal and company URLs live only here — do not duplicate elsewhere.
 * `freelance.available` is derived from NEXT_PUBLIC_FREELANCE_AVAILABLE.
 */
export const siteConfig: SiteConfig = {
  name: "Jay Shrivastava",
  url: "https://jayshrivastava.dev",
  contact: {
    email: "jay.shrivastava3126@gmail.com",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/jays-se/",
    github: "https://github.com/jays-se",
    leetcode: null,
  },
  companies: {
    intellicar: {
      name: "Intellicar Telematics Pvt Ltd",
      linkedin: "https://www.linkedin.com/company/intellicar/",
    },
    surya: {
      name: "Surya Financial Technologies Pvt Ltd",
      linkedin: "https://www.linkedin.com/company/suryafintech/",
    },
  },
  freelance: {
    get available() {
      return isFreelanceAvailable()
    },
  },
}
