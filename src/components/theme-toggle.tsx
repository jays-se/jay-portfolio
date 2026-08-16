"use client"

import { useSyncExternalStore } from "react"
import { Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const modes = ["light", "dark", "system"] as const

type ThemeMode = (typeof modes)[number]

const labels: Record<
  ThemeMode,
  { aria: string; title: string; next: ThemeMode }
> = {
  light: {
    aria: "Theme: Light. Switch to dark theme",
    title: "Light — click for Dark",
    next: "dark",
  },
  dark: {
    aria: "Theme: Dark. Switch to system theme",
    title: "Dark — click for System",
    next: "system",
  },
  system: {
    aria: "Theme: System. Switch to light theme",
    title: "System — click for Light",
    next: "light",
  },
}

function subscribe() {
  return () => {}
}

function getClientSnapshot() {
  return true
}

function getServerSnapshot() {
  return false
}

type ThemeToggleProps = {
  className?: string
  showLabel?: boolean
}

export function ThemeToggle({ className, showLabel = false }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()
  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot
  )

  const current: ThemeMode = modes.includes(theme as ThemeMode)
    ? (theme as ThemeMode)
    : "system"

  const meta = labels[current]

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size={showLabel ? "sm" : "icon"}
        className={cn(
          showLabel ? "justify-start gap-2 px-3" : undefined,
          className
        )}
        aria-hidden
        disabled
        tabIndex={-1}
      >
        <Sun className="size-4 opacity-0" />
        {showLabel ? <span className="opacity-0">Theme</span> : null}
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size={showLabel ? "sm" : "icon"}
      className={cn(
        "transition-colors duration-200",
        showLabel ? "justify-start gap-2 px-3" : undefined,
        className
      )}
      aria-label={meta.aria}
      title={meta.title}
      onClick={() => setTheme(meta.next)}
    >
      {current === "light" ? (
        <Sun className="size-4" />
      ) : current === "dark" ? (
        <Moon className="size-4" />
      ) : (
        <Monitor className="size-4" />
      )}
      {showLabel ? (
        <span className="capitalize">
          {current === "system" ? "System" : current}
        </span>
      ) : null}
    </Button>
  )
}
