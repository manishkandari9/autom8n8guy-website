import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { CTA } from "@/components/home/cta"
import { Layers, Shield, Zap, Users, Database, Code2, RefreshCw, Headphones } from "lucide-react"

export const metadata: Metadata = {
  title: "Custom Web Application Development | Tailored Solutions in Uttarakhand",
  description:
    "Custom web application development for businesses in Dehradun and Rishikesh. Tailored solutions built to solve your unique business challenges.",
}

export default function CustomWebAppsPage() {
  return (
    <>
      <ServicePageTemplate
        breadcrumb={{ label: "Full-Stack Development", href: "/services/full-stack" }}
        title="Custom Web Application Development"
        description="Tailored web applications built to solve your unique business challenges. From internal tools to customer-facing platforms, we create solutions that fit your exact needs."
        problemStatement={{
          title: "Off-the-shelf software doesn't fit your business",
          description:
            "Generic software solutions often require you to change your processes to fit the tool. This leads to workarounds, inefficiencies, and frustrated teams. Your business is unique, and your software should be too.",
          points: [
            "Paying for features you don't need",
            "Missing features critical to your workflow",
            "Data scattered across multiple tools",
            "Manual workarounds slowing your team",
            "Unable to scale as your business grows",
            "Locked into vendor limitations",
          ],
        }}
        solution={{
          title: "Software that works the way you do",
          description:
            "We build custom web applications tailored to your exact requirements. From the ground up, every feature is designed to support your workflow, integrate with your existing tools, and scale with your business.",
        }}
        features={[
          {
            icon: Layers,
            title: "Custom Architecture",
            description: "Built from scratch to match your exact business requirements.",
          },
          {
            icon: Shield,
            title: "Enterprise Security",
            description: "Role-based access, encryption, and security best practices.",
          },
          {
            icon: Zap,
            title: "High Performance",
            description: "Optimized for speed and reliability under heavy usage.",
          },
          {
            icon: Users,
            title: "Multi-User Support",
            description: "Support for teams with different roles and permissions.",
          },
          {
            icon: Database,
            title: "Scalable Database",
            description: "Database design that grows with your data and users.",
          },
          {
            icon: Code2,
            title: "API Integration",
            description: "Connect with your existing tools and third-party services.",
          },
          {
            icon: RefreshCw,
            title: "Iterative Development",
            description: "Regular updates and improvements based on feedback.",
          },
          {
            icon: Headphones,
            title: "Dedicated Support",
            description: "Ongoing maintenance and technical support.",
          },
        ]}
        techStack={["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "Redis", "AWS", "Docker"]}
        process={[
          {
            step: "01",
            title: "Discovery",
            description: "Deep dive into your business processes and requirements.",
          },
          {
            step: "02",
            title: "Architecture",
            description: "Design the technical blueprint for your application.",
          },
          {
            step: "03",
            title: "Development",
            description: "Build in sprints with regular demos and feedback.",
          },
          {
            step: "04",
            title: "Deployment",
            description: "Launch, monitor, and iterate based on real usage.",
          },
        ]}
        benefits={[
          "Perfectly fits your business processes",
          "Eliminates manual workarounds",
          "Integrates with your existing tools",
          "Scales as your business grows",
          "You own the code and data",
          "No per-user subscription fees",
          "Dedicated support and maintenance",
          "Competitive advantage through custom tooling",
        ]}
        faqs={[
          {
            question: "How long does custom development take?",
            answer:
              "Timelines vary based on complexity. A simple application might take 4-6 weeks, while complex enterprise solutions can take 3-6 months. We provide detailed timelines during the discovery phase.",
          },
          {
            question: "How much does a custom web application cost?",
            answer:
              "Custom applications start from ₹2,00,000 for simple tools. Complex applications with multiple integrations and features can range significantly higher. We provide detailed quotes after understanding your requirements.",
          },
          {
            question: "Will I own the code?",
            answer:
              "Yes, you own 100% of the code we write for you. We provide complete source code, documentation, and can assist with knowledge transfer if you want to maintain it in-house.",
          },
          {
            question: "Can you integrate with our existing systems?",
            answer:
              "Absolutely. We build APIs and integrations to connect with your existing tools, databases, and third-party services. This includes CRMs, ERPs, payment systems, and more.",
          },
          {
            question: "What about ongoing maintenance?",
            answer:
              "We offer maintenance packages that include bug fixes, security updates, performance monitoring, and feature enhancements. We can also train your team to handle basic maintenance.",
          },
          {
            question: "How do you handle changes during development?",
            answer:
              "We use agile methodology with regular sprints and demos. This allows you to see progress, provide feedback, and request changes throughout the development process.",
          },
        ]}
        cta={{
          title: "Have a unique business challenge?",
          description: "Let's discuss how a custom web application can solve your specific needs.",
        }}
      />
      <CTA />
    </>
  )
}
