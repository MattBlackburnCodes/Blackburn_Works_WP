# Blackburn Works Launch Checklist

## Domain and Hosting
- Confirm the production domain matches `https://blackburnworks.com`.
- If the final domain is different, update `VITE_SITE_URL`, `public/robots.txt`, and `public/sitemap.xml`.
- Deploy with SPA fallback enabled. `vercel.json` is included for Vercel hosting.
- Confirm SSL is active before submitting the site to search engines.

## Search Setup
- Add the site to Google Search Console.
- Submit `https://blackburnworks.com/sitemap.xml`.
- Inspect these URLs after deployment:
  - `https://blackburnworks.com/`
  - `https://blackburnworks.com/services/website-development`
  - `https://blackburnworks.com/services/it-services`
  - `https://blackburnworks.com/services/powershell-automation`

## Local SEO
- Create or update the Google Business Profile for Blackburn Works LLC.
- Use service-area business settings for Washington, DC, Maryland, and Northern Virginia.
- Add service categories for website design, computer support, and IT services where available.
- Keep the business name, website URL, service area, and contact method consistent everywhere.

## Analytics
- Add Google Analytics or another privacy-friendly analytics provider after the production domain is live.
- Track contact form submissions and service page visits.

## Contact Form
- Send a test inquiry through the live site.
- Confirm Formspree delivers the inquiry email.
- Confirm `service_type` and `support_preference` are included in the submission.
