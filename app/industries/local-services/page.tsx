import type { Metadata } from "next"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ArrowRight,
  CheckCircle,
  MapPin,
  Globe,
  Calendar,
  Star,
  MessageSquare,
  Search,
  Phone,
  Users,
} from "lucide-react"
import { CTA } from "@/components/home/cta"

export const metadata: Metadata = {
  title: "IT Solutions for Local Service Businesses | Get Found Online",
  description:
    "Help local service businesses in Dehradun and Rishikesh get found online. Websites, Google optimization, booking systems, and customer automation.",
  keywords: [
    "local business website",
    "service business digital marketing",
    "google my business optimization",
    "local SEO dehradun",
    "booking website local business",
  ],
}

const businessTypes = [
  "Salons & Spas",
  "Plumbers & Electricians",
  "Home Services",
  "Fitness & Gyms",
  "Clinics & Doctors",
  "Tutors & Coaches",
  "Photographers",
  "Event Planners",
  "Repair Services",
  "Pet Services",
  "Cleaning Services",
  "Auto Services",
]

const challenges = [
  {
    title: "Invisible to Online Searches",
    description: "When people search 'plumber near me' or 'best salon in Dehradun', your business doesn't show up.",
  },
  {
    title: "No Professional Website",
    description: "Still relying on word-of-mouth and JustDial while competitors have professional online presence.",
  },
  {
    title: "Missed Calls = Lost Business",
    description: "When you're busy with a customer, you can't answer calls—and those inquiries go to competitors.",
  },
  {
    title: "No Online Booking",
    description: "Customers have to call to book, but they prefer booking online at their convenience.",
  },
  {
    title: "Poor Review Management",
    description: "Not collecting reviews systematically, or negative reviews going unanswered.",
  },
  {
    title: "Manual Follow-ups",
    description: "Spending hours on reminder calls and follow-up messages that could be automated.",
  },
]

const solutions = [
  {
    icon: Globe,
    title: "Service Business Websites",
    description:
      "Professional websites that showcase your services, pricing, and expertise. Optimized for local searches.",
    href: "/services/web-development/business-websites",
  },
  {
    icon: Search,
    title: "Google Business Optimization",
    description: "Get your Google Business Profile ranking higher. Appear in 'near me' searches and Google Maps.",
    href: "/services/web-development/seo-friendly",
  },
  {
    icon: Calendar,
    title: "Online Booking Systems",
    description: "Let customers book appointments 24/7. Automatic confirmations and reminders reduce no-shows.",
    href: "/services/automation/custom-automation",
  },
  {
    icon: Star,
    title: "Review Generation",
    description: "Automated review requests after service. Build your reputation on Google and other platforms.",
    href: "/services/automation/custom-automation",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Automation",
    description: "Auto-replies, booking confirmations, and follow-ups via WhatsApp—the channel your customers prefer.",
    href: "/services/ai/chatbots",
  },
  {
    icon: Phone,
    title: "Lead Capture & Follow-up",
    description:
      "Capture every inquiry from website, WhatsApp, and calls. Automatic follow-up sequences until they book.",
    href: "/services/automation/custom-automation",
  },
]

const localSEOFeatures = [
  {
    title: "Google Business Profile",
    description: "Fully optimized profile with categories, services, photos, and regular posts.",
  },
  {
    title: "Local Keywords",
    description: "Website content targeting 'service + city' searches like 'dentist in Dehradun'.",
  },
  {
    title: "NAP Consistency",
    description: "Your Name, Address, Phone consistent across all online directories.",
  },
  {
    title: "Review Strategy",
    description: "Systematic approach to collecting and responding to reviews.",
  },
  {
    title: "Local Backlinks",
    description: "Citations from local directories and relevant business listings.",
  },
  {
    title: "Mobile Optimization",
    description: "Fast, mobile-first website since most local searches happen on phones.",
  },
]

const faqs = [
  {
    question: "How do I get my business to show up in Google 'near me' searches?",
    answer:
      "It requires a combination of a fully optimized Google Business Profile, a website with local SEO, consistent business information across directories, and positive reviews. We handle all of this as part of our local business packages.",
  },
  {
    question: "I'm not tech-savvy at all. Can I still manage what you build?",
    answer:
      "Absolutely. We design everything to be simple. Most updates can be done via WhatsApp messages to us or through simple interfaces. For bookings and reviews, the systems run automatically—you just check notifications.",
  },
  {
    question: "How much does a website for a local service business cost?",
    answer:
      "Our local business websites start from ₹20,000 for a clean, professional 5-page site. Packages with booking systems and automation range from ₹40,000-₹80,000. We offer payment plans to make it accessible.",
  },
  {
    question: "How long before I start seeing more customers?",
    answer:
      "Website and Google Business optimization improvements start showing results in 2-4 weeks. Local SEO takes 2-3 months for significant ranking improvements. Review generation and WhatsApp automation have immediate impact.",
  },
  {
    question: "Can customers book and pay online?",
    answer:
      "Yes. We integrate online booking with payment gateways that accept UPI, cards, and net banking. You can also offer pay-at-service if you prefer. Customers get instant confirmation and reminders.",
  },
  {
    question: "What if I already have a website but it's not working?",
    answer:
      "We can audit your existing website, identify issues, and either optimize it or rebuild it properly. Often websites don't work because of poor mobile experience, slow loading, or missing local SEO—all fixable.",
  },
]

export default function LocalServicesIndustryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 text-primary mb-4">
                <MapPin className="h-5 w-5" />
                <span className="font-medium text-sm">Local Service Businesses</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Get Found by Local Customers
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-xl text-muted-foreground text-pretty">
                When someone searches for your service in Dehradun or Rishikesh, they should find you first.
                Professional websites, Google optimization, and booking systems that turn searches into customers.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="group">
                  <Link href="/contact">
                    Get Free Local SEO Audit
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent">
                  <a href="https://wa.me/919876543210">WhatsApp Us</a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Business Types */}
      <Section className="pt-0">
        <FadeIn>
          <SectionHeader
            eyebrow="Who We Help"
            title="Local service businesses we work with"
            description="If you serve customers in a local area, we can help you get found online."
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3">
            {businessTypes.map((type) => (
              <div key={type} className="px-4 py-2 bg-card border border-border rounded-full">
                <span className="text-foreground">{type}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Challenges */}
      <Section className="bg-card">
        <FadeIn>
          <SectionHeader
            eyebrow="The Problem"
            title="Why local businesses struggle online"
            description="Common challenges that keep local service businesses from getting found."
          />
        </FadeIn>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge) => (
            <StaggerItem key={challenge.title}>
              <div className="p-6 bg-background border border-border rounded-xl h-full">
                <h3 className="text-lg font-semibold text-foreground mb-2">{challenge.title}</h3>
                <p className="text-sm text-muted-foreground">{challenge.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Solutions */}
      <Section>
        <FadeIn>
          <SectionHeader
            eyebrow="Our Solutions"
            title="How we help local businesses grow"
            description="Everything you need to get found, get booked, and get reviewed."
          />
        </FadeIn>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <StaggerItem key={solution.title}>
              <Link
                href={solution.href}
                className="group block h-full p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <solution.icon className="h-5 w-5 text-primary" />
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{solution.title}</h3>
                <p className="text-sm text-muted-foreground">{solution.description}</p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Local SEO */}
      <Section className="bg-card">
        <FadeIn>
          <SectionHeader
            eyebrow="Local SEO"
            title="Dominate local search results"
            description="Our comprehensive approach to local search visibility."
          />
        </FadeIn>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {localSEOFeatures.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="p-6 bg-background border border-border rounded-xl h-full">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Results */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Results</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                What local businesses achieve with us
              </h2>
              <ul className="space-y-4">
                {[
                  "Appear in top 3 Google Maps results",
                  "Get 50%+ more inquiries from online",
                  "Reduce missed calls with automation",
                  "Book appointments while you sleep",
                  "Build 5-star reputation systematically",
                  "Spend less time on admin, more on service",
                  "Compete with bigger, established players",
                  "Turn one-time customers into repeat clients",
                ].map((benefit, index) => (
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
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Typical Results</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-3xl font-bold text-primary">3x</div>
                  <p className="text-muted-foreground">Increase in online inquiries</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">Top 3</div>
                  <p className="text-muted-foreground">Google Maps ranking for key services</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">80%</div>
                  <p className="text-muted-foreground">Reduction in no-show appointments</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-card">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <SectionHeader
              eyebrow="FAQ"
              title="Questions from local business owners"
              description="Common questions about getting your local business online."
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

      <CTA />
    </>
  )
}
