"use client"

import { useCallback, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { AnchorNav } from "@/components/anchor-nav"
import { Container } from "@/components/container"
import { MobileNavPopover } from "@/components/mobile-nav-popover"
import { SiteHeaderChrome } from "@/components/site-header-chrome"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { professional } from "@/data/presentation"
import { useActiveSection } from "@/hooks/use-active-section"
import { siteConfig } from "@/lib/site-config"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const { nav, headerCta } = professional
  const sectionIds = useMemo(
    () => nav.map((item) => item.href.replace("#", "")),
    [nav]
  )
  const activeId = useActiveSection(sectionIds)
  const closeMenu = useCallback(() => setOpen(false), [])

  return (
    <SiteHeaderChrome>
      <Container className="flex h-16 items-center justify-between gap-3 sm:gap-4">
        <a
          href="#top"
          className="font-heading shrink-0 text-lg font-semibold tracking-tight text-foreground transition-colors duration-200 hover:text-primary"
        >
          {siteConfig.name}
        </a>

        <AnchorNav
          items={nav}
          activeId={activeId}
          className="hidden items-center gap-0.5 lg:flex"
        />

        <div className="flex items-center gap-2">
          <Link
            href="/freelance"
            className="hidden rounded-md px-2.5 py-1.5 font-mono text-[0.65rem] tracking-wide text-muted-foreground uppercase transition-colors duration-200 hover:text-foreground sm:inline-flex"
          >
            Freelance
          </Link>
          <ThemeToggle className="hidden md:inline-flex" />
          <Button
            nativeButton={false}
            render={<a href={headerCta.href} />}
            size="sm"
            className="hidden sm:inline-flex"
          >
            {headerCta.label}
          </Button>
          <Button
            ref={triggerRef}
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-haspopup="true"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </Container>

      <MobileNavPopover
        id="mobile-nav"
        open={open}
        onOpenChange={setOpen}
        triggerRef={triggerRef}
      >
        <div className="flex flex-col gap-0.5 px-1.5 py-1">
          <AnchorNav
            items={nav}
            activeId={activeId}
            className="flex flex-col [&_a]:py-2.5"
            onNavigate={closeMenu}
          />
          <Link
            href="/freelance"
            className="rounded-md px-3.5 py-2.5 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
            onClick={closeMenu}
          >
            Freelance
          </Link>
          <div className="mt-1 border-t border-border px-1.5 pt-3 pb-1">
            <ThemeToggle showLabel className="w-full" />
          </div>
        </div>
      </MobileNavPopover>
    </SiteHeaderChrome>
  )
}
