import type { Metadata } from "next"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Clock, Users, Zap } from "lucide-react"
import { CTA } from "@/components/home/cta"

export const metadata: Metadata = {
  title: "How We Work | Autom8n8 Systems",
  description:
    "Our development process: discovery, planning, development, testing, launch, and support. Transparent, collaborative, and iterative approach to building automation and AI solutions.",
}

const processSteps = [
  {
    number: 1,
    title: "Discovery & Consultation",
    duration: "1-2 weeks",
    description:
      "We start by understanding your business deeply. What are your pain points? What's your vision? What's your budget and timeline? We ask the right questions and listen actively.",
    activities: [
      "Initial consultation call (30-60 min)",
      "Business analysis and problem identification",
      "Competitive and market research",
      "Stakeholder interviews (if needed)",
      "Creating a project brief document",
    ],
    icon: "🔍",
  },
  {
    number: 2,
    title: "Planning & Architecture",
    duration: "1-2 weeks",
    description:
      "Based on discovery, we create a detailed plan. We define the architecture, technology stack, timeline, and deliverables. Everything is documented and reviewed with you.",
    activities: [
      "Solution design and recommendations",
      "Technology stack selection",
      "Project timeline and milestone planning",
      "Detailed proposal and SOW creation",
      "Budget and resource allocation",
    ],
    icon: "📋",
  },
  {
    number: 3,
    title: "Development & Building",
    duration: "Varies by project",
    description:
      "Our team starts building your solution. We use agile methodology, breaking work into 2-week sprints. You get regular updates, demos, and opportunities to provide feedback.",
    activities: [
      "Sprint planning and kickoff",
      "Daily standup communications",
      "Weekly progress demos",
      "Iterative development with feedback loops",
      "Continuous integration and testing",
    ],
    icon: "⚙️",
  },
  {
    number: 4,
    title: "Testing & Quality Assurance",
    duration: "1-2 weeks",
    description:
      "Before launch, we thoroughly test everything. Functional testing, performance testing, security testing, and user acceptance testing (UAT). We ensure your solution is production-ready.",
    activities: [
      "Comprehensive functional testing",
      "Performance and security testing",
      "UAT (User Acceptance Testing)",
      "Bug fixes and refinements",
      "Documentation and training preparation",
    ],
    icon: "✅",
  },
  {
    number: 5,
    title: "Launch & Deployment",
    duration: "1 week",
    description:
      "Go-live time! We deploy your solution, handle any issues, and provide training if needed. Your new system is now live and working for your business.",
    activities: [
      "Production deployment",
      "Data migration (if applicable)",
      "Team training and knowledge transfer",
      "Launch monitoring and support",
      "Post-launch documentation",
    ],
    icon: "🚀",
  },
  {
    number: 6,
    title: "Support & Optimization",
    duration: "Ongoing",
    description:
      "Our relationship doesn't end at launch. We provide warranty support, monitor performance, and help you optimize. We're your technical partner, not just your vendor.",
    activities: [
      "30-60 day warranty period",
      "Performance monitoring and analytics",
      "User support and troubleshooting",
      "Optimization recommendations",
      "Long-term maintenance packages (optional)",
    ],
    icon: "🛡️",
  },
]

const principles = [
  {
    icon: Users,
    title: "Collaborative Partnership",
    description:
      "You're part of the team. We communicate regularly, involve you in decisions, and value your feedback. Success is our shared goal.",
  },
  {
    icon: Zap,
    title: "Agile & Iterative",
    description:
      "We don't lock everything in stone upfront. We adapt, refine, and improve as we go. Feedback is integrated continuously, not at the end.",
  },
  {
    icon: Clock,
    title: "Transparent Timelines",
    description:
      "You know exactly what to expect. Clear milestones, realistic timelines, and honest communication about delays or challenges.",
  },
  {
    icon: CheckCircle,
    title: "Quality Over Speed",
    description:
      "We'd rather deliver later than deliver buggy code. Quality, security, and performance are non-negotiable. We test thoroughly.",
  },
]

export default function HowWeWorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Our Process</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                How We Build Your Solution
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-xl text-muted-foreground text-pretty">
                Transparent, collaborative, and iterative. From discovery to launch, we keep you involved every step of
                the way.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <Section>
        <FadeIn>
          <SectionHeader
            eyebrow="Six-Phase Process"
            title="Our Development Methodology"
            description="We follow a structured, proven process that ensures quality, transparency, and success."
          />
        </FadeIn>

        <div className="max-w-4xl mx-auto mt-12 space-y-12">
          {processSteps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.1}>
              <div className="flex gap-6 lg:gap-8">
                {/* Timeline line and circle */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-2xl font-bold text-primary-foreground flex-shrink-0">
                    {step.icon}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-1 h-24 bg-gradient-to-b from-primary/40 to-primary/10 mt-4" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                      <p className="text-primary text-sm font-medium mt-1">Duration: {step.duration}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-lg mb-6">{step.description}</p>

                  <div className="bg-card border border-border rounded-lg p-6">
                    <p className="text-sm font-semibold text-foreground mb-3">Key Activities:</p>
                    <ul className="space-y-2">
                      {step.activities.map((activity, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Core Principles */}
      <Section className="bg-card">
        <FadeIn>
          <SectionHeader
            eyebrow="Our Philosophy"
            title="Core Working Principles"
            description="These principles guide everything we do"
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {principles.map((principle, index) => {
            const Icon = principle.icon
            return (
              <FadeIn key={principle.title} delay={index * 0.1}>
                <div className="flex gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 h-fit">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{principle.title}</h3>
                    <p className="text-muted-foreground text-sm">{principle.description}</p>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </Section>

      {/* Communication & Tools */}
      <Section>
        <FadeIn>
          <SectionHeader
            eyebrow="Collaboration"
            title="How We Communicate"
            description="Regular updates and transparent collaboration throughout your project"
          />
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <FadeIn>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-3">Weekly Check-ins</h3>
              <p className="text-muted-foreground text-sm">
                30-minute video calls every week to review progress, discuss demos, and gather feedback.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-3">Live Demos</h3>
              <p className="text-muted-foreground text-sm">
                See your project come to life in real-time. Provide feedback and suggestions immediately.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-3">Shared Documentation</h3>
              <p className="text-muted-foreground text-sm">
                All project details, decisions, and progress tracked in a shared project management system.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Timeline Expectations */}
      <Section className="bg-card">
        <FadeIn>
          <SectionHeader
            eyebrow="Typical Timelines"
            title="Project Duration Estimates"
            description="How long do different projects usually take?"
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <FadeIn>
            <div className="border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Basic Website</h3>
              <p className="text-primary font-bold text-2xl mb-3">2-3 weeks</p>
              <p className="text-muted-foreground text-sm">
                Business website with 5-10 pages, simple contact form, and blog.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Custom Web App</h3>
              <p className="text-primary font-bold text-2xl mb-3">8-12 weeks</p>
              <p className="text-muted-foreground text-sm">
                Full-stack application with database, user accounts, and custom features.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Business Automation</h3>
              <p className="text-primary font-bold text-2xl mb-3">6-12 weeks</p>
              <p className="text-muted-foreground text-sm">
                Workflow automation, integrations, and process optimization.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">AI Solution</h3>
              <p className="text-primary font-bold text-2xl mb-3">4-8 weeks</p>
              <p className="text-muted-foreground text-sm">AI chatbot, agent, or intelligent automation solution.</p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Post-Launch Support */}
      <Section>
        <FadeIn>
          <SectionHeader
            eyebrow="Beyond Launch"
            title="Our Commitment Continues"
            description="We don't disappear after launch. Your success is our success."
          />
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <p className="text-primary font-bold text-3xl mb-2">30-60 Days</p>
                  <p className="text-foreground font-semibold mb-2">Warranty Period</p>
                  <p className="text-muted-foreground text-sm">
                    We fix any bugs or issues at no additional cost during this period.
                  </p>
                </div>
                <div>
                  <p className="text-primary font-bold text-3xl mb-2">Ongoing</p>
                  <p className="text-foreground font-semibold mb-2">Performance Monitoring</p>
                  <p className="text-muted-foreground text-sm">
                    We monitor your system's health and performance, alerting you to any issues.
                  </p>
                </div>
                <div>
                  <p className="text-primary font-bold text-3xl mb-2">Optional</p>
                  <p className="text-foreground font-semibold mb-2">Maintenance Packages</p>
                  <p className="text-muted-foreground text-sm">
                    Monthly packages available for ongoing support, updates, and optimization.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-card">
        <FadeIn>
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Common Questions About Our Process</h2>
        </FadeIn>

        <div className="max-w-3xl mx-auto space-y-6">
          <FadeIn>
            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-foreground mb-2">Can you work with our existing systems?</h3>
              <p className="text-muted-foreground text-sm">
                Yes! Integration is one of our strengths. We can connect with virtually any system that has an API—CRMs,
                accounting software, payment gateways, and more.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-foreground mb-2">What happens if we need to make changes?</h3>
              <p className="text-muted-foreground text-sm">
                Changes are expected and welcomed. Reasonable changes within scope are accommodated as we go.
                Significant changes go through a change request process where we discuss impact on timeline and cost.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-foreground mb-2">Do you provide training?</h3>
              <p className="text-muted-foreground text-sm">
                Yes, training is included at launch. We'll teach your team how to use and manage the system. Additional
                training can be arranged if needed.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="border-l-2 border-primary pl-6">
              <h3 className="font-semibold text-foreground mb-2">What if there are issues after launch?</h3>
              <p className="text-muted-foreground text-sm">
                We provide 30-60 days of warranty support where we fix bugs at no cost. After that, we offer hourly
                support or monthly maintenance packages.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Ready to start your project?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's have a conversation about your goals and how we can help. First consultation is completely free.
            </p>
            <Button size="lg" asChild className="group">
              <Link href="/contact">
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </Section>

      <CTA />
    </>
  )
}
