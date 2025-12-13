"use client"

import { Section, SectionHeader } from "@/components/ui/section"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by understanding your business, goals, and challenges through in-depth consultation.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "We create a detailed roadmap with clear milestones, timelines, and technical specifications.",
  },
  {
    number: "03",
    title: "Design",
    description: "Our designers create intuitive, modern interfaces that align with your brand identity.",
  },
  {
    number: "04",
    title: "Development",
    description: "We build your solution using modern technologies with clean, maintainable code.",
  },
  {
    number: "05",
    title: "Testing",
    description: "Rigorous testing ensures your product works flawlessly across all devices and scenarios.",
  },
  {
    number: "06",
    title: "Launch & Support",
    description: "We deploy your solution and provide ongoing maintenance and support.",
  },
]

export function Process() {
  return (
    <Section>
      <FadeIn>
        <SectionHeader
          eyebrow="How We Work"
          title="A systematic approach to building digital excellence"
          description="Our proven process ensures every project is delivered on time and exceeds expectations."
        />
      </FadeIn>

      <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step) => (
          <StaggerItem key={step.number}>
            <div className="relative">
              <span className="text-6xl font-bold text-primary/10">{step.number}</span>
              <div className="mt-2">
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  )
}
