import type { Metadata } from "next";
import ServicesOverview from "@/components/sections/ServicesOverview";
import ServiceGallery from "@/components/sections/ServiceGallery";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Tjänster",
  description:
    "Beckomberga Entreprenad erbjuder måleri, microcement, snickeri, golvslipning, el och VVS i Hässelby och Stockholm. Ett kontaktnummer — alla hantverkstjänster.",
};

export default function Tjanster() {
  return (
    <div style={{ paddingTop: "5rem" }}>
      {/* Page header */}
      <section
        className="section-pad"
        style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="container-site">
          <p className="eyebrow mb-4">Vad vi erbjuder</p>
          <h1 className="text-[clamp(2.25rem,5vw,4rem)] font-[500] leading-[1.05] tracking-[-0.03em]">
            Våra tjänster
          </h1>
          <p
            className="text-lg leading-relaxed mt-4"
            style={{ color: "var(--text-secondary)", maxWidth: "56ch" }}
          >
            Vi utför måleri och microcement med egna hantverkare, och samordnar
            snickeri, golvslipning, el och VVS via utvalda partners.
            Du behöver bara ett kontaktnummer.
          </p>
        </div>
      </section>

      <ServicesOverview />

      {/* Gallery */}
      <section className="section-pad" style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}>
        <div className="container-site">
          <p className="eyebrow mb-3">Våra projekt</p>
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-[500] leading-[1.1] tracking-[-0.025em] mb-8">
            Utfört arbete
          </h2>
          <ServiceGallery
            items={services.flatMap((s) => s.gallery.slice(0, 2)).map((g) => ({
              label: g.label,
              aspect: g.aspect,
              src: g.src,
            }))}
          />
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-pad"
        style={{ borderTop: "1px solid var(--border)", background: "var(--bg)" }}
      >
        <div className="container-site text-center space-y-6">
          <p className="eyebrow">Klar att sätta igång?</p>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-[500] leading-[1.1] tracking-[-0.025em]">
            Begär en kostnadsfri offert
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "44ch", marginInline: "auto" }}>
            Berätta om ditt projekt och vi återkommer med pris och tidplan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a
              href="/kontakt"
              className="px-6 py-3.5 rounded-[var(--radius-sm)] text-sm font-medium text-center"
              style={{ background: "var(--text)", color: "var(--dark-text)" }}
            >
              Begär offert
            </a>
            <a
              href="tel:+46852027786"
              className="px-6 py-3.5 rounded-[var(--radius-sm)] text-sm font-medium text-center border border-[var(--border)] hover:border-[var(--text)] transition-colors"
              style={{ color: "var(--text)" }}
            >
              Ring 08-520 277 86
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
