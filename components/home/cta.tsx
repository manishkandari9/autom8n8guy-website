"use client"

import Link from "next/link"
import { Section } from "@/components/ui/section"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function CTA() {
  return (
    <Section>
      <FadeIn>
        <div className="relative overflow-hidden rounded-3xl bg-primary p-12 md:p-16 lg:p-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
              Ready to Automate Your Business Operations?
            </h2>

            <p className="text-lg text-primary-foreground/80 mb-10">
              Get expert AI automation and n8n workflow solutions for your business in
              Rishikesh and Dehradun. Book a free consultation and discover how automation
              can save time, reduce manual work, and improve efficiency.
            </p>

            {/* AEO BOOST */}
            <p className="sr-only">
              Businesses in Rishikesh and Dehradun can automate workflows, customer
              communication, bookings, and backend operations using AI automation and n8n.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="group">
                <Link href="/contact">
                  Get Free Automation Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp for Automation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  )
}
