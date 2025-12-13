import type { Metadata } from "next"
import Link from "next/link"
import { Section } from "@/components/ui/section"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"
import { CTA } from "@/components/home/cta"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Industries We Serve | IT Solutions for Different Sectors",
  description:
    "Specialized IT solutions for yoga & wellness, tourism, education, small businesses, startups, and local service businesses in Uttarakhand.",
}

const industries = [
  {
    name: "Yoga & Wellness",
    description:
      "Digital solutions for yoga studios, ashrams, wellness centers, and retreat facilities. Reach international audiences and manage bookings online.",
    image: "/yoga-wellness-studio-peaceful.jpg",
    href: "/industries/yoga-wellness",
    features: ["Online booking systems", "Multi-language websites", "International payments", "Course management"],
  },
  {
    name: "Tourism & Hotels",
    description:
      "Booking engines, property websites, and digital marketing for hotels, resorts, and tour operators in Uttarakhand.",
    image: "/himalayan-hotel-resort-tourism.jpg",
    href: "/industries/tourism-hotels",
    features: ["Booking engines", "Channel management", "Property websites", "Review integration"],
  },
  {
    name: "Education",
    description:
      "E-learning platforms, school management systems, and online presence for educational institutions and coaching centers.",
    image: "/modern-education-learning-platform.jpg",
    href: "/industries/education",
    features: ["LMS platforms", "Online admissions", "Student portals", "Fee management"],
  },
  {
    name: "Small Businesses",
    description:
      "Affordable digital solutions to help local businesses establish their online presence and compete effectively.",
    image: "/small-business-local-shop.jpg",
    href: "/industries/small-business",
    features: ["Business websites", "Google My Business", "Social media", "E-commerce"],
  },
  {
    name: "Startups",
    description:
      "MVP development, scalable applications, and technical partnerships for innovative startups in Uttarakhand.",
    image: "/startup-team-modern-office.jpg",
    href: "/industries/startups",
    features: ["MVP development", "Scalable architecture", "Technical co-founding", "Growth tools"],
  },
  {
    name: "Local Services",
    description:
      "Online presence and booking systems for service providers like salons, clinics, repair services, and more.",
    image: "/professional-service-business.jpg",
    href: "/industries/local-services",
    features: ["Service websites", "Online booking", "Customer reviews", "Local SEO"],
  },
]

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Industries</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Solutions tailored for your industry
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-xl text-muted-foreground text-pretty">
                We understand that different industries have unique challenges and requirements. Our solutions are
                tailored to address the specific needs of businesses in Uttarakhand.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <Section className="pt-0">
        <StaggerChildren className="space-y-8">
          {industries.map((industry, index) => (
            <StaggerItem key={industry.name}>
              <Link
                href={industry.href}
                className="group block overflow-hidden rounded-2xl border border-border bg-card hover:border-primary/30 transition-all"
              >
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div
                    className={`aspect-[4/3] lg:aspect-auto overflow-hidden ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                  >
                    <img
                      src={industry.image || "/placeholder.svg"}
                      alt={industry.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl lg:text-3xl font-bold text-foreground">{industry.name}</h2>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-muted-foreground mb-6">{industry.description}</p>
                    <ul className="flex flex-wrap gap-2">
                      {industry.features.map((feature) => (
                        <li key={feature} className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Section>

      <CTA />
    </>
  )
}
