import Link from 'next/link'
import { ArrowLeft, Sparkles, ShieldCheck, Zap } from 'lucide-react'
import { BrandLogo } from '@/components/brand-logo'

const highlights = [
  {
    icon: Sparkles,
    title: 'AI resume analysis',
    description: 'Instant, recruiter-grade feedback on every submission.',
  },
  {
    icon: Zap,
    title: 'Mock interviews',
    description: 'Practice with AI and get scored on real questions.',
  },
  {
    icon: ShieldCheck,
    title: 'Privacy first',
    description: 'Your data stays yours. Encrypted end to end.',
  },
]

export function AuthShell({
  title,
  description,
  children,
  footer,
}: {
  title: string
  description: string
  children: React.ReactNode
  footer?: React.ReactNode
}) {
  return (
    <main className="grid min-h-svh bg-background lg:grid-cols-2">
      {/* Brand / marketing panel */}
      <aside className="relative hidden overflow-hidden lg:block">
        <img
          src="/images/hero-landscape.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/30" />

        <div className="relative z-10 flex h-full flex-col justify-between p-10 xl:p-14">
          <Link href="/" className="w-fit" aria-label="CareerSetu AI home">
            <span className="[&_span]:text-primary-foreground [&_.text-accent]:text-accent-soft">
              <BrandLogo />
            </span>
          </Link>

          <div className="max-w-md">
            <h2 className="text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-primary-foreground xl:text-5xl">
              Crack placements with AI.
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/70">
              Join 10,000+ students landing offers faster with a personalized AI
              career copilot.
            </p>

            <ul className="mt-10 flex flex-col gap-5">
              {highlights.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/10 text-accent-soft ring-1 ring-inset ring-primary-foreground/15">
                    <item.icon className="size-5" />
                  </span>
                  <div>
                    <p className="font-medium text-primary-foreground">
                      {item.title}
                    </p>
                    <p className="text-sm text-primary-foreground/60">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-sm text-primary-foreground/50">
            &copy; {new Date().getFullYear()} CareerSetu AI. All rights reserved.
          </p>
        </div>
      </aside>

      {/* Form panel */}
      <div className="flex flex-col px-5 py-8 sm:px-8">
        <div className="flex items-center justify-between lg:hidden">
          <Link href="/" aria-label="CareerSetu AI home">
            <BrandLogo />
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center py-10">
          <div className="w-full max-w-md">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Back to home
            </Link>

            <div className="mb-8">
              <h1 className="text-balance font-display text-3xl font-semibold tracking-tight text-foreground">
                {title}
              </h1>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>

            {children}

            {footer ? (
              <div className="mt-8 text-center text-sm text-muted-foreground">
                {footer}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  )
}
