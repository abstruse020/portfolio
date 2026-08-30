## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Build

```
npm run build
```

Output goes to `dist/` folder.

## Deployment (GitHub Pages)

### Setup (one-time)

1. Enable GitHub Pages in repo Settings → Pages → Source: **GitHub Actions**

2. Update `astro.config.mjs`:
   ```js
   site: 'https://<username>.github.io',
   base: '/<repo-name>',
   ```

### Deploy

Pushing to `main` branch triggers automatic deployment via `.github/workflows/deploy.yml`.

```bash
git add -A
git commit -m "Your message"
git push
```

Check deployment status at: `https://github.com/<username>/portfolio/actions`

Site will be live at: `https://abstruse020.github.io/portfolio/`

### Manual Build

```bash
npm run build
npx serve dist
```

## Content Management

### Adding Publications

Create `.md` file in `src/content/publications/`:

```markdown
---
title: "Paper Title"
authors: "Author 1, Author 2"
journal: "Journal Name"
year: 2024
doi: "10.xxxx/xxxxx"
url: "https://optional-pdf-url"
tags: ["tag1", "tag2"]
order: 1
---

Abstract content here...
```

**Important:** `authors` must be a single comma-separated string, not multiple quoted strings.

### Adding Projects

Create `.md` file in `src/content/projects/`:

```markdown
---
title: "Project Name"
description: "Short description"
tags: ["tech1", "tech2"]
github: "https://github.com/user/repo"
live: "https://live-url.com"
featured: true
order: 1
---

Project details...
```

### Adding Skills

Create `.md` file in `src/content/skills/`:

```markdown
---
category: "Category Name"
items: ["Skill 1", "Skill 2"]
icon: "code"
order: 1
---
```

### Changing Color Palette

Edit line 2 in `src/styles/global.css`:

```css
@import "./palettes/earthy-warm.css";
```

Available palettes in `src/styles/palettes/`:
- `earthy-warm.css` (Terracotta + Olive)
- `cool-contrast.css` (Navy + Teal)
- `neutral.css` (Off-White + Grey)
- `terracotta.css`
- `navey-blue.css`
- `turquoise.css`
- `olive-green.css`
- `charcoal-gray.css`
- `chocolate-brown.css`

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
