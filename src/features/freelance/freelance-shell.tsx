"use client"

import { useEffect, useState, type ReactNode } from "react"

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"
import { cn } from "@/lib/utils"

type FreelanceShellProps = {
  children: ReactNode
}

/** Short entry fade for the freelance route — skips when reduced motion is on. */
export function FreelanceShell({ children }: FreelanceShellProps) {
  const reducedMotion = usePrefersReducedMotion()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (reducedMotion) return

    const id = window.requestAnimationFrame(() => setReady(true))
    return () => window.cancelAnimationFrame(id)
  }, [reducedMotion])

  return (
    <div
      className={cn(
        "freelance-page flex min-h-full flex-1 flex-col",
        ready ? "freelance-page-ready" : "freelance-page-enter"
      )}
    >
      {children}
    </div>
  )
}
