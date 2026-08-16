"use client"

import { useEffect, useState } from "react"

/** Observe which section id is most visible in the viewport band under the sticky header. */
export function useActiveSection(sectionIds: readonly string[]) {
  const [activeId, setActiveId] = useState("")
  const key = sectionIds.join("|")

  useEffect(() => {
    const ids = key ? key.split("|") : []
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node))

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        const top = visible[0]?.target.id
        if (top) setActiveId(top)
      },
      { rootMargin: "-28% 0px -55% 0px", threshold: [0.08, 0.2, 0.4, 0.6] }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [key])

  return activeId
}
