"use client";
import { useRef, useState } from "react";

interface Props {
  beforeImage: string;
  afterImage: string;
  altBefore?: string;
  altAfter?: string;
  labelBefore?: string;
  labelAfter?: string;
  service?: string;
}

export default function ImageComparisonSlider({
  beforeImage,
  afterImage,
  altBefore = "Före",
  altAfter = "Efter",
  labelBefore = "Före",
  labelAfter = "Efter",
  service,
}: Props) {
  const [pos, setPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const calcPos = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
    if (!hasInteracted) setHasInteracted(true);
  };

  return (
    <div className="space-y-3">
      {service && <p className="eyebrow">{service}</p>}
      <div
        ref={containerRef}
        className="relative select-none overflow-hidden rounded-[var(--radius)] cursor-col-resize"
        style={{ aspectRatio: "16/9" }}
        onMouseDown={(e) => { setIsDragging(true); calcPos(e.clientX); }}
        onMouseMove={(e) => { if (isDragging) calcPos(e.clientX); }}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchStart={(e) => { setIsDragging(true); calcPos(e.touches[0].clientX); }}
        onTouchMove={(e) => { e.preventDefault(); calcPos(e.touches[0].clientX); }}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* Before */}
        <img
          src={beforeImage}
          alt={altBefore}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          draggable={false}
        />

        {/* After — clipped */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img
            src={afterImage}
            alt={altAfter}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            draggable={false}
          />
        </div>

        {/* Divider */}
        <div
          className="absolute top-0 bottom-0 w-px bg-white/80"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="m9 18-6-6 6-6M15 6l6 6-6 6" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 px-2 py-1 rounded-md text-xs font-medium backdrop-blur-sm bg-white/70 border border-white/40 pointer-events-none">
          {labelBefore}
        </div>
        <div className="absolute top-3 right-3 px-2 py-1 rounded-md text-xs font-medium backdrop-blur-sm bg-[var(--dark)]/60 text-[var(--dark-text)] border border-white/10 pointer-events-none">
          {labelAfter}
        </div>

        {/* Hint */}
        {!hasInteracted && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full text-xs backdrop-blur-sm bg-white/70 border border-white/40 pointer-events-none whitespace-nowrap">
            Dra för att jämföra
          </div>
        )}
      </div>
    </div>
  );
}
