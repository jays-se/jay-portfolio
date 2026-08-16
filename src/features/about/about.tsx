import Image from "next/image"

import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { about } from "@/data/about"

export function About() {
  return (
    <Section id="about" aria-labelledby="about-heading">
      <Container>
        <div className="border-border border-b pb-4">
          <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
            {about.eyebrow}
          </p>
        </div>

        <div className="mt-9 grid gap-10 lg:mt-12 lg:grid-cols-[minmax(0,1.55fr)_minmax(16rem,0.75fr)] lg:items-start lg:gap-14 xl:gap-20">
          <div className="min-w-0 max-w-2xl">
            <h2
              id="about-heading"
              className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {about.heading}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/90 sm:text-xl">
              {about.lead}
            </p>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="flex flex-col gap-8 lg:pt-1">
            <figure className="m-0 w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[320px]">
              <Image
                src="/images/jay-profile.png"
                alt="Jay Shrivastava — Software Engineer"
                width={1254}
                height={1254}
                sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 320px"
                className="border-border aspect-square h-auto w-full rounded-lg border object-cover"
              />
            </figure>

            <div aria-labelledby="about-focus-heading">
              <h3
                id="about-focus-heading"
                className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase"
              >
                {about.focusLabel}
              </h3>
              <ol className="mt-5 space-y-0 border-l border-border">
                {about.themes.map((theme, index) => (
                  <li
                    key={theme}
                    className="relative border-border border-b py-3 pl-5 last:border-b-0"
                  >
                    <span
                      className="bg-primary absolute top-1/2 left-0 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
                      aria-hidden
                    />
                    <span className="font-heading text-base font-medium tracking-tight text-foreground sm:text-lg">
                      {theme}
                    </span>
                    {index < about.themes.length - 1 ? (
                      <span className="sr-only">, then </span>
                    ) : null}
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  )
}
