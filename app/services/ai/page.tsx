import type { Metadata } from "next"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { CTA } from "@/components/home/cta"
import { FAQ } from "@/components/home/faq"
import { ArrowRight, Bot, Brain, Wrench, Plug, Workflow, MessageSquare, Sparkles, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "AI Solutions | Chatbots & AI Agents for Businesses in Uttarakhand",
  description:
    "AI-powered solutions for your business. Custom chatbots, AI agents, intelligent automation, and AI integration services in Dehradun and Rishikesh.",
}

const services = [
  {
    icon: MessageSquare,
    title: "AI Chatbot Development",
    description: "Intelligent chatbots that handle customer queries, provide support, and generate leads 24/7.",
    href: "/services/ai/chatbots",
  },
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Autonomous AI agents that can perform complex tasks, make decisions, and take actions on your behalf.",
    href: "/services/ai/agents",
  },
  {
    icon: Wrench,
    title: "Custom AI Tools",
    description: "Purpose-built AI tools tailored to your specific business needs and workflows.",
    href: "/services/ai/custom-tools",
  },
  {
    icon: Plug,
    title: "AI Integration",
    description: "Seamlessly integrate AI capabilities into your existing systems and workflows.",
    href: "/services/ai/integration",
  },
  {
    icon: Workflow,
    title: "AI Automation Systems",
    description: "End-to-end AI-powered automation that handles complex business processes intelligently.",
    href: "/services/ai/automation-systems",
  },
]

const useCases = [
  {
    icon: MessageSquare,
    title: "Customer Support",
    description: "24/7 AI-powered support that handles common queries and escalates complex issues.",
  },
  {
    icon: Sparkles,
    title: "Content Generation",
    description: "AI tools that help create marketing content, product descriptions, and more.",
  },
  {
    icon: Brain,
    title: "Data Analysis",
    description: "AI-powered insights from your business data to inform better decisions.",
  },
  {
    icon: Clock,
    title: "Task Automation",
    description: "Intelligent automation of repetitive tasks with AI decision-making capabilities.",
  },
]

const capabilities = [
  "Natural Language Processing",
  "Machine Learning Integration",
  "OpenAI GPT Models",
  "Custom Model Training",
  "Voice & Speech AI",
  "Computer Vision",
  "Predictive Analytics",
  "Recommendation Systems",
]

export default function AIPage() {
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
                AI Solutions
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-xl text-muted-foreground text-pretty">
                Harness the power of artificial intelligence to transform your business. From intelligent chatbots to
                custom AI tools, we help you leverage AI to gain a competitive edge.
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

      {/* Use Cases */}
      <Section className="bg-card">
        <FadeIn>
          <SectionHeader
            eyebrow="Use Cases"
            title="How businesses use our AI solutions"
            description="Real-world applications of AI that deliver measurable business value."
          />
        </FadeIn>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase) => (
            <StaggerItem key={useCase.title}>
              <div className="p-6 bg-background border border-border rounded-xl">
                <div className="p-2 bg-primary/10 rounded-lg w-fit mb-4">
                  <useCase.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground">{useCase.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Capabilities */}
      <Section>
        <FadeIn>
          <SectionHeader
            eyebrow="Capabilities"
            title="Our AI expertise"
            description="A range of AI capabilities to power your next project."
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3">
            {capabilities.map((capability) => (
              <div key={capability} className="px-5 py-3 bg-card border border-border rounded-full">
                <span className="text-foreground font-medium">{capability}</span>
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
