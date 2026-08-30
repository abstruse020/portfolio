# GitHub Pages Deployment Skill

## Overview

Deploy Astro sites to GitHub Pages using GitHub Actions for automatic deployment on push.

## Prerequisites

- GitHub repository with the Astro project
- Node.js 20+ (for local builds)
- GitHub Pages enabled in repo Settings

## Setup Steps

### 1. Enable GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Save

### 2. Configure `astro.config.mjs`

```js
export default defineConfig({
  site: 'https://<username>.github.io',
  base: '/<repo-name>',  // Required for non-root deployments
  // ...
});
```

**Important:** The `base` path must match your repository name.

### 3. Create GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build with Astro
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 4. Commit and Push

```bash
git add -A
git commit -m "Configure GitHub Pages deployment"
git push
```

## Deployment Flow

1. Push to `main` branch triggers the workflow
2. GitHub Actions installs dependencies and builds the site
3. The `dist/` folder is uploaded as an artifact
4. GitHub Pages deploys the artifact
5. Site is live at `https://<username>.github.io/<repo-name>/`

## Troubleshooting

### Build Fails

- Check workflow logs at `https://github.com/<username>/<repo>/actions`
- Ensure `npm run build` works locally
- Verify Node.js version matches (20+)

### 404 Errors

- Ensure `base` in `astro.config.mjs` matches repo name
- Check that GitHub Pages source is set to **GitHub Actions**
- Wait a few minutes for deployment to complete

### Assets Not Loading

- All internal links must use the `base` path
- Example: `<a href="/portfolio/about">` not `<a href="/about">`
- Images should be in `public/` folder

### Styling Broken

- CSS imports must work with the `base` path
- Tailwind classes are generated at build time, no issues expected

## Manual Deployment

For testing locally:

```bash
npm run build
npx serve dist
```

Visit `http://localhost:3000/portfolio/` (or your base path)

## Environment Variables

If using environment variables:

1. Add them to repo **Settings** → **Secrets and variables** → **Actions**
2. Reference in workflow: `${{ secrets.VARIABLE_NAME }}`
3. Access in Astro via `import.meta.env.VARIABLE_NAME`

## Custom Domain

To use a custom domain:

1. Add `CNAME` file to `public/` folder with your domain
2. Update `site` in `astro.config.mjs` to your domain
3. Configure DNS to point to `<username>.github.io`
4. Enable custom domain in repo Settings → Pages

## References

- [Astro Deployment Guide](https://docs.astro.build/en/guides/deploy/github/)
- [GitHub Pages Actions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow)
