'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { BrandLogo } from '@/components/brand-logo'

const ease = [0.22, 1, 0.36, 1] as const

const social = [
  { label: 'GitHub', icon: Github, href: '#' },
  { label: 'LinkedIn', icon: Linkedin, href: '#' },
  { label: 'Contact', icon: Mail, href: '#' },
]

const legal = ['Privacy', 'Terms', 'Contact']

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease }}
        className="mx-auto max-w-6xl px-4 py-16"
      >
        <div className="flex flex-col items-center gap-8 text-center">
          <BrandLogo />
          <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
            Your AI career copilot for cracking placements — resume analysis,
            mock interviews and personalized roadmaps.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {social.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                className="flex size-11 items-center justify-center rounded-full border border-border bg-white/70 text-muted-foreground shadow-soft transition-colors hover:border-accent/40 hover:text-accent"
              >
                <item.icon className="size-4.5" />
              </motion.a>
            ))}
          </div>

          {/* Legal */}
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {legal.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CareerSetu AI. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            Made with <span className="text-destructive">♥</span> for students.
          </p>
        </div>
      </motion.div>
    </footer>
  )
}
