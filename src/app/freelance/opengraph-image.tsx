import { ImageResponse } from "next/og"

import { seo } from "@/lib/seo"

export const alt = seo.freelance.title
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function FreelanceOpenGraphImage() {
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
          Full-Stack Web Development
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.08,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              maxWidth: 960,
            }}
          >
            Production-ready web applications
          </div>
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.35,
              color: "#5c6570",
              maxWidth: 860,
            }}
          >
            Built from requirements through deployment.
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
          <span>Jay Shrivastava</span>
          <span style={{ color: "#1f4b7a" }}>jay-shrivastava-dev.app/freelance</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
