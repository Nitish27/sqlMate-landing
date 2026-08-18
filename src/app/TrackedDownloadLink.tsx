"use client";

import type {
  AnchorHTMLAttributes,
  MouseEvent,
  ReactNode,
} from "react";
import { submitDownloadClick } from "./downloadTelemetry";

interface TrackedDownloadLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  children: ReactNode;
  version: string;
  channel?: string;
  source?: string;
};

export function TrackedDownloadLink({
  children,
  version,
  channel = "dmg",
  source = "landing",
  onClick,
  download,
  href,
  ...props
}: TrackedDownloadLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented) {
      return;
    }

    if (!href || typeof href !== "string") {
      event.preventDefault();
      return;
    }

    void submitDownloadClick({
      source,
      channel,
      version,
    });
  };

  return (
    <a
      {...props}
      href={href}
      download={download}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
