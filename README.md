# Grow This Business — Website

The first version of the GrowThisBusiness.com marketing site: a
Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 project, ready
to run locally and deploy to Vercel.

## Architecture & design direction

**Stack.** Next.js App Router with server components by default (the
lead form is the one client component). Tailwind v4, configured
CSS-first via `@theme` in `app/globals.css` — there's no
`tailwind.config.ts`; every color/font token is defined there. Content
for repeatable sections (services, industries, automation examples,
etc.) lives as small arrays at the top of each component file, so
copy edits don't require touching markup.

**Design direction — "operating blueprint."** Rather than a soft
agency look, the site borrows from technical drawings: an ink-navy /
cool-paper palette (not warm cream), a blueprint grid backdrop behind
a few sections, dashed "seam" rules, and corner-bracket frames like
crop marks on a drawing sheet. Space Grotesk carries headlines, Inter
carries body copy, and IBM Plex Mono is used for small labels, step
numbers, and diagram text — giving the page a drafted, systems feel
without leaning on gears, circuit-boards, or AI-gradient clichés.

**Signature motif.** A node-and-connector line is the one recurring
device: it's the GTB mark itself (two nodes on a rising path), it's
the animated hero diagram (a lead moving Captured → CRM → Assigned →
Followed Up → Won), and it reappears as list markers — a **broken,
dashed connector** for the Problem section (things that are dropped)
versus a **solid, filled connector** for the Automation Examples
(things that are wired up). It's a small piece of visual grammar that
literally represents what the company sells: things that are, or
aren't, connected.

**Numbering.** Numbered steps only appear where the content is a real
sequence — "How It Works" (an ordered 4-step process) and the hero
diagram (an ordered pipeline). Everywhere else (services, industries,
automation examples) uses unordered cards, since those aren't
sequential.

## Project structure

```
app/
  layout.tsx          Fonts, global <head> metadata, Organization/
                       ProfessionalService JSON-LD, header/footer chrome
  page.tsx             Homepage — assembles all sections in order
  globals.css          Design tokens (@theme) + blueprint/grid/rule utilities
  assessment/page.tsx  Dedicated Growth Assessment landing page + form
  api/assessment/route.ts   Form submission handler (see below)
  privacy/, terms/     Placeholder legal pages
  robots.ts            Generates /robots.txt
  sitemap.ts           Generates /sitemap.xml
  icon.svg             Favicon (the GTB mark)
components/
  Logo.tsx             GTB mark + wordmark (light/dark variants)
  Header.tsx, Footer.tsx
  Hero.tsx             Headline + animated SVG workflow schematic
  ProblemSection.tsx
  CoreServices.tsx     "How We Help" — 4 service pillars (#how-we-help)
  BeforeAfter.tsx       Before/after workflow comparison
  HowItWorks.tsx        4-step process (#how-it-works)
  Industries.tsx        (#industries)
  AutomationExamples.tsx
  WhyGTB.tsx
  EngagementModels.tsx  Assessment / Implementation / Ongoing / Fractional (#engagements)
  PartnerCapabilities.tsx
  FinalCTA.tsx
  GrowthAssessmentForm.tsx   Client component; posts to /api/assessment
```

## Placeholders you need to replace before launch

Search the codebase for these — none are invented statistics,
testimonials, or client claims (per the brief, none were added), just
contact details and legal copy that need real content:

| What | Where |
|---|---|

| Email `hello@growthisbusiness.com` | `components/Footer.tsx`, `app/layout.tsx` (JSON-LD), `components/GrowthAssessmentForm.tsx` (error copy) |
| LinkedIn URL | `components/Footer.tsx`, `app/layout.tsx` (JSON-LD `sameAs`) |
| Privacy Policy body copy | `app/privacy/page.tsx` |
| Terms of Service body copy | `app/terms/page.tsx` |

## 1. Running locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`. The dev server hot-reloads on save.

## 2. Deploying

The project is a stock Next.js app, so Vercel needs no configuration:

1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. In Vercel, **New Project** → import the repo. Framework preset
   ("Next.js") is auto-detected.
3. Add any environment variables from `.env.example` under **Settings
   → Environment Variables** (see "Connecting the assessment form"
   below).
4. Deploy. Every push to `main` redeploys automatically.

## 3. Connecting the custom domain

In the Vercel project: **Settings → Domains → Add** →
`growthisbusiness.com` (and `www.growthisbusiness.com`, redirected to
the apex or vice versa — Vercel will suggest which). Vercel gives you
the exact A/CNAME records to add at your domain registrar. DNS
propagation is usually minutes, occasionally up to 24-48 hours.

## 4. Connecting the contact form

`app/api/assessment/route.ts` validates submissions, logs them
(`console.log`, visible in Vercel's function logs), and emails a
notification to `NOTIFY_EMAIL_TO` (defaults to
jcollins@growthisbusiness.com) via Resend — but only once
`RESEND_API_KEY` is set in your environment. Without it, submissions
are still logged, just not emailed, and visitors still see a normal
success message either way.

**To make it actually deliver:**

1. Create a free account at [resend.com](https://resend.com).
2. Verify `growthisbusiness.com` as a domain in Resend (Domains →
   Add Domain) — it'll give you a few DNS records to add in
   Cloudflare, the same pattern used for the Vercel setup. **This
   step isn't optional**: until the domain is verified, Resend only
   allows sending from its own `onboarding@resend.dev` sandbox
   address, and only to the email address the Resend account itself
   was created with — not to arbitrary recipients like
   jcollins@growthisbusiness.com.
3. Once verified, update the `from` address in
   `app/api/assessment/route.ts` to something on your own domain
   (e.g. `Grow This Business <notifications@growthisbusiness.com>`).
4. Create an API key in Resend, add it as `RESEND_API_KEY` in
   Vercel's project environment variables, and redeploy (env var
   changes need a new deployment to take effect — push any commit,
   or use Vercel's "Redeploy" button).

Other paths remain valid alternatives if you'd rather not use
Resend:

- **Webhook (Zapier / Make / a CRM's inbound webhook):** replace the
  Resend `fetch` call with one to your own webhook URL. This is the
  fastest path to the fuller flow described in the original brief
  (CRM → confirmation email → internal notification → assignment →
  scheduling link → follow-up).
- **Direct CRM API** (HubSpot, GoHighLevel, etc.): call the CRM's
  "create contact/deal" endpoint directly from the route handler
  using their SDK or REST API and an API key stored as an env var.

The form itself (`components/GrowthAssessmentForm.tsx`) already
collects every field from the brief (name, company, email, phone,
website, industry, company size, biggest challenge, free-text
details) and handles loading/success/error states — no changes needed
there for most integrations.

## 5. Adding analytics

Simplest path: **Vercel Analytics** —
`npm install @vercel/analytics`, then add `<Analytics />` from
`@vercel/analytics/react` into `app/layout.tsx` inside `<body>`. No
cookie banner required for the base package.

For GA4 or another tag-based tool, add the script tag(s) to
`app/layout.tsx` inside `<head>` (Next.js's `<Script>` component from
`next/script` with `strategy="afterInteractive"` is the recommended
way to load third-party analytics scripts).

## 6. Updating copy

Nearly all body copy lives in small, readable arrays or JSX at the
top of each file in `components/` — e.g. `PROBLEMS` in
`ProblemSection.tsx`, `SERVICES` in `CoreServices.tsx`, `EXAMPLES` in
`AutomationExamples.tsx`. Edit the array, save, done. Headlines and
one-off paragraphs sit directly in each component's JSX.

## 7. Adding future service pages

The brief plans for: `/business-automation`, `/small-business-consulting`,
`/sales-consulting`, `/sales-automation`, `/crm-consulting`,
`/workflow-automation`, `/business-growth-consulting`.

Workforce training has its own set of planned pages, following the
same "don't publish until there's real content" rule:
`/lms-consulting`, `/lms-selection`, `/training-content`,
`/compliance-training`, `/safety-training`, `/sales-training`,
`/custom-elearning-development`. `app/workforce-training/page.tsx`
is the hub these would eventually link out from.

For each, create `app/<slug>/page.tsx` following the pattern in
`app/assessment/page.tsx`:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title",
  description: "...",
  alternates: { canonical: "/business-automation" },
};

export default function Page() {
  return (/* sections built from existing components, or new ones */);
}
```

Then add the route to `app/sitemap.ts` and link to it from
`components/Footer.tsx` (and `CoreServices.tsx` once there's a page
per pillar). The brief is explicit that these should be genuinely
useful pages, not thin doorway pages — write real content for each
before publishing.

## 8. Adding future industry pages

Same pattern under `app/industries/<slug>/page.tsx` — e.g.
`app/industries/plumbing/page.tsx` — for: plumbing, HVAC, electrical,
roofing, property-management, professional-services,
financial-services. `components/Industries.tsx` is the natural place
to link out to these once they exist (each industry card becomes a
`<Link href="/industries/plumbing">`).

## SEO notes

- Per-page metadata (title, description, canonical) is set via each
  page's exported `metadata` object; `app/layout.tsx` sets sitewide
  defaults and the `%s | Grow This Business` title template.
- `app/robots.ts` and `app/sitemap.ts` generate `/robots.txt` and
  `/sitemap.xml` automatically — update `sitemap.ts` as pages are
  added (see §7-8).
- Organization + ProfessionalService JSON-LD is in `app/layout.tsx`;
  update the placeholder phone/email/LinkedIn there too.
- `public/og-image.png` is a real (not placeholder-labeled) 1200×630
  OpenGraph image built from the same design tokens as the site —
  replace it if you want different hero art, but it's launch-ready.
