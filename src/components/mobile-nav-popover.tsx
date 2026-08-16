"use client"

import { useEffect, useId, useRef, type ReactNode, type RefObject } from "react"

import { Container } from "@/components/container"

type MobileNavPopoverProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  /** Keep the toggle button from counting as an outside click */
  triggerRef: RefObject<HTMLElement | null>
  id?: string
  children: ReactNode
}

/**
 * Absolute popover anchored under the sticky header — does not affect page layout.
 */
export function MobileNavPopover({
  open,
  onOpenChange,
  triggerRef,
  id,
  children,
}: MobileNavPopoverProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const autoId = useId()
  const panelId = id ?? autoId

  useEffect(() => {
    if (!open) return

    function onPointerDown(event: PointerEvent) {
      const target = event.target
      if (!(target instanceof Node)) return
      if (panelRef.current?.contains(target)) return
      if (triggerRef.current?.contains(target)) return
      onOpenChange(false)
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onOpenChange(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener("pointerdown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [open, onOpenChange, triggerRef])

  if (!open) return null

  return (
    <div
      id={panelId}
      ref={panelRef}
      role="navigation"
      aria-label="Mobile"
      className="mobile-nav-popover absolute inset-x-0 top-full z-50 pt-2 lg:hidden"
    >
      <Container>
        <div className="rounded-lg border border-border bg-background py-2 shadow-sm dark:bg-card">
          {children}
        </div>
      </Container>
    </div>
  )
}
