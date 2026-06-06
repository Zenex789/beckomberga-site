import type { Metadata } from "next";
import ImageComparisonSlider from "@/components/ui/ImageComparisonSlider";
import ProjectCards from "./ProjectCards";

export const metadata: Metadata = {
  title: "Projekt",
  description:
    "Se utförda projekt av Beckomberga Entreprenad — måleri, microcement och snickeri i Bromma och Stockholm.",
};

export default function Projekt() {
  return (
    <div style={{ paddingTop: "5rem" }}>
      {/* Page header */}
      <section
        className="section-pad"
        style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="container-site">
          <p className="eyebrow mb-4">Utförda arbeten</p>
          <h1 className="text-[clamp(2.25rem,5vw,4rem)] font-[500] leading-[1.05] tracking-[-0.03em]">
            Projekt
          </h1>
          <p
            className="text-lg leading-relaxed mt-4"
            style={{ color: "var(--text-secondary)", maxWidth: "56ch" }}
          >
            Ett urval av projekt vi utfört i Bromma, Hässelby och övriga Stockholm.
          </p>
        </div>
      </section>

      {/* 3D project cards */}
      <section className="section-pad overflow-hidden">
        <div className="container-site">
          <ProjectCards />
        </div>
      </section>

      {/* Före & efter */}
      <section
        className="section-pad"
        style={{ background: "var(--dark)", color: "var(--dark-text)" }}
      >
        <div className="container-site space-y-10">
          <div>
            <p className="eyebrow mb-3" style={{ color: "var(--dark-secondary)" }}>Transformation</p>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-[500] leading-[1.1] tracking-[-0.025em]">
              Före &amp; efter
            </h2>
          </div>

          {/* Featured large slider — Microcement bathroom */}
          <ImageComparisonSlider
            beforeImage="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80"
            afterImage="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=1200&q=80"
            labelBefore="Före"
            labelAfter="Efter"
            service="Microcement — badrum"
          />

          {/* Two smaller sliders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ImageComparisonSlider
              beforeImage="https://images.unsplash.com/photo-1536349788264-1b816db3cc13?w=1200&q=80"
              afterImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80"
              labelBefore="Före"
              labelAfter="Efter"
              service="Måleri — rum"
            />
            <ImageComparisonSlider
              beforeImage="https://upload.wikimedia.org/wikipedia/commons/1/13/Artisan-poncage-parquet-paris-francois-gaillard_04.jpg"
              afterImage="https://upload.wikimedia.org/wikipedia/commons/f/fb/Artisan-poncage-parquet-paris-francois-gaillard_03.jpg"
              labelBefore="Före"
              labelAfter="Efter"
              service="Golvslipning"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
