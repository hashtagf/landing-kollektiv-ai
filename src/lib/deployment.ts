export type DeploymentPlatform = "railway" | "vercel" | "unknown";

export interface DeploymentInfo {
  platform: DeploymentPlatform;
  region: string | null;
  url: string | null;
  gitCommitSha: string | null;
  gitBranch: string | null;
  deploymentId: string | null;
}

const RAILWAY_ENV_KEYS = [
  "RAILWAY_REGION",
  "RAILWAY_PUBLIC_DOMAIN",
  "RAILWAY_GIT_COMMIT_SHA",
  "RAILWAY_GIT_BRANCH",
  "RAILWAY_DEPLOYMENT_ID",
  "RAILWAY_ENVIRONMENT_NAME",
  "RAILWAY_PROJECT_ID",
  "RAILWAY_SERVICE_ID",
] as const;

const VERCEL_ENV_KEYS = [
  "VERCEL_REGION",
  "VERCEL_URL",
  "VERCEL_GIT_COMMIT_SHA",
  "VERCEL_GIT_COMMIT_REF",
  "VERCEL_DEPLOYMENT_ID",
] as const;

function pick(...values: Array<string | undefined>): string | null {
  for (const value of values) {
    if (value && value.length > 0) return value;
  }
  return null;
}

function detectPlatform(env: NodeJS.ProcessEnv): DeploymentPlatform {
  if (RAILWAY_ENV_KEYS.some((key) => env[key])) return "railway";
  if (VERCEL_ENV_KEYS.some((key) => env[key])) return "vercel";
  return "unknown";
}

export function getDeploymentInfo(
  env: NodeJS.ProcessEnv = process.env,
): DeploymentInfo {
  return {
    platform: detectPlatform(env),
    region: pick(env.RAILWAY_REGION, env.VERCEL_REGION),
    url: pick(env.RAILWAY_PUBLIC_DOMAIN, env.VERCEL_URL),
    gitCommitSha: pick(env.RAILWAY_GIT_COMMIT_SHA, env.VERCEL_GIT_COMMIT_SHA),
    gitBranch: pick(env.RAILWAY_GIT_BRANCH, env.VERCEL_GIT_COMMIT_REF),
    deploymentId: pick(env.RAILWAY_DEPLOYMENT_ID, env.VERCEL_DEPLOYMENT_ID),
  };
}
