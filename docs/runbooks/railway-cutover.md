# Railway Cutover Runbook — landing-kollektiv-ai

Owner: Founder · Last verified: 2026-04-26

This runbook walks through the live cutover from Vercel
(`landing-kollektiv-ai.vercel.app`) to Railway. The repo changes ship in
the same PR that points at this file; the steps below are executed in the
Railway and Vercel UIs/CLIs by the operator.

---

## 0. Prerequisites

- Railway CLI installed and logged in: `railway login`
- Vercel CLI installed and logged in: `vercel login`
- Access to the existing Vercel project (to copy env vars from)
- Access to the MongoDB cluster credentials (`MONGODB_URI`)
- Access to SMTP credentials used by nodemailer

---

## 1. Create the Railway service

1. In the Railway dashboard, create a new project (or pick an existing one)
   and add a service from the `hashtagf/landing-kollektiv-ai` GitHub repo.
2. Set the deploy branch to `main` (auto-deploy on push).
3. Railway auto-detects Next.js via Nixpacks; `railway.json` in the repo
   pins:
   - `buildCommand`: `npm ci && npm run build`
   - `startCommand`: `npm start -- -p ${PORT:-3000}`
   - `healthcheckPath`: `/api/health`
   - `restartPolicyType`: `ON_FAILURE`

No additional Railway config is needed in the dashboard.

---

## 2. Seed environment variables

Pull the current values from Vercel and import into Railway. The variables
that must move over:

| Variable                      | Notes                                 |
|-------------------------------|---------------------------------------|
| `MONGODB_URI`                 | Mongoose connection string            |
| `SMTP_HOST`                   | nodemailer SMTP host                  |
| `SMTP_PORT`                   | nodemailer SMTP port                  |
| `SMTP_USER`                   | SMTP auth user                        |
| `SMTP_PASS`                   | SMTP auth password                    |
| `SMTP_FROM` / `MAIL_FROM`     | From-address used by contact flow     |
| `NEXT_PUBLIC_SITE_URL`        | Update to Railway URL after deploy    |
| Any other `NEXT_PUBLIC_*`     | Carry over as-is                      |

Quick-pull from Vercel (run locally inside the repo):

```bash
vercel env pull .env.vercel.production --environment=production
```

Then import each line into Railway via the dashboard, or:

```bash
railway link        # pick the project + service
railway variables set MONGODB_URI="mongodb+srv://..."
railway variables set SMTP_HOST="..." SMTP_PORT="587" SMTP_USER="..." SMTP_PASS="..."
# ...repeat for the rest
```

Do NOT seed `RAILWAY_*` vars manually — Railway injects those at runtime
(`RAILWAY_REGION`, `RAILWAY_PUBLIC_DOMAIN`, `RAILWAY_GIT_COMMIT_SHA`,
`RAILWAY_GIT_BRANCH`, `RAILWAY_DEPLOYMENT_ID`).

---

## 3. Trigger first deploy

Either click "Deploy" in the Railway dashboard or push a trivial commit
to `main`. Watch the build log; the build should complete with
`next build` and the service should bind to `$PORT`.

Once deploy is green, note the generated URL
(`<service>.up.railway.app`).

---

## 4. Smoke tests

```bash
RAILWAY_URL="https://<service>.up.railway.app"

# Homepage
curl -I "$RAILWAY_URL"                          # expect 200

# Health endpoint
curl -s "$RAILWAY_URL/api/health" | jq .
# expect: status="healthy", deployment.platform="railway",
#         deployment.git_commit_sha non-null

# Status endpoint
curl -s "$RAILWAY_URL/api/status" | jq .
# expect: status="healthy", deployment.deployment_id non-null,
#         metrics block populated

# Contact form (submit a real test message)
# Then check the destination inbox for the email and Railway logs
# (`railway logs --service <service>`) for any SMTP errors.
```

If `/api/health` returns 503 or `deployment.platform != "railway"`,
stop here and investigate before continuing.

---

## 5. Redeploy verification

Push a no-op commit to `main`:

```bash
git commit --allow-empty -m "chore: bump for Railway redeploy verification"
git push origin main
```

Wait for Railway to deploy, then re-hit `/api/status` and confirm
`deployment.git_commit` matches the new short SHA.

---

## 6. Pause Vercel

Once Railway has been green for at least one full business day and all
smoke tests pass:

1. Vercel dashboard → project `landing-kollektiv-ai` → Settings → General
   → "Pause Project". This keeps the project in place but stops serving
   traffic and stops new deploys.
2. Confirm the Vercel URL no longer serves the app:
   ```bash
   curl -I https://landing-kollektiv-ai.vercel.app
   # expect 404 / paused page
   ```
3. After a 7-day soak with no regressions, delete the Vercel project:
   Settings → Advanced → "Delete Project".

---

## 7. Rollback plan

If Railway has a critical issue and the Vercel project is still paused
(steps 1–6 only):

1. Vercel dashboard → project → Settings → "Resume Project".
2. DNS or share the Vercel URL with stakeholders while Railway is fixed.
3. No code changes required; the repo's `getDeploymentInfo()` falls back
   to `VERCEL_*` env vars when `RAILWAY_*` are absent, so Vercel still
   serves the same metadata shape.

If the Vercel project has already been deleted:

1. Re-import the repo into Vercel as a new project.
2. Re-seed the env vars from `.env.vercel.production` (or from the
   Railway variables dashboard via `railway variables`).
3. Trigger a deploy from `main`.

---

## 8. Out of scope (do not do here)

- Custom-domain swap (still on Railway-generated `*.up.railway.app`)
- Preview deployments per PR
- MongoDB cluster migration
- CDN/image-optimization tuning
