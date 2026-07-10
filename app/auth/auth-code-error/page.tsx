import type { Metadata } from 'next'
import Link from 'next/link'
import { AlertTriangle } from 'lucide-react'
import { AuthShell } from '@/components/auth/auth-shell'

export const metadata: Metadata = {
  title: 'Authentication error — CareerSetu AI',
}

export default function AuthCodeErrorPage() {
  return (
    <AuthShell
      title="Something went wrong"
      description="We couldn't complete the sign-in. The link may have expired or already been used."
    >
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center shadow-soft">
        <span className="flex size-12 items-center justify-center rounded-full bg-destructive/10 text-destructive">
          <AlertTriangle className="size-6" />
        </span>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Please try signing in again. If the problem continues, request a fresh
          link.
        </p>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-medium text-accent transition-colors hover:text-accent-strong"
          >
            Back to sign in
          </Link>
        </div>
      </div>
    </AuthShell>
  )
}
