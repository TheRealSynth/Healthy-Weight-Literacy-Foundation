"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, FileText, BookOpen, Video } from "lucide-react"
import type { Resource } from "@/lib/mdx"

interface ResourceGridProps {
  resources: Resource[]
  showAll?: boolean
}

const typeIcons = {
  Guide: BookOpen,
  Workbook: FileText,
  Video: Video,
}

export function ResourceGrid({ resources, showAll = false }: ResourceGridProps) {
  const displayResources = showAll ? resources : resources.slice(0, 3)

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {displayResources.map((resource, index) => {
        const Icon = typeIcons[resource.type as keyof typeof typeIcons] || FileText
        return (
          <motion.article
            key={resource.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-surface rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all"
          >
            <Link href={`/resources/${resource.slug}`}>
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={resource.heroImage || "/placeholder.svg"}
                  alt={resource.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge variant="secondary" className="bg-surface/90">
                    {resource.category}
                  </Badge>
                  <Badge variant="outline" className="bg-surface/90">
                    <Icon className="h-3 w-3 mr-1" aria-hidden="true" />
                    {resource.type}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="mt-2 text-muted-foreground line-clamp-2">{resource.description}</p>
                <p className="mt-3 text-sm text-muted-foreground">By {resource.author}</p>
                <div className="mt-4 flex items-center text-primary font-medium">
                  Read More
                  <ArrowRight
                    className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </Link>
          </motion.article>
        )
      })}
    </div>
  )
}
