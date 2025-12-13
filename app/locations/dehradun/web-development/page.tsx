import type { Metadata } from "next"
import { LocationPageTemplate } from "@/components/location-page-template"
import { CTA } from "@/components/home/cta"
import { Globe, ShoppingCart, FileText, Briefcase, Search, RefreshCw } from "lucide-react"

export const metadata: Metadata = {
  title: "Web Development in Dehradun | Website Design Services",
  description:
    "Professional web development services in Dehradun. Custom websites, e-commerce, and landing pages for businesses in Uttarakhand's capital city.",
  keywords: [
    "web development dehradun",
    "website design dehradun",
    "web developer dehradun",
    "ecommerce website dehradun",
    "IT company dehradun",
  ],
}

export default function DehradunWebDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "TechCraft Solutions - Web Development Dehradun",
            description: "Professional web development services in Dehradun, Uttarakhand",
            url: "https://techcraft.in/locations/dehradun/web-development",
            telephone: "+91-9876543210",
            email: "hello@techcraft.in",
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
            serviceType: "Web Development",
          }),
        }}
      />
      <LocationPageTemplate
        location="Dehradun"
        service="Web Development"
        title="Web Development Services in Dehradun"
        description="Professional website design and development for businesses in Dehradun. From local shops to growing startups, we build websites that establish your online presence and drive growth."
        heroImage="/dehradun-city-landscape-modern-development.jpg"
        introduction={{
          title: "Your local web development partner in Dehradun",
          description:
            "As Uttarakhand's capital city grows, businesses in Dehradun need professional online presence to compete. We're a local team that understands the Dehradun market and builds websites that resonate with your target audience.",
          points: [
            "Local team based in Dehradun",
            "Understanding of local market dynamics",
            "Affordable solutions for all budgets",
            "Face-to-face meetings available",
            "Ongoing support and maintenance",
            "Quick turnaround times",
          ],
        }}
        services={[
          {
            icon: Briefcase,
            title: "Business Websites",
            description: "Professional websites that establish credibility for Dehradun businesses.",
            href: "/services/web-development/business-websites",
          },
          {
            icon: ShoppingCart,
            title: "E-commerce Websites",
            description: "Online stores with Indian payment integration for local retailers.",
            href: "/services/web-development/ecommerce",
          },
          {
            icon: FileText,
            title: "Landing Pages",
            description: "High-converting landing pages for campaigns and lead generation.",
            href: "/services/web-development/landing-pages",
          },
          {
            icon: Globe,
            title: "Portfolio Websites",
            description: "Showcase your work with beautiful portfolio sites.",
            href: "/services/web-development/portfolio",
          },
          {
            icon: Search,
            title: "SEO Optimization",
            description: "Rank higher in local searches for Dehradun keywords.",
            href: "/services/web-development/seo-friendly",
          },
          {
            icon: RefreshCw,
            title: "Website Redesign",
            description: "Modernize your existing website for better results.",
            href: "/services/web-development/redesign",
          },
        ]}
        industries={[
          {
            name: "Education & Coaching",
            description: "Websites for schools, coaching centers, and educational institutions in Dehradun.",
          },
          {
            name: "Healthcare",
            description: "Medical practice websites with appointment booking for Dehradun's healthcare providers.",
          },
          {
            name: "Real Estate",
            description: "Property listing websites for real estate agents and developers.",
          },
          {
            name: "Restaurants & Cafes",
            description: "Online menus and ordering systems for Dehradun's food businesses.",
          },
          {
            name: "Professional Services",
            description: "Websites for lawyers, accountants, and consultants in the city.",
          },
          {
            name: "Retail & Local Shops",
            description: "E-commerce solutions to bring local shops online.",
          },
        ]}
        benefits={[
          "Local team you can meet in person",
          "Understanding of Dehradun market",
          "Competitive pricing for local businesses",
          "Fast communication and support",
          "Hindi and English support",
          "Flexible payment options",
          "References from local clients",
          "Ongoing maintenance and updates",
        ]}
        faqs={[
          {
            question: "How much does a website cost in Dehradun?",
            answer:
              "Our website packages start from ₹15,000 for basic sites. Business websites typically range from ₹25,000-₹75,000, while e-commerce sites start from ₹75,000. We offer flexible payment options for Dehradun businesses.",
          },
          {
            question: "How long does it take to build a website?",
            answer:
              "A basic website takes 2-3 weeks, while more complex sites may take 4-6 weeks. We can expedite timelines for urgent requirements. You'll be involved throughout the process.",
          },
          {
            question: "Do you provide website hosting?",
            answer:
              "Yes, we offer reliable hosting services with Indian servers for fast loading speeds. Our hosting packages include SSL certificates, regular backups, and technical support.",
          },
          {
            question: "Can you help with content and images?",
            answer:
              "We can help write content for your website and source professional images. For local businesses, we can also arrange photography of your premises and products.",
          },
          {
            question: "Will my website work on mobile phones?",
            answer:
              "Yes, all our websites are mobile-responsive. With over 70% of users in Dehradun accessing the internet via mobile, this is essential for reaching your audience.",
          },
          {
            question: "Can I update the website myself?",
            answer:
              "Yes, we provide an easy-to-use content management system and training. You'll be able to update text, images, and products without technical knowledge.",
          },
        ]}
        localInfo={{
          areas: [
            "Rajpur Road",
            "Paltan Bazaar",
            "Clock Tower",
            "Mussoorie Road",
            "IT Park",
            "Prem Nagar",
            "Nehru Colony",
            "Race Course",
          ],
          landmarks: [
            "Robber's Cave (Gucchu Pani)",
            "Forest Research Institute",
            "Clock Tower Market",
            "Pacific Mall",
            "ISBT Dehradun",
          ],
        }}
      />
      <CTA />
    </>
  )
}
