import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { CTA } from "@/components/home/cta"
import { MessageSquare, Brain, Clock, Users, Shield, BarChart3, Globe, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "AI Chatbot Development | Intelligent Customer Support in Uttarakhand",
  description:
    "AI chatbot development for businesses in Dehradun and Rishikesh. Build intelligent chatbots that handle customer queries, generate leads, and provide 24/7 support.",
}

export default function ChatbotsPage() {
  return (
    <>
      <ServicePageTemplate
        breadcrumb={{ label: "AI Solutions", href: "/services/ai" }}
        title="AI Chatbot Development"
        description="Intelligent chatbots that understand your customers, answer questions accurately, and provide 24/7 support. Powered by the latest AI models and trained on your business knowledge."
        problemStatement={{
          title: "Customer support doesn't scale",
          description:
            "As your business grows, customer inquiries multiply. Hiring more support staff is expensive, and customers expect instant responses. Traditional chatbots with scripted responses frustrate users with their limitations.",
          points: [
            "Customers expect instant responses 24/7",
            "Support team overwhelmed with repetitive queries",
            "Expensive to scale human support",
            "Traditional chatbots feel robotic and frustrating",
            "Missed opportunities outside business hours",
            "Inconsistent answers from different team members",
          ],
        }}
        solution={{
          title: "AI that actually understands",
          description:
            "Our AI chatbots use advanced language models to truly understand customer questions and provide accurate, helpful responses. Trained on your business knowledge, they handle complex queries while maintaining your brand voice.",
        }}
        features={[
          {
            icon: Brain,
            title: "Natural Understanding",
            description: "Advanced AI that understands context, intent, and nuance.",
          },
          {
            icon: MessageSquare,
            title: "Human-like Conversations",
            description: "Natural dialogue that doesn't feel like talking to a robot.",
          },
          {
            icon: Clock,
            title: "24/7 Availability",
            description: "Never miss a customer query, even outside business hours.",
          },
          {
            icon: Users,
            title: "Lead Generation",
            description: "Qualify leads and capture contact information automatically.",
          },
          {
            icon: Shield,
            title: "Human Handoff",
            description: "Seamlessly escalate complex issues to human agents.",
          },
          {
            icon: BarChart3,
            title: "Analytics Dashboard",
            description: "Track conversations, satisfaction, and common queries.",
          },
          {
            icon: Globe,
            title: "Multi-Channel",
            description: "Deploy on your website, WhatsApp, Facebook, and more.",
          },
          {
            icon: Zap,
            title: "Continuous Learning",
            description: "Improves over time based on conversations and feedback.",
          },
        ]}
        techStack={["OpenAI GPT-4", "LangChain", "Pinecone", "Next.js", "Node.js", "WhatsApp API"]}
        process={[
          {
            step: "01",
            title: "Knowledge Gathering",
            description: "Collect your FAQs, documentation, and business knowledge.",
          },
          {
            step: "02",
            title: "Training",
            description: "Train the AI on your specific business context.",
          },
          {
            step: "03",
            title: "Integration",
            description: "Deploy on your preferred channels with custom UI.",
          },
          {
            step: "04",
            title: "Refinement",
            description: "Monitor, gather feedback, and improve responses.",
          },
        ]}
        benefits={[
          "Instant responses to customer queries 24/7",
          "Handle hundreds of conversations simultaneously",
          "Reduce support ticket volume by 50-70%",
          "Consistent, accurate information every time",
          "Generate and qualify leads automatically",
          "Free your team for complex, high-value work",
          "Insights from conversation analytics",
          "Scale support without adding headcount",
        ]}
        faqs={[
          {
            question: "How is this different from regular chatbots?",
            answer:
              "Traditional chatbots follow scripts and can only handle pre-programmed questions. Our AI chatbots use large language models to understand natural language, handle variations in how questions are asked, and provide intelligent responses to queries they haven't been explicitly programmed for.",
          },
          {
            question: "What happens if the AI doesn't know the answer?",
            answer:
              "The chatbot is designed to recognize its limitations. If it's not confident in an answer, it will acknowledge this and offer to connect the customer with a human agent. You can also set up automatic escalation rules for certain topics.",
          },
          {
            question: "How do you train it on our business?",
            answer:
              "We use your existing documentation, FAQs, product information, and support history to train the AI. The more quality information we have, the better the chatbot performs. We can also add new knowledge over time.",
          },
          {
            question: "Can it integrate with our existing systems?",
            answer:
              "Yes, we can integrate the chatbot with your CRM, helpdesk, booking system, or other tools. This allows it to access customer information, create tickets, make bookings, and more.",
          },
          {
            question: "Is customer data secure?",
            answer:
              "Security is a top priority. Conversations can be processed without storing sensitive data, and we follow best practices for data handling. We can also deploy on your infrastructure for maximum control.",
          },
          {
            question: "How much does an AI chatbot cost?",
            answer:
              "AI chatbot projects start from ₹50,000 for basic implementations. The cost depends on complexity, integrations, and channels required. There are also ongoing costs for AI usage, which we help you estimate.",
          },
        ]}
        cta={{
          title: "Ready to transform customer support?",
          description: "Let's build an AI chatbot that handles queries 24/7 and delights your customers.",
        }}
      />
      <CTA />
    </>
  )
}
