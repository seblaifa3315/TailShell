# TailShell Website - Claude Project Context

## Project Overview

**Project Name:** TailShell Product Website  
**Purpose:** B2B marketing website to advertise TailShell portable waterproof seat covers to vendors  
**Tech Stack:** Next.js 14+ (App Router) + Tailwind CSS + shadcn/ui  
**Deployment:** Vercel  
**Design Philosophy:** Apple-inspired minimalism with generous white space, large imagery, smooth animations, and storytelling  

---

## Product Description

**TailShell** is a pocket-sized, waterproof sanitation seat cover designed for:
- Rugged outdoor environments
- Sport stadium seating
- Hot golf cart seats
- Airport waiting areas
- Any place where you want to protect clothing or skin while sitting

**Target Vendors:**
- Outdoor retailers
- Sporting goods stores
- Airport/stadium concessionaires
- Golf pro shops
- Convenience stores

**Current Status:** New product with no competitors on the market. No pricing displayed on website (vendor inquiry only).

---

## Core Requirements

### Site Structure
- **Single long-scrolling page** (all content on homepage)
- Smooth scroll navigation between sections
- Fully responsive (mobile and desktop)

### Navigation
- Sticky/fixed nav at top
- **Initial state:** Transparent with white text (over hero video)
- **Scrolled state:** Solid white background with dark text + subtle shadow
- Menu items: Logo, Use Cases, Product, Why TailShell, Contact
- Mobile: Hamburger menu

### Page Sections (in order)
1. **Hero** - Video background with headline/CTA
2. **Use Cases** - Grid layout showing 5 scenarios
3. **Product Details** - Specifications and features
4. **Why Vendors** - 6 benefits for carrying TailShell
5. **Testimonials** - 3 fake testimonials
6. **Contact** - Vendor inquiry form
7. **Footer** - Links and social icons (no hrefs yet)

---

## Design System

### Color Palette

**Brand Colors:**
- Background: `#FFFFFF` (white)
- Foreground: `#1D1D1F` (almost black, Apple-style)
- Muted: `#F5F5F7` (light gray backgrounds)
- Border: `#D2D2D7` (subtle borders)

**Use Case Accent Colors:**
- Outdoor/Hiking: `#2D5016` (Forest Green)
- Stadium/Sports: `#0066CC` (Vibrant Blue)
- Golf: `#4A7C59` (Golf Green)
- Airport: `#5E6AD2` (Modern Indigo)
- General/Versatile: `#6B7280` (Neutral Gray)

**Semantic Colors:**
- Success: `#34C759`
- Error: `#FF3B30`

### Typography

**Font Stack:**
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
```

**Type Scale:**
- Hero Headline: 72px / 4.5rem (mobile: 48px / 3rem)
- Section Headers: 48px / 3rem (mobile: 32px / 2rem)
- Subsection Headers: 32px / 2rem (mobile: 24px / 1.5rem)
- Body Large: 21px / 1.3125rem
- Body: 17px / 1.0625rem
- Small: 14px / 0.875rem

**Font Weights:**
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

### Spacing
- Section Padding (Desktop): 120px vertical
- Section Padding (Mobile): 80px vertical
- Content Max Width: 1200px

### Animations

**Philosophy:** Subtle, Apple-style animations. Focus on smooth, purposeful motion.

**Types:**
1. **Scroll-triggered fade-ins** - Elements fade/slide in as user scrolls
2. **Parallax effects** - Subtle movement on hero images
3. **Micro-interactions** - Hover effects, button animations

**Performance:**
- Use `transform` and `opacity` only (GPU accelerated)
- Implement `IntersectionObserver` for scroll triggers
- Target 60fps

**Example Framer Motion Config:**
```javascript
{
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, margin: "-100px" }
}
```

---

## Section Details

### 1. Hero Section

**Layout:** Full viewport height, video background, centered text overlay

**Content:**
- **Headline:** "Protect. Perform. Anywhere."
- **Subheadline:** "TailShell is the pocket-sized, waterproof seat cover revolutionizing comfort and hygiene for outdoor adventures, sports venues, golf courses, and beyond."
- **CTA Buttons:**
  - Primary: "Become a Vendor" (scroll to contact)
  - Secondary: "Watch Demo" (opens video modal)

**Video:**
- Autoplay, muted, loop, playsInline
- 15-30 second loop
- Shows product in multiple use cases (quick cuts)
- Dark gradient overlay for text readability
- Fallback poster image

---

### 2. Use Cases Section

**Section Header:**
- Headline: "One Solution, Endless Applications"
- Subheadline: "TailShell adapts to any environment where seating meets uncertainty."

**Layout:** Grid showing all 5 scenarios at once (2 columns desktop, 1 column mobile)

**Use Cases:**

1. **Outdoor Adventures**
   - Color: Forest Green `#2D5016`
   - Headline: "Rugged Protection for Nature Lovers"
   - Description: "From hiking trails to camping sites, TailShell keeps you clean and dry on any surface. Waterproof, compact, and built to withstand the elements."
   - Image: Person sitting on rock/log in forest using TailShell
   - Icon: Mountain/tree

2. **Sports Stadiums**
   - Color: Vibrant Blue `#0066CC`
   - Headline: "Game Day Comfort, Every Seat"
   - Description: "Protect fans from dirty, wet, or uncomfortable stadium seating. TailShell enhances the game-day experience while keeping clothing spotless."
   - Image: Fans at stadium using TailShell on bleachers
   - Icon: Stadium/sports

3. **Golf Courses**
   - Color: Golf Green `#4A7C59`
   - Headline: "Tee Time Without Compromise"
   - Description: "Shield golfers from scorching cart seats and damp benches. TailShell adds a touch of class and comfort to every round."
   - Image: Golfer on golf cart using TailShell
   - Icon: Golf flag

4. **Airports & Travel**
   - Color: Modern Indigo `#5E6AD2`
   - Headline: "Travel Clean, Arrive Fresh"
   - Description: "Long layovers made bearable. TailShell provides a hygienic barrier in waiting areas, on shuttle seats, and during transit."
   - Image: Traveler in airport lounge using TailShell
   - Icon: Airplane

5. **Everyday Versatility**
   - Color: Neutral Gray `#6B7280`
   - Headline: "Your Daily Defense"
   - Description: "Parks, public benches, events, food trucks—TailShell goes wherever life takes you. The ultimate portable protection."
   - Image: Person at outdoor cafe/park using TailShell
   - Icon: Shield/checkmark

**Interaction:**
- Cards scale slightly on hover (1.03)
- Accent color border appears on hover
- Smooth fade-in as user scrolls

---

### 3. Product Details Section

**Section Header:**
- Headline: "Engineered for Real Life"
- Subheadline: "Every detail designed for maximum protection and portability."

**Layout:** Split screen (50/50 desktop) - Images left, specs right

**Product Images:**
- Folded state (pocket-sized)
- Unfolded state (showing size)
- Material close-up (waterproof texture)
- In-use lifestyle shot
- Comparison with common item (phone/wallet for scale)

**Specifications:**

1. **Material**
   - "Premium waterproof fabric with reinforced stitching"
   - "Durable, tear-resistant, easy to clean"

2. **Dimensions**
   - Folded: 4" x 5" x 0.5" (fits in pocket/purse)
   - Unfolded: 18" x 20" (full seat coverage)

3. **Weight**
   - "Ultra-lightweight: Only 3 oz"
   - "Forget it's there until you need it"

4. **Waterproof Rating**
   - "100% waterproof barrier"
   - "Keeps moisture out, comfort in"

5. **Durability**
   - "Built for 500+ uses"
   - "Machine washable for easy maintenance"

6. **Portability**
   - "Compact folding design"
   - "Includes integrated carry strap/pouch"

7. **Temperature Resistance**
   - "Protects from hot surfaces (golf carts, metal bleachers)"
   - "Insulates from cold concrete and stone"

8. **Eco-Friendly**
   - "Reusable, reduces disposable waste"
   - "Made from sustainable materials"

---

### 4. Why Vendors Section

**Section Header:**
- Headline: "Partner with Innovation"
- Subheadline: "TailShell isn't just a product—it's a profit opportunity."

**Layout:** 3-column grid (desktop) / 1-column (mobile)

**Vendor Benefits:**

1. **High Profit Margins**
   - Icon: Dollar sign / graph trending up
   - Headline: "Maximize Your Returns"
   - Description: "TailShell's premium positioning and low cost of goods sold means healthy margins for your business. A product that sells itself with minimal overhead."

2. **Solves Real Customer Problems**
   - Icon: Lightbulb / solution
   - Headline: "Answer Unmet Demand"
   - Description: "Your customers are already looking for this solution. Be the first to offer TailShell and capture a market hungry for portable seat protection."

3. **Low Inventory Risk**
   - Icon: Box / warehouse
   - Headline: "Compact & Easy to Stock"
   - Description: "Small footprint, no expiration, no special storage. TailShell fits seamlessly into any retail environment without tying up valuable shelf space."

4. **Broad Appeal**
   - Icon: Target / people
   - Headline: "Cross-Demographic Bestseller"
   - Description: "From outdoor enthusiasts to commuters to parents, TailShell appeals to diverse customer segments, driving consistent sales year-round."

5. **Point-of-Purchase Winner**
   - Icon: Shopping bag / checkout
   - Headline: "Impulse Buy Magnet"
   - Description: "Perfectly priced and positioned for impulse purchases. Place TailShell near checkouts, gear sections, or high-traffic areas and watch it move."

6. **Marketing Support**
   - Icon: Megaphone / marketing
   - Headline: "We Help You Sell"
   - Description: "Receive promotional materials, display stands, and co-marketing support to drive awareness and conversions in your store."

---

### 5. Testimonials Section

**Section Header:**
- Headline: "Trusted by Vendors, Loved by Customers"
- Subheadline: "See what partners are saying about TailShell."

**Layout:** 3 cards in a row (desktop) / carousel (mobile)

**Testimonials:**

1. **Customer Satisfaction Focus**
   - Quote: "Our customers rave about TailShell. Since adding it to our outdoor gear section, we've seen repeat purchases and glowing reviews. It's become a must-have item for hikers and campers."
   - Name: Sarah Mitchell
   - Title: Owner
   - Company: Summit Outdoor Outfitters
   - Photo: Professional woman in outdoor retail setting
   - Accent Color: Forest Green

2. **Profit Margins Focus**
   - Quote: "TailShell has been a surprisingly strong performer for us. The margins are excellent, and it practically sells itself at the register. It's rare to find a product that's both profitable and solves a real problem."
   - Name: Marcus Chen
   - Title: Retail Manager
   - Company: ProSport Goods
   - Photo: Professional man in sporting goods store
   - Accent Color: Vibrant Blue

3. **Solving Complaints Focus**
   - Quote: "We used to get complaints about dirty seats and hot surfaces at our facility. Since partnering with TailShell and offering them at our pro shop, those complaints have vanished. It's a game-changer for customer experience."
   - Name: Jennifer Rodriguez
   - Title: Operations Director
   - Company: Greenview Golf & Country Club
   - Photo: Professional woman in golf setting
   - Accent Color: Golf Green

**Visual Treatment:**
- Large quotation marks design element
- Avatar/photo in circular frame
- Accent color border on bottom matching testimonial focus

---

### 6. Contact Section

**Section Header:**
- Headline: "Ready to Stock TailShell?"
- Subheadline: "Join our growing network of vendors and bring innovation to your customers. Fill out the form below and we'll be in touch within 24 hours."

**Layout:** Split screen (desktop) - Text left, form right

**Form Fields:**

1. **Full Name** (required)
   - Placeholder: "John Smith"
   - Validation: Min 2 characters

2. **Email Address** (required)
   - Placeholder: "john@yourstore.com"
   - Validation: Valid email format

3. **Phone Number** (required)
   - Placeholder: "(555) 123-4567"
   - Validation: Phone number format

4. **Company Name** (required)
   - Placeholder: "Your Store Name"
   - Validation: Min 2 characters

5. **Business Type** (optional)
   - Dropdown options:
     - Outdoor Retailer
     - Sporting Goods Store
     - Golf Pro Shop
     - Stadium/Arena Concessionaire
     - Convenience Store
     - Other

6. **Message** (optional)
   - Placeholder: "Tell us about your business and interest in TailShell..."
   - Max 500 characters

**Submit Button:**
- Text: "Submit Inquiry"
- States: Default, Loading, Success, Error

**Form Handling:**
- Frontend validation only (React Hook Form + Zod)
- Console.log data (ready for backend integration later)
- Show success/error messages

**Additional:**
- Alternative contact: "Or email us directly at: vendors@tailshell.com"
- Privacy note: "We respect your privacy. Your information will never be shared."

---

### 7. Footer

**Layout:** 3 columns (desktop) / stacked (mobile)  
**Background:** Dark `#1D1D1F`, light text

**Column 1: Brand**
- Logo (white version, placeholder)
- Tagline: "Portable Protection, Anywhere."
- Copyright: "© 2024 TailShell. All rights reserved."

**Column 2: Quick Links**
- Use Cases (smooth scroll)
- Product Details (smooth scroll)
- Why TailShell (smooth scroll)
- Contact (smooth scroll)

**Column 3: Connect**
- Social media icons (no href for now):
  - Instagram
  - Facebook
  - LinkedIn
  - Twitter/X
- Email: vendors@tailshell.com

---

## Technical Implementation

### Tech Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS 3.4+
- **Components:** shadcn/ui
- **Animations:** Framer Motion
- **Form:** React Hook Form + Zod validation
- **Language:** TypeScript (recommended)

### shadcn/ui Components Needed
```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add form
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add label
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add select
```

### Key Dependencies
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "framer-motion": "^10.16.0",
    "react-hook-form": "^7.48.0",
    "zod": "^3.22.0",
    "react-intersection-observer": "^9.5.0"
  }
}
```

### Project Structure
```
app/
  layout.tsx           # Root layout
  page.tsx            # Main homepage
  globals.css         # Global styles
components/
  sections/
    Hero.tsx
    UseCases.tsx
    ProductDetails.tsx
    WhyVendors.tsx
    Testimonials.tsx
    Contact.tsx
  ui/                 # shadcn components
  Navigation.tsx
  Footer.tsx
  VideoPlayer.tsx
  ScrollAnimationWrapper.tsx
lib/
  utils.ts
  constants.ts
  validations.ts
public/
  images/
  videos/
```

### Form Validation (Zod Schema)
```typescript
const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[\d\s\-\(\)]+$/, 'Invalid phone number'),
  companyName: z.string().min(2, 'Company name required'),
  businessType: z.string().optional(),
  message: z.string().max(500).optional(),
})
```

---

## Content Assets Needed

### Images (Use Stock Photos for Now)
- **Hero:** Video poster image
- **Use Cases (5x):** Lifestyle photos for each scenario
- **Product (5-6x):** Folded, unfolded, close-up, scale comparison
- **Testimonials (3x):** Professional headshots
- **Icons (15-20x):** Use case icons, feature icons, benefit icons
- **Logo:** Placeholder SVG

### Videos
- **Hero Background:** 15-30s loop, MP4, autoplay muted
- **Demo Video:** 60-90s, modal player with controls

### Stock Photo Keywords
- "Outdoor hiking sitting"
- "Stadium seating crowd"
- "Golf cart golfer"
- "Airport waiting lounge"
- "Park bench sitting"
- "Professional business portrait"

---

## Accessibility

**Basic Level (Required):**
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text on all images
- Keyboard navigation (tab through interactive elements)
- Focus states on buttons/links
- Min 44px touch targets on mobile

---

## Browser Support

**Modern browsers only:**
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

---

## Performance Targets

- Lighthouse Score: 90+ all categories
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

**Optimization:**
- Use Next.js Image component (automatic optimization)
- Lazy load below-fold content
- Compress videos (< 5MB)
- Use system fonts (performance)

---

## Deployment

**Platform:** Vercel
- Automatic deployments on git push
- Connected to GitHub repository
- Custom domain setup (future)

---

## Brand Voice & Messaging

**Voice:**
- Confident but not boastful
- Solution-oriented
- Professional yet approachable
- Action-driven

**Key Messages:**
1. TailShell solves a universal problem
2. First-to-market innovation
3. High profit potential for vendors
4. Diverse customer appeal
5. Easy to stock and sell

**Tone:**
- Active voice
- Concise sentences
- Benefit-focused
- No jargon

---

## Important Notes

### What Claude Should Know:
- Product name is **"TailShell"** (capital T and S)
- This is a **B2B site** (targeting vendors, not end consumers)
- **No pricing** on the website (vendor inquiry only)
- **Single page design** with smooth scrolling
- **Apple-inspired** aesthetic is critical
- **Fake testimonials** are intentionally fake (for demonstration)
- **Stock photos** are placeholders (custom photography planned later)
- **No backend yet** - form just logs to console
- **No analytics** for now
- Social media icons have **no hrefs** yet (just visual)

### Design Priorities:
1. Generous white space
2. Large, impactful imagery
3. Smooth, subtle animations
4. Clean typography
5. Storytelling flow

### Development Approach:
- Mobile-first responsive design
- Component-based architecture
- Reusable animation wrappers
- Performance over features
- Accessibility basics

---

## Quick Reference

### Color Variables (Tailwind Config)
```javascript
colors: {
  brand: {
    background: '#FFFFFF',
    foreground: '#1D1D1F',
    muted: '#F5F5F7',
    border: '#D2D2D7',
  },
  accent: {
    outdoor: '#2D5016',
    stadium: '#0066CC',
    golf: '#4A7C59',
    airport: '#5E6AD2',
    versatile: '#6B7280',
  },
  semantic: {
    success: '#34C759',
    error: '#FF3B30',
  }
}
```

### Breakpoints
```javascript
sm: '640px',   // Mobile landscape
md: '768px',   // Tablet
lg: '1024px',  // Desktop
xl: '1280px',  // Large desktop
2xl: '1536px'  // XL desktop
```

### Common Animation
```javascript
fadeInUp: {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, margin: "-100px" }
}
```

---

## When Building This Project, Remember:

✅ Start with project setup and dependencies  
✅ Build components section-by-section (Hero → Use Cases → Product → Vendors → Testimonials → Contact)  
✅ Use Apple's design principles (white space, typography, smooth animations)  
✅ Implement scroll-triggered animations with Framer Motion  
✅ Use shadcn/ui for form components  
✅ Add responsive design (mobile-first)  
✅ Include basic accessibility (semantic HTML, alt tags, keyboard nav)  
✅ Optimize images with Next.js Image component  
✅ Use stock photos/placeholder content initially  
✅ Deploy to Vercel when ready  

❌ Don't add backend integration yet  
❌ Don't add analytics  
❌ Don't add pricing  
❌ Don't link social media icons  
❌ Don't overcomplicate - keep it clean and minimal  

---

**This document is the source of truth for building the TailShell website. Reference it throughout development to ensure consistency with project requirements.**