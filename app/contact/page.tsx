"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import { Section } from "@/components/ui/section"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle } from "lucide-react"

const services = [
  "Business Website",
  "E-commerce Website",
  "Landing Page",
  "Custom Web Application",
  "SaaS Development",
  "Business Automation",
  "AI Chatbot",
  "AI Agent Development",
  "Other / Not Sure",
]

const budgetRanges = [
  "Under ₹25,000",
  "₹25,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹3,00,000",
  "Above ₹3,00,000",
  "Not sure yet",
]

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState("submitting")

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setFormState("success")
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Get In Touch</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Let's Build Something Great Together
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-xl text-muted-foreground text-pretty">
                Ready to transform your business with technology? Get a free consultation and project estimate. We
                respond within 24 hours.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <Section className="pt-0">
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          <FadeIn>
            <a
              href="https://wa.me/919876543210"
              className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group"
            >
              <div className="p-3 bg-green-500/10 rounded-lg">
                <MessageCircle className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  WhatsApp Us
                </h3>
                <p className="text-sm text-muted-foreground mt-1">Quick responses, usually within minutes</p>
                <p className="text-primary font-medium mt-2">+91 98765 43210</p>
              </div>
            </a>
          </FadeIn>
          <FadeIn delay={0.1}>
            <a
              href="tel:+919876543210"
              className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group"
            >
              <div className="p-3 bg-primary/10 rounded-lg">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Call Us</h3>
                <p className="text-sm text-muted-foreground mt-1">Mon-Sat, 10 AM - 7 PM IST</p>
                <p className="text-primary font-medium mt-2">+91 98765 43210</p>
              </div>
            </a>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a
              href="mailto:hello@autom8n8.com"
              className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group"
            >
              <div className="p-3 bg-primary/10 rounded-lg">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">Email Us</h3>
                <p className="text-sm text-muted-foreground mt-1">Detailed inquiries and proposals</p>
                <p className="text-primary font-medium mt-2">hello@autom8n8.com</p>
              </div>
            </a>
          </FadeIn>
        </div>

        {/* Contact Form */}
        <div className="grid lg:grid-cols-5 gap-12">
          <FadeIn className="lg:col-span-3">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Request a Free Consultation</h2>
              <p className="text-muted-foreground mb-8">
                Tell us about your project and we'll get back to you with ideas and a custom proposal.
              </p>

              {formState === "success" ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-6">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Thank you for reaching out!</h3>
                  <p className="text-muted-foreground mb-6">
                    We've received your inquiry and will get back to you within 24 hours.
                  </p>
                  <Button onClick={() => setFormState("idle")}>Submit Another Inquiry</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="you@example.com" required />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="+91 98765 43210" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Business Name</Label>
                      <Input id="company" placeholder="Your company" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interested In *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, "-")}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Estimated Budget</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range.toLowerCase().replace(/\s+/g, "-")}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full group" disabled={formState === "submitting"}>
                    {formState === "submitting" ? (
                      "Sending..."
                    ) : (
                      <>
                        Get Free Consultation
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our{" "}
                    <Link href="/privacy-policy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </p>
                </form>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="lg:col-span-2">
            <div className="space-y-8">
              {/* Service Areas */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Service Areas
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-foreground">Dehradun</p>
                    <p className="text-sm text-muted-foreground">IT Park, Rajpur Road, GMS Road, and all areas</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Rishikesh</p>
                    <p className="text-sm text-muted-foreground">Laxman Jhula, Tapovan, Muni Ki Reti, and nearby</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Remote Services</p>
                    <p className="text-sm text-muted-foreground">
                      We work with clients across India and internationally
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Business Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground">10:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground">Closed</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  WhatsApp available for urgent queries outside business hours
                </p>
              </div>

              {/* What to Expect */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-4">What happens next?</h3>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center">
                      1
                    </span>
                    <div>
                      <p className="font-medium text-foreground">We review your inquiry</p>
                      <p className="text-sm text-muted-foreground">Within 24 hours</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center">
                      2
                    </span>
                    <div>
                      <p className="font-medium text-foreground">Discovery call</p>
                      <p className="text-sm text-muted-foreground">30-minute call to understand your needs</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center">
                      3
                    </span>
                    <div>
                      <p className="font-medium text-foreground">Custom proposal</p>
                      <p className="text-sm text-muted-foreground">Detailed scope, timeline, and pricing</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  )
}
