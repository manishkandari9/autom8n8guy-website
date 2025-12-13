import type { Metadata } from "next"
import { Section } from "@/components/ui/section"
import { FadeIn } from "@/components/animations/fade-in"

export const metadata: Metadata = {
  title: "Privacy Policy | Autom8n8 Systems",
  description: "Privacy policy for Autom8n8 Systems. Learn how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-primary font-medium text-sm tracking-wide uppercase mb-4">Legal</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">Privacy Policy</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-muted-foreground">Last updated: December 2024</p>
          </FadeIn>
        </div>
      </section>

      <Section className="pt-0">
        <div className="max-w-4xl mx-auto prose prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
          <FadeIn>
            <h2>1. Introduction</h2>
            <p>
              Autom8n8 Systems ("we," "our," or "us") respects your privacy and is committed to protecting your personal
              data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you
              visit our website, use our services, or communicate with us.
            </p>
            <p>
              By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>

            <h2>2. Information We Collect</h2>
            <h3>2.1 Information You Provide</h3>
            <p>We collect information you voluntarily provide, including:</p>
            <ul>
              <li>
                <strong>Contact Information:</strong> Name, email address, phone number, company name when you fill out
                forms or contact us
              </li>
              <li>
                <strong>Project Information:</strong> Details about your business, requirements, and preferences shared
                during consultations
              </li>
              <li>
                <strong>Communication Records:</strong> Emails, messages, and call notes from our interactions
              </li>
              <li>
                <strong>Payment Information:</strong> Billing details for processing payments (processed securely
                through third-party payment providers)
              </li>
            </ul>

            <h3>2.2 Information Collected Automatically</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>
                <strong>Device Information:</strong> Browser type, operating system, device type
              </li>
              <li>
                <strong>Usage Data:</strong> Pages visited, time spent, click patterns
              </li>
              <li>
                <strong>Location Data:</strong> General geographic location based on IP address
              </li>
              <li>
                <strong>Cookies:</strong> Small data files stored on your device (see Cookie Policy section)
              </li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Deliver and improve our services</li>
              <li>Send project updates, invoices, and service-related communications</li>
              <li>Send marketing communications (with your consent, which you can withdraw)</li>
              <li>Analyze website usage to improve user experience</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraud and unauthorized access</li>
            </ul>

            <h2>4. Information Sharing</h2>
            <p>We do not sell your personal information. We may share your data with:</p>
            <ul>
              <li>
                <strong>Service Providers:</strong> Third-party vendors who assist in delivering our services (hosting,
                analytics, payment processing)
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law, court order, or government request
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
              </li>
              <li>
                <strong>With Your Consent:</strong> When you explicitly authorize sharing
              </li>
            </ul>

            <h2>5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data, including:
            </p>
            <ul>
              <li>SSL encryption for data transmission</li>
              <li>Secure storage on protected servers</li>
              <li>Access controls limiting who can view your data</li>
              <li>Regular security assessments</li>
            </ul>
            <p>
              However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute
              security.
            </p>

            <h2>6. Data Retention</h2>
            <p>
              We retain your personal data only as long as necessary for the purposes outlined in this policy,
              typically:
            </p>
            <ul>
              <li>Active client data: Duration of our business relationship plus 5 years</li>
              <li>Inquiry data: 2 years if no engagement</li>
              <li>Financial records: As required by Indian tax law (typically 8 years)</li>
              <li>Website analytics: 26 months</li>
            </ul>

            <h2>7. Your Rights</h2>
            <p>Depending on your location, you may have rights to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>
            <p>To exercise these rights, contact us at privacy@autom8n8.com.</p>

            <h2>8. Cookies</h2>
            <p>Our website uses cookies and similar technologies to:</p>
            <ul>
              <li>Enable essential website functionality</li>
              <li>Remember your preferences</li>
              <li>Analyze website traffic</li>
              <li>Improve user experience</li>
            </ul>
            <p>
              You can control cookie settings in your browser. Disabling certain cookies may affect website
              functionality.
            </p>

            <h2>9. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of
              these sites. We encourage you to review their privacy policies.
            </p>

            <h2>10. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under 18. We do not knowingly collect personal information
              from children. If we become aware of such collection, we will delete the information.
            </p>

            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of significant changes by posting
              the new policy on this page and updating the "Last updated" date. Your continued use after changes
              constitutes acceptance.
            </p>

            <h2>12. Contact Us</h2>
            <p>For questions about this privacy policy or our data practices, contact us at:</p>
            <p>
              <strong>Autom8n8 Systems</strong>
              <br />
              Email: privacy@autom8n8.com
              <br />
              Phone: +91 98765 43210
              <br />
              Address: Dehradun, Uttarakhand, India
            </p>
          </FadeIn>
        </div>
      </Section>
    </>
  )
}
