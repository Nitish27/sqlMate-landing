"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiApple } from "react-icons/si";
import { PiWindowsLogoFill } from "react-icons/pi";

import { downloads, type DownloadArtifact } from "../downloads";
import { TrackedDownloadLink } from "../TrackedDownloadLink";
import { UpdatesSignup } from "./UpdatesSignup";

interface DownloadActionsProps {
  location: "hero" | "download";
}

export function DownloadActions({ location }: DownloadActionsProps) {
  const [requestedDownload, setRequestedDownload] = useState<DownloadArtifact | null>(null);
  const isDownloadSection = location === "download";

  return (
    <div className={`download-actions ${isDownloadSection ? "download-actions-full" : "download-actions-hero"}`}>
      <div className="platform-downloads">
        <div className="platform-download">
          <TrackedDownloadLink href={downloads.macos.href ?? undefined} version={downloads.macos.version} channel="dmg" source={`landing-${location}`} download className="landing-button button-primary platform-button" onClick={() => setRequestedDownload(downloads.macos)}>
            <SiApple size={22} aria-hidden="true" />{isDownloadSection ? "Download .dmg" : "Download for macOS"}
          </TrackedDownloadLink>
          {isDownloadSection && <p className="platform-caption">for macOS</p>}
        </div>
        <div className="platform-download">
          {downloads.windows.href ? (
            <TrackedDownloadLink href={downloads.windows.href} version={downloads.windows.version} channel="exe" source={`landing-${location}`} download className="landing-button button-secondary platform-button" onClick={() => setRequestedDownload(downloads.windows)}>
              <PiWindowsLogoFill size={22} aria-hidden="true" />{isDownloadSection ? "Download .exe" : "Download for Windows"}
            </TrackedDownloadLink>
          ) : (
            <button type="button" className="landing-button button-secondary platform-button" disabled aria-describedby={`windows-download-status-${location}`}>
              <PiWindowsLogoFill size={22} aria-hidden="true" />Download for Windows
            </button>
          )}
          {isDownloadSection && <p className="platform-caption">for Windows</p>}
          {!downloads.windows.href && <p id={`windows-download-status-${location}`} className="download-availability">Download link being updated</p>}
          {isDownloadSection && downloads.windowsMsi.href && (
            <TrackedDownloadLink href={downloads.windowsMsi.href} version={downloads.windowsMsi.version} channel="msi" source="landing-download" download className="msi-link" onClick={() => setRequestedDownload(downloads.windowsMsi)}>MSI installer <ArrowRight size={16} aria-hidden="true" /></TrackedDownloadLink>
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
