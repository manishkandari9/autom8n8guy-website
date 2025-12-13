import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { CTA } from "@/components/home/cta"
import { Target, Zap, BarChart3, MousePointer, Layers, RefreshCw, TestTube, Rocket } from "lucide-react"

export const metadata: Metadata = {
  title: "Landing Page Development | High-Converting Pages in Uttarakhand",
  description:
    "High-converting landing page development for businesses in Dehradun and Rishikesh. Designed to capture leads and drive specific actions.",
}

export default function LandingPagesPage() {
  return (
    <>
      <ServicePageTemplate
        breadcrumb={{ label: "Web Development", href: "/services/web-development" }}
        title="Landing Page Development"
        description="High-converting landing pages designed to capture leads, promote products, or drive specific actions. Perfect for marketing campaigns and product launches."
        problemStatement={{
          title: "Generic pages don't convert",
          description:
            "Sending traffic to your homepage often results in lost leads. Visitors get distracted, confused about what action to take, or simply leave. You need focused pages designed for conversion.",
          points: [
            "Low conversion rates from ad campaigns",
            "Visitors leaving without taking action",
            "No clear value proposition",
            "Competing CTAs confusing visitors",
            "Poor mobile experience killing conversions",
            "No way to track and improve performance",
          ],
        }}
        solution={{
          title: "Focused pages that convert",
          description:
            "We create landing pages with a single, clear goal. Every element is designed to guide visitors toward taking action, whether that's signing up, making a purchase, or contacting you.",
        }}
        features={[
          {
            icon: Target,
            title: "Conversion Focused",
            description: "Every element designed to drive a single action from visitors.",
          },
          {
            icon: Zap,
            title: "Lightning Fast",
            description: "Optimized for speed because every second of delay costs conversions.",
          },
          {
            icon: MousePointer,
            title: "Compelling CTAs",
            description: "Strategic calls-to-action that motivate visitors to take action.",
          },
          {
            icon: Layers,
            title: "A/B Testing Ready",
            description: "Built to support testing different versions for optimization.",
          },
          {
            icon: BarChart3,
            title: "Analytics Tracking",
            description: "Detailed tracking to measure performance and ROI.",
          },
          {
            icon: RefreshCw,
            title: "Easy Updates",
            description: "Simple to update for different campaigns and offers.",
          },
          {
            icon: TestTube,
            title: "Proven Frameworks",
            description: "Based on conversion psychology and proven design patterns.",
          },
          {
            icon: Rocket,
            title: "Quick Turnaround",
            description: "Fast delivery so you can launch campaigns sooner.",
          },
        ]}
        techStack={["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel Analytics"]}
        process={[
          {
            step: "01",
            title: "Strategy",
            description: "Define the goal, audience, and key messaging for your landing page.",
          },
          {
            step: "02",
            title: "Wireframe",
            description: "Structure the page flow to maximize conversions.",
          },
          {
            step: "03",
            title: "Design",
            description: "Create a compelling visual design that builds trust.",
          },
          {
            step: "04",
            title: "Launch",
            description: "Deploy with tracking and provide optimization recommendations.",
          },
        ]}
        benefits={[
          "Higher conversion rates from your ad spend",
          "Clear, focused messaging that resonates",
          "Mobile-optimized for all visitors",
          "Fast loading for better performance",
          "Built-in analytics for tracking ROI",
          "A/B testing ready for optimization",
          "Quick turnaround for campaign launches",
          "Ongoing optimization support",
        ]}
        faqs={[
          {
            question: "What is a landing page vs a regular website page?",
            answer:
              "A landing page is a standalone page designed with a single goal in mind - usually to capture leads or drive a specific action. Unlike regular website pages with multiple navigation options, landing pages remove distractions and focus visitors on one action.",
          },
          {
            question: "How quickly can you build a landing page?",
            answer:
              "We can typically deliver a landing page within 1-2 weeks. For urgent campaigns, we offer expedited timelines. The exact timeline depends on the complexity and content requirements.",
          },
          {
            question: "What makes a landing page convert well?",
            answer:
              "High-converting landing pages have a clear value proposition, compelling headlines, trust signals, strong CTAs, fast loading speeds, and mobile optimization. We apply proven conversion principles to every page we build.",
          },
          {
            question: "Do you help with the content?",
            answer:
              "Yes, we can help develop compelling copy for your landing page based on your target audience and goals. We also work with the content you provide if you prefer.",
          },
          {
            question: "Can you integrate with my email marketing or CRM?",
            answer:
              "Absolutely. We integrate landing pages with popular tools like Mailchimp, HubSpot, ConvertKit, and many others. All leads captured go directly to your preferred system.",
          },
          {
            question: "How do you measure landing page success?",
            answer:
              "We set up comprehensive tracking including page views, form submissions, conversion rates, and heat maps. We provide access to analytics dashboards so you can monitor performance in real-time.",
          },
        ]}
        cta={{
          title: "Ready to convert more visitors?",
          description: "Let's create a landing page that turns your traffic into leads and customers.",
        }}
      />
      <CTA />
    </>
  )
}
