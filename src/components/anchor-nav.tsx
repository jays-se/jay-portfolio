import { cn } from "@/lib/utils"

export type AnchorNavItem = {
  label: string
  href: string
}

type AnchorNavProps = {
  items: readonly AnchorNavItem[]
  activeId?: string
  onNavigate?: () => void
  className?: string
  /** Freelance uses a stronger primary accent for active state */
  accent?: "subtle" | "primary"
}

function hrefToId(href: string) {
  return href.startsWith("#") ? href.slice(1) : href
}

export function AnchorNav({
  items,
  activeId = "",
  onNavigate,
  className,
  accent = "subtle",
}: AnchorNavProps) {
  return (
    <nav className={className} aria-label="Primary">
      {items.map((item) => {
        const id = hrefToId(item.href)
        const active = activeId === id

        return (
          <a
            key={item.href}
            href={item.href}
            aria-current={active ? "true" : undefined}
            onClick={onNavigate}
            className={cn(
              "relative rounded-md px-3.5 py-2 text-sm transition-colors duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
              active
                ? accent === "primary"
                  ? "font-medium text-primary"
                  : "font-medium text-foreground after:absolute after:inset-x-3 after:bottom-1 after:h-px after:bg-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {item.label}
          </a>
        )
      })}
    </nav>
  )
}
