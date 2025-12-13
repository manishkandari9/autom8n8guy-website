"use client"

import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { ArrowRight, Globe, Layers, Workflow, Bot } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites that convert visitors into customers. From business sites to e-commerce platforms.",
    href: "/services/web-development",
    features: ["Business Websites", "E-commerce", "Landing Pages", "SEO Optimization"],
  },
  {
    icon: Layers,
    title: "Full-Stack Development",
    description: "Powerful web applications built with modern technologies. SaaS, dashboards, and custom solutions.",
    href: "/services/full-stack",
    features: ["Custom Web Apps", "SaaS Products", "Admin Dashboards", "API Development"],
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description: "Streamline operations with intelligent automation. Save time and reduce errors with n8n workflows.",
    href: "/services/automation",
    features: ["Process Automation", "CRM Integration", "Email Workflows", "Data Scraping"],
  },
  {
    icon: Bot,
    title: "AI Solutions",
    description: "Leverage artificial intelligence to enhance your business. Chatbots, agents, and custom AI tools.",
    href: "/services/ai",
    features: ["AI Chatbots", "AI Agents", "Custom AI Tools", "AI Integration"],
  },
]

export function ServicesOverview() {
  return (
    <Section id="services">
      <FadeIn>
        <SectionHeader
          eyebrow="What We Do"
          title="Our collection of tech services spans every stage of digital transformation"
          description="Explore how we help businesses transform with cutting-edge technology solutions."
        />
      </FadeIn>

      <StaggerChildren className="grid md:grid-cols-2 gap-6">
        {services.map((service) => (
          <StaggerItem key={service.title}>
            <Link
              href={service.href}
              className="group block h-full p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <li key={feature} className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                    {feature}
                  </li>
                ))}
              </ul>
            </Link>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  )
}
