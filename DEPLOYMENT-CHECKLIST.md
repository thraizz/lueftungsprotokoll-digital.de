# 🚀 Deployment Checklist

Before deploying your SEO-optimized landing page to production, complete these steps:

---

## ✅ **CRITICAL - Before Launch**

### 1. Create Open Graph Image
**Status**: ⚠️ **REQUIRED**

- [ ] Read `public/OG-IMAGE-GUIDE.md`
- [ ] Create `public/og-image.png` (1200×630 px)
- [ ] Use brand colors: Green `#059669`, White background
- [ ] Include: "Lüftungsprotokoll Digital", "Kostenlos & Rechtssicher", key benefits
- [ ] Test with [Open Graph Preview](https://www.opengraph.xyz/)

**Why**: Without this, social media shares won't have a visual preview.

---

### 2. Update Domain in Schema.org
**Status**: ⚠️ **REQUIRED IF** your domain is not `lueftungsprotokoll-digital.de`

If using a different domain, update in `src/components/StructuredData.astro`:

```javascript
// Replace ALL instances of:
'https://lueftungsprotokoll-digital.de'
// With your actual domain:
'https://your-actual-domain.com'
```

---

### 3. Verify Site URL in Astro Config
**Status**: ⚠️ **REQUIRED**

Check `astro.config.mjs` line 7:
```javascript
site: 'https://lueftungsprotokoll-digital.de',
```

Ensure this matches your production domain.

---

## 📋 **RECOMMENDED - Nice to Have**

### 4. Create Additional Icons (Optional but Recommended)
- [ ] `public/apple-touch-icon.png` (180×180 px) - iOS home screen
- [ ] `public/logo.png` (200×200 px minimum) - For Schema.org
- [ ] `public/screenshot.png` (1280×720 px) - App screenshot

---

### 5. Create Legal Pages
**Status**: 📝 **REQUIRED in Germany** (TMG §5)

Create these pages before launch:
- [ ] `/impressum` - Impressum (legally required in Germany)
- [ ] `/datenschutz` - Privacy Policy (DSGVO requirement)
- [ ] `/agb` - Terms of Service

Footer already links to these at `src/components/Footer.astro:32-34`.

---

### 6. Add Social Media Links (Optional)
**Status**: 💡 **RECOMMENDED**

If you have social media profiles, add them to `src/components/StructuredData.astro:14`:

```javascript
sameAs: [
  'https://twitter.com/your-handle',
  'https://linkedin.com/company/your-company',
  // etc.
],
```

This helps with brand verification and SEO.

---

## 🧪 **POST-DEPLOYMENT - Testing**

After deploying, test these URLs:

### SEO & Structured Data
- [ ] [Google Rich Results Test](https://search.google.com/test/rich-results)
  - Should pass: Organization, SoftwareApplication, FAQPage
- [ ] [Schema.org Validator](https://validator.schema.org/)
  - Paste your URL, verify no errors

### Performance
- [ ] [Google PageSpeed Insights](https://pagespeed.web.dev/)
  - Target: 90+ score on mobile and desktop
- [ ] [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### Social Media
- [ ] [Open Graph Preview](https://www.opengraph.xyz/)
  - Verify image shows correctly
- [ ] Share on Twitter/LinkedIn/Facebook
  - Check preview card appearance

### Sitemap & Robots
- [ ] Visit `https://your-domain.com/robots.txt`
  - Should show sitemap location
- [ ] Visit `https://your-domain.com/sitemap-index.xml`
  - Should list all pages

---

## 📊 **POST-LAUNCH - Submit to Search Engines**

### Google Search Console
1. [ ] Add property: https://search.google.com/search-console
2. [ ] Verify ownership (DNS or HTML file)
3. [ ] Submit sitemap: `https://your-domain.com/sitemap-index.xml`
4. [ ] Request indexing for homepage

### Bing Webmaster Tools
1. [ ] Add site: https://www.bing.com/webmasters
2. [ ] Verify ownership
3. [ ] Submit sitemap

---

## 🔧 **OPTIONAL - Advanced Setup**

### Analytics (DSGVO-Compliant)
Choose one:
- [ ] [Plausible Analytics](https://plausible.io/) (€9/month, privacy-focused)
- [ ] [Matomo](https://matomo.org/) (self-hosted, free)
- [ ] [Simple Analytics](https://simpleanalytics.com/) (privacy-focused)

**Avoid**: Google Analytics (complex DSGVO compliance)

### Monitoring
- [ ] Set up uptime monitoring (UptimeRobot, Pingdom)
- [ ] Monitor Core Web Vitals in Search Console
- [ ] Track keyword rankings (free: Google Search Console)

---

## 📁 **File Structure Reference**

```
lueftungsprotokoll-digital.de/
├── public/
│   ├── robots.txt ✅
│   ├── og-image.png ⚠️ TO DO
│   ├── logo.png (optional)
│   ├── apple-touch-icon.png (optional)
│   └── OG-IMAGE-GUIDE.md ✅
├── src/
│   ├── components/
│   │   ├── StructuredData.astro ✅
│   │   ├── Hero.astro ✅
│   │   ├── Features.astro ✅
│   │   ├── HowItWorks.astro ✅
│   │   ├── FreeAndPrivate.astro ✅
│   │   ├── FAQ.astro ✅
│   │   ├── Footer.astro ✅
│   │   └── CTA.astro ✅
│   ├── layouts/
│   │   └── Layout.astro ✅
│   └── pages/
│       └── index.astro ✅
├── astro.config.mjs ✅
├── SEO-IMPROVEMENTS.md ✅
└── DEPLOYMENT-CHECKLIST.md ✅ (this file)
```

---

## 🎯 **Launch Readiness Score**

Count your checkmarks above to calculate readiness:

- **90-100%** → Ready to launch! 🚀
- **70-89%** → Almost there, finish critical items
- **Below 70%** → Complete critical tasks first

---

## 💡 **Quick Deploy Commands**

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to common platforms:

# Netlify
netlify deploy --prod

# Vercel
vercel --prod

# Cloudflare Pages
wrangler pages publish dist
```

---

## 📞 **Need Help?**

- Schema.org Documentation: https://schema.org/
- Astro Documentation: https://docs.astro.build/
- DSGVO Compliance: https://gdpr.eu/

---

**Good luck with your launch! 🎉**
