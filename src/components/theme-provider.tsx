"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

/**
 * next-themes injects an inline script to prevent theme flash. React 19 warns
 * about <script> inside components; the SSR script still runs correctly.
 * Filter that known false-positive in development.
 */
if (typeof window !== "undefined") {
  const originalError = console.error
  console.error = (...args: unknown[]) => {
    const [first] = args
    if (
      typeof first === "string" &&
      first.includes("Encountered a script tag")
    ) {
      return
    }
    originalError.apply(console, args)
  }
}

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
