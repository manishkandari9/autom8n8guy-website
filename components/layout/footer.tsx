import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Business Automation", href: "/services/automation" },
    { name: "AI Solutions", href: "/services/ai" },
    { name: "Web Development", href: "/services/web-development" },
    { name: "Full-Stack Development", href: "/services/full-stack" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "How We Work", href: "/how-we-work" },
    { name: "Projects", href: "/projects" },
    { name: "Industries", href: "/industries" },
  ],
  locations: [
    { name: "Dehradun Services", href: "/locations/dehradun" },
    { name: "Rishikesh Services", href: "/locations/rishikesh" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">AS</span>
              </div>
              <span className="font-semibold text-lg text-foreground">Autom8n8 Systems</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
              Automation-first digital agency specializing in business automation, AI solutions, and custom software
              development for businesses in Dehradun, Rishikesh, and across India.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:manishkandari168@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                manishkandari168@gmail.com
              </a>
              <a
                href="tel:+917830130183"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                +91 7830130183
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Dehradun & Rishikesh</p>
                  <p>Uttarakhand, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Locations</h4>
            <ul className="space-y-3">
              {footerLinks.locations.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-semibold text-foreground mb-4 mt-8">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Autom8n8 Systems by Manish Kandari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
