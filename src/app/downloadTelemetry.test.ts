import assert from "node:assert/strict";
import test from "node:test";

import {
  TELEMETRY_DOWNLOAD_URL,
  submitDownloadClick,
  type DownloadClickPayload,
} from "./downloadTelemetry.ts";

const payload: DownloadClickPayload = {
  source: "landing",
  channel: "dmg",
  version: "0.4.1",
};

test("submitDownloadClick posts download telemetry with keepalive", async () => {
  const requests: Array<{ input: RequestInfo | URL; init?: RequestInit }> = [];
  const fetchMock: typeof fetch = async (input, init) => {
    requests.push({ input, init });
    return new Response(null, { status: 202 });
  };

  const result = await submitDownloadClick(payload, fetchMock);

  assert.equal(result, true);
  assert.equal(requests.length, 1);
  assert.equal(requests[0]?.input, TELEMETRY_DOWNLOAD_URL);
  assert.equal(requests[0]?.init?.method, "POST");
  assert.equal(requests[0]?.init?.mode, "cors");
  assert.equal(requests[0]?.init?.keepalive, true);
  assert.deepEqual(JSON.parse(String(requests[0]?.init?.body)), payload);
});

test("submitDownloadClick returns false when telemetry rejects the request", async () => {
  const fetchMock: typeof fetch = async () => new Response(null, { status: 500 });

  const result = await submitDownloadClick(payload, fetchMock);

  assert.equal(result, false);
});
