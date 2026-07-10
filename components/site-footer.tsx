'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { BrandLogo } from '@/components/brand-logo'

const columns = [
  {
    title: 'Product',
    links: ['Features', 'How It Works', 'Roadmap', 'Pricing'],
  },
  {
    title: 'Resources',
    links: ['Resume Guide', 'Interview Prep', 'Blog', 'Help Center'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Privacy', 'Terms'],
  },
]

const socials = [
  {
    label: 'LinkedIn',
    href: '#',
    path: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.75-2.05C21.6 8.65 22 11.1 22 14.3V21h-4v-6c0-1.43-.03-3.27-2-3.27-2 0-2.3 1.56-2.3 3.17V21h-4V9Z',
  },
  {
    label: 'X',
    href: '#',
    path: 'M18.9 2H22l-7.5 8.6L23 22h-6.9l-5.4-7-6.2 7H1.4l8-9.2L1 2h7l4.9 6.5L18.9 2Zm-2.4 18h1.9L7.6 4H5.6l10.9 16Z',
  },
  {
    label: 'GitHub',
    href: '#',
    path: 'M12 2C6.5 2 2 6.6 2 12.3c0 4.5 2.9 8.3 6.8 9.7.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 3.9-1.4 6.8-5.2 6.8-9.7C22 6.6 17.5 2 12 2Z',
  },
  {
    label: 'Instagram',
    href: '#',
    path: 'M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.9-.1Zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Zm5.1-.3a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z',
  },
]

function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!email) return
    setDone(true)
    setEmail('')
    window.setTimeout(() => setDone(false), 2500)
  }

  return (
    <form onSubmit={onSubmit} className="mt-5">
      <label htmlFor="footer-email" className="text-sm font-medium text-foreground">
        Stay in the loop
      </label>
      <p className="mt-1 text-sm text-muted-foreground">
        Placement tips and product updates. No spam.
      </p>
      <div className="mt-3 flex gap-2">
        <input
          id="footer-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@college.edu"
          className="h-11 w-full rounded-full border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-ring/40"
        />
        <button
          type="submit"
          aria-label="Subscribe to newsletter"
          className="flex h-11 shrink-0 items-center gap-1.5 rounded-full bg-accent px-4 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-strong"
        >
          {done ? <Check className="size-4" /> : <ArrowRight className="size-4" />}
          <span className="sr-only sm:not-sr-only">
            {done ? 'Subscribed' : 'Subscribe'}
          </span>
        </button>
      </div>
    </form>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.4fr]">
          <div className="max-w-xs">
            <BrandLogo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Your AI career copilot for cracking placements — resume analysis,
              mock interviews and personalized roadmaps.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent-strong"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:max-w-xs">
            <h3 className="text-sm font-semibold text-foreground">Newsletter</h3>
            <Newsletter />
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CareerSetu AI. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made for students, by students.
          </p>
        </div>
      </div>
    </footer>
  )
}
