import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { CTA } from "@/components/home/cta"
import { Bot, Brain, Workflow, Shield, Code2, Database, Zap, RefreshCw } from "lucide-react"

export const metadata: Metadata = {
  title: "AI Agent Development | Autonomous AI Solutions in Uttarakhand",
  description:
    "AI agent development for businesses. Build autonomous AI agents that can perform complex tasks, make decisions, and take actions on your behalf.",
}

export default function AIAgentsPage() {
  return (
    <>
      <ServicePageTemplate
        breadcrumb={{ label: "AI Solutions", href: "/services/ai" }}
        title="AI Agent Development"
        description="Autonomous AI agents that go beyond chat. They can research, analyze, make decisions, and take actions across your tools—completing complex tasks independently while you focus on strategy."
        problemStatement={{
          title: "Chatbots are just the beginning",
          description:
            "While chatbots handle conversations, many business tasks require multi-step processes, research, analysis, and decision-making. You need AI that can act, not just respond.",
          points: [
            "Complex tasks require multiple steps across tools",
            "Research and analysis consume valuable time",
            "Decisions need context from multiple sources",
            "Processes vary based on dynamic conditions",
            "Manual oversight required for every action",
            "Scaling requires more human involvement",
          ],
        }}
        solution={{
          title: "AI that thinks and acts",
          description:
            "Our AI agents are autonomous systems that can understand goals, break them into steps, gather information, make decisions, and take actions. They work across your tools to accomplish complex tasks while keeping you informed.",
        }}
        features={[
          {
            icon: Brain,
            title: "Autonomous Reasoning",
            description: "Breaks complex goals into steps and executes them independently.",
          },
          {
            icon: Workflow,
            title: "Multi-Tool Actions",
            description: "Works across your apps, databases, and APIs seamlessly.",
          },
          {
            icon: Database,
            title: "Memory & Context",
            description: "Remembers past interactions and maintains context over time.",
          },
          {
            icon: Code2,
            title: "Custom Capabilities",
            description: "Extended with custom tools specific to your business.",
          },
          {
            icon: Shield,
            title: "Guardrails",
            description: "Built-in safety limits and approval workflows for sensitive actions.",
          },
          {
            icon: Bot,
            title: "Human Collaboration",
            description: "Knows when to ask for clarification or approval.",
          },
          {
            icon: Zap,
            title: "Real-Time Processing",
            description: "Responds to events and triggers immediately.",
          },
          {
            icon: RefreshCw,
            title: "Continuous Improvement",
            description: "Learns from outcomes to improve over time.",
          },
        ]}
        techStack={["OpenAI GPT-4", "LangChain", "AutoGen", "CrewAI", "Python", "Node.js", "Vector Databases"]}
        process={[
          {
            step: "01",
            title: "Define Goals",
            description: "Identify tasks and outcomes the agent should achieve.",
          },
          {
            step: "02",
            title: "Build Tools",
            description: "Create integrations with your systems and data.",
          },
          {
            step: "03",
            title: "Train & Test",
            description: "Develop reasoning capabilities and test scenarios.",
          },
          {
            step: "04",
            title: "Deploy & Monitor",
            description: "Launch with monitoring and iterate based on results.",
          },
        ]}
        benefits={[
          "Complete complex tasks without manual steps",
          "Research and synthesize information automatically",
          "Make informed decisions based on data",
          "Work 24/7 without fatigue or errors",
          "Scale operations without adding headcount",
          "Free your team for strategic work",
          "Consistent execution of processes",
          "Continuous improvement through learning",
        ]}
        faqs={[
          {
            question: "What's the difference between a chatbot and an AI agent?",
            answer:
              "A chatbot responds to messages in a conversation. An AI agent can independently pursue goals, make decisions, use tools, and take actions across multiple systems. It's more like a virtual employee that can work autonomously.",
          },
          {
            question: "What tasks can AI agents handle?",
            answer:
              "AI agents can handle research and analysis, data processing, content creation, lead qualification, booking and scheduling, reporting, monitoring, and many other multi-step processes that previously required human judgment.",
          },
          {
            question: "How do you ensure the agent doesn't make mistakes?",
            answer:
              "We implement guardrails including action limits, approval workflows for sensitive operations, confidence thresholds, and human-in-the-loop checkpoints. The agent knows when to ask for help or approval.",
          },
          {
            question: "Can agents work with our existing tools?",
            answer:
              "Yes, we build custom integrations with your existing tools, databases, and APIs. The agent can read data, create records, send messages, and perform actions across your technology stack.",
          },
          {
            question: "How long does it take to build an AI agent?",
            answer:
              "Simple agents can be deployed in 2-4 weeks. Complex agents with multiple integrations and sophisticated reasoning may take 2-3 months. We recommend starting with a focused use case and expanding from there.",
          },
          {
            question: "Is it expensive to run AI agents?",
            answer:
              "Running costs depend on usage and complexity. AI model calls have per-token costs, but agents often process tasks faster and more accurately than manual work. We help you estimate costs and optimize for efficiency.",
          },
        ]}
        cta={{
          title: "Ready for autonomous AI?",
          description: "Let's explore how AI agents can transform your business operations.",
        }}
      />
      <CTA />
    </>
  )
}
