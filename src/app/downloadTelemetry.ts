export const TELEMETRY_DOWNLOAD_URL =
  "https://sqlmate-telemetry.nitishthakur-p3.workers.dev/v1/telemetry/download";
export const TELEMETRY_DOWNLOAD_LEAD_URL =
  "https://sqlmate-telemetry.nitishthakur-p3.workers.dev/v1/telemetry/download-lead";

export interface DownloadClickPayload {
  source: string;
  channel: string;
  version: string;
}

export interface DownloadLeadPayload {
  email: string;
  usage_type: "personal" | "organization";
  source: string;
  channel: string;
  version: string;
}

type FetchImplementation = typeof fetch;

const submitTelemetryRequest = async (
  url: string,
  payload: DownloadClickPayload | DownloadLeadPayload,
  fetchImplementation: FetchImplementation = fetch
): Promise<boolean> => {
  try {
    const response = await fetchImplementation(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
      keepalive: true,
      mode: "cors",
    });

    return response.ok;
  } catch {
    return false;
  }
};

export const submitDownloadClick = async (
  payload: DownloadClickPayload,
  fetchImplementation: FetchImplementation = fetch
): Promise<boolean> =>
  submitTelemetryRequest(TELEMETRY_DOWNLOAD_URL, payload, fetchImplementation);

export const submitDownloadLead = async (
  payload: DownloadLeadPayload,
  fetchImplementation: FetchImplementation = fetch
): Promise<boolean> =>
  submitTelemetryRequest(TELEMETRY_DOWNLOAD_LEAD_URL, payload, fetchImplementation);
