"use client";

import { cn } from "@/lib/utils";

interface BlurredOrbProps {
  className?: string;
  style?: React.CSSProperties;
}

export default function BlurredOrb({ className, style }: BlurredOrbProps) {
  return (
    <div
      className={cn("pointer-events-none", className)}
      style={style}
      aria-hidden="true"
    />
  );
}
