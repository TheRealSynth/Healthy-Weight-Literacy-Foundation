import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

export interface BlogPost {
  id: string
  slug: string
  title: string
  description: string
  author: string
  author_image: string
  published_at: string
  updated_at: string
  hero_image: string
  tags: string[]
  category: string
  reading_time: string
  content: string
  is_published: boolean
  created_at: string
}

// Fetch all published blog posts sorted by published_at
export async function getBlogPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("is_published", true)
    .order("published_at", { ascending: false })

  if (error) {
    console.error("Error fetching blog posts:", error)
    return []
  }

  return data || []
}

// Fetch a single blog post by slug
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single()

  if (error) {
    console.error("Error fetching blog post:", error)
    return null
  }

  return data
}

// Fetch blog posts by category
export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  const { data, error } = await supabase
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
}

// Fetch blog posts by tag
export async function getBlogPostsByTag(tag: string): Promise<BlogPost[]> {
  const { data, error } = await supabase
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
}

// Create a new blog post (for future admin functionality)
export async function createBlogPost(
  post: Omit<BlogPost, "id" | "created_at" | "updated_at">,
): Promise<BlogPost | null> {
  const { data, error } = await supabase.from("blog_posts").insert([post]).select().single()

  if (error) {
    console.error("Error creating blog post:", error)
    return null
  }

  return data
}

// Update a blog post (for future admin functionality)
export async function updateBlogPost(slug: string, updates: Partial<BlogPost>): Promise<BlogPost | null> {
  const { data, error } = await supabase.from("blog_posts").update(updates).eq("slug", slug).select().single()

  if (error) {
    console.error("Error updating blog post:", error)
    return null
  }

  return data
}

// Delete a blog post (for future admin functionality)
export async function deleteBlogPost(slug: string): Promise<boolean> {
  const { error } = await supabase.from("blog_posts").delete().eq("slug", slug)

  if (error) {
    console.error("Error deleting blog post:", error)
    return false
  }

  return true
}
