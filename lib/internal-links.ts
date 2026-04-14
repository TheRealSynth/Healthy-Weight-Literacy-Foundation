const LINK_MAP: Array<{ phrase: RegExp; href: string; label: string }> = [
  {
    phrase: /\bGLP-1 medications?\b/gi,
    href: "/blog/glp-1-medications-what-patients-need-to-know",
    label: "GLP-1 medications",
  },
  {
    phrase: /\bsemaglutide\b/gi,
    href: "/blog/glp-1-medications-what-patients-need-to-know",
    label: "semaglutide",
  },
  {
    phrase: /\btirzepatide\b/gi,
    href: "/blog/glp-1-medications-what-patients-need-to-know",
    label: "tirzepatide",
  },
  {
    phrase: /\bgut microbiome\b/gi,
    href: "/blog/gut-microbiome-and-weight-what-science-says",
    label: "gut microbiome",
  },
  {
    phrase: /\bset[- ]point theory\b/gi,
    href: "/blog/set-point-theory-why-body-resists-weight-loss",
    label: "set-point theory",
  },
  {
    phrase: /\badded sugars?\b/gi,
    href: "/blog/added-sugars-hidden-sources-and-health-effects",
    label: "added sugars",
  },
  {
    phrase: /\bsleep and weight\b|\bsleep affects? weight\b/gi,
    href: "/blog/sleep-and-weight-understanding-the-connection",
    label: "sleep and weight",
  },
  {
    phrase: /\bphysical activity\b/gi,
    href: "/blog/physical-activity-for-health-beyond-weight-loss",
    label: "physical activity",
  },
  {
    phrase: /\bmetabolism\b/gi,
    href: "/blog/understanding-your-metabolism-facts-vs-myths",
    label: "metabolism",
  },
  {
    phrase: /\bmacronutrients?\b/gi,
    href: "/blog/understanding-macronutrients-proteins-carbs-fats",
    label: "macronutrients",
  },
  {
    phrase: /\bnutrition labels?\b/gi,
    href: "/blog/reading-nutrition-labels-what-to-look-for",
    label: "nutrition labels",
  },
  {
    phrase: /\bhydration\b/gi,
    href: "/blog/hydration-and-health-how-much-water-do-you-need",
    label: "hydration",
  },
  {
    phrase: /\bmeal planning\b/gi,
    href: "/blog/meal-planning-basics-eating-well-on-a-budget",
    label: "meal planning",
  },
  {
    phrase: /\bhormones? and weight\b/gi,
    href: "/blog/hormones-and-weight-beyond-calories-in-calories-out",
    label: "hormones and weight",
  },
  {
    phrase: /\bweight stigma\b/gi,
    href: "/blog/weight-stigma-understanding-its-impact-on-health",
    label: "weight stigma",
  },
]

const MAX_LINKS_PER_ARTICLE = 3

export function injectInternalLinks(content: string, currentSlug: string): string {
  let injected = 0
  let result = content

  const alreadyLinked = new Set<string>()
  const linkTagPattern = /\[([^\]]+)\]\([^)]+\)/g
  let m: RegExpExecArray | null
  while ((m = linkTagPattern.exec(content)) !== null) {
    alreadyLinked.add(m[1].toLowerCase())
  }

  for (const { phrase, href, label } of LINK_MAP) {
    if (injected >= MAX_LINKS_PER_ARTICLE) break

    if (href.includes(currentSlug)) continue

    if (alreadyLinked.has(label.toLowerCase())) continue

    const matchTest = phrase.test(result)
    phrase.lastIndex = 0

    if (!matchTest) continue

    let replaced = false
    result = result.replace(phrase, (match) => {
      if (replaced || injected >= MAX_LINKS_PER_ARTICLE) return match
      replaced = true
      injected++
      alreadyLinked.add(label.toLowerCase())
      return `[${match}](${href})`
    })
    phrase.lastIndex = 0
  }

  return result
}
