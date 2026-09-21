# Search & Analytics Setup

Status as of 2026-09-21. Everything below is live on `https://www.internafricahq.org`.

## What is configured

| Item | Where | Detail |
|---|---|---|
| Search Console | `internafricahq.org` (Domain property) | Verified via DNS TXT record on Vercel DNS |
| Verification meta tag | `app/layout.tsx` (`metadata.verification.google`) | Backup method, token `jggmZ4AuufvBMbzaCXzITJq1PZaGSvBAMuzOIlhll3w` |
| Sitemap | `app/sitemap.ts` | Home, about, team, faq, apply, plus one URL per program in `data/programs.ts`. Submitted in Search Console |
| robots | `app/robots.ts` | Allows all, disallows `/success`, points to the sitemap |
| Google Analytics 4 | `app/layout.tsx` (`<GoogleAnalytics gaId=... />`) | Measurement ID `G-6HJYTLR6D7`, stream ID `15817763611` |
| Search Console link | Analytics Admin, Product links | Domain property linked to the Intern Africa HQ stream |
| Vercel Analytics and Speed Insights | `app/layout.tsx` | Unchanged |

## Decisions

- **Domain property, DNS verification.** A Domain property covers `www`, the apex and subdomains. It cannot be verified by meta tag, so the DNS TXT record must stay. Do not remove it or ownership lapses. The existing SPF TXT record must also stay (email).
- **Own Analytics account.** The GA4 property was first created under the "Still waters Safaris" account, then moved to a new account "Intern Africa HQ" (408925221, property 555205608). This keeps client access separate. The move preserved the measurement ID, so no code change was needed.
- **Sitemap is code, not a static file.** New programs added to `data/programs.ts` appear in the sitemap automatically. New static pages must be added to the `pages` list in `app/sitemap.ts`.
- **Access model.** View-only access is the default: Viewer in Analytics (property access management) and Restricted in Search Console. Use property-level access, not account-level.

## Cleanup and pending items

- The `Temp` property (555246233) used for the account move is in the Analytics trash and deletes permanently on 2026-10-26. It can be restored until then.
- Analytics stream URL is `https://internafricahq.org` (no `www`). Cosmetic, tracking is unaffected.
- No viewers have been added yet. Needed: Google emails of anyone who should see reports.
- Check back after 24 to 48 hours: sitemap status should read Success (8 URLs), and Analytics should show data.

## Notes

- The Google Analytics ID is public by design (it ships in the page source), so it is safe to keep in code.
- Deleting the Still Waters property or account would not affect this site, and vice versa.
