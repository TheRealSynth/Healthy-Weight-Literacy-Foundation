# Route Inventory

This document lists all valid routes in the application. All internal links must point to one of these routes.

## Source of Truth

The canonical list of routes is maintained in `/lib/routes.ts`. All navigation components, links, and redirects should use these constants.

## Valid Static Routes

### Main Navigation
- `/` - Home page
- `/about` - About the organization
- `/programs` - Programs overview
- `/education` - Educational resources hub
- `/city-resources` - City-specific resources
- `/contact` - Contact form

### Content Pages
- `/blog` - Blog listing page
- `/blog/[slug]` - Individual blog post (dynamic)
- `/resources` - Resources listing page  
- `/resources/[slug]` - Individual resource (dynamic)
- `/programs/[slug]` - Individual program (dynamic)
- `/events` - Events listing

### Get Involved
- `/donate` - Donation page
- `/volunteer` - Volunteer sign-up
- `/partner` - Partnership inquiries

### Services
- `/telehealth-intake` - Telehealth intake form

### Organization Info
- `/impact` - Impact metrics
- `/careers` - Career opportunities
- `/press` - Press and media
- `/financials` - Financial transparency

### Support
- `/faq` - Frequently asked questions
- `/search` - Site search

### Legal
- `/privacy` - Privacy policy
- `/terms` - Terms of use
- `/cookies` - Cookie policy
- `/accessibility` - Accessibility statement

## Dynamic Routes

Dynamic routes are generated for:
- Blog posts: `/blog/[slug]`
- Programs: `/programs/[slug]`
- Resources: `/resources/[slug]`

Use the `dynamicRoutes` helpers from `/lib/routes.ts`:
```typescript
import { dynamicRoutes } from '@/lib/routes'
const blogUrl = dynamicRoutes.blogPost('my-article-slug')
```

## Redirects

The following legacy routes redirect to their correct destinations (see `next.config.mjs`):

| Old Route | New Route | Reason |
|-----------|-----------|--------|
| `/cityresources` | `/city-resources` | Slug standardization |
| `/resources` | `/city-resources` | Route rename/clarification |
| `/articles` | `/education` | Content reorganization |
| `/learn` | `/education` | Content reorganization |
| `/telehealth` | `/telehealth-intake` | Route clarification |

## Invalid Routes (404)

These routes do NOT exist and should not be linked:
- `/cityresources` (redirects to `/city-resources`)
- `/learn` (redirects to `/education`)
- `/articles` (redirects to `/education`)

## Validation

Run the route validation test to ensure all navigation links are valid:
```bash
npm test -- routes.test.ts
```

## Adding New Routes

When adding a new route:
1. Create the page file in the `app/` directory
2. Add the route constant to `/lib/routes.ts`
3. Update this documentation
4. Run the validation test
5. If replacing an old route, add a redirect in `next.config.mjs`

## Link Examples

Always use the route constants for internal links:

```typescript
import { ROUTES, dynamicRoutes } from '@/lib/routes'

// Static routes
<Link href={ROUTES.ABOUT}>About</Link>
<Link href={ROUTES.DONATE}>Donate</Link>

// Dynamic routes
<Link href={dynamicRoutes.blogPost(post.slug)}>
  {post.title}
</Link>
```

## Last Updated
This document was last updated during the 404 fix initiative on 2025.
