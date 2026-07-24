"use client";

import { createClient } from "@/lib/supabase/client";

/**
 * Base URL of the FastAPI backend (app/dashboard-v2/../../backend).
 * Set NEXT_PUBLIC_API_URL in .env.local, e.g. http://localhost:8000
 */
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
  }
}

/**
 * Calls the FastAPI backend (/api/v1/...) with the current Supabase
 * session's access_token attached as a Bearer header. Supabase itself
 * still owns login/signup/logout/session refresh - this only forwards
 * the token it already issued.
 *
 * Usage:
 *   const profile = await apiFetch<Profile>("/api/v1/profile/me");
 *   await apiFetch("/api/v1/profile/me", { method: "PUT", body: JSON.stringify(patch) });
 */
export async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const response = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(session?.access_token ? { Authorization: `Bearer ${session.access_token}` } : {}),
      ...init?.headers,
    },
  });

  if (!response.ok) {
    const body = await response.json().catch(() => ({ detail: response.statusText }));
    throw new ApiError(response.status, body.detail ?? "Request failed");
  }

  if (response.status === 204) return undefined as T;
  return response.json() as Promise<T>;
}
