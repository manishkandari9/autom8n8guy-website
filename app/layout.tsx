import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: {
    default: "Autom8n8 Systems | Business Automation & AI Solutions in Dehradun & Rishikesh",
    template: "%s | Autom8n8 Systems",
  },
  description:
    "Automation-first digital agency specializing in business automation, AI solutions, and custom software development for businesses in Dehradun and Rishikesh, India. Founded by Manish Kandari.",
  keywords: [
    "business automation",
    "AI solutions",
    "workflow automation",
    "custom automation",
    "automation agency",
    "digital transformation",
    "AI agents",
    "web development",
    "Dehradun",
    "Rishikesh",
    "Uttarakhand",
  ],
  authors: [{ name: "Manish Kandari" }],
  creator: "Manish Kandari",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://autom8n8.com",
    siteName: "Autom8n8 Systems",
    title: "Autom8n8 Systems | Business Automation & AI Solutions",
    description:
      "Automation-first digital agency specializing in business automation, AI solutions, and custom software development for businesses in Dehradun, Rishikesh, and across India.",
    images: [
      {
        url: "https://autom8n8.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Autom8n8 Systems - Business Automation & AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Autom8n8 Systems | Business Automation & AI Solutions",
    description:
      "Automation-first digital agency specializing in business automation, AI solutions, and custom software development.",
    images: ["https://autom8n8.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://autom8n8.com",
              name: "Autom8n8 Systems",
              description:
                "Automation-first digital agency specializing in business automation, AI solutions, and custom software development for businesses in Dehradun and Rishikesh.",
              image: "https://autom8n8.com/logo.png",
              founder: {
                "@type": "Person",
                name: "Manish Kandari",
                email: "manishkandari168@gmail.com",
              },
              url: "https://autom8n8.com",
              telephone: "+91-7830130183",
              email: "manishkandari168@gmail.com",
              address: [
                {
                  "@type": "PostalAddress",
                  addressLocality: "Dehradun",
                  addressRegion: "Uttarakhand",
                  postalCode: "248001",
                  addressCountry: "India",
                  streetAddress: "Dehradun, Uttarakhand",
                },
                {
                  "@type": "PostalAddress",
                  addressLocality: "Rishikesh",
                  addressRegion: "Uttarakhand",
                  postalCode: "249201",
                  addressCountry: "India",
                  streetAddress: "Rishikesh, Uttarakhand",
                },
              ],
              areaServed: [
                {
                  "@type": "City",
                  name: "Dehradun",
                  "@id": "https://en.wikipedia.org/wiki/Dehradun",
                },
                {
                  "@type": "City",
                  name: "Rishikesh",
                  "@id": "https://en.wikipedia.org/wiki/Rishikesh",
                },
                {
                  "@type": "Country",
                  name: "India",
                },
              ],
              serviceType: [
                "Business Automation",
                "AI Solutions",
                "Web Development",
                "Full-Stack Development",
                "Custom Software Development",
                "AI Chatbots",
                "Workflow Automation",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-7830130183",
                contactType: "Sales",
                email: "manishkandari168@gmail.com",
              },
              sameAs: ["https://www.linkedin.com/in/manishkandari"],
              priceRange: "₹25,000 - ₹5,00,000+",
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
