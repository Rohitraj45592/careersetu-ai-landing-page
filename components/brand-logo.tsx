import { cn } from '@/lib/utils'

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center text-accent',
        className,
      )}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" fill="none" className="size-full">
        <path
          d="M12 1.5c.5 4.5 1.75 5.75 6.25 6.25v.5c-4.5.5-5.75 1.75-6.25 6.25h-.5c-.5-4.5-1.75-5.75-6.25-6.25v-.5c4.5-.5 5.75-1.75 6.25-6.25h.5Z"
          fill="currentColor"
        />
        <path
          d="M18.5 14.25c.28 2.5.97 3.19 3.47 3.47v.28c-2.5.28-3.19.97-3.47 3.47h-.28c-.28-2.5-.97-3.19-3.47-3.47v-.28c2.5-.28 3.19-.97 3.47-3.47h.28Z"
          fill="currentColor"
          opacity="0.6"
        />
      </svg>
    </span>
  )
}

export function BrandLogo({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <BrandMark className="size-6" />
      <span className="font-display text-lg font-semibold tracking-tight text-foreground">
        CareerSetu <span className="text-accent">AI</span>
      </span>
    </div>
  )
}
