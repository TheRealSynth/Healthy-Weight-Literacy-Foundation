/**
 * Migration Script: Convert HTML blog content to Markdown
 * 
 * This script converts any HTML-formatted blog post content to Markdown format in Supabase.
 * Run with: npx tsx scripts/migrate-html-to-markdown.ts
 */

import { createClient } from "@supabase/supabase-js"
import TurndownService from "turndown"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || ""
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Missing Supabase credentials")
  console.error("Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY environment variables")
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)
const turndown = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
})

const HTML_PATTERN = /<\/?[a-z][^>]*>/i

async function migrateContent() {
  console.log("🔍 Fetching all blog posts...")
  
  const { data: posts, error: fetchError } = await supabase
    .from("blog_posts")
    .select("id, slug, content")
    .order("published_at", { ascending: false })

  if (fetchError) {
    console.error("❌ Error fetching posts:", fetchError)
    return
  }

  if (!posts || posts.length === 0) {
    console.log("✅ No posts found")
    return
  }

  console.log(`📄 Found ${posts.length} posts`)

  let htmlCount = 0
  let convertedCount = 0
  let errorCount = 0

  for (const post of posts) {
    const isHtml = HTML_PATTERN.test(post.content)
    
    if (!isHtml) {
      continue
    }

    htmlCount++
    console.log(`\n🔄 Converting: ${post.slug}`)

    try {
      const markdown = turndown.turndown(post.content)
      
      const { error: updateError } = await supabase
        .from("blog_posts")
        .update({ content: markdown })
        .eq("id", post.id)

      if (updateError) {
        console.error(`❌ Error updating ${post.slug}:`, updateError.message)
        errorCount++
      } else {
        console.log(`✅ Converted ${post.slug}`)
        convertedCount++
      }
    } catch (err) {
      console.error(`❌ Conversion failed for ${post.slug}:`, err instanceof Error ? err.message : String(err))
      errorCount++
    }
  }

  console.log("\n" + "=".repeat(50))
  console.log("📊 Migration Summary:")
  console.log(`   Total posts: ${posts.length}`)
  console.log(`   HTML posts found: ${htmlCount}`)
  console.log(`   Successfully converted: ${convertedCount}`)
  console.log(`   Errors: ${errorCount}`)
  console.log(`   Already Markdown: ${posts.length - htmlCount}`)
  console.log("=".repeat(50))
}

migrateContent()
  .then(() => {
    console.log("\n✅ Migration complete")
    process.exit(0)
  })
  .catch((err) => {
    console.error("\n❌ Migration failed:", err)
    process.exit(1)
  })
