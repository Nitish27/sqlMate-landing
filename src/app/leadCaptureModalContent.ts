export type LeadCaptureModalState = "idle" | "submitted";

interface LeadCaptureModalContent {
  eyebrow: string;
  title: string;
  description: string;
  dismissLabel: string;
  submitLabel?: string;
}

export const getLeadCaptureModalContent = (
  state: LeadCaptureModalState
): LeadCaptureModalContent => {
  if (state === "submitted") {
    return {
      eyebrow: "You're on the list",
      title: "We'll keep you posted",
      description: "Expect release notes, quality improvements, and major product updates for SqlMate. No marketing spam.",
      dismissLabel: "Close",
    };
  }

  return {
    eyebrow: "Optional product updates",
    title: "Get release notes and team-ready updates",
    description: "If you're evaluating SqlMate for your workflow or team, share your email for release notes, quality improvements, and major product updates.",
    dismissLabel: "Skip for now",
    submitLabel: "Keep me updated",
  };
};
