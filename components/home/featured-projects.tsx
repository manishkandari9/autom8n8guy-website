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
    category: "Web Development",
    description: "A beautiful, conversion-focused website for a leading yoga school with online booking integration.",
    image: "/yoga-website-modern-design.jpg",
    href: "/projects/rishikesh-yoga-house",
  },
  {
    title: "Himalayan Stays",
    category: "Full-Stack Application",
    description: "Complete hotel management system with booking engine and admin dashboard.",
    image: "/hotel-booking-app-dashboard.jpg",
    href: "/projects/himalayan-stays",
  },
  {
    title: "AutoFlow CRM",
    category: "Automation",
    description: "Custom n8n automation workflows that saved 20+ hours per week for a local business.",
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
          title="Projects that drive real results"
          description="A selection of recent projects for businesses in Uttarakhand."
        />
      </FadeIn>

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
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-xs text-primary font-medium uppercase tracking-wide">{project.category}</span>
                <h3 className="text-xl font-semibold text-foreground mt-2 mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerChildren>

      <FadeIn delay={0.4}>
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild className="group bg-transparent">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </FadeIn>
    </Section>
  )
}
