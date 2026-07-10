'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PasswordInput } from '@/components/auth/password-input'
import { OAuthButtons, AuthDivider } from '@/components/auth/oauth-buttons'
import { createClient } from '@/lib/supabase/client'
import { loginSchema, type LoginValues } from '@/lib/validations/auth'

export function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get('redirectedFrom') ?? '/dashboard'
  const [formError, setFormError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  })

  async function onSubmit(values: LoginValues) {
    setFormError(null)
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    })

    if (error) {
      setFormError(error.message)
      return
    }

    router.push(redirectTo)
    router.refresh()
  }

  return (
    <div className="flex flex-col gap-6">
      <OAuthButtons next={redirectTo} />
      <AuthDivider />

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

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link
              href="/forgot-password"
              className="text-sm font-medium text-accent transition-colors hover:text-accent-strong"
            >
              Forgot password?
            </Link>
          </div>
          <PasswordInput
            id="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            aria-invalid={!!errors.password}
            {...register('password')}
          />
          {errors.password ? (
            <p className="text-sm text-destructive">{errors.password.message}</p>
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
          {isSubmitting ? 'Signing in...' : 'Sign in'}
        </Button>
      </form>
    </div>
  )
}
