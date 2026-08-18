import assert from "node:assert/strict";
import test from "node:test";

import { getLeadCaptureModalContent } from "./leadCaptureModalContent.ts";

test("getLeadCaptureModalContent returns the idle modal copy", () => {
  const content = getLeadCaptureModalContent("idle");

  assert.equal(content.eyebrow, "Optional product updates");
  assert.equal(content.title, "Get release notes and team-ready updates");
  assert.match(content.description, /evaluating SqlMate for your workflow or team/i);
  assert.equal(content.dismissLabel, "Skip for now");
  assert.equal(content.submitLabel, "Keep me updated");
});

test("getLeadCaptureModalContent returns the submitted modal copy", () => {
  const content = getLeadCaptureModalContent("submitted");

  assert.equal(content.eyebrow, "You're on the list");
  assert.equal(content.title, "We'll keep you posted");
  assert.match(content.description, /quality improvements/i);
  assert.equal(content.dismissLabel, "Close");
});
