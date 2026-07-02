# New Pages Guide

Three new pages have been added to the site. Currently they are static pages that work with your single-page app. To fully enable routing, you have two options:

## Option 1: Use a Router Library (Recommended)

Install React Router:
```bash
npm install react-router-dom
```

Then update `src/main.jsx` to use React Router.

## Option 2: Manual Routing (Current Setup)

Pages are available at:
- `/careers` - Career page with Marketing Intern job posting
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service

Links are set up in the Footer component to direct to these pages.

---

## Pages Created

### 1. Career Page (`src/pages/Career.jsx`)

**Features:**
- Job listing for Marketing Intern position
- Full job details including:
  - About the job
  - Company description
  - Role description
  - Qualifications list
  - Apply button (links to: careers@thirsttrapstudios.com)

**Content:**
- Full-time remote position based in India
- Positioned for AI marketing & DTC brand growth
- Covers all provided job description details

**Styling:**
- Consistent with site design system
- Responsive layout (mobile-friendly)
- Professional, clean presentation

### 2. Privacy Page (`src/pages/Privacy.jsx`)

**Sections:**
1. Information We Collect
2. How We Use Your Information
3. Data Security
4. Third-Party Links
5. Cookies (section included)
6. Your Rights
7. Changes to This Policy
8. Contact Us

**Contact Email:** privacy@thirsttrapstudios.com

### 3. Terms of Service Page (`src/pages/Terms.jsx`)

**Sections:**
1. Acceptance of Terms
2. Use License
3. Disclaimer
4. Limitations
5. Accuracy of Materials
6. Links
7. Modifications
8. Governing Law (India)
9. Contact Us

**Contact Email:** legal@thirsttrapstudios.com

---

## Footer Updates

Footer has been updated to:
- ✅ Remove "Twitter" link
- ✅ Remove "Cookies" link
- ✅ Add real Instagram link: https://www.instagram.com/thirst.trap.studios/
- ✅ Add real LinkedIn link: https://www.linkedin.com/company/thirst-trap-studios/
- ✅ Add "Careers" link (points to careers page)
- ✅ Update "Privacy" and "Terms" to link to new pages

---

## Email Contact Points

The pages have the following email contacts configured:
- `careers@thirsttrapstudios.com` - For job applications
- `privacy@thirsttrapstudios.com` - For privacy inquiries
- `legal@thirsttrapstudios.com` - For legal/terms inquiries

Update these email addresses in the respective JSX files if needed.

---

## Styling

All pages use:
- Consistent design system (colors, typography, spacing)
- Responsive layouts
- Same header/footer structure
- Professional brutalist aesthetic matching main site

CSS files:
- `src/pages/Career.css` - Career page specific styles
- `src/pages/Legal.css` - Shared styles for Privacy and Terms pages

---

## Next Steps

To fully enable routing and make pages accessible at dedicated URLs:

1. Install React Router: `npm install react-router-dom`
2. Update `src/main.jsx` to set up routes
3. Update Nav links to use the router
4. Then pages will be at `/careers`, `/privacy`, `/terms`

For now, pages are available but require manual navigation implementation.
