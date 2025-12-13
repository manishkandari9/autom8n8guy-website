import type { Metadata } from "next"
import Link from "next/link"
import { Section } from "@/components/ui/section"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, CheckCircle, Bot, Globe, Clock, Star } from "lucide-react"
import { CTA } from "@/components/home/cta"

export const metadata: Metadata = {
  title: "Hotel AI Concierge Case Study | Multilingual Guest Assistant",
  description:
    "How we built a multilingual AI concierge that handles 65% of guest queries automatically for a hotel chain in Uttarakhand.",
}

const stats = [
  { label: "Queries Resolved by AI", value: "65%", icon: Bot },
  { label: "Guest Response Time", value: "<30s", icon: Clock },
  { label: "Languages Supported", value: "12", icon: Globe },
  { label: "Guest Satisfaction", value: "4.8★", icon: Star },
]

const challenges = [
  "International guests messaging at all hours in different languages",
  "Front desk overwhelmed during peak check-in/check-out times",
  "Inconsistent information given by different staff members",
  "No way to handle inquiries on WhatsApp efficiently",
  "Repeat questions about WiFi, breakfast, local attractions wasting staff time",
  "Lost booking opportunities when website visitors had questions",
]

const aiCapabilities = [
  {
    title: "Multilingual Conversations",
    description:
      "Automatically detects and responds in guest's language—English, Hindi, Spanish, German, French, Russian, and more.",
  },
  {
    title: "Booking Assistance",
    description:
      "Checks room availability, explains rates and packages, and guides guests through the booking process.",
  },
  {
    title: "Guest Services",
    description: "Handles requests for room service, housekeeping, spa appointments, and restaurant reservations.",
  },
  {
    title: "Local Recommendations",
    description:
      "Suggests restaurants, attractions, and activities based on guest preferences and real-time availability.",
  },
  {
    title: "FAQ Resolution",
    description: "Instantly answers common questions about check-in times, amenities, policies, and facilities.",
  },
  {
    title: "Smart Handoff",
    description: "Recognizes when human assistance is needed and seamlessly transfers to staff with full context.",
  },
]

const techStack = ["OpenAI GPT-4", "LangChain", "WhatsApp Business API", "Next.js", "PostgreSQL", "Redis"]

const conversationExample = [
  { role: "guest", message: "Hola, ¿tienen habitaciones disponibles para este fin de semana?", language: "Spanish" },
  {
    role: "ai",
    message:
      "¡Hola! Sí, tenemos habitaciones disponibles para este fin de semana. ¿Para cuántas personas sería la reserva y qué tipo de habitación prefiere? Tenemos habitaciones estándar, deluxe con vista a las montañas, y suites.",
    language: "Spanish",
  },
  { role: "guest", message: "Deluxe para 2 personas. What's the rate?", language: "Spanish/English" },
  {
    role: "ai",
    message:
      "Our Deluxe Mountain View room for 2 guests is ₹8,500 per night, which includes breakfast, WiFi, and access to the spa. For the weekend (Friday-Sunday), the total would be ₹17,000. Shall I check the specific availability and reserve it for you?",
    language: "English",
  },
]

export default function HotelAIConcierge() {
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
                  <Bot className="h-3 w-3 text-primary" />
                  <span className="text-sm font-medium text-primary">AI Solution</span>
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                  Mountain View Hotels
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-6 text-xl text-muted-foreground text-pretty">
                  Multilingual AI concierge that provides 24/7 guest support across WhatsApp and website, handling
                  everything from bookings to local recommendations.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild className="group">
                    <Link href="/contact">
                      Build Your AI Concierge
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <img
                src="/hotel-ai-chatbot-interface-phone-mockup-modern.jpg"
                alt="Mountain View Hotels AI Concierge"
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
                Global guests, limited staff hours
              </h2>
              <p className="text-muted-foreground mb-6">
                Mountain View Hotels serves international travelers from across the globe. Guests message in different
                languages at all hours—when it's evening in Europe, it's the middle of the night in India. The front
                desk couldn't keep up.
              </p>
              <p className="text-muted-foreground">
                They needed a solution that could provide instant, accurate responses in any language, 24/7, without
                losing the personal touch that hospitality demands.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground mb-4">The guest experience problems:</h3>
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

      {/* Conversation Example */}
      <Section>
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">In Action</p>
            <h2 className="text-3xl font-bold text-foreground mb-6">Real multilingual conversation</h2>
            <p className="text-muted-foreground">The AI seamlessly switches between languages within a conversation.</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-2xl mx-auto bg-card border border-border rounded-2xl p-6">
            <div className="space-y-4">
              {conversationExample.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === "guest" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl ${
                      msg.role === "guest"
                        ? "bg-primary text-primary-foreground rounded-br-none"
                        : "bg-secondary text-secondary-foreground rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm">{msg.message}</p>
                    <p
                      className={`text-xs mt-2 ${
                        msg.role === "guest" ? "text-primary-foreground/70" : "text-muted-foreground"
                      }`}
                    >
                      {msg.language}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* AI Capabilities */}
      <Section className="bg-card">
        <FadeIn>
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              What the AI concierge handles
            </h2>
          </div>
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiCapabilities.map((capability) => (
            <StaggerItem key={capability.title}>
              <div className="p-6 bg-background border border-border rounded-xl h-full">
                <h3 className="text-lg font-semibold text-foreground mb-3">{capability.title}</h3>
                <p className="text-muted-foreground text-sm">{capability.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Tech Stack */}
      <Section>
        <FadeIn>
          <div className="text-center mb-8">
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Technology</p>
            <h2 className="text-2xl font-bold text-foreground">Built with cutting-edge AI</h2>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <div key={tech} className="px-5 py-3 bg-card border border-border rounded-full">
                <span className="text-foreground font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Results */}
      <Section className="bg-card">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">The Results</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Guest satisfaction up, staff workload down
              </h2>
              <p className="text-muted-foreground mb-6">
                The AI concierge launched across all three Mountain View Hotels properties. Within 2 months, the impact
                on both guest experience and operations was remarkable.
              </p>
              <ul className="space-y-4">
                {[
                  "65% of all guest queries resolved without human intervention",
                  "Average response time dropped from 2 hours to under 30 seconds",
                  "Guest satisfaction scores improved from 4.2 to 4.8 stars",
                  "Front desk can focus on high-value guest interactions",
                  "15% increase in direct bookings through AI-assisted flow",
                  "Handling guests in 12 languages automatically",
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
                "Our guests love getting instant responses at any hour, in their own language. The AI feels like a
                knowledgeable local friend, not a robot. And our staff can now focus on creating memorable experiences."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">PG</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Priya Gupta</p>
                  <p className="text-sm text-muted-foreground">General Manager, Mountain View Hotels</p>
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
              <Link href="/projects/coaching-institute-automation">Coaching Automation</Link>
            </Button>
            <Button variant="outline" asChild className="bg-transparent">
              <Link href="/services/ai/chatbots">AI Chatbot Services</Link>
            </Button>
          </div>
        </FadeIn>
      </Section>

      <CTA />
    </>
  )
}
