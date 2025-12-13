import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { CTA } from "@/components/home/cta"
import { Workflow, Zap, Shield, Code2, RefreshCw, Database, Clock, Headphones } from "lucide-react"

export const metadata: Metadata = {
  title: "n8n Workflow Automation | Business Process Automation in Dehradun",
  description:
    "n8n workflow automation services for businesses in Uttarakhand. Connect your tools and automate complex multi-step business processes.",
}

export default function N8nWorkflowsPage() {
  return (
    <>
      <ServicePageTemplate
        breadcrumb={{ label: "Automation Services", href: "/services/automation" }}
        title="n8n Workflow Automation"
        description="Connect your business tools and automate complex multi-step processes with n8n. From simple data syncing to sophisticated AI-powered workflows, we build automation that works."
        problemStatement={{
          title: "Your tools don't talk to each other",
          description:
            "Most businesses use dozens of different tools that don't integrate well. This leads to manual data entry, copy-pasting between systems, and processes that depend on someone remembering to do something.",
          points: [
            "Manual data entry between systems",
            "Copy-pasting information across tools",
            "Processes that depend on human memory",
            "Inconsistent data across platforms",
            "Hours wasted on repetitive tasks",
            "Errors from manual handling",
          ],
        }}
        solution={{
          title: "Automated workflows that never forget",
          description:
            "We build n8n workflows that connect your tools and automate multi-step processes. When something happens in one system, the right actions trigger automatically across all connected tools.",
        }}
        features={[
          {
            icon: Workflow,
            title: "Multi-Step Workflows",
            description: "Complex automation with conditional logic, loops, and branches.",
          },
          {
            icon: Zap,
            title: "500+ Integrations",
            description: "Connect with virtually any tool through n8n's extensive library.",
          },
          {
            icon: Code2,
            title: "Custom Code",
            description: "Add custom JavaScript for complex logic when needed.",
          },
          {
            icon: Database,
            title: "Data Transformation",
            description: "Transform and map data between different systems.",
          },
          {
            icon: Shield,
            title: "Error Handling",
            description: "Robust error handling with notifications and retries.",
          },
          {
            icon: RefreshCw,
            title: "Self-Hosted",
            description: "Your workflows run on your infrastructure for privacy.",
          },
          {
            icon: Clock,
            title: "Scheduled Triggers",
            description: "Run workflows on schedules or in response to events.",
          },
          {
            icon: Headphones,
            title: "Monitoring",
            description: "Dashboard to monitor workflow health and execution.",
          },
        ]}
        techStack={["n8n", "Node.js", "PostgreSQL", "Docker", "REST APIs", "Webhooks"]}
        process={[
          {
            step: "01",
            title: "Audit",
            description: "Map your current processes and identify automation opportunities.",
          },
          {
            step: "02",
            title: "Design",
            description: "Plan the workflow logic, triggers, and integrations.",
          },
          {
            step: "03",
            title: "Build",
            description: "Develop and test the automation workflows.",
          },
          {
            step: "04",
            title: "Deploy",
            description: "Launch workflows and monitor for optimal performance.",
          },
        ]}
        benefits={[
          "Save 20+ hours per week on manual tasks",
          "Eliminate human error in data handling",
          "Real-time data sync across all tools",
          "Scalable automation that grows with you",
          "Self-hosted for data privacy",
          "Lower cost than enterprise automation tools",
          "Flexible and customizable workflows",
          "Ongoing monitoring and support",
        ]}
        faqs={[
          {
            question: "What is n8n?",
            answer:
              "n8n is an open-source workflow automation tool that lets you connect different apps and services to automate repetitive tasks. Think of it as a more powerful and customizable alternative to Zapier that you can self-host.",
          },
          {
            question: "What can be automated with n8n?",
            answer:
              "Almost any process that involves multiple tools can be automated. Common examples include: syncing data between CRM and email tools, automatically creating tasks from form submissions, sending notifications based on events, generating reports, and much more.",
          },
          {
            question: "How is n8n different from Zapier?",
            answer:
              "n8n can be self-hosted (better for data privacy), has more flexible workflows with complex logic, costs less for high-volume automation, and allows custom code when needed. It's ideal for businesses with complex automation needs.",
          },
          {
            question: "Do I need to host anything?",
            answer:
              "We can set up and manage n8n hosting for you on reliable cloud infrastructure. Alternatively, we can deploy to your existing servers if you prefer to maintain full control.",
          },
          {
            question: "What if a workflow fails?",
            answer:
              "We build error handling into every workflow including retries, fallbacks, and notifications. You'll be alerted if something goes wrong, and we can set up automatic recovery in many cases.",
          },
          {
            question: "Can you automate custom/internal tools?",
            answer:
              "Yes! If your tool has an API, we can integrate it with n8n. We can also build custom nodes for proprietary systems that don't have standard integrations.",
          },
        ]}
        cta={{
          title: "Ready to automate your workflows?",
          description: "Let's identify opportunities to save time and eliminate manual work in your business.",
        }}
      />
      <CTA />
    </>
  )
}
