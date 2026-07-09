'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { NAV_LINKS } from '@/lib/constants'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BrandLogo } from '@/components/brand-logo'
import { cn } from '@/lib/utils'



export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-3 z-50 px-4 sm:top-5"
    >
      <nav
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-white/50 px-3 py-2.5 pl-5 backdrop-blur-xl transition-all duration-300',
          scrolled
            ? 'bg-white/80 shadow-lift'
            : 'bg-white/55 shadow-soft',
        )}
      >
        <a href="#" className="shrink-0" aria-label="CareerSetu AI home">
          <BrandLogo />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          { NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            variant="ghost"
            size="lg"
            className="rounded-full px-4 font-medium text-foreground hover:bg-secondary"
            nativeButton={false}
            render={<a href="#" />}
          >
            Log In
          </Button>
          <Button
            size="lg"
            className="group rounded-full bg-primary px-4 font-medium text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 hover:bg-primary/90"
            nativeButton={false}
            render={<a href="#" />}
          >
            Get Started Free
            <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-full text-foreground md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-2 max-w-6xl rounded-3xl border border-white/60 bg-white/90 p-3 shadow-lift backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex flex-col gap-2 border-t border-border pt-3">
            <Button
              variant="outline"
              size="lg"
              className="w-full rounded-full"
              nativeButton={false}
            render={<a href="#" />}
            >
              Log In
            </Button>
            <Button
              size="lg"
              className="w-full rounded-full bg-primary text-primary-foreground"
              nativeButton={false}
            render={<a href="#" />}
            >
              Get Started Free
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
