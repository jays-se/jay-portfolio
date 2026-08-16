import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { Reveal } from "@/features/freelance/reveal"

const points = [
  {
    title: "Production experience",
    detail: "3+ years building and maintaining production software.",
  },
  {
    title: "Strong frontend foundation",
    detail:
      "Deep experience with React, TypeScript, component architecture and data-heavy interfaces.",
  },
  {
    title: "Product thinking",
    detail:
      "I work beyond individual screens and think about workflows, data, maintainability and the complete user experience.",
  },
  {
    title: "End-to-end ownership",
    detail:
      "For freelance projects, I can take responsibility from requirements through development, deployment and handover.",
  },
] as const

export function WhyWorkWithMe() {
  return (
    <Section
      id="about"
      aria-labelledby="why-heading"
      className="py-14 sm:py-20"
    >
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
              About
            </p>
            <h2
              id="why-heading"
              className="font-heading mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Engineering Experience, Applied to Your Product
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              A strong frontend and product-engineering foundation — with the
              ability to take ownership of the complete application for freelance
              projects.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <ul className="mt-8 grid gap-8 border-t border-border pt-8 sm:mt-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10 sm:pt-10">
            {points.map((point) => (
              <li key={point.title}>
                <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {point.detail}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  )
}
