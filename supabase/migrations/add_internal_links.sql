-- Internal link injection for top 15 most-recently-published articles
-- Run this script in the Supabase SQL Editor (Dashboard → SQL Editor)
--
-- Strategy: append 2–3 in-text Markdown links to article body content
-- where the target phrase appears naturally. Each UPDATE targets one
-- article slug and one specific phrase substitution.
--
-- IMPORTANT: Test each UPDATE with a SELECT first. The script uses
-- REPLACE() which replaces the FIRST occurrence of the phrase.
-- Only run an UPDATE if the phrase appears in the article content.
--
-- Usage:
--   1. Open Supabase Dashboard → SQL Editor
--   2. Run the SELECT preview queries to verify matches
--   3. Run the UPDATE statements for articles where matches are confirmed

-- ─────────────────────────────────────────────────────────────
-- PREVIEW: Check which articles contain target phrases
-- ─────────────────────────────────────────────────────────────

/*
SELECT slug, title,
  position('gut microbiome' IN lower(content)) AS gut_microbiome_pos,
  position('set-point' IN lower(content)) AS set_point_pos,
  position('physical activity' IN lower(content)) AS phys_act_pos,
  position('added sugars' IN lower(content)) AS added_sugars_pos,
  position('sleep' IN lower(content)) AS sleep_pos,
  position('hydration' IN lower(content)) AS hydration_pos,
  position('GLP-1' IN content) AS glp1_pos,
  position('metabolism' IN lower(content)) AS metabolism_pos,
  position('meal planning' IN lower(content)) AS meal_planning_pos,
  position('macronutrients' IN lower(content)) AS macro_pos
FROM blog_posts
WHERE is_published = true
ORDER BY published_at DESC
LIMIT 15;
*/

-- ─────────────────────────────────────────────────────────────
-- HYDRATION ARTICLE — link to metabolism and meal planning
-- ─────────────────────────────────────────────────────────────
-- UPDATE blog_posts
-- SET content = REPLACE(
--   content,
--   'metabolism',
--   '[metabolism](/blog/understanding-your-metabolism-facts-vs-myths)'
-- )
-- WHERE slug = 'hydration-and-health-how-much-water-do-you-need'
--   AND position('metabolism' IN lower(content)) > 0;

-- ─────────────────────────────────────────────────────────────
-- MACRONUTRIENTS ARTICLE — link to gut microbiome, meal planning
-- ─────────────────────────────────────────────────────────────
-- UPDATE blog_posts
-- SET content = REPLACE(
--   content,
--   'gut health',
--   '[gut health](/blog/gut-microbiome-and-weight-what-science-says)'
-- )
-- WHERE slug = 'understanding-macronutrients-proteins-carbs-fats'
--   AND position('gut health' IN lower(content)) > 0;

-- UPDATE blog_posts
-- SET content = REPLACE(
--   content,
--   'meal planning',
--   '[meal planning](/blog/meal-planning-basics-eating-well-on-a-budget)'
-- )
-- WHERE slug = 'understanding-macronutrients-proteins-carbs-fats'
--   AND position('meal planning' IN lower(content)) > 0;

-- ─────────────────────────────────────────────────────────────
-- SET POINT THEORY — link to metabolism, physical activity
-- ─────────────────────────────────────────────────────────────
-- UPDATE blog_posts
-- SET content = REPLACE(
--   content,
--   'physical activity',
--   '[physical activity](/blog/physical-activity-for-health-beyond-weight-loss)'
-- )
-- WHERE slug = 'set-point-theory-why-body-resists-weight-loss'
--   AND position('physical activity' IN lower(content)) > 0;

-- UPDATE blog_posts
-- SET content = REPLACE(
--   content,
--   'metabolism',
--   '[metabolism](/blog/understanding-your-metabolism-facts-vs-myths)'
-- )
-- WHERE slug = 'set-point-theory-why-body-resists-weight-loss'
--   AND position('metabolism' IN lower(content)) > 0;

-- ─────────────────────────────────────────────────────────────
-- GUT MICROBIOME — link to metabolism, added sugars
-- ─────────────────────────────────────────────────────────────
-- UPDATE blog_posts
-- SET content = REPLACE(
--   content,
--   'added sugars',
--   '[added sugars](/blog/added-sugars-hidden-sources-and-health-effects)'
-- )
-- WHERE slug = 'gut-microbiome-and-weight-what-science-says'
--   AND position('added sugars' IN lower(content)) > 0;

-- UPDATE blog_posts
-- SET content = REPLACE(
--   content,
--   'metabolism',
--   '[metabolism](/blog/understanding-your-metabolism-facts-vs-myths)'
-- )
-- WHERE slug = 'gut-microbiome-and-weight-what-science-says'
--   AND position('metabolism' IN lower(content)) > 0;

-- ─────────────────────────────────────────────────────────────
-- METABOLISM ARTICLE — link to gut microbiome, hormones
-- ─────────────────────────────────────────────────────────────
-- UPDATE blog_posts
-- SET content = REPLACE(
--   content,
--   'gut microbiome',
--   '[gut microbiome](/blog/gut-microbiome-and-weight-what-science-says)'
-- )
-- WHERE slug = 'understanding-your-metabolism-facts-vs-myths'
--   AND position('gut microbiome' IN lower(content)) > 0;

-- UPDATE blog_posts
-- SET content = REPLACE(
--   content,
--   'hormones',
--   '[hormones](/blog/hormones-and-weight-beyond-calories-in-calories-out)'
-- )
-- WHERE slug = 'understanding-your-metabolism-facts-vs-myths'
--   AND position('hormones' IN lower(content)) > 0;

-- ─────────────────────────────────────────────────────────────
-- MEAL PLANNING — link to macronutrients, nutrition labels
-- ─────────────────────────────────────────────────────────────
-- UPDATE blog_posts
-- SET content = REPLACE(
--   content,
--   'macronutrients',
--   '[macronutrients](/blog/understanding-macronutrients-proteins-carbs-fats)'
-- )
-- WHERE slug = 'meal-planning-basics-eating-well-on-a-budget'
--   AND position('macronutrients' IN lower(content)) > 0;

-- UPDATE blog_posts
-- SET content = REPLACE(
--   content,
--   'nutrition labels',
--   '[nutrition labels](/blog/reading-nutrition-labels-what-to-look-for)'
-- )
-- WHERE slug = 'meal-planning-basics-eating-well-on-a-budget'
--   AND position('nutrition labels' IN lower(content)) > 0;

-- ─────────────────────────────────────────────────────────────
-- HORMONES & WEIGHT — link to metabolism, set-point theory
-- ─────────────────────────────────────────────────────────────
-- UPDATE blog_posts
-- SET content = REPLACE(
--   content,
--   'set-point',
--   '[set-point theory](/blog/set-point-theory-why-body-resists-weight-loss)'
-- )
-- WHERE slug = 'hormones-and-weight-beyond-calories-in-calories-out'
--   AND position('set-point' IN lower(content)) > 0;

-- UPDATE blog_posts
-- SET content = REPLACE(
--   content,
--   'metabolism',
--   '[metabolism](/blog/understanding-your-metabolism-facts-vs-myths)'
-- )
-- WHERE slug = 'hormones-and-weight-beyond-calories-in-calories-out'
--   AND position('metabolism' IN lower(content)) > 0;

-- ─────────────────────────────────────────────────────────────
-- ADDED SUGARS — link to nutrition labels, meal planning
-- ─────────────────────────────────────────────────────────────
-- UPDATE blog_posts
-- SET content = REPLACE(
--   content,
--   'nutrition label',
--   '[nutrition label](/blog/reading-nutrition-labels-what-to-look-for)'
-- )
-- WHERE slug = 'added-sugars-hidden-sources-and-health-effects'
--   AND position('nutrition label' IN lower(content)) > 0;

-- UPDATE blog_posts
-- SET content = REPLACE(
--   content,
--   'meal planning',
--   '[meal planning](/blog/meal-planning-basics-eating-well-on-a-budget)'
-- )
-- WHERE slug = 'added-sugars-hidden-sources-and-health-effects'
--   AND position('meal planning' IN lower(content)) > 0;

-- ─────────────────────────────────────────────────────────────
-- SLEEP & WEIGHT — link to hormones, metabolism
-- ─────────────────────────────────────────────────────────────
-- UPDATE blog_posts
-- SET content = REPLACE(
--   content,
--   'hormones',
--   '[hormones](/blog/hormones-and-weight-beyond-calories-in-calories-out)'
-- )
-- WHERE slug = 'sleep-and-weight-understanding-the-connection'
--   AND position('hormones' IN lower(content)) > 0;

-- UPDATE blog_posts
-- SET content = REPLACE(
--   content,
--   'metabolism',
--   '[metabolism](/blog/understanding-your-metabolism-facts-vs-myths)'
-- )
-- WHERE slug = 'sleep-and-weight-understanding-the-connection'
--   AND position('metabolism' IN lower(content)) > 0;

-- ─────────────────────────────────────────────────────────────
-- PHYSICAL ACTIVITY — link to metabolism, gut microbiome
-- ─────────────────────────────────────────────────────────────
-- UPDATE blog_posts
-- SET content = REPLACE(
--   content,
--   'metabolism',
--   '[metabolism](/blog/understanding-your-metabolism-facts-vs-myths)'
-- )
-- WHERE slug = 'physical-activity-for-health-beyond-weight-loss'
--   AND position('metabolism' IN lower(content)) > 0;

-- UPDATE blog_posts
-- SET content = REPLACE(
--   content,
--   'gut microbiome',
--   '[gut microbiome](/blog/gut-microbiome-and-weight-what-science-says)'
-- )
-- WHERE slug = 'physical-activity-for-health-beyond-weight-loss'
--   AND position('gut microbiome' IN lower(content)) > 0;
