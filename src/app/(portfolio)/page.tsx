import { About } from "@/features/about/about"
import { Contact } from "@/features/contact/contact"
import { Experience } from "@/features/experience/experience"
import { Hero } from "@/features/hero/hero"
import { Skills } from "@/features/skills/skills"
import { Work } from "@/features/work/work"
import { JsonLd } from "@/components/json-ld"
import { absoluteUrl, seo } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"

export default function Home() {
  const personId = absoluteUrl("/#person")
  const websiteId = absoluteUrl("/#website")

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": personId,
              name: siteConfig.name,
              jobTitle: "Software Engineer",
              url: absoluteUrl("/"),
              email: `mailto:${siteConfig.contact.email}`,
              sameAs: [siteConfig.social.linkedin, siteConfig.social.github],
            },
            {
              "@type": "WebSite",
              "@id": websiteId,
              name: siteConfig.name,
              url: absoluteUrl("/"),
              description: seo.home.description,
              inLanguage: "en-US",
              publisher: { "@id": personId },
            },
          ],
        }}
      />
      <Hero />
      <Experience />
      <About />
      <Work />
      <Skills />
      <Contact />
    </>
  )
}
