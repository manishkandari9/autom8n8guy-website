import type { Metadata } from "next"
import Link from "next/link"
import { Section } from "@/components/ui/section"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, CheckCircle, Globe, TrendingUp, Users, Calendar } from "lucide-react"
import { CTA } from "@/components/home/cta"

export const metadata: Metadata = {
  title: "Himalayan Yoga Retreat Case Study | Website & Booking System",
  description:
    "How we helped a Rishikesh yoga retreat center increase online bookings by 250% with a modern website and integrated booking system.",
}

const stats = [
  { label: "Increase in Online Bookings", value: "250%", icon: TrendingUp },
  { label: "Revenue from Website", value: "40%", icon: Calendar },
  { label: "Google Ranking", value: "Top 3", icon: Globe },
  { label: "International Visitors", value: "65%", icon: Users },
]

const challenges = [
  "Outdated website that didn't reflect the quality of their retreat experience",
  "No online booking—all reservations via email back-and-forth",
  "Poor mobile experience despite most traffic coming from phones",
  "Not ranking for key search terms like 'yoga retreat rishikesh'",
  "No integration with international payment methods",
  "Manual process for confirmations, reminders, and follow-ups",
]

const solutions = [
  {
    title: "Modern, Conversion-Focused Website",
    description:
      "Built a stunning website using Next.js that showcases the retreat's beautiful location, programs, and testimonials. Optimized for both aesthetics and conversion.",
  },
  {
    title: "Integrated Booking System",
    description:
      "Custom booking system allowing guests to check availability, select programs, and book instantly. Calendar syncs with their operational systems.",
  },
  {
    title: "Multi-Currency Payments",
    description:
      "Integrated Razorpay with international card support and currency conversion. Guests can pay in USD, EUR, or INR seamlessly.",
  },
  {
    title: "Automated Guest Journey",
    description:
      "Automated confirmation emails, pre-arrival information packets, reminder messages, and post-stay review requests.",
  },
  {
    title: "Local SEO Optimization",
    description:
      "Comprehensive SEO strategy targeting 'yoga retreat rishikesh', 'yoga teacher training india', and related high-intent keywords.",
  },
  {
    title: "Mobile-First Design",
    description:
      "Designed for mobile first, ensuring fast loading and smooth booking experience on phones where 70%+ of traffic comes from.",
  },
]

const techStack = ["Next.js", "Tailwind CSS", "PostgreSQL", "Razorpay", "SendGrid", "WhatsApp API", "Vercel"]

const timeline = [
  {
    phase: "Discovery & Planning",
    duration: "1 week",
    description: "Understanding the retreat's unique offerings and booking needs.",
  },
  { phase: "Design", duration: "2 weeks", description: "Creating visual designs that capture the spiritual essence." },
  { phase: "Development", duration: "4 weeks", description: "Building the website, booking system, and integrations." },
  {
    phase: "Testing & Launch",
    duration: "1 week",
    description: "Thorough testing with real bookings before going live.",
  },
]

export default function YogaRetreatCaseStudy() {
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
                  <Globe className="h-3 w-3 text-primary" />
                  <span className="text-sm font-medium text-primary">Business Website</span>
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                  Himalayan Yoga Retreat
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-6 text-xl text-muted-foreground text-pretty">
                  Complete digital transformation for a yoga retreat center in Rishikesh—from a dated website to a
                  modern booking powerhouse that attracts international guests.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="group">
                    <Link href="/contact">
                      Start Similar Project
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <img
                src="/yoga-retreat-website-mockup-on-laptop-and-phone.jpg"
                alt="Himalayan Yoga Retreat Website"
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
                A beautiful retreat hidden from the digital world
              </h2>
              <p className="text-muted-foreground mb-6">
                Himalayan Yoga Retreat offers transformative experiences in one of the most spiritual locations in the
                world. But their outdated website and manual booking process meant they were missing out on the growing
                wave of international wellness travelers searching online.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground mb-4">Key challenges we identified:</h3>
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
              A digital experience worthy of the retreat
            </h2>
          </div>
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <StaggerItem key={solution.title}>
              <div className="p-6 bg-card border border-border rounded-xl h-full">
                <h3 className="text-lg font-semibold text-foreground mb-3">{solution.title}</h3>
                <p className="text-muted-foreground text-sm">{solution.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Tech Stack */}
      <Section className="bg-card">
        <FadeIn>
          <div className="text-center mb-8">
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Technology</p>
            <h2 className="text-2xl font-bold text-foreground">Built with modern tools</h2>
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
      </Section>

      {/* Timeline */}
      <Section>
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Timeline</p>
            <h2 className="text-3xl font-bold text-foreground">8 weeks to transformation</h2>
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
                From hidden gem to top destination
              </h2>
              <p className="text-muted-foreground mb-6">
                Within 6 months of launch, Himalayan Yoga Retreat saw dramatic improvements across all metrics. The new
                website became their primary booking channel, reducing dependency on third-party platforms.
              </p>
              <ul className="space-y-4">
                {[
                  "250% increase in direct online bookings",
                  "40% of total revenue now comes through the website",
                  "Top 3 Google ranking for 'yoga retreat rishikesh'",
                  "65% of bookings from international visitors",
                  "90% reduction in booking-related email volume",
                  "4.9 star average from post-stay reviews",
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
                "The new website has transformed our business. We went from spending hours on booking emails to having a
                system that works while we focus on our guests. The team understood exactly what we needed."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">AK</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Anand Kumar</p>
                  <p className="text-sm text-muted-foreground">Founder, Himalayan Yoga Retreat</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Related Projects */}
      <Section>
        <FadeIn>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">Similar Projects</h2>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" asChild className="bg-transparent">
              <Link href="/projects/coaching-institute-automation">Coaching Institute Automation</Link>
            </Button>
            <Button variant="outline" asChild className="bg-transparent">
              <Link href="/projects/hotel-ai-concierge">Hotel AI Concierge</Link>
            </Button>
            <Button variant="outline" asChild className="bg-transparent">
              <Link href="/services/web-development/business-websites">Business Website Services</Link>
            </Button>
          </div>
        </FadeIn>
      </Section>

      <CTA />
    </>
  )
}
