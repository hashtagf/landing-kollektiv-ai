import { NextResponse } from "next/server";
import { getDeploymentInfo } from "@/lib/deployment";

// Read env + uptime at request time, not at build time.
export const dynamic = "force-dynamic";

/**
 * Health check endpoint for monitoring service availability
 */
export async function GET() {
  try {
    const startTime = Date.now();
    const deployment = getDeploymentInfo();

    const healthData = {
      status: "healthy",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || "production",
      version: process.env.npm_package_version || "1.0.0",
      deployment: {
        platform: deployment.platform,
        region: deployment.region,
        url: deployment.url,
        git_commit_sha: deployment.gitCommitSha,
        git_branch: deployment.gitBranch,
      },
      checks: {
        api: "ok",
        database: "n/a", // Add database checks if needed
        external_services: "ok",
      },
      response_time_ms: Date.now() - startTime,
    };

    return NextResponse.json(healthData, {
      status: 200,
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Health check failed:", error);

    return NextResponse.json(
      {
        status: "unhealthy",
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : "Unknown error",
        checks: {
          api: "error",
        },
      },
      {
        status: 503,
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          "Content-Type": "application/json",
        },
      },
    );
  }
}

export async function HEAD() {
  // Simple ping endpoint for load balancers
  return new Response(null, {
    status: 200,
    headers: {
      "Cache-Control": "no-cache, no-store, must-revalidate",
    },
  });
}
