"use client"

import { Section, SectionHeader } from "@/components/ui/section"
import { FadeIn } from "@/components/animations/fade-in"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What services do you offer in Dehradun and Rishikesh?",
    answer:
      "We offer comprehensive IT services including web development, full-stack application development, business automation (using tools like n8n), and AI solutions. We serve businesses across Uttarakhand with a focus on Dehradun and Rishikesh.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Project timelines vary based on complexity. A simple business website typically takes 2-4 weeks, while complex web applications may take 2-3 months. We provide detailed timelines during our initial consultation.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, we offer comprehensive maintenance and support packages. This includes regular updates, security patches, performance monitoring, and technical support to ensure your digital solutions run smoothly.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern technologies including Next.js, React, Node.js, Python, n8n for automation, and various AI frameworks. We choose the best technology stack based on your specific project requirements.",
  },
  {
    question: "How much does a typical project cost?",
    answer:
      "Project costs depend on scope and complexity. We offer transparent pricing and provide detailed quotes after understanding your requirements. Contact us for a free consultation and custom quote.",
  },
  {
    question: "Can you help with existing projects or only new ones?",
    answer:
      "We work with both new and existing projects. Whether you need a complete rebuild, feature additions, or optimization of your current digital assets, we can help improve and scale your solutions.",
  },
]

export function FAQ() {
  return (
    <Section className="bg-card">
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
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Everything you need to know about our services."
          />
        </FadeIn>

        <FadeIn delay={0.2}>
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
  )
}
