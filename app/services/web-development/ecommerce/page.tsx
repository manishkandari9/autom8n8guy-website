import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { CTA } from "@/components/home/cta"
import { ShoppingCart, CreditCard, Package, Truck, Shield, BarChart3, Search, Smartphone } from "lucide-react"

export const metadata: Metadata = {
  title: "E-commerce Website Development | Online Stores in Dehradun",
  description:
    "Professional e-commerce website development in Dehradun and Rishikesh. Build your online store with secure payments, inventory management, and seamless checkout.",
}

export default function EcommercePage() {
  return (
    <>
      <ServicePageTemplate
        breadcrumb={{ label: "Web Development", href: "/services/web-development" }}
        title="E-commerce Website Development"
        description="Full-featured online stores that make it easy for customers to discover, purchase, and receive your products. Complete with secure payments, inventory management, and order tracking."
        problemStatement={{
          title: "Selling online shouldn't be complicated",
          description:
            "Many businesses struggle to establish an effective online sales presence. Generic e-commerce solutions often don't meet unique business needs, leading to lost sales and frustrated customers.",
          points: [
            "Complicated checkout processes causing cart abandonment",
            "Limited payment options for Indian customers",
            "Difficult inventory management",
            "Poor mobile shopping experience",
            "No integration with shipping and logistics",
            "Lack of customer trust and security",
          ],
        }}
        solution={{
          title: "Your complete online store solution",
          description:
            "We build custom e-commerce solutions tailored to your products and customers. From product catalogs to checkout to delivery tracking, every aspect is designed to maximize sales and customer satisfaction.",
        }}
        features={[
          {
            icon: ShoppingCart,
            title: "Smart Cart",
            description: "Intuitive shopping cart with upsells, saved items, and easy checkout.",
          },
          {
            icon: CreditCard,
            title: "Secure Payments",
            description: "Razorpay, Paytm, UPI, cards, and COD integration for Indian customers.",
          },
          {
            icon: Package,
            title: "Inventory Management",
            description: "Real-time stock tracking, low stock alerts, and variant management.",
          },
          {
            icon: Truck,
            title: "Shipping Integration",
            description: "Integration with Shiprocket, Delhivery, and other logistics providers.",
          },
          {
            icon: Shield,
            title: "Secure & PCI Compliant",
            description: "Industry-standard security to protect customer data and payments.",
          },
          {
            icon: BarChart3,
            title: "Sales Analytics",
            description: "Detailed reports on sales, customers, and product performance.",
          },
          {
            icon: Search,
            title: "Product Search",
            description: "Advanced search and filtering to help customers find products.",
          },
          {
            icon: Smartphone,
            title: "Mobile Commerce",
            description: "Optimized mobile shopping experience for on-the-go customers.",
          },
        ]}
        techStack={["Next.js", "React", "Shopify", "WooCommerce", "Razorpay", "Shiprocket", "PostgreSQL"]}
        process={[
          {
            step: "01",
            title: "Plan",
            description: "Understand your products, audience, and business requirements.",
          },
          {
            step: "02",
            title: "Design",
            description: "Create a shopping experience that showcases your products.",
          },
          {
            step: "03",
            title: "Develop",
            description: "Build your store with all features and integrations.",
          },
          {
            step: "04",
            title: "Launch",
            description: "Test, deploy, and train you on managing your store.",
          },
        ]}
        benefits={[
          "Sell 24/7 without manual intervention",
          "Accept all popular Indian payment methods",
          "Manage inventory efficiently",
          "Automated shipping and tracking",
          "Reduce cart abandonment with optimized checkout",
          "Build customer loyalty with great experience",
          "Detailed analytics for business decisions",
          "Scale as your business grows",
        ]}
        faqs={[
          {
            question: "What payment methods can I accept?",
            answer:
              "We integrate all popular Indian payment methods including Razorpay, Paytm, UPI, credit/debit cards, net banking, and Cash on Delivery (COD). International payments via PayPal and Stripe are also available.",
          },
          {
            question: "How do you handle shipping?",
            answer:
              "We integrate with popular shipping providers like Shiprocket and Delhivery for automated shipping label generation, order tracking, and delivery updates. Customers receive automatic notifications about their orders.",
          },
          {
            question: "Can I manage the store myself?",
            answer:
              "Yes! We provide an easy-to-use admin panel where you can add products, manage inventory, process orders, and view reports. We also provide training and documentation.",
          },
          {
            question: "How much does an e-commerce website cost?",
            answer:
              "E-commerce websites start from ₹75,000 for a basic store. The final cost depends on the number of products, features required, and integrations needed. We provide detailed quotes after understanding your requirements.",
          },
          {
            question: "Do you provide ongoing support?",
            answer:
              "Yes, we offer maintenance and support packages that include updates, security patches, bug fixes, and technical support. We're here to help your store run smoothly.",
          },
          {
            question: "Can you migrate my existing store?",
            answer:
              "Absolutely. We can migrate your products, customers, and order history from platforms like Shopify, WooCommerce, or any other e-commerce platform to your new custom store.",
          },
        ]}
        cta={{
          title: "Ready to sell online?",
          description: "Let's build an e-commerce store that converts visitors into customers.",
        }}
      />
      <CTA />
    </>
  )
}
