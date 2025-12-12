"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

const stats = [
  { value: "50,000+", label: "Lives Impacted" },
  { value: "200+", label: "Community Programs" },
  { value: "150", label: "Partner Organizations" },
  { value: "95%", label: "Participant Satisfaction" },
]

export function Stats() {
  return (
    <Section background="primary">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary sm:text-5xl">{stat.value}</div>
              <div className="mt-2 text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
