import type { Metadata } from "next"
import { IBM_Plex_Mono, IBM_Plex_Sans, Syne } from "next/font/google"

import { SmoothScroll } from "@/components/smooth-scroll"
import { ThemeProvider } from "@/components/theme-provider"
import { professional } from "@/data/presentation"
import { siteConfig } from "@/lib/site-config"

import "./globals.css"

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
})

const syne = Syne({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    default: professional.meta.title,
    template: `%s · ${siteConfig.name}`,
  },
  description: professional.meta.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: professional.meta.title,
    description: professional.meta.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: professional.meta.title,
    description: professional.meta.description,
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${syne.variable} ${ibmPlexMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head />
      <body className="flex min-h-full flex-col font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="jay-portfolio-theme"
        >
          <SmoothScroll />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
