'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Loader2, MailCheck } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { createClient } from '@/lib/supabase/client'
import { getAuthCallbackUrl } from '@/lib/auth/redirect'
import {
  forgotPasswordSchema,
  type ForgotPasswordValues,
} from '@/lib/validations/auth'

export function ForgotPasswordForm() {
  const [formError, setFormError] = useState<string | null>(null)
  const [sentTo, setSentTo] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: '' },
  })

  async function onSubmit(values: ForgotPasswordValues) {
    setFormError(null)
    const supabase = createClient()
    const { error } = await supabase.auth.resetPasswordForEmail(values.email, {
      redirectTo: getAuthCallbackUrl('/reset-password'),
    })

    if (error) {
      setFormError(error.message)
      return
    }

    setSentTo(values.email)
  }

  if (sentTo) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center shadow-soft">
        <span className="flex size-12 items-center justify-center rounded-full bg-accent-soft text-accent">
          <MailCheck className="size-6" />
        </span>
        <div>
          <h2 className="font-display text-lg font-semibold text-foreground">
            Check your inbox
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            We sent a password reset link to{' '}
            <span className="font-medium text-foreground">{sentTo}</span>. Follow
            it to choose a new password.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
          {...register('email')}
        />
        {errors.email ? (
          <p className="text-sm text-destructive">{errors.email.message}</p>
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
        disabled={isSubmitting}
      >
        {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : null}
        {isSubmitting ? 'Sending link...' : 'Send reset link'}
      </Button>
    </form>
  )
}
