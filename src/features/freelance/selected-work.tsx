import { ArrowRight } from "lucide-react"

import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { Reveal } from "@/features/freelance/reveal"
import { cn } from "@/lib/utils"

/**
 * Client-oriented summaries for `/freelance`.
 * Optional future fields can be added without empty UI until populated.
 */
export type FreelanceWorkSummary = {
  id: string
  index: string
  title: string
  category: string
  summary: string
  highlights: string[]
  outcomes?: { value: string; label: string }[]
  extension?: string
  prominence: "featured" | "standard" | "supporting"
  client?: string
  problem?: string
  solution?: string
  features?: string[]
  architecture?: string
  technology?: string[]
  screenshots?: { src: string; alt: string }[]
  results?: string[]
  liveUrl?: string
  githubUrl?: string
}

export const freelanceWork: FreelanceWorkSummary[] = [
  {
    id: "opsrisk",
    index: "01",
    title: "OPSRISK Management System",
    category: "Enterprise Operational Risk Platform",
    summary:
      "A complex enterprise operational-risk platform — focused on frontend architecture for configuration-driven interfaces, design systems and data-heavy workflows.",
    highlights: [
      "Complex enterprise workflows",
      "Configuration-driven UI",
      "Design systems and component architecture",
      "Data-heavy interfaces",
      "Performance optimization",
    ],
    outcomes: [
      {
        value: "40%",
        label: "reduction in new-module development effort",
      },
      {
        value: "30%",
        label: "page-load improvement",
      },
    ],
    prominence: "featured",
  },
  {
    id: "fleet-management-system",
    index: "02",
    title: "Fleet Management System",
    category: "Fleet Management Platform · Web Application",
    summary:
      "A fleet-management platform for vehicle and operational workflows — emphasizing data-intensive interfaces, frontend architecture and responsive web experience.",
    highlights: [
      "Vehicle and fleet operational workflows",
      "Real-time / data-intensive interfaces",
      "Frontend architecture",
      "Responsive web experience",
    ],
    extension:
      "Secondary extension: contributed to the mobile application for the same platform using React Native and Expo.",
    prominence: "standard",
  },
  {
    id: "personal-portfolio",
    index: "03",
    title: "Personal Portfolio",
    category: "Personal Product",
    summary:
      "This site — a production-facing product for engineering presentation and freelance availability.",
    highlights: [
      "Next.js and TypeScript",
      "Responsive editorial UI",
      "SEO and accessibility",
      "Light/dark theme",
      "Configurable freelance availability",
    ],
    prominence: "supporting",
  },
]

export function SelectedWork() {
  return (
    <Section
      id="work"
      aria-labelledby="freelance-work-heading"
      className="py-14 sm:py-20"
    >
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
              Work
            </p>
            <h2
              id="freelance-work-heading"
              className="font-heading mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Selected Work
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Credibility through complexity — systems that show product thinking,
              interface architecture and measurable outcomes.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={80} className="mt-8 border-t border-border sm:mt-10">
          <div>
            {freelanceWork.map((project) => (
              <article
                key={project.id}
                className={cn(
                  "group border-border border-b last:border-b-0 transition-colors duration-200 hover:bg-muted/30 motion-reduce:transition-none",
                  project.prominence === "featured"
                    ? "py-10 sm:py-12"
                    : project.prominence === "supporting"
                      ? "py-7 sm:py-8"
                      : "py-8 sm:py-10"
                )}
              >
                <div className="grid gap-5 lg:grid-cols-[4.5rem_minmax(0,1fr)] lg:gap-8">
                  <p
                    className={cn(
                      "font-mono text-xs tracking-[0.18em] uppercase transition-colors duration-200",
                      "text-muted-foreground group-hover:text-primary motion-reduce:transition-none"
                    )}
                  >
                    {project.index}
                  </p>
                  <div className="min-w-0 max-w-3xl">
                    <p className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                      {project.category}
                    </p>
                    <h3
                      className={cn(
                        "font-heading mt-2 flex items-center gap-2 tracking-tight text-foreground transition-[color,transform] duration-200 group-hover:translate-x-0.5 group-hover:text-primary motion-reduce:transition-none motion-reduce:group-hover:translate-x-0",
                        project.prominence === "featured"
                          ? "text-2xl font-semibold sm:text-3xl"
                          : project.prominence === "supporting"
                            ? "text-xl font-semibold"
                            : "text-2xl font-semibold"
                      )}
                    >
                      <span>{project.title}</span>
                      <ArrowRight
                        aria-hidden
                        className="size-4 shrink-0 opacity-0 transition-[opacity,transform] duration-200 -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100 motion-reduce:transition-none motion-reduce:group-hover:opacity-100"
                      />
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {project.summary}
                    </p>
                    {project.extension ? (
                      <p className="mt-3 border-border border-l-2 pl-4 text-sm leading-relaxed text-muted-foreground">
                        {project.extension}
                      </p>
                    ) : null}
                    <ul className="mt-5 space-y-2">
                      {project.highlights.map((item) => (
                        <li
                          key={item}
                          className="relative pl-4 text-sm leading-relaxed text-foreground/85 before:absolute before:top-[0.55em] before:left-0 before:size-1 before:rounded-full before:bg-primary/70"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    {project.outcomes?.length ? (
                      <dl className="mt-6 flex flex-wrap gap-8">
                        {project.outcomes.map((outcome) => (
                          <div key={outcome.label}>
                            <dt className="font-heading text-2xl font-semibold tracking-tight text-primary tabular-nums">
                              {outcome.value}
                            </dt>
                            <dd className="mt-1 max-w-[14rem] text-sm text-muted-foreground">
                              {outcome.label}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
