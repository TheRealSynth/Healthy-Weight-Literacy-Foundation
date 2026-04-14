import { NextResponse } from "next/server"
import { getBlogPosts } from "@/lib/supabase-blog"

export async function GET() {
  try {
    const posts = await getBlogPosts()
    const slim = posts.map((p) => ({
      slug: p.slug,
      title: p.title,
      description: p.description,
      category: p.category,
      tags: p.tags,
      reading_time: p.reading_time,
    }))
    return NextResponse.json(slim, {
      headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" },
    })
  } catch {
    return NextResponse.json([], { status: 200 })
  }
}
