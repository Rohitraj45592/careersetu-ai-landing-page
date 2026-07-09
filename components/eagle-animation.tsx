'use client'

type EagleAsset = 'video' | 'lottie' | 'image'

interface EagleAnimationProps {
  /**
   * External transparent animation asset.
   * - WebM / MP4  -> pass kind="video" (use this for true wing-flap animation)
   * - Lottie JSON -> pass kind="lottie" (rendered via <lottie-player>)
   * - Image / GIF / APNG / image sequence sprite -> pass kind="image"
   *
   * Defaults to the bundled photorealistic transparent eagle photo. To enable
   * real wing flapping + feather movement, pass a transparent WebM/Lottie/GLB:
   *   <EagleAnimation src="/media/eagle.webm" kind="video" />
   */
  src?: string
  /** How the asset should be rendered. Defaults to "image". */
  kind?: EagleAsset
  /** Optional className passthrough for the flying wrapper. */
  className?: string
}

/**
 * EagleAnimation
 *
 * A reusable, artwork-free flight animation. It provides the motion system
 * (horizontal cross-screen flight + gentle vertical glide + subtle rotation)
 * and renders whatever transparent asset you pass through `src`.
 *
 * The component intentionally contains NO eagle artwork of its own — you supply
 * the visual through `src` (WebM, Lottie, GLB-driven video, or image sequence).
 */
export function EagleAnimation({
  src = '/media/eagle.png',
  kind = 'image',
  className,
}: EagleAnimationProps) {
  return (
    // Full-bleed track: the flight path spans from outside the left edge
    // to outside the right edge of the parent section.
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Horizontal flight — moves the whole rig across the viewport width */}
      <div className={`eagle-cross absolute top-[22%] left-0 ${className ?? ''}`}>
        {/* Vertical glide + subtle rotation, layered so the motions compound */}
        <div className="eagle-glide">
          <div className="eagle-tilt h-[90px] w-[110px] sm:h-[120px] sm:w-[150px] lg:h-[150px] lg:w-[190px]">
            {/* ───────────────────────────────────────────────
                ASSET PLACEHOLDER
                Drop your transparent eagle asset in via `src`.
                No artwork is generated here on purpose.
               ─────────────────────────────────────────────── */}
            {src ? (
              kind === 'video' ? (
                <video
                  className="size-full object-contain"
                  src={src}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : kind === 'image' ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="size-full object-contain" src={src} alt="" />
              ) : (
                // Lottie: expects <lottie-player> web component to be registered.
                // @ts-expect-error - custom element provided by lottie-player script
                <lottie-player
                  src={src}
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                  style={{ width: '100%', height: '100%' }}
                />
              )
            ) : (
              // Visible marker while no asset is wired up (dev only).
              <div className="flex size-full items-center justify-center rounded-md border border-dashed border-white/40 bg-white/5 text-[10px] font-medium uppercase tracking-wide text-white/60">
                Eagle asset
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
