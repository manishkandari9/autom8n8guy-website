import type { Metadata } from "next"
import { Section, SectionHeader } from "@/components/ui/section"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { CTA } from "@/components/home/cta"
import { Target, Lightbulb, Users, MapPin, Code2, Zap, Bot, Database } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | IT Services Agency in Dehradun & Rishikesh",
  description:
    "Learn about TechCraft Solutions - your trusted IT partner in Uttarakhand. We provide web development, automation, and AI solutions for local businesses.",
}

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on delivering measurable outcomes that drive real business growth.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We leverage cutting-edge technologies to build future-proof solutions.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our priority. We work as an extension of your team.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "Deep understanding of the Uttarakhand business landscape and community.",
  },
]

const techStack = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "n8n", category: "Automation" },
  { name: "OpenAI", category: "AI" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "AWS", category: "Cloud" },
  { name: "Vercel", category: "Deployment" },
]

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">About TechCraft</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Building digital excellence for Uttarakhand businesses
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-xl text-muted-foreground text-pretty">
                We're a team of passionate technologists based in Dehradun, dedicated to helping local businesses thrive
                in the digital age through innovative web solutions, smart automation, and AI-powered tools.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Section className="pt-0">
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-card border border-border rounded-2xl">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</p>
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Who We Are */}
      <Section className="bg-card">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Who We Are</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Your local technology partner
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  TechCraft Solutions was founded with a simple mission: to bring world-class digital solutions to
                  businesses in Uttarakhand. We understand that local businesses often struggle to find reliable
                  technology partners who truly understand their unique challenges.
                </p>
                <p>
                  Whether you're a yoga studio in Rishikesh looking to expand your online presence, a hotel in Dehradun
                  needing a modern booking system, or a startup with ambitious growth plans, we have the expertise and
                  passion to bring your vision to life.
                </p>
                <p>
                  Our team combines deep technical expertise with a genuine understanding of the local business
                  landscape, allowing us to create solutions that are not just technically excellent but also perfectly
                  suited to your market.
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative">
              <img src="/modern-tech-team-working-in-mountain-office-dehrad.jpg" alt="TechCraft team" className="rounded-2xl w-full" />
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Problems We Solve */}
      <Section>
        <FadeIn>
          <SectionHeader
            eyebrow="Problems We Solve"
            title="Challenges we help businesses overcome"
            description="We address the most common digital challenges faced by businesses in Uttarakhand."
          />
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-2 gap-6">
          <StaggerItem>
            <div className="p-8 bg-card border border-border rounded-2xl">
              <Code2 className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Outdated Online Presence</h3>
              <p className="text-muted-foreground">
                Many businesses struggle with outdated websites that don't convert visitors into customers. We build
                modern, fast, and conversion-optimized websites that establish trust and drive leads.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="p-8 bg-card border border-border rounded-2xl">
              <Zap className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Manual & Time-Consuming Processes</h3>
              <p className="text-muted-foreground">
                Repetitive tasks eat into productivity. Our automation solutions streamline operations, from CRM updates
                to email marketing, freeing your team to focus on what matters.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="p-8 bg-card border border-border rounded-2xl">
              <Bot className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Missing Out on AI Opportunities</h3>
              <p className="text-muted-foreground">
                AI is transforming business, but many don't know where to start. We help you leverage AI chatbots,
                intelligent automation, and custom AI tools to gain a competitive edge.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="p-8 bg-card border border-border rounded-2xl">
              <Database className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Scattered Data & Systems</h3>
              <p className="text-muted-foreground">
                Disconnected tools lead to data silos and inefficiency. We build integrated systems and custom
                applications that centralize your operations and provide actionable insights.
              </p>
            </div>
          </StaggerItem>
        </StaggerChildren>
      </Section>

      {/* Our Values */}
      <Section className="bg-card">
        <FadeIn>
          <SectionHeader
            eyebrow="Our Values"
            title="What drives us every day"
            description="The principles that guide everything we do."
          />
        </FadeIn>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <StaggerItem key={value.title}>
              <div className="text-center">
                <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Technology Stack */}
      <Section>
        <FadeIn>
          <SectionHeader
            eyebrow="Our Tech Stack"
            title="Technologies we work with"
            description="We use modern, proven technologies to build scalable and maintainable solutions."
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="px-5 py-3 bg-card border border-border rounded-full hover:border-primary/50 transition-colors"
              >
                <span className="text-foreground font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Local Focus */}
      <Section className="bg-card">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn delay={0.2}>
            <div className="relative order-2 lg:order-1">
              <img src="/dehradun-rishikesh-uttarakhand-landscape-mountains.jpg" alt="Dehradun and Rishikesh" className="rounded-2xl w-full" />
            </div>
          </FadeIn>
          <FadeIn className="order-1 lg:order-2">
            <div>
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Local Focus</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Proudly serving Dehradun & Rishikesh
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  As a locally-based team, we have deep roots in the Uttarakhand community. We understand the unique
                  opportunities and challenges that businesses face in this region, from the thriving yoga and wellness
                  industry in Rishikesh to the growing startup ecosystem in Dehradun.
                </p>
                <p>
                  Our local presence means we're always available for face-to-face meetings, quick consultations, and
                  ongoing support. We're not just a vendor—we're your neighbor and partner in growth.
                </p>
                <p>
                  We're committed to contributing to the digital transformation of Uttarakhand, helping local businesses
                  compete on a global scale while maintaining their unique local character.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <CTA />
    </>
  )
}
