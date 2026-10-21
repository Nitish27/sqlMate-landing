import assert from "node:assert/strict";
import test from "node:test";

import { faqs } from "./landingContent.ts";

test("AI FAQ describes supported providers and reviewed requests", () => {
  const answer = faqs.find(({ question }) => question === "How does optional AI work?")?.answer;

  assert.ok(answer);
  for (const provider of ["Gemini", "Groq", "Claude", "OpenAI"]) {
    assert.ok(answer.includes(provider));
  }
  assert.match(answer, /your own.*API key/i);
  assert.match(answer, /review.*before sending/i);
});
