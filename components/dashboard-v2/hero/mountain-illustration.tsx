"use client";

import { motion } from "framer-motion";

export default function MountainHero() {
  return (
    <div className="relative h-[430px] w-full overflow-hidden rounded-[32px] bg-[#F8F8F8]">

      {/* Sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50 to-neutral-100" />

      {/* Sun Glow */}
      <div className="absolute right-16 top-10 h-28 w-28 rounded-full bg-neutral-300/30 blur-3xl" />

      {/* Illustration starts here */}

      {/* Mountain Layer 1 */}
<svg
  className="absolute bottom-0 left-0 w-full"
  viewBox="0 0 900 450"
>
  <path
    d="M0 450
       L170 220
       L330 340
       L500 140
       L690 320
       L900 180
       L900 450 Z"
    fill="#E5E5E5"
  />
</svg>

{/* Mountain Layer 2 */}
<svg
  className="absolute bottom-0 left-0 w-full"
  viewBox="0 0 900 450"
>
  <path
    d="M0 450
       L230 180
       L390 320
       L570 120
       L760 300
       L900 230
       L900 450 Z"
    fill="#CFCFCF"
  />
</svg>

    </div>
  );
}