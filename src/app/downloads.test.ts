import assert from "node:assert/strict";
import test from "node:test";

import { getDownloads } from "./downloads.ts";

test("Windows downloads never fall back to a Mac installer", () => {
  const downloads = getDownloads({});

  assert.equal(downloads.windows.href, "https://sqlmate.io/downloads/SqlMate_0.6.0_x64-setup.exe");
  assert.equal(downloads.windows.version, "0.6.0");
  assert.equal(downloads.windowsMsi.href, null);
  assert.match(downloads.macos.href ?? "", /\.dmg$/);
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
