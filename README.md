# My site

Bio, background, and how-tos, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Setup (one time)

1. Edit `astro.config.mjs`: set `site` to `https://YOUR-USERNAME.github.io`.
   - Repo named `YOUR-USERNAME.github.io`? Leave `base` commented out.
   - Any other repo name? Uncomment `base` and set it to `'/your-repo-name'`.
2. Replace "Your Name" and the placeholder text in `src/layouts/Layout.astro`,
   `src/pages/index.astro`, and `src/pages/background.astro`.
3. Push to a GitHub repo on the `main` branch.
4. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
5. The **Actions** tab will show the deploy running. Your site goes live in about a minute.

## Adding a how-to

Create a file in `src/content/howtos/`, e.g. `my-new-guide.md`:

```md
---
title: "How to do X"
description: "One-line summary shown in the list."
date: 2026-11-10
---

Your content in Markdown...
```

Commit and push. The site redeploys automatically.

## Local preview

```bash
npm install
npm run dev
```
