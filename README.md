# Reddate website

Live website: **https://reddate.ai**

This repository keeps the existing GitHub Pages deployment on the `main` branch, from `/` (root). `CNAME` remains `reddate.ai`. Committing updated static files to `main` triggers the existing Pages deployment.

The website includes 14 pages and eight website languages: Australian English, Simplified Chinese, Traditional Chinese, Japanese, Korean, Vietnamese, Arabic and Punjabi (Gurmukhi). App screenshots remain in their original language.

## Source and updates

Editable source and a pinned dependency lockfile are in [`website-source/`](website-source/README.md). The other page directories, `_next/`, and `images/` are generated output.

Use Node.js 24, then run from this repository:

```sh
npm --prefix website-source ci
npm --prefix website-source run check:locales
npm --prefix website-source run check
npm --prefix website-source run build
npm --prefix website-source run check:static
node scripts/stage-static.mjs
git add .
git commit -m "Update Reddate website"
git push origin main
```

`stage-static.mjs` copies the built site into the Pages root and removes only obsolete files listed in the previous generated-file manifest. It does not change the editable source, repository history or domain configuration.

Official App download links can be added in `website-source/lib/site-config.ts`, then built and published with the same steps. Current App data is illustrative; research content describes a proposed validation approach. The Privacy Policy covers the public website and related enquiries and is maintained in website-source/lib/privacy.ts, including the responsible company and privacy contact.

## Hosting

- GitHub Pages serves the committed static files. No server, database or sign-in is needed.
- `.nojekyll` allows Next.js assets under `_next/` to be served.
- The existing DNS and custom-domain setup are retained.
- Existing Git history preserves the earlier site for rollback.
