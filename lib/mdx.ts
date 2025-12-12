// MDX content types and utilities

export interface BlogPost {
  slug: string
  title: string
  description: string
  author: string
  authorImage: string
  publishedAt: string
  updatedAt?: string
  heroImage: string
  tags: string[]
  category: string
  readingTime: string
  content: string
}

export interface Program {
  slug: string
  title: string
  description: string
  heroImage: string
  tags: string[]
  category: string
  duration: string
  format: string
  audience: string
  content: string
}

export interface Resource {
  slug: string
  title: string
  description: string
  author: string
  heroImage: string
  tags: string[]
  category: string
  type: string
  content: string
}

// Sample blog posts data
export const blogPosts: BlogPost[] = [
  {
    slug: "understanding-healthy-weight",
    title: "Understanding Healthy Weight: Beyond the Numbers",
    description:
      "Learn why healthy weight is about more than just a number on the scale. Discover the holistic approach to wellness that focuses on overall health and well-being.",
    author: "Dr. Sarah Johnson",
    authorImage: "/female-doctor-portrait-professional-headshot.jpg",
    publishedAt: "2024-12-01",
    heroImage: "/healthy-lifestyle-wellness-nature-person-exercisin.jpg",
    tags: ["wellness", "education", "mindset"],
    category: "Education",
    readingTime: "5 min read",
    content: `
# Understanding Healthy Weight: Beyond the Numbers

When we think about healthy weight, our minds often jump straight to the scale. But true health encompasses so much more than a single number.

## The Holistic Approach

A healthy weight is one that:
- Allows you to feel energetic and vibrant
- Supports your mental and emotional well-being
- Reduces risk of chronic diseases
- Is sustainable and doesn't require extreme measures

## Key Factors to Consider

### 1. Body Composition
Muscle weighs more than fat, so the number on the scale doesn't tell the whole story.

### 2. Metabolic Health
Blood pressure, blood sugar, and cholesterol levels are crucial indicators of health.

### 3. Energy Levels
How you feel throughout the day matters more than any measurement.

### 4. Mental Well-being
Your relationship with food and your body impacts overall health significantly.

## Moving Forward

Focus on building sustainable habits rather than chasing a specific number. Small, consistent changes lead to lasting results.
    `,
  },
  {
    slug: "nutrition-myths-debunked",
    title: "10 Common Nutrition Myths Debunked by Science",
    description:
      "Separate fact from fiction with our evidence-based guide to common nutrition misconceptions. Get the truth about carbs, fats, and more.",
    author: "Maria Chen, RD",
    authorImage: "/asian-female-nutritionist-professional-headshot.jpg",
    publishedAt: "2024-11-15",
    heroImage: "/healthy-food-nutrition-colorful-vegetables-fruits.jpg",
    tags: ["nutrition", "science", "myths"],
    category: "Nutrition",
    readingTime: "8 min read",
    content: `
# 10 Common Nutrition Myths Debunked by Science

In the age of information overload, it's easy to fall prey to nutrition myths. Let's set the record straight.

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

Focus on whole, minimally processed foods and listen to your body's hunger cues.
    `,
  },
  {
    slug: "family-wellness-guide",
    title: "Building Healthy Habits: A Family Wellness Guide",
    description:
      "Practical strategies for creating a healthy home environment. Learn how to involve the whole family in making positive lifestyle changes.",
    author: "James Wilson, MPH",
    authorImage: "/male-health-educator-professional-headshot.jpg",
    publishedAt: "2024-11-01",
    heroImage: "/happy-family-cooking-together-kitchen-healthy-meal.jpg",
    tags: ["family", "habits", "lifestyle"],
    category: "Family",
    readingTime: "6 min read",
    content: `
# Building Healthy Habits: A Family Wellness Guide

Creating a healthy home environment benefits everyone. Here's how to get started.

## Start with Small Changes

Don't overhaul everything at once. Pick one area to focus on:
- Meal planning together
- Family walks after dinner
- Screen-free meal times

## Make It Fun

Health shouldn't feel like punishment:
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

Small, consistent efforts create lasting change for the whole family.
    `,
  },
]

// Sample programs data
export const programs: Program[] = [
  {
    slug: "nutrition-basics-workshop",
    title: "Nutrition Basics Workshop",
    description:
      "A comprehensive 6-week program teaching fundamental nutrition concepts, meal planning, and healthy cooking skills for sustainable weight management.",
    heroImage: "/nutrition-workshop-cooking-class-people-learning.jpg",
    tags: ["nutrition", "education", "beginner"],
    category: "Education",
    duration: "6 weeks",
    format: "In-person & Virtual",
    audience: "Adults",
    content: `
# Nutrition Basics Workshop

Transform your relationship with food through evidence-based nutrition education.

## Program Overview

This 6-week program covers:
- **Week 1:** Understanding macronutrients and micronutrients
- **Week 2:** Reading nutrition labels effectively
- **Week 3:** Meal planning and prep strategies
- **Week 4:** Healthy cooking techniques
- **Week 5:** Eating mindfully and intuitively
- **Week 6:** Building sustainable habits

## Who It's For

This program is perfect for:
- Beginners starting their health journey
- Anyone confused by conflicting nutrition information
- People wanting to improve their cooking skills
- Families looking to eat healthier together

## What You'll Learn

- How to create balanced meals
- Strategies for grocery shopping on a budget
- Tips for meal prepping efficiently
- Ways to make healthy eating enjoyable

## Program Format

Choose the format that works best for you:
- **In-Person:** Small group sessions at our community centers
- **Virtual:** Interactive online classes via Zoom

## How to Join

1. Complete our online interest form
2. Attend a free orientation session
3. Select your preferred session time
4. Begin your transformation!
    `,
  },
  {
    slug: "family-fit-program",
    title: "Family Fit Program",
    description:
      "An engaging 8-week program designed for families with children ages 5-12, featuring fun activities, cooking classes, and family wellness coaching.",
    heroImage: "/family-fitness-exercise-together-outdoor-park.jpg",
    tags: ["family", "children", "activity"],
    category: "Programs",
    duration: "8 weeks",
    format: "In-person",
    audience: "Families with children 5-12",
    content: `
# Family Fit Program

Make healthy living a family adventure with our award-winning program.

## Program Overview

The Family Fit Program brings families together through:
- Interactive cooking classes
- Fun physical activities
- Family wellness coaching
- Take-home challenges and games

## Weekly Schedule

Each week includes:
- **Family Activity Session (60 min):** Fun games and exercises
- **Cooking Class (45 min):** Prepare healthy recipes together
- **Family Discussion (30 min):** Share wins and problem-solve challenges

## Key Benefits

### For Children
- Develop positive attitudes toward healthy food
- Learn cooking skills and kitchen safety
- Build confidence through physical activity
- Make new friends with similar interests

### For Parents
- Learn strategies for picky eaters
- Get tips for active family time
- Connect with other families on similar journeys
- Receive professional guidance and support

## Success Stories

> "Our kids now ask for vegetables! The program made healthy eating fun instead of a battle." - The Martinez Family

## How to Enroll

Contact us to learn about upcoming sessions and registration.
    `,
  },
  {
    slug: "workplace-wellness",
    title: "Workplace Wellness Initiative",
    description:
      "Comprehensive corporate wellness program offering lunch-and-learns, fitness challenges, and health coaching for employee well-being.",
    heroImage: "/corporate-wellness-office-health-employees-exercis.jpg",
    tags: ["corporate", "workplace", "wellness"],
    category: "Programs",
    duration: "Ongoing",
    format: "On-site & Virtual",
    audience: "Organizations & Businesses",
    content: `
# Workplace Wellness Initiative

Invest in your most valuable asset—your employees.

## Why Workplace Wellness?

Healthy employees are:
- More productive and engaged
- Less likely to take sick days
- More satisfied with their jobs
- Better collaborators and innovators

## Program Components

### Lunch & Learn Sessions
Monthly educational sessions on topics like:
- Stress management
- Healthy eating at work
- Desk exercises and ergonomics
- Sleep and recovery

### Fitness Challenges
Quarterly team-based challenges:
- Step competitions
- Hydration challenges
- Healthy habit streaks
- Movement minutes

### Health Coaching
One-on-one sessions with certified coaches:
- Goal setting and accountability
- Personalized nutrition guidance
- Stress management strategies
- Work-life balance support

### Wellness Resources
Access to our comprehensive library:
- Healthy recipes and meal plans
- Exercise videos and guides
- Mental wellness tools
- Health trackers and apps

## Implementation

We work with your HR team to:
1. Assess current wellness needs
2. Customize program components
3. Launch with employee engagement events
4. Measure and report outcomes

## Get Started

Contact our partnerships team to discuss how we can support your organization.
    `,
  },
]

// Sample resources data
export const resources: Resource[] = [
  {
    slug: "healthy-meal-planning-guide",
    title: "Healthy Meal Planning Guide",
    description:
      "A comprehensive guide to planning nutritious meals for the week, including templates, shopping lists, and budget-friendly tips.",
    author: "HWLF Nutrition Team",
    heroImage: "/meal-planning-healthy-food-prep-kitchen-organized.jpg",
    tags: ["meal-planning", "nutrition", "budget"],
    category: "Nutrition",
    type: "Guide",
    content: `
# Healthy Meal Planning Guide

Master the art of meal planning to save time, money, and stress while eating well.

## Why Meal Plan?

Benefits of weekly meal planning:
- **Save Money:** Reduce food waste and impulse purchases
- **Save Time:** Know exactly what to cook each day
- **Eat Healthier:** Plan balanced meals in advance
- **Reduce Stress:** No more "what's for dinner?" panic

## Getting Started

### Step 1: Assess Your Week
Look at your calendar and note:
- Busy nights needing quick meals
- Days with more cooking time
- Social events or eating out
- Lunch situations (pack or buy)

### Step 2: Choose Your Meals
Select 5-7 dinners that include:
- 2-3 quick meals (under 30 minutes)
- 1-2 batch cooking recipes
- 1 new recipe to try
- 1 leftover night

### Step 3: Make Your List
Organize by store section:
- Produce
- Proteins
- Dairy
- Pantry staples
- Frozen items

## Sample Weekly Plan

| Day | Breakfast | Lunch | Dinner |
|-----|-----------|-------|--------|
| Mon | Oatmeal | Salad + soup | Sheet pan chicken |
| Tue | Smoothie | Leftovers | Taco bowl |
| Wed | Yogurt parfait | Sandwich | Pasta primavera |
| Thu | Eggs + toast | Salad | Stir fry |
| Fri | Oatmeal | Leftovers | Pizza night |

## Budget Tips

- Buy seasonal produce
- Use frozen fruits and vegetables
- Buy whole grains in bulk
- Plan around sales
- Use meat as a side, not main

## Download Resources

- Weekly planning template (PDF)
- Master grocery list
- 50 quick dinner ideas
    `,
  },
  {
    slug: "mindful-eating-workbook",
    title: "Mindful Eating Workbook",
    description:
      "An interactive workbook with exercises and reflections to help develop a healthier, more intuitive relationship with food.",
    author: "Dr. Emily Roberts, PhD",
    heroImage: "/mindful-eating-meditation-peaceful-woman-healthy-f.jpg",
    tags: ["mindfulness", "mental-health", "habits"],
    category: "Mindset",
    type: "Workbook",
    content: `
# Mindful Eating Workbook

Develop a peaceful, intuitive relationship with food through mindfulness practices.

## What is Mindful Eating?

Mindful eating is:
- Paying full attention to the eating experience
- Noticing physical hunger and fullness cues
- Eating without judgment or guilt
- Appreciating food with all senses

## The Hunger-Fullness Scale

Rate your hunger before, during, and after meals:

1. **Ravenous** - Uncomfortably hungry
2. **Very Hungry** - Ready to eat
3. **Hungry** - Stomach starting to signal
4. **Slightly Hungry** - Could eat
5. **Neutral** - Neither hungry nor full
6. **Satisfied** - Comfortable
7. **Full** - Stomach feels stretched
8. **Very Full** - Uncomfortable
9. **Stuffed** - Very uncomfortable
10. **Painfully Full** - Physical discomfort

**Goal:** Start eating at 3-4, stop at 6-7

## Daily Reflection Exercise

Each day, reflect on:
1. What did I eat today that nourished my body?
2. How did I feel before, during, and after eating?
3. Did I eat in response to physical hunger or emotions?
4. What am I grateful for about my food today?

## Mindful Eating Practice

Try this with one meal:
1. Remove distractions (phone, TV)
2. Take three deep breaths
3. Notice the food's appearance and smell
4. Take small bites and chew thoroughly
5. Put down utensils between bites
6. Check in with fullness midway through

## Weekly Exercises

- **Week 1:** Hunger/fullness tracking
- **Week 2:** Emotional eating awareness
- **Week 3:** Savoring practices
- **Week 4:** Challenging food rules
    `,
  },
  {
    slug: "family-activity-ideas",
    title: "100 Family Activity Ideas",
    description:
      "A collection of fun, active family activities for all seasons and fitness levels, designed to get everyone moving together.",
    author: "HWLF Activity Team",
    heroImage: "/family-outdoor-activities-hiking-nature-children-p.jpg",
    tags: ["family", "activity", "fitness"],
    category: "Activity",
    type: "Guide",
    content: `
# 100 Family Activity Ideas

Get the whole family moving with these fun, accessible activities!

## Indoor Activities

### Active Games
1. Dance party with favorite music
2. Indoor obstacle course
3. Balloon volleyball
4. Yoga for kids videos
5. Hide and seek active version

### Creative Movement
6. Animal movement game (hop like a frog, etc.)
7. Freeze dance
8. Musical chairs with exercises
9. Indoor bowling with water bottles
10. Paper airplane distance contest

## Outdoor Activities

### Backyard Fun
11. Tag variations (freeze tag, blob tag)
12. Frisbee
13. Kickball
14. Jump rope challenges
15. Hula hoop contests

### Nature Adventures
16. Family hikes
17. Nature scavenger hunts
18. Bird watching walks
19. Park playground visits
20. Beach or lake swimming

## Seasonal Ideas

### Spring
- Gardening together
- Bike rides
- Kite flying
- Outdoor cleanup walks

### Summer
- Swimming
- Camping
- Water balloon activities
- Outdoor movie nights with stretch breaks

### Fall
- Apple picking
- Leaf pile jumping
- Football or soccer
- Halloween activity walk

### Winter
- Sledding
- Snow fort building
- Ice skating
- Indoor fitness games

## Making It Work

### Tips for Success
- Let kids choose activities
- Keep it fun, not competitive
- Adapt for all abilities
- Celebrate participation, not performance

### Sample Weekly Schedule
- **Mon/Wed/Fri:** 30-min family walks
- **Tuesday:** Dance party
- **Thursday:** Backyard games
- **Weekend:** Longer outdoor adventure

## Track Your Progress

Use our family activity tracker to:
- Log activities together
- Earn badges for consistency
- Celebrate milestones
- Set family goals
    `,
  },
]

export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getPrograms(): Program[] {
  return programs
}

export function getProgram(slug: string): Program | undefined {
  return programs.find((program) => program.slug === slug)
}

export function getResources(): Resource[] {
  return resources
}

export function getResource(slug: string): Resource | undefined {
  return resources.find((resource) => resource.slug === slug)
}

export function getRelatedPosts(currentSlug: string, tags: string[]): BlogPost[] {
  return blogPosts
    .filter((post) => post.slug !== currentSlug && post.tags.some((tag) => tags.includes(tag)))
    .slice(0, 3)
}
