# sqlMate landing page

The sqlMate download website for macOS and Windows, built with Next.js and exported as static files for Hostinger.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000. Use Node.js 22.13+ or 24 with support for TypeScript stripping.

## Installer links

The website requests `/downloads/website-downloads.json` at runtime. Publishing a stable sqlMate release uploads versioned installers to Hostinger and replaces that manifest only after the files have been verified. This means future releases do not require rebuilding the website. See the app repository's `docs/hostinger-downloads.md` for the release workflow and one-time GitHub/Hostinger setup.

If the manifest is unavailable or invalid, the page uses build-time fallback links. Defaults point to the v0.10.1 GitHub release. You may optionally set these values in `.env.local` before building:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_MAC_DOWNLOAD_URL` | Public Mac DMG fallback URL; defaults to the v0.10.1 GitHub release. |
| `NEXT_PUBLIC_MAC_VERSION` | Version recorded for Mac download telemetry. |
| `NEXT_PUBLIC_WINDOWS_DOWNLOAD_URL` | Public Windows EXE fallback URL; defaults to the v0.10.1 GitHub release. |
| `NEXT_PUBLIC_WINDOWS_MSI_URL` | Public Windows MSI fallback URL; defaults to the v0.10.1 GitHub release. |
| `NEXT_PUBLIC_WINDOWS_VERSION` | Version recorded for Windows download telemetry. |

Mac and Windows download buttons use the Hostinger manifest when available. The manifest must contain the current version and the exact versioned `.dmg`, `.exe`, and `.msi` URLs on `sqlmate.io`; malformed or older manifests are ignored. Downloads never require an email signup; release updates are optional after the installer request.

Hostinger URLs and public GitHub release asset URLs are supported. For a versioned filename, use the specific release asset URL, for example `https://github.com/OWNER/REPOSITORY/releases/download/v0.6.0/SqlMate_0.6.0_x64-setup.exe` (replace the owner, repository, tag, and filename with the actual public release).

A latest-release URL, `https://github.com/OWNER/REPOSITORY/releases/latest/download/sqlmate-setup.exe`, requires the same asset filename in every release. Public website visitors must be able to access the release without signing in. Do not embed a GitHub access token in a download URL.

Fallback variables are baked into the static export, but the Hostinger manifest is not. Rebuild the site only when changing its code or fallback URLs.

## Checks

```bash
npm run lint
npx tsc --noEmit
npm test
npm run build
```

The build fetches Geist fonts from Google Fonts and requires network access.

## Hostinger upload

1. Run `npm run build`.
2. Upload the **contents** of `out/` to the website document root, including `_next/`, `support/`, `privacy/`, and image assets. Do not delete the existing `downloads/` directory; the release workflow owns its versioned installers and manifest.
3. Confirm that `/downloads/website-downloads.json` points to the latest published release.
4. Check each real installer link, both secondary pages, and download telemetry after upload.

The Next.js `start` script is not used for this static export. Preview the exported site with a static HTTP server when testing the Hostinger build locally.

## Structure

`src/app/page.tsx` assembles the landing sections from `src/app/landing/`. `landing/landing.css` owns the landing design. `downloads.ts` is the installer configuration. `landingContent.ts` supplies the FAQ content and matching structured data. Download telemetry uses the existing first-party telemetry service; it never blocks the installer request.

The product preview uses the real screenshot in `public/main_interface.png`. Design references and browser captures are in `design-review/`; the final visual verification is recorded in `design-qa.md`.
