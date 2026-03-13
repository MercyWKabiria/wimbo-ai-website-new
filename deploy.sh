#!/bin/bash

echo "🚀 Deploying Wimbo.ai Application..."

# Step 1: Install Vercel CLI if not installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Step 2: Build the application
echo "🔨 Building application..."
npm run build

# Step 3: Deploy to Vercel
echo "🌐 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"
echo "📱 Check your Vercel dashboard for the deployment URL"
