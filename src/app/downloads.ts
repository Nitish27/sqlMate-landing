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

export const getDownloads = (environment: DownloadEnvironment) => ({
  macos: {
    href: environment.NEXT_PUBLIC_MAC_DOWNLOAD_URL?.trim() ||
      "https://sqlmate.io/downloads/SqlMate_0.4.1_x64.dmg",
    version: environment.NEXT_PUBLIC_MAC_VERSION?.trim() || "0.4.1",
    channel: "dmg",
  } satisfies DownloadArtifact,
  windows: {
    href: environment.NEXT_PUBLIC_WINDOWS_DOWNLOAD_URL?.trim() ||
      "https://sqlmate.io/downloads/SqlMate_0.6.0_x64-setup.exe",
    version: environment.NEXT_PUBLIC_WINDOWS_VERSION?.trim() || "0.6.0",
    channel: "exe",
  } satisfies DownloadArtifact,
  windowsMsi: {
    href: environment.NEXT_PUBLIC_WINDOWS_MSI_URL?.trim() || null,
    version: environment.NEXT_PUBLIC_WINDOWS_VERSION?.trim() || "0.6.0",
    channel: "msi",
  } satisfies DownloadArtifact,
});

export const downloads = getDownloads({
  NEXT_PUBLIC_MAC_DOWNLOAD_URL: process.env.NEXT_PUBLIC_MAC_DOWNLOAD_URL,
  NEXT_PUBLIC_MAC_VERSION: process.env.NEXT_PUBLIC_MAC_VERSION,
  NEXT_PUBLIC_WINDOWS_DOWNLOAD_URL: process.env.NEXT_PUBLIC_WINDOWS_DOWNLOAD_URL,
  NEXT_PUBLIC_WINDOWS_MSI_URL: process.env.NEXT_PUBLIC_WINDOWS_MSI_URL,
  NEXT_PUBLIC_WINDOWS_VERSION: process.env.NEXT_PUBLIC_WINDOWS_VERSION,
});
