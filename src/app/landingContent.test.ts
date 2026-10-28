import assert from "node:assert/strict";
import test from "node:test";

import { faqs, featureHighlights } from "./landingContent.ts";

test("feature highlights describe shipped discovery and inspection workflows", () => {
  assert.deepEqual(featureHighlights.map(({ id }) => id), [
    "quick-open",
    "compare",
    "relationships",
    "inspect",
  ]);
  const copy = featureHighlights.map(({ description }) => description).join(" ");
  assert.match(copy, /saved queries/i);
  assert.match(copy, /read-only/i);
  assert.match(copy, /foreign keys/i);
  assert.match(copy, /sensitive values/i);
});

test("comparison FAQ does not imply a full-table diff or write capability", () => {
  const answer = faqs.find(({ question }) => question === "Can I compare two databases?")?.answer;
  assert.ok(answer);
  assert.match(answer, /same engine/i);
  assert.match(answer, /up to 200/i);
  assert.match(answer, /read-only/i);
  assert.match(answer, /not a full-table comparison/i);
});

test("AI FAQ describes supported providers and reviewed requests", () => {
  const answer = faqs.find(({ question }) => question === "How does optional AI work?")?.answer;

  assert.ok(answer);
  for (const provider of ["Gemini", "Groq", "Claude", "OpenAI"]) {
    assert.ok(answer.includes(provider));
  }
  assert.match(answer, /your own.*API key/i);
  assert.match(answer, /review.*before sending/i);
});
