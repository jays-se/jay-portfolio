"use client"

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react"

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: ReactNode
  className?: string
  /** Stagger delay in ms when multiple reveals mount near each other */
  delayMs?: number
}

export function Reveal({ children, className, delayMs = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = usePrefersReducedMotion()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (reducedMotion) return

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [reducedMotion])

  return (
    <div
      ref={ref}
      className={cn(
        "freelance-reveal",
        visible && "freelance-reveal-visible",
        className
      )}
      style={
        reducedMotion
          ? undefined
          : ({
              "--freelance-reveal-delay": `${delayMs}ms`,
            } as CSSProperties)
      }
    >
      {children}
    </div>
  )
}
