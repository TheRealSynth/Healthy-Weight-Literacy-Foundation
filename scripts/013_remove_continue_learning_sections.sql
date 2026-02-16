-- Remove "Continue Learning" sections from all blog posts
-- This updates the content column by removing the Continue Learning section that appears before "## Sources"

UPDATE blog_posts
SET content = regexp_replace(
  content,
  '> ## Continue Learning\s*\n\s*\n\s*You might also find these articles helpful:\s*\n\s*\n(?:\s*- \[.*?\]\(.*?\) - .*?\n)+\s*\n',
  '',
  'g'
)
WHERE content LIKE '%> ## Continue Learning%';
