"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InteractiveTravelCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  actionText: string;
  href: string;
  onActionClick: () => void;
  className?: string;
}

export const InteractiveTravelCard = React.forwardRef<
  HTMLDivElement,
  InteractiveTravelCardProps
>(({ title, subtitle, imageUrl, actionText, href, onActionClick, className }, ref) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 180 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={cn("relative w-[22rem] h-[30rem] rounded-2xl cursor-pointer", className)}
    >
      {/* Card face */}
      <div
        style={{ transform: "translateZ(0px)", transformStyle: "preserve-3d" }}
        className="absolute inset-0 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
      >
        {/* Background image */}
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Multi-stop gradient: dark top for title readability, clear middle, dark bottom for button */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/5 via-50% to-black/80" />

        {/* Top section — title + link */}
        <div
          className="absolute top-0 left-0 right-0 p-6 flex items-start justify-between"
          style={{ transform: "translateZ(30px)" }}
        >
          <div>
            {/* Service chip */}
            <span className="inline-block text-[10px] font-medium tracking-widest uppercase text-white/60 mb-2">
              {subtitle}
            </span>
            <h2 className="text-[1.35rem] font-[500] leading-[1.2] tracking-[-0.02em] text-white">
              {title}
            </h2>
          </div>

          {/* External link button */}
          <motion.a
            href={href}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.92 }}
            aria-label={`Läs mer om ${title}`}
            onClick={(e) => { e.preventDefault(); onActionClick(); }}
            style={{ transform: "translateZ(20px)" }}
            className="flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors"
          >
            <ArrowUpRight className="h-4 w-4 text-white" />
          </motion.a>
        </div>

        {/* Bottom section — CTA */}
        <div
          className="absolute bottom-0 left-0 right-0 p-6"
          style={{ transform: "translateZ(30px)" }}
        >
          <motion.button
            onClick={onActionClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full rounded-xl py-3 text-sm font-[500] tracking-tight text-white transition-all"
            style={{
              background: "rgba(46,71,86,0.75)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            {actionText}
          </motion.button>
        </div>
      </div>

      {/* Subtle shadow plane below */}
      <div
        className="absolute inset-x-4 -bottom-4 h-full rounded-2xl opacity-20 blur-xl"
        style={{
          background: "var(--text)",
          transform: "translateZ(-20px)",
        }}
      />
    </motion.div>
  );
});
InteractiveTravelCard.displayName = "InteractiveTravelCard";
