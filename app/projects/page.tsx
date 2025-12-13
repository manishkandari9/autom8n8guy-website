import type { Metadata } from "next"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Workflow, Bot } from "lucide-react"
import { CTA } from "@/components/home/cta"

export const metadata: Metadata = {
  title: "Our Projects | Case Studies & Portfolio | Autom8n8 Systems",
  description:
    "Explore our portfolio of websites, automation systems, and AI solutions built for businesses in Dehradun, Rishikesh, and beyond.",
  keywords: ["portfolio", "case studies", "web development projects", "automation projects", "AI projects"],
}

const projects = [
  {
    slug: "himalayan-yoga-retreat-website",
    title: "Himalayan Yoga Retreat",
    category: "Business Website",
    categoryIcon: Globe,
    description:
      "Complete digital transformation for a yoga retreat center in Rishikesh, including website redesign, booking system, and international payment integration.",
    image: "/yoga-retreat-website-modern-design.jpg",
    results: ["250% increase in online bookings", "40% of revenue now from website", "Top 3 Google ranking"],
    tags: ["Next.js", "Booking System", "Razorpay", "SEO"],
    featured: true,
  },
  {
    slug: "coaching-institute-automation",
    title: "Excel Coaching Academy",
    category: "Automation System",
    categoryIcon: Workflow,
    description:
      "End-to-end automation for a competitive exam coaching center—from inquiry capture to admission, fee collection, and parent communication.",
    image: "/education-dashboard-automation-system.jpg",
    results: ["80% reduction in admin work", "95% on-time fee collection", "Zero lost inquiries"],
    tags: ["Go", "Automation", "WhatsApp API", "Razorpay"],
    featured: true,
  },
  {
    slug: "hotel-ai-concierge",
    title: "Mountain View Hotels",
    category: "AI Solution",
    categoryIcon: Bot,
    description:
      "Multilingual AI concierge that handles guest inquiries, room bookings, and local recommendations across WhatsApp and website for a hotel chain.",
    image: "/hotel-ai-chatbot-interface-modern.jpg",
    results: ["24/7 guest support", "65% queries resolved by AI", "4.8 star guest rating"],
    tags: ["OpenAI", "WhatsApp", "Multilingual", "Booking Integration"],
    featured: true,
  },
  {
    slug: "ecommerce-local-artisans",
    title: "Uttarakhand Crafts",
    category: "E-commerce",
    categoryIcon: Globe,
    description:
      "E-commerce platform connecting local artisans with customers nationwide. Features include inventory management, shipping integration, and artisan profiles.",
    image: "/artisan-ecommerce-website-products.jpg",
    results: ["₹15L+ monthly sales", "200+ artisan onboarded", "Pan-India shipping"],
    tags: ["Next.js", "Shiprocket", "Razorpay", "Inventory"],
    featured: false,
  },
  {
    slug: "clinic-management-system",
    title: "Doon Medical Clinic",
    category: "Automation System",
    categoryIcon: Workflow,
    description:
      "Custom clinic management system with appointment booking, patient records, prescription management, and automated reminders.",
    image: "/medical-clinic-management-dashboard.jpg",
    results: ["50% fewer no-shows", "Digital patient records", "Automated follow-ups"],
    tags: ["Go", "Healthcare", "SMS API", "HIPAA-mindful"],
    featured: false,
  },
  {
    slug: "real-estate-lead-bot",
    title: "Prime Properties Dehradun",
    category: "AI Solution",
    categoryIcon: Bot,
    description:
      "AI-powered lead qualification bot that engages property inquiries, collects requirements, and schedules site visits automatically.",
    image: "/real-estate-chatbot-property-search.jpg",
    results: ["3x lead qualification rate", "Instant response 24/7", "40% more site visits"],
    tags: ["AI Agent", "WhatsApp", "CRM Integration", "Lead Scoring"],
    featured: false,
  },
]

const categories = [
  { name: "All Projects", count: projects.length },
  { name: "Business Websites", count: projects.filter((p) => p.category === "Business Website").length },
  { name: "E-commerce", count: projects.filter((p) => p.category === "E-commerce").length },
  { name: "Automation", count: projects.filter((p) => p.category === "Automation System").length },
  { name: "AI Solutions", count: projects.filter((p) => p.category === "AI Solution").length },
]

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Our Work</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Projects & Case Studies
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-xl text-muted-foreground text-pretty">
                Real results for real businesses. Explore how we've helped companies in Dehradun, Rishikesh, and beyond
                transform their operations with technology.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Categories */}
      <Section className="pt-0">
        <FadeIn>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.name}
                className="px-4 py-2 bg-card border border-border rounded-full hover:border-primary/50 transition-colors"
              >
                <span className="text-foreground">{category.name}</span>
                <span className="ml-2 text-muted-foreground">({category.count})</span>
              </button>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Featured Projects */}
      <Section className="pt-0">
        <FadeIn>
          <SectionHeader
            eyebrow="Featured"
            title="Highlighted case studies"
            description="Detailed looks at some of our most impactful projects."
          />
        </FadeIn>

        <StaggerChildren className="grid lg:grid-cols-3 gap-8">
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <StaggerItem key={project.slug}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center gap-2 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full">
                        <project.categoryIcon className="h-3 w-3 text-primary" />
                        <span className="text-xs font-medium text-foreground">{project.category}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="space-y-2 mb-4">
                      {project.results.map((result) => (
                        <div key={result} className="flex items-center gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span className="text-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
        </StaggerChildren>
      </Section>

      {/* All Projects */}
      <Section className="bg-card">
        <FadeIn>
          <SectionHeader
            eyebrow="Portfolio"
            title="More projects"
            description="Additional work across various industries and technologies."
          />
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <StaggerItem key={project.slug}>
                <div className="p-6 bg-background border border-border rounded-xl h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <project.categoryIcon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{project.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
        </StaggerChildren>
      </Section>

      {/* CTA */}
      <Section>
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Ready to become our next success story?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can help your business achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="group">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent">
                <a href="https://wa.me/919876543210">WhatsApp Us</a>
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>

      <CTA />
    </>
  )
}
