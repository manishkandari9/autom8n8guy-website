import type { Metadata } from "next"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight } from "lucide-react"
import { CTA } from "@/components/home/cta"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Autom8n8 Systems",
  description:
    "Answers to common questions about our web development, automation, and AI services for businesses in Dehradun and Rishikesh.",
}

const faqCategories = [
  {
    name: "General Services",
    faqs: [
      {
        question: "What services does Autom8n8 Systems offer?",
        answer:
          "We offer four core service categories: Web Development (business websites, e-commerce, landing pages), Full-Stack Development (custom web applications, SaaS), Business Automation (workflow automation, integrations, data automation using custom Go-based systems), and AI Solutions (chatbots, AI agents, intelligent automation). We serve businesses in Dehradun, Rishikesh, and remotely across India.",
      },
      {
        question: "Do you work with businesses outside Dehradun and Rishikesh?",
        answer:
          "Yes! While we have a strong local presence in Uttarakhand and offer in-person meetings there, we work with clients across India and internationally. Most of our collaboration happens via video calls, messaging, and shared project tools, making location irrelevant for project success.",
      },
      {
        question: "What industries do you specialize in?",
        answer:
          "We have deep experience in yoga & wellness, tourism & hospitality, education & coaching, healthcare, real estate, and professional services—industries that are prominent in our region. However, our technical expertise applies across industries, and we've successfully served startups, e-commerce businesses, and various other sectors.",
      },
      {
        question: "How do I know which service is right for my business?",
        answer:
          "Start with a free consultation. We'll discuss your business goals, challenges, and budget, then recommend the most impactful solution. Sometimes a simple website is all you need; other times, automation or AI would deliver better ROI. We'll be honest about what will actually help.",
      },
    ],
  },
  {
    name: "Pricing & Budget",
    faqs: [
      {
        question: "How much does a website cost?",
        answer:
          "Website costs vary based on complexity. Basic business websites start from ₹20,000-25,000. Professional sites with more pages and features range from ₹35,000-75,000. E-commerce websites start from ₹75,000. Custom web applications range from ₹1,50,000-5,00,000+. We provide detailed quotes after understanding your specific requirements.",
      },
      {
        question: "What's the cost of automation services?",
        answer:
          "Automation projects typically range from ₹50,000 for simple workflows to ₹3,00,000+ for comprehensive business process automation. Unlike subscription-based tools, our custom Go-based automation has no monthly platform fees—you own the system. The ROI usually pays back the investment within 3-6 months through time and cost savings.",
      },
      {
        question: "How much do AI solutions cost?",
        answer:
          "AI chatbots start from ₹35,000-40,000 for FAQ bots. Full-featured AI assistants with booking capabilities range from ₹75,000-1,50,000. AI agents for complex tasks can range from ₹2,00,000-5,00,000. There are also ongoing AI usage costs (typically ₹2,000-15,000/month) based on conversation volume.",
      },
      {
        question: "Do you offer payment plans?",
        answer:
          "Yes, we offer flexible payment terms for larger projects. Typically, we work with 40% upfront, 30% at midpoint, and 30% on completion. For projects over ₹1,00,000, we can discuss monthly payment plans. We want budget constraints not to prevent businesses from accessing technology.",
      },
      {
        question: "Are there any ongoing costs after the project?",
        answer:
          "Websites require hosting (₹3,000-12,000/year) and domain renewal (₹500-1,000/year). Some automation and AI solutions have usage-based costs. We're transparent about all costs upfront. Maintenance and support packages are optional but recommended for ongoing improvements.",
      },
    ],
  },
  {
    name: "Process & Timeline",
    faqs: [
      {
        question: "How long does it take to build a website?",
        answer:
          "Basic websites take 2-3 weeks. More complex sites with custom features take 4-6 weeks. E-commerce websites typically take 4-8 weeks. We can expedite timelines for urgent projects, though this may affect pricing. You'll receive a specific timeline in your project proposal.",
      },
      {
        question: "How long does automation implementation take?",
        answer:
          "Simple automations can be deployed in 2-3 weeks. Comprehensive business process automation typically takes 6-12 weeks, depending on the number of systems involved and complexity of workflows. We deliver in phases, so you start seeing value early.",
      },
      {
        question: "What's your development process?",
        answer:
          "We follow an iterative process: Discovery (understanding your needs), Planning (defining scope and architecture), Development (building with regular check-ins), Testing (thorough quality assurance), Launch (deployment and training), and Support (ongoing maintenance). You're involved throughout with regular updates and demos.",
      },
      {
        question: "How involved do I need to be during the project?",
        answer:
          "We need your input during discovery and key decisions, plus feedback on designs and demos. Typically, expect 2-4 hours per week for communication and reviews. We're flexible and can work around your schedule. Clear, timely feedback helps projects stay on track.",
      },
      {
        question: "What if I need to make changes during the project?",
        answer:
          "Reasonable changes within scope are expected and accommodated. For significant scope changes, we'll discuss the impact on timeline and cost before proceeding. We use iterative development specifically so you can refine requirements as you see the work progress.",
      },
    ],
  },
  {
    name: "Technology & Support",
    faqs: [
      {
        question: "What technologies do you use?",
        answer:
          "For web development, we primarily use Next.js, React, and Tailwind CSS—modern technologies that are fast, scalable, and well-supported. For automation, we build custom solutions with Go (Golang) for performance and reliability. For AI, we use OpenAI GPT models, LangChain, and other leading AI tools. We choose technology based on your specific needs.",
      },
      {
        question: "Will I be able to update my website myself?",
        answer:
          "Yes, we build websites with content management in mind. You'll be able to update text, images, and basic content without technical knowledge. We provide training and documentation. For more complex changes, we offer affordable support packages.",
      },
      {
        question: "Do you provide hosting?",
        answer:
          "Yes, we offer managed hosting on reliable infrastructure (typically Vercel or AWS). Hosting includes SSL certificates, automatic backups, and technical support. We also work with your preferred hosting provider if you have existing infrastructure.",
      },
      {
        question: "What happens if something breaks after launch?",
        answer:
          "All projects include a warranty period (typically 30-60 days) where we fix bugs at no additional cost. After that, we offer maintenance packages or hourly support. We build robust systems with monitoring, so we often catch issues before you do.",
      },
      {
        question: "Can you integrate with our existing systems?",
        answer:
          "Yes, integration is one of our strengths. We can connect with virtually any system that has an API—CRMs, accounting software (including Tally), payment gateways, email marketing tools, WhatsApp Business, and more. We'll assess integration requirements during discovery.",
      },
    ],
  },
  {
    name: "Local Services (Dehradun & Rishikesh)",
    faqs: [
      {
        question: "Can we meet in person for discussions?",
        answer:
          "We're based in the Dehradun-Rishikesh area and happy to meet in person for discovery sessions, project kickoffs, or whenever helpful. For ongoing collaboration, we typically use video calls and messaging, but in-person meetings are always available.",
      },
      {
        question: "Do you understand the local Uttarakhand market?",
        answer:
          "Yes, we've worked extensively with yoga studios, retreat centers, hotels, coaching institutes, and local businesses in Dehradun and Rishikesh. We understand seasonal tourism patterns, local payment preferences, and the unique needs of businesses serving both local and international customers.",
      },
      {
        question: "Can you help with Hindi and English content?",
        answer:
          "Yes, we work fluently in both Hindi and English. For websites and chatbots, we can implement bilingual content. Our AI solutions support multiple languages, which is essential for businesses serving international visitors in Rishikesh.",
      },
      {
        question: "Do you provide local references?",
        answer:
          "Yes, we can connect you with local businesses we've worked with who can share their experience. We believe references are important for building trust, especially in our local community.",
      },
    ],
  },
]

// Flatten all FAQs for schema
const allFaqs = faqCategories.flatMap((category) => category.faqs)

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: allFaqs.map((faq) => ({
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

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">FAQ</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Frequently Asked Questions
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-xl text-muted-foreground text-pretty">
                Answers to common questions about our services, pricing, process, and technology. Can't find what you're
                looking for? Get in touch.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-8">
                <Button size="lg" asChild className="group">
                  <Link href="/contact">
                    Ask a Question
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      {faqCategories.map((category, categoryIndex) => (
        <Section key={category.name} className={categoryIndex % 2 === 1 ? "bg-card" : ""}>
          <FadeIn>
            <SectionHeader
              eyebrow={`Category ${categoryIndex + 1}`}
              title={category.name}
              description={`Common questions about ${category.name.toLowerCase()}`}
            />
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {category.faqs.map((faq, faqIndex) => (
                  <AccordionItem key={faqIndex} value={`${category.name}-${faqIndex}`} className="border-border">
                    <AccordionTrigger className="text-left text-foreground hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeIn>
        </Section>
      ))}

      {/* Still Have Questions */}
      <Section>
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-8">
              We're here to help. Reach out via WhatsApp for quick answers or schedule a free consultation call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="group">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent">
                <a href="https://wa.me/919876543210">WhatsApp Us</a>
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>

      <CTA />
    </>
  )
}
