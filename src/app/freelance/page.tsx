import type { Metadata } from "next"

import { Engagement } from "@/features/freelance/engagement"
import { Engineering } from "@/features/freelance/engineering"
import { FreelanceContact } from "@/features/freelance/freelance-contact"
import { FreelanceHero } from "@/features/freelance/freelance-hero"
import { FreelanceServices } from "@/features/freelance/services"
import { SelectedWork } from "@/features/freelance/selected-work"
import { WhyWorkWithMe } from "@/features/freelance/why-work-with-me"

export const metadata: Metadata = {
  title: "End-to-End Web Development — Jay Shrivastava",
  description:
    "Production-ready websites and web applications built from requirements through deployment.",
  openGraph: {
    title: "End-to-End Web Development — Jay Shrivastava",
    description:
      "Production-ready websites and web applications built from requirements through deployment.",
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
