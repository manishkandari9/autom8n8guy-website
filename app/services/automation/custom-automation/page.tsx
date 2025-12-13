import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { CTA } from "@/components/home/cta"
import { Workflow, Zap, Database, Code2, Shield, RefreshCw, Settings, BarChart3 } from "lucide-react"

export const metadata: Metadata = {
  title: "Custom Business Automation | Go-Powered Workflow Solutions",
  description:
    "Custom-built business automation systems using Go. Reliable, fast, and scalable workflow automation tailored to your specific business processes.",
  keywords: [
    "custom automation",
    "business process automation",
    "workflow automation",
    "Go automation",
    "custom integrations",
  ],
}

export default function CustomAutomationPage() {
  return (
    <>
      <ServicePageTemplate
        breadcrumb={{ label: "Automation Services", href: "/services/automation" }}
        title="Custom Business Automation"
        description="Purpose-built automation systems designed specifically for your business processes. We use Go's speed and reliability to create automation that handles your unique workflows—no compromises, no limitations."
        problemStatement={{
          title: "Off-the-shelf tools don't fit your business",
          description:
            "Generic automation platforms promise everything but deliver complexity, limitations, and ongoing subscription costs. When your processes are unique, you need automation built specifically for you.",
          points: [
            "Cookie-cutter solutions force you to change your processes",
            "Monthly subscriptions add up to massive costs over time",
            "Third-party platforms have performance limitations",
            "Your data sits on someone else's servers",
            "Integration limits block your specific requirements",
            "You're dependent on the platform's roadmap",
          ],
        }}
        solution={{
          title: "Automation that fits your business perfectly",
          description:
            "We build custom automation systems using Go—a programming language designed by Google for reliability, speed, and scale. Your automation runs on your terms, handles your exact processes, and grows with your business.",
        }}
        features={[
          {
            icon: Code2,
            title: "Custom-Built",
            description: "Every automation designed specifically for your unique business processes.",
          },
          {
            icon: Zap,
            title: "Go-Powered Performance",
            description: "Built with Go for blazing speed, reliability, and efficient resource usage.",
          },
          {
            icon: Database,
            title: "Your Data, Your Control",
            description: "Run on your infrastructure or our managed servers—you own everything.",
          },
          {
            icon: Shield,
            title: "Enterprise Reliability",
            description: "Production-grade systems with error handling, logging, and monitoring.",
          },
          {
            icon: Workflow,
            title: "Complex Workflow Support",
            description: "Handle multi-step, conditional, parallel workflows of any complexity.",
          },
          {
            icon: Settings,
            title: "Unlimited Integrations",
            description: "Connect to any API, database, or service without platform restrictions.",
          },
          {
            icon: RefreshCw,
            title: "Real-Time Processing",
            description: "Process events instantly with webhook handlers and queue systems.",
          },
          {
            icon: BarChart3,
            title: "Complete Visibility",
            description: "Dashboards and logs to monitor every automation run.",
          },
        ]}
        techStack={["Go (Golang)", "PostgreSQL", "Redis", "Docker", "REST APIs", "Webhooks", "Message Queues"]}
        process={[
          {
            step: "01",
            title: "Discovery",
            description: "Deep dive into your current processes, pain points, and automation goals.",
          },
          {
            step: "02",
            title: "Architecture",
            description: "Design the automation system, integrations, and data flows.",
          },
          {
            step: "03",
            title: "Development",
            description: "Build, test, and refine the automation with your feedback.",
          },
          {
            step: "04",
            title: "Deployment",
            description: "Launch with monitoring, documentation, and team training.",
          },
        ]}
        benefits={[
          "Automation that matches your exact processes",
          "No monthly platform fees—you own the code",
          "Blazing fast with Go's performance",
          "Complete control over your data",
          "No artificial limits on usage or integrations",
          "Scale to millions of operations without issues",
          "Modify and extend as your business evolves",
          "Professional support and maintenance",
        ]}
        faqs={[
          {
            question: "Why use Go instead of platforms like Zapier or Make?",
            answer:
              "Platforms like Zapier and Make are great for simple automations but have significant limitations: they charge per operation, restrict complex logic, have rate limits, and your data flows through their servers. Custom Go automation has no per-operation costs, handles any complexity, runs at incredible speeds, and keeps your data private. For businesses with significant automation needs, custom systems are more cost-effective within months.",
          },
          {
            question: "How reliable are custom automation systems?",
            answer:
              "Go is used by companies like Google, Uber, and Dropbox for mission-critical systems. We build with the same production-grade patterns: automatic retries, error handling, transaction safety, and comprehensive logging. Our systems include monitoring and alerting so issues are caught and resolved quickly.",
          },
          {
            question: "What if we need to modify the automation later?",
            answer:
              "You own the code completely. We build with clean, documented code that can be modified by any competent developer—including us for ongoing support, or another team if you prefer. We're not trying to lock you in.",
          },
          {
            question: "How do you handle integrations with other software?",
            answer:
              "Go has excellent support for APIs, webhooks, databases, and message queues. We can integrate with virtually any modern software. For legacy systems without APIs, we can often build custom connectors using file exports, email processing, or database connections.",
          },
          {
            question: "What's the typical cost for custom automation?",
            answer:
              "Custom automation projects typically range from ₹75,000-₹3,00,000 depending on complexity. This is a one-time development cost—no monthly fees for the automation itself. Hosting costs (if we manage it) run ₹2,000-₹10,000/month depending on scale. For businesses running significant automations, this is often cheaper than platform subscriptions within 6-12 months.",
          },
          {
            question: "How long does it take to build custom automation?",
            answer:
              "Simple automations take 2-4 weeks. Comprehensive business process automation typically takes 6-12 weeks. We deliver in phases, so you start seeing value early while we build out the complete system.",
          },
        ]}
        cta={{
          title: "Ready for automation that actually fits?",
          description: "Let's discuss your processes and explore how custom automation can transform your operations.",
        }}
      />
      <CTA />
    </>
  )
}
