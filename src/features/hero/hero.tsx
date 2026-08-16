import { ArrowRight } from "lucide-react"

import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import { professional } from "@/data/presentation"

export function Hero() {
  const { hero } = professional

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative scroll-mt-20 overflow-hidden border-b border-border sm:scroll-mt-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--hero-glow),transparent_55%)]"
      />
      <Container className="relative flex min-h-[calc(100vh-4rem)] flex-col justify-center py-16 sm:py-24">
        <div className="max-w-3xl animate-fade-up">
          <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
            {hero.eyebrow}
          </p>
          <h1
            id="hero-heading"
            className="font-heading mt-5 text-4xl leading-[1.08] font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {hero.summary}
          </p>
          {hero.focus ? (
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-foreground/80 sm:text-base">
              {hero.focus}
            </p>
          ) : null}
          <div className="mt-9 flex flex-wrap items-center gap-3 sm:mt-10">
            <Button
              nativeButton={false}
              render={<a href={hero.primaryCta.href} />}
              size="lg"
              className="group/cta h-11 gap-2 px-5 text-sm"
            >
              {hero.primaryCta.label}
              <ArrowRight className="cta-arrow size-4" />
            </Button>
            <Button
              nativeButton={false}
              render={<a href={hero.secondaryCta.href} />}
              variant="outline"
              size="lg"
              className="h-11 px-5 text-sm"
            >
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
