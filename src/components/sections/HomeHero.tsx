"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import RotatingWords from "@/components/ui/RotatingWords";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { services } from "@/content/services";

const transitionVariants = {
  container: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.25,
      },
    },
  },
  item: {
    hidden: { opacity: 0, filter: "blur(12px)", y: 12 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { type: "spring" as const, bounce: 0.3, duration: 1.5 },
    },
  },
};

export default function HomeHero() {
  return (
    <section
      className="relative min-h-[85vh] md:min-h-[92vh] flex items-center overflow-hidden"
      style={{ paddingTop: "5rem", paddingBottom: "3.5rem" }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "linear-gradient(160deg, #F4F4F2 60%, #E8EAEB 100%)" }}
      />

      {/* Atmospheric accent glow — subtle, Scandinavian-restrained */}
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 hidden lg:block"
        style={{
          top: "-10rem",
          right: "-8rem",
          width: "42rem",
          height: "52rem",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at 60% 30%, rgba(46,71,86,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 hidden lg:block"
        style={{
          bottom: "0",
          left: "-6rem",
          width: "32rem",
          height: "32rem",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at 40% 70%, rgba(46,71,86,0.04) 0%, transparent 65%)",
        }}
      />

      <div className="container-site w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-end">

          {/* Left — headline + CTA, stagger-animated */}
          <AnimatedGroup
            variants={transitionVariants}
            className="max-w-2xl space-y-5 md:space-y-8"
          >
            {/* Eyebrow + headline */}
            <div>
              <p className="eyebrow mb-4">Hässelby · Bromma · Västerort</p>
              <h1
                className="text-[clamp(2.75rem,6vw,5rem)] font-[500] leading-[1.05] tracking-[-0.03em]"
                style={{ color: "var(--text)" }}
              >
                Expert inom
                <br />
                <span style={{ color: "var(--accent)" }}>
                  <RotatingWords words={services.map((s) => s.title)} />
                </span>
              </h1>
            </div>

            {/* Subheading */}
            <p
              className="text-lg leading-relaxed"
              style={{ maxWidth: "52ch", color: "var(--text-secondary)" }}
            >
              Din hantverkspartner i Bromma &amp; Stockholm. Vi samordnar måleri,
              microcement, snickeri och fler hantverkstjänster — ett
              kontaktnummer, professionellt utfört.
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface)]">
                <span className="text-lg font-semibold" style={{ color: "var(--text)" }}>
                  4.9
                </span>
                <div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="var(--accent)">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                    Reco · 61 omdömen
                  </p>
                </div>
              </div>
              <div className="px-4 py-2.5 rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface)]">
                <p className="text-xs font-medium" style={{ color: "var(--text)" }}>
                  F-skattsedel
                </p>
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  ROT-avdrag
                </p>
              </div>
              <a
                href="https://www.reco.se/beckomberga-entreprenad"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity"
                aria-label="Rekommenderat 3 år i rad — reco.se"
              >
                <img src="/reco-badge.webp" alt="Rekommenderat 3 år i rad — reco.se" width={56} height={56} />
              </a>
              <a
                href="https://www.reco.se/beckomberga-entreprenad"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity"
                aria-label="Sveriges 3:a bästa målerifirma 2026 — reco.se"
              >
                <img src="/reco-2026-3a.png" alt="Sveriges 3:a bästa målerifirma 2026" width={52} height={52} />
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-col xs:flex-row flex-wrap gap-3 pt-2">
              <Link
                href="/kontakt"
                className="px-6 py-3.5 rounded-[var(--radius-sm)] text-sm font-medium text-center transition-colors"
                style={{ background: "var(--text)", color: "var(--dark-text)" }}
              >
                Begär kostnadsfri offert
              </Link>
              <Link
                href="/tjanster"
                className="px-6 py-3.5 rounded-[var(--radius-sm)] text-sm font-medium text-center border border-[var(--border)] hover:border-[var(--text)] transition-colors"
                style={{ color: "var(--text)" }}
              >
                Våra tjänster
              </Link>
            </div>
          </AnimatedGroup>

          {/* Right — contact card, delayed so it arrives after left content */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(12px)", y: 12 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ type: "spring", bounce: 0.3, duration: 1.5, delay: 0.7 }}
            className="hidden lg:flex flex-col gap-3 p-6 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] min-w-[220px]"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <p className="eyebrow">Ring oss</p>
            <a
              href="tel:+46852027786"
              className="text-xl font-semibold tracking-tight hover:text-[var(--accent)] transition-colors"
              style={{ color: "var(--text)" }}
            >
              08-520 277 86
            </a>
            <div className="border-t border-[var(--border)] pt-3 space-y-1">
              <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                Snårvindevägen 271
              </p>
              <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                165 74 Hässelby
              </p>
              <a
                href="mailto:hej@beckombergaentreprenad.com"
                className="text-xs hover:text-[var(--text)] transition-colors block"
                style={{ color: "var(--text-secondary)" }}
              >
                hej@beckombergaentreprenad.com
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
