# Cerebrum

> OpenWolf's learning memory. Updated automatically as the AI learns from interactions.
> Do not edit manually unless correcting an error.
> Last updated: 2026-04-06

## User Preferences

<!-- How the user likes things done. Code style, tools, patterns, communication. -->

## Key Learnings

- **Project:** landing-kollektiv-ai
- **Description:** A modern, responsive landing page for Kollektiv AI built with Next.js 14, TypeScript, and Tailwind CSS.
- **Hosting:** Railway (Nixpacks). `railway.json` pins the build/start commands and `/api/health` healthcheck. Vercel decommissioned 2026-04-26.
- **Deployment metadata helper:** `src/lib/deployment.ts` (`getDeploymentInfo()`) reads `RAILWAY_*` env vars first, falls back to `VERCEL_*`. Used by `/api/health` and `/api/status`.

## Do-Not-Repeat

<!-- Mistakes made and corrected. Each entry prevents the same mistake recurring. -->
<!-- Format: [YYYY-MM-DD] Description of what went wrong and what to do instead. -->
- [2026-04-26] Next.js 14 App Router prerenders GET route handlers as static unless they read `Request` or use cookies/headers. Routes that report runtime data (`process.uptime()`, `process.env.RAILWAY_*`) MUST add `export const dynamic = "force-dynamic"` or they ship build-time values. Bit us in `/api/health` and `/api/status` during the Railway migration.

## Decision Log

<!-- Significant technical decisions with rationale. Why X was chosen over Y. -->
- [2026-04-26] Migrated hosting from Vercel → Railway. Reason: Founder consolidating on Railway as primary platform. Kept `VERCEL_*` env-var fallback in `getDeploymentInfo()` so the cutover window (Vercel paused but not deleted) still serves correct metadata if traffic is rolled back. Cutover steps live in `.kollektiv/runbooks/railway-cutover.md`.
