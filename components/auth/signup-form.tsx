'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PasswordInput } from '@/components/auth/password-input'
import { OAuthButtons, AuthDivider } from '@/components/auth/oauth-buttons'
import { createClient } from '@/lib/supabase/client'
import { getAuthCallbackUrl } from '@/lib/auth/redirect'
import { signupSchema, type SignupValues } from '@/lib/validations/auth'

export function SignupForm() {
  const router = useRouter()
  const [formError, setFormError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  async function onSubmit(values: SignupValues) {
    setFormError(null)
    const supabase = createClient()
    const { data, error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        emailRedirectTo: getAuthCallbackUrl('/dashboard-v2'),
        data: { full_name: values.fullName },
      },
    })

    if (error) {
      setFormError(error.message)
      return
    }

    // If email confirmation is required there is no active session yet.
    if (data.session) {
      router.push('/dashboard-v2')
      router.refresh()
      return
    }

    router.push(`/verify-email?email=${encodeURIComponent(values.email)}`)
  }

  return (
    <div className="flex flex-col gap-6">
      <OAuthButtons next="/dashboard-v2" />
      <AuthDivider />

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
        <div className="flex flex-col gap-2">
          <Label htmlFor="fullName">Full name</Label>
          <Input
            id="fullName"
            type="text"
            autoComplete="name"
            placeholder="Jane Doe"
            aria-invalid={!!errors.fullName}
            {...register('fullName')}
          />
          {errors.fullName ? (
            <p className="text-sm text-destructive">{errors.fullName.message}</p>
          ) : null}
        </div>

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

        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
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
          <Label htmlFor="confirmPassword">Confirm password</Label>
          <PasswordInput
            id="confirmPassword"
            autoComplete="new-password"
            placeholder="Re-enter your password"
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
          disabled={isSubmitting}
        >
          {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : null}
          {isSubmitting ? 'Creating account...' : 'Create account'}
        </Button>
      </form>
    </div>
  )
}
