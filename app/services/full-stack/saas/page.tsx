import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { CTA } from "@/components/home/cta"
import { Cloud, Users, CreditCard, Shield, BarChart3, Zap, Globe, Headphones } from "lucide-react"

export const metadata: Metadata = {
  title: "SaaS Development | Build Your Software Product in Uttarakhand",
  description:
    "SaaS product development for startups and businesses. Build scalable, subscription-based software products with multi-tenancy and modern architecture.",
}

export default function SaaSPage() {
  return (
    <>
      <ServicePageTemplate
        breadcrumb={{ label: "Full-Stack Development", href: "/services/full-stack" }}
        title="SaaS Development"
        description="Turn your software idea into a scalable, subscription-based product. We build modern SaaS platforms with multi-tenancy, billing, and everything needed to launch and grow."
        problemStatement={{
          title: "Building a SaaS product is complex",
          description:
            "Launching a successful SaaS product requires expertise in architecture, security, scaling, billing, and user management. Getting these fundamentals wrong can doom your product before it gains traction.",
          points: [
            "Complex multi-tenant architecture",
            "Subscription billing and management",
            "User authentication and authorization",
            "Data isolation and security",
            "Scaling for growth",
            "Onboarding and user experience",
          ],
        }}
        solution={{
          title: "A solid foundation for your SaaS",
          description:
            "We build SaaS products on proven architecture patterns that handle multi-tenancy, billing, and scaling from day one. Focus on your unique value proposition while we handle the technical complexity.",
        }}
        features={[
          {
            icon: Cloud,
            title: "Multi-Tenancy",
            description: "Isolated data and configurable features for each customer.",
          },
          {
            icon: CreditCard,
            title: "Subscription Billing",
            description: "Stripe/Razorpay integration for subscriptions, trials, and upgrades.",
          },
          {
            icon: Users,
            title: "User Management",
            description: "Team invitations, roles, permissions, and SSO support.",
          },
          {
            icon: Shield,
            title: "Enterprise Security",
            description: "SOC2-ready architecture with encryption and audit logs.",
          },
          {
            icon: BarChart3,
            title: "Admin Dashboard",
            description: "Manage customers, view metrics, and handle support.",
          },
          {
            icon: Zap,
            title: "Scalable Infrastructure",
            description: "Architecture that grows with your user base.",
          },
          {
            icon: Globe,
            title: "API First",
            description: "Well-documented APIs for integrations and mobile apps.",
          },
          {
            icon: Headphones,
            title: "Onboarding Flows",
            description: "Guided onboarding to convert trials to paying customers.",
          },
        ]}
        techStack={["Next.js", "React", "Node.js", "PostgreSQL", "Redis", "Stripe", "AWS", "Vercel"]}
        process={[
          {
            step: "01",
            title: "Validate",
            description: "Refine your idea and define the MVP scope.",
          },
          {
            step: "02",
            title: "Architect",
            description: "Design scalable, secure multi-tenant architecture.",
          },
          {
            step: "03",
            title: "Build MVP",
            description: "Develop core features to launch quickly.",
          },
          {
            step: "04",
            title: "Iterate",
            description: "Launch, gather feedback, and improve continuously.",
          },
        ]}
        benefits={[
          "Launch faster with proven architecture",
          "Built-in billing and subscription management",
          "Secure multi-tenant data isolation",
          "Scales from 10 to 10,000+ customers",
          "Professional onboarding experience",
          "API-first for future integrations",
          "Admin tools to manage your business",
          "Ongoing partnership for growth",
        ]}
        faqs={[
          {
            question: "What is multi-tenancy and why is it important?",
            answer:
              "Multi-tenancy means your application serves multiple customers (tenants) from a single codebase while keeping their data isolated. It's essential for SaaS because it allows you to scale efficiently without managing separate instances for each customer.",
          },
          {
            question: "How long does it take to build a SaaS MVP?",
            answer:
              "A typical SaaS MVP takes 2-4 months depending on complexity. This includes core functionality, user authentication, billing integration, and admin dashboard. We recommend launching quickly and iterating based on user feedback.",
          },
          {
            question: "How do you handle billing and subscriptions?",
            answer:
              "We integrate with Stripe or Razorpay for subscription billing. This includes free trials, multiple pricing tiers, upgrades/downgrades, invoicing, and handling failed payments. Everything is automated.",
          },
          {
            question: "Can you help with the business side too?",
            answer:
              "While our focus is technical development, we can advise on pricing strategies, onboarding best practices, and growth tactics based on our experience building SaaS products. We also connect you with marketing partners if needed.",
          },
          {
            question: "What happens after the MVP launches?",
            answer:
              "We offer ongoing development partnerships to add features, improve based on user feedback, and scale your product. Many clients work with us for years as they grow their SaaS business.",
          },
          {
            question: "Do you offer equity partnerships?",
            answer:
              "In select cases, we consider equity partnerships with promising SaaS startups. This depends on the idea, team, and market opportunity. Contact us to discuss your specific situation.",
          },
        ]}
        cta={{
          title: "Have a SaaS idea?",
          description: "Let's discuss how to turn your vision into a successful software product.",
        }}
      />
      <CTA />
    </>
  )
}
