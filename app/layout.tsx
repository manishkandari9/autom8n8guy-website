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
    default: "TechCraft Solutions | Web Development & AI Services in Dehradun & Rishikesh",
    template: "%s | TechCraft Solutions",
  },
  description:
    "Premium IT services including web development, full-stack applications, business automation, and AI solutions for businesses in Dehradun, Rishikesh, and Uttarakhand.",
  keywords: [
    "web development dehradun",
    "IT services rishikesh",
    "AI solutions uttarakhand",
    "business automation",
    "full-stack development",
  ],
  authors: [{ name: "TechCraft Solutions" }],
  creator: "TechCraft Solutions",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://techcraft.in",
    siteName: "TechCraft Solutions",
    title: "TechCraft Solutions | Web Development & AI Services",
    description:
      "Premium IT services including web development, full-stack applications, business automation, and AI solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechCraft Solutions | Web Development & AI Services",
    description:
      "Premium IT services including web development, full-stack applications, business automation, and AI solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
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
              name: "TechCraft Solutions",
              description:
                "Premium IT services including web development, full-stack applications, business automation, and AI solutions.",
              url: "https://techcraft.in",
              telephone: "+91-9876543210",
              email: "hello@techcraft.in",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dehradun",
                addressRegion: "Uttarakhand",
                addressCountry: "IN",
              },
              areaServed: ["Dehradun", "Rishikesh", "Uttarakhand"],
              serviceType: ["Web Development", "Full-Stack Development", "Business Automation", "AI Solutions"],
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
