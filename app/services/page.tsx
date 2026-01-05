import type { Metadata } from "next"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { CTA } from "@/components/home/cta"
import {
  ArrowRight,
  Globe,
  Layers,
  Workflow,
  Bot,
  ShoppingCart,
  Palette,
  BarChart3,
  Mail,
  Database,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Services | Web Development, Automation & AI Solutions",
  description:
    "Explore our comprehensive IT services: web development, full-stack applications, business automation, and AI solutions for businesses in Dehradun and Rishikesh.",
}

const serviceCategories = [
  {
    icon: Workflow,
    title: "Business Automation",
    description:
      "Streamline operations with intelligent automation. From CRM workflows to process automation, we reduce manual work and eliminate errors. Save 20+ hours per week with custom-built automation systems.",
    href: "/services/automation",
    services: [
      { name: "Business Process Automation", href: "/services/automation/business-process" },
      { name: "CRM Automation", href: "/services/automation/crm" },
      { name: "Email Automation", href: "/services/automation/email" },
      { name: "Social Media Automation", href: "/services/automation/social-media" },
      { name: "Data Scraping & Webhooks", href: "/services/automation/data-scraping" },
      { name: "Custom Go-based Automation", href: "/services/automation/custom-automation" },
    ],
  },
  {
    icon: Bot,
    title: "AI Solutions & Agents",
    description:
      "Leverage artificial intelligence to enhance operations. AI chatbots for customer support, intelligent agents for task automation, and custom AI tools tailored to your business needs.",
    href: "/services/ai",
    services: [
      { name: "AI Chatbots", href: "/services/ai/chatbots" },
      { name: "AI Agents", href: "/services/ai/agents" },
      { name: "AI Integration", href: "/services/ai/integration" },
      { name: "Custom AI Tools", href: "/services/ai/custom-tools" },
      { name: "AI Automation Systems", href: "/services/ai/automation-systems" },
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Automation-ready websites that capture leads and integrate seamlessly with your systems. From business sites to landing pages, built for conversion and integration.",
    href: "/services/web-development",
    services: [
      { name: "Business Websites", href: "/services/web-development/business-websites" },
      { name: "Landing Pages", href: "/services/web-development/landing-pages" },
      { name: "E-commerce", href: "/services/web-development/ecommerce" },
      { name: "SEO-Friendly Websites", href: "/services/web-development/seo-friendly" },
      { name: "Website Redesign", href: "/services/web-development/redesign" },
    ],
  },
  {
    icon: Layers,
    title: "Full-Stack Development",
    description:
      "Powerful web applications with automation at the core. Custom backends, dashboards, and systems designed to scale with your automation needs.",
    href: "/services/full-stack",
    services: [
      { name: "Custom Web Applications", href: "/services/full-stack/custom-web-apps" },
      { name: "SaaS Development", href: "/services/full-stack/saas" },
      { name: "Admin Dashboards", href: "/services/full-stack/dashboards" },
      { name: "API Development", href: "/services/full-stack/api-development" },
      { name: "Database Design", href: "/services/full-stack/database-design" },
    ],
  },
]

const additionalServices = [
  {
    icon: ShoppingCart,
    title: "Automation-Ready E-commerce",
    description: "Complete online stores with automated inventory, payment processing, and order workflows.",
    href: "/services/web-development/ecommerce",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful interfaces designed for automation integration and user conversion.",
    href: "/services/design",
  },
  {
    icon: BarChart3,
    title: "Analytics & Automation Dashboards",
    description: "Real-time dashboards that track automation performance and business metrics.",
    href: "/services/full-stack/dashboards",
  },
  {
    icon: Mail,
    title: "Email Automation Systems",
    description: "Automated email workflows, newsletters, and transactional emails at scale.",
    href: "/services/automation/email",
  },
  {
    icon: Database,
    title: "Database & API Solutions",
    description: "Robust databases and APIs designed for automation and integration.",
    href: "/services/full-stack/database-design",
  },
  {
    icon: Globe,
    title: "Automation-Driven SEO",
    description: "SEO optimization powered by automated workflows and AI-driven insights.",
    href: "/services/web-development/seo-friendly",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Our Services</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Comprehensive IT solutions for modern businesses
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-xl text-muted-foreground text-pretty">
                From stunning websites to intelligent automation and AI-powered tools, we provide end-to-end digital
                solutions tailored to your business needs.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main Service Categories */}
      <Section className="pt-0">
        <StaggerChildren className="space-y-8">
          {serviceCategories.map((category) => (
            <StaggerItem key={category.title}>
              <div className="p-8 lg:p-10 bg-card border border-border rounded-2xl hover:border-primary/30 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="lg:w-1/2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <category.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                    </div>
                    <p className="text-muted-foreground mb-6">{category.description}</p>
                    <Link
                      href={category.href}
                      className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                    >
                      Learn more about {category.title}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="lg:w-1/2">
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {category.services.map((service) => (
                        <li key={service.name}>
                          <Link
                            href={service.href}
                            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                          >
                            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            <span>{service.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Additional Services */}
      <Section className="bg-card">
        <FadeIn>
          <SectionHeader
            eyebrow="More Services"
            title="Additional capabilities"
            description="Complementary services to support your digital transformation."
          />
        </FadeIn>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalServices.map((service) => (
            <StaggerItem key={service.title}>
              <Link
                href={service.href}
                className="group block p-6 bg-background border border-border rounded-xl hover:border-primary/50 transition-all"
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

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            provider: {
              "@type": "LocalBusiness",
              name: "Autom8n8 Systems",
              areaServed: ["Dehradun", "Rishikesh", "Uttarakhand"],
            },
            serviceType: [
              "Business Automation",
              "AI Solutions",
              "Web Development",
              "Full-Stack Development",
              "AI Chatbots",
              "Automation Services",
            ],
            description:
              "Automation-first IT services including business automation, AI solutions, web development, and full-stack applications for businesses in Dehradun and Rishikesh.",
          }),
        }}
      />

      <CTA />
    </>
  )
}
