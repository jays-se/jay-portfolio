import { ArrowRight } from "lucide-react"

import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { Reveal } from "@/features/freelance/reveal"

const services = [
  {
    title: "Business Websites",
    description:
      "Marketing websites and business platforms designed around the actual business requirements.",
  },
  {
    title: "Dashboards",
    description:
      "Data-heavy dashboards, reporting interfaces and internal business tools.",
  },
  {
    title: "SaaS Applications",
    description:
      "Customer-facing products with authentication, workflows, data management and scalable application architecture.",
  },
  {
    title: "Internal Tools",
    description:
      "Custom applications that replace spreadsheets and manual workflows.",
  },
  {
    title: "Admin Platforms",
    description:
      "Management interfaces for content, users, operations and business data.",
  },
  {
    title: "Custom Web Applications",
    description:
      "Purpose-built web applications designed around a specific business process.",
  },
] as const

const sectionSpacing = "py-14 sm:py-20"

export function FreelanceServices() {
  return (
    <Section
      id="services"
      aria-labelledby="services-heading"
      className={sectionSpacing}
    >
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-[0.18em] text-primary uppercase">
              Services
            </p>
            <h2
              id="services-heading"
              className="font-heading mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              What I Build
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              I build custom web applications where off-the-shelf tools aren&apos;t
              enough — from business websites and internal tools to dashboards and
              complete product applications.
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={80} className="mt-8 sm:mt-10">
          <ul className="grid gap-0 border-t border-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li
                key={service.title}
                className="group border-border border-b py-7 transition-colors duration-200 hover:bg-muted/40 motion-reduce:transition-none sm:border-r sm:px-6 sm:max-lg:[&:nth-child(odd)]:pl-0 sm:max-lg:[&:nth-child(even)]:border-r-0 sm:max-lg:[&:nth-child(even)]:pr-0 lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n)]:pr-0 lg:[&:nth-child(3n+1)]:pl-0"
              >
                <h3 className="font-heading flex items-center gap-2 text-xl font-semibold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary motion-reduce:transition-none">
                  <span>{service.title}</span>
                  <ArrowRight
                    aria-hidden
                    className="size-4 shrink-0 text-primary opacity-0 transition-[opacity,transform] duration-200 -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100 motion-reduce:transition-none motion-reduce:group-hover:opacity-100"
                  />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  )
}
