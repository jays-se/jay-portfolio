import { ArrowRight } from "lucide-react"

import { Container } from "@/components/container"
import { ExternalTextLink } from "@/components/external-text-link"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/features/freelance/reveal"
import { siteConfig } from "@/lib/site-config"

export function FreelanceContact() {
  return (
    <Section
      id="contact"
      aria-labelledby="freelance-contact-heading"
      className="py-14 sm:py-20"
    >
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
              Contact
            </p>
            <h2
              id="freelance-contact-heading"
              className="font-heading mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Tell me what you&apos;re building.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Share your idea, requirements, timeline, or even a rough description
              of the problem you&apos;re trying to solve. We&apos;ll figure out
              the right next step.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="mt-8 grid gap-8 border-t border-border pt-8 sm:mt-10 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] sm:gap-12 sm:pt-10">
            <dl className="space-y-6">
              <div>
                <dt className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
                  Email
                </dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    aria-label="Email Jay Shrivastava"
                    className="font-heading text-lg font-medium tracking-tight break-all text-foreground transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                  >
                    {siteConfig.contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
                  Profiles
                </dt>
                <dd className="mt-3 flex flex-wrap gap-x-5 gap-y-3">
                  <ExternalTextLink
                    href={siteConfig.social.linkedin}
                    aria-label="Jay Shrivastava on LinkedIn"
                    className="font-medium text-foreground"
                  >
                    LinkedIn
                  </ExternalTextLink>
                  <ExternalTextLink
                    href={siteConfig.social.github}
                    aria-label="Jay Shrivastava on GitHub"
                    className="font-medium text-foreground"
                  >
                    GitHub
                  </ExternalTextLink>
                </dd>
              </div>
            </dl>

            <div className="flex flex-col justify-end gap-3 sm:items-start">
              <Button
                nativeButton={false}
                render={<a href={`mailto:${siteConfig.contact.email}`} />}
                size="lg"
                className="group/cta h-11 gap-2 px-5 text-sm"
                aria-label="Email Jay Shrivastava to start a conversation"
              >
                Start a Conversation
                <ArrowRight className="cta-arrow size-4" />
              </Button>
              <Button
                nativeButton={false}
                render={<a href="#work" />}
                variant="outline"
                size="lg"
                className="h-11 px-5 text-sm"
              >
                View My Work
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
