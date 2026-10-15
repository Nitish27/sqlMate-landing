# sqlMate landing page

The sqlMate download website for macOS and Windows, built with Next.js and exported as static files for Hostinger.

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. Use Node.js 22.13+ or 24 with support for TypeScript stripping.

## Installer links

Edit `.env.local` before building:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_MAC_DOWNLOAD_URL` | Public Mac DMG URL; defaults to the existing v0.4.1 installer. |
| `NEXT_PUBLIC_MAC_VERSION` | Version recorded for Mac download telemetry. |
| `NEXT_PUBLIC_WINDOWS_DOWNLOAD_URL` | Public Windows EXE URL; defaults to the hosted v0.6.0 installer. |
| `NEXT_PUBLIC_WINDOWS_MSI_URL` | Optional public Windows MSI URL. |
| `NEXT_PUBLIC_WINDOWS_VERSION` | Version recorded for Windows download telemetry. |

Mac and Windows download buttons use the hosted installers by default. Environment variables can override their URLs and versions for future releases. The MSI link appears only when its URL is configured. Downloads never require an email signup; release updates are optional after the installer request.

Hostinger URLs and public GitHub release asset URLs are supported. For a versioned filename, use the specific release asset URL, for example `https://github.com/OWNER/REPOSITORY/releases/download/v0.6.0/SqlMate_0.6.0_x64-setup.exe` (replace the owner, repository, tag, and filename with the actual public release).

A latest-release URL, `https://github.com/OWNER/REPOSITORY/releases/latest/download/sqlmate-setup.exe`, requires the same asset filename in every release. Public website visitors must be able to access the release without signing in. Do not embed a GitHub access token in a download URL.

These variables are baked into the static export. Rebuild and upload the new export whenever you change a URL or version.

## Checks

```bash
npm run lint
npx tsc --noEmit
npm test
npm run build
```

The build fetches Geist fonts from Google Fonts and requires network access.

## Hostinger upload

1. Configure the installer URLs in `.env.local`.
2. Run `npm run build`.
3. Upload the **contents** of `out/` to the website document root, including `_next/`, `support/`, `privacy/`, and image assets.
4. If installers use `https://sqlmate.io/downloads/...`, upload those exact files into the hosted `downloads/` directory. Installers already in `public/downloads/` are copied into `out/downloads/` automatically.
5. Check each real installer link and both secondary pages after upload.

The Next.js `start` script is not used for this static export. Preview the exported site with a static HTTP server when testing the Hostinger build locally.

## Structure

`src/app/page.tsx` assembles the landing sections from `src/app/landing/`. `landing/landing.css` owns the landing design. `downloads.ts` is the installer configuration. `landingContent.ts` supplies the FAQ content and matching structured data. Download telemetry uses the existing first-party telemetry service; it never blocks the installer request.

The product preview uses the real screenshot in `public/main_interface.png`. Design references and browser captures are in `design-review/`; the final visual verification is recorded in `design-qa.md`.
