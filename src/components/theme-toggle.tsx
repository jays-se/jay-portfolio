"use client"

import { useEffect, useState, useSyncExternalStore } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ThemeMode = "light" | "dark"

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
    aria: "Theme: Dark. Switch to light theme",
    title: "Dark — click for Light",
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
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [iconAnim, setIconAnim] = useState<"to-light" | "to-dark" | null>(null)
  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot
  )

  useEffect(() => {
    if (theme === "system") {
      setTheme(resolvedTheme === "dark" ? "dark" : "light")
    }
  }, [theme, resolvedTheme, setTheme])

  const current: ThemeMode = resolvedTheme === "dark" ? "dark" : "light"
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
      onClick={() => {
        setIconAnim(meta.next === "dark" ? "to-dark" : "to-light")
        setTheme(meta.next)
      }}
    >
      <span
        key={current}
        className={cn(
          "theme-toggle-icon inline-flex",
          iconAnim === "to-dark" && "theme-toggle-icon-to-dark",
          iconAnim === "to-light" && "theme-toggle-icon-to-light"
        )}
        aria-hidden
      >
        {current === "light" ? (
          <Sun className="size-4" />
        ) : (
          <Moon className="size-4" />
        )}
      </span>
      {showLabel ? <span className="capitalize">{current}</span> : null}
    </Button>
  )
}
