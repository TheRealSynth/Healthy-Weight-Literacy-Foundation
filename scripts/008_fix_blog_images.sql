-- Fix all blog post images to use Unsplash URLs instead of broken local paths

-- Fix author images
UPDATE blog_posts SET author_image = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face' WHERE author_image = '/editorial-team-professional.jpg';
UPDATE blog_posts SET author_image = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' WHERE author_image = '/male-health-educator-professional-headshot.jpg';

-- Fix hero images
UPDATE blog_posts SET hero_image = 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=600&fit=crop' WHERE hero_image = '/healthy-lifestyle-daily-habits-wellness.jpg';
UPDATE blog_posts SET hero_image = 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&h=600&fit=crop' WHERE hero_image = '/healthy-food-nutrition-colorful-vegetables-fruits.jpg';
UPDATE blog_posts SET hero_image = 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1200&h=600&fit=crop' WHERE hero_image = '/happy-family-cooking-together-kitchen-healthy-meal.jpg';
UPDATE blog_posts SET hero_image = 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=600&fit=crop' WHERE hero_image = '/stress-management-relaxation-wellness.jpg';
UPDATE blog_posts SET hero_image = 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&h=600&fit=crop' WHERE hero_image = '/nutrition-label-reading-grocery-shopping.jpg';
UPDATE blog_posts SET hero_image = 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=1200&h=600&fit=crop' WHERE hero_image = '/hydration-water-drinking-healthy-habits.jpg';
UPDATE blog_posts SET hero_image = 'https://images.unsplash.com/photo-1505576399279-0a7c9ec0ef68?w=1200&h=600&fit=crop' WHERE hero_image = '/metabolic-health-wellness-energy-balance.jpg';
UPDATE blog_posts SET hero_image = 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=600&fit=crop' WHERE hero_image = '/diverse-community-health-education.jpg';
UPDATE blog_posts SET hero_image = 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=600&fit=crop' WHERE hero_image = '/diverse-healthy-community-wellness.jpg';
UPDATE blog_posts SET hero_image = 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1200&h=600&fit=crop' WHERE hero_image = '/meal-planning-healthy-food-prep-kitchen-organized.jpg';
