"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const services = [
  {
    category: "Web Development",
    items: [
      { name: "Business Websites", href: "/services/web-development/business-websites" },
      { name: "Landing Pages", href: "/services/web-development/landing-pages" },
      { name: "E-commerce", href: "/services/web-development/ecommerce" },
      { name: "Portfolio Websites", href: "/services/web-development/portfolio" },
      { name: "Website Redesign", href: "/services/web-development/redesign" },
    ],
  },
  {
    category: "Full-Stack Development",
    items: [
      { name: "Custom Web Apps", href: "/services/full-stack/custom-web-apps" },
      { name: "SaaS Development", href: "/services/full-stack/saas" },
      { name: "Admin Dashboards", href: "/services/full-stack/dashboards" },
      { name: "API Development", href: "/services/full-stack/api-development" },
    ],
  },
  {
    category: "Automation",
    items: [
      { name: "Business Process Automation", href: "/services/automation/business-process" },
      { name: "CRM Automation", href: "/services/automation/crm" },
      { name: "n8n Workflows", href: "/services/automation/n8n-workflows" },
      { name: "Email Automation", href: "/services/automation/email" },
    ],
  },
  {
    category: "AI Solutions",
    items: [
      { name: "AI Chatbots", href: "/services/ai/chatbots" },
      { name: "AI Agents", href: "/services/ai/agents" },
      { name: "Custom AI Tools", href: "/services/ai/custom-tools" },
      { name: "AI Integration", href: "/services/ai/integration" },
    ],
  },
]

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Industries", href: "/industries" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">TC</span>
            </div>
            <span className="font-semibold text-lg text-foreground">TechCraft</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full pt-2 w-[600px]"
                      >
                        <div className="bg-card border border-border rounded-xl p-6 shadow-xl grid grid-cols-2 gap-6">
                          {services.map((category) => (
                            <div key={category.category}>
                              <h4 className="font-semibold text-foreground mb-3 text-sm">{category.category}</h4>
                              <ul className="space-y-2">
                                {category.items.map((item) => (
                                  <li key={item.name}>
                                    <Link
                                      href={item.href}
                                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ),
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <Button asChild>
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-muted-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="w-full mt-4">
                <Link href="/contact">Book Free Consultation</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
