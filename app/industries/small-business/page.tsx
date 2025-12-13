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
  Store,
  Globe,
  ShoppingCart,
  Workflow,
  MessageSquare,
  BarChart3,
  IndianRupee,
  Clock,
} from "lucide-react"
import { CTA } from "@/components/home/cta"

export const metadata: Metadata = {
  title: "IT Solutions for Small Businesses | Affordable Technology Services",
  description:
    "Affordable websites, automation, and AI solutions for small businesses in Dehradun and Rishikesh. Get professional technology without enterprise budgets.",
  keywords: [
    "small business website dehradun",
    "affordable IT solutions",
    "SME technology services",
    "small business automation",
    "local business digital solutions",
  ],
}

const challenges = [
  {
    title: "Limited Budget for Technology",
    description: "Enterprise solutions are too expensive, but doing nothing means falling behind competitors.",
  },
  {
    title: "No Online Presence",
    description: "Potential customers can't find you online, or your outdated website drives them away.",
  },
  {
    title: "Manual Operations Eating Profits",
    description: "Time spent on data entry, invoicing, and follow-ups could be spent growing the business.",
  },
  {
    title: "Missed Customer Inquiries",
    description: "Calls and messages during busy hours go unanswered, losing potential sales.",
  },
  {
    title: "No Technical Expertise",
    description: "Confusion about what technology you actually need and who to trust for implementation.",
  },
  {
    title: "Fear of Complexity",
    description: "Worry that new systems will be too complicated for your team to use.",
  },
]

const solutions = [
  {
    icon: Globe,
    title: "Professional Business Websites",
    description:
      "Clean, fast websites that establish credibility and attract customers. Designed for your budget with no compromise on quality.",
    href: "/services/web-development/business-websites",
  },
  {
    icon: ShoppingCart,
    title: "Simple E-commerce Solutions",
    description:
      "Start selling online with easy-to-manage stores. Indian payment gateways, inventory management, and order tracking.",
    href: "/services/web-development/ecommerce",
  },
  {
    icon: Workflow,
    title: "Operational Automation",
    description:
      "Automate invoicing, follow-ups, inventory alerts, and routine tasks. More time for customers, less on paperwork.",
    href: "/services/automation/custom-automation",
  },
  {
    icon: MessageSquare,
    title: "Customer Service Automation",
    description: "WhatsApp bots and chatbots that answer common questions 24/7 so you never miss an opportunity.",
    href: "/services/ai/chatbots",
  },
  {
    icon: BarChart3,
    title: "Business Dashboards",
    description: "Simple dashboards to track sales, expenses, and key metrics without complex software.",
    href: "/services/full-stack/custom-web-apps",
  },
  {
    icon: IndianRupee,
    title: "Flexible Payment Options",
    description: "We work within your budget with payment plans and phased implementations that grow with you.",
    href: "/contact",
  },
]

const packages = [
  {
    name: "Digital Starter",
    price: "₹25,000",
    description: "Get online with a professional presence",
    features: [
      "Professional 5-page website",
      "Mobile responsive design",
      "Contact form with email alerts",
      "Google Maps integration",
      "Basic SEO setup",
      "1 year hosting included",
    ],
  },
  {
    name: "Growth Package",
    price: "₹75,000",
    description: "Establish and automate your business",
    features: [
      "Everything in Starter",
      "10+ page website with blog",
      "WhatsApp integration",
      "Lead capture automation",
      "Invoice/quote automation",
      "Basic analytics dashboard",
    ],
  },
  {
    name: "Custom Solution",
    price: "Custom",
    description: "Tailored to your specific needs",
    features: [
      "Custom website or web app",
      "E-commerce capabilities",
      "Full workflow automation",
      "AI chatbot integration",
      "Advanced reporting",
      "Ongoing support & optimization",
    ],
  },
]

const faqs = [
  {
    question: "I have a very small budget. Can you still help?",
    answer:
      "Yes. We have starter packages from ₹25,000 that give you a professional website and basic online presence. We also offer payment plans for larger projects. Our approach is to start with what provides the most value for your specific situation and expand from there.",
  },
  {
    question: "I'm not tech-savvy. Will I be able to use what you build?",
    answer:
      "Absolutely. We design everything with non-technical users in mind. You'll get training on how to use your website and any automation systems. We also provide simple documentation and ongoing support. If you can use WhatsApp, you can use what we build.",
  },
  {
    question: "How long will it take to get my website live?",
    answer:
      "Basic business websites are typically ready in 2 weeks. More complex sites with e-commerce or custom features take 3-4 weeks. We'll give you a clear timeline upfront and keep you updated throughout.",
  },
  {
    question: "What ongoing costs should I expect?",
    answer:
      "Domain names cost ₹500-1000/year. Hosting ranges from ₹3,000-12,000/year depending on your needs. Some automation systems have small monthly costs for SMS/WhatsApp messages. We'll be transparent about all costs before you commit.",
  },
  {
    question: "Can you help me sell products online?",
    answer:
      "Yes, we build e-commerce websites with Indian payment gateways (Razorpay, PayU, etc.) that accept UPI, cards, and net banking. We can also set up delivery integrations with Shiprocket, Delhivery, and other logistics providers.",
  },
  {
    question: "What if I need changes after the website is done?",
    answer:
      "We provide training so you can make basic content changes yourself. For design changes or new features, we offer affordable hourly support or maintenance packages. Your website grows with your business.",
  },
]

export default function SmallBusinessIndustryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 text-primary mb-4">
                <Store className="h-5 w-5" />
                <span className="font-medium text-sm">Small Business Solutions</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Big Technology for Small Businesses
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-xl text-muted-foreground text-pretty">
                Professional websites, smart automation, and AI-powered tools—designed for small business budgets.
                Compete with bigger players without breaking the bank.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="group">
                  <Link href="/contact">
                    Get Free Quote
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent">
                  <a href="https://wa.me/919876543210">WhatsApp Us</a>
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
            eyebrow="We Understand"
            title="Challenges small businesses face with technology"
            description="Running a small business is hard enough. Technology shouldn't make it harder."
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
            title="Technology that works for small businesses"
            description="Practical solutions that deliver value without complexity or massive investment."
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

      {/* Packages */}
      <Section>
        <FadeIn>
          <SectionHeader
            eyebrow="Packages"
            title="Clear pricing for small businesses"
            description="Transparent packages so you know exactly what you're getting. No hidden costs or surprise fees."
          />
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <StaggerItem key={pkg.name}>
              <div
                className={`p-8 rounded-2xl h-full flex flex-col ${
                  index === 1 ? "bg-primary text-primary-foreground" : "bg-card border border-border"
                }`}
              >
                <h3 className={`text-xl font-semibold ${index === 1 ? "text-primary-foreground" : "text-foreground"}`}>
                  {pkg.name}
                </h3>
                <div className="mt-4">
                  <span className={`text-4xl font-bold ${index === 1 ? "text-primary-foreground" : "text-foreground"}`}>
                    {pkg.price}
                  </span>
                  {pkg.price !== "Custom" && (
                    <span className={index === 1 ? "text-primary-foreground/70" : "text-muted-foreground"}>
                      {" "}
                      one-time
                    </span>
                  )}
                </div>
                <p className={`mt-2 ${index === 1 ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {pkg.description}
                </p>
                <ul className="mt-6 space-y-3 flex-grow">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle
                        className={`h-5 w-5 shrink-0 ${index === 1 ? "text-primary-foreground" : "text-primary"}`}
                      />
                      <span className={index === 1 ? "text-primary-foreground/90" : "text-foreground"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`mt-8 w-full ${index === 1 ? "bg-background text-foreground hover:bg-background/90" : ""}`}
                  variant={index === 1 ? "secondary" : "default"}
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      {/* Why Us */}
      <Section className="bg-card">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Built for businesses like yours
              </h2>
              <ul className="space-y-4">
                {[
                  "We speak your language, not tech jargon",
                  "Transparent pricing with no surprises",
                  "Local team you can meet in person",
                  "Flexible payment options available",
                  "Training included with every project",
                  "Ongoing support when you need it",
                  "Solutions that grow with your business",
                  "We've helped 50+ local businesses succeed",
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
            <div className="p-8 bg-background border border-border rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Quick Wins</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Start seeing results fast. Most of our small business projects deliver measurable impact within:
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Website Launch</span>
                  <span className="font-semibold text-primary">2 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">First Automated Sale</span>
                  <span className="font-semibold text-primary">3 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">ROI Positive</span>
                  <span className="font-semibold text-primary">2-3 months</span>
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
              title="Questions from small business owners"
              description="Straight answers to common concerns about investing in technology."
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
