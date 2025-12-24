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
            description:
              "Intelligent chatbots that handle customer queries in Hindi and English.",
            href: "/services/ai/chatbots",
          },
          {
            icon: Bot,
            title: "AI Agents",
            description:
              "Autonomous AI agents that complete complex business tasks.",
            href: "/services/ai/agents",
          },
          {
            icon: Brain,
            title: "Custom AI Tools",
            description:
              "Purpose-built AI solutions for your specific business needs.",
            href: "/services/ai/custom-tools",
          },
          {
            icon: Zap,
            title: "AI Integration",
            description:
              "Add AI capabilities to your existing systems and workflows.",
            href: "/services/ai/integration",
          },
          {
            icon: Workflow,
            title: "AI Automation",
            description:
              "Intelligent automation that learns and improves over time.",
            href: "/services/ai/automation-systems",
          },
          {
            icon: Wrench,
            title: "AI Consulting",
            description:
              "Discover how AI can benefit your specific business.",
            href: "/contact",
          },
        ]}
        industries={[
          {
            name: "Healthcare",
            description:
              "AI-powered appointment booking and patient inquiry handling.",
          },
          {
            name: "Education",
            description:
              "Intelligent tutoring and student query resolution.",
          },
          {
            name: "Real Estate",
            description:
              "AI chatbots for property inquiries and lead qualification.",
          },
          {
            name: "Retail",
            description:
              "Product recommendations and customer support automation.",
          },
          {
            name: "Professional Services",
            description:
              "Client inquiry handling and document processing.",
          },
          {
            name: "Hospitality",
            description:
              "Booking assistance and guest services automation.",
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
              "Yes. Our AI chatbots support both Hindi and English and can switch languages mid-conversation, which is ideal for businesses in Dehradun.",
          },
          {
            question: "Is AI too expensive for small businesses?",
            answer:
              "No. Solutions start from ₹25,000 with scalable pricing. Businesses can begin small and expand based on results.",
          },
          {
            question: "How long does implementation take?",
            answer:
              "Basic chatbots take 2–3 weeks. Advanced AI systems typically take 1–2 months.",
          },
          {
            question: "Do you provide training?",
            answer:
              "Yes. Full training and ongoing support are included to ensure maximum ROI.",
          },
          {
            question: "Can AI integrate with existing systems?",
            answer:
              "Yes. We integrate with CRMs, websites, WhatsApp, helpdesks, and internal tools.",
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
          landmarks: [
            "IT Park Dehradun",
            "MDDA",
            "Graphic Era University",
            "DIT University",
            "IMS Unison University",
          ],
        }}
      />

      <CTA />
    </>
  )
}
