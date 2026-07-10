import type { Metadata } from 'next'
import Link from 'next/link'
import { MailCheck } from 'lucide-react'
import { AuthShell } from '@/components/auth/auth-shell'

export const metadata: Metadata = {
  title: 'Verify your email — CareerSetu AI',
  description: 'Confirm your email address to activate your account.',
}

export default async function VerifyEmailPage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string }>
}) {
  const { email } = await searchParams

  return (
    <AuthShell
      title="Verify your email"
      description="You're almost there — confirm your email to activate your account."
      footer={
        <>
          Already verified?{' '}
          <Link
            href="/login"
            className="font-medium text-accent transition-colors hover:text-accent-strong"
          >
            Sign in
          </Link>
        </>
      }
    >
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center shadow-soft">
        <span className="flex size-12 items-center justify-center rounded-full bg-accent-soft text-accent">
          <MailCheck className="size-6" />
        </span>
        <p className="text-sm leading-relaxed text-muted-foreground">
          We&apos;ve sent a verification link
          {email ? (
            <>
              {' '}
              to <span className="font-medium text-foreground">{email}</span>
            </>
          ) : null}
          . Click the link in that email to finish setting up your account.
        </p>
        <p className="text-xs text-muted-foreground">
          Can&apos;t find it? Check your spam folder.
        </p>
      </div>
    </AuthShell>
  )
}
