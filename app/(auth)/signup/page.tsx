import type { Metadata } from 'next'
import Link from 'next/link'
import { AuthShell } from '@/components/auth/auth-shell'
import { SignupForm } from '@/components/auth/signup-form'

export const metadata: Metadata = {
  title: 'Create account — CareerSetu AI',
  description: 'Create your free CareerSetu AI account.',
}

export default function SignupPage() {
  return (
    <AuthShell
      title="Create your account"
      description="Start free — no credit card required. Get hired faster with AI."
      footer={
        <>
          Already have an account?{' '}
          <Link
            href="/login"
            className="font-medium text-accent transition-colors hover:text-accent-strong"
          >
            Sign in
          </Link>
        </>
      }
    >
      <SignupForm />
    </AuthShell>
  )
}
