"use client"

import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { ArrowRight, Globe, Layers, Workflow, Bot } from "lucide-react"

const services = [
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    description:
      "Automate repetitive business workflows using AI-powered logic and n8n to connect tools, systems, and data.",
    href: "/ai-workflow-automation",
    features: ["n8n Workflows", "Process Automation", "System Integrations", "Data Sync"],
  },
  {
    icon: Bot,
    title: "AI Chatbots & Agents",
    description:
      "Build intelligent AI chatbots and agents that handle customer support, lead qualification, and internal queries.",
    href: "/ai-chatbot-automation",
    features: ["AI Chatbots", "AI Agents", "Customer Support", "Lead Automation"],
  },
  {
    icon: Globe,
    title: "AI Automation for Websites",
    description:
      "Integrate AI automation into modern websites to capture leads, trigger workflows, and sync backend systems.",
    href: "/ai-automation-for-websites",
    features: ["AI Forms", "Lead Automation", "Website Integrations", "Conversion Tracking"],
  },
  {
    icon: Layers,
    title: "Backend & System Automation",
    description:
      "Create scalable backend automation connecting databases, APIs, and business tools for smooth operations.",
    href: "/backend-automation",
    features: ["API Automation", "Database Sync", "System Workflows", "Scalable Architecture"],
  },
]


export function ServicesOverview() {
  return (
    <Section id="services">
      <FadeIn>
        <SectionHeader
        eyebrow="What We Do"
        title="AI Automation Services Built for Modern Businesses"
        description="From intelligent workflows and AI chatbots to website and backend automation, we design systems that streamline operations and drive growth."/>

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
