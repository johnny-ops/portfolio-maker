# Deployment Guide

This guide covers deploying Portfolio Maker to various hosting platforms.

## Pre-Deployment Checklist

- [ ] All features tested locally
- [ ] Firebase configured (if using cloud features)
- [ ] Environment variables set
- [ ] Build runs successfully (`npm run build`)
- [ ] No console errors
- [ ] Responsive design tested
- [ ] All templates working

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Deploy to Vercel (Recommended)

### Method 1: Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel --prod
```

4. Add environment variables in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add all `REACT_APP_FIREBASE_*` variables

### Method 2: GitHub Integration

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Configure:
   - Framework Preset: Create React App
   - Build Command: `npm run build`
   - Output Directory: `build`
6. Add environment variables
7. Click "Deploy"

**Vercel Benefits:**
- Automatic deployments on git push
- Free SSL certificate
- Global CDN
- Serverless functions support

## Deploy to Netlify

### Method 1: Drag and Drop

1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `build` folder to Netlify
4. Site deploys instantly

### Method 2: Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login:
```bash
netlify login
```

3. Initialize:
```bash
netlify init
```

4. Deploy:
```bash
netlify deploy --prod
```

### Method 3: GitHub Integration

1. Push to GitHub
2. Go to Netlify dashboard
3. Click "New site from Git"
4. Connect GitHub repository
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `build`
6. Add environment variables
7. Click "Deploy site"

**Netlify Benefits:**
- Form handling
- Split testing
- Deploy previews
- Free SSL

## Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/portfolio-maker",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

4. Enable GitHub Pages:
   - Go to repository Settings
   - Pages section
   - Source: gh-pages branch
   - Save

**Note**: Firebase features require additional configuration for GitHub Pages.

## Deploy to Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login:
```bash
firebase login
```

3. Initialize:
```bash
firebase init hosting
```

4. Configure:
   - Public directory: `build`
   - Single-page app: Yes
   - GitHub integration: Optional

5. Build and deploy:
```bash
npm run build
firebase deploy
```

**Firebase Hosting Benefits:**
- Integrated with Firebase services
- Fast global CDN
- Free SSL
- Easy rollbacks

## Deploy to AWS Amplify

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click "New app" → "Host web app"
3. Connect GitHub repository
4. Configure build settings:
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: build
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```
5. Add environment variables
6. Deploy

## Deploy to Heroku

1. Create `static.json` in project root:
```json
{
  "root": "build/",
  "routes": {
    "/**": "index.html"
  }
}
```

2. Add buildpack:
```bash
heroku create your-app-name
heroku buildpacks:set mars/create-react-app
```

3. Deploy:
```bash
git push heroku main
```

## Environment Variables

For all platforms, add these environment variables:

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

## Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS

### Firebase Hosting
```bash
firebase hosting:channel:deploy production --domain your-domain.com
```

## SSL Certificates

All recommended platforms provide free SSL certificates automatically:
- Vercel: Automatic
- Netlify: Automatic
- Firebase: Automatic
- AWS Amplify: Automatic

## Performance Optimization

### Before Deployment

1. **Optimize Images**:
```bash
npm install --save-dev imagemin imagemin-mozjpeg imagemin-pngquant
```

2. **Enable Compression**:
   - Most platforms enable gzip automatically
   - Check response headers

3. **Lazy Loading**:
   - Images load on demand
   - Code splitting enabled by default

4. **Caching**:
   - Service worker caches assets
   - Browser caching configured

### After Deployment

1. Test with Lighthouse
2. Check Core Web Vitals
3. Test on real devices
4. Monitor performance

## Monitoring

### Vercel Analytics
```bash
npm install @vercel/analytics
```

Add to `src/index.js`:
```javascript
import { Analytics } from '@vercel/analytics/react';

// In your render:
<Analytics />
```

### Google Analytics

Add to `public/index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm install
    
    - name: Build
      run: npm run build
      env:
        REACT_APP_FIREBASE_API_KEY: ${{ secrets.FIREBASE_API_KEY }}
        REACT_APP_FIREBASE_AUTH_DOMAIN: ${{ secrets.FIREBASE_AUTH_DOMAIN }}
        REACT_APP_FIREBASE_PROJECT_ID: ${{ secrets.FIREBASE_PROJECT_ID }}
        REACT_APP_FIREBASE_STORAGE_BUCKET: ${{ secrets.FIREBASE_STORAGE_BUCKET }}
        REACT_APP_FIREBASE_MESSAGING_SENDER_ID: ${{ secrets.FIREBASE_MESSAGING_SENDER_ID }}
        REACT_APP_FIREBASE_APP_ID: ${{ secrets.FIREBASE_APP_ID }}
    
    - name: Deploy to Firebase
      uses: w9jds/firebase-action@master
      with:
        args: deploy --only hosting
      env:
        FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }}
```

## Rollback

### Vercel
```bash
vercel rollback
```

### Netlify
- Go to Deploys
- Click on previous deploy
- Click "Publish deploy"

### Firebase
```bash
firebase hosting:rollback
```

## Troubleshooting Deployment

### Build Fails
- Check Node.js version (use 18+)
- Clear node_modules and reinstall
- Check for TypeScript errors
- Review build logs

### Environment Variables Not Working
- Prefix with `REACT_APP_`
- Restart development server
- Rebuild after adding variables
- Check platform-specific syntax

### Firebase Not Working in Production
- Verify environment variables are set
- Check Firebase project is active
- Review security rules
- Check browser console for errors

### Routing Issues (404 on refresh)
- Configure redirects for SPA
- Most platforms handle this automatically
- Check platform documentation

## Cost Considerations

### Free Tiers

**Vercel:**
- Unlimited personal projects
- 100GB bandwidth/month
- Serverless functions included

**Netlify:**
- 100GB bandwidth/month
- 300 build minutes/month
- Forms: 100 submissions/month

**Firebase:**
- 10GB storage
- 360MB/day downloads
- 50K reads/day (Firestore)
- 20K writes/day (Firestore)

**GitHub Pages:**
- 100GB bandwidth/month
- 100GB storage
- Completely free

### Scaling

For high traffic:
- Upgrade to paid plans
- Use CDN
- Optimize assets
- Enable caching
- Consider serverless architecture

## Security Best Practices

1. **Never commit `.env` file**
2. **Use environment variables for secrets**
3. **Enable Firebase security rules**
4. **Use HTTPS only**
5. **Keep dependencies updated**
6. **Review Firebase usage regularly**
7. **Set up billing alerts**

## Post-Deployment

1. **Test thoroughly**:
   - All features work
   - Authentication works
   - Data saves correctly
   - Exports work
   - Mobile responsive

2. **Set up monitoring**:
   - Error tracking (Sentry)
   - Analytics (Google Analytics)
   - Performance monitoring

3. **Share your portfolio**:
   - Add to LinkedIn
   - Share on Twitter
   - Include in resume
   - Add to email signature

## Support

For deployment issues:
- Check platform documentation
- Review build logs
- Test locally first
- Open GitHub issue if app-specific

---

**Recommended Platform**: Vercel or Netlify for ease of use and great free tiers.

**For Firebase Users**: Firebase Hosting for seamless integration.

**For GitHub Users**: GitHub Pages for simplicity.
