import { AnalyticsButton } from "@/components/analytics-button"
import { Container } from "@/components/container"
import { ExternalTextLink } from "@/components/external-text-link"
import { Section } from "@/components/section"
import { ContactForm } from "@/features/contact/contact-form"
import { analyticsEvents } from "@/lib/analytics"
import { siteConfig } from "@/lib/site-config"

export function Contact() {
  return (
    <Section id="contact" aria-labelledby="contact-heading">
      <Container>
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="font-heading mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Let’s connect
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Reach out for roles, collaborations, or conversations about
            frontend engineering and product delivery.
          </p>
        </div>

        <div className="mt-9 grid gap-10 border-t border-border pt-9 sm:mt-11 sm:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] sm:gap-12 sm:pt-11">
          <div>
            <h3 className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
              Send a message
            </h3>
            <div className="mt-5">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-8">
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
                  {siteConfig.social.leetcode ? (
                    <ExternalTextLink
                      href={siteConfig.social.leetcode}
                      aria-label="Jay Shrivastava on LeetCode"
                      className="font-medium text-foreground"
                    >
                      LeetCode
                    </ExternalTextLink>
                  ) : null}
                </dd>
              </div>
            </dl>

            <AnalyticsButton
              event={analyticsEvents.resumeDownload}
              eventProps={{ location: "contact" }}
              nativeButton={false}
              render={
                <a
                  href={siteConfig.contact.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              variant="outline"
              size="lg"
              className="h-11 px-5 text-sm"
              aria-label="Download Jay Shrivastava’s resume (PDF)"
            >
              Download Resume
            </AnalyticsButton>
          </div>
        </div>
      </Container>
    </Section>
  )
}
