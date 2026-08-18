"use client";

import type {
  AnchorHTMLAttributes,
  FormEvent,
  MouseEvent,
  ReactNode,
} from "react";
import { CheckCircle2, Download, X } from "lucide-react";
import { useEffect, useState } from "react";

import { submitDownloadClick, submitDownloadLead } from "./downloadTelemetry";
import {
  getLeadCaptureModalContent,
  type LeadCaptureModalState,
} from "./leadCaptureModalContent";

type UsageType = "personal" | "organization";

interface TrackedDownloadLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  children: ReactNode;
  version: string;
  channel?: string;
  source?: string;
  captureLead?: boolean;
}

export function TrackedDownloadLink({
  children,
  version,
  channel = "dmg",
  source = "landing",
  captureLead = false,
  onClick,
  download,
  href,
  ...props
}: TrackedDownloadLinkProps) {
  const [isLeadCaptureOpen, setIsLeadCaptureOpen] = useState(false);
  const [isLeadCaptureDismissed, setIsLeadCaptureDismissed] = useState(false);
  const [leadCaptureState, setLeadCaptureState] = useState<LeadCaptureModalState>("idle");
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [leadSubmissionError, setLeadSubmissionError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [usageType, setUsageType] = useState<UsageType>("personal");
  const modalContent = getLeadCaptureModalContent(leadCaptureState);

  const closeLeadCapture = () => {
    setIsLeadCaptureOpen(false);
    setIsLeadCaptureDismissed(true);
  };

  useEffect(() => {
    if (!isLeadCaptureOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLeadCaptureOpen(false);
        setIsLeadCaptureDismissed(true);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLeadCaptureOpen]);

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

    if (captureLead && !isLeadCaptureDismissed) {
      setLeadCaptureState("idle");
      setLeadSubmissionError(null);
      setIsLeadCaptureOpen(true);
    }
  };

  const handleLeadSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmittingLead(true);
    setLeadSubmissionError(null);

    const submitted = await submitDownloadLead({
      email: email.trim(),
      usage_type: usageType,
      source,
      channel,
      version,
    });

    if (submitted) {
      setLeadCaptureState("submitted");
      setEmail("");
      setLeadSubmissionError(null);
    } else {
      setLeadSubmissionError("We could not save your details. Please try again.");
    }

    setIsSubmittingLead(false);
  };

  return (
    <>
      <a
        {...props}
        href={href}
        download={download}
        onClick={handleClick}
      >
        {children}
      </a>

      {captureLead && isLeadCaptureOpen ? (
        <div
          className="lead-capture-backdrop fixed inset-0 z-[120] flex items-center justify-center bg-black/78 px-4 py-8 backdrop-blur-md"
          onClick={closeLeadCapture}
        >
          <div
            aria-labelledby="lead-capture-title"
            aria-modal="true"
            className="lead-capture-panel relative w-full max-w-xl overflow-hidden rounded-[32px] border border-white/10 bg-[#171a1f]/96 p-7 shadow-[0_30px_120px_rgba(0,0,0,0.55)] glass sm:p-8"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
            <div className="absolute right-[-96px] top-[-96px] h-56 w-56 rounded-full bg-accent/12 blur-3xl" />
            <div className="absolute bottom-[-120px] left-[-64px] h-48 w-48 rounded-full bg-white/5 blur-3xl" />
            <button
              aria-label="Close update signup"
              className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-text-muted transition-colors hover:border-white/20 hover:text-white"
              onClick={closeLeadCapture}
              type="button"
            >
              <X size={18} />
            </button>

            <div className="flex items-start gap-4 pr-12">
              <div className="mt-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-accent/12 text-accent shadow-[0_0_30px_rgba(0,122,204,0.16)]">
                {leadCaptureState === "submitted" ? <CheckCircle2 size={22} /> : <Download size={22} />}
              </div>
              <div>
                <p className="text-sm font-medium tracking-[0.12em] text-accent uppercase">{modalContent.eyebrow}</p>
                <h3 id="lead-capture-title" className="mt-2 text-3xl font-semibold tracking-tight text-white">
                  {modalContent.title}
                </h3>
                <p className="mt-3 max-w-lg text-base leading-relaxed text-text-secondary">
                  {modalContent.description}
                </p>
                {leadCaptureState === "submitted" ? null : (
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-text-secondary">
                      Release notes
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-text-secondary">
                      Stability updates
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-text-secondary">
                      Team-ready improvements
                    </span>
                  </div>
                )}
              </div>
            </div>

            {leadCaptureState === "submitted" ? (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent/80"
                  onClick={closeLeadCapture}
                  type="button"
                >
                  {modalContent.dismissLabel}
                </button>
              </div>
            ) : (
              <form className="mt-8 space-y-5" onSubmit={handleLeadSubmit}>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-white">
                    Work email or personal email
                  </span>
                  <input
                    autoFocus
                    className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3.5 text-white outline-none transition-colors placeholder:text-text-muted focus:border-accent"
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    required
                    type="email"
                    value={email}
                  />
                </label>

                <fieldset>
                  <legend className="mb-2 block text-sm font-medium text-white">
                    Usage type
                  </legend>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white transition-colors hover:border-accent/40">
                      <input
                        checked={usageType === "personal"}
                        className="accent-[var(--color-accent)]"
                        name="usage-type"
                        onChange={() => setUsageType("personal")}
                        type="radio"
                      />
                      Personal
                    </label>
                    <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white transition-colors hover:border-accent/40">
                      <input
                        checked={usageType === "organization"}
                        className="accent-[var(--color-accent)]"
                        name="usage-type"
                        onChange={() => setUsageType("organization")}
                        type="radio"
                      />
                      Organization
                    </label>
                  </div>
                </fieldset>

                <p className="text-sm leading-relaxed text-text-muted">
                  Optional. Best if you&apos;re trialing SqlMate for a client team or internal workflow.
                </p>

                {leadSubmissionError ? (
                  <p className="text-sm text-[#fda4af]">{leadSubmissionError}</p>
                ) : null}

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent/80 disabled:cursor-not-allowed disabled:opacity-60"
                    disabled={isSubmittingLead}
                    type="submit"
                  >
                    {isSubmittingLead ? "Saving..." : modalContent.submitLabel}
                  </button>
                  <button
                    className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 font-medium text-white transition-colors hover:border-accent/40"
                    onClick={closeLeadCapture}
                    type="button"
                  >
                    {modalContent.dismissLabel}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
