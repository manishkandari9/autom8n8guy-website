import type { Metadata } from "next"
import { LocationPageTemplate } from "@/components/location-page-template"
import { CTA } from "@/components/home/cta"

export const metadata: Metadata = {
  title: "AI Solutions in Dehradun | Chatbots & AI Automation",
  description:
    "AI solutions for businesses in Dehradun. Intelligent chatbots, AI automation, and smart systems to improve operations and customer experience.",
}

export default function DehradunAISolutionsPage() {
  return (
    <>
      <LocationPageTemplate
        location="Dehradun"
        service="AI Solutions"
        title="AI Solutions for Dehradun Businesses"
        description="Transform your business with AI-powered chatbots and automation solutions designed for Dehradun businesses."
        services={[
          {
            title: AI Chatbots,
            description:
              "AI chatbots that handle customer queries in Hindi and English.",
            href: "/services/ai/chatbots",
          },
          {
            title: AI Agents,
            description:
              "Autonomous AI agents that perform complex business tasks.",
            href: "/services/ai/agents",
          },
          {
            title: Custom AI Tools,
            description:
              "Purpose-built AI solutions tailored to your business needs.",
            href: "/services/ai/custom-tools",
          },
          {
            title: AI Integration,
            description:
              "Integrate AI into your existing systems and workflows.",
            href: "/services/ai/integration",
          },
          {
            title: AI Automation,
            description:
              "Smart automation to reduce manual work and increase efficiency.",
            href: "/services/ai/automation-systems",
          },
          {
            title: AI Consulting,
            description:
              "Expert guidance on using AI effectively in your business.",
            href: "/contact",
          },
        ]}
        benefits={[
          "24/7 customer support",
          "Faster response times",
          "Reduced operational costs",
          "Scalable AI solutions",
          "Hindi & English language support",
          "Competitive advantage in Dehradun",
        ]}
        faqs={[
          {
            question: "Can AI chatbots work in Hindi?",
            answer:
              "Yes, our AI chatbots fully support Hindi and English languages.",
          },
          {
            question: "Is AI affordable for small businesses?",
            answer:
              "Yes, AI solutions can start small and scale as your business grows.",
          },
          {
            question: "How long does AI implementation take?",
            answer:
              "Basic AI solutions can be deployed in 2–3 weeks.",
          },
        ]}
      />
      <CTA />
    </>
  )
}
