import type { NavItem } from "@/types/site"

export type PresentationMode = "professional" | "freelance"

export type HeroPresentation = {
  eyebrow: string
  headline: string
  summary: string
  focus?: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  availabilityNote?: string
}

export type WorkPresentation = {
  heading: string
  intro: string
}

export type ModePresentation = {
  mode: PresentationMode
  meta: {
    title: string
    description: string
  }
  nav: NavItem[]
  hero: HeroPresentation
  work: WorkPresentation
  footerTagline: string
  /** Header action button */
  headerCta: { label: string; href: string }
  showAvailabilityChip: boolean
}
