# 301 OA — Marketing website

Public advertising site for the workplace OA product (schools, campuses, factories, companies).  
**Stack:** [Astro](https://astro.build) + Tailwind CSS 4 · static multi-language (EN / 中文 / 日本語) · SEO-first.

## Commands

```bash
# from monorepo root
bun run dev:website
bun run build:website

# or from this package
cd packages/website
bun run dev      # http://localhost:4321
bun run build
bun run preview
```

## Locales & URLs

| Locale | Path | `hreflang` |
|--------|------|------------|
| English (default) | `/en/` | `en` |
| 中文 | `/zh/` | `zh-CN` |
| 日本語 | `/ja/` | `ja` |

`/` detects language like console / kiosk: `localStorage` (`oa.locale`) → `navigator.language` → 中文.  
Explicit `/en/`, `/zh/`, `/ja/` stay as chosen (and that choice is saved).  
`x-default` alternate still points to English for SEO.

## SEO

- Per-locale `<title>`, description, keywords  
- Canonical + `hreflang` alternates  
- Open Graph / Twitter cards  
- JSON-LD `SoftwareApplication`  
- `@astrojs/sitemap` at build time  
- `public/robots.txt` (update Sitemap host when deploying)

Set production origin:

```bash
SITE_URL=https://your-domain.example bun run build
```

## Publish on Cloudflare Pages

This package is a **static** Astro build (`dist/`). No Cloudflare adapter is required.

### 1. Push the repo to GitHub / GitLab

Cloudflare Pages will build from that remote.

### 2. Create a Pages project

[Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git** → pick this repo.

**Use the website package as the Pages root.** If root is the monorepo, Cloudflare runs `npm install` on the whole workspace, which fails (`typescript@7` vs `@typescript-eslint` peers). This package does not need that.

| Setting | Value |
|--------|--------|
| Production branch | `develop` (or `main`, whichever you ship) |
| Root directory | `packages/website` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Framework preset | Astro (optional) |

Then **Save and Deploy** (or Retry).

### 3. Environment variables

Pages → **Settings** → **Environment variables** (Production + Preview):

| Name | Value | Notes |
|------|--------|--------|
| `SITE_URL` | `https://your-domain.com` | Canonical URLs, Open Graph, sitemap. Use the `*.pages.dev` URL until a custom domain is attached. |
| `NODE_VERSION` | `22` | Matches `engines.node`. |

Preview deployments can omit `SITE_URL`; the build falls back to Cloudflare’s `CF_PAGES_URL`.

### 4. Custom domain

Pages → **Custom domains** → add the hostname and follow the DNS prompts (CNAME to `*.pages.dev`). After HTTPS is live, set `SITE_URL` to `https://that-host` and **Retry deployment** so sitemap / canonical tags match.

### 5. One-off deploy from your machine

Wrangler is a website package dev dependency (`wrangler.jsonc` → project `oa-website`).

```bash
# first time only
bun run --filter website cf:login

# from repo root
SITE_URL=https://your-domain.com bun run deploy:website

# or from this package
cd packages/website
SITE_URL=https://your-domain.com bun run deploy
```

### After deploy, check

- `https://<project>.pages.dev/` language-detects (中 / EN / 日本語)
- `/en/`, `/zh/`, `/ja/` each have the right `<html lang>`
- `/sitemap-index.xml` and `/robots.txt`
- Screenshots in `public/images/` if you added them before the build

## Images

See [`public/images/README.md`](./public/images/README.md). Place screenshots in `public/images/` using the listed filenames; the UI shows image slots until files are present.

## Content

Copy lives in:

- `src/i18n/en.ts`
- `src/i18n/zh.ts`
- `src/i18n/ja.ts`

Update CTA email in `src/components/Cta.astro` (`mailto:it@example.edu`).
