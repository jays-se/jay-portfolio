"use client"

import { useEffect, useRef, useState } from "react"

import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { Reveal } from "@/features/freelance/reveal"
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"
import { cn } from "@/lib/utils"

const stages = [
  {
    title: "Discovery",
    detail: "Understand the business, users and required functionality.",
  },
  {
    title: "Scope",
    detail:
      "Break the project into milestones and clearly define what is included.",
  },
  {
    title: "Design",
    detail: "Define the user experience, interface and technical approach.",
  },
  {
    title: "Build",
    detail: "Develop the frontend, backend, database and integrations.",
  },
  {
    title: "Review",
    detail: "Review completed functionality and make agreed refinements.",
  },
  {
    title: "Launch",
    detail: "Deploy the application and configure the production environment.",
  },
  {
    title: "Handover",
    detail: "Provide source code, documentation and a walkthrough.",
  },
] as const

export function Engagement() {
  const listRef = useRef<HTMLOListElement>(null)
  const reducedMotion = usePrefersReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(1 / stages.length)

  useEffect(() => {
    const list = listRef.current
    if (!list) return

    const items = Array.from(list.querySelectorAll<HTMLElement>("[data-step]"))
    if (items.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        const top = intersecting[0]
        if (!top) return

        const index = Number(top.target.getAttribute("data-step-index") ?? 0)
        setActiveIndex(index)
        setProgress((index + 1) / items.length)
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.2, 0.45, 0.7] }
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  const fill = reducedMotion
    ? (activeIndex + 1) / stages.length
    : progress

  return (
    <Section
      id="process"
      aria-labelledby="process-heading"
      className="py-14 sm:py-20"
    >
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
              Process
            </p>
            <h2
              id="process-heading"
              className="font-heading mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              How We Work Together
            </h2>
          </div>
        </Reveal>

        <Reveal delayMs={80} className="relative mt-8 sm:mt-10">
          <div className="relative">
            <div
              aria-hidden
              className="bg-border absolute top-0 bottom-0 left-[0.7rem] w-px sm:left-[1.05rem]"
            />
            <div
              aria-hidden
              className="bg-primary absolute top-0 left-[0.7rem] h-full w-px origin-top sm:left-[1.05rem]"
              style={{
                transform: `scaleY(${fill})`,
                transition: reducedMotion
                  ? undefined
                  : "transform 300ms ease-out",
              }}
            />

            <ol ref={listRef} className="relative space-y-0">
              {stages.map((stage, index) => {
                const active = index === activeIndex
                const complete = index < activeIndex

                return (
                  <li
                    key={stage.title}
                    data-step
                    data-step-index={index}
                    className="relative grid gap-2 py-5 pl-10 sm:grid-cols-[3rem_10rem_minmax(0,1fr)] sm:items-baseline sm:gap-6 sm:pl-14"
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "absolute top-[1.45rem] left-[0.45rem] size-2.5 rounded-full border-2 border-background transition-colors duration-200 sm:left-[0.8rem] motion-reduce:transition-none",
                        active || complete
                          ? "bg-primary"
                          : "bg-muted-foreground/30"
                      )}
                    />
                    <span
                      className={cn(
                        "font-mono text-xs tracking-wide transition-colors duration-200 motion-reduce:transition-none",
                        active ? "text-primary" : "text-muted-foreground"
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className={cn(
                        "font-heading text-lg tracking-tight transition-colors duration-200 motion-reduce:transition-none",
                        active
                          ? "font-semibold text-primary"
                          : "font-semibold text-foreground/80"
                      )}
                    >
                      {stage.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {stage.detail}
                    </p>
                  </li>
                )
              })}
            </ol>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
