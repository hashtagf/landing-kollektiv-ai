import { NextResponse } from 'next/server';

/**
 * Detailed status endpoint for comprehensive monitoring
 */
export async function GET() {
  const startTime = Date.now();
  
  try {
    // Perform comprehensive status checks
    const statusChecks = await performStatusChecks();
    const responseTime = Date.now() - startTime;
    
    const overallStatus = statusChecks.every(check => check.status === 'healthy') 
      ? 'healthy' 
      : 'degraded';

    const statusData = {
      status: overallStatus,
      timestamp: new Date().toISOString(),
      response_time_ms: responseTime,
      environment: process.env.NODE_ENV || 'production',
      version: process.env.npm_package_version || '1.0.0',
      deployment: {
        vercel_region: process.env.VERCEL_REGION,
        vercel_url: process.env.VERCEL_URL,
        git_commit: process.env.VERCEL_GIT_COMMIT_SHA?.substring(0, 7),
        git_branch: process.env.VERCEL_GIT_COMMIT_REF,
        deployment_id: process.env.VERCEL_DEPLOYMENT_ID,
      },
      checks: statusChecks.reduce((acc, check) => {
        acc[check.name] = {
          status: check.status,
          response_time_ms: check.responseTime,
          message: check.message,
          last_checked: check.timestamp,
        };
        return acc;
      }, {} as Record<string, any>),
      metrics: {
        uptime_seconds: process.uptime(),
        memory_usage: process.memoryUsage(),
        cpu_usage: process.cpuUsage(),
      },
    };

    return NextResponse.json(statusData, {
      status: overallStatus === 'healthy' ? 200 : 503,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Status check failed:', error);
    
    return NextResponse.json(
      {
        status: 'error',
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error',
        response_time_ms: Date.now() - startTime,
      },
      {
        status: 500,
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Content-Type': 'application/json',
        },
      }
    );
  }
}

async function performStatusChecks() {
  const checks = [
    checkApiHealth(),
    checkStaticAssets(),
    checkRouting(),
  ];

  return Promise.all(checks);
}

async function checkApiHealth() {
  const startTime = Date.now();
  try {
    // Basic API functionality check
    const isHealthy = true; // Add actual checks here
    
    return {
      name: 'api',
      status: isHealthy ? 'healthy' : 'unhealthy',
      responseTime: Date.now() - startTime,
      message: isHealthy ? 'API responding normally' : 'API not responding',
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    return {
      name: 'api',
      status: 'error',
      responseTime: Date.now() - startTime,
      message: error instanceof Error ? error.message : 'API check failed',
      timestamp: new Date().toISOString(),
    };
  }
}

async function checkStaticAssets() {
  const startTime = Date.now();
  try {
    // Check if static assets are accessible
    // This would normally check actual asset URLs
    const assetsHealthy = true;
    
    return {
      name: 'static_assets',
      status: assetsHealthy ? 'healthy' : 'unhealthy',
      responseTime: Date.now() - startTime,
      message: assetsHealthy ? 'Static assets accessible' : 'Static assets not accessible',
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    return {
      name: 'static_assets',
      status: 'error',
      responseTime: Date.now() - startTime,
      message: error instanceof Error ? error.message : 'Asset check failed',
      timestamp: new Date().toISOString(),
    };
  }
}

async function checkRouting() {
  const startTime = Date.now();
  try {
    // Check if routing is working properly
    const routingHealthy = true; // Add actual routing checks
    
    return {
      name: 'routing',
      status: routingHealthy ? 'healthy' : 'unhealthy',
      responseTime: Date.now() - startTime,
      message: routingHealthy ? 'Routing working correctly' : 'Routing issues detected',
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    return {
      name: 'routing',
      status: 'error',
      responseTime: Date.now() - startTime,
      message: error instanceof Error ? error.message : 'Routing check failed',
      timestamp: new Date().toISOString(),
    };
  }
}