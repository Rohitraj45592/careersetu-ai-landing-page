'use client'

import * as React from 'react'
import { Loader2 } from 'lucide-react'
import type { Provider } from '@supabase/supabase-js'
import { Button } from '@/components/ui/button'
import { createClient } from '@/lib/supabase/client'
import { getAuthCallbackUrl } from '@/lib/auth/redirect'

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.52 12.27c0-.82-.07-1.6-.2-2.36H12v4.47h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.88c2.27-2.1 3.57-5.18 3.57-8.74Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.08 7.95-2.9l-3.88-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.28v3.09A12 12 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29a7.2 7.2 0 0 1 0-4.58V6.62H1.28a12 12 0 0 0 0 10.76l3.99-3.09Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.44-3.44A11.96 11.96 0 0 0 12 0 12 12 0 0 0 1.28 6.62l3.99 3.09C6.22 6.86 8.87 4.75 12 4.75Z"
      />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.28 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  )
}

export function OAuthButtons({ next = '/dashboard' }: { next?: string }) {
  const [pending, setPending] = React.useState<Provider | null>(null)
  const [error, setError] = React.useState<string | null>(null)

  async function signInWith(provider: Provider) {
    setError(null)
    setPending(provider)
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: getAuthCallbackUrl(next),
      },
    })
    if (error) {
      setError(error.message)
      setPending(null)
    }
    // On success the browser is redirected to the provider.
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-3">
        <Button
          type="button"
          variant="outline"
          size="lg"
          className="h-11 rounded-xl border-border bg-background font-medium hover:bg-muted"
          onClick={() => signInWith('google')}
          disabled={pending !== null}
        >
          {pending === 'google' ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <GoogleIcon />
          )}
          Google
        </Button>
        <Button
          type="button"
          variant="outline"
          size="lg"
          className="h-11 rounded-xl border-border bg-background font-medium hover:bg-muted"
          onClick={() => signInWith('github')}
          disabled={pending !== null}
        >
          {pending === 'github' ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <GithubIcon />
          )}
          GitHub
        </Button>
      </div>
      {error ? (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  )
}

export function AuthDivider() {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px flex-1 bg-border" />
      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        or continue with email
      </span>
      <span className="h-px flex-1 bg-border" />
    </div>
  )
}
