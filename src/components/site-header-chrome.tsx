"use client"

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

type SiteHeaderChromeProps = {
  children: React.ReactNode
  className?: string
}

/** Shared sticky header shell with subtle scrolled contrast. */
export function SiteHeaderChrome({ children, className }: SiteHeaderChromeProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 6)
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color] duration-200",
        scrolled
          ? "border-border bg-background/95 backdrop-blur-md dark:bg-card/95"
          : "border-border/80 bg-background/90 backdrop-blur-md dark:bg-card dark:backdrop-blur-none",
        className
      )}
    >
      {children}
    </header>
  )
}
