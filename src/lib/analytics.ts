import { track } from "@vercel/analytics"

/**
 * Named conversion events for freelance + contact CTAs.
 * Do not attach emails, message bodies, or other PII as properties.
 */
export const analyticsEvents = {
  startProject: "start_project",
  startConversation: "start_conversation",
  emailClick: "email_click",
  linkedinClick: "linkedin_click",
  githubClick: "github_click",
} as const

export type AnalyticsEventName =
  (typeof analyticsEvents)[keyof typeof analyticsEvents]

type AnalyticsProperties = Record<string, string | number | boolean | null>

/** Browser-only custom event helper — safe to import from shared modules. */
export function trackEvent(
  event: AnalyticsEventName,
  properties?: AnalyticsProperties
) {
  if (typeof window === "undefined") return
  track(event, properties)
}

export function trackStartProject(location: string) {
  trackEvent(analyticsEvents.startProject, { location })
}

export function trackStartConversation(location: string) {
  trackEvent(analyticsEvents.startConversation, { location })
}

export function trackEmailClick(location: string) {
  trackEvent(analyticsEvents.emailClick, { location })
}

export function trackLinkedinClick(location: string) {
  trackEvent(analyticsEvents.linkedinClick, { location })
}

export function trackGithubClick(location: string) {
  trackEvent(analyticsEvents.githubClick, { location })
}
