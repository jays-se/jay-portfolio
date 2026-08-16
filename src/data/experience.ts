import type { CompanyConfig } from "@/types/site"
import { siteConfig } from "@/lib/site-config"

export type ExperienceRole = {
  id: string
  title: string
  start: string
  end: string
  current?: boolean
  product?: string
  summary?: string
  highlights: string[]
  technologies: string[]
  /** Visual weight within a multi-role company */
  prominence?: "primary" | "secondary"
}

export type ExperienceCompany = {
  id: string
  companyKey: keyof typeof siteConfig.companies
  location?: string
  employment?: string
  current?: boolean
  roles: ExperienceRole[]
}

export function getCompany(entry: ExperienceCompany): CompanyConfig {
  return siteConfig.companies[entry.companyKey]
}

export const experience: ExperienceCompany[] = [
  {
    id: "intellicar",
    companyKey: "intellicar",
    location: "Bengaluru",
    employment: "Full-time · On-site",
    current: true,
    roles: [
      {
        id: "intellicar-sde2",
        title: "Software Development Engineer II",
        start: "June 2026",
        end: "Present",
        current: true,
        product: "Fleet Management System",
        summary:
          "Building and evolving a fleet-management platform, with work spanning the core web experience and its mobile application. Primary focus is the web platform — React, TypeScript, and frontend architecture for data-intensive, real-time operational interfaces.",
        highlights: [
          "Build and evolve the Fleet Management System web platform with React and TypeScript, emphasizing scalable frontend architecture.",
          "Design reusable UI components and frontend patterns for data-intensive interfaces handling live vehicle and operational data.",
          "Contribute to architecture across state management, data fetching, navigation, performance and monorepo development.",
          "Collaborate with product, design and backend teams.",
        ],
        technologies: [
          "React",
          "TypeScript",
          "Frontend architecture",
          "State management",
          "Data fetching",
          "Performance",
          "Monorepo",
        ],
        prominence: "primary",
      },
    ],
  },
  {
    id: "surya",
    companyKey: "surya",
    location: "Bengaluru, India",
    current: false,
    roles: [
      {
        id: "surya-se2",
        title: "Software Engineer II",
        start: "Aug 2024",
        end: "May 2026",
        product: "OPSRISK Management System",
        highlights: [
          "Led frontend architecture and platform development for the OPSRISK Management System, an enterprise operational-risk platform.",
          "Built a configuration-driven UI framework that reduced new-module development effort by 40%.",
          "Architected and maintained an internal UI component library and design system, improving consistency, accessibility and developer productivity.",
          "Refactored legacy components and optimized rendering patterns, improving page-load performance by 30%.",
          "Integrated GraphQL APIs and improved frontend data-fetching efficiency.",
        ],
        technologies: [
          "React",
          "TypeScript",
          "GraphQL",
          "Design Systems",
          "Fluent UI",
          "Mantine",
          "Jest",
          "React Testing Library",
        ],
        prominence: "primary",
      },
      {
        id: "surya-se",
        title: "Software Engineer",
        start: "Jul 2022",
        end: "Aug 2024",
        highlights: [
          "Built scalable React UI modules supporting financial analytics and risk-management workflows.",
          "Developed reusable design-system components used across internal enterprise products.",
          "Migrated Fluent UI from v8 to v9 and Mantine from v4 to v5.",
          "Implemented Jest and React Testing Library testing, increasing test coverage by 30% and reducing post-release defects by 25%.",
        ],
        technologies: [
          "React",
          "TypeScript",
          "REST APIs",
          "Fluent UI",
          "Mantine",
          "Jest",
          "React Testing Library",
        ],
        prominence: "secondary",
      },
    ],
  },
]

export const careerProgression = [
  "Software Engineer",
  "Software Engineer II",
  "Software Development Engineer II · Intellicar",
] as const
