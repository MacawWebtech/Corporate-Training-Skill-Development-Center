# VioraQuest — Corporate Training & Skill Development Center Template

A modern, fully responsive HTML template for corporate training providers, L&D consultancies, and skill development centers.

## Features

- **Two distinct Home page designs** (dropdown in navigation)
- **HR / Training Manager Dashboard** with:
  - Enrollment by batch, date, department
  - Attendance & module completion tracking
  - Certificate generation
  - Training calendar with seat availability
- **Three-color system**: Black, White, Teal accent (strictly applied including icons)
- Dark / Light mode with system preference detection
- Full RTL support
- Unique layout designs per page (no repetitive square cards)
- Image placeholder boxes on all major headers for easy image replacement
- Full-width CTA section on every page
- Motion / reveal-on-scroll effects
- Mobile-first responsive design
- SEO-ready (meta, structured data, semantic HTML)
- Form validation
- Accessible (skip links, ARIA, keyboard friendly)

## Pages Included

### Public
- `pages/index.html` — Home Style 1
- `pages/home-2.html` — Home Style 2
- `pages/programs.html` — Program catalog
- `pages/program-details.html` — Single program deep-dive
- `pages/methodology.html` — Training approach
- `pages/clients.html` — Clients & impact
- `pages/customized.html` — Custom training
- `pages/about.html` — About / Team
- `pages/blog.html` — Insights listing
- `pages/contact.html` — Contact + form + map placeholder
- `pages/pricing.html` — Pricing tiers
- `pages/login.html` — HR Portal login
- `pages/404.html`
- `pages/coming-soon.html`

### Dashboard
- `dashboard/index.html` — Full HR training manager dashboard

## File Structure

```
template-corporate-training/
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   ├── dark-mode.css
│   │   └── rtl.css
│   ├── js/
│   │   ├── main.js
│   │   ├── dashboard.js
│   │   └── plugins/
│   ├── images/
│   └── fonts/
├── pages/
├── dashboard/
├── documentation/
└── README.md
```

## Quick Start

1. Open any HTML file in `pages/` in a modern browser.
2. For the dashboard, open `dashboard/index.html` (or go via Login page).
3. Replace image placeholders (`.image-box` elements) with your own images.
4. Update content, colors (CSS variables in `style.css`), and contact details.

## Customization

### Colors (Three Color Rule)
Edit CSS variables in `assets/css/style.css`:

```css
--color-black: #0a0a0a;
--color-white: #ffffff;
--color-accent: #0d9488; /* Teal */
```

### Fonts
Currently using Inter + Playfair Display (Google Fonts). Change the link in each HTML head and the CSS variables.

### Adding Images
Replace the content inside `.image-box` divs or add `<img>` tags. The dashed border indicates upload areas.

## Browser Support
Chrome, Firefox, Safari, Edge (latest two versions).

## Credits
- Google Fonts (Inter, Playfair Display)
- Feather-style icons (inline SVG)

## License
Use freely for commercial and personal projects. Attribution appreciated but not required.

---

Built for modern corporate learning experiences.
```