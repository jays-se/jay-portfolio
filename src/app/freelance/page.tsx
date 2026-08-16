import type { Metadata } from "next"

import { Engagement } from "@/features/freelance/engagement"
import { Engineering } from "@/features/freelance/engineering"
import { FreelanceContact } from "@/features/freelance/freelance-contact"
import { FreelanceHero } from "@/features/freelance/freelance-hero"
import { FreelanceServices } from "@/features/freelance/services"
import { SelectedWork } from "@/features/freelance/selected-work"
import { WhyWorkWithMe } from "@/features/freelance/why-work-with-me"
import { absoluteUrl, seo } from "@/lib/seo"

export const metadata: Metadata = {
  title: {
    absolute: seo.freelance.title,
  },
  description: seo.freelance.description,
  alternates: {
    canonical: absoluteUrl("/freelance"),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: absoluteUrl("/freelance"),
    title: seo.freelance.title,
    description: seo.freelance.ogDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.freelance.title,
    description: seo.freelance.ogDescription,
  },
}

export default function FreelancePage() {
  return (
    <>
      <FreelanceHero />
      <FreelanceServices />
      <Engagement />
      <Engineering />
      <WhyWorkWithMe />
      <SelectedWork />
      <FreelanceContact />
    </>
  )
}
