"use client"

import { ArrowRight } from "lucide-react"

import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

export function FreelanceHero() {
  const available = siteConfig.freelance.available

  return (
    <section
      id="top"
      aria-labelledby="freelance-hero-heading"
      className="relative overflow-hidden border-b border-border"
    >
      <Container className="relative flex flex-col justify-center py-14 sm:py-20 lg:py-24">
        <div className="freelance-hero-ready max-w-3xl">
          <p className="freelance-hero-item font-mono text-xs tracking-[0.18em] text-primary uppercase">
            End-to-end Web Development
          </p>
          <h1
            id="freelance-hero-heading"
            className="freelance-hero-item font-heading mt-5 text-4xl leading-[1.08] font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Need a web application built?
          </h1>
          <p className="freelance-hero-item mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            I design and build production-ready web applications for businesses
            — from requirements and user experience to frontend, backend,
            database and deployment.
          </p>
          <div className="freelance-hero-item mt-8 flex flex-wrap items-center gap-3 sm:mt-10">
            {available ? (
              <>
                <Button
                  nativeButton={false}
                  render={<a href="#contact" />}
                  size="lg"
                  className="group/cta h-11 gap-2 px-5 text-sm"
                >
                  Start a Project
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
              </>
            ) : (
              <Button
                nativeButton={false}
                render={<a href="#work" />}
                size="lg"
                className="group/cta h-11 gap-2 px-5 text-sm"
              >
                View My Work
                <ArrowRight className="cta-arrow size-4" />
              </Button>
            )}
          </div>
          <p className="freelance-hero-item mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground sm:mt-8">
            <span
              className={cn(
                "size-1.5 rounded-full",
                available
                  ? "freelance-availability-dot bg-success"
                  : "bg-muted-foreground"
              )}
              aria-hidden
            />
            {available
              ? "Currently accepting selected projects"
              : "Currently not accepting new projects"}
          </p>
        </div>
      </Container>
    </section>
  )
}
