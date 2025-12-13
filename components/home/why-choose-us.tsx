"use client"

import { Section, SectionHeader } from "@/components/ui/section"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { Shield, Clock, Users, Award, Headphones, Rocket } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Every project undergoes rigorous testing to ensure flawless performance and security.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect deadlines and deliver projects on schedule without compromising quality.",
  },
  {
    icon: Users,
    title: "Local Expertise",
    description: "We understand the unique needs of businesses in Dehradun and Rishikesh.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "50+ successful projects and counting with 98% client satisfaction rate.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Ongoing maintenance and support to keep your digital solutions running smoothly.",
  },
  {
    icon: Rocket,
    title: "Modern Technology",
    description: "We use the latest technologies to build scalable, future-proof solutions.",
  },
]

export function WhyChooseUs() {
  return (
    <Section className="bg-card">
      <FadeIn>
        <SectionHeader
          eyebrow="Why Choose Us"
          title="The TechCraft difference"
          description="What sets us apart from other IT service providers in Uttarakhand."
        />
      </FadeIn>

      <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason) => (
          <StaggerItem key={reason.title}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                <reason.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm">{reason.description}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  )
}
