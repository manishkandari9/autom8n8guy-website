import type React from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 lg:py-28", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  align = "center",
}: {
  eyebrow?: string
  title: string
  description?: string
  className?: string
  align?: "left" | "center"
}) {
  return (
    <div className={cn("mb-12 lg:mb-16", align === "center" && "text-center mx-auto max-w-3xl", className)}>
      {eyebrow && <p className="text-primary font-medium text-sm tracking-wide uppercase mb-3">{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">{title}</h2>
      {description && <p className="mt-4 text-muted-foreground text-lg text-pretty">{description}</p>}
    </div>
  )
}
