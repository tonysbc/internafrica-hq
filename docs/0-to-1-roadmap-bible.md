# Intern Africa HQ: 0-to-1 Roadmap Bible

## Vision & Ethos
**Intern Africa HQ** is a premium, verified platform for medical, legal, and social work internships in Tanzania and Zanzibar. Its mission is to provide high-impact placements that focus on professional career development, moving away from "voluntourism" towards safe, structured, and impactful professional experiences.

---

## Current Status (February 26, 2026)

### Phase 1: Foundation (Completed)
- [x] Initial Next.js App Router scaffold with TypeScript.
- [x] Responsive layout with Montserrat (headings) and Inter (sans-serif) fonts.
- [x] Core branding: "Intern Africa HQ" logo and brand-primary/accent colors.
- [x] Landing page with high-impact hero section and program categories.
- [x] Static program data structure in `data/programs.ts`.
- [x] Individual program detail pages using dynamic routing (`/programs/[slug]`).
- [x] Application form (`/apply`) with pre-selection functionality.
- [x] Server-side application submission via `submitApplication` action.
- [x] Email notification integration using Resend and React Email (`AdminEmail.tsx`).
- [x] Vercel Analytics and Speed Insights integration.
- [x] Basic About, Team, FAQ, and Success pages.

---

## Strategic Roadmap

### Phase 2: Professionalization & Trust (In Progress)
- [ ] **Program Verification:** Add more details on local partners, NGOs, and hospitals for each program to build more trust.
- [ ] **Testimonials & Case Studies:** Implement a dedicated section for detailed student experiences and verified outcomes.
- [ ] **Partner Portal:** Simple dashboard for local NGOs/hospitals to view upcoming interns (if relevant).
- [x] **Form Validation:** Robust client-side and server-side validation using Zod and React 19 `useActionState`.
- [x] **SEO Optimization:** Dynamic metadata for program pages including OpenGraph support.
- [x] **WhatsApp Integration:** Floating "Chat with us" button site-wide for instant engagement.
- [ ] **Dynamic Pricing/Booking:** Support for selecting different durations and seeing real-time pricing updates.

### Phase 3: Engagement & Community
- [ ] **Alumni Network:** Simple directory or community feature for past interns.
- [ ] **Newsletter Integration:** "Join our Inner Circle" for updates on upcoming seasons.
- [ ] **Multi-language Support:** Support for European languages (German, Dutch) as many interns come from these regions.

---

## Technical Debt & Maintenance
- [ ] **Environment Secrets:** Ensure Resend API keys and other secrets are moved to `.env` (currently hardcoded in `actions.ts`).
- [ ] **Form Validation:** Implement client-side and enhanced server-side validation (e.g., with Zod).
- [ ] **Error Handling:** Refine error UI for form submissions beyond simple logging.
- [ ] **Unit & Integration Tests:** Add tests for core workflows (form submission, program rendering).
