"use client"

import { Section, SectionHeader } from "@/components/ui/section"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { Shield, Clock, Users, Award, Headphones, Rocket } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Reliable AI Automation Systems",
    description:
      "Every AI automation workflow is carefully tested to ensure accuracy, security, and long-term reliability.",
  },
  {
    icon: Clock,
    title: "Automation Delivered On Time",
    description:
      "We design and deploy AI automation systems on schedule without compromising performance or scalability.",
  },
  {
    icon: Users,
    title: "Local Automation Expertise",
    description:
      "We understand real AI automation and workflow needs of businesses in Dehradun and Rishikesh.",
  },
  {
    icon: Award,
    title: "Proven Automation Results",
    description:
      "Our AI automation solutions consistently reduce manual work and improve operational efficiency.",
  },
  {
    icon: Headphones,
    title: "Ongoing Automation Support",
    description:
      "We provide continuous monitoring, optimization, and support for AI automation systems after launch.",
  },
  {
    icon: Rocket,
    title: "Scalable Automation Architecture",
    description:
      "Our AI automation systems are built to scale smoothly as business operations grow.",
  },
]


export function WhyChooseUs() {
  return (
    <Section className="bg-card">
     <FadeIn>
  <SectionHeader
    eyebrow="Why Choose Us"
    title="The Automation Edge"
    description="Practical, scalable AI automation systems designed to streamline workflows, integrate tools, and support real business growth."
  />
</FadeIn>
<p className="sr-only">
  Businesses choose AI automation services because they reduce manual work,
  improve efficiency, and integrate systems using intelligent workflows and tools like n8n.
</p>



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
