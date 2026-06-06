import Link from "next/link";
import { services } from "@/content/services";

export default function ServicesOverview({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;

  return (
    <section className="section-pad">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
          {/* Left — heading */}
          <div className="space-y-4 lg:sticky lg:top-24">
            <p className="eyebrow">Vad vi gör</p>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-[500] leading-[1.1] tracking-[-0.025em]">
              Tjänster &<br />hantverk
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Vi utför arbetet med hög noggrannhet och levererar i tid.
              Behöver du flera hantverkare — ett samtal räcker.
            </p>
            <Link
              href="/tjanster"
              className="inline-flex items-center gap-2 text-sm font-medium mt-4 hover:gap-3 transition-all"
              style={{ color: "var(--accent)" }}
            >
              Alla tjänster
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Right — service cards */}
          <div className="space-y-4">
            {list.map((service, i) => (
              <Link
                key={service.slug}
                href={`/tjanster/${service.slug}`}
                className="group relative block overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] transition-all hover:border-[var(--text-secondary)]"
                style={{ background: "var(--surface)", boxShadow: "var(--shadow-soft)" }}
              >
                <div className="flex flex-col sm:flex-row items-stretch">
                  {/* Thumbnail image */}
                  <div className="h-48 sm:h-auto sm:w-56 shrink-0 overflow-hidden">
                    <img
                      src={service.thumbnailImage}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg font-[500] tracking-tight group-hover:text-[var(--accent)] transition-colors">
                          {service.title}
                        </h3>
                        {service.partner && (
                          <span
                            className="text-[10px] px-2 py-0.5 rounded-full border shrink-0"
                            style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
                          >
                            Via partner
                          </span>
                        )}
                      </div>
                      <p className="text-sm mt-2 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        {service.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-4 text-sm font-medium" style={{ color: "var(--accent)" }}>
                      Läs mer
                      <svg
                        width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth={2}
                        className="translate-x-0 group-hover:translate-x-1 transition-transform"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
