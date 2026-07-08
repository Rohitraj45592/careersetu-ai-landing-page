'use client'

import { motion, useReducedMotion } from 'framer-motion'

/**
 * An original flying bird silhouette.
 * The wings flap continuously while the whole body glides across the
 * screen along a slow, calm, cinematic arc.
 */
function BirdShape({ className }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 120 60"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      {/* Body */}
      <path
        d="M58 32c3-1 6-1 9 0 2 .6 4 2 5 3 0-2 1-4 3-5-2 3-1 6 0 8-2-1-5-1-7 0-3 1-6 1-10 0z"
        fill="currentColor"
      />
      {/* Left wing (animated) */}
      <motion.path
        d="M60 32C46 30 30 22 8 26c18 2 30 8 52 10z"
        fill="currentColor"
        style={{ transformOrigin: '60px 32px' }}
        animate={{ rotate: [-16, 18, -16] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Right wing (animated, offset) */}
      <motion.path
        d="M60 32C74 29 92 22 116 26c-20 3-34 8-56 10z"
        fill="currentColor"
        style={{ transformOrigin: '60px 32px' }}
        animate={{ rotate: [16, -18, 16] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.svg>
  )
}

type FlyingBirdProps = {
  className?: string
  /** total travel duration in seconds */
  duration?: number
  /** delay before the glide starts */
  delay?: number
  /** vertical drift amount in px */
  drift?: number
  /** size class for the bird itself */
  size?: string
}

export function FlyingBird({
  className,
  duration = 26,
  delay = 4,
  drift = 40,
  size = 'w-16',
}: FlyingBirdProps) {
  const reduce = useReducedMotion()
  if (reduce) return null

  return (
    <motion.div
      className={className}
      initial={{ x: '-12vw', y: 0, opacity: 0 }}
      animate={{
        x: ['-12vw', '30vw', '65vw', '112vw'],
        y: [0, -drift, drift * 0.4, -drift * 0.6],
        opacity: [0, 0.9, 0.9, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: 10,
        ease: 'easeInOut',
        times: [0, 0.3, 0.7, 1],
      }}
      style={{ position: 'absolute', top: 0 }}
    >
      <BirdShape className={`${size} text-foreground/45`} />
    </motion.div>
  )
}
