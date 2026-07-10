import { Suspense } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { AuthShell } from '@/components/auth/auth-shell'
import { LoginForm } from '@/components/auth/login-form'

export const metadata: Metadata = {
  title: 'Sign in — CareerSetu AI',
  description: 'Sign in to your CareerSetu AI account.',
}

export default function LoginPage() {
  return (
    <AuthShell
      title="Welcome back"
      description="Sign in to continue building your AI-powered career roadmap."
      footer={
        <>
          Don&apos;t have an account?{' '}
          <Link
            href="/signup"
            className="font-medium text-accent transition-colors hover:text-accent-strong"
          >
            Sign up for free
          </Link>
        </>
      }
    >
      <Suspense fallback={null}>
        <LoginForm />
      </Suspense>
    </AuthShell>
  )
}
