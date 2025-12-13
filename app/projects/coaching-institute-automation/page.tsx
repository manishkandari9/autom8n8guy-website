import type { Metadata } from "next"
import Link from "next/link"
import { Section } from "@/components/ui/section"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, CheckCircle, Workflow, Clock, Users, TrendingDown } from "lucide-react"
import { CTA } from "@/components/home/cta"

export const metadata: Metadata = {
  title: "Coaching Institute Automation Case Study | Custom Go System",
  description:
    "How we built a custom Go-based automation system that reduced admin work by 80% for a competitive exam coaching center in Dehradun.",
}

const stats = [
  { label: "Reduction in Admin Work", value: "80%", icon: TrendingDown },
  { label: "On-time Fee Collection", value: "95%", icon: Clock },
  { label: "Lost Inquiries", value: "Zero", icon: Users },
  { label: "ROI Achieved", value: "3 months", icon: TrendingDown },
]

const challenges = [
  "Staff spending 4+ hours daily on data entry and follow-ups",
  "Inquiry leads getting lost between calls, walk-ins, and website",
  "Manual fee tracking leading to 30% delayed payments",
  "No system to track which marketing channels brought students",
  "Parent complaints about lack of communication",
  "Inability to scale operations for planned expansion",
]

const systemComponents = [
  {
    title: "Lead Capture & CRM",
    description:
      "All inquiries from website, phone, walk-ins, and ads captured in one place. Automatic lead scoring and assignment to counselors.",
  },
  {
    title: "Admission Workflow",
    description:
      "Digital application forms, document uploads, verification workflow, and automated status updates to applicants.",
  },
  {
    title: "Fee Management",
    description:
      "Fee structure management, installment plans, automatic invoicing, payment reminders, and receipt generation.",
  },
  {
    title: "Parent Communication",
    description:
      "Automated WhatsApp and SMS for fee reminders, attendance alerts, exam schedules, and result notifications.",
  },
  {
    title: "Attendance Tracking",
    description: "Digital attendance with instant parent notifications for absences. Attendance reports for analysis.",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Real-time insights into inquiries, conversions, revenue, attendance, and marketing ROI across branches.",
  },
]

const techStack = ["Go (Golang)", "PostgreSQL", "Redis", "WhatsApp Business API", "Razorpay", "Docker", "AWS"]

const timeline = [
  {
    phase: "Discovery",
    duration: "2 weeks",
    description: "Mapping all processes, pain points, and automation opportunities.",
  },
  {
    phase: "Architecture",
    duration: "1 week",
    description: "Designing the system architecture and integration points.",
  },
  {
    phase: "Development",
    duration: "8 weeks",
    description: "Building core modules with iterative feedback from the team.",
  },
  {
    phase: "Training & Launch",
    duration: "2 weeks",
    description: "Staff training, data migration, and phased rollout.",
  },
]

export default function CoachingAutomationCaseStudy() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-4">
                  <Workflow className="h-3 w-3 text-primary" />
                  <span className="text-sm font-medium text-primary">Automation System</span>
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                  Excel Coaching Academy
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-6 text-xl text-muted-foreground text-pretty">
                  Custom Go-based automation system that transformed operations for a competitive exam coaching
                  center—from chaotic manual processes to streamlined efficiency.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="group">
                    <Link href="/contact">
                      Automate Your Institute
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <img
                src="/coaching-institute-dashboard-automation-system-ana.jpg"
                alt="Excel Coaching Academy Automation Dashboard"
                className="rounded-2xl w-full"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Section className="pt-0">
        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="p-6 bg-card border border-border rounded-xl text-center">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Challenge */}
      <Section className="bg-card">
        <div className="grid lg:grid-cols-2 gap-16">
          <FadeIn>
            <div>
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">The Challenge</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Drowning in paperwork and spreadsheets
              </h2>
              <p className="text-muted-foreground mb-6">
                Excel Coaching Academy had grown from a single center to three branches in Dehradun, but their processes
                hadn't evolved. Staff were buried in administrative work, inquiries fell through cracks, and fee
                collection was a constant struggle.
              </p>
              <p className="text-muted-foreground">
                They tried off-the-shelf school management software, but it was too rigid for their specific
                needs—especially around their unique fee structures and counseling workflows.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground mb-4">The operational reality:</h3>
              {challenges.map((challenge, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-muted-foreground">{challenge}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Solution */}
      <Section>
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">The Solution</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Custom automation built for how they actually work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Instead of forcing them into a generic system, we built a custom Go-based platform that mirrors their
              actual processes—then made those processes run automatically.
            </p>
          </div>
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {systemComponents.map((component) => (
            <StaggerItem key={component.title}>
              <div className="p-6 bg-card border border-border rounded-xl h-full">
                <h3 className="text-lg font-semibold text-foreground mb-3">{component.title}</h3>
                <p className="text-muted-foreground text-sm">{component.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Why Go */}
      <Section className="bg-card">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Technology Choice</p>
              <h2 className="text-3xl font-bold text-foreground mb-6 text-balance">Why we built with Go</h2>
              <p className="text-muted-foreground mb-6">
                We chose Go (Golang) for this project because the coaching center needed a system that would handle
                growing load as they expand, run reliably 24/7, and be efficient with server resources.
              </p>
              <ul className="space-y-3">
                {[
                  "Handles thousands of concurrent operations effortlessly",
                  "Low memory footprint keeps hosting costs minimal",
                  "Fast compilation means quicker iterations",
                  "Built-in concurrency for real-time notifications",
                  "Simple deployment with single binary files",
                  "No runtime dependencies or version conflicts",
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
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <div key={tech} className="px-5 py-3 bg-background border border-border rounded-full">
                  <span className="text-foreground font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Timeline */}
      <Section>
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Timeline</p>
            <h2 className="text-3xl font-bold text-foreground">13 weeks from chaos to control</h2>
          </div>
        </FadeIn>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {timeline.map((phase, index) => (
            <StaggerItem key={phase.phase}>
              <div>
                <span className="text-5xl font-bold text-primary/20">0{index + 1}</span>
                <h3 className="text-xl font-semibold text-foreground mt-2">{phase.phase}</h3>
                <p className="text-primary font-medium text-sm mt-1">{phase.duration}</p>
                <p className="text-muted-foreground text-sm mt-2">{phase.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Results */}
      <Section className="bg-card">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">The Results</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Operations transformed, growth unlocked
              </h2>
              <p className="text-muted-foreground mb-6">
                Within 3 months of full deployment, Excel Coaching Academy saw dramatic improvements. The system paid
                for itself through improved fee collection alone.
              </p>
              <ul className="space-y-4">
                {[
                  "Admin staff reduced from 8 to 3 across branches",
                  "Fee collection improved from 70% to 95% on-time",
                  "Zero inquiry leads lost—100% follow-up rate",
                  "Parent satisfaction scores increased significantly",
                  "Ready to scale to 2 new branches with same team",
                  "Complete visibility into marketing ROI for first time",
                ].map((result, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="p-8 bg-background border border-border rounded-2xl">
              <blockquote className="text-lg text-foreground italic mb-6">
                "We were skeptical about custom software—we'd been burned before. But the Autom8n8 team understood our
                business first, then built exactly what we needed. The ROI has been incredible."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">RS</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Rajesh Sharma</p>
                  <p className="text-sm text-muted-foreground">Director, Excel Coaching Academy</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Related */}
      <Section>
        <FadeIn>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">Related Projects</h2>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" asChild className="bg-transparent">
              <Link href="/projects/himalayan-yoga-retreat-website">Yoga Retreat Website</Link>
            </Button>
            <Button variant="outline" asChild className="bg-transparent">
              <Link href="/projects/hotel-ai-concierge">Hotel AI Concierge</Link>
            </Button>
            <Button variant="outline" asChild className="bg-transparent">
              <Link href="/services/automation/custom-automation">Custom Automation Services</Link>
            </Button>
          </div>
        </FadeIn>
      </Section>

      <CTA />
    </>
  )
}
