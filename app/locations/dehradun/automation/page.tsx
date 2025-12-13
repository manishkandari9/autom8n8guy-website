import type { Metadata } from "next"
import { LocationPageTemplate } from "@/components/location-page-template"
import { CTA } from "@/components/home/cta"
import { Workflow, Zap, RefreshCw, Database, Settings, BarChart3 } from "lucide-react"

export const metadata: Metadata = {
  title: "Business Automation Services in Dehradun | Autom8n8 Systems",
  description:
    "Custom business automation solutions for Dehradun businesses. Streamline operations, reduce manual work, and boost efficiency with our Go-powered automation systems.",
  keywords: [
    "business automation dehradun",
    "workflow automation uttarakhand",
    "process automation dehradun",
    "custom automation solutions",
    "IT automation company dehradun",
  ],
}

export default function DehradunAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Autom8n8 Systems - Business Automation Dehradun",
            description: "Custom business automation solutions for businesses in Dehradun, Uttarakhand",
            url: "https://autom8n8.com/locations/dehradun/automation",
            telephone: "+91-9876543210",
            email: "hello@autom8n8.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Dehradun",
              addressRegion: "Uttarakhand",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "30.3165",
              longitude: "78.0322",
            },
            areaServed: {
              "@type": "City",
              name: "Dehradun",
            },
            serviceType: "Business Automation",
          }),
        }}
      />
      <LocationPageTemplate
        location="Dehradun"
        service="Business Automation"
        title="Business Automation Services in Dehradun"
        description="Eliminate repetitive tasks and streamline your operations with custom automation solutions. We build powerful, reliable automation systems using modern Go-based architecture that grows with your Dehradun business."
        heroImage="/dehradun-city-landscape-modern-development.jpg"
        introduction={{
          title: "Automate your Dehradun business operations",
          description:
            "As Dehradun emerges as a growing business hub in Uttarakhand, local companies face increasing pressure to operate efficiently. Manual processes that worked before are now bottlenecks. Our custom automation solutions help you do more with less—reducing errors, saving time, and freeing your team for high-value work.",
          points: [
            "Custom-built automation systems (not cookie-cutter solutions)",
            "Go-powered backend for reliability and performance",
            "Integration with your existing tools and software",
            "Scalable architecture that grows with your business",
            "Local team with face-to-face support available",
            "Training and ongoing maintenance included",
          ],
        }}
        services={[
          {
            icon: Workflow,
            title: "Workflow Automation",
            description: "Automate multi-step business processes from lead capture to fulfillment.",
            href: "/services/automation/workflow-automation",
          },
          {
            icon: Database,
            title: "Data Automation",
            description: "Automatic data entry, syncing, and reporting across your systems.",
            href: "/services/automation/data-automation",
          },
          {
            icon: Zap,
            title: "Task Automation",
            description: "Eliminate repetitive tasks like follow-ups, reminders, and notifications.",
            href: "/services/automation/task-automation",
          },
          {
            icon: Settings,
            title: "Custom Integrations",
            description: "Connect your apps, databases, and services into unified workflows.",
            href: "/services/automation/integrations",
          },
          {
            icon: RefreshCw,
            title: "Process Optimization",
            description: "Analyze and redesign workflows before automating them.",
            href: "/services/automation/process-optimization",
          },
          {
            icon: BarChart3,
            title: "Reporting Automation",
            description: "Automatic report generation and delivery on your schedule.",
            href: "/services/automation/reporting",
          },
        ]}
        industries={[
          {
            name: "Education & Coaching Institutes",
            description:
              "Automate admissions, fee collection, attendance tracking, and parent communications for Dehradun schools and coaching centers.",
          },
          {
            name: "Healthcare & Clinics",
            description:
              "Streamline appointment scheduling, patient reminders, billing, and record management for medical practices.",
          },
          {
            name: "Real Estate Agencies",
            description:
              "Automate lead follow-ups, property listing updates, document generation, and client communications.",
          },
          {
            name: "Retail & E-commerce",
            description:
              "Inventory management, order processing, shipping updates, and customer notifications on autopilot.",
          },
          {
            name: "Professional Services",
            description:
              "Client onboarding, invoicing, project tracking, and reporting automation for consultants and agencies.",
          },
          {
            name: "Manufacturing & Trading",
            description: "Purchase orders, inventory alerts, vendor management, and supply chain automation.",
          },
        ]}
        benefits={[
          "Reduce manual data entry by up to 90%",
          "Eliminate human errors in repetitive processes",
          "Free your team for customer-facing work",
          "Get real-time visibility into operations",
          "Scale operations without adding headcount",
          "Custom solutions tailored to your business",
          "Local support team in Dehradun",
          "Ongoing optimization and maintenance",
        ]}
        faqs={[
          {
            question: "What kind of tasks can you automate for Dehradun businesses?",
            answer:
              "We automate a wide range of tasks including lead capture and follow-up, invoice generation and sending, appointment scheduling and reminders, data entry and synchronization, report generation, email and WhatsApp notifications, inventory updates, and much more. Any repetitive process can likely be automated.",
          },
          {
            question: "How much does business automation cost in Dehradun?",
            answer:
              "Our automation solutions start from ₹50,000 for simple workflows. More comprehensive automation systems range from ₹1,00,000-₹3,00,000 depending on complexity. We provide detailed quotes after understanding your specific requirements. The ROI typically pays back the investment within 3-6 months.",
          },
          {
            question: "Do you use n8n or other automation platforms?",
            answer:
              "No, we build custom automation solutions using Go and modern web technologies. This gives you a system that's faster, more reliable, and fully customized to your needs—without the limitations and ongoing costs of third-party platforms. You own the solution completely.",
          },
          {
            question: "How long does it take to implement automation?",
            answer:
              "Simple automations can be deployed in 2-3 weeks. Comprehensive business process automation typically takes 4-8 weeks. We work in phases, delivering value quickly while building out the complete solution.",
          },
          {
            question: "Will automation work with my existing software?",
            answer:
              "Yes, we integrate with virtually any software that has an API or can export data. This includes Tally, WhatsApp Business, Google Workspace, Microsoft 365, popular CRMs, e-commerce platforms, and custom databases. We'll map out integrations during our discovery phase.",
          },
          {
            question: "Do you provide training on the automation systems?",
            answer:
              "Absolutely. We provide comprehensive training for your team, along with documentation. Most of our automations run in the background, but where there's a dashboard or interface, we ensure everyone knows how to use it effectively.",
          },
        ]}
        localInfo={{
          areas: [
            "Rajpur Road",
            "IT Park Sahastradhara",
            "GMS Road",
            "Haridwar Road",
            "Clock Tower",
            "Paltan Bazaar",
            "Nehru Colony",
            "Race Course",
            "Selaqui",
            "Vikasnagar",
          ],
          landmarks: [
            "IT Park Dehradun",
            "MDDA Commercial Complex",
            "Pacific Mall",
            "Clock Tower Market",
            "Forest Research Institute",
          ],
        }}
      />
      <CTA />
    </>
  )
}
