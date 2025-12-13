import type { Metadata } from "next"
import { LocationPageTemplate } from "@/components/location-page-template"
import { CTA } from "@/components/home/cta"
import { Workflow, Zap, RefreshCw, Database, Settings, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Business Automation Services in Rishikesh | Autom8n8 Systems",
  description:
    "Custom automation solutions for yoga studios, ashrams, hotels, and adventure businesses in Rishikesh. Streamline bookings, communications, and operations.",
  keywords: [
    "business automation rishikesh",
    "yoga studio automation",
    "hotel automation rishikesh",
    "booking automation uttarakhand",
    "IT services rishikesh",
  ],
}

export default function RishikeshAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Autom8n8 Systems - Business Automation Rishikesh",
            description: "Custom business automation solutions for yoga studios, hotels, and businesses in Rishikesh",
            url: "https://autom8n8.com/locations/rishikesh/automation",
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
            serviceType: "Business Automation",
          }),
        }}
      />
      <LocationPageTemplate
        location="Rishikesh"
        service="Business Automation"
        title="Business Automation for Rishikesh Businesses"
        description="From yoga retreat bookings to hotel operations, automate the repetitive tasks that slow down your Rishikesh business. Custom Go-powered automation systems designed for the unique needs of this spiritual and adventure tourism hub."
        heroImage="/rishikesh-ganges-yoga-spiritual-city.jpg"
        introduction={{
          title: "Automation designed for Rishikesh's unique economy",
          description:
            "Rishikesh's economy runs on tourism, wellness, and spiritual seekers from around the world. Managing bookings, international payments, guest communications, and seasonal demand is complex. Our automation solutions handle the operational burden so you can focus on delivering transformative experiences.",
          points: [
            "Built for yoga studios, ashrams, and retreat centers",
            "Multi-currency and international booking support",
            "WhatsApp and email automation in multiple languages",
            "Seasonal scaling for peak tourist seasons",
            "Integration with OTAs and booking platforms",
            "Local team with understanding of Rishikesh business needs",
          ],
        }}
        services={[
          {
            icon: Calendar,
            title: "Booking Automation",
            description: "Automatic booking confirmations, reminders, and calendar management.",
            href: "/services/automation/booking-systems",
          },
          {
            icon: Workflow,
            title: "Guest Journey Automation",
            description: "Pre-arrival info, check-in instructions, and post-stay follow-ups.",
            href: "/services/automation/workflow-automation",
          },
          {
            icon: Database,
            title: "Multi-Platform Sync",
            description: "Sync bookings across your website, OTAs, and management systems.",
            href: "/services/automation/data-automation",
          },
          {
            icon: Zap,
            title: "Communication Automation",
            description: "WhatsApp, email, and SMS automation for guest communications.",
            href: "/services/automation/communication",
          },
          {
            icon: Settings,
            title: "Operations Automation",
            description: "Housekeeping schedules, inventory, and staff coordination.",
            href: "/services/automation/integrations",
          },
          {
            icon: RefreshCw,
            title: "Review & Feedback",
            description: "Automatic review requests and feedback collection systems.",
            href: "/services/automation/feedback-automation",
          },
        ]}
        industries={[
          {
            name: "Yoga Studios & Retreat Centers",
            description:
              "Automate class bookings, teacher training registrations, guest communications, and certificate generation.",
          },
          {
            name: "Ashrams & Spiritual Centers",
            description:
              "Manage program registrations, donation tracking, volunteer coordination, and community communications.",
          },
          {
            name: "Hotels & Guesthouses",
            description:
              "Streamline reservations, guest check-in/out, housekeeping coordination, and review management.",
          },
          {
            name: "Adventure Tourism",
            description: "Rafting bookings, trekking registrations, equipment tracking, and safety documentation.",
          },
          {
            name: "Ayurveda & Wellness",
            description: "Treatment bookings, practitioner scheduling, client records, and follow-up communications.",
          },
          {
            name: "Cafes & Restaurants",
            description:
              "Order management, inventory tracking, supplier communications, and customer loyalty programs.",
          },
        ]}
        benefits={[
          "Handle international bookings 24/7 automatically",
          "Communicate with guests in their language",
          "Reduce booking errors and double-bookings",
          "Scale during peak season without extra staff",
          "Get real-time occupancy and revenue insights",
          "Improve guest experience with timely communications",
          "Free up time for guest-facing activities",
          "Custom systems tailored to Rishikesh businesses",
        ]}
        faqs={[
          {
            question: "Can you automate bookings for yoga teacher training programs?",
            answer:
              "Absolutely. We build systems that handle the entire journey: inquiry capture, application processing, payment plans with international options, pre-arrival information, schedule management, and certificate generation. Everything from first contact to graduation can be streamlined.",
          },
          {
            question: "Do you integrate with Booking.com and other OTAs?",
            answer:
              "Yes, we create integrations with major OTAs including Booking.com, Airbnb, Agoda, and MakeMyTrip. We can sync availability, push rates, and pull bookings into a central system so you never oversell.",
          },
          {
            question: "How do you handle multi-language communications?",
            answer:
              "Our automation systems support multiple languages for guest communications. We can send booking confirmations, pre-arrival info, and follow-ups in English, Hindi, Spanish, German, French, and other languages based on guest preferences.",
          },
          {
            question: "What about handling peak season vs. off-season?",
            answer:
              "Our systems are designed to scale. During peak seasons (October-March), automations handle the increased volume without breaking a sweat. We can also build dynamic pricing and availability rules based on seasonal demand.",
          },
          {
            question: "Can automation help with managing reviews?",
            answer:
              "Yes, we automate review solicitation, sending requests at the optimal time after checkout. We can also monitor reviews across platforms and alert you to respond quickly. Some clients see 30-50% increases in review volume.",
          },
          {
            question: "How much does automation cost for a small yoga studio?",
            answer:
              "For a small yoga studio in Rishikesh, automation solutions start from ₹40,000 for basic booking and communication automation. More comprehensive systems range from ₹75,000-₹1,50,000. The investment typically pays for itself within a few months through time savings and reduced errors.",
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
            "Badrinath Road",
          ],
          landmarks: [
            "Laxman Jhula Bridge",
            "Ram Jhula Bridge",
            "Triveni Ghat",
            "Parmarth Niketan",
            "Beatles Ashram",
            "Rajaji National Park",
          ],
        }}
      />
      <CTA />
    </>
  )
}
