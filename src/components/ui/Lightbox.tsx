"use client";
import { useEffect } from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export default function Lightbox({ src, alt, isOpen, onClose, onPrev, onNext }: Props) {
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "ArrowRight") onNext?.();
    };
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", handler);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ background: "rgba(28,34,41,0.92)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-[var(--dark-text)] hover:bg-white/10 transition-colors"
        onClick={onClose}
        aria-label="Stäng"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>

      {onPrev && (
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-[var(--dark-text)] hover:bg-white/10 transition-colors"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Föregående"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
      )}

      {onNext && (
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-[var(--dark-text)] hover:bg-white/10 transition-colors"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Nästa"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      )}

      <div
        className="relative max-w-[90vw] max-h-[85vh] w-full h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="90vw"
        />
      </div>
    </div>
  );
}
