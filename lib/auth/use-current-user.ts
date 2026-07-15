"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export type CurrentUser = {
  fullName: string;
  initial: string;
  avatarUrl: string | null;
  email: string | null;
};

const FALLBACK_USER: CurrentUser = {
  fullName: "Guest",
  initial: "G",
  avatarUrl: null,
  email: null,
};

/**
 * Reads the logged-in Supabase user on the client and returns a small,
 * display-ready profile: full name, initial (for a fallback avatar),
 * avatar image if one exists (e.g. from a Google OAuth login), and email.
 *
 * Falls back to a generic "Guest" profile while loading or if no user
 * is signed in, so components can render immediately without null checks.
 */
export function useCurrentUser() {
  const [user, setUser] = useState<CurrentUser>(FALLBACK_USER);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const supabase = createClient();

    supabase.auth.getUser().then(({ data }) => {
      if (!active) return;
      const authUser = data.user;
      if (!authUser) {
        setUser(FALLBACK_USER);
        setLoading(false);
        return;
      }

      const meta = authUser.user_metadata ?? {};
      const fullName: string =
        meta.full_name || meta.name || authUser.email?.split("@")[0] || "there";

      setUser({
        fullName,
        initial: fullName.trim().charAt(0).toUpperCase() || "U",
        avatarUrl: meta.avatar_url || meta.picture || null,
        email: authUser.email ?? null,
      });
      setLoading(false);
    });

    return () => {
      active = false;
    };
  }, []);

  return { user, loading };
}
