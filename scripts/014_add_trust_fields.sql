-- Migration: Add E-E-A-T and editorial trust fields to blog_posts
-- Required to fulfill promises made in /editorial-policy, /medical-review, and /how-we-create-content

ALTER TABLE blog_posts
  -- Author identity fields
  ADD COLUMN IF NOT EXISTS author_title        TEXT,
  ADD COLUMN IF NOT EXISTS author_bio          TEXT,
  ADD COLUMN IF NOT EXISTS author_credentials  TEXT[] DEFAULT '{}',

  -- Medical review fields
  ADD COLUMN IF NOT EXISTS medical_reviewer    TEXT,
  ADD COLUMN IF NOT EXISTS reviewer_credentials TEXT,
  ADD COLUMN IF NOT EXISTS reviewed_at         TIMESTAMP WITH TIME ZONE,
  ADD COLUMN IF NOT EXISTS next_review_date    TIMESTAMP WITH TIME ZONE,

  -- Content quality fields
  ADD COLUMN IF NOT EXISTS citations           JSONB  DEFAULT '[]',
  ADD COLUMN IF NOT EXISTS has_medical_disclaimer BOOLEAN DEFAULT false;

-- Index on reviewed_at to identify articles overdue for review
CREATE INDEX IF NOT EXISTS idx_blog_posts_reviewed_at
  ON blog_posts(reviewed_at);

-- Index on next_review_date to surface articles needing re-review
CREATE INDEX IF NOT EXISTS idx_blog_posts_next_review_date
  ON blog_posts(next_review_date)
  WHERE next_review_date IS NOT NULL;

-- Comments for documentation
COMMENT ON COLUMN blog_posts.author_title         IS 'Professional title, e.g. "Registered Dietitian, MPH"';
COMMENT ON COLUMN blog_posts.author_bio           IS 'Author biography displayed on article pages';
COMMENT ON COLUMN blog_posts.author_credentials   IS 'Credential abbreviations, e.g. ARRAY[''RD'',''MPH'']';
COMMENT ON COLUMN blog_posts.medical_reviewer     IS 'Full name of the medical reviewer';
COMMENT ON COLUMN blog_posts.reviewer_credentials IS 'Reviewer credentials, e.g. "MD, Obesity Medicine Specialist"';
COMMENT ON COLUMN blog_posts.reviewed_at          IS 'Date of the most recent medical review';
COMMENT ON COLUMN blog_posts.next_review_date     IS 'Scheduled date for the next review';
COMMENT ON COLUMN blog_posts.citations            IS 'Structured citations: [{title, url, type}] where type is clinical-trial|peer-reviewed|fda|health-authority|guideline';
COMMENT ON COLUMN blog_posts.has_medical_disclaimer IS 'Whether the article includes the required medical disclaimer';
