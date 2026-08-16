import { Container } from "@/components/container"
import { professional } from "@/data/presentation"
import { siteConfig } from "@/lib/site-config"

type SiteFooterProps = {
  tagline?: string
}

export function SiteFooter({
  tagline = professional.footerTagline,
}: SiteFooterProps) {
  return (
    <footer className="mt-auto border-t border-border py-10">
      <Container className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-heading text-sm font-medium text-foreground">
          {siteConfig.name}
        </p>
        <p className="text-sm text-muted-foreground">{tagline}</p>
      </Container>
    </footer>
  )
}
