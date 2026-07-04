# Maicon and Maicon

Official website for **Maicon & Maicon** — a Nigerian career repositioning and professional branding consultancy helping professionals at every stage tell their career story clearly and compellingly.

**Live site:** [maiconandmaicon.com](https://maiconandmaicon.com)

---

## What the site covers

| Section | Description |
|---|---|
| Hero | Brand headline + trusted-by audience tags |
| Stats | Key outcome numbers (500+ professionals, 93% success rate, etc.) |
| Companies | 19 companies where clients now work (Moniepoint, Paystack, Shell, MTN, and more) |
| Services | 18 services offered across CV, LinkedIn, portfolio, content, and writing |
| 24-Hour Reviews | Fast-turnaround CV, Cover Letter, and LinkedIn review cards |
| Pricing | Earnings comparison chart (before vs. after repositioning) |
| Testimonials | Client outcomes with country flags and avatars |
| Packages | 5 career-stage positioning packages |
| Footer | Social links (WhatsApp, LinkedIn, Instagram, X) |

---

## Tech stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS-first config)
- **Animations:** Framer Motion
- **Charts:** Recharts
- **Fonts:** Montserrat · Roboto · Playfair Display (Google Fonts)
- **Deployment:** Vercel

---

## Packages / Pricing tiers

| Package | Target |
|---|---|
| Emerging Talent Positioning | Early-career professionals stepping up |
| Middle-Management Positioning | Managers ready for the next table |
| Senior-Management Positioning | Leaders shaping systems and teams |
| C-Suite Management Positioning | Executives with board-level narratives |
| Legacy Positioning | Retired executives evolving into legacy |

Packages are sold via [paystack.shop](https://paystack.shop).

---

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # ESLint check
```

---

## Project structure

```
app/
  globals.css       # Tailwind v4 theme tokens + global styles
  layout.tsx        # Root layout
  page.tsx          # Page composition (all sections)
components/
  Navbar.tsx
  HeroSection.tsx
  StatsSection.tsx
  CompaniesSection.tsx
  ServicesSection.tsx
  ReviewSection.tsx
  PricingSection.tsx
  TestimonialsSection.tsx
  CategoriesSection.tsx
  Footer.tsx
assets/             # Logo files (PNG/JPG)
```

---

## Services offered

CV Rewrite · CV Audit · CV Review · LinkedIn Optimisation · LinkedIn Management · LinkedIn Review · Cover Letter · Career Profile · Portfolio Review · Portfolio Design · Presentation Design · Ghostwriting · Content Strategy · Content Marketing · Content Writing · Research · Essays · DIY Resources
