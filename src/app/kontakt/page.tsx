import type { Metadata } from "next";
import LeadForm from "@/components/sections/LeadForm";
import FindUs from "@/components/sections/FindUs";

export const metadata: Metadata = {
  title: "Kontakt & Offert",
  description:
    "Kontakta Beckomberga Entreprenad för en kostnadsfri offert. Ring 08-520 277 86 eller fyll i formuläret.",
};

export default function Kontakt() {
  return (
    <div style={{ paddingTop: "5rem" }}>
      {/* Page header */}
      <section
        className="section-pad"
        style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="container-site">
          <p className="eyebrow mb-4">Kom igång</p>
          <h1 className="text-[clamp(2.25rem,5vw,4rem)] font-[500] leading-[1.05] tracking-[-0.03em]">
            Kontakt & offert
          </h1>
          <p
            className="text-lg leading-relaxed mt-4"
            style={{ color: "var(--text-secondary)", maxWidth: "52ch" }}
          >
            Ring oss, mejla eller fyll i formuläret nedan. Vi återkommer med
            en kostnadsfri offert, vanligtvis inom ett par timmar.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="tel:+46852027786"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[var(--radius-sm)] text-sm font-medium"
              style={{ background: "var(--text)", color: "var(--dark-text)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 010 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z" />
              </svg>
              08-520 277 86
            </a>
            <a
              href="mailto:hej@beckombergaentreprenad.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[var(--radius-sm)] text-sm font-medium border border-[var(--border)] hover:border-[var(--text)] transition-colors"
              style={{ color: "var(--text)" }}
            >
              hej@beckombergaentreprenad.com
            </a>
          </div>
        </div>
      </section>

      <LeadForm />
      <FindUs />
    </div>
  );
}
