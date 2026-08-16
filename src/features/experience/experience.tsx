import { Fragment } from "react"

import { Container } from "@/components/container"
import { ExternalTextLink } from "@/components/external-text-link"
import { Section } from "@/components/section"
import {
  careerProgression,
  experience,
  getCompany,
  type ExperienceCompany,
  type ExperienceRole,
} from "@/data/experience"
import { cn } from "@/lib/utils"

const METRIC_PATTERN = /(\d+%)/g

function HighlightText({ text }: { text: string }) {
  const parts = text.split(METRIC_PATTERN)

  return (
    <>
      {parts.map((part, index) =>
        /^\d+%$/.test(part) ? (
          <span
            key={`${part}-${index}`}
            className="font-medium text-primary tabular-nums"
          >
            {part}
          </span>
        ) : (
          <Fragment key={`${part}-${index}`}>{part}</Fragment>
        )
      )}
    </>
  )
}

function RoleBlock({
  role,
  companyCurrent,
}: {
  role: ExperienceRole
  companyCurrent?: boolean
}) {
  const isPrimary = role.prominence !== "secondary"
  const isCurrent = Boolean(role.current || companyCurrent)

  return (
    <div
      className={cn(
        "relative",
        !isPrimary && "border-border/80 border-l-2 pl-5 sm:pl-6"
      )}
    >
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h4
          className={cn(
            "font-heading tracking-tight text-foreground",
            isCurrent || isPrimary
              ? "text-xl font-semibold sm:text-2xl"
              : "text-lg font-medium text-foreground/90 sm:text-xl"
          )}
        >
          {role.title}
        </h4>
        <p className="shrink-0 font-mono text-xs tracking-wide text-muted-foreground uppercase">
          {role.start} — {role.end}
        </p>
      </div>

      {role.product ? (
        <p className="mt-2 font-mono text-sm text-muted-foreground">
          Product · {role.product}
        </p>
      ) : null}

      {role.summary ? (
        <p
          className={cn(
            "mt-4 max-w-2xl leading-relaxed text-muted-foreground",
            isCurrent ? "text-base sm:text-lg" : "text-base"
          )}
        >
          {role.summary}
        </p>
      ) : null}

      {role.highlights.length > 0 ? (
        <ul className="mt-5 max-w-2xl space-y-3">
          {role.highlights.map((item) => (
            <li
              key={item}
              className={cn(
                "relative pl-4 leading-relaxed text-foreground/85 before:absolute before:top-[0.55em] before:left-0 before:size-1 before:rounded-full before:bg-primary/70",
                isPrimary
                  ? "text-sm sm:text-[0.9375rem]"
                  : "text-sm text-foreground/75"
              )}
            >
              <HighlightText text={item} />
            </li>
          ))}
        </ul>
      ) : null}

      {role.technologies.length > 0 ? (
        <ul
          className="mt-6 flex flex-wrap gap-2"
          aria-label={`${role.title} technologies`}
        >
          {role.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono text-xs text-foreground/80"
            >
              {tech}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

function CompanyArticle({ entry }: { entry: ExperienceCompany }) {
  const company = getCompany(entry)
  const spanStart = entry.roles[entry.roles.length - 1]?.start
  const spanEnd = entry.roles[0]?.end
  const period =
    spanStart && spanEnd ? `${spanStart} — ${spanEnd}` : spanEnd || spanStart

  return (
    <article className="border-border border-b py-10 last:border-b-0 last:pb-0 first:pt-0 sm:py-12">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
        <div className="lg:w-56 lg:shrink-0">
          {period ? (
            <p className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
              {period}
            </p>
          ) : null}
          {entry.current ? (
            <p className="mt-2 inline-flex items-center gap-2 font-mono text-xs font-medium tracking-wide text-primary uppercase">
              <span className="size-1.5 rounded-full bg-primary" aria-hidden />
              Current role
            </p>
          ) : null}
          {entry.location ? (
            <p className="mt-3 text-sm text-muted-foreground">{entry.location}</p>
          ) : null}
          {entry.employment ? (
            <p className="mt-1 text-sm text-muted-foreground">
              {entry.employment}
            </p>
          ) : null}
        </div>

        <div className="min-w-0 flex-1">
          <header className="mb-8">
            <h3
              className={cn(
                "font-heading tracking-tight text-foreground",
                entry.current
                  ? "text-2xl font-semibold sm:text-3xl"
                  : "text-xl font-semibold sm:text-2xl"
              )}
            >
              <ExternalTextLink
                href={company.linkedin}
                aria-label={`View ${company.name} on LinkedIn`}
              >
                {company.name}
              </ExternalTextLink>
            </h3>
          </header>

          <div className="space-y-10">
            {entry.roles.map((role, index) => (
              <div key={role.id}>
                <RoleBlock role={role} companyCurrent={entry.current} />
                {index < entry.roles.length - 1 ? (
                  <div
                    className="mt-8 flex items-center gap-3 text-muted-foreground"
                    aria-hidden
                  >
                    <span className="bg-border h-px flex-1" />
                    <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase">
                      Earlier
                    </span>
                    <span className="bg-border h-px flex-1" />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

function CareerProgression() {
  return (
    <ol className="mt-8 flex flex-col gap-2 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-2">
      {careerProgression.map((step, index) => (
        <li key={step} className="flex items-center gap-3 sm:gap-3">
          <span
            className={cn(
              "font-mono text-xs tracking-wide sm:text-[0.7rem]",
              index === careerProgression.length - 1
                ? "font-medium text-primary"
                : "text-muted-foreground"
            )}
          >
            {step}
          </span>
          {index < careerProgression.length - 1 ? (
            <span
              className="text-muted-foreground/70 hidden font-mono text-xs sm:inline"
              aria-hidden
            >
              →
            </span>
          ) : null}
          {index < careerProgression.length - 1 ? (
            <span
              className="text-muted-foreground/70 font-mono text-xs sm:hidden"
              aria-hidden
            >
              ↓
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  )
}

export function Experience() {
  return (
    <Section id="experience" aria-labelledby="experience-heading">
      <Container>
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Experience
          </p>
          <h2
            id="experience-heading"
            className="font-heading mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Professional experience
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Engineering impact across production frontend systems — currently
            focused on data-intensive fleet-management platforms.
          </p>
          <CareerProgression />
        </div>

        <div className="mt-10 border-t border-border pt-9 sm:mt-12 sm:pt-11">
          {experience.map((entry) => (
            <CompanyArticle key={entry.id} entry={entry} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
