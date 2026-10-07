# VioraQuest JPG Image Upload Guide

All photographic/content image slots in this project now use real `.jpg` files.

## Hero backgrounds
Located in:
`assets/images/hero-backgrounds/`

Files:
- `home.jpg`
- `programs.jpg`
- `approach.jpg`
- `clients.jpg`
- `custom.jpg`
- `about.jpg`
- `insights.jpg`
- `contact.jpg`

## Content images
Located in:
`assets/images/content/<page-name>/`

There are 50 JPG content-image slots across Home, Home 2, Programs, Program Details, Methodology, About, Customized, and Insights/Blog.

## Upload/preview your own JPG images
Open any normal page with `?image-edit=1` at the end of the URL.

Examples:
- `index.html?image-edit=1`
- `programs.html?image-edit=1`
- `about.html?image-edit=1`
- `blog.html?image-edit=1`

In Image Edit Mode:
- Hero pages show **Upload Hero JPG**.
- Every content image slot shows **Upload JPG** and **Reset**.
- Only JPG/JPEG files are accepted.
- Your selected image is saved in this browser using IndexedDB, so it remains when you refresh on the same browser/device.
- Normal visitors do not see any upload controls.

## Important: permanent deployment
A browser cannot silently overwrite files inside your website source or GitHub repository. The upload feature is for visual editing/preview on your own browser.

To make an uploaded image permanent on GitHub/hosting, replace the matching JPG file inside `assets/images/` with your own JPG using the same filename, then commit/upload the updated project.

Each editable image slot stores its exact target path in `data-image-file`, so you can see which JPG file it corresponds to when editing.
