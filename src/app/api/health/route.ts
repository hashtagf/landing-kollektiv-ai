import { NextResponse } from 'next/server';

/**
 * Health check endpoint for monitoring service availability
 */
export async function GET() {
  try {
    const startTime = Date.now();
    
    const healthData = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'production',
      version: process.env.npm_package_version || '1.0.0',
      deployment: {
        vercel: {
          region: process.env.VERCEL_REGION,
          url: process.env.VERCEL_URL,
          git_commit_sha: process.env.VERCEL_GIT_COMMIT_SHA,
          git_commit_ref: process.env.VERCEL_GIT_COMMIT_REF,
        },
      },
      checks: {
        api: 'ok',
        database: 'n/a', // Add database checks if needed
        external_services: 'ok',
      },
      response_time_ms: Date.now() - startTime,
    };

    return NextResponse.json(healthData, {
      status: 200,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Health check failed:', error);
    
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error',
        checks: {
          api: 'error',
        },
      },
      {
        status: 503,
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Content-Type': 'application/json',
        },
      }
    );
  }
}

export async function HEAD() {
  // Simple ping endpoint for load balancers
  return new Response(null, {
    status: 200,
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    },
  });
}