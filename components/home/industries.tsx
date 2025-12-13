"use client"

import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren, StaggerItem } from "@/components/animations/stagger-children"

const industries = [
  {
    name: "Yoga & Wellness",
    description: "Digital solutions for yoga studios, wellness centers, and retreat facilities in Rishikesh.",
    href: "/industries/yoga-wellness",
    image: "/yoga-wellness-studio-peaceful.jpg",
  },
  {
    name: "Tourism & Hotels",
    description: "Booking systems and digital presence for hotels, resorts, and travel agencies.",
    href: "/industries/tourism-hotels",
    image: "/himalayan-hotel-resort-tourism.jpg",
  },
  {
    name: "Education",
    description: "E-learning platforms and management systems for schools and coaching centers.",
    href: "/industries/education",
    image: "/modern-education-learning-platform.jpg",
  },
  {
    name: "Small Businesses",
    description: "Affordable digital solutions to help local businesses grow online.",
    href: "/industries/small-business",
    image: "/small-business-local-shop.jpg",
  },
  {
    name: "Startups",
    description: "MVP development and scalable solutions for innovative startups.",
    href: "/industries/startups",
    image: "/startup-team-modern-office.jpg",
  },
  {
    name: "Local Services",
    description: "Online presence and booking systems for service-based businesses.",
    href: "/industries/local-services",
    image: "/professional-service-business.jpg",
  },
]

export function Industries() {
  return (
    <Section className="bg-card">
      <FadeIn>
        <SectionHeader
          eyebrow="Industries We Serve"
          title="Solutions tailored for your industry"
          description="We understand the unique challenges of businesses in Uttarakhand."
        />
      </FadeIn>

      <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((industry) => (
          <StaggerItem key={industry.name}>
            <Link
              href={industry.href}
              className="group block overflow-hidden rounded-2xl border border-border bg-background hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={industry.image || "/placeholder.svg"}
                  alt={industry.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">{industry.name}</h3>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </Section>
  )
}
