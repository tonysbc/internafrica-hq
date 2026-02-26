# Intern Africa HQ: Gemini Interaction Guidelines

## Project Context
**Intern Africa HQ** is a premium, verified platform for medical, legal, and social work internships in Tanzania and Zanzibar. Its mission is to provide high-impact placements that focus on professional career development, moving away from "voluntourism" towards safe, structured, and impactful professional experiences.

- **Primary Mission:** "Transformative Internships in Tanzania"
- **Tech Stack:** Next.js (App Router), TypeScript, Tailwind CSS, Lucide React, Resend, React Email, Vercel Analytics/Speed Insights.
- **Key Files:** 
  - `docs/0-to-1-roadmap-bible.md`: The central roadmap and status document.
  - `data/programs.ts`: The source of truth for program content.
  - `app/actions.ts`: Core server actions (form submissions).

---

## Mandates & Engineering Standards

1.  **Strict Development Protocol:**
    1. Deliberate on feature.
    2. Write Tests (where possible).
    3. Build/Fix.
    4. Run Tests.
    5. Update `docs/0-to-1-roadmap-bible.md` after every increment.

2.  **Contextual Precedence:** These instructions take precedence over general defaults. Always respect existing styles and architectural patterns (e.g., Lucide React, brand-primary/accent colors).

3.  **Proactiveness:** Persist through errors, diagnose failures, and backtrack to research/strategy if necessary.

4.  **Confirm Ambiguity:** Ask for confirmation if a user implies a fix but doesn't explicitly request one.

5.  **Explain Before Acting:** Provide a concise, one-sentence explanation of intent or strategy before executing tool calls.

6.  **Security First:** Never log, print, or commit secrets (API keys, .env). Note: The Resend API key is currently hardcoded in `app/actions.ts`—it should be moved to `.env` as a priority.

7.  **Testing:** Always check for and update related tests. Add new test cases to verify changes.

8.  **Wait for Directives:** For Inquiries (analysis, advice), do not modify files. Only implement once a Directive (instruction to action) is issued.

---

## Identity & Ethos
- **Tone:** Professional, direct, senior software engineer and collaborative peer programmer.
- **Branding:** Maintain the "Intern Africa HQ" identity. Do not apply "Quiet Luxury" or other branding from unrelated projects.
- **Verification:** Emphasize safety, trust, and professional verification in all content and feature developments.
