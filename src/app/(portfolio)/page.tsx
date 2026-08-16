import { About } from "@/features/about/about"
import { Contact } from "@/features/contact/contact"
import { Experience } from "@/features/experience/experience"
import { Hero } from "@/features/hero/hero"
import { Skills } from "@/features/skills/skills"
import { Work } from "@/features/work/work"

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <About />
      <Work />
      <Skills />
      <Contact />
    </>
  )
}
