"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const services = [
  {
    category: "AI Automation",
    items: [
      { name: "Business Process Automation", href: "/automation/business-process" },
      { name: "n8n Workflow Automation", href: "/automation/n8n-workflows" },
      { name: "CRM & Lead Automation", href: "/automation/crm" },
      { name: "Email & WhatsApp Automation", href: "/automation/communication" },
    ],
  },
  {
    category: "Automation Solutions",
    items: [
      { name: "Website Automation", href: "/solutions/website-automation" },
      { name: "Backend & API Automation", href: "/solutions/backend-automation" },
      { name: "Dashboard & Reporting", href: "/solutions/dashboards" },
    ],
  },
  {
    category: "Supporting Services",
    items: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "Full-Stack Development", href: "/services/full-stack" },
      { name: "AI Integrations", href: "/services/ai-integration" },
    ],
  },
]


const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Automation", href: "/automation", hasDropdown: true },
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
              <span className="text-primary-foreground font-bold text-sm">AS</span>
            </div>
            <span className="font-semibold text-lg text-foreground">Autom8Solution</span>
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
