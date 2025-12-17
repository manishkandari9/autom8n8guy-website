"use client"

import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Rishikesh Yoga House",
    category: "AI-Enabled Website & Booking Automation",
    description:
      "An AI-enabled website with automated booking workflows, lead follow-ups, and customer communication for a leading yoga school.",
    image: "/yoga-website-modern-design.jpg",
    href: "/projects/rishikesh-yoga-house",
  },
  {
    title: "Himalayan Stays",
    category: "AI Automation for Hotel Operations",
    description:
      "An AI automation system for hotel management including booking workflows, admin operations, and automated guest communication.",
    image: "/hotel-booking-app-dashboard.jpg",
    href: "/projects/himalayan-stays",
  },
  {
    title: "AutoFlow CRM",
    category: "n8n Workflow & Business Automation",
    description:
      "Custom n8n-based AI automation workflows that reduced manual work and saved over 20 hours per week for a local business.",
    image: "/automation-workflow-dashboard.png",
    href: "/projects/autoflow-crm",
  },
]

export function FeaturedProjects() {
  return (
    <Section>
      <FadeIn>
        <SectionHeader
          eyebrow="Featured Work"
          title="AI Automation Projects That Deliver Real Business Results"
          description="A selection of AI automation, workflow, and system projects built for businesses in Uttarakhand."
        />
      </FadeIn>

      {/* AEO BOOST */}
      <p className="sr-only">
        AI automation projects show how intelligent workflows, system integrations,
        and tools like n8n help businesses reduce manual work and improve efficiency.
      </p>

      <StaggerChildren className="grid lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <StaggerItem key={project.title}>
            <Link
              href={project.href}
              className="group block overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} AI automation project`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-xs text-primary font-medium uppercase tracking-wide">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-foreground mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerChildren>

      <FadeIn delay={0.4}>
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild className="group bg-transparent">
            <Link href="/projects">
              View All AI Automation Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </FadeIn>
    </Section>
  )
}
