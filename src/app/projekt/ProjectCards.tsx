"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const WX = (id: string, w: number, h: number) =>
  `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_85,usm_0.66_1.00_0.01/photo.jpg`;

const BATH   = "b3fd8b_14bb52713d8f4dcb859bb717a9538a71~mv2.jpg";
const FACADE = "b3fd8b_6f6de8ed7a6f4ccfa0d023ef344e2f69~mv2.jpg";
const HALL   = "b3fd8b_bf089c83147e495493c6dd68ba875b74~mv2.jpg";
const FLOOR  = "b3fd8b_5f2d272af86a4103a46bc049c84dd2ce~mv2.jpg";
const STAIR  = "b3fd8b_b17dbd4766ee4e52b6740ab60aaeb08c~mv2.jpg";
const WARD   = "b3fd8b_741f8b5ae82a4a6799ac5b259363fbdc~mv2.jpg";

type Project = {
  id: number;
  title: string;
  subtitle: string;
  cover: string;
  images: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "Badrumsrenovering",
    subtitle: "Microcement · Bromma",
    cover: WX(BATH, 800, 1100),
    images: [WX(BATH, 1200, 900), WX(HALL, 1200, 900), WX(FLOOR, 1200, 900), WX(WARD, 1200, 900)],
  },
  {
    id: 2,
    title: "Fasadmålning",
    subtitle: "Måleri · Villaägare",
    cover: WX(FACADE, 800, 1100),
    images: [WX(FACADE, 1200, 900), WX(STAIR, 1200, 900), WX(HALL, 1200, 900), WX(BATH, 1200, 900)],
  },
  {
    id: 3,
    title: "Hall & entré",
    subtitle: "Microcement · Renovering",
    cover: WX(HALL, 800, 1100),
    images: [WX(HALL, 1200, 900), WX(BATH, 1200, 900), WX(WARD, 1200, 900), WX(FLOOR, 1200, 900)],
  },
  {
    id: 4,
    title: "Golvslipning",
    subtitle: "Parkett · Villalägenhet",
    cover: WX(FLOOR, 800, 1100),
    images: [WX(FLOOR, 1200, 900), WX(WARD, 1200, 900), WX(HALL, 1200, 900), WX(BATH, 1200, 900)],
  },
  {
    id: 5,
    title: "Trapphus BRF",
    subtitle: "Måleri · Hässelby",
    cover: WX(STAIR, 800, 1100),
    images: [WX(STAIR, 1200, 900), WX(FACADE, 1200, 900), WX(HALL, 1200, 900), WX(BATH, 1200, 900)],
  },
  {
    id: 6,
    title: "Garderob & inredning",
    subtitle: "Snickeri · Inbyggd",
    cover: WX(WARD, 800, 1100),
    images: [WX(WARD, 1200, 900), WX(FLOOR, 1200, 900), WX(HALL, 1200, 900), WX(BATH, 1200, 900)],
  },
];

// ─── Project card ──────────────────────────────────────────────────────────────

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springCfg = { damping: 22, stiffness: 200 };
  const rotateX = useTransform(useSpring(mouseY, springCfg), [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(useSpring(mouseX, springCfg), [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - r.left) / r.width - 0.5);
    mouseY.set((e.clientY - r.top) / r.height - 0.5);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  return (
    <div style={{ perspective: "1200px" }} onClick={onClick}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative w-full aspect-[2/3] rounded-2xl cursor-pointer overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.18)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition-shadow duration-300"
      >
        {/* Photo */}
        <img
          src={project.cover}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          draggable={false}
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent via-40% to-black/75 transition-opacity duration-300 group-hover:opacity-90" />

        {/* Top label */}
        <div className="absolute top-0 left-0 right-0 p-5" style={{ transform: "translateZ(20px)" }}>
          <span className="text-[10px] font-medium tracking-widest uppercase text-white/60">
            {project.subtitle}
          </span>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between gap-3" style={{ transform: "translateZ(20px)" }}>
          <div>
            <h2 className="text-[1.15rem] font-[500] leading-tight tracking-[-0.02em] text-white">
              {project.title}
            </h2>
            <p className="mt-1.5 text-xs font-medium text-white/0 group-hover:text-white/70 transition-colors duration-300 flex items-center gap-1">
              Visa bilder
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </p>
          </div>

          {/* Eye icon button */}
          <div className="flex-shrink-0 w-9 h-9 rounded-full border border-white/25 bg-white/10 backdrop-blur-md flex items-center justify-center text-white/70 group-hover:bg-white/20 group-hover:text-white transition-colors duration-200">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Modal carousel ────────────────────────────────────────────────────────────

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [idx, setIdx] = useState(0);
  const total = project.images.length;
  const dragStartX = useRef(0);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  const handlePointerDown = (e: React.PointerEvent) => {
    dragStartX.current = e.clientX;
  };
  const handlePointerUp = (e: React.PointerEvent) => {
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 48) delta < 0 ? next() : prev();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
      style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl overflow-hidden"
        style={{ background: "var(--dark)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image area */}
        <div
          className="relative w-full aspect-[4/3] select-none"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          style={{ cursor: "grab", touchAction: "none" }}
        >
          <img
            key={idx}
            src={project.images[idx]}
            alt={`${project.title} bild ${idx + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />

          {/* Prev / Next */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            aria-label="Föregående bild"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            aria-label="Nästa bild"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
            aria-label="Stäng"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Info strip */}
        <div className="flex items-center justify-between gap-4 px-5 py-4">
          <div>
            <p className="text-[10px] font-medium tracking-widest uppercase" style={{ color: "var(--dark-secondary)" }}>
              {project.subtitle}
            </p>
            <p className="text-base font-[500] mt-0.5" style={{ color: "var(--dark-text)" }}>
              {project.title}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Dot indicators */}
            <div className="flex gap-1.5">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className="w-1.5 h-1.5 rounded-full transition-colors duration-200"
                  style={{ background: i === idx ? "white" : "rgba(255,255,255,0.25)" }}
                  aria-label={`Gå till bild ${i + 1}`}
                />
              ))}
            </div>

            {/* Counter */}
            <span className="text-xs tabular-nums" style={{ color: "var(--dark-secondary)" }}>
              {idx + 1} / {total}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Export ────────────────────────────────────────────────────────────────────

export default function ProjectCards() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelected(project)}
          />
        ))}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
