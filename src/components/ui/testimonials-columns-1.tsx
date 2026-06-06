"use client";
import React from "react";
import { motion } from "framer-motion";

export type Testimonial = {
  text: string;
  image?: string;
  name: string;
  role: string;
  rating?: number;
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill={i < Math.round(rating) ? "var(--accent)" : "var(--border)"}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export const TestimonialsColumn = ({
  className,
  testimonials,
  duration = 10,
}: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={className}>
      <motion.div
        animate={{ y: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-5 pb-5"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, role, rating }, i) => (
              <div
                key={i}
                className="p-5 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] max-w-xs w-full space-y-3"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                {rating !== undefined && <Stars rating={rating} />}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  &ldquo;{text}&rdquo;
                </p>
                <div className="flex items-center gap-2.5 pt-1 border-t border-[var(--border)]">
                  {image ? (
                    <img
                      src={image}
                      alt={name}
                      width={36}
                      height={36}
                      className="h-9 w-9 rounded-full object-cover flex-shrink-0"
                    />
                  ) : (
                    <div
                      className="h-9 w-9 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0"
                      style={{ background: "var(--border)", color: "var(--text)" }}
                    >
                      {name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <div
                      className="text-sm font-medium leading-tight"
                      style={{ color: "var(--text)" }}
                    >
                      {name}
                    </div>
                    <div
                      className="text-xs leading-tight mt-0.5"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
