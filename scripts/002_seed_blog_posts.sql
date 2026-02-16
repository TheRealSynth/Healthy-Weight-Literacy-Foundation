-- Migrate existing articles to Supabase
-- This inserts all current articles from the static array

INSERT INTO blog_posts (slug, title, description, author, author_image, published_at, hero_image, tags, category, reading_time, content, is_published) VALUES
(
  'understanding-healthy-weight',
  'Understanding Healthy Weight: Beyond the Numbers',
  'Learn why healthy weight is about more than just a number on the scale. Discover the holistic approach to wellness that focuses on overall health and well-being.',
  'Dr. Sarah Johnson',
  '/editorial-team-professional.jpg',
  '2024-12-01',
  '/healthy-lifestyle-daily-habits-wellness.jpg',
  ARRAY['wellness', 'education', 'mindset'],
  'Education',
  '5 min read',
  '# Understanding Healthy Weight: Beyond the Numbers

When we think about healthy weight, our minds often jump straight to the scale. But true health encompasses so much more than a single number.

## The Holistic Approach

A healthy weight is one that:
- Allows you to feel energetic and vibrant
- Supports your mental and emotional well-being
- Reduces risk of chronic diseases
- Is sustainable and doesn''t require extreme measures

## Key Factors to Consider

### 1. Body Composition
Muscle weighs more than fat, so the number on the scale doesn''t tell the whole story.

### 2. Metabolic Health
Blood pressure, blood sugar, and cholesterol levels are crucial indicators of health.

### 3. Energy Levels
How you feel throughout the day matters more than any measurement.

### 4. Mental Well-being
Your relationship with food and your body impacts overall health significantly.

## Moving Forward

Focus on building sustainable habits rather than chasing a specific number. Small, consistent changes lead to lasting results.',
  true
),
(
  'nutrition-myths-debunked',
  '10 Common Nutrition Myths Debunked by Science',
  'Separate fact from fiction with our evidence-based guide to common nutrition misconceptions. Get the truth about carbs, fats, and more.',
  'Maria Chen, RD',
  '/editorial-team-professional.jpg',
  '2024-11-15',
  '/healthy-food-nutrition-colorful-vegetables-fruits.jpg',
  ARRAY['nutrition', 'science', 'myths'],
  'Nutrition',
  '8 min read',
  '# 10 Common Nutrition Myths Debunked by Science

In the age of information overload, it''s easy to fall prey to nutrition myths. Let''s set the record straight.

## Myth 1: Carbs Are the Enemy
**Truth:** Complex carbohydrates are essential for energy and brain function.

## Myth 2: All Fats Are Bad
**Truth:** Healthy fats from sources like avocados, nuts, and olive oil are crucial for health.

## Myth 3: You Need to Eat Every 2-3 Hours
**Truth:** Meal timing is less important than overall calorie and nutrient intake.

## Myth 4: Detox Diets Cleanse Your Body
**Truth:** Your liver and kidneys already do an excellent job of detoxification.

## Myth 5: Supplements Can Replace Food
**Truth:** Whole foods provide nutrients in forms your body absorbs best.

## The Bottom Line

Focus on whole, minimally processed foods and listen to your body''s hunger cues.',
  true
),
(
  'family-wellness-guide',
  'Building Healthy Habits: A Family Wellness Guide',
  'Practical strategies for creating a healthy home environment. Learn how to involve the whole family in making positive lifestyle changes.',
  'James Wilson, MPH',
  '/male-health-educator-professional-headshot.jpg',
  '2024-11-01',
  '/happy-family-cooking-together-kitchen-healthy-meal.jpg',
  ARRAY['family', 'habits', 'lifestyle'],
  'Family',
  '6 min read',
  '# Building Healthy Habits: A Family Wellness Guide

Creating a healthy home environment benefits everyone. Here''s how to get started.

## Start with Small Changes

Don''t overhaul everything at once. Pick one area to focus on:
- Meal planning together
- Family walks after dinner
- Screen-free meal times

## Make It Fun

Health shouldn''t feel like punishment:
- Try new recipes as a family
- Create friendly fitness challenges
- Celebrate non-scale victories

## Lead by Example

Children learn from watching adults:
- Model positive self-talk
- Show enthusiasm for healthy foods
- Demonstrate active living

## Create Supportive Systems

Set your family up for success:
- Keep healthy snacks visible
- Schedule activity time
- Make water the default beverage

## Conclusion

Small, consistent efforts create lasting change for the whole family.',
  true
);

-- Insert the 5 new articles with 2025 dates (these will appear first when sorted)
INSERT INTO blog_posts (slug, title, description, author, author_image, published_at, hero_image, tags, category, reading_time, content, is_published) VALUES
(
  'understanding-weight-health-everyday-habits',
  'Understanding Weight Health and Everyday Habits',
  'Learn how everyday habits, routines, and environments influence overall well-being. A clear, practical guide to weight health beyond quick fixes.',
  'Healthy Weight Literacy Foundation Editorial Team',
  '/editorial-team-professional.jpg',
  '2025-12-18',
  '/healthy-lifestyle-daily-habits-wellness.jpg',
  ARRAY['weight-health', 'habits', 'wellness', 'education'],
  'Weight Literacy',
  '7 min read',
  E'# Understanding Weight Health and Everyday Habits\n\n## Introduction\n\nMany people feel confused or overwhelmed when they try to learn about weight and health. Online information can be conflicting, overly technical, or focused on quick fixes that do not reflect real life. This can make it hard to know what truly matters for long-term wellness.\n\nWeight health is not about perfection, strict rules, or comparing yourself to others. It is about understanding how everyday habits, routines, and environments influence overall well-being over time. Everyone's experience is different, and there is no single path that works for all people.\n\nThis article explains weight health in clear, simple language. It focuses on how daily habits—such as eating patterns, movement, sleep, and stress—can support overall wellness in practical, realistic ways.\n\n## What Weight Health Really Means\n\nWeight health is influenced by many factors working together. It is not defined by a single number, appearance, or short-term change. Instead, it reflects how daily routines support the body's ability to function well over time.\n\n![Healthy lifestyle and wellness habits](/healthy-lifestyle-daily-habits-wellness.jpg)\n\nKey points to understand include:\n\n- Weight health involves physical, emotional, and mental well-being\n- Many factors beyond food play a role\n- People's bodies respond differently to habits and environments\n- Progress often happens gradually, not all at once\n\nFocusing only on weight can miss the bigger picture. Energy levels, sleep quality, mood, and daily functioning are also important signs of overall wellness.\n\n## How Everyday Habits Influence Wellness\n\nSmall, consistent habits often have a greater impact than extreme changes. Everyday routines shape how people feel and function throughout the day.\n\nExamples of habits that influence weight health include:\n\n- **Eating patterns:** Regular meals and balanced food choices can support steady energy\n- **Movem... <truncated>
  true
),
(
  'stress-weight-health-daily-well-being',
  'How Stress Affects Weight Health and Daily Well-Being',
  'Understanding the connection between stress and weight health. Learn how stress influences energy, sleep, eating habits, and overall wellness.',
  'Healthy Weight Literacy Foundation Editorial Team',
  '/editorial-team-professional.jpg',
  '2025-12-17',
  '/stress-management-relaxation-wellness.jpg',
  ARRAY['stress', 'weight-health', 'mental-health', 'wellness'],
  'Metabolic Health',
  '6 min read',
  E'# How Stress Affects Weight Health and Daily Well-Being\n\n## Introduction\n\nStress is a normal part of life, but many people notice that ongoing stress can affect their energy, sleep, eating habits, and overall sense of well-being. Because stress often feels invisible, its role in weight health can be confusing or overlooked.\n\nWeight health is influenced by more than food and movement alone. Emotional and mental factors, including stress, play an important role in how the body functions day to day. Understanding this connection can help people approach their health with more awareness and self-compassion.\n\nThis article explains how stress relates to weight health, why it matters, and how everyday habits can help support balance in a safe, realistic way.\n\n## What Stress Is and How It Affects the Body\n\nStress is the body's natural response to challenges or demands. Short-term stress can be helpful, such as staying alert during an important task. Long-term or frequent stress, however, can place strain on the body.\n\n![Stress management and relaxation techniques](/stress-management-relaxation-wellness.jpg)\n\nOngoing stress may affect:\n\n- Energy levels and fatigue  \n- Sleep quality and restfulness  \n- Mood and emotional balance  \n- Focus and decision-making  \n\nWhen stress lasts for long periods, it can influence daily routines in subtle but meaningful ways.\n\n## The Connection Between Stress and Weight Health\n\nStress can affect weight health indirectly through habits and behaviors rather than through a single cause. When people feel stressed, they may notice changes such as:\n\n- Irregular eating patterns  \n- Skipping meals or eating at unusual times  \n- Reduced motivation for movement  \n- Trouble sleeping or staying asleep  \n\nStress can also affect how the body regulates energy and appetite. These responses are part of the body's natural systems and vary from person to person. Understanding this connection can reduce self-blame and help pe... <truncated>
  true
),
(
  'nutrition-labels-weight-health-understanding',
  'How to Read Nutrition Labels for Better Weight Health Understanding',
  'Learn how to read nutrition labels in clear, simple language. Use labels as a tool for informed choices that fit your preferences and health goals.',
  'Healthy Weight Literacy Foundation Editorial Team',
  '/editorial-team-professional.jpg',
  '2025-12-16',
  '/nutrition-label-reading-grocery-shopping.jpg',
  ARRAY['nutrition', 'education', 'food-literacy', 'health'],
  'Nutrition Education',
  '8 min read',
  E'# How to Read Nutrition Labels for Better Weight Health Understanding\n\n## Introduction\n\nNutrition labels are found on many packaged foods, yet they can feel confusing or overwhelming. Numbers, percentages, and unfamiliar terms may make it hard to know what information actually matters or how to use it in daily life.\n\nNutrition labels are tools meant to support understanding, not rules to follow perfectly. Learning how to read them can help people make more informed choices that fit their preferences, routines, and overall health goals.\n\nThis article explains the main parts of a nutrition label in clear, simple language and shows how labels can be used as one source of information when thinking about weight health.\n\n## What a Nutrition Label Is Designed to Do\n\nA nutrition label provides standardized information about what is in a packaged food. Its purpose is to help people compare foods and understand basic nutrient content.\n\n![Nutrition label reading and grocery shopping](/nutrition-label-reading-grocery-shopping.jpg)\n\nMost labels include:\n\n- Serving size  \n- Calories  \n- Key nutrients  \n- Percent Daily Values  \n\nLabels do not tell the whole story about a food, but they offer a consistent snapshot that can be useful when viewed in context.\n\n## Understanding Serving Size\n\nThe serving size is one of the most important—and often misunderstood—parts of the label. It tells you the amount of food that the listed nutrition information is based on.\n\nImportant points to keep in mind:\n\n- A package may contain more than one serving  \n- The serving size is not a recommendation  \n- People may eat more or less than the listed serving  \n\nUnderstanding serving size helps make sense of the numbers that follow on the label.\n\n## Calories and What They Represent\n\nCalories reflect the amount of energy a food provides. Everyone's energy needs are different, and calorie needs can vary based on age, activity level, and many other factors.\n\nRath... <truncated>
  true
),
(
  'hydration-weight-health-everyday-functioning',
  'How Hydration Supports Weight Health and Everyday Functioning',
  'Discover how hydration affects energy, digestion, concentration, and daily habits related to eating and activity. A balanced guide to fluids and wellness.',
  'Healthy Weight Literacy Foundation Editorial Team',
  '/editorial-team-professional.jpg',
  '2025-12-15',
  '/hydration-water-drinking-healthy-habits.jpg',
  ARRAY['hydration', 'health', 'wellness', 'daily-habits'],
  'Weight Literacy',
  '6 min read',
  E'# How Hydration Supports Weight Health and Everyday Functioning\n\n## Introduction\n\nWater is essential for life, yet hydration is often overlooked in conversations about health and weight. Many people focus on food and movement while forgetting that fluids play a key role in how the body feels and functions throughout the day.\n\nHydration affects energy, digestion, concentration, and overall comfort. It can also influence daily habits related to eating and activity. Understanding hydration does not require tracking every sip or following strict rules.\n\nThis article explains how hydration connects to weight health, why it matters for everyday functioning, and how people can think about fluids in a balanced, realistic way.\n\n## Why Hydration Matters for the Body\n\nThe human body relies on water to support many basic processes. Fluids help regulate temperature, move nutrients, and support digestion and circulation.\n\n![Hydration and healthy water drinking habits](/hydration-water-drinking-healthy-habits.jpg)\n\nAdequate hydration can influence:\n\n- Energy levels and alertness  \n- Physical comfort and digestion  \n- Ability to focus and concentrate  \n- Physical activity and movement  \n\nWhen hydration is low, people may feel tired, sluggish, or less comfortable, which can affect daily routines.\n\n## Hydration and Weight Health\n\nHydration does not directly determine weight, but it can influence habits that relate to weight health. For example, dehydration may affect appetite signals, energy levels, or the desire to move.\n\nSome people notice that when they are well hydrated, they may:\n\n- Feel more comfortable during the day  \n- Better recognize hunger and fullness cues  \n- Have steadier energy for daily activities  \n\nThese experiences vary from person to person, but they show how hydration fits into the broader picture of wellness.\n\n## Common Signs of Dehydration\n\nDehydration can happen gradually and may not always feel obvious. General sign... <truncated>
  true
),
(
  'metabolic-health-why-it-matters',
  'Understanding Metabolic Health and Why It Matters',
  'Learn what metabolic health means in everyday language. Explore how daily habits and environments support how the body manages energy and maintains balance.',
  'Healthy Weight Literacy Foundation Editorial Team',
  '/editorial-team-professional.jpg',
  '2025-12-14',
  '/metabolic-health-wellness-energy-balance.jpg',
  ARRAY['metabolic-health', 'energy', 'wellness', 'education'],
  'Metabolic Health',
  '7 min read',
  E'# Understanding Metabolic Health and Why It Matters\n\n## Introduction\n\nThe term "metabolic health" is often mentioned in conversations about weight, energy, and overall wellness, but many people are not sure what it actually means. Online explanations can feel technical or focused on medical details, which may make the topic harder to understand.\n\nMetabolic health is not about a single condition or diagnosis. It describes how well the body manages energy and maintains balance across several important systems. These systems influence how the body uses food, regulates blood sugar, supports energy levels, and responds to daily demands.\n\nThis article explains metabolic health in clear, everyday language and explores how daily habits and environments can support it over time.\n\n## What Metabolic Health Means\n\nMetabolic health refers to how effectively the body carries out essential processes that keep it functioning day to day. These processes work together to help the body convert food into energy and maintain internal balance.\n\n![Metabolic health and energy balance](/metabolic-health-wellness-energy-balance.jpg)\n\nMetabolic health is often discussed in relation to factors such as:\n\n- How the body uses and stores energy  \n- How blood sugar levels are regulated  \n- How fats are processed  \n- How the body responds to daily stressors  \n\nRather than focusing on a single number or measurement, metabolic health reflects patterns and overall function across time.\n\n## How Metabolic Health Connects to Weight Health\n\nMetabolic health and weight health are related, but they are not the same thing. Weight alone does not fully describe how the body is functioning. People of many body sizes can experience differences in metabolic health.\n\nMetabolic health can influence:\n\n- Energy levels throughout the day  \n- Feelings of fatigue or alertness  \n- How the body responds to meals  \n- Ability to maintain consistent daily routines  \n\nUnderstanding this ... <truncated>
  true
);
