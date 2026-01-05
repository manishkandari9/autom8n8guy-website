import type { Metadata } from "next"
import { LocationPageTemplate } from "@/components/location-page-template"
import { CTA } from "@/components/home/cta"
import { Workflow, Database, Zap, Settings, RefreshCw, BarChart3 } from "lucide-react"

export const metadata: Metadata = {
  title: "Custom Automation in Dehradun | Business Process Automation",
  description:
    "Custom business automation solutions for Dehradun companies. Go-based automation, workflow optimization, and integration services.",
  keywords: [
    "automation dehradun",
    "business process automation",
    "workflow automation uttarakhand",
    "integration services dehradun",
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
            name: "Autom8n8 Systems - Automation Dehradun",
            description: "Custom business automation solutions for Dehradun companies",
            url: "https://autom8n8.in/locations/dehradun/automation",
            telephone: "+91-9876543210",
            email: "hello@autom8n8.in",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Dehradun",
              addressRegion: "Uttarakhand",
              addressCountry: "IN",
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
        title="Custom Business Automation in Dehradun"
        description="Streamline your operations with custom Go-based automation. Reduce manual work, increase efficiency, and scale your business without hiring more staff."
        heroImage="/dehradun-city-landscape-modern-development.jpg"
        introduction={{
          title: "Automation built for Dehradun businesses",
          description:
            "Repetitive tasks slow down growing businesses. Our custom Go-based automation solutions help Dehradun companies automate workflows, integrate systems, and focus on growth.",
          points: [
            "Custom Go-based automation solutions",
            "System integration and API development",
            "Data processing and migration",
            "Workflow automation",
            "Cost-effective compared to hiring",
            "Scalable and maintainable code",
          ],
        }}
        services={[
          {
            icon: Workflow,
            title: "Workflow Automation",
            description: "Automate repetitive business processes and workflows.",
            href: "/services/automation/custom-automation",
          },
          {
            icon: Database,
            title: "Data Integration",
            description: "Connect different systems and automate data flow.",
            href: "/services/automation/custom-automation",
          },
          {
            icon: Zap,
            title: "API Development",
            description: "Build custom APIs to connect your business tools.",
            href: "/services/automation/custom-automation",
          },
          {
            icon: Settings,
            title: "System Integration",
            description: "Make your software tools work together seamlessly.",
            href: "/services/automation/custom-automation",
          },
          {
            icon: RefreshCw,
            title: "Process Optimization",
            description: "Analyze and optimize your business processes.",
            href: "/services/automation/custom-automation",
          },
          {
            icon: BarChart3,
            title: "Analytics & Reporting",
            description: "Automated reporting and data analytics solutions.",
            href: "/services/automation/custom-automation",
          },
        ]}
        industries={[
          {
            name: "E-commerce",
            description: "Automate order processing, inventory management, and fulfillment.",
          },
          {
            name: "Finance",
            description: "Invoice processing, expense tracking, and financial reporting automation.",
          },
          {
            name: "HR & Payroll",
            description: "Automated payroll, leave management, and attendance systems.",
          },
          {
            name: "Education",
            description: "Student record automation, exam scheduling, and result processing.",
          },
          {
            name: "Healthcare",
            description: "Appointment automation, patient data management, and billing systems.",
          },
          {
            name: "Real Estate",
            description: "Property listing automation, lead management, and document processing.",
          },
        ]}
        benefits={[
          "Reduce operational costs significantly",
          "Eliminate human error",
          "Process data faster",
          "Run processes 24/7 automatically",
          "Scale without adding staff",
          "Free your team for strategic work",
          "Custom solutions for your unique needs",
          "Ongoing support and improvements",
        ]}
        faqs={[
          {
            question: "What kind of processes can be automated?",
            answer:
              "Virtually any repetitive process can be automated: data entry, invoice processing, order management, email notifications, file conversions, report generation, and more.",
          },
          {
            question: "How long does automation take?",
            answer:
              "Simple automations take 1-2 weeks. Complex multi-step workflows may take 4-8 weeks. We'll provide a timeline after understanding your needs.",
          },
          {
            question: "Will automation work with our existing tools?",
            answer:
              "Yes. We integrate with most business software including CRMs, accounting software, spreadsheets, email, and databases.",
          },
          {
            question: "What if our process needs to change?",
            answer: "Our solutions are built to be flexible. Changes can be made quickly and cost-effectively.",
          },
          {
            question: "How do you ensure our data is safe?",
            answer:
              "Security is built into every solution. We use encryption, secure APIs, and follow best practices for data protection.",
          },
        ]}
        localInfo={{
          areas: [
            "IT Park",
            "GMS Road",
            "Rajpur Road",
            "Clement Town",
            "Vikasnagar",
            "Sahastradhara Road",
            "Haridwar Road",
            "Prem Nagar",
          ],
          landmarks: [
            "IT Park Dehradun",
            "Graphic Era University",
            "DIT University",
            "MDDA",
            "Patriata Adventure Park",
          ],
        }}
      />
      <CTA />
    </>
  )
}
