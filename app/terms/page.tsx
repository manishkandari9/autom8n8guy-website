import type { Metadata } from "next"
import { Section } from "@/components/ui/section"
import { FadeIn } from "@/components/animations/fade-in"

export const metadata: Metadata = {
  title: "Terms & Conditions | Autom8n8 Systems",
  description: "Terms and conditions for using Autom8n8 Systems services. Read our service agreement and policies.",
}

export default function TermsPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">Terms & Conditions</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-muted-foreground">Last updated: December 2024</p>
          </FadeIn>
        </div>
      </section>

      <Section className="pt-0">
        <div className="max-w-4xl mx-auto prose prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
          <FadeIn>
            <h2>1. Agreement to Terms</h2>
            <p>
              By engaging Autom8n8 Systems (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) for services or using
              our website, you (&quot;Client&quot; or &quot;you&quot;) agree to these Terms and Conditions. These terms
              constitute a binding agreement. If you disagree with any part, please do not use our services.
            </p>

            <h2>2. Services</h2>
            <h3>2.1 Scope of Services</h3>
            <p>We provide technology services including but not limited to:</p>
            <ul>
              <li>Website design and development</li>
              <li>Custom web application development</li>
              <li>Business automation solutions</li>
              <li>AI and chatbot development</li>
              <li>Related consulting and support services</li>
            </ul>

            <h3>2.2 Project Scope</h3>
            <p>
              The specific scope, deliverables, timeline, and pricing for each project will be detailed in a separate
              proposal or statement of work (&quot;SOW&quot;), which becomes part of these terms upon acceptance.
            </p>

            <h2>3. Client Responsibilities</h2>
            <p>The Client agrees to:</p>
            <ul>
              <li>Provide accurate, complete, and timely information, content, and feedback</li>
              <li>Designate a primary contact person with authority to make project decisions</li>
              <li>Review and approve deliverables within agreed timelines</li>
              <li>Ensure all provided content does not infringe third-party rights</li>
              <li>Maintain confidentiality of any credentials or access provided</li>
              <li>Make payments according to the agreed schedule</li>
            </ul>

            <h2>4. Payment Terms</h2>
            <h3>4.1 Pricing</h3>
            <p>
              All prices are quoted in Indian Rupees (INR) unless otherwise specified. Prices exclude applicable taxes
              (GST) unless stated otherwise.
            </p>

            <h3>4.2 Payment Schedule</h3>
            <p>Unless otherwise agreed in the SOW:</p>
            <ul>
              <li>40% advance payment upon project commencement</li>
              <li>30% upon completion of development phase</li>
              <li>30% upon final delivery and launch</li>
            </ul>

            <h3>4.3 Late Payments</h3>
            <p>
              Payments not received within 15 days of invoice date may incur a late fee of 2% per month. We reserve the
              right to suspend work on overdue accounts.
            </p>

            <h3>4.4 Refunds</h3>
            <p>
              Advance payments are non-refundable once work has commenced. Refunds for cancelled projects will be
              prorated based on work completed at our standard hourly rates.
            </p>

            <h2>5. Intellectual Property</h2>
            <h3>5.1 Client Ownership</h3>
            <p>
              Upon full payment, the Client receives ownership of custom code, designs, and content created specifically
              for their project, excluding any pre-existing materials or third-party components.
            </p>

            <h3>5.2 Our Rights</h3>
            <p>We retain ownership of:</p>
            <ul>
              <li>Pre-existing code, libraries, and tools used in development</li>
              <li>Generic components that may be reused across projects</li>
              <li>Our methodologies, processes, and know-how</li>
            </ul>

            <h3>5.3 Third-Party Components</h3>
            <p>
              Projects may include third-party software, frameworks, or services subject to their own licenses. We will
              inform you of any significant third-party dependencies.
            </p>

            <h3>5.4 Portfolio Rights</h3>
            <p>
              We may display completed projects in our portfolio and marketing materials unless you request otherwise in
              writing.
            </p>

            <h2>6. Confidentiality</h2>
            <p>
              Both parties agree to keep confidential all non-public information shared during the engagement. This
              includes business data, technical information, and project details. This obligation survives termination
              of services.
            </p>

            <h2>7. Warranties and Disclaimers</h2>
            <h3>7.1 Our Warranty</h3>
            <p>We warrant that:</p>
            <ul>
              <li>Services will be performed professionally and in accordance with the SOW</li>
              <li>Deliverables will substantially conform to agreed specifications</li>
              <li>We will fix bugs discovered within 30-60 days of launch at no additional cost</li>
            </ul>

            <h3>7.2 Disclaimer</h3>
            <p>
              Except as expressly stated, services are provided &quot;as is.&quot; We do not guarantee specific business
              results, search rankings, conversion rates, or other outcomes that depend on factors beyond our control.
            </p>

            <h3>7.3 Third-Party Services</h3>
            <p>
              We are not responsible for failures or changes in third-party services (hosting providers, APIs, payment
              gateways, AI providers, etc.) that may affect your project.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              Our total liability for any claims arising from services shall not exceed the total amount paid for those
              specific services. We are not liable for indirect, incidental, consequential, or punitive damages,
              including lost profits, data loss, or business interruption.
            </p>

            <h2>9. Project Changes</h2>
            <p>
              Changes to project scope after SOW acceptance will be handled through a change request process. We will
              provide estimates for additional time and cost before proceeding with significant changes.
            </p>

            <h2>10. Termination</h2>
            <h3>10.1 By Client</h3>
            <p>
              The Client may terminate the project with 14 days written notice. Payment will be due for all work
              completed through the termination date.
            </p>

            <h3>10.2 By Us</h3>
            <p>
              We may terminate for non-payment (after 30 days overdue), breach of terms, or requests that violate laws
              or ethical standards.
            </p>

            <h3>10.3 Effect of Termination</h3>
            <p>
              Upon termination, we will deliver all completed work for which payment has been received. Sections on
              confidentiality, intellectual property, and limitation of liability survive termination.
            </p>

            <h2>11. Support and Maintenance</h2>
            <p>
              Post-launch support beyond the warranty period is available through separate maintenance agreements or
              hourly retainer arrangements. Details will be provided upon request.
            </p>

            <h2>12. Force Majeure</h2>
            <p>
              Neither party shall be liable for delays or failures in performance resulting from circumstances beyond
              reasonable control, including natural disasters, pandemics, government actions, or infrastructure
              failures.
            </p>

            <h2>13. Dispute Resolution</h2>
            <p>
              Any disputes shall first be attempted to be resolved through good-faith negotiation. If unresolved,
              disputes shall be subject to the exclusive jurisdiction of courts in Dehradun, Uttarakhand, India.
            </p>

            <h2>14. Governing Law</h2>
            <p>These terms are governed by the laws of India. Any legal proceedings shall be conducted in English.</p>

            <h2>15. Modifications</h2>
            <p>
              We may update these terms periodically. Continued use of our services after changes constitutes acceptance
              of the modified terms. We will notify existing clients of significant changes.
            </p>

            <h2>16. Contact</h2>
            <p>For questions about these terms, contact us at:</p>
            <p>
              <strong>Autom8n8 Systems</strong>
              <br />
              Dehradun, Uttarakhand, India
              <br />
              Email: hello@autom8n8.com
              <br />
              Phone: +91 98765 43210
            </p>
          </FadeIn>
        </div>
      </Section>
    </>
  )
}
