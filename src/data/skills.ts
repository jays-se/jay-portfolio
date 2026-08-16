export const skills = {
  eyebrow: "Skills",
  heading: "Capabilities by area",
  intro:
    "A practical map of the tools and systems I use day to day — organized by how I apply them, not as a decorative icon wall.",
  groups: [
    {
      title: "Frontend",
      items: ["React", "TypeScript", "Next.js", "Component architecture", "Responsive UI"],
    },
    {
      title: "Architecture",
      items: [
        "Design systems",
        "Configuration-driven UI",
        "State management",
        "Performance",
        "Monorepo patterns",
      ],
    },
    {
      title: "Data & APIs",
      items: ["GraphQL", "REST", "Data-fetching patterns", "Data-heavy interfaces"],
    },
    {
      title: "Testing & Quality",
      items: ["Jest", "React Testing Library", "Accessibility", "Maintainability"],
    },
    {
      title: "Backend",
      note: "Expanding skill area — used for end-to-end freelance ownership, not as a claim of years of professional backend employment.",
      items: ["Node.js", "API design", "Authentication", "Business logic"],
    },
    {
      title: "Tools",
      items: ["Git", "CI/CD", "TypeScript tooling", "Design-system libraries"],
    },
  ],
} as const
