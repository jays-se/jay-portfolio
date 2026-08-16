"use client"

import type { ComponentProps } from "react"

import { Button } from "@/components/ui/button"
import {
  trackEvent,
  type AnalyticsEventName,
} from "@/lib/analytics"

type AnalyticsButtonProps = ComponentProps<typeof Button> & {
  event: AnalyticsEventName
  eventProps?: Record<string, string | number | boolean | null>
}

/** Button wrapper that fires a Vercel Analytics event on click (UI unchanged). */
export function AnalyticsButton({
  event,
  eventProps,
  onClick,
  ...props
}: AnalyticsButtonProps) {
  return (
    <Button
      {...props}
      onClick={(clickEvent) => {
        trackEvent(event, eventProps)
        onClick?.(clickEvent)
      }}
    />
  )
}
