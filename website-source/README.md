# Reddate website

Public marketing website for **https://reddate.ai**, prepared as a static GitHub Pages deployment. The site has 14 content routes and eight website language options: English (Australia), Simplified Chinese, Traditional Chinese, Japanese, Korean, Vietnamese, Arabic and Punjabi (Gurmukhi).

## Build

Requires Node.js 22.13 or newer. Node.js 24 is recommended for the pinned dependencies.

```sh
npm ci
npm run check:locales
npm run check
npm run build
npm run check:static
```

`npm run build` uses standard Next.js static export and writes the deployable site to `out/`. Upload the **contents of `out/`** to the existing Pages publishing source, or deploy `out/` with a GitHub Actions Pages workflow. No Node server, Cloudflare Worker, database, API key or ChatGPT login is required by this export.

The `public/CNAME` file contains `reddate.ai`; `public/.nojekyll` preserves Next.js files beginning with an underscore when publishing from a branch. DNS and the repository's Pages settings must continue to identify the same domain. Root-relative links and images are intended for the custom domain; a project URL under `/repository-name/` is not configured.

For a local static preview:

```sh
python3 -m http.server 8080 --directory out
```

Open `http://localhost:8080/`. This simple preview server does not automatically use `404.html` for unknown paths; GitHub Pages does.

## Maintaining content

- `components/site.tsx`: page content and interactive components.
- `lib/content.ts`: feature descriptions and English/Simplified Chinese text.
- `lib/labels.ts`: short labels and Australian household examples.
- `lib/i18n.ts` and `lib/locales/*.json`: locale selection and translations.
- `app/globals.css`: responsive layout, typography and Arabic direction support.
- `app/[[...slug]]/page.tsx`: the 14 allowed, prerendered routes.
- `public/images/`: website visual assets and original App prototype screenshots.
- `lib/site-config.ts`: future verified App Store/Google Play URLs, optional browser demo and support email.

Official App release links are intentionally unset. Prototype screens, scores and insights remain illustrative. Research content describes the proposed analysis/validation approach. The Privacy Policy covers the public website and related enquiries, with Reddate Intelligence Pty Ltd as the responsible company and hello@reddate.com.au as the privacy contact.

## Language behavior

Static HTML starts in English. After JavaScript loads, selection follows: explicit `?lang=`, saved browser preference, a supported browser language, then English (Australia). Examples: `/?lang=ja`, `/features/comfort/?lang=ko`, `/?lang=ar`. Internal links preserve the selected language. Arabic switches to right-to-left layout. Language changes preserve the current page.

All page text is translated; App screenshots retain their original English. Website language options do not establish language support in the released App. Translations have not received independent native-speaker review.

## Deployment boundary

This source includes only the website and its required assets. It contains no private planning documents, service credentials, Sites project identity, server connectors or previous hosting runtime. The historical private preview is maintained separately.
