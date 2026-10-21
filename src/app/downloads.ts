export interface DownloadArtifact {
  href: string | null;
  version: string;
  channel: "dmg" | "exe" | "msi";
}

interface DownloadEnvironment {
  NEXT_PUBLIC_MAC_DOWNLOAD_URL?: string;
  NEXT_PUBLIC_MAC_VERSION?: string;
  NEXT_PUBLIC_WINDOWS_DOWNLOAD_URL?: string;
  NEXT_PUBLIC_WINDOWS_MSI_URL?: string;
  NEXT_PUBLIC_WINDOWS_VERSION?: string;
}

const FALLBACK_VERSION = "0.10.1";

export const getDownloads = (environment: DownloadEnvironment) => ({
  macos: {
    href: environment.NEXT_PUBLIC_MAC_DOWNLOAD_URL?.trim() ||
      `https://github.com/Nitish27/sqlMate/releases/download/v${FALLBACK_VERSION}/SqlMate_${FALLBACK_VERSION}_universal.dmg`,
    version: environment.NEXT_PUBLIC_MAC_VERSION?.trim() || FALLBACK_VERSION,
    channel: "dmg",
  } satisfies DownloadArtifact,
  windows: {
    href: environment.NEXT_PUBLIC_WINDOWS_DOWNLOAD_URL?.trim() ||
      `https://github.com/Nitish27/sqlMate/releases/download/v${FALLBACK_VERSION}/SqlMate_${FALLBACK_VERSION}_x64-setup.exe`,
    version: environment.NEXT_PUBLIC_WINDOWS_VERSION?.trim() || FALLBACK_VERSION,
    channel: "exe",
  } satisfies DownloadArtifact,
  windowsMsi: {
    href: environment.NEXT_PUBLIC_WINDOWS_MSI_URL?.trim() ||
      `https://github.com/Nitish27/sqlMate/releases/download/v${FALLBACK_VERSION}/SqlMate_${FALLBACK_VERSION}_x64_en-US.msi`,
    version: environment.NEXT_PUBLIC_WINDOWS_VERSION?.trim() || FALLBACK_VERSION,
    channel: "msi",
  } satisfies DownloadArtifact,
});

export function getDownloadsFromManifest(
  manifest: unknown,
  fallback: ReturnType<typeof getDownloads>,
): ReturnType<typeof getDownloads> {
  if (!manifest || typeof manifest !== "object") return fallback;

  const values = manifest as Record<string, unknown>;
  const version = values.version;
  if (typeof version !== "string" || !/^\d+\.\d+\.\d+$/.test(version)) return fallback;

  const currentVersion = fallback.macos.version;
  if (/^\d+\.\d+\.\d+$/.test(currentVersion)) {
    const incoming = version.split(".").map(Number);
    const current = currentVersion.split(".").map(Number);
    for (let index = 0; index < incoming.length; index += 1) {
      if (incoming[index] < current[index]) return fallback;
      if (incoming[index] > current[index]) break;
    }
  }

  const base = `https://sqlmate.io/downloads/SqlMate_${version}_`;
  if (
    values.macos !== `${base}universal.dmg` ||
    values.windows !== `${base}x64-setup.exe` ||
    values.windowsMsi !== `${base}x64_en-US.msi`
  ) return fallback;

  return {
    macos: { href: values.macos, version, channel: "dmg" },
    windows: { href: values.windows, version, channel: "exe" },
    windowsMsi: { href: values.windowsMsi, version, channel: "msi" },
  };
}

export const downloads = getDownloads({
  NEXT_PUBLIC_MAC_DOWNLOAD_URL: process.env.NEXT_PUBLIC_MAC_DOWNLOAD_URL,
  NEXT_PUBLIC_MAC_VERSION: process.env.NEXT_PUBLIC_MAC_VERSION,
  NEXT_PUBLIC_WINDOWS_DOWNLOAD_URL: process.env.NEXT_PUBLIC_WINDOWS_DOWNLOAD_URL,
  NEXT_PUBLIC_WINDOWS_MSI_URL: process.env.NEXT_PUBLIC_WINDOWS_MSI_URL,
  NEXT_PUBLIC_WINDOWS_VERSION: process.env.NEXT_PUBLIC_WINDOWS_VERSION,
});
