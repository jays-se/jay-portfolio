import { Container } from "@/components/container"
import { professional } from "@/data/presentation"
import { siteConfig } from "@/lib/site-config"

type SiteFooterProps = {
  tagline?: string
  aboutThisSite?: string
}

export function SiteFooter({
  tagline = professional.footerTagline,
  aboutThisSite = professional.aboutThisSite,
}: SiteFooterProps) {
  return (
    <footer className="mt-auto border-t border-border py-10">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          <p className="font-heading text-sm font-medium text-foreground">
            {siteConfig.name}
          </p>
          {aboutThisSite ? (
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              {aboutThisSite}
            </p>
          ) : null}
        </div>
        <p className="text-sm text-muted-foreground sm:text-right">{tagline}</p>
      </Container>
    </footer>
  )
}
