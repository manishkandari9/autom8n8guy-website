import type { Metadata } from "next"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { CTA } from "@/components/home/cta"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Calendar,
  CreditCard,
  Users,
  Video,
  BarChart3,
  MessageSquare,
  Search,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Yoga & Wellness Industry Solutions | Rishikesh Web Development",
  description:
    "Digital solutions for yoga studios, ashrams, wellness centers, and retreat facilities in Rishikesh and Uttarakhand. Reach international students and manage bookings online.",
}

const solutions = [
  {
    icon: Globe,
    title: "Multi-Language Websites",
    description: "Reach international audiences with websites in English, German, French, Spanish, and more.",
  },
  {
    icon: Calendar,
    title: "Class & Retreat Booking",
    description: "Online booking systems for classes, workshops, teacher training, and retreats.",
  },
  {
    icon: CreditCard,
    title: "International Payments",
    description: "Accept payments from anywhere in the world with Stripe, PayPal, and local options.",
  },
  {
    icon: Users,
    title: "Student Management",
    description: "Track students, manage registrations, and communicate with your community.",
  },
  {
    icon: Video,
    title: "Online Courses",
    description: "Sell recorded classes and online courses to students worldwide.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Understand your audience and track where your bookings come from.",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots",
    description: "Answer student questions 24/7 and capture leads automatically.",
  },
  {
    icon: Search,
    title: "International SEO",
    description: "Rank for yoga-related searches worldwide and attract organic traffic.",
  },
]

const challenges = [
  "Reaching international students effectively",
  "Managing bookings across time zones",
  "Accepting payments in multiple currencies",
  "Standing out in a crowded market",
  "Converting website visitors into bookings",
  "Managing seasonal demand fluctuations",
]

const results = [
  { metric: "200%", label: "Increase in international bookings" },
  { metric: "50%", label: "Reduction in admin time" },
  { metric: "24/7", label: "Student inquiry handling" },
  { metric: "15+", label: "Countries reached" },
]

export default function YogaWellnessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn>
                <Link
                  href="/industries"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4"
                >
                  <ArrowRight className="h-4 w-4 rotate-180" />
                  All Industries
                </Link>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                  Yoga & Wellness Industry Solutions
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-6 text-xl text-muted-foreground text-pretty">
                  Digital solutions designed for yoga studios, ashrams, wellness centers, and retreat facilities in
                  Rishikesh and across Uttarakhand. Reach students worldwide and grow your practice.
                </p>
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
                    <Link href="/projects">See Our Work</Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <img src="/yoga-wellness-studio-peaceful.jpg" alt="Yoga studio" className="rounded-2xl w-full" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <Section className="pt-0">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">
                Understanding Your Challenges
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                The yoga business is unique
              </h2>
              <p className="text-muted-foreground mb-6">
                We've worked with yoga schools throughout Rishikesh and understand the specific challenges you face in
                reaching international students and managing your practice.
              </p>
              <ul className="space-y-3">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                    <span className="text-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {results.map((result) => (
                <div key={result.label} className="p-6 bg-card border border-border rounded-xl text-center">
                  <p className="text-3xl font-bold text-primary">{result.metric}</p>
                  <p className="text-sm text-muted-foreground mt-1">{result.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Solutions */}
      <Section className="bg-card">
        <FadeIn>
          <SectionHeader
            eyebrow="Our Solutions"
            title="Everything your yoga business needs online"
            description="Comprehensive digital solutions to help you reach more students and manage your practice efficiently."
          />
        </FadeIn>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution) => (
            <StaggerItem key={solution.title}>
              <div className="p-6 bg-background border border-border rounded-xl h-full">
                <div className="p-2 bg-primary/10 rounded-lg w-fit mb-4">
                  <solution.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{solution.title}</h3>
                <p className="text-sm text-muted-foreground">{solution.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Why Us */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn delay={0.2}>
            <img
              src="/rishikesh-ganges-yoga-spiritual-city.jpg"
              alt="Rishikesh yoga scene"
              className="rounded-2xl w-full"
            />
          </FadeIn>
          <FadeIn>
            <div>
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                We know the yoga industry
              </h2>
              <p className="text-muted-foreground mb-6">
                Having worked with numerous yoga schools and wellness centers in Rishikesh, we understand what works and
                what doesn't. We've helped studios increase their international bookings, streamline operations, and
                build lasting online communities.
              </p>
              <ul className="space-y-3">
                {[
                  "Experience with 15+ yoga schools in Rishikesh",
                  "Understanding of YTT certification requirements",
                  "Multi-language website expertise",
                  "International payment integration",
                  "SEO for yoga-related keywords",
                  "Booking systems that handle time zones",
                ].map((point, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </Section>

      <CTA />
    </>
  )
}
