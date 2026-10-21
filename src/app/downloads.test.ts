import assert from "node:assert/strict";
import test from "node:test";

import { getDownloads, getDownloadsFromManifest } from "./downloads.ts";

test("Windows downloads never fall back to a Mac installer", () => {
  const downloads = getDownloads({});

  assert.equal(downloads.windows.href, "https://github.com/Nitish27/sqlMate/releases/download/v0.10.1/SqlMate_0.10.1_x64-setup.exe");
  assert.equal(downloads.windows.version, "0.10.1");
  assert.equal(downloads.windowsMsi.href, "https://github.com/Nitish27/sqlMate/releases/download/v0.10.1/SqlMate_0.10.1_x64_en-US.msi");
  assert.equal(downloads.macos.href, "https://github.com/Nitish27/sqlMate/releases/download/v0.10.1/SqlMate_0.10.1_universal.dmg");
});

test("hosted Windows installers retain their platform, format, and version", () => {
  const downloads = getDownloads({
    NEXT_PUBLIC_WINDOWS_DOWNLOAD_URL: " https://sqlmate.io/downloads/sqlmate-setup.exe ",
    NEXT_PUBLIC_WINDOWS_MSI_URL: "https://sqlmate.io/downloads/sqlmate.msi",
    NEXT_PUBLIC_WINDOWS_VERSION: "0.6.0",
  });

  assert.equal(downloads.windows.href, "https://sqlmate.io/downloads/sqlmate-setup.exe");
  assert.equal(downloads.windows.channel, "exe");
  assert.equal(downloads.windowsMsi.channel, "msi");
  assert.equal(downloads.windows.version, "0.6.0");
});

test("public GitHub release asset URLs are used without rewriting filenames", () => {
  const href = "https://github.com/example/sqlmate-releases/releases/download/v0.6.0/SqlMate_0.6.0_universal.dmg";
  const downloads = getDownloads({ NEXT_PUBLIC_MAC_DOWNLOAD_URL: href, NEXT_PUBLIC_MAC_VERSION: "0.6.0" });

  assert.equal(downloads.macos.href, href);
  assert.equal(downloads.macos.version, "0.6.0");
});

test("published website manifest replaces both installer links and telemetry versions", () => {
  const fallback = getDownloads({});
  const result = getDownloadsFromManifest({
    version: "0.10.2",
    macos: "https://sqlmate.io/downloads/SqlMate_0.10.2_universal.dmg",
    windows: "https://sqlmate.io/downloads/SqlMate_0.10.2_x64-setup.exe",
    windowsMsi: "https://sqlmate.io/downloads/SqlMate_0.10.2_x64_en-US.msi",
  }, fallback);

  assert.equal(result.macos.version, "0.10.2");
  assert.equal(result.macos.href, "https://sqlmate.io/downloads/SqlMate_0.10.2_universal.dmg");
  assert.equal(result.windows.href, "https://sqlmate.io/downloads/SqlMate_0.10.2_x64-setup.exe");
  assert.equal(result.windowsMsi.href, "https://sqlmate.io/downloads/SqlMate_0.10.2_x64_en-US.msi");
});

test("invalid or incomplete manifests keep the working fallback links", () => {
  const fallback = getDownloads({});
  assert.deepEqual(getDownloadsFromManifest(null, fallback), fallback);
  assert.deepEqual(getDownloadsFromManifest({ version: "0.9.0", macos: "javascript:alert(1)" }, fallback), fallback);
  assert.deepEqual(getDownloadsFromManifest({
    version: "0.9.0",
    macos: "https://sqlmate.io/downloads/SqlMate_0.9.0_universal.dmg",
    windows: "https://evil.example/downloads/SqlMate_0.9.0_x64-setup.exe",
    windowsMsi: "https://sqlmate.io/downloads/SqlMate_0.9.0_x64_en-US.msi",
  }, fallback), fallback);
});

test("a stale Hostinger manifest cannot downgrade the current fallback release", () => {
  const fallback = getDownloads({});
  const result = getDownloadsFromManifest({
    version: "0.7.0",
    macos: "https://sqlmate.io/downloads/SqlMate_0.7.0_universal.dmg",
    windows: "https://sqlmate.io/downloads/SqlMate_0.7.0_x64-setup.exe",
    windowsMsi: "https://sqlmate.io/downloads/SqlMate_0.7.0_x64_en-US.msi",
  }, fallback);
  assert.deepEqual(result, fallback);
});
