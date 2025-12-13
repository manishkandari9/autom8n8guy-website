import type { Metadata } from "next"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, CheckCircle, Rocket, Globe, Code2, Zap, Bot, TrendingUp, Timer, Lightbulb } from "lucide-react"
import { CTA } from "@/components/home/cta"

export const metadata: Metadata = {
  title: "IT Solutions for Startups | MVPs, Web Apps & AI Integration",
  description:
    "Fast, affordable technology solutions for startups. MVPs, web applications, and AI integration to help you launch and scale quickly.",
  keywords: [
    "startup development services",
    "MVP development india",
    "startup web app",
    "SaaS development",
    "startup technology partner",
  ],
}

const challenges = [
  {
    title: "Limited Runway",
    description: "You need to build and launch before funding runs out, but quality can't be compromised.",
  },
  {
    title: "Technical Co-founder Gap",
    description: "Great business idea, but no technical expertise to build and architect the product.",
  },
  {
    title: "MVP Uncertainty",
    description: "Not sure what to build first, how to prioritize features, or what technology to use.",
  },
  {
    title: "Scaling Concerns",
    description: "Worried about building something that won't scale when you start getting traction.",
  },
  {
    title: "Vendor Lock-in Fear",
    description: "Concerned about agencies that build proprietary systems you can't maintain or migrate.",
  },
  {
    title: "AI Integration Complexity",
    description: "Want to leverage AI but unsure how to integrate it meaningfully into your product.",
  },
]

const solutions = [
  {
    icon: Rocket,
    title: "MVP Development",
    description:
      "Launch your minimum viable product quickly. We focus on core features that validate your idea without over-engineering.",
    href: "/services/full-stack/custom-web-apps",
  },
  {
    icon: Code2,
    title: "Full Product Development",
    description: "Complete web applications with modern architecture, ready to scale from day one.",
    href: "/services/full-stack/saas",
  },
  {
    icon: Globe,
    title: "Landing & Marketing Sites",
    description: "High-converting landing pages to capture leads and validate demand before building.",
    href: "/services/web-development/landing-pages",
  },
  {
    icon: Bot,
    title: "AI-Powered Features",
    description: "Integrate AI capabilities like chatbots, content generation, and intelligent automation.",
    href: "/services/ai/agents",
  },
  {
    icon: Zap,
    title: "Automation & Operations",
    description: "Automate internal processes so you can scale operations without scaling headcount.",
    href: "/services/automation/custom-automation",
  },
  {
    icon: TrendingUp,
    title: "Technical Advisory",
    description: "Fractional CTO services—architecture guidance, technology decisions, and team building.",
    href: "/contact",
  },
]

const approach = [
  {
    title: "Speed to Market",
    description:
      "We prioritize getting your product in front of users fast. Iterative development with 2-week sprints means you see progress quickly.",
  },
  {
    title: "Lean Architecture",
    description:
      "Build only what you need now, but architect for what you'll need later. No premature optimization, no wasted effort.",
  },
  {
    title: "Full Ownership",
    description:
      "You own everything we build—code, designs, infrastructure. No vendor lock-in, no proprietary dependencies.",
  },
  {
    title: "Modern Stack",
    description:
      "Next.js, React, Go, PostgreSQL, and cloud-native infrastructure. Technology that's proven, scalable, and developer-friendly.",
  },
]

const faqs = [
  {
    question: "How quickly can you build an MVP?",
    answer:
      "Depending on complexity, MVPs typically take 4-8 weeks. We start with a discovery session to define the core features that will validate your hypothesis, then build iteratively with regular demos. Some simpler MVPs can launch in 3 weeks.",
  },
  {
    question: "What does MVP development cost?",
    answer:
      "MVP projects typically range from ₹2,00,000-₹5,00,000 depending on complexity. We can work with your budget constraints and suggest scope adjustments to fit your runway. We also offer equity arrangements for promising startups.",
  },
  {
    question: "Can you help if we already have some code?",
    answer:
      "Absolutely. We can audit your existing codebase, take over development, or work alongside your team. We'll give you an honest assessment of what can be reused and what might need refactoring.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. We offer retainer arrangements for ongoing development, maintenance, and support. Many startups keep us engaged for continuous iteration as they learn from users and grow.",
  },
  {
    question: "What if we need to hire our own developers later?",
    answer:
      "Great—that's a sign of success! We write clean, documented code following industry standards. Any competent developer can pick up where we left off. We can even help you hire and onboard your first technical hires.",
  },
  {
    question: "Can you help with investor materials and demos?",
    answer:
      "Yes. We can build polished demo environments, create technical documentation for due diligence, and help you articulate your technical vision to investors. We've helped multiple startups through fundraising.",
  },
]

export default function StartupsIndustryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 text-primary mb-4">
                <Rocket className="h-5 w-5" />
                <span className="font-medium text-sm">Startup Solutions</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Your Technical Co-Founder
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-xl text-muted-foreground text-pretty">
                Turn your startup idea into a working product. We build MVPs, scale web applications, and integrate
                AI—fast enough for your runway, solid enough for your growth.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="group">
                  <Link href="/contact">
                    Discuss Your Startup
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent">
                  <Link href="/projects">View Startup Projects</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <Section className="pt-0">
        <FadeIn>
          <SectionHeader
            eyebrow="We Get It"
            title="The startup technology challenge"
            description="Building a startup is hard. Finding the right technology partner shouldn't be."
          />
        </FadeIn>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge) => (
            <StaggerItem key={challenge.title}>
              <div className="p-6 bg-card border border-border rounded-xl h-full">
                <h3 className="text-lg font-semibold text-foreground mb-2">{challenge.title}</h3>
                <p className="text-sm text-muted-foreground">{challenge.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Solutions */}
      <Section className="bg-card">
        <FadeIn>
          <SectionHeader
            eyebrow="What We Build"
            title="Technology solutions for startups"
            description="From idea validation to scale-up, we build what you need at each stage."
          />
        </FadeIn>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <StaggerItem key={solution.title}>
              <Link
                href={solution.href}
                className="group block h-full p-6 bg-background border border-border rounded-xl hover:border-primary/50 transition-all"
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

      {/* Our Approach */}
      <Section>
        <FadeIn>
          <SectionHeader
            eyebrow="Our Approach"
            title="How we work with startups"
            description="Principles that guide every startup engagement."
          />
        </FadeIn>

        <StaggerChildren className="grid sm:grid-cols-2 gap-8">
          {approach.map((item) => (
            <StaggerItem key={item.title}>
              <div className="p-6 bg-card border border-border rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Process */}
      <Section className="bg-card">
        <FadeIn>
          <SectionHeader
            eyebrow="Process"
            title="From idea to launch"
            description="A structured process designed for startup speed and learning."
          />
        </FadeIn>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Discovery",
              description: "Understand your vision, define MVP scope, and choose the right technology approach.",
            },
            {
              step: "02",
              title: "Sprint Build",
              description: "Iterative 2-week sprints with regular demos. You see progress and can adjust direction.",
            },
            {
              step: "03",
              title: "Launch",
              description: "Deploy to production with monitoring, analytics, and feedback collection.",
            },
            {
              step: "04",
              title: "Iterate",
              description: "Learn from users and iterate rapidly. Add features, fix issues, improve experience.",
            },
          ].map((item) => (
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

      {/* Metrics */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Track Record</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Built for startup success
              </h2>
              <ul className="space-y-4">
                {[
                  "Multiple MVPs launched successfully",
                  "Products that have raised follow-on funding",
                  "0 startups left stranded mid-project",
                  "Modern tech stack that developers love",
                  "Clean handoffs when you're ready to hire",
                  "Long-term partnerships with growing startups",
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
                <Timer className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Startup Speed</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-3xl font-bold text-primary">4-8 weeks</div>
                  <p className="text-muted-foreground">Typical MVP launch time</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">2 weeks</div>
                  <p className="text-muted-foreground">Sprint cycles with demos</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24-48 hrs</div>
                  <p className="text-muted-foreground">Response time for urgent issues</p>
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
              title="Questions founders ask"
              description="Real answers to common startup concerns."
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
