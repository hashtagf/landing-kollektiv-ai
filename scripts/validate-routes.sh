#!/bin/bash

# Routing Validation Script
# Validates all routes are accessible after deployment

set -e

if [ -z "$1" ]; then
    echo "Usage: $0 <deployment-url>"
    exit 1
fi

DEPLOYMENT_URL=$1
FAILED_ROUTES=()
TIMEOUT=10
USER_AGENT="Kollektiv-Route-Validator/1.0"

# Remove trailing slash from URL
DEPLOYMENT_URL=${DEPLOYMENT_URL%/}

echo "🔍 Starting route validation for: $DEPLOYMENT_URL"
echo "================================================"

# Function to test a route
test_route() {
    local route=$1
    local expected_status=${2:-200}
    local description=$3
    
    echo -n "Testing $route ($description)... "
    
    # Make request and capture both status and response
    response=$(curl -s -w "%{http_code}" \
        --max-time $TIMEOUT \
        --user-agent "$USER_AGENT" \
        --fail-with-body \
        "$DEPLOYMENT_URL$route" 2>/dev/null || echo "000")
    
    status=${response: -3}
    
    if [ "$status" = "$expected_status" ]; then
        echo "✅ PASS ($status)"
        return 0
    else
        echo "❌ FAIL (Expected: $expected_status, Got: $status)"
        FAILED_ROUTES+=("$route (Expected: $expected_status, Got: $status)")
        return 1
    fi
}

# Function to test route content
test_route_content() {
    local route=$1
    local expected_content=$2
    local description=$3
    
    echo -n "Testing $route content ($description)... "
    
    response=$(curl -s --max-time $TIMEOUT \
        --user-agent "$USER_AGENT" \
        "$DEPLOYMENT_URL$route" 2>/dev/null || echo "")
    
    if echo "$response" | grep -q "$expected_content"; then
        echo "✅ PASS (Content found)"
        return 0
    else
        echo "❌ FAIL (Content not found: $expected_content)"
        FAILED_ROUTES+=("$route (Content validation failed)")
        return 1
    fi
}

# Function to test API endpoints
test_api_route() {
    local route=$1
    local method=${2:-GET}
    local expected_status=${3:-200}
    local description=$4
    
    echo -n "Testing API $route [$method] ($description)... "
    
    status=$(curl -s -w "%{http_code}" -o /dev/null \
        --max-time $TIMEOUT \
        --user-agent "$USER_AGENT" \
        -X "$method" \
        "$DEPLOYMENT_URL$route" 2>/dev/null || echo "000")
    
    if [ "$status" = "$expected_status" ]; then
        echo "✅ PASS ($status)"
        return 0
    else
        echo "❌ FAIL (Expected: $expected_status, Got: $status)"
        FAILED_ROUTES+=("API $route [$method] (Expected: $expected_status, Got: $status)")
        return 1
    fi
}

# Core Routes Testing
echo "📄 Testing Core Routes"
echo "---------------------"
test_route "/" 200 "Home page"
test_route_content "/" "Kollektiv" "Home page contains brand name"

# Static Assets Testing
echo ""
echo "🖼️  Testing Static Assets"
echo "------------------------"
test_route "/favicon.ico" 200 "Favicon"
test_route "/_next/static/css" 200 "Next.js CSS assets" || test_route "/_next/static" 200 "Next.js static assets"

# API Routes Testing
echo ""
echo "🔌 Testing API Endpoints"
echo "-----------------------"
test_api_route "/api/health" GET 200 "Health check endpoint" || echo "⚠️  Health endpoint not found (optional)"
test_api_route "/api/contact" POST 400 "Contact form (no body)" || echo "ℹ️  Contact API may not be implemented"

# SEO and Meta Testing
echo ""
echo "🔍 Testing SEO Elements"
echo "---------------------"
test_route_content "/" "<title>" "Page has title tag"
test_route_content "/" '<meta name="description"' "Page has meta description"
test_route_content "/" '<meta property="og:' "Page has Open Graph tags"

# Performance Testing
echo ""
echo "⚡ Testing Performance Headers"
echo "----------------------------"
headers=$(curl -s -I --max-time $TIMEOUT "$DEPLOYMENT_URL/" 2>/dev/null || echo "")

if echo "$headers" | grep -qi "cache-control"; then
    echo "✅ Cache-Control header present"
else
    echo "⚠️  Cache-Control header missing"
fi

if echo "$headers" | grep -qi "content-encoding"; then
    echo "✅ Content compression enabled"
else
    echo "⚠️  Content compression not detected"
fi

# Security Headers Testing
echo ""
echo "🔒 Testing Security Headers"
echo "--------------------------"
if echo "$headers" | grep -qi "x-frame-options\|content-security-policy"; then
    echo "✅ Security headers detected"
else
    echo "⚠️  Security headers missing (consider adding)"
fi

# 404 Error Page Testing
echo ""
echo "🚫 Testing Error Handling"
echo "------------------------"
test_route "/nonexistent-page-12345" 404 "404 error page"

# Mobile-friendly Testing
echo ""
echo "📱 Testing Mobile Responsiveness"
echo "-------------------------------"
mobile_headers="User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)"
mobile_response=$(curl -s -H "$mobile_headers" --max-time $TIMEOUT "$DEPLOYMENT_URL/" 2>/dev/null || echo "")

if echo "$mobile_response" | grep -qi 'viewport.*width=device-width'; then
    echo "✅ Mobile viewport meta tag present"
else
    echo "⚠️  Mobile viewport meta tag missing"
fi

# Summary
echo ""
echo "📊 Validation Summary"
echo "===================="

if [ ${#FAILED_ROUTES[@]} -eq 0 ]; then
    echo "🎉 ALL ROUTES VALIDATED SUCCESSFULLY!"
    echo ""
    echo "✅ All core routes are accessible"
    echo "✅ Static assets are loading"
    echo "✅ SEO elements are present"
    echo "✅ Error handling works correctly"
    echo ""
    echo "Deployment is ready for production traffic! 🚀"
    exit 0
else
    echo "❌ VALIDATION FAILED - ${#FAILED_ROUTES[@]} issue(s) found:"
    echo ""
    for route in "${FAILED_ROUTES[@]}"; do
        echo "   • $route"
    done
    echo ""
    echo "🔧 Please fix these issues before proceeding with deployment."
    exit 1
fi