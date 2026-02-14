# Hardline Hauling - Static Marketing Website (Aesthetic Only)

Build a **professional, modern, mobile-first** website for a small owner-operated junk hauling company.
**No backend and no real form submissions.** The site is purely aesthetic with call/text CTAs.

## Business Details (use exactly)
- Business name: **Hardline Hauling**
- Tagline: **Junk Removal**
- Phone (primary CTA): **720-445-0103**
- Service area: **Serving Solano County & more**
- Services list:
  - Junk Removal
  - Furniture / Appliance Removal
  - Light Demo
  - Delivery / Pickup

## Provided Photos (local assets)
Use these files from `photos hardline hauling/` and copy them into `public/images/`:
- `photos hardline hauling/AC7C7A54-F087-4781-9ADD-510FF7993736.png` (logo badge on black background)
- `photos hardline hauling/IMG_9130.jpg` (banner-style graphic with services + phone)
- `photos hardline hauling/IMG_8796.jpg` (loaded trailer close-up)
- `photos hardline hauling/IMG_8795.jpg` (loaded trailer wider)
- `photos hardline hauling/IMG_8624.jpg` (night gas station shot with trailer)
- `photos hardline hauling/IMG_8464.jpg` (driveway shot loaded)
- `photos hardline hauling/IMG_8463.jpg` (rear shot loaded)

Use optimized images for performance (`next/image` optimization and appropriate sizing).
Brand vibe: **black + orange + white**, bold, tough, clean.

---

## Tech Stack / Constraints
- **Next.js (App Router)** + **TypeScript** + **Tailwind CSS**
- Use **next/image** for all image rendering
- No external data fetching
- No backend APIs required
- Fast, accessible, and mobile-first
- Subtle animations only (hover/fade), no heavy effects

---

## Pages
Create these routes:
1. `/` (Home / Landing)
2. `/services`
3. `/gallery`
4. `/contact`

Site-wide:
- Sticky header with mobile menu
- Footer with phone, service area, quick links
- SEO metadata per page

---

## Brand / Visual Style
Theme: dark, industrial feel with lightweight implementation.

Colors:
- Background: `#0b0b0f` (`zinc-950`)
- Surface cards: `zinc-900` / `zinc-800`
- Accent: `#f97316` (`orange-500`) + deeper orange for gradients
- Text: `zinc-100`, muted `zinc-400`

Typography:
- Bold display font for headings via `next/font` (for example: Oswald, Anton, Inter Tight)
- Clean readable body font (for example: Inter)

Components:
- Strong contrast, clean spacing, soft shadows
- Primary button: orange filled
- Secondary button: outlined
- Add a subtle orange glow on primary CTA hover

---

## Copy (use as-is, slight refinement allowed)
### Home hero headline options (pick one)
- "Fast, Reliable Junk Removal in Solano County"
- "Hardline Hauling - Junk Removal Done Right"
- "Clear the Clutter. We'll Haul It."

### Hero subtext
"Owner-operated junk hauling for homes, apartments, and small businesses. Quick scheduling, fair pricing, and friendly service."

### CTA text
- Primary: "Call Now"
- Secondary: "View Services"
- Secondary: "See Gallery"

### Trust bullets
- "Owner-operated"
- "Upfront pricing"
- "Same-day / next-day options"
- "Careful hauling and cleanup"

### Services intro
"From single-item pickups to full cleanouts - we'll load, haul, and leave your space clean."

### Contact intro
"Ready to get started? Call or text for a quick quote."

---

## Required Sections by Page

### 1) Home (`/`)
#### Header (sticky)
- Left: logo badge PNG
- Right: nav links (Home, Services, Gallery, Contact)
- CTA button: "Call Now" -> `tel:7204450103`
- Mobile: hamburger menu with slide-down panel

#### Hero
- Use `IMG_9130.jpg` as hero backdrop or right-side hero image
- Overlay headline + subtext + CTA buttons
- Add badge: "Serving Solano County & more"

#### Services Preview (4 cards)
- Junk Removal: "Cleanouts, clutter, and bulk pickups."
- Furniture / Appliance Removal: "Couches, mattresses, fridges, washers and more."
- Light Demo: "Tear-down of sheds, fencing, and small fixtures (non-structural)."
- Delivery / Pickup: "Help moving bulky items when you need a hand."

#### Gallery Preview
- 3-4 image grid from trailer photos
- Button: "View Full Gallery"

#### CTA Strip
- Text: "Need it gone today?"
- Buttons: "Call Now" and "Text Us"
- Links: `tel:7204450103` and `sms:7204450103`

#### Footer
- Logo mark + "Hardline Hauling - Junk Removal"
- Phone + service area
- Quick links

### 2) Services (`/services`)
#### Header
- Title: "Services"
- Subtitle: "Simple, transparent hauling - we handle the heavy lifting."

#### Service detail blocks (4)
For each service include:
- What it is
- What we take (examples)
- Good for (use cases)

Use simple inline SVG icons or placeholders.

#### "What We Typically Haul"
- Furniture, mattresses
- Appliances
- Yard waste (bagged/contained)
- Cardboard and misc household items
- Garage cleanouts
- Light construction debris (non-hazardous)

#### "What We Don't Take"
Keep brief:
- Hazardous chemicals, paint, asbestos, medical waste, etc.
- Add note: "Ask if unsure."

#### Bottom CTA card
- "Call/Text for a quick quote"
- Phone CTA button

### 3) Gallery (`/gallery`)
#### Header
- Title: "Gallery"
- Subtitle: "Recent hauls and cleanouts."

#### Gallery layout
- Responsive masonry-like grid (CSS columns or responsive grid)
- Click image opens client-side modal/lightbox with next/prev
- Use prominently:
  - `IMG_8796.jpg`
  - `IMG_8795.jpg`
  - `IMG_8624.jpg`
  - `IMG_8464.jpg`
  - `IMG_8463.jpg`
- Optional featured image: `IMG_9130.jpg`

### 4) Contact (`/contact`)
#### Contact card
- Title: "Contact"
- Text: "Call or text and we'll respond as soon as possible."
- Big phone number display
- Buttons:
  - "Call Now" -> `tel:7204450103`
  - "Text Us" -> `sms:7204450103`

#### Service area card
- "Serving Solano County & more"
- Example cities: Fairfield, Vacaville, Vallejo, Suisun City, Benicia (and nearby)

#### Hours note (optional)
- "Hours vary - call/text to confirm availability."

---

## Navigation / UX Requirements
- Consistent header + footer on every page
- Strong "Call Now" CTA visible above the fold on mobile
- Smooth scrolling for in-page anchors (if used)
- Large tappable mobile button sizes
- Subtle hover lift / fade-in transitions

---

## SEO / Metadata
Set per-page metadata:
- Home title: "Hardline Hauling | Junk Removal in Solano County"
- Home description: "Owner-operated junk hauling. Furniture, appliances, cleanouts, light demo, and more. Call 720-445-0103."
- Services title: "Services | Hardline Hauling"
- Gallery title: "Gallery | Hardline Hauling"
- Contact title: "Contact | Hardline Hauling"

Open Graph defaults:
- Use `IMG_9130.jpg` banner as preview image if possible.

---

## File / Folder Plan
- `app/layout.tsx` (global layout, fonts, header/footer)
- `app/page.tsx`
- `app/services/page.tsx`
- `app/gallery/page.tsx`
- `app/contact/page.tsx`
- `components/Header.tsx`
- `components/Footer.tsx`
- `components/Hero.tsx`
- `components/ServiceCards.tsx`
- `components/GalleryGrid.tsx`
- `components/LightboxModal.tsx`
- `components/CTA.tsx`
- `public/images/` (copied photos)

---

## Acceptance Checklist
- [ ] Clean and professional on mobile + desktop
- [ ] Uses provided branding (logo + orange/black theme)
- [ ] Home has hero + service preview + gallery preview + CTA
- [ ] Services page clearly explains all 4 services
- [ ] Gallery includes responsive grid + clickable lightbox
- [ ] Contact includes call/text CTA and service area
- [ ] No broken image paths and all use `next/image`
- [ ] No backend or real form submission
- [ ] Lighthouse-friendly performance and accessibility

---

## Implementation Notes
- Phone links:
  - `tel:7204450103`
  - `sms:7204450103`
- Use semantic HTML: `main`, `section`, `nav`, `footer`
- Add descriptive alt text for every image, such as:
  - "Hardline Hauling trailer loaded for a junk removal job"

Deliver a full working project with all routes and components wired up.
