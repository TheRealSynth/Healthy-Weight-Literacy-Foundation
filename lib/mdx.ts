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
    authorImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
    publishedAt: "2024-12-01",
    heroImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=600&fit=crop",
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
    authorImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
    publishedAt: "2024-11-15",
    heroImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&h=600&fit=crop",
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
**Truth:** Meal timing is less important than overall calorie and nutrient consumption.

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
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    publishedAt: "2024-11-01",
    heroImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1200&h=600&fit=crop",
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
  {
    slug: "understanding-weight-health-everyday-habits",
    title: "Understanding Weight Health and Everyday Habits",
    description:
      "Learn how everyday habits, routines, and environments influence overall well-being. A clear, practical guide to weight health beyond quick fixes.",
    author: "Healthy Weight Literacy Foundation Editorial Team",
    authorImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
    publishedAt: "2025-12-18",
    heroImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=600&fit=crop",
    tags: ["weight-health", "habits", "wellness", "education"],
    category: "Weight Literacy",
    readingTime: "7 min read",
    content: `
# Understanding Weight Health and Everyday Habits

## Introduction

Many people feel confused or overwhelmed when they try to learn about weight and health. Online information can be conflicting, overly technical, or focused on quick fixes that do not reflect real life. This can make it hard to know what truly matters for long-term wellness.

Weight health is not about perfection, strict rules, or comparing yourself to others. It is about understanding how everyday habits, routines, and environments influence overall well-being over time. Everyone's experience is different, and there is no single path that works for all people.

This article explains weight health in clear, simple language. It focuses on how daily habits—such as eating patterns, movement, sleep, and stress—can support overall wellness in practical, realistic ways.

## What Weight Health Really Means

Weight health is influenced by many factors working together. It is not defined by a single number, appearance, or short-term change. Instead, it reflects how daily routines support the body's ability to function well over time.

![Healthy lifestyle and wellness habits](https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=600&fit=crop)

Key points to understand include:

- Weight health involves physical, emotional, and mental well-being
- Many factors beyond food play a role
- People's bodies respond differently to habits and environments
- Progress often happens gradually, not all at once

Focusing only on weight can miss the bigger picture. Energy levels, sleep quality, mood, and daily functioning are also important signs of overall wellness.

## How Everyday Habits Influence Wellness

Small, consistent habits often have a greater impact than extreme changes. Everyday routines shape how people feel and function throughout the day.

Examples of habits that influence weight health include:

- **Eating patterns:** Regular meals and balanced food choices can support steady energy
- **Movement:** Gentle, consistent activity supports mobility, mood, and daily function
- **Sleep:** Rest affects energy, focus, and appetite regulation
- **Stress management:** Ongoing stress can influence sleep, eating habits, and motivation

These habits do not need to be complicated. Many people benefit from starting with small, manageable changes that fit their daily lives.

## The Role of Environment and Community

Where people live, work, and spend time can strongly influence daily habits. Access to safe spaces for movement, food options, transportation, and social support all play a role in weight health.

Environmental factors may include:

- Walkability of neighborhoods
- Access to grocery stores or food preparation spaces
- Work schedules and commuting time
- Family routines and cultural traditions
- Availability of community programs or public spaces

Understanding these influences can help people approach weight health with more compassion for themselves and others.

## How to Take Action in a Safe, Informed Way

Building supportive habits is a gradual process. There is no need to make many changes at once. General steps that people often explore include:

- Paying attention to sleep routines and rest
- Adding short periods of movement into daily life
- Eating regular meals when possible
- Drinking water throughout the day
- Creating routines that feel realistic and sustainable

When questions arise about personal health concerns, it is important to talk with a licensed healthcare professional. They can help individuals understand how general health information applies to their specific situation.

## Questions You Can Ask a Healthcare Professional

Having open conversations with healthcare professionals can support informed decision-making. Helpful questions may include:

- How do my daily habits affect my overall wellness?
- How might sleep or stress influence my health?
- What small changes could feel realistic for my lifestyle?
- Are there community or educational resources that support healthy routines?
- How can I approach weight health in a balanced, sustainable way?

These discussions can help people feel more confident and supported as they learn.

## Disclaimer

This information is for general education only and is not a substitute for medical advice. Always talk with a licensed health professional about your own health and any medical concerns.
    `,
  },
  {
    slug: "stress-weight-health-daily-well-being",
    title: "How Stress Affects Weight Health and Daily Well-Being",
    description:
      "Understanding the connection between stress and weight health. Learn how stress influences energy, sleep, eating habits, and overall wellness.",
    author: "Healthy Weight Literacy Foundation Editorial Team",
    authorImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
    publishedAt: "2025-12-17",
    heroImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=600&fit=crop",
    tags: ["stress", "weight-health", "mental-health", "wellness"],
    category: "Metabolic Health",
    readingTime: "6 min read",
    content: `
# How Stress Affects Weight Health and Daily Well-Being

## Introduction

Stress is a normal part of life, but many people notice that ongoing stress can affect their energy, sleep, eating habits, and overall sense of well-being. Because stress often feels invisible, its role in weight health can be confusing or overlooked.

Weight health is influenced by more than food and movement alone. Emotional and mental factors, including stress, play an important role in how the body functions day to day. Understanding this connection can help people approach their health with more awareness and self-compassion.

This article explains how stress relates to weight health, why it matters, and how everyday habits can help support balance in a safe, realistic way.

## What Stress Is and How It Affects the Body

Stress is the body's natural response to challenges or demands. Short-term stress can be helpful, such as staying alert during an important task. Long-term or frequent stress, however, can place strain on the body.

![Stress management and relaxation techniques](https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=600&fit=crop)

Ongoing stress may affect:

- Energy levels and fatigue  
- Sleep quality and restfulness  
- Mood and emotional balance  
- Focus and decision-making  

When stress lasts for long periods, it can influence daily routines in subtle but meaningful ways.

## The Connection Between Stress and Weight Health

Stress can affect weight health indirectly through habits and behaviors rather than through a single cause. When people feel stressed, they may notice changes such as:

- Irregular eating patterns  
- Skipping meals or eating at unusual times  
- Reduced motivation for movement  
- Trouble sleeping or staying asleep  

Stress can also affect how the body regulates energy and appetite. These responses are part of the body's natural systems and vary from person to person. Understanding this connection can reduce self-blame and help people focus on supportive habits instead of quick fixes.

## Everyday Sources of Stress

Stress does not come from one place alone. Many people experience stress from multiple areas of life at the same time.

Common sources may include:

- Work or school demands  
- Financial concerns  
- Family responsibilities  
- Health worries  
- Busy schedules or lack of downtime  

Environmental and social factors can also contribute. Recognizing these sources can help people better understand their own experiences.

## How Daily Habits Can Support Stress Balance

Small, consistent habits can help the body recover from stress and support overall wellness. These habits do not remove stress entirely, but they can make it easier to manage.

General examples include:

- Creating regular sleep and wake times  
- Taking short breaks during busy days  
- Spending time outdoors when possible  
- Moving the body in gentle, enjoyable ways  
- Making space for rest or relaxation  

These actions are not cures, but they can support the body's natural ability to cope with stress over time.

## How to Take Action in a Safe, Informed Way

Learning about stress and weight health is a starting point, not a requirement to make immediate changes. People may find it helpful to:

- Notice patterns in stress, sleep, and energy  
- Focus on one small habit at a time  
- Seek information from trusted educational sources  
- Talk with a licensed healthcare professional about ongoing concerns  

Healthcare professionals can help individuals understand how stress interacts with their overall health and discuss appropriate next steps.

## Questions You Can Ask a Healthcare Professional

Having open conversations can support better understanding and confidence. General questions may include:

- How might stress be affecting my overall wellness?  
- Can stress influence sleep, energy, or eating patterns?  
- What everyday habits could support stress balance?  
- Are there educational or community resources that may help?  
- How can I approach weight health in a balanced, sustainable way?

## Disclaimer

This information is for general education only and is not a substitute for medical advice. Always talk with a licensed health professional about your own health and any medical concerns.
    `,
  },
  {
    slug: "nutrition-labels-weight-health-understanding",
    title: "How to Read Nutrition Labels for Better Weight Health Understanding",
    description:
      "Learn how to read nutrition labels in clear, simple language. Use labels as a tool for informed choices that fit your preferences and health goals.",
    author: "Healthy Weight Literacy Foundation Editorial Team",
    authorImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
    publishedAt: "2025-12-16",
    heroImage: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&h=600&fit=crop",
    tags: ["nutrition", "education", "food-literacy", "health"],
    category: "Nutrition Education",
    readingTime: "8 min read",
    content: `
# How to Read Nutrition Labels for Better Weight Health Understanding

## Introduction

Nutrition labels are found on many packaged foods, yet they can feel confusing or overwhelming. Numbers, percentages, and unfamiliar terms may make it hard to know what information actually matters or how to use it in daily life.

Nutrition labels are tools meant to support understanding, not rules to follow perfectly. Learning how to read them can help people make more informed choices that fit their preferences, routines, and overall health goals.

This article explains the main parts of a nutrition label in clear, simple language and shows how labels can be used as one source of information when thinking about weight health.

## What a Nutrition Label Is Designed to Do

A nutrition label provides standardized information about what is in a packaged food. Its purpose is to help people compare foods and understand basic nutrient content.

![Nutrition label reading and grocery shopping](https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&h=600&fit=crop)

Most labels include:

- Serving size  
- Calories  
- Key nutrients  
- Percent Daily Values  

Labels do not tell the whole story about a food, but they offer a consistent snapshot that can be useful when viewed in context.

## Understanding Serving Size

The serving size is one of the most important—and often misunderstood—parts of the label. It tells you the amount of food that the listed nutrition information is based on.

Important points to keep in mind:

- A package may contain more than one serving  
- The serving size is not a recommendation  
- People may eat more or less than the listed serving  

Understanding serving size helps make sense of the numbers that follow on the label.

## Calories and What They Represent

Calories reflect the amount of energy a food provides. Everyone's energy needs are different, and calorie needs can vary based on age, activity level, and many other factors.

Rather than focusing on a single number, many people find it helpful to think about calories alongside:

- How filling the food feels  
- How it fits into a meal or snack  
- How it supports energy throughout the day  

Calories are just one part of the overall picture.

## Key Nutrients to Notice

Nutrition labels list several nutrients that can help people understand the balance of a food.

Common nutrients include:

- Fat  
- Sodium  
- Carbohydrates  
- Fiber  
- Sugars  
- Protein  

Some people use labels to compare foods or to notice patterns in what they eat. Others use them occasionally when trying something new. Both approaches are valid.

## What Percent Daily Value Means

Percent Daily Value (%DV) shows how much a nutrient contributes to a general daily reference amount. It is based on broad guidelines, not individual needs.

General tips:

- Lower percentages mean less of that nutrient  
- Higher percentages mean more of that nutrient  
- %DV is a reference point, not a target  

Percent Daily Value can help with comparison, but it does not need to be followed exactly.

## Using Nutrition Labels in Real Life

Nutrition labels are most helpful when used flexibly. They are one tool among many, alongside taste, culture, budget, and availability.

People may find it useful to:

- Compare similar products  
- Learn which foods help them feel satisfied  
- Notice how different foods affect energy levels  

There is no requirement to read every label or track every detail.

## How to Take Action in a Safe, Informed Way

Learning to read nutrition labels is a skill that develops over time. Helpful steps include:

- Focusing on one part of the label at a time  
- Using labels for comparison rather than judgment  
- Remembering that no single food defines health  
- Talking with a licensed healthcare professional about nutrition questions  

Healthcare professionals can help individuals understand how general nutrition information applies to their personal health needs.

## Questions You Can Ask a Healthcare Professional

If nutrition labels raise questions, general topics to discuss may include:

- How can I use nutrition labels without feeling overwhelmed?  
- Which parts of the label are most relevant for me?  
- How do nutrition labels fit into overall weight health?  
- Are there educational resources that can help me learn more?  

## Disclaimer

This information is for general education only and is not a substitute for medical advice. Always talk with a licensed health professional about your own health and any medical concerns.
    `,
  },
  {
    slug: "hydration-weight-health-everyday-functioning",
    title: "How Hydration Supports Weight Health and Everyday Functioning",
    description:
      "Discover how hydration affects energy, digestion, concentration, and daily habits related to eating and activity. A balanced guide to fluids and wellness.",
    author: "Healthy Weight Literacy Foundation Editorial Team",
    authorImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
    publishedAt: "2025-12-15",
    heroImage: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=1200&h=600&fit=crop",
    tags: ["hydration", "health", "wellness", "daily-habits"],
    category: "Weight Literacy",
    readingTime: "6 min read",
    content: `
# How Hydration Supports Weight Health and Everyday Functioning

## Introduction

Water is essential for life, yet hydration is often overlooked in conversations about health and weight. Many people focus on food and movement while forgetting that fluids play a key role in how the body feels and functions throughout the day.

Hydration affects energy, digestion, concentration, and overall comfort. It can also influence daily habits related to eating and activity. Understanding hydration does not require tracking every sip or following strict rules.

This article explains how hydration connects to weight health, why it matters for everyday functioning, and how people can think about fluids in a balanced, realistic way.

## Why Hydration Matters for the Body

The human body relies on water to support many basic processes. Fluids help regulate temperature, move nutrients, and support digestion and circulation.

![Hydration and healthy water drinking habits](https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=1200&h=600&fit=crop)

Adequate hydration can influence:

- Energy levels and alertness  
- Physical comfort and digestion  
- Ability to focus and concentrate  
- Physical activity and movement  

When hydration is low, people may feel tired, sluggish, or less comfortable, which can affect daily routines.

## Hydration and Weight Health

Hydration does not directly determine weight, but it can influence habits that relate to weight health. For example, dehydration may affect appetite signals, energy levels, or the desire to move.

Some people notice that when they are well hydrated, they may:

- Feel more comfortable during the day  
- Better recognize hunger and fullness cues  
- Have steadier energy for daily activities  

These experiences vary from person to person, but they show how hydration fits into the broader picture of wellness.

## Common Signs of Dehydration

Dehydration can happen gradually and may not always feel obvious. General signs can include:

- Feeling thirsty  
- Dry mouth or lips  
- Dark-colored urine  
- Fatigue or low energy  
- Headaches  

Many factors influence hydration needs, including climate, activity level, and daily routines.

## Sources of Fluids Beyond Water

While water is a common and accessible choice, hydration can come from many sources. Fluids are found in:

- Plain water  
- Milk or milk alternatives  
- Soups and broths  
- Fruits and vegetables with high water content  

People have different preferences and cultural habits around beverages. What matters most is overall fluid consumption across the day.

## Everyday Factors That Affect Hydration

Daily life can make hydration easier or harder. Factors that may influence hydration levels include:

- Busy schedules or long workdays  
- Limited access to water during activities  
- Hot or dry weather  
- Physical activity or time spent outdoors  

Understanding these factors can help people think realistically about hydration rather than aiming for perfection.

## How to Take Action in a Safe, Informed Way

Hydration habits can be explored gently and flexibly. General approaches people often consider include:

- Keeping water nearby during the day  
- Drinking fluids with meals  
- Noticing thirst cues  
- Choosing beverages that feel enjoyable and accessible  

There is no single amount that works for everyone. A licensed healthcare professional can help individuals understand hydration needs related to their personal health.

## Questions You Can Ask a Healthcare Professional

Hydration questions that may support informed conversations include:

- How does hydration affect my overall wellness?  
- Are there signs I should watch for related to dehydration?  
- How might my daily routine influence fluid needs?  
- What general guidance can help me stay comfortably hydrated?  

## Disclaimer

This information is for general education only and is not a substitute for medical advice. Always talk with a licensed health professional about your own health and any medical concerns.
    `,
  },
  {
    slug: "metabolic-health-why-it-matters",
    title: "Understanding Metabolic Health and Why It Matters",
    description:
      "Learn what metabolic health means in everyday language. Explore how daily habits and environments support how the body manages energy and maintains balance.",
    author: "Healthy Weight Literacy Foundation Editorial Team",
    authorImage: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
    publishedAt: "2025-12-14",
    heroImage: "https://images.unsplash.com/photo-1505576399279-0a7c9ec0ef68?w=1200&h=600&fit=crop",
    tags: ["metabolic-health", "energy", "wellness", "education"],
    category: "Metabolic Health",
    readingTime: "7 min read",
    content: `
# Understanding Metabolic Health and Why It Matters

## Introduction

The term "metabolic health" is often mentioned in conversations about weight, energy, and overall wellness, but many people are not sure what it actually means. Online explanations can feel technical or focused on medical details, which may make the topic harder to understand.

Metabolic health is not about a single condition or diagnosis. It describes how well the body manages energy and maintains balance across several important systems. These systems influence how the body uses food, regulates blood sugar, supports energy levels, and responds to daily demands.

This article explains metabolic health in clear, everyday language and explores how daily habits and environments can support it over time.

## What Metabolic Health Means

Metabolic health refers to how effectively the body carries out essential processes that keep it functioning day to day. These processes work together to help the body convert food into energy and maintain internal balance.

![Metabolic health and energy balance](https://images.unsplash.com/photo-1505576399279-0a7c9ec0ef68?w=1200&h=600&fit=crop)

Metabolic health is often discussed in relation to factors such as:

- How the body uses and stores energy  
- How blood sugar levels are regulated  
- How fats are processed  
- How the body responds to daily stressors  

Rather than focusing on a single number or measurement, metabolic health reflects patterns and overall function across time.

## How Metabolic Health Connects to Weight Health

Metabolic health and weight health are related, but they are not the same thing. Weight alone does not fully describe how the body is functioning. People of many body sizes can experience differences in metabolic health.

Metabolic health can influence:

- Energy levels throughout the day  
- Feelings of fatigue or alertness  
- How the body responds to meals  
- Ability to maintain consistent daily routines  

Understanding this connection can help people shift away from blame or oversimplified explanations and toward a more complete view of health.

## Everyday Habits That Influence Metabolic Health

Daily habits play an important role in supporting metabolic function. These habits do not need to be extreme or perfect to be meaningful.

Common lifestyle factors include:

- **Eating patterns:** Regular meals and balanced food choices can support steady energy  
- **Movement:** Consistent, gentle activity helps the body use energy efficiently  
- **Sleep:** Rest supports many metabolic processes, including energy regulation  
- **Stress balance:** Ongoing stress can affect how the body manages energy  

Small, steady habits often matter more than short-term changes.

## The Role of Environment and Routine

Metabolic health does not exist in isolation. Daily environments and routines influence how easy or difficult it is to maintain supportive habits.

Environmental factors may include:

- Work schedules and time demands  
- Access to food preparation spaces  
- Opportunities for movement during the day  
- Community and social support  
- Cultural norms around meals and rest  

Recognizing these influences can help people approach metabolic health with flexibility and self-understanding.

## How to Take Action in a Safe, Informed Way

Learning about metabolic health is a starting point, not a requirement to change everything at once. General steps people often explore include:

- Paying attention to energy patterns across the day  
- Building consistent sleep and wake routines  
- Adding regular movement that feels manageable  
- Creating meal routines that fit daily life  
- Seeking reliable, non-commercial health information  

For personal health concerns or questions, talking with a licensed healthcare professional is important. They can help individuals understand how metabolic health relates to their own situation.

## Questions You Can Ask a Healthcare Professional

Open conversations can support better understanding and informed decisions. General questions may include:

- What does metabolic health mean in everyday terms?  
- How do sleep, stress, and routines affect metabolic function?  
- What habits support long-term metabolic wellness?  
- How can I think about weight health and metabolic health together?  
- Are there educational resources that can help me learn more?

## Disclaimer

This information is for general education only and is not a substitute for medical advice. Always talk with a licensed health professional about your own health and any medical concerns.
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
    heroImage: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&h=600&fit=crop",
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
    heroImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop",
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
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop",
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
    heroImage: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1200&h=600&fit=crop",
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
    heroImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=600&fit=crop",
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
    heroImage: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&h=600&fit=crop",
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
