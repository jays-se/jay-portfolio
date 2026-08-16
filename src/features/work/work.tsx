import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { professional } from "@/data/presentation"
import { work, type WorkCaseStudy } from "@/data/work"
import { cn } from "@/lib/utils"

function statusLabel(status: WorkCaseStudy["status"]) {
  switch (status) {
    case "current":
      return "Current work"
    case "personal":
      return "Personal"
    case "completed":
      return "Case study"
    default:
      return null
  }
}

function CaseStudy({ project }: { project: WorkCaseStudy }) {
  const featured = project.prominence === "featured"
  const supporting = project.prominence === "supporting"
  const label = statusLabel(project.status)

  return (
    <article
      className={cn(
        "border-border border-b last:border-b-0",
        featured ? "py-12 sm:py-16" : supporting ? "py-8 sm:py-10" : "py-10 sm:py-12"
      )}
    >
      <div
        className={cn(
          "grid gap-8",
          featured
            ? "lg:grid-cols-[5rem_minmax(0,1fr)] lg:gap-10"
            : "lg:grid-cols-[5rem_minmax(0,1fr)] lg:gap-8"
        )}
      >
        <p
          className={cn(
            "font-mono tracking-[0.18em] text-muted-foreground uppercase",
            featured ? "text-sm" : "text-xs"
          )}
        >
          {project.index}
        </p>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <p className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
              {project.category}
            </p>
            {label ? (
              <span className="inline-flex items-center gap-2 font-mono text-xs tracking-wide text-primary uppercase">
                <span className="size-1.5 rounded-full bg-primary" aria-hidden />
                {label}
              </span>
            ) : null}
          </div>

          <h3
            className={cn(
              "font-heading mt-3 tracking-tight text-foreground",
              featured
                ? "text-3xl font-semibold sm:text-4xl lg:text-5xl"
                : supporting
                  ? "text-xl font-semibold sm:text-2xl"
                  : "text-2xl font-semibold sm:text-3xl"
            )}
          >
            {project.title}
          </h3>

          <p
            className={cn(
              "mt-5 max-w-3xl leading-relaxed text-muted-foreground",
              featured ? "text-base sm:text-lg" : "text-base"
            )}
          >
            {project.description}
          </p>

          {project.productExtension ? (
            <p className="mt-4 max-w-3xl border-border border-l-2 pl-4 text-sm leading-relaxed text-muted-foreground">
              {project.productExtension}
            </p>
          ) : null}

          <div
            className={cn(
              "mt-8 grid gap-8",
              featured && project.outcomes?.length
                ? "lg:grid-cols-[minmax(0,1.4fr)_minmax(12rem,0.7fr)] lg:gap-12"
                : null
            )}
          >
            <div>
              <h4 className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
                Highlights
              </h4>
              <ul
                className={cn(
                  "mt-4 space-y-2.5",
                  supporting ? "max-w-xl" : "max-w-2xl"
                )}
              >
                {project.highlights.map((item) => (
                  <li
                    key={item}
                    className="relative pl-4 text-sm leading-relaxed text-foreground/85 before:absolute before:top-[0.55em] before:left-0 before:size-1 before:rounded-full before:bg-primary/70 sm:text-[0.9375rem]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {project.outcomes && project.outcomes.length > 0 ? (
              <dl className="space-y-5 border-border border-t pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
                <div className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
                  Outcomes
                </div>
                {project.outcomes.map((outcome) => (
                  <div key={outcome.label}>
                    <dt className="font-heading text-3xl font-semibold tracking-tight text-primary tabular-nums sm:text-4xl">
                      {outcome.value}
                    </dt>
                    <dd className="mt-1 max-w-[16rem] text-sm leading-snug text-muted-foreground">
                      {outcome.label}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </div>

          <div
            className={cn(
              "mt-8 flex flex-col gap-3",
              supporting && "mt-6"
            )}
          >
            <ul
              className="flex flex-wrap gap-2"
              aria-label={`${project.title} technologies`}
            >
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono text-xs text-foreground/80"
                >
                  {tech}
                </li>
              ))}
            </ul>
            {project.secondaryTechnologies &&
            project.secondaryTechnologies.length > 0 ? (
              <ul
                className="flex flex-wrap gap-2"
                aria-label={`${project.title} secondary technologies`}
              >
                {project.secondaryTechnologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-dashed border-border/80 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  )
}

export function Work() {
  const workPresentation = professional.work

  return (
    <Section id="work" aria-labelledby="work-heading">
      <Container>
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Work
          </p>
          <h2
            id="work-heading"
            className="font-heading mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {workPresentation.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {workPresentation.intro}
          </p>
        </div>

        <div className="mt-10 border-t border-border sm:mt-12">
          {work.map((project) => (
            <CaseStudy key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
