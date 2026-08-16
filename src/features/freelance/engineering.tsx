import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { Reveal } from "@/features/freelance/reveal"

const groups = [
  {
    title: "Frontend",
    items: "React · Next.js · TypeScript",
  },
  {
    title: "Backend",
    items: "Node.js · APIs · Authentication · Business Logic",
  },
  {
    title: "Database",
    items: "PostgreSQL · Relational Data Modeling",
  },
  {
    title: "Infrastructure",
    items: "Deployment · Domains · Environment Configuration · CI/CD",
  },
  {
    title: "Quality",
    items: "Testing · Accessibility · Performance",
  },
] as const

export function Engineering() {
  return (
    <Section
      id="technology"
      aria-labelledby="engineering-heading"
      className="py-14 sm:py-20"
    >
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
              Technology
            </p>
            <h2
              id="engineering-heading"
              className="font-heading mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Built With Modern Engineering Practices
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              The stack I use to design, build and ship freelance web products —
              chosen for clarity, maintainability and production readiness. My
              professional foundation is frontend and product engineering; for
              freelance work I take ownership across the full application.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <ul className="mt-8 space-y-0 border-t border-border sm:mt-10">
            {groups.map((group) => (
              <li
                key={group.title}
                className="grid gap-2 border-border border-b py-5 sm:grid-cols-[12rem_minmax(0,1fr)] sm:items-baseline sm:gap-8"
              >
                <h3 className="font-heading text-base font-semibold tracking-tight text-foreground">
                  {group.title}
                </h3>
                <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                  {group.items}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  )
}
