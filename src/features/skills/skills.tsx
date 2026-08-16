import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { skills } from "@/data/skills"

export function Skills() {
  return (
    <Section id="skills" aria-labelledby="skills-heading">
      <Container>
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
            {skills.eyebrow}
          </p>
          <h2
            id="skills-heading"
            className="font-heading mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {skills.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {skills.intro}
          </p>
        </div>

        <ul className="mt-10 space-y-0 border-t border-border sm:mt-12">
          {skills.groups.map((group) => (
            <li
              key={group.title}
              className="grid gap-3 border-border border-b py-6 sm:grid-cols-[11rem_minmax(0,1fr)] sm:items-baseline sm:gap-10 sm:py-7"
            >
              <div>
                <h3 className="font-heading text-base font-semibold tracking-tight text-foreground">
                  {group.title}
                </h3>
                {"note" in group && group.note ? (
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:max-w-[10rem]">
                    {group.note}
                  </p>
                ) : null}
              </div>
              <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                {group.items.join(" · ")}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
