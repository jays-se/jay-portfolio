export type NavItem = {
  label: string
  href: string
}

export type CompanyConfig = {
  name: string
  linkedin: string
}

export type SiteConfig = {
  name: string
  url: string
  contact: {
    email: string
  }
  social: {
    linkedin: string
    github: string
    /** Omit from UI until a real URL is provided */
    leetcode: string | null
  }
  companies: {
    intellicar: CompanyConfig
    surya: CompanyConfig
  }
  /** Freelance landing page availability messaging only — does not affect `/` */
  freelance: {
    available: boolean
  }
}
