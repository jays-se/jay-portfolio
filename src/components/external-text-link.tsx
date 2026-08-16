"use client"

import type { ReactNode } from "react"
import { ExternalLink } from "lucide-react"

import {
  trackEvent,
  type AnalyticsEventName,
} from "@/lib/analytics"
import { cn } from "@/lib/utils"

type ExternalTextLinkProps = {
  href: string
  children: ReactNode
  "aria-label": string
  className?: string
  showIcon?: boolean
  /** Optional conversion event — no PII should be attached */
  analyticsEvent?: AnalyticsEventName
  analyticsProps?: Record<string, string | number | boolean | null>
}

export function ExternalTextLink({
  href,
  children,
  "aria-label": ariaLabel,
  className,
  showIcon = true,
  analyticsEvent,
  analyticsProps,
}: ExternalTextLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={cn(
        "group/link inline-flex items-center gap-1.5 rounded-sm transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
        className
      )}
      onClick={
        analyticsEvent
          ? () => trackEvent(analyticsEvent, analyticsProps)
          : undefined
      }
    >
      <span>{children}</span>
      {showIcon ? (
        <ExternalLink
          aria-hidden
          className="size-3.5 shrink-0 opacity-0 transition-opacity group-hover/link:opacity-70 group-focus-visible/link:opacity-70"
        />
      ) : null}
    </a>
  )
}
