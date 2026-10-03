# Itoshiko Nurahman - Portfolio

Personal portfolio built with [Tailwind CSS 3](https://tailwindcss.com/) in a neo-brutalist style: thick black borders, hard offset shadows and flat colors (lime, pink, violet).

It is a static site (plain HTML, Tailwind CSS and a little vanilla JavaScript), so it works on GitHub Pages as-is.

## Sections
Hero with quick facts, stats, skills, about and education, what I do, featured projects carousel, training, achievements, seminars, experience and committees, design works and photo galleries (with a lightbox) and a contact section.

## Develop
```bash
npm install
npm run css     # watch and rebuild src/output.css while editing
npm run build   # one-off minified build
```
Then open `index.html` through any static server (fonts are self-hosted in `dist/fonts`, and browsers block them on `file://`), e.g. `python3 -m http.server`.

## Structure
- `index.html` - all content and Tailwind classes
- `src/input.css` - Tailwind entry, font-face and a few component classes (`.btn`, `.icon-btn`, `.chip`...)
- `src/output.css` - compiled CSS (committed so GitHub Pages can serve it)
- `tailwind.config.js` - colors, fonts and the hard-shadow tokens
- `dist/js/script.js` - mobile menu, projects carousel and image lightbox
- `dist/img`, `dist/fonts` - images and self-hosted Archivo Black / Space Mono

## Editing content
- Projects: each `<article>` inside `[data-track]` is one slide. Point its "View on GitHub" link at the project's repo or live demo.
- Photo: replace `dist/img/hero.jpg`.
- Galleries: drop images into `dist/img/design` or `dist/img/gallery` and copy one `<li>` in the matching section of `index.html`.
