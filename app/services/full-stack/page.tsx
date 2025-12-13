import type { Metadata } from "next"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { CTA } from "@/components/home/cta"
import { FAQ } from "@/components/home/faq"
import { ArrowRight, Layers, Cloud, LayoutDashboard, Plug, Shield, Database, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Full-Stack Development | Custom Web Applications in Uttarakhand",
  description:
    "Custom web applications, SaaS products, admin dashboards, and API development for businesses in Dehradun and Rishikesh.",
}

const services = [
  {
    icon: Layers,
    title: "Custom Web Applications",
    description: "Tailored web applications built to solve your unique business challenges and streamline operations.",
    href: "/services/full-stack/custom-web-apps",
  },
  {
    icon: Cloud,
    title: "SaaS Development",
    description: "Scalable Software-as-a-Service platforms with subscription management and multi-tenancy.",
    href: "/services/full-stack/saas",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboards",
    description:
      "Powerful admin panels and dashboards to manage your business data, users, and operations efficiently.",
    href: "/services/full-stack/dashboards",
  },
  {
    icon: Plug,
    title: "API Development",
    description: "Robust RESTful and GraphQL APIs that connect your systems and enable seamless integrations.",
    href: "/services/full-stack/api-development",
  },
  {
    icon: Shield,
    title: "Authentication Systems",
    description: "Secure authentication and authorization systems with social login, SSO, and role-based access.",
    href: "/services/full-stack/authentication",
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Efficient database architecture for optimal performance, scalability, and data integrity.",
    href: "/services/full-stack/database-design",
  },
]

const technologies = [
  { name: "Next.js", description: "React framework for production" },
  { name: "React", description: "UI component library" },
  { name: "Node.js", description: "Server-side runtime" },
  { name: "TypeScript", description: "Type-safe JavaScript" },
  { name: "PostgreSQL", description: "Relational database" },
  { name: "MongoDB", description: "NoSQL database" },
  { name: "Redis", description: "Caching & sessions" },
  { name: "AWS/Vercel", description: "Cloud deployment" },
]

const benefits = [
  "Scalable architecture that grows with your business",
  "Secure by design with industry best practices",
  "Modern tech stack for optimal performance",
  "Clean, maintainable codebase",
  "Comprehensive documentation",
  "Ongoing support and maintenance",
]

export default function FullStackPage() {
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
                Full-Stack Development
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-xl text-muted-foreground text-pretty">
                Custom web applications that power your business operations. From SaaS platforms to internal tools, we
                build scalable solutions that solve real problems.
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

      {/* Technologies */}
      <Section className="bg-card">
        <FadeIn>
          <SectionHeader
            eyebrow="Tech Stack"
            title="Modern technologies for robust solutions"
            description="We use proven, modern technologies that ensure your application is fast, secure, and scalable."
          />
        </FadeIn>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech) => (
            <StaggerItem key={tech.name}>
              <div className="p-6 bg-background border border-border rounded-xl text-center">
                <h3 className="text-lg font-semibold text-foreground mb-1">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Benefits */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn delay={0.2}>
            <img src="/web-application-dashboard-modern-interface.jpg" alt="Full-stack development" className="rounded-2xl w-full" />
          </FadeIn>
          <FadeIn>
            <div>
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Applications built to last
              </h2>
              <p className="text-muted-foreground mb-8">
                We don't just build applications—we architect solutions that scale with your business and stand the test
                of time.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </Section>

      <FAQ />
      <CTA />
    </>
  )
}
