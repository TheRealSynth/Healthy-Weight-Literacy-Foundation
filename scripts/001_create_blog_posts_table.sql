-- Create blog_posts table for article management
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  author TEXT NOT NULL,
  author_image TEXT NOT NULL,
  published_at DATE NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  hero_image TEXT NOT NULL,
  tags TEXT[] NOT NULL DEFAULT '{}',
  category TEXT NOT NULL,
  reading_time TEXT NOT NULL,
  content TEXT NOT NULL,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on slug for fast lookups
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);

-- Create index on published_at for sorting
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);

-- Create index on category for filtering
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);

-- Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access to published posts"
  ON blog_posts
  FOR SELECT
  USING (is_published = true);

-- Create policy to allow authenticated users to insert/update (for future admin panel)
CREATE POLICY "Allow authenticated users to manage posts"
  ON blog_posts
  FOR ALL
  USING (auth.role() = 'authenticated');

COMMENT ON TABLE blog_posts IS 'Educational articles for the Healthy Weight Literacy Foundation';
