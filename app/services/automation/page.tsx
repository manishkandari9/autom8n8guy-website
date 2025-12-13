import type { Metadata } from "next"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { CTA } from "@/components/home/cta"
import { FAQ } from "@/components/home/faq"
import { ArrowRight, Workflow, Users, Share2, Mail, Database, Zap, Clock, TrendingUp, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Business Automation Services | n8n Workflows in Dehradun",
  description:
    "Streamline your business with automation. CRM automation, email workflows, data scraping, and n8n workflow development for businesses in Uttarakhand.",
}

const services = [
  {
    icon: Workflow,
    title: "Business Process Automation",
    description: "Automate repetitive tasks and streamline workflows to improve efficiency and reduce human error.",
    href: "/services/automation/business-process",
  },
  {
    icon: Users,
    title: "CRM Automation",
    description:
      "Automate customer relationship management tasks including lead nurturing, follow-ups, and data entry.",
    href: "/services/automation/crm",
  },
  {
    icon: Share2,
    title: "Social Media Automation",
    description: "Schedule posts, track engagement, and automate social media management across multiple platforms.",
    href: "/services/automation/social-media",
  },
  {
    icon: Mail,
    title: "Email Automation",
    description:
      "Automated email sequences, newsletters, and transactional emails that nurture leads and engage customers.",
    href: "/services/automation/email",
  },
  {
    icon: Database,
    title: "Data Scraping Automation",
    description:
      "Extract valuable data from websites and automate data collection for market research and lead generation.",
    href: "/services/automation/data-scraping",
  },
  {
    icon: Zap,
    title: "n8n Workflow Automation",
    description: "Custom n8n workflows that connect your tools and automate complex multi-step processes.",
    href: "/services/automation/n8n-workflows",
  },
]

const benefits = [
  {
    icon: Clock,
    title: "Save 20+ Hours/Week",
    description: "Eliminate manual tasks and free up your team to focus on high-value work.",
  },
  {
    icon: TrendingUp,
    title: "Increase Productivity",
    description: "Streamlined processes mean faster turnaround and more consistent output.",
  },
  {
    icon: ShieldCheck,
    title: "Reduce Errors",
    description: "Automated workflows eliminate human error and ensure consistency.",
  },
]

const tools = [
  "n8n",
  "Zapier",
  "Make",
  "HubSpot",
  "Mailchimp",
  "Google Sheets",
  "Slack",
  "Notion",
  "Airtable",
  "Salesforce",
]

export default function AutomationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeIn>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                All Services
              </Link>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Business Automation
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-xl text-muted-foreground text-pretty">
                Stop wasting time on repetitive tasks. We build intelligent automation workflows that streamline your
                operations, reduce errors, and free your team to focus on what matters.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <Section className="pt-0">
        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <Link
                href={service.href}
                className="group block h-full p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Benefits */}
      <Section className="bg-card">
        <FadeIn>
          <SectionHeader
            eyebrow="Benefits"
            title="Why automate your business?"
            description="Automation delivers measurable results that impact your bottom line."
          />
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <StaggerItem key={benefit.title}>
              <div className="text-center">
                <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Tools */}
      <Section>
        <FadeIn>
          <SectionHeader
            eyebrow="Tools We Use"
            title="Connect all your favorite tools"
            description="We work with the tools you already use to create seamless automation workflows."
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <div key={tool} className="px-5 py-3 bg-card border border-border rounded-full">
                <span className="text-foreground font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      <FAQ />
      <CTA />
    </>
  )
}
