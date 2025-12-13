import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { CTA } from "@/components/home/cta"
import { Globe, Search, Smartphone, Zap, Shield, BarChart3, Palette, Headphones } from "lucide-react"

export const metadata: Metadata = {
  title: "Business Website Development | Professional Websites in Dehradun",
  description:
    "Professional business website development services in Dehradun and Rishikesh. Get a modern, SEO-optimized website that converts visitors into customers.",
}

export default function BusinessWebsitesPage() {
  return (
    <>
      <ServicePageTemplate
        breadcrumb={{ label: "Web Development", href: "/services/web-development" }}
        title="Business Website Development"
        description="Professional websites that establish your online presence, build credibility, and convert visitors into loyal customers. Perfect for businesses in Dehradun and Rishikesh."
        problemStatement={{
          title: "Your business deserves more than a basic website",
          description:
            "Many businesses struggle with outdated websites that fail to represent their brand or convert visitors. In today's digital-first world, your website is often the first impression customers have of your business.",
          points: [
            "Outdated design that doesn't reflect your brand quality",
            "Poor mobile experience losing potential customers",
            "Slow loading speeds frustrating visitors",
            "No clear calls-to-action to generate leads",
            "Difficult to update content without technical help",
            "Poor search engine visibility",
          ],
        }}
        solution={{
          title: "A website that works as hard as you do",
          description:
            "We build modern, professional websites that establish trust, showcase your services effectively, and include strategic calls-to-action that convert visitors into leads. Every website is optimized for speed, mobile devices, and search engines.",
        }}
        features={[
          {
            icon: Palette,
            title: "Custom Design",
            description: "Unique design tailored to your brand identity and target audience.",
          },
          {
            icon: Smartphone,
            title: "Mobile-First",
            description: "Responsive design that looks perfect on all devices and screen sizes.",
          },
          {
            icon: Zap,
            title: "Fast Loading",
            description: "Optimized for speed to provide the best user experience.",
          },
          {
            icon: Search,
            title: "SEO Ready",
            description: "Built-in SEO best practices to improve your search visibility.",
          },
          {
            icon: Shield,
            title: "Secure & Reliable",
            description: "SSL certificates and security best practices to protect your site.",
          },
          {
            icon: BarChart3,
            title: "Analytics",
            description: "Track visitors and understand how people interact with your site.",
          },
          {
            icon: Globe,
            title: "Easy CMS",
            description: "Simple content management so you can update your site easily.",
          },
          {
            icon: Headphones,
            title: "Ongoing Support",
            description: "Continued maintenance and support after launch.",
          },
        ]}
        techStack={["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel", "Sanity CMS"]}
        process={[
          {
            step: "01",
            title: "Discovery",
            description: "We learn about your business, target audience, and goals.",
          },
          {
            step: "02",
            title: "Design",
            description: "Custom mockups that reflect your brand and appeal to your audience.",
          },
          {
            step: "03",
            title: "Build",
            description: "Development using modern technologies for optimal performance.",
          },
          {
            step: "04",
            title: "Launch",
            description: "Testing, deployment, and training on managing your new site.",
          },
        ]}
        benefits={[
          "Professional design that builds trust with visitors",
          "Mobile-optimized for the 60%+ of users on phones",
          "Fast loading speeds for better user experience",
          "SEO-ready to improve search rankings",
          "Easy to update without technical skills",
          "Secure and reliable hosting",
          "Ongoing support and maintenance",
          "Clear ROI through lead generation",
        ]}
        faqs={[
          {
            question: "How long does it take to build a business website?",
            answer:
              "A typical business website takes 2-4 weeks from start to launch. This includes discovery, design, development, content integration, and testing. More complex sites may take longer.",
          },
          {
            question: "How much does a business website cost?",
            answer:
              "Our business websites start from ₹25,000 for a basic 5-page site. The final cost depends on the number of pages, features required, and complexity. We provide detailed quotes after understanding your needs.",
          },
          {
            question: "Will my website work on mobile phones?",
            answer:
              "All our websites are built mobile-first, meaning they're designed for mobile devices first and then enhanced for larger screens. Your site will look and work great on all devices.",
          },
          {
            question: "Can I update the website content myself?",
            answer:
              "Yes! We integrate a user-friendly content management system (CMS) that allows you to easily update text, images, and other content without any technical knowledge.",
          },
          {
            question: "Do you provide hosting?",
            answer:
              "Yes, we can set up and manage hosting for your website on fast, reliable servers. We recommend Vercel for optimal performance, but can work with your preferred hosting provider.",
          },
          {
            question: "What about SEO?",
            answer:
              "All our websites are built with SEO best practices including proper structure, meta tags, fast loading speeds, and mobile optimization. We can also provide additional SEO services to improve your rankings.",
          },
        ]}
        cta={{
          title: "Ready to upgrade your online presence?",
          description:
            "Let's create a professional website that represents your business and converts visitors into customers.",
        }}
      />
      <CTA />
    </>
  )
}
