"use client";

import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiApple } from "react-icons/si";
import { PiWindowsLogoFill } from "react-icons/pi";

import { downloads, getDownloadsFromManifest, type DownloadArtifact } from "../downloads";
import { TrackedDownloadLink } from "../TrackedDownloadLink";
import { UpdatesSignup } from "./UpdatesSignup";

interface DownloadActionsProps {
  location: "hero" | "download";
}

export function DownloadActions({ location }: DownloadActionsProps) {
  const [requestedDownload, setRequestedDownload] = useState<DownloadArtifact | null>(null);
  const [currentDownloads, setCurrentDownloads] = useState(downloads);
  const isDownloadSection = location === "download";

  useEffect(() => {
    const controller = new AbortController();
    fetch(`/downloads/website-downloads.json?t=${Date.now()}`, { cache: "no-store", signal: controller.signal })
      .then((response) => response.ok ? response.json() : null)
      .then((manifest: unknown) => {
        if (!controller.signal.aborted) setCurrentDownloads(getDownloadsFromManifest(manifest, downloads));
      })
      .catch(() => {
        // The signed GitHub release remains available if Hostinger is unreachable.
      });
    return () => controller.abort();
  }, []);

  return (
    <div className={`download-actions ${isDownloadSection ? "download-actions-full" : "download-actions-hero"}`}>
      <div className="platform-downloads">
        <div className="platform-download">
          <TrackedDownloadLink href={currentDownloads.macos.href ?? undefined} version={currentDownloads.macos.version} channel="dmg" source={`landing-${location}`} download className="landing-button button-primary platform-button" onClick={() => setRequestedDownload(currentDownloads.macos)}>
            <SiApple size={22} aria-hidden="true" />{isDownloadSection ? "Download .dmg" : "Download for macOS"}
          </TrackedDownloadLink>
          {isDownloadSection && <p className="platform-caption">for macOS</p>}
        </div>
        <div className="platform-download">
          {currentDownloads.windows.href ? (
            <TrackedDownloadLink href={currentDownloads.windows.href} version={currentDownloads.windows.version} channel="exe" source={`landing-${location}`} download className="landing-button button-secondary platform-button" onClick={() => setRequestedDownload(currentDownloads.windows)}>
              <PiWindowsLogoFill size={22} aria-hidden="true" />{isDownloadSection ? "Download .exe" : "Download for Windows"}
            </TrackedDownloadLink>
          ) : (
            <button type="button" className="landing-button button-secondary platform-button" disabled aria-describedby={`windows-download-status-${location}`}>
              <PiWindowsLogoFill size={22} aria-hidden="true" />Download for Windows
            </button>
          )}
          {isDownloadSection && <p className="platform-caption">for Windows</p>}
          {!currentDownloads.windows.href && <p id={`windows-download-status-${location}`} className="download-availability">Download link being updated</p>}
          {isDownloadSection && currentDownloads.windowsMsi.href && (
            <TrackedDownloadLink href={currentDownloads.windowsMsi.href} version={currentDownloads.windowsMsi.version} channel="msi" source="landing-download" download className="msi-link" onClick={() => setRequestedDownload(currentDownloads.windowsMsi)}>MSI installer <ArrowRight size={16} aria-hidden="true" /></TrackedDownloadLink>
          )}
        </div>
      </div>
      <p className="download-reassurance">Free &amp; open source <span aria-hidden="true">·</span> No account required</p>
      {requestedDownload && (
        <div className="download-confirmation">
          <p role="status"><CheckCircle2 size={18} aria-hidden="true" />Installer requested. Check your browser&apos;s downloads.</p>
          <details className="updates-disclosure">
            <summary>Want release updates? <span>Optional</span></summary>
            <UpdatesSignup artifact={requestedDownload} source={`landing-${location}`} />
          </details>
        </div>
      )}
    </div>
  );
}
