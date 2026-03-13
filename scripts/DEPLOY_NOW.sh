#!/bin/bash

echo "🚀 Deploying Wimbo.ai Application to Vercel..."
echo "📍 Directory: $(pwd)"
echo "📋 Files in directory:"

# List files to verify we're in the right place
ls -la

echo ""
echo "🔨 Building application..."
npm run build

echo ""
echo "📦 Build complete! Checking .next directory:"
if [ -d ".next" ]; then
    echo "✅ .next directory exists"
    ls -la .next/
else
    echo "❌ .next directory not found"
    exit 1
fi

echo ""
echo "🌐 Deploying to Vercel..."
echo "Note: If this asks for authentication, please follow the prompts"
echo "Note: Your deployment URL will be shown at the end"

# Deploy with verbose output
npx vercel --prod --debug

echo ""
echo "✅ Deployment process completed!"
echo "📱 Check your Vercel dashboard for the deployment URL"
echo "🎯 Test your application at the provided URL"
