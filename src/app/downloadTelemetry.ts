export const TELEMETRY_DOWNLOAD_URL =
  "https://sqlmate-telemetry.nitishthakur-p3.workers.dev/v1/telemetry/download";

export interface DownloadClickPayload {
  source: string;
  channel: string;
  version: string;
}

type FetchImplementation = typeof fetch;

export const submitDownloadClick = async (
  payload: DownloadClickPayload,
  fetchImplementation: FetchImplementation = fetch
): Promise<boolean> => {
  try {
    const response = await fetchImplementation(TELEMETRY_DOWNLOAD_URL, {
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
