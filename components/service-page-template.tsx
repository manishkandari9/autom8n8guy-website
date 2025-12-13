"use client"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, CheckCircle } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface ServicePageProps {
  breadcrumb: { label: string; href: string }
  title: string
  description: string
  problemStatement: {
    title: string
    description: string
    points: string[]
  }
  solution: {
    title: string
    description: string
    image?: string
  }
  features: {
    icon: LucideIcon
    title: string
    description: string
  }[]
  techStack?: string[]
  process: {
    step: string
    title: string
    description: string
  }[]
  benefits: string[]
  faqs: {
    question: string
    answer: string
  }[]
  cta?: {
    title: string
    description: string
  }
}

export function ServicePageTemplate({
  breadcrumb,
  title,
  description,
  problemStatement,
  solution,
  features,
  techStack,
  process,
  benefits,
  faqs,
  cta,
}: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeIn>
              <Link
                href={breadcrumb.href}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                {breadcrumb.label}
              </Link>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                {title}
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-xl text-muted-foreground text-pretty">{description}</p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="group">
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent">
                  <Link href="/projects">View Examples</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <Section className="pt-0">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">The Challenge</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                {problemStatement.title}
              </h2>
              <p className="text-muted-foreground mb-6">{problemStatement.description}</p>
              <ul className="space-y-3">
                {problemStatement.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="p-8 bg-card border border-border rounded-2xl">
              <h3 className="text-xl font-semibold text-foreground mb-4">{solution.title}</h3>
              <p className="text-muted-foreground">{solution.description}</p>
              {solution.image && (
                <img
                  src={solution.image || "/placeholder.svg"}
                  alt={solution.title}
                  className="mt-6 rounded-xl w-full"
                />
              )}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Features */}
      <Section className="bg-card">
        <FadeIn>
          <SectionHeader
            eyebrow="Features"
            title="What's included"
            description="Everything you need for a successful project."
          />
        </FadeIn>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="p-6 bg-background border border-border rounded-xl h-full">
                <div className="p-2 bg-primary/10 rounded-lg w-fit mb-4">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Tech Stack */}
      {techStack && techStack.length > 0 && (
        <Section>
          <FadeIn>
            <SectionHeader
              eyebrow="Technology"
              title="Built with modern tools"
              description="We use industry-leading technologies for optimal results."
            />
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <div key={tech} className="px-5 py-3 bg-card border border-border rounded-full">
                  <span className="text-foreground font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </Section>
      )}

      {/* Process */}
      <Section className={techStack && techStack.length > 0 ? "bg-card" : ""}>
        <FadeIn>
          <SectionHeader
            eyebrow="Process"
            title="How we deliver"
            description="A structured approach to ensure project success."
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

      {/* Benefits */}
      <Section className={techStack && techStack.length > 0 ? "" : "bg-card"}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Benefits</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">Why choose us</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="p-8 bg-card border border-border rounded-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-4">{cta?.title || "Ready to get started?"}</h3>
              <p className="text-muted-foreground mb-6">
                {cta?.description || "Let's discuss your project and create a solution tailored to your needs."}
              </p>
              <Button asChild className="w-full group">
                <Link href="/contact">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* FAQ */}
      <Section className={techStack && techStack.length > 0 ? "bg-card" : ""}>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <SectionHeader
              eyebrow="FAQ"
              title="Frequently asked questions"
              description="Answers to common questions about this service."
            />
          </FadeIn>

          <FadeIn delay={0.2}>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: faqs.map((faq) => ({
                    "@type": "Question",
                    name: faq.question,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: faq.answer,
                    },
                  })),
                }),
              }}
            />
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </Section>
    </>
  )
}
