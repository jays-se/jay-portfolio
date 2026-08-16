"use client"

import { useEffect } from "react"

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return false

  el.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  })
  return true
}

/**
 * Intercepts same-page hash links so the site controls scroll behavior
 * (smooth when motion is allowed, immediate when reduced motion is on).
 * Relies on CSS `scroll-margin-top` for sticky header offset.
 */
export function SmoothScroll() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const target = event.target
      if (!(target instanceof Element)) return

      const anchor = target.closest("a[href^='#']")
      if (!(anchor instanceof HTMLAnchorElement)) return
      if (anchor.target && anchor.target !== "_self") return

      const href = anchor.getAttribute("href")
      if (!href || href === "#") return

      const id = decodeURIComponent(href.slice(1))
      if (!id || !document.getElementById(id)) return

      event.preventDefault()
      scrollToId(id)

      if (window.history.pushState) {
        window.history.pushState(null, "", href)
      }
    }

    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [])

  return null
}
