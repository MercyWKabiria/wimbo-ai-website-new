# Wimbo.ai Landing Page - Deployment Guide

## 🚀 Deployment Options

### 1. Vercel (Recommended)
**Fastest deployment with zero configuration**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# For production deployment
vercel --prod
```

**Environment Variables (if needed):**
- `NEXT_PUBLIC_API_URL` (if you add backend API)
- `NEXT_PUBLIC_ANALYTICS_ID` (Google Analytics)

---

### 2. Netlify
**Great for static sites with continuous deployment**

```bash
# Build the project
npm run build

# Deploy to Netlify
npx netlify-cli deploy --prod --dir=.next
```

**netlify.toml (create this file):**
```toml
[build]
  publish = ".next"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### 3. GitHub Pages
**Free hosting for static sites**

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"export": "next export",
"deploy": "next export && gh-pages -d out"

# Deploy
npm run deploy
```

**next.config.js update:**
```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```

---

### 4. AWS S3 + CloudFront
**Enterprise-grade hosting**

```bash
# Install AWS CLI
# Configure AWS credentials
aws configure

# Deploy to S3
aws s3 sync .next s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

---

### 5. Docker Deployment
**Containerized deployment**

```dockerfile
# Dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image, copy all files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

```bash
# Build and run Docker
docker build -t wimbo-ai-landing .
docker run -p 3000:3000 wimbo-ai-landing
```

---

## 🎯 Quick Start Deployment (Vercel)

### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
vercel
```

### Step 4: Follow the prompts
- Link to existing Vercel project or create new
- Confirm settings
- Deploy to preview URL
- Test the preview URL
- Deploy to production with `vercel --prod`

---

## 🔧 Pre-Deployment Checklist

### ✅ Build Verification
```bash
# Run build successfully
npm run build

# Check build output
ls -la .next/
```

### ✅ Environment Setup
- [ ] Environment variables configured
- [ ] Domain name ready (if custom domain)
- [ ] SSL certificate (if needed)
- [ ] Analytics/monitoring setup

### ✅ Performance Check
```bash
# Run Lighthouse audit
npm run lighthouse

# Check bundle size
npm run analyze
```

### ✅ Final Testing
- [ ] Test production build locally: `npm run start`
- [ ] Test on multiple browsers
- [ ] Test mobile responsiveness
- [ ] Verify all CTAs work
- [ ] Check forms and interactions

---

## 📊 Post-Deployment Monitoring

### Performance Monitoring
```bash
# Add to _app.tsx or layout.tsx
import { useEffect } from 'react'

export function reportWebVitals(metric) {
  console.log(metric)
  // Send to analytics service
}
```

### Error Tracking
- [ ] Set up error monitoring (Sentry, etc.)
- [ ] Configure performance monitoring
- [ ] Set up uptime monitoring

### Analytics Setup
```javascript
// Add Google Analytics to layout.tsx
import Script from 'next/script'

<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

---

## 🌍 Domain Configuration

### Custom Domain (Vercel)
```bash
# Add custom domain
vercel domains add yourdomain.com

# Verify DNS settings
vercel domains ls
```

### DNS Records
```
A Record: @ -> 76.76.21.21
CNAME: www -> vercel.app
```

---

## 🔄 CI/CD Pipeline

### GitHub Actions (Vercel)
```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

---

## 🚨 Troubleshooting

### Common Issues

#### 1. Build Fails
```bash
# Clear cache
rm -rf .next
npm run build

# Update dependencies
npm update
npm run build
```

#### 2. Images Not Loading
- Check `next.config.js` image domains
- Use `unoptimized: true` for static export
- Verify image paths are correct

#### 3. CSS Issues
- Check Tailwind CSS configuration
- Verify CSS import order
- Check for CSS conflicts

#### 4. Route Not Found
- Check `next.config.js` trailingSlash setting
- Verify file structure
- Check for dynamic routes

---

## 📞 Support

### Deployment Help
- **Vercel**: https://vercel.com/docs
- **Netlify**: https://docs.netlify.com/
- **AWS**: https://docs.aws.amazon.com/
- **GitHub Pages**: https://docs.github.com/en/pages

### Monitoring Services
- **Vercel Analytics**: Built-in
- **Google Analytics**: https://analytics.google.com/
- **Sentry**: https://sentry.io/
- **Lighthouse**: https://developers.google.com/web/tools/lighthouse

---

*Last updated: March 2026*
*Ready for deployment: ✅*
