# anatomy.md

> Auto-maintained by OpenWolf. Last scanned: 2026-04-26T12:41:12.406Z
> Files: 43 tracked | Anatomy hits: 0 | Misses: 0

## ./

- `.eslintrc.json` (~107 tok)
- `.gitignore` — Git ignore rules (~77 tok)
- `CLAUDE.md` — OpenWolf (~57 tok)
- `jest.config.js` — Declares nextJest (~126 tok)
- `next.config.js` — Declares nextConfig (~323 tok)
- `package.json` — Node.js package manifest (~403 tok)
- `postcss.config.js` — PostCSS configuration (~24 tok)
- `railway.json` (~101 tok)
- `README.md` — Project documentation (~1845 tok)
- `tailwind.config.ts` — Tailwind CSS configuration (~372 tok)
- `tsconfig.json` — TypeScript configuration (~210 tok)

## .claude/

- `settings.json` (~441 tok)

## .claude/rules/

- `openwolf.md` (~313 tok)

## .github/workflows/

- `ci-cd.yml` — CI: CI/CD Pipeline (~567 tok)

## .kollektiv/

- `plan.md` — Plan: Fix Railway build (npm EBUSY) and clean up cutover follow-ups (~1033 tok)
- `review.md` — Summary (~682 tok)

## docs/runbooks/

- `railway-cutover.md` — Railway Cutover Runbook — landing-kollektiv-ai (~1377 tok)

## scripts/

- `validate-routes.sh` — Routing Validation Script (~1626 tok)

## scripts/__tests__/

- `railway-config.test.ts` — Declares repoRoot (~334 tok)

## src/app/

- `globals.css` — Styles: 6 rules, 23 vars, 3 media queries, 7 animations, 3 layers (~2658 tok)
- `layout.tsx` — inter (~1061 tok)
- `meta.json` (~789 tok)
- `page.tsx` — metadata (~434 tok)

## src/app/api/health/

- `route.ts` — Health check endpoint for monitoring service availability (~563 tok)

## src/app/api/status/

- `route.ts` — Detailed status endpoint for comprehensive monitoring (~1369 tok)

## src/components/

- `About.tsx` — About (~4125 tok)
- `Contact.tsx` — Contact — renders form (~3772 tok)
- `Header.tsx` — Header (~63 tok)
- `Hero.tsx` — Hero (~3660 tok)
- `LanguageSwitcher.tsx` — LanguageSwitcher (~364 tok)
- `Services.tsx` — Services (~4189 tok)
- `Team.tsx` — Team (~2448 tok)

## src/i18n/

- `config.ts` — Exports LOCALES, DEFAULT_LOCALE, LANG_COOKIE_NAME, LANG_QUERY_PARAM + 5 more (~295 tok)
- `LanguageProvider.tsx` — LanguageContext (~878 tok)
- `types.ts` — Exports Dictionary (~1039 tok)

## src/i18n/__tests__/

- `config.test.ts` (~360 tok)
- `dictionaries.test.ts` — Shape: describeShape (~512 tok)
- `LanguageProvider.test.tsx` (~299 tok)

## src/i18n/dictionaries/

- `en.ts` — Declares en (~2774 tok)
- `index.ts` — Exports dictionaries (~47 tok)
- `th.ts` — Declares th (~2668 tok)

## src/lib/

- `deployment.ts` — Exports DeploymentPlatform, DeploymentInfo, getDeploymentInfo (~440 tok)

## src/lib/__tests__/

- `deployment.test.ts` — Declares RAILWAY_VARS (~1019 tok)
