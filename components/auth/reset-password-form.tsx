'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { PasswordInput } from '@/components/auth/password-input'
import { createClient } from '@/lib/supabase/client'
import {
  resetPasswordSchema,
  type ResetPasswordValues,
} from '@/lib/validations/auth'

export function ResetPasswordForm() {
  const router = useRouter()
  const [formError, setFormError] = useState<string | null>(null)
  const [ready, setReady] = useState<boolean | null>(null)
  const [done, setDone] = useState(false)

  // A valid recovery link establishes a session via /auth/callback before
  // landing here. Confirm we actually have one.
  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(({ data }) => {
      setReady(!!data.user)
    })
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { password: '', confirmPassword: '' },
  })

  async function onSubmit(values: ResetPasswordValues) {
    setFormError(null)
    const supabase = createClient()
    const { error } = await supabase.auth.updateUser({
      password: values.password,
    })

    if (error) {
      setFormError(error.message)
      return
    }

    setDone(true)
    setTimeout(() => {
      router.push('/dashboard')
      router.refresh()
    }, 1200)
  }

  if (ready === false) {
    return (
      <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft">
        <p className="text-sm leading-relaxed text-muted-foreground">
          This password reset link is invalid or has expired.
        </p>
        <Link
          href="/forgot-password"
          className="mt-4 inline-block text-sm font-medium text-accent hover:text-accent-strong"
        >
          Request a new link
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      <div className="flex flex-col gap-2">
        <Label htmlFor="password">New password</Label>
        <PasswordInput
          id="password"
          autoComplete="new-password"
          placeholder="At least 8 characters"
          aria-invalid={!!errors.password}
          {...register('password')}
        />
        {errors.password ? (
          <p className="text-sm text-destructive">{errors.password.message}</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="confirmPassword">Confirm new password</Label>
        <PasswordInput
          id="confirmPassword"
          autoComplete="new-password"
          placeholder="Re-enter your new password"
          aria-invalid={!!errors.confirmPassword}
          {...register('confirmPassword')}
        />
        {errors.confirmPassword ? (
          <p className="text-sm text-destructive">
            {errors.confirmPassword.message}
          </p>
        ) : null}
      </div>

      {formError ? (
        <p
          role="alert"
          className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive"
        >
          {formError}
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        className="h-11 rounded-xl bg-primary font-medium text-primary-foreground hover:bg-primary/90"
        disabled={isSubmitting || done || ready === null}
      >
        {isSubmitting || done ? (
          <Loader2 className="size-4 animate-spin" />
        ) : null}
        {done ? 'Password updated' : isSubmitting ? 'Updating...' : 'Update password'}
      </Button>
    </form>
  )
}
