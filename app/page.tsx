import { Hero } from "@/components/home/hero"
import { ServicesOverview } from "@/components/home/services-overview"
import { Industries } from "@/components/home/industries"
import { Process } from "@/components/home/process"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { FeaturedProjects } from "@/components/home/featured-projects"
import { FAQ } from "@/components/home/faq"
import { CTA } from "@/components/home/cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <Industries />
      <Process />
      <FeaturedProjects />
      <FAQ />
      <CTA />
    </>
  )
}
