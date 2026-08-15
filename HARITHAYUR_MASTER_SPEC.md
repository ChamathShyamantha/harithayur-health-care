# HARITHAYUR — MASTER FRONTEND SPECIFICATION

## 0. PROJECT RULE

This document is the single source of truth for the Harithayur frontend.

Build the website from this specification together with the supplied UI reference image and supplied asset folder.

Do not invent a different visual direction.

The supplied reference image is the visual source of truth for the overall aesthetic, composition, spacing, typography hierarchy, imagery, colors, and component styling.

The supplied assets are the visual source of truth for imagery.

---

# 1. PROJECT OVERVIEW

Brand:

HARITHAYUR

Industry:

Premium Ayurvedic wellness / natural health / personalized consultation.

The website should communicate:

- Ancient Ayurvedic wisdom
- Modern wellness
- Natural ingredients
- Trust
- Personalization
- Sri Lankan / South Asian heritage
- Premium consultation-led care

The website must NOT feel like:

- a generic Shopify template
- a basic ecommerce store
- a cheap supplement website
- a generic medical website
- a marketplace
- a Bootstrap-style template

The visual goal is:

PREMIUM AYURVEDA
+
MODERN WELLNESS
+
EDITORIAL LUXURY
+
PERSONALIZED CONSULTATION

---

# 2. TECH STACK

## Frontend

Use:

- Next.js
- TypeScript
- React
- App Router
- Tailwind CSS
- Next.js Image
- Vercel deployment

The frontend is the only thing being built in this phase.

## Backend

NestJS is planned for a future phase.

DO NOT build the NestJS backend now.

DO NOT build a database now.

DO NOT build authentication now.

DO NOT build payment processing now.

DO NOT build order management now.

DO NOT build an admin dashboard now.

DO NOT build backend API routes unless absolutely required by the frontend framework.

The frontend should simply be architected so that NestJS can be connected later without rewriting the UI.

---

# 3. FUTURE ARCHITECTURE

Future architecture:

Next.js Frontend
        |
        | REST API
        v
NestJS Backend
        |
        v
Database / Services

For this phase:

Next.js Frontend
+
local TypeScript data
+
frontend interactions
+
Vercel-ready deployment

Future API endpoints may eventually include:

/api/products
/api/products/:slug
/api/articles
/api/articles/:slug
/api/contact
/api/consultation

Do not implement those APIs now.

---

# 4. PROJECT STRUCTURE

Use the Next.js App Router.

Recommended:

app/
├── page.tsx
├── about/
│   └── page.tsx
├── products/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
├── insights/
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
├── contact/
│   └── page.tsx
├── layout.tsx
└── not-found.tsx

components/
├── layout/
├── navigation/
├── hero/
├── products/
├── insights/
├── contact/
├── footer/
└── ui/

data/
├── products.ts
├── articles.ts
├── navigation.ts
└── site.ts

lib/
└── api/

public/
└── assets/

---

# 5. DATA ARCHITECTURE

Since NestJS does not exist yet, keep current content in local TypeScript data.

Products, articles, navigation, contact details, WhatsApp number and site configuration should be data-driven.

Create types/interfaces such as:

Product
ProductBenefit
Article
NavigationItem
SiteConfig
ContactInformation

Avoid hardcoding repeated content directly into JSX.

The presentation components should receive data through props.

For example:

<ProductCard product={product} />

<InsightCard article={article} />

Later, local data can be replaced by NestJS API calls without rebuilding the presentation layer.

---

# 6. BRAND COLORS

Primary Forest Green:

#123B22

Deep Forest:

#0D351C

Botanical Green:

#4F8F32

Light Botanical Green:

#8FBE52

Earthy Wood Brown:

#8A4F25

Warm Brown:

#B87842

Cream:

#F7F5EE

Warm White:

#FCFBF7

Dark Text:

#16251A

Muted Text:

#687067

Subtle Border:

rgba(30,60,35,0.12)

Use forest green as the primary brand color.

Use earthy brown as an accent inspired by the wooden Ayurvedic mortar and pestle.

Do not overuse green backgrounds.

---

# 7. TYPOGRAPHY

Large headings:

Use an elegant serif.

Preferred:

Cormorant Garamond
or
Playfair Display
or
DM Serif Display

UI/body:

Inter
or
Manrope
or
DM Sans

Headings should feel editorial, sophisticated and heritage-inspired.

Buttons, navigation, metadata and descriptions should remain clean and modern.

Small eyebrow labels should use uppercase text with generous letter spacing.

---

# 8. ASSET RULE — CRITICAL

The supplied assets are part of the approved design.

DO NOT replace them with:

- Unsplash
- Pexels
- Lorem Picsum
- random stock photos
- external image URLs
- generated placeholders
- different AI images

Use the supplied assets exactly.

Expected asset structure:

public/assets/
├── harithayur-logo.png
├── hero-ayurvedic-mortar.webp
├── product-ashwagandha.webp
├── product-neem-turmeric.webp
├── product-brahmi.webp
├── blog-dosha.webp
├── blog-hela-wedakama.webp
└── botanical-leaves-bg.webp

The original Harithayur logo supplied by the client must be used exactly.

Do not redraw or recreate the logo.

The hero/product/blog assets correspond to the visual imagery in the supplied reference.

---

# 9. IMAGE IMPLEMENTATION

Use Next.js Image where appropriate.

Hero image:

- large
- editorial
- above the fold
- priority loading

Hero:

object-fit: cover

Product imagery:

Use object-fit: contain or cover depending on the supplied asset composition.

Do not crop important product packaging.

Blog imagery:

object-fit: cover

Below-the-fold images should be lazy-loaded appropriately.

---

# 10. GLOBAL NAVIGATION

Create a premium floating navigation.

Left:

Harithayur logo.

Center:

Home
About Us
Products
Ayurvedic Insights
Our Heritage
Contact

Right:

Search icon
WhatsApp icon
Consult on WhatsApp

The navbar should have:

- cream/white background
- subtle translucency/glass effect
- thin border
- soft shadow
- rounded corners
- generous horizontal spacing

Do not make it excessively tall.

Mobile:

Logo on left.

Hamburger on right.

Use a polished mobile navigation drawer/menu.

---

# 11. PAGE 1 — HOME

The home page is the primary visual showcase.

Structure:

Navigation
Hero
Trust / Benefits
Premium Product Collective
Ayurvedic Insights
Footer

---

## 11.1 HERO

Eyebrow:

NATURE'S HEALING TOUCH

Headline:

Ancient Wisdom
for Modern
Wellness

Use botanical green emphasis on:

Modern Wellness

Supporting copy:

Personalized Ayurvedic care, crafted by nature and rooted in centuries of healing traditions.

Primary CTA:

Explore Remedies

Secondary CTA:

Our Philosophy

Hero image:

hero-ayurvedic-mortar.webp

Use the supplied image exactly.

Place it prominently on the right side.

Use an organic curved/soft transition between the text and image rather than a harsh rectangular split.

Add a subtle floating card:

25+

Years of Ayurvedic Trust

Below the hero content, add trust indicators:

Rooted in Ayurveda
100% Natural Ingredients
Clinically Researched
Personalized for You

Use minimalist green line icons.

---

# 12. HOME — BENEFITS STRIP

Create a refined horizontal benefits section.

Four items:

## Holistic Healing

Treating the root cause, not just the symptoms.

## Personalized Care

Every individual is unique, so is our approach.

## Sustainable Wellness

Balanced living for a healthier body, mind & soul.

## Trusted by Thousands

Join our community of health-conscious individuals.

Use circular icon containers.

Keep the section subtle.

---

# 13. HOME — PREMIUM PRODUCT COLLECTIVE

Eyebrow:

OUR PREMIUM REMEDIES

Heading:

Curated for Your Wellness Journey

Supporting copy:

Thoughtfully crafted formulations using the finest natural ingredients.

Display exactly three products.

Desktop:

3 columns.

Tablet:

2 columns.

Mobile:

1 column.

---

## PRODUCT 1

Name:

Harithayur Ashwagandha Elixir

Image:

product-ashwagandha.webp

Category:

Adaptogen

Description:

A potent, natural adaptogen formulated to relieve daily stress, enhance sleep quality, and restore natural vitality.

Benefits:

- Reduces Stress & Anxiety
- Improves Sleep Quality
- Boosts Energy & Vitality

---

## PRODUCT 2

Name:

Neem & Turmeric Cleansing Balm

Image:

product-neem-turmeric.webp

Category:

Skin Care

Description:

Pure skin purification. This traditional blend clears blemishes and promotes a radiant, healthy complexion.

Benefits:

- Purifies & Detoxifies Skin
- Fights Acne & Blemishes
- Promotes Natural Glow

---

## PRODUCT 3

Name:

Brahmi Mind-Focus Drops

Image:

product-brahmi.webp

Category:

Mind & Focus

Description:

Designed to enhance mental clarity, focus, and memory retention using ethically sourced botanical extracts.

Benefits:

- Enhances Focus & Clarity
- Supports Memory Retention
- Supports Cognitive Wellness

---

# 14. PRODUCT CTA RULE — CRITICAL

This is NOT a conventional ecommerce checkout experience.

Do NOT use:

- Add to Cart
- Buy Now
- Purchase
- Checkout

Every product must instead have:

CONSULT & GET A QUOTE

with a WhatsApp icon.

The website is consultation-first.

Product cards should prioritize:

- story
- ingredients
- benefits
- trust
- consultation

rather than price.

---

# 15. PRODUCT CARD DESIGN

Cards should use:

- cream/white backgrounds
- 18–24px radius
- subtle borders
- soft shadows
- generous whitespace
- rounded image containers
- premium typography

Hover:

- translateY(-4px)
- slight image scale
- slightly stronger shadow
- subtle CTA emphasis

Animations should be approximately 200–400ms.

---

# 16. HOME — AYURVEDIC INSIGHTS

Eyebrow:

AYURVEDIC INSIGHTS

Heading:

Knowledge for a Healthier You

Create two editorial article cards.

---

## ARTICLE 1

Image:

blog-dosha.webp

Title:

Understanding Your Dosha:
A Guide to Vata, Pitta, and Kapha.

Excerpt:

Discover how your unique dosha can influence health, energy, digestion and overall balance.

CTA:

Read Article →

Category:

AYURVEDIC LIVING

---

## ARTICLE 2

Image:

blog-hela-wedakama.webp

Title:

The Healing Power of Traditional Hela Wedakama in the Monsoon Season.

Excerpt:

Explore time-honored Sri Lankan healing practices that support immunity, digestion and overall wellness during the rainy season.

CTA:

Read Article →

Category:

HERBAL WISDOM

---

# 17. BLOG CARD DESIGN

Use:

- large rounded images
- editorial composition
- subtle image hover zoom
- small uppercase category
- serif title
- concise excerpt
- minimalist Read Article → link

Do not make this look like a generic WordPress blog.

---

# 18. GLOBAL FOOTER

Use deep forest green:

#0D351C

Include:

## Brand

Harithayur

Ancient wisdom. Pure ingredients. Personalized wellness.

Social icons.

## Quick Links

Home
About Us
Products
Ayurvedic Insights
Contact

## Company

Our Heritage
Certifications & Quality
Sustainability
Privacy Policy
Terms of Service

## Consultation

Talk to Our Ayurvedic Experts

WhatsApp:

+94 77 123 4567

CTA:

Chat on WhatsApp

Use subtle botanical decoration.

---

# 19. PAGE 2 — ABOUT US

Create a dedicated About Us page.

Hero:

About Harithayur

Healing the world, the natural way.

Use large editorial typography.

Include Ayurvedic botanical imagery.

Sections:

## Our Story

Harithayur is dedicated to reviving ancient Ayurvedic knowledge through carefully crafted natural wellness solutions.

## Our Heritage

Focus on traditional Ayurvedic knowledge and Sri Lankan heritage.

## Our Vision

To be a trusted leader in natural healthcare through authentic Ayurvedic experience.

## Our Mission

To provide natural, safe and effective wellness solutions rooted in authentic Ayurvedic knowledge.

## Our Values

Integrity
Sustainability
Authenticity
Care
Well-being

## Our Promise

Honest products.
Transparent practices.
Better lives naturally.

Include:

25+ Years of Experience

100% Natural Ayurvedic Approach

Sustainable Practices

Authentic Ayurvedic Wisdom

Use a dark-green values band.

---

# 20. PAGE 3 — PRODUCTS

Dedicated premium catalog.

Heading:

Our Remedies

Subheading:

Pure. Natural. Effective.

Display all three products.

Each card contains:

- product image
- category
- name
- description
- benefits
- consultation CTA

No traditional cart experience.

No checkout.

No price-first layout.

Make this feel like a consultation catalog.

---

# 21. PAGE 4 — PRODUCT DETAIL

Create a reusable product-detail template.

Routes:

/products/ashwagandha-elixir

/products/neem-turmeric-balm

/products/brahmi-mind-focus-drops

Desktop:

Large image left.

Information right.

Include:

- category
- product name
- description
- key benefits
- ingredients
- how to use
- Ayurvedic philosophy
- consultation CTA

Primary CTA:

Consult & Get a Quote

No Buy Now.

No Add to Cart.

Use the same component structure for all products.

---

# 22. PAGE 5 — AYURVEDIC INSIGHTS

Create an editorial insights page.

Heading:

Ayurvedic Insights

Subheading:

Ancient knowledge for modern wellness.

Feature:

Understanding Your Dosha:
A Guide to Vata, Pitta, and Kapha.

Use:

blog-dosha.webp

Second:

The Healing Power of Traditional Hela Wedakama in the Monsoon Season.

Use:

blog-hela-wedakama.webp

Use:

- large editorial images
- serif headlines
- category labels
- article metadata
- Read Article → links

---

# 23. PAGE 6 — CONTACT

Heading:

Let's Begin Your Wellness Journey.

Supporting copy:

Have a question, need guidance, or want to understand which Ayurvedic remedy is right for you?

Contact information:

WhatsApp
+94 77 123 4567

Email:

info@harithayur.com

Business hours:

Mon–Sat
8:00 AM – 6:00 PM

Form:

Name
Email
Phone
Subject
Message

CTA:

Send Message

Also create:

Consult Our Ayurvedic Experts

+94 77 123 4567

Chat on WhatsApp

---

# 24. WHATSAPP

Create one reusable:

<WhatsAppButton />

component.

Number:

+94 77 123 4567

Use a prefilled message such as:

Hello Harithayur, I would like to consult about your Ayurvedic remedies.

Do not duplicate WhatsApp URL logic throughout the application.

Keep configuration in:

data/site.ts

or another central configuration file.

---

# 25. FORMS

The contact/consultation form is frontend-only for this phase.

Do not implement backend submission.

Prepare the form structure for future NestJS integration.

Use client-side validation where appropriate.

Do not create a fake backend.

---

# 26. COMPONENT ARCHITECTURE

Prefer reusable components.

Examples:

Navbar
Hero
TrustBar
SectionHeading
ProductCard
ProductGrid
ProductDetail
InsightCard
InsightsGrid
WhatsAppButton
ConsultationForm
Footer

Use data-driven rendering.

Products:

products.map(...)

Articles:

articles.map(...)

Do not duplicate large JSX blocks.

---

# 27. CLIENT VS SERVER COMPONENTS

Prefer React Server Components by default.

Only use:

"use client"

when client-side interaction is actually necessary.

Examples:

- mobile navigation
- interactive menu
- consultation form
- client-side filters if later added

Do not make the entire website a client component.

---

# 28. RESPONSIVE DESIGN

Desktop target:

1440px.

Tablet:

768–1024px.

Mobile:

360–430px.

Do not simply shrink the desktop design.

Mobile should be intentionally designed.

Hero:

vertical layout.

Products:

single column.

Insights:

single column.

Navbar:

mobile menu.

Typography:

responsive scaling.

Maintain generous whitespace on mobile.

---

# 29. MICRO-INTERACTIONS

Use subtle animations.

Navbar:

color/underline transition.

Buttons:

translateY(-1px to -2px).

Product cards:

translateY(-4px).

Images:

scale(1.03).

Blog cards:

subtle image zoom.

WhatsApp:

slight shadow/brightness increase.

Animation duration:

200–400ms.

Do not over-animate.

The website should feel calm.

---

# 30. ACCESSIBILITY

Use semantic HTML.

Use meaningful heading hierarchy.

Use accessible labels.

Use meaningful alt text.

Ensure keyboard navigation.

Ensure sufficient contrast.

Use proper button/link elements.

Do not use clickable divs when a button/link is appropriate.

---

# 31. SEO

Use Next.js metadata.

Every page should have:

- title
- description
- Open Graph metadata

Suggested:

Home:

Harithayur | Ancient Wisdom for Modern Wellness

Products:

Harithayur Ayurvedic Remedies | Pure. Natural. Effective.

Insights:

Harithayur Ayurvedic Insights

About:

About Harithayur | Rooted in Ayurvedic Tradition

Contact:

Contact Harithayur | Ayurvedic Consultation

---

# 32. VERCEL

The project must be deployable directly to Vercel.

Avoid:

- custom persistent servers
- Express servers inside Next.js
- unnecessary Docker requirements
- filesystem-dependent runtime behavior
- infrastructure that requires a persistent Node process

The project should work from a GitHub repository connected to Vercel.

Use environment variable:

NEXT_PUBLIC_API_URL

The app must still work when this variable is not defined.

---

# 33. PERFORMANCE

Prioritize:

- fast initial render
- optimized images
- minimal JavaScript
- Server Components
- lazy loading below-the-fold imagery
- responsive images
- minimal dependencies

Do not install unnecessary libraries.

---

# 34. DEVELOPMENT PHASES

Build in this order.

## PHASE 1 — FOUNDATION

Set up:

Next.js
TypeScript
Tailwind
App Router
Fonts
Brand colors
Global CSS
Asset system
Global layout

## PHASE 2 — MAIN HOME UI

Build:

Navbar
Hero
Benefits
Product section
Insights
Footer

Match the supplied visual reference closely.

## PHASE 3 — OTHER PAGES

Build:

About
Products
Product Detail
Insights
Contact

Reuse the same components and design system.

## PHASE 4 — POLISH

Add:

Responsive behavior
Micro-interactions
Accessibility
SEO
Image optimization
Loading states
Empty states where necessary

## PHASE 5 — PRODUCTION

Verify:

npm run build

No TypeScript errors.

No broken images.

No console errors.

No layout overflow.

No missing routes.

Vercel-ready deployment.

---

# 35. VISUAL QUALITY BAR

The finished website should look like a premium custom wellness website, not a generated template.

Prioritize:

1. Reference screenshot composition
2. Exact supplied imagery
3. Typography
4. Spacing
5. Color
6. Product presentation
7. Micro-interactions

The supplied UI reference is the visual source of truth.

When implementation decisions conflict with generic design conventions, follow the supplied visual direction.

---

# 36. DO NOT DEVIATE

Do not:

- redesign the brand
- change the product names
- replace the images
- introduce random stock photography
- add ecommerce checkout
- add Add to Cart
- add Buy Now
- add unnecessary dashboards
- build NestJS
- build a database
- build authentication
- over-engineer the backend
- use excessive gradients
- use excessive glassmorphism
- use excessive animations
- make the website look like a generic Shopify store

The first goal is a beautiful, premium frontend.

The second goal is clean architecture for future NestJS integration.

The third goal is easy deployment to Vercel.

---

# 37. FINAL INSTRUCTION TO CLAUDE

Before writing implementation code:

1. Inspect the supplied reference screenshot.
2. Inspect every supplied asset.
3. Understand the visual relationships between the assets and UI.
4. Establish the global design system.
5. Create the reusable component architecture.
6. Then implement the pages.

Do not immediately start generating arbitrary components.

The supplied reference screenshot, original Harithayur logo and supplied image assets are the source of truth.

Build the frontend to closely reproduce that premium Harithayur visual language while making the implementation clean, responsive, accessible, maintainable and ready for future NestJS integration.
