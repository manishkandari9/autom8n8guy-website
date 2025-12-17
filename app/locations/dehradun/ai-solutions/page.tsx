"use client"
import type { Metadata } from "next"
import { LocationPageTemplate } from "@/components/location-page-template"
import { CTA } from "@/components/home/cta"
import {
  Bot,
  MessageSquare,
  Brain,
  Zap,
  Workflow,
  Wrench,
} from "lucide-react"

export const metadata: Metadata = {
  title: "AI Solutions in Dehradun | Chatbots & AI Automation",
  description:
    "AI solutions for businesses in Dehradun. Intelligent chatbots, AI agents, and automation to transform your operations and customer experience.",
  keywords: [
    "AI solutions dehradun",
    "chatbot development dehradun",
    "AI automation uttarakhand",
    "AI company dehradun",
  ],
}

export default function DehradunAISolutionsPage() {
  return (
    <>
      <LocationPageTemplate
        location="Dehradun"
        service="AI Solutions"
        title="AI Solutions for Dehradun Businesses"
        description="Transform your business with artificial intelligence. From customer service chatbots to intelligent automation, we bring cutting-edge AI solutions to businesses in Dehradun."
        introduction={{
          title: "Bringing AI to Dehradun's businesses",
          description:
            "AI isn't just for big tech companies anymore. We help Dehradun businesses leverage artificial intelligence to improve customer service, automate operations, and gain competitive advantages.",
          points: [
            "AI chatbots for 24/7 customer support",
            "Intelligent automation for operations",
            "Custom AI tools for your specific needs",
            "Affordable solutions for SMEs",
            "Local support and training",
            "Hindi and English language support",
          ],
        }}
        services={[
          {
            icon: MessageSquare,
            title: "AI Chatbots",
            description: "Intelligent chatbots that handle customer queries in Hindi and English.",
            href: "/services/ai/chatbots",
          },
          {
            icon: Bot,
            title: "AI Agents",
            description: "Autonomous AI agents that complete complex business tasks.",
            href: "/services/ai/agents",
          },
          {
            icon: Brain,
            title: "Custom AI Tools",
            description: "Purpose-built AI solutions for your specific business needs.",
            href: "/services/ai/custom-tools",
          },
          {
            icon: Zap,
            title: "AI Integration",
            description: "Add AI capabilities to your existing systems and workflows.",
            href: "/services/ai/integration",
          },
          {
            icon: Workflow,
            title: "AI Automation",
            description: "Intelligent automation that learns and improves over time.",
            href: "/services/ai/automation-systems",
          },
          {
            icon: Wrench,
            title: "AI Consulting",
            description: "Discover how AI can benefit your specific business.",
            href: "/contact",
          },
        ]}
        industries={[
          {
            name: "Healthcare",
            description: "AI-powered appointment booking and patient inquiry handling.",
          },
          {
            name: "Education",
            description: "Intelligent tutoring and student query resolution.",
          },
          {
            name: "Real Estate",
            description: "AI chatbots for property inquiries and lead qualification.",
          },
          {
            name: "Retail",
            description: "Product recommendations and customer support automation.",
          },
          {
            name: "Professional Services",
            description: "Client inquiry handling and document processing.",
          },
          {
            name: "Hospitality",
            description: "Booking assistance and guest services automation.",
          },
        ]}
        benefits={[
          "24/7 customer service without hiring staff",
          "Reduce response times dramatically",
          "Handle multiple queries simultaneously",
          "Consistent, accurate information",
          "Free staff for high-value tasks",
          "Bilingual support (Hindi & English)",
          "Continuous improvement through learning",
          "Competitive advantage for your business",
        ]}
        faqs={[
          {
            question: "Can AI chatbots work in Hindi?",
            answer:
              "Yes! Our AI chatbots support both Hindi and English, and can even switch between languages in the same conversation. This is essential for serving customers in Dehradun effectively.",
          },
          {
            question: "Is AI too expensive for small businesses?",
            answer:
              "Not anymore. We offer AI solutions starting from ₹25,000, with pay-per-use options for the underlying AI. Small businesses can start with simple chatbots and expand as they see results.",
          },
          {
            question: "How long does it take to implement AI?",
            answer:
              "A basic AI chatbot can be deployed in 2-3 weeks. More complex AI solutions may take 1-2 months. We start with quick wins and expand from there.",
          },
          {
            question: "Do you provide training on using AI tools?",
            answer:
              "Yes, we provide comprehensive training on managing and monitoring your AI solutions. We also offer ongoing support to help you get the most from your investment.",
          },
          {
            question: "What happens if the AI makes mistakes?",
            answer:
              "We implement safeguards including confidence thresholds and human handoff for uncertain situations. The AI improves over time based on feedback and corrections.",
          },
          {
            question: "Can AI integrate with my existing systems?",
            answer:
              "Yes, we can integrate AI solutions with your existing CRM, helpdesk, website, WhatsApp, and other systems. The AI works with your current tools.",
          },
        ]}
        localInfo={{
          areas: [
            "Rajpur Road",
            "IT Park",
            "Sahastradhara Road",
            "GMS Road",
            "Haridwar Road",
            "Clement Town",
            "Vikasnagar",
            "Selaqui",
          ],
          landmarks: ["IT Park Dehradun", "MDDA", "Graphic Era University", "DIT University", "IMS Unison University"],
        }}
      />
      <CTA />
    </>
  )
}
