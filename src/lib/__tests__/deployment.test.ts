import { getDeploymentInfo } from "../deployment";

const RAILWAY_VARS = [
  "RAILWAY_REGION",
  "RAILWAY_PUBLIC_DOMAIN",
  "RAILWAY_GIT_COMMIT_SHA",
  "RAILWAY_GIT_BRANCH",
  "RAILWAY_DEPLOYMENT_ID",
  "RAILWAY_ENVIRONMENT_NAME",
];

const VERCEL_VARS = [
  "VERCEL_REGION",
  "VERCEL_URL",
  "VERCEL_GIT_COMMIT_SHA",
  "VERCEL_GIT_COMMIT_REF",
  "VERCEL_DEPLOYMENT_ID",
];

const ALL_VARS = [...RAILWAY_VARS, ...VERCEL_VARS];

const originalEnv: Record<string, string | undefined> = {};

beforeEach(() => {
  for (const key of ALL_VARS) {
    originalEnv[key] = process.env[key];
    delete process.env[key];
  }
});

afterEach(() => {
  for (const key of ALL_VARS) {
    if (originalEnv[key] === undefined) {
      delete process.env[key];
    } else {
      process.env[key] = originalEnv[key];
    }
  }
});

describe("getDeploymentInfo", () => {
  it("returns Railway metadata when RAILWAY_* env vars are set", () => {
    process.env.RAILWAY_REGION = "us-west1";
    process.env.RAILWAY_PUBLIC_DOMAIN = "kollektiv.up.railway.app";
    process.env.RAILWAY_GIT_COMMIT_SHA = "abcdef1234567890";
    process.env.RAILWAY_GIT_BRANCH = "main";
    process.env.RAILWAY_DEPLOYMENT_ID = "deploy-123";

    const info = getDeploymentInfo();

    expect(info).toEqual({
      platform: "railway",
      region: "us-west1",
      url: "kollektiv.up.railway.app",
      gitCommitSha: "abcdef1234567890",
      gitBranch: "main",
      deploymentId: "deploy-123",
    });
  });

  it("falls back to VERCEL_* env vars when Railway vars are absent", () => {
    process.env.VERCEL_REGION = "iad1";
    process.env.VERCEL_URL = "landing-kollektiv-ai.vercel.app";
    process.env.VERCEL_GIT_COMMIT_SHA = "cafebabe1234";
    process.env.VERCEL_GIT_COMMIT_REF = "main";
    process.env.VERCEL_DEPLOYMENT_ID = "dpl_xyz";

    const info = getDeploymentInfo();

    expect(info).toEqual({
      platform: "vercel",
      region: "iad1",
      url: "landing-kollektiv-ai.vercel.app",
      gitCommitSha: "cafebabe1234",
      gitBranch: "main",
      deploymentId: "dpl_xyz",
    });
  });

  it("prefers Railway values over Vercel ones when both are present", () => {
    process.env.RAILWAY_REGION = "us-west1";
    process.env.RAILWAY_PUBLIC_DOMAIN = "kollektiv.up.railway.app";
    process.env.RAILWAY_GIT_COMMIT_SHA = "aaa111";
    process.env.RAILWAY_GIT_BRANCH = "main";
    process.env.RAILWAY_DEPLOYMENT_ID = "rail-1";

    process.env.VERCEL_REGION = "iad1";
    process.env.VERCEL_URL = "old.vercel.app";
    process.env.VERCEL_GIT_COMMIT_SHA = "bbb222";
    process.env.VERCEL_GIT_COMMIT_REF = "develop";
    process.env.VERCEL_DEPLOYMENT_ID = "dpl_old";

    const info = getDeploymentInfo();

    expect(info.platform).toBe("railway");
    expect(info.region).toBe("us-west1");
    expect(info.url).toBe("kollektiv.up.railway.app");
    expect(info.gitCommitSha).toBe("aaa111");
    expect(info.gitBranch).toBe("main");
    expect(info.deploymentId).toBe("rail-1");
  });

  it('reports platform "unknown" with null fields when no platform vars are set', () => {
    const info = getDeploymentInfo();

    expect(info).toEqual({
      platform: "unknown",
      region: null,
      url: null,
      gitCommitSha: null,
      gitBranch: null,
      deploymentId: null,
    });
  });

  it("treats partial Railway env (any one var) as Railway platform", () => {
    process.env.RAILWAY_GIT_COMMIT_SHA = "sha-only";

    const info = getDeploymentInfo();

    expect(info.platform).toBe("railway");
    expect(info.gitCommitSha).toBe("sha-only");
    expect(info.region).toBeNull();
    expect(info.url).toBeNull();
  });
});
