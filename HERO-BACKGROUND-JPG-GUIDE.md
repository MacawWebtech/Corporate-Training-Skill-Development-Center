# Hero Background JPG Guide

This project now uses **JPG files only** for the animated hero backgrounds.

## JPG files

Replace these files with your own images while keeping the same filename:

- `assets/images/hero-backgrounds/home.jpg`
- `assets/images/hero-backgrounds/programs.jpg`
- `assets/images/hero-backgrounds/approach.jpg`
- `assets/images/hero-backgrounds/clients.jpg`
- `assets/images/hero-backgrounds/custom.jpg`
- `assets/images/hero-backgrounds/about.jpg`
- `assets/images/hero-backgrounds/insights.jpg`
- `assets/images/hero-backgrounds/contact.jpg`

Recommended image size: **1920 × 1080 JPG**.

## Upload/preview your own JPG in the browser

The public site does not show an upload button. For development/testing, add `?hero-edit=1` to the page URL.

Examples:

- `about.html?hero-edit=1`
- `programs.html?hero-edit=1`
- `contact.html?hero-edit=1`

A small **Upload Hero JPG** button will appear in the hero section. Select a `.jpg`/`.jpeg` file and it will immediately become that page's hero background in your browser.

The preview is stored only in that browser using localStorage. Browsers cannot directly overwrite files in a static website project. To make the selected image permanent for GitHub/hosting, copy your JPG into `assets/images/hero-backgrounds/` and keep the matching filename listed above.
