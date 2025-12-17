"use client"

import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"

const industries = [
  {
    name: "Yoga & Wellness",
    description:
      "AI automation for yoga studios and retreat centers, including booking workflows, lead follow-ups, and customer communication systems.",
    href: "/industries/yoga-wellness",
    image: "/yoga-wellness-studio-peaceful.jpg",
  },
  {
    name: "Tourism & Hotels",
    description:
      "AI-powered automation for hotels and tourism businesses, streamlining bookings, inquiries, and guest communication.",
    href: "/industries/tourism-hotels",
    image: "/himalayan-hotel-resort-tourism.jpg",
  },
  {
    name: "Education",
    description:
      "Automation systems for educational institutes to manage admissions, communication, and internal workflows efficiently.",
    href: "/industries/education",
    image: "/modern-education-learning-platform.jpg",
  },
  {
    name: "Small Businesses",
    description:
      "Affordable AI automation solutions that help small businesses automate leads, follow-ups, and daily operations.",
    href: "/industries/small-business",
    image: "/small-business-local-shop.jpg",
  },
  {
    name: "Startups",
    description:
      "AI automation for startups to validate ideas faster, automate workflows, and scale operations with minimal overhead.",
    href: "/industries/startups",
    image: "/startup-team-modern-office.jpg",
  },
  {
    name: "Local Services",
    description:
      "Automation workflows for service-based businesses to manage bookings, customer queries, and backend processes.",
    href: "/industries/local-services",
    image: "/professional-service-business.jpg",
  },
]

export function Industries() {
  return (
    <Section className="bg-card">
      <FadeIn>
        <SectionHeader
          eyebrow="Industries We Serve"
          title="AI Automation Use Cases Across Key Industries"
          description="We design industry-specific AI automation systems that streamline workflows, reduce manual work, and improve operational efficiency."
        />
      </FadeIn>
      <p className="sr-only">
  AI automation use cases vary by industry, helping businesses automate bookings,
  customer communication, lead handling, and backend workflows efficiently.
</p>


      <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((industry) => (
          <StaggerItem key={industry.name}>
            <Link
              href={industry.href}
              className="group block overflow-hidden rounded-2xl border border-border bg-background hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={industry.image || "/placeholder.svg"}
                  alt={`${industry.name} AI automation use case`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{industry.name}</h3>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
    
  )
}
