export type WorkOutcome = {
  label: string
  value: string
}

export type WorkScreenshot = {
  src: string
  alt: string
  width?: number
  height?: number
}

/**
 * Case-study model shaped for current editorial presentation and future
 * freelance projects (client/problem, solution, architecture, screenshots, URLs).
 * Optional fields are omitted from the UI until populated.
 */
export type WorkCaseStudy = {
  id: string
  index: string
  title: string
  category: string
  description: string
  highlights: string[]
  technologies: string[]
  /** Secondary stack (e.g. mobile extension) — rendered with less emphasis */
  secondaryTechnologies?: string[]
  /** Secondary product surface note, not a separate case study */
  productExtension?: string
  outcomes?: WorkOutcome[]
  /** Visual weight: featured is the primary case study */
  prominence: "featured" | "standard" | "supporting"
  status?: "current" | "completed" | "personal"
  overview?: string
  client?: string
  problem?: string
  solution?: string
  architecture?: string
  keyFeatures?: string[]
  screenshots?: WorkScreenshot[]
  liveUrl?: string
  githubUrl?: string
}

export const work: WorkCaseStudy[] = [
  {
    id: "opsrisk",
    index: "01",
    title: "OPSRISK Management System",
    category: "Enterprise Operational Risk Platform",
    description:
      "An enterprise operational-risk platform where I worked on frontend architecture, scalable UI systems and data-heavy product workflows using React and TypeScript.",
    highlights: [
      "Configuration-driven UI framework",
      "Internal component library and design system",
      "GraphQL data fetching",
      "Complex enterprise workflows",
      "Performance optimization",
    ],
    technologies: [
      "React",
      "TypeScript",
      "GraphQL",
      "Design Systems",
      "Fluent UI",
      "Mantine",
    ],
    outcomes: [
      {
        value: "40%",
        label: "less effort for new modules",
      },
      {
        value: "30%",
        label: "improvement in page-load performance",
      },
    ],
    prominence: "featured",
    status: "completed",
  },
  {
    id: "fleet-management-system",
    index: "02",
    title: "Fleet Management System",
    category: "Fleet Management Platform · Web Application",
    description:
      "Building and evolving a fleet-management platform for managing vehicle data, fleet operations, and real-time operational workflows.",
    highlights: [
      "Frontend architecture for a complex fleet-management web platform",
      "Data-intensive interfaces for live vehicle and operational data",
      "Reusable UI components and frontend patterns",
      "State management, data fetching, navigation and performance",
      "Collaboration with product, design and backend to turn complex fleet requirements into usable interfaces",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Frontend Architecture",
      "State Management",
      "Data Fetching",
      "Performance",
    ],
    secondaryTechnologies: ["React Native", "Expo"],
    productExtension:
      "Product extension: Contributed to the mobile application for the same fleet-management platform using React Native and Expo.",
    prominence: "standard",
    status: "current",
  },
  {
    id: "personal-portfolio",
    index: "03",
    title: "Personal Portfolio",
    category: "Personal Product",
    description:
      "This portfolio itself is an evolving product focused on presenting engineering work and supporting selective freelance opportunities.",
    highlights: [
      "Next.js + TypeScript",
      "Light/dark theme system",
      "Responsive editorial UI",
      "SEO and accessibility",
      "Freelance availability mode",
      "Planned content management and full-stack capabilities",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    prominence: "supporting",
    status: "personal",
  },
]
