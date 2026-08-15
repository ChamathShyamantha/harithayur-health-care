"use client";

import Image from "next/image";
import { Droplets } from "@/components/canvasui/Droplets";

/**
 * Rain over the monsoon article's hero image. Used on that one route only, where the
 * subject is literally monsoon-season healing, so the effect illustrates the piece
 * rather than decorating it.
 *
 * The image is marked decorative. The article title is an h1 directly above it, so
 * nothing is lost if the browser captures this subtree into a canvas, and no real
 * content ever sits behind a shader.
 *
 * Settings are deliberately restrained: a light drizzle, gentle refraction, and no
 * tint, since the component's default tint is blue and this palette has none. The
 * effect pauses itself when scrolled out of view and honours prefers-reduced-motion.
 */
export function RainyHero({ src }: { src: string }) {
  return (
    <Droplets
      className="shape-arch relative aspect-16/9 w-full overflow-hidden bg-sage-deep"
      intensity={0.42}
      speed={0.75}
      scale={0.34}
      dropWidth={0.9}
      dropLength={1.1}
      refraction={0.14}
      blur={0}
      vignette={0}
      fallSpeed={0.7}
      wiggle={1}
      staticDrops={0.3}
      interactionRadius={0.28}
      interactionStrength={0.55}
      interactionDistortion={2}
      tintStrength={0}
    >
      <Image
        src={src}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
    </Droplets>
  );
}
