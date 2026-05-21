# Campa Cola × SAFF Women's Championship 2026 — Sponsorship Proposal

Interactive pitch deck for DGO's title sponsorship proposal to Campa Cola.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## GitHub Pages

The site deploys to: **https://wingsuiter101.github.io/campa-cola/**

- **main** — source code
- **gh-pages** — static export from `next build` (auto-deployed via GitHub Actions)

### Local GitHub Pages build

```bash
# Windows PowerShell
$env:GITHUB_PAGES="true"
npm run build:gh-pages
```

Output is in `out/`. Configuration uses `basePath: /campa-cola` and `trailingSlash: true` for correct GitHub Pages routing.

## Stack

- Next.js 16 (App Router, static export for Pages)
- Tailwind CSS v4
- Framer Motion
- Lucide React
