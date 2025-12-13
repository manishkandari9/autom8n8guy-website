import type { Metadata } from "next"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { CTA } from "@/components/home/cta"
import { FAQ } from "@/components/home/faq"
import {
  ArrowRight,
  Globe,
  ShoppingCart,
  FileText,
  Briefcase,
  Search,
  RefreshCw,
  Wrench,
  CheckCircle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Web Development Services | Business Websites in Dehradun & Rishikesh",
  description:
    "Professional web development services for businesses in Uttarakhand. Custom websites, e-commerce, landing pages, and SEO-friendly solutions.",
}

const services = [
  {
    icon: Briefcase,
    title: "Business Websites",
    description:
      "Professional websites that establish credibility and convert visitors into customers. Perfect for local businesses.",
    href: "/services/web-development/business-websites",
  },
  {
    icon: FileText,
    title: "Landing Pages",
    description: "High-converting landing pages designed to capture leads and drive specific actions from visitors.",
    href: "/services/web-development/landing-pages",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Websites",
    description: "Full-featured online stores with secure payments, inventory management, and seamless checkout.",
    href: "/services/web-development/ecommerce",
  },
  {
    icon: Globe,
    title: "Portfolio Websites",
    description: "Beautiful portfolio sites to showcase your work and attract new clients or opportunities.",
    href: "/services/web-development/portfolio",
  },
  {
    icon: Search,
    title: "SEO-Friendly Websites",
    description: "Websites built with SEO best practices to improve your visibility in search engine results.",
    href: "/services/web-development/seo-friendly",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    description: "Modernize your existing website with improved design, performance, and user experience.",
    href: "/services/web-development/redesign",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description: "Ongoing support, updates, and maintenance to keep your website secure and performing optimally.",
    href: "/services/web-development/maintenance",
  },
]

const features = [
  "Responsive design for all devices",
  "Fast loading speeds",
  "SEO optimization built-in",
  "Secure and reliable hosting",
  "Easy content management",
  "Analytics and tracking",
  "Contact forms and CTAs",
  "Social media integration",
]

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn about your business, target audience, and goals to create the perfect strategy.",
  },
  {
    step: "02",
    title: "Design",
    description: "Our designers create mockups that reflect your brand and appeal to your audience.",
  },
  {
    step: "03",
    title: "Development",
    description: "We build your website using modern technologies for optimal performance and security.",
  },
  {
    step: "04",
    title: "Launch",
    description: "After thorough testing, we launch your website and provide training on managing it.",
  },
]

export default function WebDevelopmentPage() {
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
                Web Development Services
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-xl text-muted-foreground text-pretty">
                Custom websites that establish your online presence, build trust with visitors, and convert them into
                loyal customers. From simple business sites to complex e-commerce platforms.
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

      {/* Features */}
      <Section className="bg-card">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">What You Get</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Websites built for success
              </h2>
              <p className="text-muted-foreground mb-8">
                Every website we build comes with essential features that ensure your online presence is effective,
                secure, and easy to manage.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <img src="/modern-website-design.png" alt="Web development showcase" className="rounded-2xl w-full" />
          </FadeIn>
        </div>
      </Section>

      {/* Process */}
      <Section>
        <FadeIn>
          <SectionHeader
            eyebrow="Our Process"
            title="How we build your website"
            description="A proven process that ensures your project is delivered on time and exceeds expectations."
          />
        </FadeIn>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((item) => (
            <StaggerItem key={item.step}>
              <div>
                <span className="text-5xl font-bold text-primary/20">{item.step}</span>
                <h3 className="text-xl font-semibold text-foreground mt-2 mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      <FAQ />
      <CTA />
    </>
  )
}
