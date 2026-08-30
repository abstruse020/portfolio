# Portfolio Website Specifications

## Overview

A minimalistic, single-page portfolio website built with Astro, React, and Tailwind CSS. The site features subtle colors, generous negative space, and smooth animations.

**Tech Stack:**
- **Framework:** Astro 7.x with React integration
- **Styling:** Tailwind CSS 4.x
- **Animations:** Framer Motion 11.x
- **Language:** TypeScript (strict mode)
- **Deployment:** GitHub Pages

## Project Structure

```
portfolio/
├── public/                    # Static assets
│   ├── favicon.svg
│   └── images/               # Project images, profile photos
├── src/
│   ├── components/
│   │   ├── react/            # Interactive React components
│   │   │   ├── ThemeToggle.tsx      # Dark/Light mode toggle
│   │   │   ├── AnimatedSection.tsx  # Scroll-triggered animations
│   │   │   └── ScrollProgress.tsx   # Top scroll indicator
│   │   └── astro/            # Static Astro components
│   │       ├── Header.astro         # Navigation with mobile menu
│   │       ├── Footer.astro         # Site footer
│   │       └── sections/            # Page sections
│   │           ├── Hero.astro       # Landing section
│   │           ├── About.astro      # Bio and profile
│   │           ├── Publications.astro # Research papers
│   │           ├── Projects.astro   # Project showcase
│   │           ├── Skills.astro     # Technical skills
│   │           ├── Life.astro       # Personal/blog posts
│   │           └── Contact.astro    # Social links
│   ├── content/              # Markdown content files
│   │   ├── projects/         # Project markdown files
│   │   ├── publications/     # Publication markdown files
│   │   ├── skills/           # Skills markdown files
│   │   └── life/             # Life/blog markdown files
│   ├── content.config.ts     # Content collection schemas
│   ├── layouts/
│   │   └── Layout.astro      # Main HTML layout
│   ├── pages/
│   │   └── index.astro       # Single page entry
│   ├── styles/
│   │   └── global.css        # Tailwind config + custom styles
│   └── lib/
│       └── utils.ts          # Utility functions
├── astro.config.mjs          # Astro configuration
├── tsconfig.json             # TypeScript config
└── package.json
```

## Sections (Single Page)

The portfolio is organized into these sections on a single page:

1. **Hero** - Landing area with name, title, and CTA buttons
2. **About** - Profile image and bio text
3. **Publications** - Research papers with DOI/PDF links
4. **Projects** - Project cards with images, descriptions, and links
5. **Skills** - Categorized technical skills
6. **Life** - Personal posts/blog entries
7. **Contact** - Social media links

## Content Collections Schema

### Projects (`src/content/projects/`)

```typescript
{
  title: string;           // Project name
  description: string;     // Short description
  image?: string;          // Project screenshot path
  tags: string[];          // Technology tags
  github?: string;         // GitHub repository URL
  live?: string;           // Live demo URL
  featured: boolean;       // Show "Featured" badge
  order: number;           // Sort order (lower = first)
}
```

**Example Frontmatter:**
```markdown
---
title: "Portfolio Website"
description: "A minimalistic portfolio built with Astro"
tags: ["astro", "react", "tailwind"]
github: "https://github.com/username/portfolio"
live: "https://yourusername.github.io"
featured: true
order: 1
---

Content goes here...
```

### Publications (`src/content/publications/`)

```typescript
{
  title: string;           // Paper title
  authors: string;         // Author names
  journal: string;         // Journal/conference name
  year: number;            // Publication year
  doi?: string;            // DOI identifier
  url?: string;            // Direct link to PDF
  abstract?: string;       // Paper abstract
  tags: string[];          // Research topics
  order: number;           // Sort order
}
```

### Skills (`src/content/skills/`)

```typescript
{
  category: string;        // Skill category name
  items: string[];         // List of skills
  icon?: string;           // Icon type: 'code', 'layout', or default circle
  order: number;           // Sort order
}
```

### Life (`src/content/life/`)

```typescript
{
  title: string;           // Post title
  date: string;            // Publication date
  image?: string;          // Featured image path
  tags: string[];          // Topic tags
  order: number;           // Sort order
}
```

## Design System

### Colors

The portfolio uses a minimalistic, neutral color palette:

- **Primary:** Slate (blue-gray tones)
  - Light mode: `#f8fafc` (bg) → `#0f172a` (text)
  - Dark mode: `#020617` (bg) → `#f8fafc` (text)

- **Accent:** Stone (warm neutral)
  - Used for subtle backgrounds and borders

### Typography

- **Font:** Inter (Google Fonts)
  - Headings: 300-400 weight, tight tracking
  - Body: 400 weight, relaxed line height
- **Monospace:** JetBrains Mono (for code)

### Spacing & Layout

- Generous section padding: `py-20 md:py-32`
- Container max-widths: 
  - Narrow: `max-w-4xl` (about, publications, skills, contact)
  - Wide: `max-w-6xl` (projects, life)
- Card padding: `p-6`
- Border radius: `rounded-2xl` (cards), `rounded-xl` (images)

### Components

**Cards:**
```css
.card {
  @apply bg-white dark:bg-primary-900 rounded-2xl p-6 
         shadow-sm hover:shadow-md transition-shadow duration-300;
}
```

**Section Padding:**
```css
.section-padding {
  @apply py-20 md:py-32 px-6 md:px-12 lg:px-24;
}
```

## Interactive Features

### Theme Toggle
- Located: Fixed position, top-right corner
- Persists preference to localStorage
- Respects system preference on first visit
- Smooth transition between themes

### Animations (Framer Motion)
- **Scroll-triggered:** Sections fade in and slide up on scroll
- **Progressive reveal:** Delayed animations for staggered content
- **Scroll progress:** Top indicator bar shows page progress
- **Hover states:** Subtle scale and shadow changes

### Mobile Navigation
- Hamburger menu on mobile devices
- Slide-down menu panel
- Auto-close on link click

## Content Management

### Adding a New Project

1. Create a new `.md` file in `src/content/projects/`
2. Add frontmatter with required fields:

```markdown
---
title: "My New Project"
description: "What this project does"
tags: ["react", "typescript"]
github: "https://github.com/username/repo"
featured: false
order: 2
---

Optional detailed description in markdown...
```

### Adding a Publication

1. Create a new `.md` file in `src/content/publications/`
2. Add frontmatter:

```markdown
---
title: "Research Paper Title"
authors: "Your Name, Co-Author"
journal: "Journal Name"
year: 2024
doi: "10.xxxx/xxxxx"
tags: ["research", "topic"]
order: 1
---

Abstract or notes...
```

### Adding Skills

1. Create a new `.md` file in `src/content/skills/`
2. Add frontmatter:

```markdown
---
category: "Backend"
items: ["Node.js", "Python", "PostgreSQL"]
icon: "code"
order: 3
---
```

### Adding Life Posts

1. Create a new `.md` file in `src/content/life/`
2. Add frontmatter:

```markdown
---
title: "Weekend Adventure"
date: "2024-03-15"
image: "/images/adventure.jpg"
tags: ["outdoor", "personal"]
order: 1
---

Post content in markdown...
```

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment (GitHub Pages)

1. Update `astro.config.mjs`:
   ```javascript
   site: 'https://yourusername.github.io',
   base: '/your-repo-name'
   ```

2. Build and deploy:
   ```bash
   npm run build
   ```

3. The `dist/` folder contains static files ready for GitHub Pages

## Customization Checklist

- [ ] Update `site` and `base` in `astro.config.mjs`
- [ ] Replace profile image in `public/images/`
- [ ] Update bio text in `About.astro`
- [ ] Add your projects to `src/content/projects/`
- [ ] Add your publications to `src/content/publications/`
- [ ] Update skills in `src/content/skills/`
- [ ] Update social links in `Contact.astro`
- [ ] Update name in `Header.astro` and `Hero.astro`
- [ ] Customize colors in `global.css` if needed
- [ ] Add favicon in `public/favicon.svg`

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ features used
- Responsive design for all screen sizes

## Performance

- Astro ships 0kb JavaScript by default
- React only loaded for interactive components (islands)
- Images use native lazy loading
- Fonts loaded with `display: swap`
- Tailwind CSS purges unused styles in production
