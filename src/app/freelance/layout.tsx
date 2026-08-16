import { SiteFooter } from "@/components/site-footer"
import { FreelanceHeader } from "@/features/freelance/freelance-header"
import { FreelanceShell } from "@/features/freelance/freelance-shell"

export default function FreelanceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <FreelanceShell>
      <FreelanceHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter tagline="Full-stack web applications · Idea to production" />
    </FreelanceShell>
  )
}
