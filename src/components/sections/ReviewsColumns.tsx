"use client";
import { motion } from "framer-motion";
import {
  TestimonialsColumn,
  type Testimonial,
} from "@/components/ui/testimonials-columns-1";

type Props = {
  testimonials: Testimonial[];
  rating: number;
  count: number;
  fromGoogle: boolean;
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 justify-center">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill={i < Math.round(rating) ? "var(--accent)" : "var(--border)"}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewsColumns({ testimonials, rating, count, fromGoogle }: Props) {
  const third = Math.ceil(testimonials.length / 3);
  const col1 = testimonials.slice(0, third);
  const col2 = testimonials.slice(third, third * 2);
  const col3 = testimonials.slice(third * 2);

  return (
    <section
      className="section-pad overflow-hidden"
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="container-site">
        {/* Animated heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center max-w-[540px] mx-auto mb-14"
        >
          <p className="eyebrow mb-5">Omdömen</p>

          {/* Aggregate score */}
          <div className="flex items-end justify-center gap-4 mb-6">
            <span
              className="text-[clamp(3rem,7vw,5.5rem)] font-[500] tracking-[-0.04em] leading-none"
              style={{ color: "var(--text)" }}
            >
              {rating.toFixed(1)}
            </span>
            <div className="pb-2 space-y-1.5">
              <Stars rating={rating} />
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                {fromGoogle
                  ? `${count} Google-recensioner`
                  : `Reco · ${count}+ omdömen`}
              </p>
            </div>
          </div>

          <h2
            className="text-[clamp(1.5rem,3vw,2.25rem)] font-[500] leading-[1.15] tracking-[-0.025em]"
            style={{ color: "var(--text)" }}
          >
            Vad kunderna säger
          </h2>
          <p className="mt-3 text-base" style={{ color: "var(--text-secondary)" }}>
            Vi är stolta över varje uppdrag — och det syns i omdömena.
          </p>
        </motion.div>

        {/* Scrolling columns */}
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[640px] overflow-hidden">
          <TestimonialsColumn testimonials={col1} duration={15} />
          <TestimonialsColumn
            testimonials={col2}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={col3}
            className="hidden lg:block"
            duration={17}
          />
        </div>

        {fromGoogle && (
          <p
            className="text-xs text-center mt-8"
            style={{ color: "var(--text-secondary)", opacity: 0.5 }}
          >
            Recensioner från Google. Powered by Google.
          </p>
        )}
      </div>
    </section>
  );
}
