"use client";
import { useState } from "react";
import Lightbox from "@/components/ui/Lightbox";

interface GalleryItem {
  label: string;
  aspect: string;
  src: string;
}

interface Props {
  items: GalleryItem[];
}

export default function ServiceGallery({ items }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      {/* Mobile: horizontal scroll snap carousel */}
      <div
        className="md:hidden overflow-x-auto no-scrollbar"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch" as never,
          msOverflowStyle: "none" as never,
          scrollbarWidth: "none" as never,
        }}
      >
        <div className="flex gap-3" style={{ width: "max-content", paddingBottom: "4px" }}>
          {items.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="relative flex-none rounded-[var(--radius)] overflow-hidden cursor-pointer"
              style={{ width: "72vw", aspectRatio: "3/4", scrollSnapAlign: "start" }}
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Desktop: hero + 3-col grid */}
      <div className="hidden md:block">
        {items[0] && (
          <button
            onClick={() => setActiveIndex(0)}
            className={`relative w-full rounded-[var(--radius-lg)] overflow-hidden mb-4 ${items[0].aspect} block cursor-pointer group`}
          >
            <img
              src={items[0].src}
              alt={items[0].label}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </button>
        )}
        {items.length > 1 && (
          <div className="grid grid-cols-3 gap-3">
            {items.slice(1).map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i + 1)}
                className={`relative rounded-[var(--radius)] overflow-hidden ${item.aspect} block cursor-pointer group`}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {activeIndex !== null && (
        <Lightbox
          src={items[activeIndex].src}
          alt={items[activeIndex].label}
          isOpen
          onClose={() => setActiveIndex(null)}
          onPrev={activeIndex > 0 ? () => setActiveIndex((i) => (i ?? 1) - 1) : undefined}
          onNext={
            activeIndex < items.length - 1
              ? () => setActiveIndex((i) => (i ?? 0) + 1)
              : undefined
          }
        />
      )}
    </>
  );
}
