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
  Star,
  MapPin,
  BarChart3,
  MessageSquare,
  Camera,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Tourism & Hotel Industry Solutions | Uttarakhand Web Development",
  description:
    "Digital solutions for hotels, resorts, homestays, and tour operators in Uttarakhand. Booking engines, property websites, and digital marketing.",
}

const solutions = [
  {
    icon: Calendar,
    title: "Booking Engine",
    description: "Direct bookings through your website with availability calendar and instant confirmation.",
  },
  {
    icon: Globe,
    title: "Property Website",
    description: "Beautiful websites that showcase your property and drive direct bookings.",
  },
  {
    icon: Star,
    title: "Review Integration",
    description: "Display reviews from Google, TripAdvisor, and Booking.com on your site.",
  },
  {
    icon: CreditCard,
    title: "Payment Processing",
    description: "Secure online payments and deposit collection for reservations.",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description: "Rank for local searches and appear in Google Maps results.",
  },
  {
    icon: BarChart3,
    title: "Revenue Analytics",
    description: "Track bookings, revenue, and occupancy with detailed reports.",
  },
  {
    icon: MessageSquare,
    title: "Guest Communication",
    description: "Automated emails, WhatsApp integration, and chatbot support.",
  },
  {
    icon: Camera,
    title: "Virtual Tours",
    description: "360° virtual tours and video content to showcase your property.",
  },
]

export default function TourismHotelsPage() {
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
                  Tourism & Hotel Industry Solutions
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-6 text-xl text-muted-foreground text-pretty">
                  Digital solutions for hotels, resorts, homestays, and tour operators in Uttarakhand. Drive direct
                  bookings, reduce OTA commissions, and deliver exceptional guest experiences.
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
              <img src="/himalayan-hotel-resort-tourism.jpg" alt="Himalayan hotel" className="rounded-2xl w-full" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Problem */}
      <Section className="pt-0">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">The Challenge</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Stop paying 15-20% commissions to OTAs
              </h2>
              <p className="text-muted-foreground mb-6">
                Online travel agencies like MakeMyTrip and Booking.com charge hefty commissions on every booking. A
                strong direct booking strategy can significantly increase your profit margins while giving you more
                control over the guest relationship.
              </p>
              <ul className="space-y-3">
                {[
                  "High OTA commission fees eating into margins",
                  "No direct relationship with guests",
                  "Difficult to stand out among competitors",
                  "Limited control over pricing and availability",
                  "Missing out on repeat guest bookings",
                  "Outdated website not converting visitors",
                ].map((challenge, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                    <span className="text-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="p-8 bg-card border border-border rounded-2xl">
              <h3 className="text-xl font-semibold text-foreground mb-4">Direct Booking Benefits</h3>
              <ul className="space-y-4">
                {[
                  { metric: "15-20%", label: "Save on OTA commissions" },
                  { metric: "Direct", label: "Guest relationship ownership" },
                  { metric: "Higher", label: "Repeat booking rates" },
                  { metric: "More", label: "Control over pricing" },
                ].map((benefit) => (
                  <li key={benefit.label} className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-primary w-20">{benefit.metric}</span>
                    <span className="text-foreground">{benefit.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Solutions */}
      <Section className="bg-card">
        <FadeIn>
          <SectionHeader
            eyebrow="Our Solutions"
            title="Everything your property needs online"
            description="From booking engines to guest communication, we provide complete digital solutions for hospitality."
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
              src="/dehradun-rishikesh-uttarakhand-landscape-mountains.jpg"
              alt="Uttarakhand tourism"
              className="rounded-2xl w-full"
            />
          </FadeIn>
          <FadeIn>
            <div>
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                We understand Uttarakhand tourism
              </h2>
              <p className="text-muted-foreground mb-6">
                From hill stations to pilgrimage centers, from adventure tourism to wellness retreats, we've helped
                properties across Uttarakhand establish their digital presence and drive direct bookings.
              </p>
              <ul className="space-y-3">
                {[
                  "Experience with hotels, resorts, and homestays",
                  "Understanding of seasonal tourism patterns",
                  "Integration with Indian payment gateways",
                  "Multi-language support for international guests",
                  "Local SEO for destination-based searches",
                  "Ongoing support during peak seasons",
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
