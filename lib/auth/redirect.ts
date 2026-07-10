/**
 * Builds the URL that Supabase should redirect back to after an auth action
 * (email confirmation, OAuth, password recovery).
 *
 * In the v0 preview, NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL routes callbacks
 * through the redirect proxy so they reach the running preview. In production
 * it falls back to the current origin's /auth/callback route.
 *
 * Client-only: relies on window.location.
 */
export function getAuthCallbackUrl(next = '/dashboard') {
  const base =
    process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL ??
    `${window.location.origin}/auth/callback`

  const url = new URL(base)
  url.searchParams.set('next', next)
  return url.toString()
}
