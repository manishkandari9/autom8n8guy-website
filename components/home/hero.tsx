"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"
import { ArrowRight, Code2, Zap, Bot } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur-sm px-4 py-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              <span className="text-sm text-muted-foreground">Serving Dehradun & Rishikesh</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
              Where <span className="text-primary">deep tech</span> meets business growth
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty">
              We help businesses in Uttarakhand transform digitally with custom web solutions, intelligent automation,
              and AI-powered tools. From yoga studios to startups, we build technology that drives real results.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="group">
                <Link href="/contact">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/projects">View Our Work</Link>
              </Button>
            </div>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={0.4}>
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-foreground">98%</p>
                <p className="text-sm text-muted-foreground mt-1">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-foreground">5+</p>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Floating icons */}
        <div className="hidden lg:block absolute right-8 top-1/4">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="p-4 bg-card border border-border rounded-2xl shadow-xl"
          >
            <Code2 className="h-8 w-8 text-primary" />
          </motion.div>
        </div>
        <div className="hidden lg:block absolute right-32 top-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
            className="p-4 bg-card border border-border rounded-2xl shadow-xl"
          >
            <Zap className="h-8 w-8 text-primary" />
          </motion.div>
        </div>
        <div className="hidden lg:block absolute right-16 bottom-1/4">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
            className="p-4 bg-card border border-border rounded-2xl shadow-xl"
          >
            <Bot className="h-8 w-8 text-primary" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
