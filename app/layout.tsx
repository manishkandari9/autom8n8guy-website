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
    default: "Autom8n8 Systems | Business Automation & AI Solutions",
    template: "%s | Autom8n8 Systems",
  },
  description:
    "Automation-first digital agency specializing in business automation, AI solutions, and custom software development. Built by Manish Kandari.",
  keywords: [
    "business automation",
    "AI solutions",
    "workflow automation",
    "custom automation",
    "automation agency",
    "digital transformation",
    "AI agents",
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
      "Automation-first digital agency specializing in business automation, AI solutions, and custom software development.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Autom8n8 Systems | Business Automation & AI Solutions",
    description:
      "Automation-first digital agency specializing in business automation, AI solutions, and custom software development.",
  },
  robots: {
    index: true,
    follow: true,
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
              name: "Autom8n8 Systems",
              description:
                "Automation-first digital agency specializing in business automation, AI solutions, and custom software development.",
              founder: {
                "@type": "Person",
                name: "Manish Kandari",
              },
              url: "https://autom8n8.com",
              telephone: "+91-9876543210",
              email: "hello@autom8n8.com",
              areaServed: {
                "@type": "Country",
                name: "India",
              },
              serviceType: [
                "Business Automation",
                "AI Solutions",
                "Web Development",
                "Full-Stack Development",
                "Custom Software Development",
              ],
              priceRange: "$$",
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
