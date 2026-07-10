'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  Search,
  Wifi,
  Home,
  FileText,
  BarChart3,
  UserCheck,
  Route,
  FolderKanban,
  User,
  Settings,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

type DockItem = {
  label: string
  icon: LucideIcon
  href: string
}

const items: DockItem[] = [
  { label: 'Dashboard', icon: Home, href: '#' },
  { label: 'Resume Analyzer', icon: FileText, href: '#features' },
  { label: 'Skill Gap Analyzer', icon: BarChart3, href: '#features' },
  { label: 'AI Mock Interview', icon: UserCheck, href: '#features' },
  { label: 'Career Roadmap', icon: Route, href: '#roadmap' },
  { label: 'Projects', icon: FolderKanban, href: '#features' },
  { label: 'Profile', icon: User, href: '#' },
  { label: 'Settings', icon: Settings, href: '#' },
]

const ease = [0.22, 1, 0.36, 1] as const

export function AppDock() {
  const [active, setActive] = useState('Dashboard')

  return (
    <section
      aria-label="CareerSetu AI quick navigation"
      className="relative z-20 mx-auto max-w-4xl px-4 pb-16 sm:pb-24"
    >
      <Reveal>
        {/* Subtle continuous float */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="relative overflow-hidden rounded-[1.875rem] border border-white/40 bg-white/40 px-4 py-3 shadow-[0_20px_60px_-20px_rgba(30,20,60,0.28)] backdrop-blur-xl sm:px-5 sm:py-4"
        >
          {/* subtle top sheen */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"
          />

          {/* Top bar */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-lg bg-accent text-accent-foreground shadow-soft">
                <Sparkles className="size-3.5" />
              </span>
              <span className="font-display text-sm font-semibold tracking-tight text-foreground">
                CareerSetu AI
              </span>
            </div>

            <div className="flex items-center gap-2.5 text-foreground/70">
              <button
                type="button"
                aria-label="Search"
                className="flex size-7 items-center justify-center rounded-full transition-colors hover:bg-white/60 hover:text-foreground"
              >
                <Search className="size-3.5" />
              </button>
              <Wifi className="size-3.5" aria-hidden />
              <span className="text-xs font-medium tabular-nums text-foreground/75">
                09:41
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-3 h-px w-full bg-border/50" />

          {/* Dock items */}
          <nav
            aria-label="App sections"
            className="mt-4 grid grid-cols-4 gap-x-3 gap-y-4 sm:flex sm:items-start sm:justify-between sm:gap-2"
          >
            {items.map((item, i) => {
              const isActive = active === item.label
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActive(item.label)}
                  aria-current={isActive ? 'page' : undefined}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.035 * i, ease }}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  className="group flex flex-col items-center gap-1.5 rounded-xl px-1 py-1 text-center outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white/50"
                >
                  <span
                    className={cn(
                      'flex size-10 items-center justify-center rounded-[0.9rem] border transition-all duration-300',
                      isActive
                        ? 'scale-105 border-accent/40 bg-white/80 text-accent-strong shadow-[0_0_0_3px_color-mix(in_oklab,var(--accent)_18%,transparent),0_8px_24px_-8px_color-mix(in_oklab,var(--accent)_45%,transparent)]'
                        : 'border-white/50 bg-white/65 text-foreground/70 shadow-soft group-hover:border-accent/25 group-hover:bg-white/85 group-hover:text-accent-strong',
                    )}
                  >
                    <item.icon className="size-[18px]" />
                  </span>
                  <span
                    className={cn(
                      'text-[10px] font-medium leading-tight transition-colors sm:text-[11px]',
                      isActive
                        ? 'text-accent-strong'
                        : 'text-muted-foreground group-hover:text-foreground',
                    )}
                  >
                    {item.label}
                  </span>
                </motion.a>
              )
            })}
          </nav>
        </motion.div>
      </Reveal>
    </section>
  )
}
