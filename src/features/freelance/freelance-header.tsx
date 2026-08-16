"use client"

import { useCallback, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Menu, X } from "lucide-react"

import { AnchorNav } from "@/components/anchor-nav"
import { Container } from "@/components/container"
import { MobileNavPopover } from "@/components/mobile-nav-popover"
import { SiteHeaderChrome } from "@/components/site-header-chrome"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { useActiveSection } from "@/hooks/use-active-section"
import { siteConfig } from "@/lib/site-config"

const nav = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const

const sectionIds = ["services", "process", "work", "about", "contact"] as const

export function FreelanceHeader() {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const available = siteConfig.freelance.available
  const activeId = useActiveSection(sectionIds)
  const closeMenu = useCallback(() => setOpen(false), [])

  return (
    <SiteHeaderChrome>
      <Container className="flex h-16 items-center justify-between gap-3 sm:gap-4">
        <Link
          href="/"
          className="font-heading shrink-0 text-lg font-semibold tracking-tight text-foreground transition-colors duration-200 hover:text-primary"
        >
          {siteConfig.name}
        </Link>

        <AnchorNav
          items={nav}
          activeId={activeId}
          accent="primary"
          className="hidden items-center gap-0.5 lg:flex"
        />

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden md:inline-flex" />
          <Button
            nativeButton={false}
            render={<a href={available ? "#contact" : "#work"} />}
            size="sm"
            className="group/cta hidden gap-1.5 sm:inline-flex"
          >
            {available ? "Start a Project" : "View My Work"}
            <ArrowRight className="cta-arrow size-3.5" />
          </Button>
          <Button
            ref={triggerRef}
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-expanded={open}
            aria-controls="freelance-mobile-nav"
            aria-haspopup="true"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </Container>

      <MobileNavPopover
        id="freelance-mobile-nav"
        open={open}
        onOpenChange={setOpen}
        triggerRef={triggerRef}
      >
        <div className="flex flex-col gap-0.5 px-1.5 py-1">
          <AnchorNav
            items={nav}
            activeId={activeId}
            accent="primary"
            className="flex flex-col [&_a]:py-2.5"
            onNavigate={closeMenu}
          />
          <div className="mt-1 border-t border-border px-1.5 pt-3 pb-1">
            <ThemeToggle showLabel className="w-full" />
          </div>
        </div>
      </MobileNavPopover>
    </SiteHeaderChrome>
  )
}
