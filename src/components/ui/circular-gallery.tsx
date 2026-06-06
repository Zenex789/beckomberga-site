"use client";

import React, { useState, useEffect, useRef, HTMLAttributes } from 'react';

const cn = (...classes: (string | undefined | null | false)[]) =>
  classes.filter(Boolean).join(' ');

export interface GalleryItem {
  common: string;
  binomial: string;
  photo: {
    url: string;
    text: string;
    pos?: string;
    by: string;
  };
}

interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[];
  radius?: number;
  autoRotateSpeed?: number;
  /** When true, the gallery only auto-rotates and ignores page scroll position. */
  autoRotateOnly?: boolean;
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  ({ items, className, radius = 600, autoRotateSpeed = 0.025, autoRotateOnly = false, ...props }, ref) => {
    const [rotation, setRotation] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);

    // Drag refs — avoid re-renders during drag
    const isDraggingRef = useRef(false);
    const dragStartXRef = useRef(0);
    const dragStartRotationRef = useRef(0);
    const velocityRef = useRef(0);
    const lastXRef = useRef(0);
    const lastTimeRef = useRef(0);

    const animationFrameRef = useRef<number | null>(null);

    // Scroll-based rotation (when autoRotateOnly is false)
    useEffect(() => {
      if (autoRotateOnly) return;

      const handleScroll = () => {
        if (isDraggingRef.current) return;
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
        setRotation(scrollProgress * 360);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }, [autoRotateOnly]);

    // Auto-rotate + momentum loop
    useEffect(() => {
      const autoRotate = () => {
        if (!isDraggingRef.current) {
          setRotation(prev => {
            // Apply decaying momentum from the last drag release
            const momentum = velocityRef.current * 0.3;
            velocityRef.current *= 0.92;
            const boost = Math.abs(velocityRef.current) > 0.02 ? momentum : 0;
            return prev + autoRotateSpeed + boost;
          });
        }
        animationFrameRef.current = requestAnimationFrame(autoRotate);
      };
      animationFrameRef.current = requestAnimationFrame(autoRotate);
      return () => {
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      };
    }, [autoRotateSpeed]);

    // Track window width for responsive card sizing
    useEffect(() => {
      const update = () => setWindowWidth(window.innerWidth);
      update();
      window.addEventListener('resize', update, { passive: true });
      return () => window.removeEventListener('resize', update);
    }, []);

    // Pointer handlers — single API for mouse + touch
    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
      isDraggingRef.current = true;
      dragStartXRef.current = e.clientX;
      dragStartRotationRef.current = rotation;
      lastXRef.current = e.clientX;
      lastTimeRef.current = performance.now();
      velocityRef.current = 0;
      setIsDragging(true);
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
      if (!isDraggingRef.current) return;
      const now = performance.now();
      const dt = now - lastTimeRef.current;
      const dx = e.clientX - lastXRef.current;
      if (dt > 0) velocityRef.current = dx / dt;
      lastXRef.current = e.clientX;
      lastTimeRef.current = now;
      const totalDelta = (e.clientX - dragStartXRef.current) * 0.3;
      setRotation(dragStartRotationRef.current + totalDelta);
    };

    const handlePointerUp = () => {
      isDraggingRef.current = false;
      setIsDragging(false);
    };

    // Responsive card dimensions — smaller on mobile to fit narrow viewports
    const isMobile = windowWidth > 0 && windowWidth < 768;
    const cardWidth = isMobile ? 150 : 220;
    const cardHeight = isMobile ? 200 : 300;
    const minGap = 30;
    // On mobile, cap radius at 45% of viewport width; safeRadius ensures no overlap
    const effectiveRadius = isMobile ? Math.min(radius, Math.floor(windowWidth * 0.45)) : radius;
    const safeRadius = Math.max(effectiveRadius, (cardWidth + minGap) / (2 * Math.sin(Math.PI / items.length)));

    const anglePerItem = 360 / items.length;

    return (
      <div
        ref={ref}
        role="region"
        aria-label="Bildgalleri"
        className={cn('relative w-full h-full flex items-center justify-center select-none', className)}
        style={{ perspective: '1800px', cursor: isDragging ? 'grabbing' : 'grab' }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        {...props}
      >
        <div
          className="relative w-full h-full"
          style={{ transform: `rotateY(${rotation}deg)`, transformStyle: 'preserve-3d' }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;
            const totalRotation = rotation % 360;
            const relativeAngle = (itemAngle + totalRotation + 360) % 360;
            const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle);
            const cosine = Math.max(0, Math.cos(normalizedAngle * Math.PI / 180));
            const opacity = 0.3 + 0.7 * cosine;
            const scale = 0.78 + 0.28 * cosine;
            const isFront = normalizedAngle < 30;
            const shadow = isFront
              ? '0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.08)'
              : '0 16px 40px rgba(0,0,0,0.35)';
            const textOpacity = Math.max(0, 1 - normalizedAngle / 38);

            return (
              <div
                key={item.photo.url}
                role="group"
                aria-label={item.common}
                className="absolute"
                style={{
                  width: cardWidth,
                  height: cardHeight,
                  transform: `rotateY(${itemAngle}deg) translateZ(${safeRadius}px) scale(${scale})`,
                  left: '50%',
                  top: '50%',
                  marginLeft: -cardWidth / 2,
                  marginTop: -cardHeight / 2,
                  opacity,
                  backfaceVisibility: 'hidden',
                  pointerEvents: 'none',
                }}
              >
                <div
                  className="relative w-full h-full rounded-[20px] overflow-hidden"
                  style={{ boxShadow: shadow }}
                >
                  <img
                    src={item.photo.url}
                    alt={item.photo.text}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: item.photo.pos || 'center' }}
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
                  <div
                    className="absolute bottom-0 left-0 w-full"
                    style={{ opacity: textOpacity, transition: 'opacity 0.2s linear' }}
                  >
                    <div
                      className="mx-2 mb-2 px-3 py-2 rounded-[10px]"
                      style={{
                        background: 'rgba(0,0,0,0.52)',
                        backdropFilter: 'blur(14px)',
                        WebkitBackdropFilter: 'blur(14px)',
                        border: '1px solid rgba(255,255,255,0.10)',
                      }}
                    >
                      <p
                        className="text-[12px] font-[500] text-white leading-tight tracking-[-0.01em]"
                        style={{ fontFamily: 'inherit' }}
                      >
                        {item.common}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

CircularGallery.displayName = 'CircularGallery';

export { CircularGallery };
