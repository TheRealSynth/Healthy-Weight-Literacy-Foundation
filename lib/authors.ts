export interface Author {
  slug: string
  name: string
  credentials: string
  bio: string
  expertise: string[]
  externalProfileUrl?: string
  photo?: string
}

export const AUTHORS: Author[] = [
  {
    slug: "hwlf-editorial-team",
    name: "HWLF Editorial Team",
    credentials: "",
    bio: "The HWLF Editorial Team researches and produces educational content on weight health, nutrition, and metabolic health. Content is produced with the assistance of AI writing tools and reviewed editorially for source accuracy, appropriate hedging, and alignment with published clinical guidelines.",
    expertise: [
      "Nutrition Literacy",
      "Weight Health",
      "Metabolic Health",
      "Telehealth Education",
      "GLP-1 Medications",
    ],
    externalProfileUrl: undefined,
    photo: undefined,
  },
]

export function getAuthor(slug: string): Author | undefined {
  return AUTHORS.find((a) => a.slug === slug)
}

export function getAuthorByName(name: string): Author | undefined {
  return AUTHORS.find((a) => a.name === name)
}
