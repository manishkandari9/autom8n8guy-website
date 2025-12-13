import type { Metadata } from "next"
import { LocationPageTemplate } from "@/components/location-page-template"
import { CTA } from "@/components/home/cta"
import { Bot, MessageSquare, Brain, Globe, Zap, Languages } from "lucide-react"

export const metadata: Metadata = {
  title: "AI Solutions in Rishikesh | Chatbots & AI for Tourism & Wellness",
  description:
    "AI-powered solutions for Rishikesh businesses. Multilingual chatbots, intelligent booking assistants, and AI automation for yoga studios, hotels, and tourism operators.",
  keywords: [
    "AI solutions rishikesh",
    "chatbot development rishikesh",
    "AI for yoga studios",
    "hotel chatbot uttarakhand",
    "tourism AI rishikesh",
  ],
}

export default function RishikeshAISolutionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Autom8n8 Systems - AI Solutions Rishikesh",
            description: "AI-powered solutions for yoga studios, hotels, and tourism businesses in Rishikesh",
            url: "https://autom8n8.com/locations/rishikesh/ai-solutions",
            telephone: "+91-9876543210",
            email: "hello@autom8n8.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Rishikesh",
              addressRegion: "Uttarakhand",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "30.0869",
              longitude: "78.2676",
            },
            areaServed: {
              "@type": "City",
              name: "Rishikesh",
            },
            serviceType: "AI Solutions",
          }),
        }}
      />
      <LocationPageTemplate
        location="Rishikesh"
        service="AI Solutions"
        title="AI Solutions for Rishikesh Businesses"
        description="Serve international guests around the clock with intelligent AI. From multilingual chatbots that answer inquiries instantly to AI assistants that handle bookings, bring the power of artificial intelligence to your Rishikesh business."
        heroImage="/rishikesh-ganges-yoga-spiritual-city.jpg"
        introduction={{
          title: "AI that speaks your guests' language—literally",
          description:
            "Your guests come from around the world, speaking dozens of languages, with questions at all hours. An AI assistant never sleeps, speaks every language, and can handle hundreds of conversations simultaneously. Transform how you engage with international visitors.",
          points: [
            "24/7 availability across all time zones",
            "Support for 50+ languages automatically",
            "Instant responses to common questions",
            "Intelligent booking assistance",
            "Integration with WhatsApp, website, and social media",
            "Gradual handoff to humans when needed",
          ],
        }}
        services={[
          {
            icon: MessageSquare,
            title: "Multilingual Chatbots",
            description: "AI chatbots that communicate fluently in any language your guests speak.",
            href: "/services/ai/chatbots",
          },
          {
            icon: Bot,
            title: "Booking Assistants",
            description: "AI that guides guests through booking, answers questions, and completes reservations.",
            href: "/services/ai/agents",
          },
          {
            icon: Brain,
            title: "Knowledge Assistants",
            description: "AI trained on your offerings, policies, and local information.",
            href: "/services/ai/custom-tools",
          },
          {
            icon: Languages,
            title: "Translation AI",
            description: "Real-time translation for communications with international guests.",
            href: "/services/ai/translation",
          },
          {
            icon: Globe,
            title: "Virtual Concierge",
            description: "AI concierge that helps guests with local recommendations and activities.",
            href: "/services/ai/concierge",
          },
          {
            icon: Zap,
            title: "Smart Automation",
            description: "AI-powered automation that learns and improves over time.",
            href: "/services/ai/automation-systems",
          },
        ]}
        industries={[
          {
            name: "Yoga & Wellness Centers",
            description:
              "AI assistants that explain programs, handle registrations, and answer questions about yoga teacher training in any language.",
          },
          {
            name: "Hotels & Hostels",
            description: "Virtual front desk that handles inquiries, bookings, and guest services around the clock.",
          },
          {
            name: "Adventure Tourism",
            description: "AI booking assistants for rafting, bungee, and trekking experiences with safety information.",
          },
          {
            name: "Ashrams & Retreats",
            description: "Intelligent guides that explain programs, schedules, and spiritual practices to seekers.",
          },
          {
            name: "Restaurants & Cafes",
            description: "Menu recommendations, dietary information, and reservation handling via AI.",
          },
          {
            name: "Tour Operators",
            description: "AI travel assistants that create itineraries and handle trip planning conversations.",
          },
        ]}
        benefits={[
          "Respond to inquiries instantly, 24/7/365",
          "Communicate in any language automatically",
          "Never miss a booking opportunity",
          "Handle hundreds of conversations simultaneously",
          "Reduce staff workload significantly",
          "Provide consistent, accurate information",
          "Learn and improve from every interaction",
          "Seamless handoff to humans when needed",
        ]}
        faqs={[
          {
            question: "Can AI really communicate well in multiple languages?",
            answer:
              "Modern AI language models are remarkably fluent in 50+ languages. Our chatbots can detect the guest's language automatically and respond naturally. For Rishikesh businesses, we see most conversations in English, Hindi, Spanish, German, French, and Russian.",
          },
          {
            question: "Will an AI chatbot feel impersonal to guests seeking spiritual experiences?",
            answer:
              "We design AI interactions to be warm, helpful, and aligned with your brand voice. The AI handles practical questions (schedules, prices, logistics) so your staff can focus on the personal, spiritual aspects of guest interactions. Many guests actually prefer quick AI responses for basic information.",
          },
          {
            question: "Can the AI complete actual bookings or just answer questions?",
            answer:
              "Our AI booking assistants can complete the entire booking process—collecting details, checking availability, processing payments, and sending confirmations. They integrate with your booking system and payment gateway.",
          },
          {
            question: "How do you train the AI to know about my specific business?",
            answer:
              "We create a custom knowledge base from your website content, program details, policies, FAQs, and any other information you provide. The AI learns your specific offerings, pricing, schedules, and can answer detailed questions accurately.",
          },
          {
            question: "What happens when the AI can't answer a question?",
            answer:
              "The AI recognizes when it's unsure or when a question requires human judgment. It smoothly hands off the conversation to your staff via WhatsApp, email, or your preferred channel, with full context so they can pick up seamlessly.",
          },
          {
            question: "How much does an AI chatbot cost for a Rishikesh business?",
            answer:
              "AI chatbot solutions start from ₹35,000 for a basic multilingual FAQ bot. Booking-capable AI assistants range from ₹75,000-₹1,50,000 depending on integrations. There are also monthly AI usage costs (typically ₹2,000-₹10,000) based on conversation volume.",
          },
        ]}
        localInfo={{
          areas: [
            "Laxman Jhula",
            "Ram Jhula",
            "Tapovan",
            "Swargashram",
            "Muni Ki Reti",
            "Shivpuri",
            "Neelkanth Road",
            "High Bank",
          ],
          landmarks: [
            "Laxman Jhula Bridge",
            "Ram Jhula Bridge",
            "Triveni Ghat",
            "Parmarth Niketan Ashram",
            "Rajaji Tiger Reserve",
          ],
        }}
      />
      <CTA />
    </>
  )
}
