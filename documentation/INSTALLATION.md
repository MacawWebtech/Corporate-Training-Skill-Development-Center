# Installation & Customization Guide

## 1. Installation
No build step required. This is a pure HTML/CSS/JS template.

1. Copy the entire `template-corporate-training` folder to your web server or local project.
2. Open `pages/index.html` in a browser to preview.

## 2. Theme & Direction
- Theme toggle (sun/moon icon) switches light/dark and stores preference in localStorage.
- RTL toggle switches document direction. Useful for Arabic/Hebrew demos.

## 3. Replacing Placeholder Images
Search for class `image-box`. These are deliberately empty containers with dashed borders.

Example replacement:
```html
<div class="image-box has-image" style="min-height: 400px;">
  <img src="../assets/images/your-photo.webp" alt="Team training session" style="width:100%;height:100%;object-fit:cover;">
</div>
```

## 4. Forms
All forms with `data-validate` have client-side validation. For production, connect to:
- Formspree
- Netlify Forms
- Your own backend

## 5. Dashboard
The dashboard is a static demonstration of the required features:
- Enroll employees by batch/date/department
- Track attendance & module completion
- Generate certificates
- View calendar & seat availability

Connect to your real LMS/API for production use.

## 6. SEO Checklist
- Unique title & meta description on every page
- Proper heading hierarchy (one H1)
- Structured data on home page
- Add your sitemap.xml and robots.txt for production

## 7. Performance Tips
- Convert images to WebP
- Minify CSS/JS for production
- Host fonts locally if needed
```

Finally, list all files to confirm.