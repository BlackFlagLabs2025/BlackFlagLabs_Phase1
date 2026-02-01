# Vercel Deployment Guide - Black Flag Labs

## Prerequisites

Before deploying, you need:

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Web3Forms Access Key**: Get free key at [web3forms.com](https://web3forms.com)

---

## Step 1: Get Web3Forms Access Key

1. Go to https://web3forms.com
2. Enter your email: `blackflaglabs@outlook.com`
3. Click "Get Access Key"
4. Check your email and copy the access key
5. Save it for Step 3

---

## Step 2: Install Dependencies & Test Build

Run these commands locally to verify everything works:

```bash
# Install all dependencies (including terser)
npm install

# Test the build
npm run build

# Preview the build locally
npm run preview
```

**Expected output:**
```
✓ 430 modules transformed
✓ built in 3.5s
dist/index.html  X.XX kB
```

If build fails, check that:
- `terser` is in `package.json` devDependencies
- No TypeScript errors
- All imports are valid

---

## Step 3: Deploy to Vercel

### Option A: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - Project name? black-flag-labs (or your preference)
# - Directory? ./ (press Enter)
# - Override settings? No
```

### Option B: Deploy via Vercel Dashboard

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your Git repository (GitHub/GitLab/Bitbucket)
3. Configure project:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

---

## Step 4: Add Environment Variables in Vercel

**CRITICAL:** Your contact form will NOT work without this step!

1. Go to your project in Vercel Dashboard
2. Click **Settings** → **Environment Variables**
3. Add this variable:

| Key | Value | Environment |
|-----|-------|-------------|
| `VITE_WEB3FORMS_ACCESS_KEY` | `your_actual_access_key_here` | Production, Preview, Development |

4. Click **Save**
5. **Redeploy** your project to apply the environment variable

---

## Step 5: Verify Deployment

After deployment completes:

1. **Visit your site**: `https://your-project.vercel.app`
2. **Test contact form**:
   - Fill out all required fields
   - Click "Send Message"
   - You should see: "Message sent successfully!"
   - Check `blackflaglabs@outlook.com` for the email
3. **Test Upwork CTAs**:
   - Click "Hire me on Upwork" buttons
   - Should open: https://www.upwork.com/freelancers/~01892e2749c5f2bca3
4. **Check all pages**:
   - Home page loads ✓
   - Case studies load (/work/nexus-sentinel, etc.) ✓
   - Privacy/Terms pages load ✓
   - No console errors ✓

---

## Build Configuration

### Vercel Settings (vercel.json - Optional)

If you need custom configuration, create `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This ensures React Router works correctly.

---

## Troubleshooting

### Build Fails on Vercel

**Error:** `terser not found`
- **Fix:** Run `npm install` locally and commit `package-lock.json`

**Error:** `Module not found`
- **Fix:** Check all import paths are correct (case-sensitive on Linux)

### Contact Form Doesn't Work

**Error:** Form submits but no email received
- **Fix:** Check `VITE_WEB3FORMS_ACCESS_KEY` is set in Vercel environment variables
- **Fix:** Redeploy after adding environment variable

**Error:** "Failed to send message" alert
- **Fix:** Check browser console for errors
- **Fix:** Verify Web3Forms access key is valid
- **Fix:** Check network tab for failed API calls

### Analytics Not Working

- Analytics are OPTIONAL for Phase 1
- Leave analytics env vars empty unless you need them
- Site will work perfectly without analytics

---

## Performance Optimization

### After Deployment

1. **Test Lighthouse Score**:
   - Open Chrome DevTools
   - Run Lighthouse audit
   - Target: 90+ performance score

2. **Optimize Images** (if needed):
   - Logo is 805KB - consider optimizing with TinyPNG
   - Target: <200KB for hero images

3. **Enable Vercel Speed Insights** (Optional):
   - Go to Vercel Dashboard > Your Project > Analytics
   - Enable Speed Insights
   - Free tier included

---

## Custom Domain (Optional)

1. Go to Vercel Dashboard → Your Project → **Settings** → **Domains**
2. Add your custom domain: `blackflaglabs.com`
3. Follow DNS configuration instructions
4. Update canonical URL in `index.html`:
   ```html
   <link rel="canonical" href="https://blackflaglabs.com" />
   ```

---

## Monitoring & Updates

### After successful deployment:

- [ ] Test contact form submission
- [ ] Verify email arrives at `blackflaglabs@outlook.com`
- [ ] Test all Upwork CTAs
- [ ] Check mobile responsiveness
- [ ] Monitor Vercel deployment logs
- [ ] Set up email filters for contact form submissions

### Future Updates:

```bash
# Make changes locally
git add .
git commit -m "Update content"
git push

# Vercel auto-deploys on push (if connected to Git)
# Or manually deploy: vercel --prod
```

---

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Web3Forms Docs**: https://docs.web3forms.com
- **Vite Docs**: https://vitejs.dev

---

**Deployment Checklist:**
- [ ] Dependencies installed (`npm install`)
- [ ] Build passes locally (`npm run build`)
- [ ] Web3Forms access key obtained
- [ ] Deployed to Vercel
- [ ] Environment variable added
- [ ] Site redeployed after adding env var
- [ ] Contact form tested end-to-end
- [ ] All Upwork CTAs tested
- [ ] No console errors on production site
