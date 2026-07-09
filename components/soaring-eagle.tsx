'use client'

/**
 * A single realistic soaring eagle that flies across the cinematic landscape
 * band. Horizontal flight, vertical glide, and wing flapping are all pure
 * transform-based CSS animations (see globals.css) for smooth 60fps playback.
 * It is rendered BEHIND the giant wordmark so it never covers the letters.
 */
export function SoaringEagle() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-[30%] z-0 sm:top-[26%]"
    >
      <div className="eagle-cross w-fit">
        <div className="eagle-glide w-fit">
          <svg
            viewBox="0 0 240 120"
            className="h-auto w-[130px] drop-shadow-[0_10px_14px_rgba(30,25,20,0.35)] sm:w-[180px] lg:w-[210px]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Tail */}
            <path
              d="M120 66 L112 96 Q120 102 128 96 Z"
              fill="#3a2c1d"
            />
            {/* Body */}
            <ellipse cx="120" cy="60" rx="9" ry="22" fill="#4a3826" />
            {/* Head + beak */}
            <circle cx="120" cy="34" r="9" fill="#efe9df" />
            <path d="M120 27 L120 20 Q123 22 122 26 Z" fill="#e8a530" />

            {/* Left wing */}
            <g className="eagle-wing-left">
              <path
                d="M114 46
                   C88 34 58 30 30 40
                   C42 44 54 50 62 58
                   C48 56 34 58 22 66
                   C40 66 54 70 64 76
                   C74 66 92 56 114 56 Z"
                fill="#5a4128"
              />
              <path
                d="M114 48
                   C92 40 66 38 44 46
                   C60 50 76 54 90 60
                   C100 56 108 52 114 54 Z"
                fill="#6f5334"
              />
            </g>

            {/* Right wing */}
            <g className="eagle-wing-right">
              <path
                d="M126 46
                   C152 34 182 30 210 40
                   C198 44 186 50 178 58
                   C192 56 206 58 218 66
                   C200 66 186 70 176 76
                   C166 66 148 56 126 56 Z"
                fill="#5a4128"
              />
              <path
                d="M126 48
                   C148 40 174 38 196 46
                   C180 50 164 54 150 60
                   C140 56 132 52 126 54 Z"
                fill="#6f5334"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}
