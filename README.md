# Doran Landing Page

Pre-launch waitlist landing page.

## Local Development

Open `index.html` in a browser. No build step needed.

For live reload during development:
```bash
npx serve landing/
```

## Before Deploy

1. Replace `MAILCHIMP_FORM_ACTION_URL` in `index.html` with actual Mailchimp form action URL
2. Replace placeholder illustrations in `images/` with actual brand assets
3. Set up Plausible analytics script (or chosen analytics)
4. Verify OG image displays correctly in KakaoTalk share preview

## Deploy

Static files — deploy to any static host:
- Coolify (static site) on existing Hetzner VPS
- Or Cloudflare Pages / Netlify / Vercel (free tier)

## Post-Launch Migration

When main product launches, either:
- 301-redirect this page to the main app
- Absorb into Next.js app as the `/` route
