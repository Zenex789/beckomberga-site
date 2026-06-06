'use client';

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
} from 'react';
import { motion } from 'framer-motion';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = 'image',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const progressRef = useRef(0);
  const expandedRef = useRef(false);
  const touchStartYRef = useRef(0);
  const isMobileRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const autoExpandRafRef = useRef<number | null>(null);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
    progressRef.current = 0;
    expandedRef.current = false;
  }, [mediaType]);

  useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      isMobileRef.current = mobile;
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Auto-expand on mobile — swipe-to-expand is a desktop-only interaction
  useEffect(() => {
    if (!isMobile) return;

    const duration = 900; // ms
    const start = performance.now();

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const p = easeOut(t);
      progressRef.current = p;
      setScrollProgress(p);
      if (t < 1) {
        autoExpandRafRef.current = requestAnimationFrame(tick);
      } else {
        expandedRef.current = true;
        setMediaFullyExpanded(true);
        setShowContent(true);
      }
    };

    // Small delay so the page has painted before animation starts
    const timeout = setTimeout(() => {
      autoExpandRafRef.current = requestAnimationFrame(tick);
    }, 200);

    return () => {
      clearTimeout(timeout);
      if (autoExpandRafRef.current) cancelAnimationFrame(autoExpandRafRef.current);
    };
  }, [isMobile]);

  // Desktop: scroll/wheel driven expansion
  useEffect(() => {
    if (isMobileRef.current) return;

    const commit = (newProgress: number) => {
      progressRef.current = newProgress;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setScrollProgress(newProgress);
        if (newProgress >= 1) {
          expandedRef.current = true;
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      });
    };

    const handleWheel = (e: WheelEvent) => {
      if (expandedRef.current && e.deltaY < 0 && window.scrollY <= 5) {
        expandedRef.current = false;
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!expandedRef.current) {
        e.preventDefault();
        commit(Math.min(Math.max(progressRef.current + e.deltaY * 0.0009, 0), 1));
      }
    };

    const handleScroll = () => {
      if (!expandedRef.current) window.scrollTo(0, 0);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isMobile]); // re-run when isMobile resolves

  const mediaWidth = 300 + scrollProgress * (isMobile ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobile ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobile ? 180 : 150);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div className='transition-colors duration-700 ease-in-out overflow-x-hidden'>
      <section className='relative flex flex-col items-center justify-start min-h-[100dvh]'>
        <div className='relative w-full flex flex-col items-center min-h-[100dvh]'>
          <div
            className='absolute inset-0 z-0 h-full'
            style={{ opacity: 1 - scrollProgress }}
          >
            <img
              src={bgImageSrc}
              alt='Bakgrund'
              className='w-screen h-screen'
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
            <div className='absolute inset-0 bg-black/40' />
          </div>

          <div className='container mx-auto flex flex-col items-center justify-start relative z-10'>
            <div className='flex flex-col items-center justify-center w-full h-[100dvh] relative'>

              {/* ── Title block ── */}
              <div
                className={`absolute inset-x-0 z-10 flex flex-col items-center ${
                  textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
                }`}
                style={{ top: 'clamp(4.5rem, 11vh, 7.5rem)' }}
              >
                <p className='text-[10px] uppercase tracking-[0.25em] mb-3' style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Tjänst
                </p>
                <h1
                  className='text-[clamp(2rem,5.5vw,3.75rem)] font-[300] text-white tracking-[-0.04em] leading-[1.05]'
                  style={{ transform: `translateX(-${textTranslateX}vw)` }}
                >
                  {firstWord}
                </h1>
                {restOfTitle && (
                  <h1
                    className='text-[clamp(2rem,5.5vw,3.75rem)] font-[300] text-white tracking-[-0.04em] leading-[1.05]'
                    style={{ transform: `translateX(${textTranslateX}vw)` }}
                  >
                    {restOfTitle}
                  </h1>
                )}
                {date && (
                  <p className='text-sm text-white/60 mt-2'>{date}</p>
                )}
              </div>

              {/* ── Media card ── */}
              <div
                className='absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden'
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  boxShadow: '0 8px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.06)',
                  willChange: 'width, height',
                }}
              >
                {mediaType === 'video' ? (
                  mediaSrc.includes('youtube.com') ? (
                    <div className='relative w-full h-full pointer-events-none'>
                      <iframe
                        width='100%'
                        height='100%'
                        src={
                          mediaSrc.includes('embed')
                            ? mediaSrc + (mediaSrc.includes('?') ? '&' : '?') + 'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                            : mediaSrc.replace('watch?v=', 'embed/') + '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' + mediaSrc.split('v=')[1]
                        }
                        className='w-full h-full'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                      />
                      <div className='absolute inset-0 z-10' style={{ pointerEvents: 'none' }} />
                      <div
                        className='absolute inset-0 bg-black'
                        style={{ opacity: Math.max(0, 0.3 - scrollProgress * 0.3) }}
                      />
                    </div>
                  ) : (
                    <div className='relative w-full h-full pointer-events-none'>
                      <video
                        src={mediaSrc}
                        poster={posterSrc}
                        autoPlay muted loop playsInline preload='auto'
                        className='w-full h-full object-cover'
                        controls={false}
                        disablePictureInPicture
                        disableRemotePlayback
                      />
                      <div className='absolute inset-0 z-10' style={{ pointerEvents: 'none' }} />
                      <div
                        className='absolute inset-0 bg-black'
                        style={{ opacity: Math.max(0, 0.3 - scrollProgress * 0.3) }}
                      />
                    </div>
                  )
                ) : (
                  <div className='relative w-full h-full'>
                    <img
                      src={mediaSrc}
                      alt={title || 'Media'}
                      className='w-full h-full object-cover'
                    />
                    <div
                      className='absolute inset-0 bg-black'
                      style={{ opacity: Math.max(0, 0.35 - scrollProgress * 0.35) }}
                    />
                  </div>
                )}
              </div>

              {/* ── Scroll hint (desktop only) ── */}
              {scrollToExpand && !isMobile && (
                <div
                  className='absolute bottom-8 inset-x-0 z-10 flex flex-col items-center gap-2 pointer-events-none'
                  style={{ opacity: Math.max(0, 1 - scrollProgress * 5) }}
                >
                  <p className='text-[10px] uppercase tracking-[0.25em]' style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {scrollToExpand}
                  </p>
                  <svg
                    className='animate-bounce'
                    width='14' height='14' viewBox='0 0 24 24'
                    fill='none' stroke='rgba(255,255,255,0.4)' strokeWidth={1.5} strokeLinecap='round'
                  >
                    <path d='m6 9 6 6 6-6' />
                  </svg>
                </div>
              )}

            </div>

            <motion.section
              className='flex flex-col w-full px-8 py-10 md:px-16 lg:py-20'
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.6 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
