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
  GraduationCap,
  Globe,
  Users,
  Calendar,
  CreditCard,
  Bell,
  BarChart3,
  MessageSquare,
} from "lucide-react"
import { CTA } from "@/components/home/cta"

export const metadata: Metadata = {
  title: "IT Solutions for Education | Schools, Coaching & Institutes",
  description:
    "Digital solutions for educational institutions in Dehradun and Rishikesh. Websites, automation, and AI tools for schools, coaching centers, and training institutes.",
  keywords: [
    "education technology dehradun",
    "school website development",
    "coaching center automation",
    "institute management software",
    "education IT solutions uttarakhand",
  ],
}

const challenges = [
  {
    title: "Outdated Online Presence",
    description:
      "Generic, template websites that don't reflect the quality of your institution or attract modern students.",
  },
  {
    title: "Manual Admission Processes",
    description: "Paper forms, manual data entry, and tracking spreadsheets that waste time and create errors.",
  },
  {
    title: "Parent Communication Gaps",
    description: "Difficulty keeping parents informed about fees, attendance, results, and important updates.",
  },
  {
    title: "Fee Collection Chaos",
    description: "Chasing payments, tracking defaulters, and managing multiple payment modes manually.",
  },
  {
    title: "Lead Management Issues",
    description: "Inquiries from website, calls, and walk-ins getting lost without proper follow-up.",
  },
  {
    title: "Scaling Limitations",
    description: "Operations that worked for 100 students breaking down at 500 or 1000.",
  },
]

const solutions = [
  {
    icon: Globe,
    title: "Professional Institutional Websites",
    description:
      "Modern, mobile-friendly websites that showcase your institution, programs, faculty, and facilities. SEO-optimized to attract local searches.",
    href: "/services/web-development/business-websites",
  },
  {
    icon: Users,
    title: "Online Admission Systems",
    description:
      "Digital admission forms, document uploads, application tracking, and automated communications throughout the admission journey.",
    href: "/services/automation/custom-automation",
  },
  {
    icon: Calendar,
    title: "Class & Schedule Management",
    description: "Automated scheduling, teacher allocation, classroom management, and timetable generation.",
    href: "/services/automation/custom-automation",
  },
  {
    icon: CreditCard,
    title: "Fee Management Automation",
    description:
      "Online fee payment, automatic reminders, receipt generation, and defaulter tracking—integrated with your accounts.",
    href: "/services/automation/custom-automation",
  },
  {
    icon: Bell,
    title: "Parent Communication Systems",
    description:
      "WhatsApp and SMS automation for attendance alerts, fee reminders, result notifications, and announcements.",
    href: "/services/automation/custom-automation",
  },
  {
    icon: MessageSquare,
    title: "AI Inquiry Assistants",
    description: "Chatbots that answer prospective student/parent questions 24/7, qualify leads, and schedule visits.",
    href: "/services/ai/chatbots",
  },
]

const benefits = [
  "Attract more students with professional online presence",
  "Reduce admission paperwork by 80%",
  "Improve fee collection rates significantly",
  "Keep parents informed without manual effort",
  "Never lose an inquiry or lead again",
  "Scale operations without proportional staff increase",
  "Get insights into enrollment, fees, and performance",
  "Free staff for teaching and student support",
]

const faqs = [
  {
    question: "What kind of educational institutions do you work with?",
    answer:
      "We work with schools (K-12), coaching centers, competitive exam institutes (IIT-JEE, NEET, UPSC), skill training centers, yoga teacher training schools, language institutes, and universities. Our solutions adapt to the specific needs of each type of institution.",
  },
  {
    question: "Can you integrate with our existing school management software?",
    answer:
      "Yes, we can integrate with popular school ERP systems and management software. If you're using spreadsheets or manual systems, we can build custom solutions or help you migrate to modern tools.",
  },
  {
    question: "How do you handle fee payment integration?",
    answer:
      "We integrate with payment gateways like Razorpay, PayU, and CCAvenue that support all Indian payment modes—UPI, cards, net banking, and EMI options. Fee records automatically sync with your accounting system.",
  },
  {
    question: "Is the parent communication system compliant with messaging regulations?",
    answer:
      "Yes, we use DLT-registered templates for SMS and official WhatsApp Business API for communications. All messages are opt-in based and compliant with TRAI regulations.",
  },
  {
    question: "What's the typical investment for a coaching center?",
    answer:
      "A professional website starts from ₹35,000. Admission and fee automation typically ranges from ₹75,000-₹1,50,000. AI chatbots for inquiry handling start from ₹40,000. We recommend starting with the highest-impact area and expanding from there.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "A website can be ready in 2-3 weeks. Automation systems typically take 4-8 weeks depending on complexity. We time implementations to avoid disrupting ongoing sessions, often launching during vacation periods.",
  },
]

export default function EducationIndustryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 text-primary mb-4">
                <GraduationCap className="h-5 w-5" />
                <span className="font-medium text-sm">Education & Training</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Technology Solutions for Educational Institutions
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-xl text-muted-foreground text-pretty">
                Help your school, coaching center, or training institute operate more efficiently. From professional
                websites to admission automation and AI-powered inquiry handling, we build technology that lets
                educators focus on teaching.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="group">
                  <Link href="/contact">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent">
                  <Link href="/projects">View Education Projects</Link>
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
            eyebrow="The Challenges"
            title="Problems facing educational institutions today"
            description="Running an educational institution in Dehradun or Rishikesh comes with unique operational challenges."
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
            eyebrow="Our Solutions"
            title="How we help educational institutions"
            description="Purpose-built technology solutions that address the real challenges of running an educational institution."
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

      {/* Process */}
      <Section>
        <FadeIn>
          <SectionHeader
            eyebrow="Our Approach"
            title="How we work with educational institutions"
            description="A structured process that respects academic schedules and institutional requirements."
          />
        </FadeIn>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Understand",
              description: "Deep dive into your institution's operations, pain points, and growth goals.",
            },
            {
              step: "02",
              title: "Plan",
              description: "Design solutions that fit your budget, timeline, and technical capabilities.",
            },
            {
              step: "03",
              title: "Build",
              description: "Develop and test with your feedback, training staff along the way.",
            },
            {
              step: "04",
              title: "Support",
              description: "Launch with full support and continue optimizing based on results.",
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

      {/* Benefits */}
      <Section className="bg-card">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Benefits</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Why educational institutions choose us
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="p-8 bg-background border border-border rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Measurable Results</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="text-3xl font-bold text-primary">80%</div>
                  <p className="text-muted-foreground">Reduction in admission paperwork</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">3x</div>
                  <p className="text-muted-foreground">Improvement in inquiry response time</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <p className="text-muted-foreground">On-time fee collection rate</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <SectionHeader
              eyebrow="FAQ"
              title="Common questions from educational institutions"
              description="Answers to questions we frequently hear from schools and coaching centers."
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
