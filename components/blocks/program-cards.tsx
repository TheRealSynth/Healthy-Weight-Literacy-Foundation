"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, Users } from "lucide-react"
import type { Program } from "@/lib/mdx"

interface ProgramCardsProps {
  programs: Program[]
  showAll?: boolean
}

export function ProgramCards({ programs, showAll = false }: ProgramCardsProps) {
  const displayPrograms = showAll ? programs : programs.slice(0, 3)

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {displayPrograms.map((program, index) => (
        <motion.article
          key={program.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group bg-surface rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all"
        >
          <Link href={`/programs/${program.slug}`}>
            <div className="relative h-48 overflow-hidden">
              <Image
                src={program.heroImage || "/placeholder.svg"}
                alt={program.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="bg-surface/90">
                  {program.category}
                </Badge>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-secondary group-hover:text-primary transition-colors">
                {program.title}
              </h3>
              <p className="mt-2 text-muted-foreground line-clamp-2">{program.description}</p>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {program.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" aria-hidden="true" />
                  {program.audience}
                </span>
              </div>
              <div className="mt-4 flex items-center text-primary font-medium">
                Learn More
                <ArrowRight
                  className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </div>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  )
}
