"use client"

import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, CheckCircle, MapPin, Phone, Mail } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface LocationPageProps {
  location: string
  service: string
  title: string
  description: string
  heroImage?: string
  introduction: {
    title: string
    description: string
    points: string[]
  }
  services: {
    icon: LucideIcon
    title: string
    description: string
    href: string
  }[]
  industries: {
    name: string
    description: string
  }[]
  benefits: string[]
  faqs: {
    question: string
    answer: string
  }[]
  localInfo: {
    areas: string[]
    landmarks: string[]
  }
}

export function LocationPageTemplate({
  location,
  service,
  title,
  description,
  heroImage,
  introduction,
  services,
  industries,
  benefits,
  faqs,
  localInfo,
}: LocationPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn>
                <div className="inline-flex items-center gap-2 text-primary mb-4">
                  <MapPin className="h-4 w-4" />
                  <span className="font-medium text-sm">{location}, Uttarakhand</span>
                </div>
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
                      Get Free Consultation
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="bg-transparent">
                    <a href="https://wa.me/919876543210">WhatsApp Us</a>
                  </Button>
                </div>
              </FadeIn>
            </div>
            {heroImage && (
              <FadeIn delay={0.2}>
                <img
                  src={heroImage || "/placeholder.svg"}
                  alt={`${service} in ${location}`}
                  className="rounded-2xl w-full"
                />
              </FadeIn>
            )}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <Section className="pt-0">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">{introduction.title}</h2>
              <p className="text-muted-foreground mb-6">{introduction.description}</p>
              <ul className="space-y-3">
                {introduction.points.map((point, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="p-8 bg-card border border-border rounded-2xl">
              <h3 className="text-xl font-semibold text-foreground mb-4">Areas We Serve in {location}</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {localInfo.areas.map((area) => (
                  <span key={area} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                    {area}
                  </span>
                ))}
              </div>
              <h4 className="font-medium text-foreground mb-3">Near Popular Landmarks</h4>
              <ul className="space-y-2">
                {localInfo.landmarks.map((landmark) => (
                  <li key={landmark} className="text-sm text-muted-foreground flex items-center gap-2">
                    <MapPin className="h-3 w-3 text-primary" />
                    {landmark}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-card">
        <FadeIn>
          <SectionHeader
            eyebrow={`${service} Services`}
            title={`What we offer in ${location}`}
            description={`Comprehensive ${service.toLowerCase()} services tailored for ${location} businesses.`}
          />
        </FadeIn>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => (
            <StaggerItem key={item.title}>
              <Link
                href={item.href}
                className="group block h-full p-6 bg-background border border-border rounded-xl hover:border-primary/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Industries */}
      <Section>
        <FadeIn>
          <SectionHeader
            eyebrow="Industries We Serve"
            title={`${location} businesses we work with`}
            description={`We understand the unique needs of different industries in ${location}.`}
          />
        </FadeIn>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <StaggerItem key={industry.name}>
              <div className="p-6 bg-card border border-border rounded-xl">
                <h3 className="text-lg font-semibold text-foreground mb-2">{industry.name}</h3>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Benefits */}
      <Section className="bg-card">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Your local {service.toLowerCase()} partner in {location}
              </h2>
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
            <div className="p-8 bg-background border border-border rounded-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to get started?</h3>
              <p className="text-muted-foreground mb-6">
                Contact us for a free consultation. We'll discuss your needs and provide a custom solution for your{" "}
                {location} business.
              </p>
              <div className="space-y-4">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  +91 98765 43210
                </a>
                <a
                  href="mailto:hello@techcraft.in"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  hello@techcraft.in
                </a>
              </div>
              <Button asChild className="w-full mt-6 group">
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
      <Section>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <SectionHeader
              eyebrow="FAQ"
              title={`Common questions about ${service.toLowerCase()} in ${location}`}
              description="Answers to frequently asked questions from local businesses."
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
