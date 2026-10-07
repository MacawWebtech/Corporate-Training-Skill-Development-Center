# VioraQuest JPG image code method

This project uses JPG files directly from HTML. There is no browser upload button.

## Hero/background images
Put your JPG in `assets/images/hero-backgrounds/`, then open the matching HTML page and change only the `src` value on `<img class="hero-bg-image">`.

Example:
```html
<img class="hero-bg-image" src="../assets/images/hero-backgrounds/about.jpg" alt="About background">
```
If you rename the file to `my-about.jpg`, change it to:
```html
<img class="hero-bg-image" src="../assets/images/hero-backgrounds/my-about.jpg" alt="About background">
```

## Normal content images
Put/replace JPG files under `assets/images/content/`. Normal images are also referenced with standard HTML `<img src="...jpg">` code, so filenames can be changed directly in HTML.

## Main hero filenames
- Home: `home.jpg`
- Programs: `programs.jpg`
- Approach: `approach.jpg`
- Clients: `clients.jpg`
- Custom: `custom.jpg`
- About: `about.jpg`
- Insights: `insights.jpg`
- Contact: `contact.jpg`
