import Link from "next/link";

export default function StoryTeaser() {
  return (
    <section className="section-pad" style={{ background: "var(--surface)" }}>
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — team/brand image */}
          <div
            className="relative rounded-[var(--radius-lg)] overflow-hidden"
            style={{ aspectRatio: "4/3" }}
          >
            <img
              src="https://static.wixstatic.com/media/b3fd8b_b17dbd4766ee4e52b6740ab60aaeb08c~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_85,usm_0.66_1.00_0.01/photo.jpg"
              alt="Beckomberga Entreprenad — fasadmålning med ställning"
              className="w-full h-full object-cover"
            />

            {/* Glass badge overlay */}
            <div
              className="absolute bottom-4 left-4 right-4 p-4 rounded-[var(--radius)] glass-panel"
            >
              <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
                Reco 4.9 ★ · Sveriges 3:e bästa målare 2026
              </p>
              <p className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>
                Baserat på 61+ verifierade omdömen
              </p>
            </div>
          </div>

          {/* Right — text */}
          <div className="space-y-6">
            <div>
              <p className="eyebrow mb-4">Om oss</p>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-[500] leading-[1.1] tracking-[-0.025em]">
                Ett kontaktnummer.<br />Alla hantverkare.
              </h2>
            </div>

            <div className="space-y-4">
              <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Beckomberga Entreprenad är din hantverkspartner i Bromma och hela Västerort.
                Vi utför måleri och microcement med egna hantverkare, och samordnar snickeri,
                golvslipning, el och VVS via noggrant utvalda partners.
              </p>
              <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Det betyder att du slipper koordinera flera olika bolag — vi tar ansvar
                för hela projektet och levererar inom avtalad tid.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-2">
              <div>
                <p className="text-2xl font-[500] tracking-tight" style={{ color: "var(--text)" }}>4.9</p>
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>Reco-betyg</p>
              </div>
              <div>
                <p className="text-2xl font-[500] tracking-tight" style={{ color: "var(--text)" }}>61+</p>
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>Verifierade omdömen</p>
              </div>
              <div>
                <p className="text-2xl font-[500] tracking-tight" style={{ color: "var(--text)" }}>#3</p>
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>Sverige — Reco 2026</p>
              </div>
            </div>

            <Link
              href="/om-oss"
              className="inline-flex items-center gap-2 text-sm font-medium mt-2 hover:gap-3 transition-all"
              style={{ color: "var(--accent)" }}
            >
              Läs mer om oss
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
