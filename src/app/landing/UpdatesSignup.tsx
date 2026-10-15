"use client";

import Link from "next/link";
import { useId, useState, type FormEvent } from "react";

import { type DownloadArtifact } from "../downloads";
import { submitDownloadLead } from "../downloadTelemetry";

interface UpdatesSignupProps {
  artifact: DownloadArtifact;
  source: string;
}

export function UpdatesSignup({ artifact, source }: UpdatesSignupProps) {
  const emailId = useId();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;
    const form = new FormData(event.currentTarget);
    setStatus("submitting");
    const submitted = await submitDownloadLead({
      email: String(form.get("email") ?? "").trim(),
      usage_type: form.get("usage_type") === "organization" ? "organization" : "personal",
      source,
      channel: artifact.channel,
      version: artifact.version,
    });
    setStatus(submitted ? "success" : "error");
  };

  if (status === "success") return <p role="status">You&apos;re on the list. We&apos;ll send you release notes and product updates.</p>;

  return (
    <form className="updates-form" onSubmit={handleSubmit}>
      <p>Get release notes and product updates. Your download works without signing up.</p>
      <label htmlFor={emailId}>Email address</label>
      <input id={emailId} name="email" type="email" autoComplete="email" placeholder="you@example.com" required disabled={status === "submitting"} />
      <label htmlFor={`${emailId}-usage`}>How will you use sqlMate?</label>
      <select id={`${emailId}-usage`} name="usage_type" disabled={status === "submitting"}>
        <option value="personal">Personal use</option>
        <option value="organization">For a team or organization</option>
      </select>
      <p className="signup-privacy">By signing up, you agree to receive product updates. <Link href="/privacy">Privacy policy</Link></p>
      {status === "error" && <p role="alert" className="signup-error">We couldn&apos;t save your details. Please try again.</p>}
      <button type="submit" className="landing-button button-primary" disabled={status === "submitting"}>{status === "submitting" ? "Saving…" : "Keep me updated"}</button>
    </form>
  );
}
