import { ImageResponse } from "next/og"

import { seo } from "@/lib/seo"

export const alt = seo.home.title
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: "#f6f7f9",
          color: "#0b0d10",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#1f4b7a",
            fontWeight: 600,
          }}
        >
          Software Engineer
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              maxWidth: 920,
            }}
          >
            Jay Shrivastava
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.35,
              color: "#5c6570",
              maxWidth: 860,
            }}
          >
            Software engineer building production-ready web applications.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#5c6570",
          }}
        >
          <span>React · TypeScript · Web Applications</span>
          <span style={{ color: "#1f4b7a" }}>jay-shrivastava-dev.vercel.app</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
