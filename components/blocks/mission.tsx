"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Heart, Users, Lightbulb } from "lucide-react"

const pillars = [
  {
    icon: Lightbulb,
    title: "Education",
    description: "Providing evidence-based knowledge and resources to empower informed health decisions.",
  },
  {
    icon: Heart,
    title: "Programs",
    description: "Delivering accessible, community-centered wellness programs that meet people where they are.",
  },
  {
    icon: Users,
    title: "Access",
    description: "Breaking down barriers to ensure everyone has access to quality health support and care.",
  },
]

export function Mission() {
  return (
    <Section>
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl"
          >
            Our Mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            We believe that everyone deserves access to compassionate, evidence-based support for healthy weight
            management. Through education, community programs, and accessible care, we empower individuals and families
            to build healthier lives.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-surface rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow text-center"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary-soft mb-6">
                <pillar.icon className="h-7 w-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
