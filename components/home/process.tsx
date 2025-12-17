"use client"

import { Section, SectionHeader } from "@/components/ui/section"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We analyze your business workflows, automation goals, existing systems, and operational challenges in detail.",
  },
  {
    number: "02",
    title: "Automation Strategy",
    description:
      "We create a clear AI automation roadmap defining workflows, integrations, tools like n8n, and success metrics.",
  },
  {
    number: "03",
    title: "System Design",
    description:
      "We design automation logic, data flows, and system architecture to ensure scalability and reliability.",
  },
  {
    number: "04",
    title: "Implementation",
    description:
      "We build AI automation systems using clean workflows, backend integrations, and maintainable architectures.",
  },
  {
    number: "05",
    title: "Testing & Optimization",
    description:
      "Each automation workflow is tested and optimized for accuracy, performance, and real-world edge cases.",
  },
  {
    number: "06",
    title: "Launch & Ongoing Support",
    description:
      "We deploy the automation system and provide continuous monitoring, optimization, and long-term support.",
  },
]

export function Process() {
  return (
    <Section>
      <FadeIn>
        <SectionHeader
          eyebrow="How We Work"
          title="A Proven Process for Delivering AI Automation Systems"
          description="Our structured approach ensures every AI automation solution is scalable, reliable, and aligned with real business workflows."
        />
      </FadeIn>

      {/* AEO BOOST */}
      <p className="sr-only">
        AI automation projects follow a structured process including discovery,
        strategy, system design, implementation, testing, deployment, and ongoing optimization.
      </p>

      <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step) => (
          <StaggerItem key={step.number}>
            <div className="relative">
              <span className="text-6xl font-bold text-primary/10">{step.number}</span>
              <div className="mt-2">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  )
}
