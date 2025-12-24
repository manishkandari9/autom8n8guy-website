import type { Metadata } from "next"
import { LocationPageTemplate } from "@/components/location-page-template"
import { CTA } from "@/components/home/cta"

export const metadata: Metadata = {
  title: "Business Automation Services in Dehradun | Autom8n8 Systems",
  description:
    "Custom business automation solutions for Dehradun businesses. Streamline operations, reduce manual work, and boost efficiency with our Go-powered automation systems.",
}

export default function DehradunAutomationPage() {
  return (
    <>
      <LocationPageTemplate
        location="Dehradun"
        service="Business Automation"
        title="Business Automation Services in Dehradun"
        description="Eliminate repetitive tasks and streamline your operations with custom automation solutions."
        services={[
          {
            icon: "Workflow",
            title: "Workflow Automation",
            description: "Automate multi-step business processes.",
            href: "/services/automation/workflow-automation",
          },
          {
            icon: "Database",
            title: "Data Automation",
            description: "Automatic data syncing and reporting.",
            href: "/services/automation/data-automation",
          },
          {
            icon: "Zap",
            title: "Task Automation",
            description: "Eliminate repetitive daily tasks.",
            href: "/services/automation/task-automation",
          },
          {
            icon: "Settings",
            title: "Custom Integrations",
            description: "Connect all your tools and systems.",
            href: "/services/automation/integrations",
          },
          {
            icon: "RefreshCw",
            title: "Process Optimization",
            description: "Optimize workflows before automation.",
            href: "/services/automation/process-optimization",
          },
          {
            icon: "BarChart3",
            title: "Reporting Automation",
            description: "Scheduled reports and analytics.",
            href: "/services/automation/reporting",
          },
        ]}
      />
      <CTA />
    </>
  )
}
