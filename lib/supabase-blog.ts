import { createClient } from "@supabase/supabase-js"

// Read env vars at call time (not module init) to avoid stale singleton issues
// in environments where the Supabase project may have been paused/resumed.
function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || ""
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || ""

  if (!url) {
    console.error("[Supabase] CONFIG ERROR: NEXT_PUBLIC_SUPABASE_URL is not set")
    return null
  }

  if (!key) {
    console.error("[Supabase] CONFIG ERROR: NEXT_PUBLIC_SUPABASE_ANON_KEY is not set")
    return null
  }

  try {
    new URL(url)
  } catch {
    console.error("[Supabase] CONFIG ERROR: NEXT_PUBLIC_SUPABASE_URL is not a valid URL:", url)
    return null
  }

  console.log("[Supabase] Client created for host:", new URL(url).hostname)
  return createClient(url, key)
}

export interface Citation {
  title: string
  url: string
  /** e.g. "clinical-trial" | "peer-reviewed" | "fda" | "health-authority" | "guideline" */
  type: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  description: string
  // Author identity
  author: string
  author_image: string
  /** Professional title, e.g. "Registered Dietitian, MPH" */
  author_title: string | null
  /** Author biography shown on article page */
  author_bio: string | null
  /** Credentials array, e.g. ["RD", "MPH"] */
  author_credentials: string[] | null
  // Medical review
  /** Name of the medical reviewer */
  medical_reviewer: string | null
  /** Reviewer's credentials, e.g. "MD, Obesity Medicine Specialist" */
  reviewer_credentials: string | null
  /** Date of last medical review */
  reviewed_at: string | null
  /** Date when next review is due */
  next_review_date: string | null
  // Content quality
  /** Structured citations array stored as JSONB */
  citations: Citation[] | null
  /** Whether the article includes the required medical disclaimer */
  has_medical_disclaimer: boolean
  // Dates
  published_at: string
  updated_at: string
  created_at: string
  // Content
  hero_image: string
  tags: string[]
  category: string
  reading_time: string
  content: string
  is_published: boolean
}

// Fetch all published blog posts sorted by published_at
export async function getBlogPosts(): Promise<BlogPost[]> {
  const client = getSupabaseClient()
  if (!client) {
    console.error("[Supabase] getBlogPosts: aborted — client config invalid")
    return []
  }

  try {
    const { data, error } = await client
      .from("blog_posts")
      .select("*")
      .eq("is_published", true)
      .order("published_at", { ascending: false })

    if (error) {
      console.error("[Supabase] getBlogPosts QUERY ERROR:", error.message, "| code:", error.code)
      return []
    }

    console.log(`[Supabase] getBlogPosts: returned ${data?.length ?? 0} posts`)
    return data || []
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error("[Supabase] getBlogPosts NETWORK ERROR:", msg)
    return []
  }
}

// Fetch a single blog post by slug
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const client = getSupabaseClient()
  if (!client) {
    console.error("[Supabase] getBlogPost: aborted — client config invalid")
    return null
  }

  try {
    const { data, error } = await client
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("is_published", true)
      .single()

    if (error) {
      console.error("[Supabase] getBlogPost QUERY ERROR:", error.message, "| code:", error.code)
      return null
    }

    return data
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error("[Supabase] getBlogPost NETWORK ERROR:", msg)
    return null
  }
}

// Fetch blog posts by category
export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  const client = getSupabaseClient()
  if (!client) {
    return []
  }

  try {
    const { data, error } = await client
      .from("blog_posts")
      .select("*")
      .eq("category", category)
      .eq("is_published", true)
      .order("published_at", { ascending: false })

    if (error) {
      console.error("Error fetching blog posts by category:", error)
      return []
    }

    return data || []
  } catch (err) {
    console.error("Error fetching blog posts by category:", err)
    return []
  }
}

// Fetch blog posts by tag
export async function getBlogPostsByTag(tag: string): Promise<BlogPost[]> {
  const client = getSupabaseClient()
  if (!client) {
    return []
  }

  try {
    const { data, error } = await client
      .from("blog_posts")
      .select("*")
      .contains("tags", [tag])
      .eq("is_published", true)
      .order("published_at", { ascending: false })

    if (error) {
      console.error("Error fetching blog posts by tag:", error)
      return []
    }

    return data || []
  } catch (err) {
    console.error("Error fetching blog posts by tag:", err)
    return []
  }
}

// Create a new blog post (for future admin functionality)
export async function createBlogPost(
  post: Omit<BlogPost, "id" | "created_at" | "updated_at">,
): Promise<BlogPost | null> {
  const client = getSupabaseClient()
  if (!client) {
    return null
  }

  const { data, error } = await client.from("blog_posts").insert([post]).select().single()

  if (error) {
    console.error("Error creating blog post:", error)
    return null
  }

  return data
}

// Update a blog post (for future admin functionality)
export async function updateBlogPost(slug: string, updates: Partial<BlogPost>): Promise<BlogPost | null> {
  const client = getSupabaseClient()
  if (!client) {
    return null
  }

  const { data, error } = await client.from("blog_posts").update(updates).eq("slug", slug).select().single()

  if (error) {
    console.error("Error updating blog post:", error)
    return null
  }

  return data
}

// Delete a blog post (for future admin functionality)
export async function deleteBlogPost(slug: string): Promise<boolean> {
  const client = getSupabaseClient()
  if (!client) {
    return false
  }

  const { error } = await client.from("blog_posts").delete().eq("slug", slug)

  if (error) {
    console.error("Error deleting blog post:", error)
    return false
  }

  return true
}
