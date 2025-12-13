import type { Metadata } from "next"
import { LocationPageTemplate } from "@/components/location-page-template"
import { CTA } from "@/components/home/cta"
import { Globe, ShoppingCart, FileText, Briefcase, Search, RefreshCw } from "lucide-react"

export const metadata: Metadata = {
  title: "Web Development in Rishikesh | Yoga & Tourism Website Design",
  description:
    "Professional web development for yoga studios, ashrams, and tourism businesses in Rishikesh. Websites that attract international visitors and drive bookings.",
  keywords: [
    "web development rishikesh",
    "yoga website design",
    "tourism website rishikesh",
    "web developer rishikesh",
    "ashram website",
  ],
}

export default function RishikeshWebDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "TechCraft Solutions - Web Development Rishikesh",
            description: "Professional web development for yoga and tourism businesses in Rishikesh",
            url: "https://techcraft.in/locations/rishikesh/web-development",
            telephone: "+91-9876543210",
            email: "hello@techcraft.in",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Rishikesh",
              addressRegion: "Uttarakhand",
              addressCountry: "IN",
            },
            areaServed: {
              "@type": "City",
              name: "Rishikesh",
            },
            serviceType: "Web Development",
          }),
        }}
      />
      <LocationPageTemplate
        location="Rishikesh"
        service="Web Development"
        title="Web Development Services in Rishikesh"
        description="Specialized website design for yoga studios, ashrams, adventure sports, and tourism businesses in Rishikesh. Reach international audiences and grow your bookings online."
        heroImage="/rishikesh-ganges-yoga-spiritual-city.jpg"
        introduction={{
          title: "Websites for the Yoga Capital of the World",
          description:
            "Rishikesh attracts visitors from around the globe for yoga, spirituality, and adventure. We build websites that showcase your offerings to this international audience and convert visitors into bookings.",
          points: [
            "Experience with yoga and wellness businesses",
            "Multi-language website support",
            "Booking system integration",
            "International payment options",
            "SEO for global audiences",
            "Mobile-first design for travelers",
          ],
        }}
        services={[
          {
            icon: Briefcase,
            title: "Yoga Studio Websites",
            description: "Beautiful websites for yoga schools with class schedules and online booking.",
            href: "/services/web-development/business-websites",
          },
          {
            icon: ShoppingCart,
            title: "E-commerce",
            description: "Sell yoga products, courses, and merchandise online worldwide.",
            href: "/services/web-development/ecommerce",
          },
          {
            icon: FileText,
            title: "Retreat Landing Pages",
            description: "High-converting pages for yoga retreats and teacher training programs.",
            href: "/services/web-development/landing-pages",
          },
          {
            icon: Globe,
            title: "Tourism Websites",
            description: "Websites for hotels, rafting companies, and adventure sports operators.",
            href: "/services/web-development/business-websites",
          },
          {
            icon: Search,
            title: "International SEO",
            description: "Rank for yoga-related searches worldwide.",
            href: "/services/web-development/seo-friendly",
          },
          {
            icon: RefreshCw,
            title: "Website Redesign",
            description: "Modernize your existing website for better international appeal.",
            href: "/services/web-development/redesign",
          },
        ]}
        industries={[
          {
            name: "Yoga Schools & Ashrams",
            description: "Websites with teacher profiles, course details, and booking systems.",
          },
          {
            name: "Wellness Retreats",
            description: "Beautiful websites that showcase your retreat experience and drive bookings.",
          },
          {
            name: "Adventure Sports",
            description: "Websites for rafting, bungee jumping, and trekking operators.",
          },
          {
            name: "Hotels & Guesthouses",
            description: "Booking-enabled websites for accommodation providers.",
          },
          {
            name: "Restaurants & Cafes",
            description: "Menus and location pages for Rishikesh's famous cafes.",
          },
          {
            name: "Tour Operators",
            description: "Itinerary displays and booking systems for tour companies.",
          },
        ]}
        benefits={[
          "Experience with yoga and wellness industry",
          "Websites that appeal to international visitors",
          "Multi-language and multi-currency support",
          "Integrated booking systems",
          "SEO for global yoga searches",
          "Mobile-optimized for travelers",
          "Fast loading despite slow connections",
          "Ongoing support during peak seasons",
        ]}
        faqs={[
          {
            question: "Do you have experience with yoga studio websites?",
            answer:
              "Yes, we've built numerous websites for yoga schools, ashrams, and wellness centers in Rishikesh. We understand the unique needs including class schedules, teacher profiles, retreat bookings, and international audience targeting.",
          },
          {
            question: "Can you integrate booking systems?",
            answer:
              "Absolutely. We integrate popular booking systems and can build custom solutions. This includes class bookings, retreat reservations, and accommodation bookings with calendar availability and payment processing.",
          },
          {
            question: "Can you make the website in multiple languages?",
            answer:
              "Yes, we build multi-language websites to reach your international audience. Common languages include English, German, French, and Spanish - the main markets for Rishikesh yoga businesses.",
          },
          {
            question: "How do you handle international payments?",
            answer:
              "We integrate international payment gateways including PayPal, Stripe, and Razorpay. Your international customers can pay with credit cards, PayPal, and other methods in their preferred currency.",
          },
          {
            question: "Will the website load fast for international visitors?",
            answer:
              "Yes, we use CDN (Content Delivery Network) to ensure fast loading speeds worldwide. This is crucial for Rishikesh businesses targeting international audiences.",
          },
          {
            question: "Can you help with SEO to reach international audiences?",
            answer:
              "Yes, we optimize your website for international yoga-related searches. This includes keyword research, content optimization, and technical SEO to help you rank for terms like 'yoga teacher training Rishikesh' and similar.",
          },
        ]}
        localInfo={{
          areas: [
            "Laxman Jhula",
            "Ram Jhula",
            "Tapovan",
            "Swarg Ashram",
            "Muni Ki Reti",
            "Ganga Beach",
            "Shivpuri",
            "Neelkanth Road",
          ],
          landmarks: [
            "Laxman Jhula Bridge",
            "Ram Jhula Bridge",
            "Parmarth Niketan Ashram",
            "Triveni Ghat",
            "Beatles Ashram",
          ],
        }}
      />
      <CTA />
    </>
  )
}
