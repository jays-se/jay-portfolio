"use client"

import type { ComponentPropsWithoutRef } from "react"

import {
  trackEvent,
  type AnalyticsEventName,
} from "@/lib/analytics"
import { cn } from "@/lib/utils"

type AnalyticsAnchorProps = ComponentPropsWithoutRef<"a"> & {
  event: AnalyticsEventName
  eventProps?: Record<string, string | number | boolean | null>
}

/** Anchor wrapper that fires a Vercel Analytics event on click (UI unchanged). */
export function AnalyticsAnchor({
  event,
  eventProps,
  onClick,
  className,
  ...props
}: AnalyticsAnchorProps) {
  return (
    <a
      {...props}
      className={cn(className)}
      onClick={(clickEvent) => {
        trackEvent(event, eventProps)
        onClick?.(clickEvent)
      }}
    />
  )
}
