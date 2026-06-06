export default function FindUs() {
  const LAT = 59.38507256820955;
  const LNG = 17.818423238121472;
  const mapsUrl = `https://maps.google.com/maps?q=${LAT},${LNG}&output=embed&hl=sv&z=15`;
  const directionsUrl = `https://maps.google.com/maps?q=${LAT},${LNG}`;

  return (
    <section className="section-pad" style={{ background: "var(--bg)" }}>
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">
          {/* Left — info */}
          <div className="space-y-8">
            <div>
              <p className="eyebrow mb-4">Hitta oss</p>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-[500] leading-[1.1] tracking-[-0.025em]">
                Kontakta oss
              </h2>
            </div>

            <div className="space-y-6">
              <div className="space-y-1">
                <p className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--text-secondary)" }}>
                  Adress
                </p>
                <p className="text-base" style={{ color: "var(--text)" }}>
                  Snårvindevägen 271<br />
                  165 74 Hässelby
                </p>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm mt-1 hover:gap-2.5 transition-all"
                  style={{ color: "var(--accent)" }}
                >
                  Vägbeskrivning
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14 21 3" />
                  </svg>
                </a>
              </div>

              <div className="space-y-1">
                <p className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--text-secondary)" }}>
                  Telefon
                </p>
                <a
                  href="tel:+46852027786"
                  className="text-base font-medium hover:text-[var(--accent)] transition-colors"
                  style={{ color: "var(--text)" }}
                >
                  08-520 277 86
                </a>
              </div>

              <div className="space-y-1">
                <p className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--text-secondary)" }}>
                  E-post
                </p>
                <a
                  href="mailto:hej@beckombergaentreprenad.com"
                  className="text-base hover:text-[var(--accent)] transition-colors"
                  style={{ color: "var(--text)" }}
                >
                  hej@beckombergaentreprenad.com
                </a>
              </div>

              <div className="space-y-1">
                <p className="text-xs font-medium uppercase tracking-wide" style={{ color: "var(--text-secondary)" }}>
                  Verksamhetsområde
                </p>
                <p style={{ color: "var(--text)" }}>Hässelby · Bromma · Västerort · Stockholm</p>
              </div>
            </div>
          </div>

          {/* Right — map */}
          <div
            className="rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border)]"
            style={{ aspectRatio: "16/10", boxShadow: "var(--shadow-card)" }}
          >
            <iframe
              title="Beckomberga Entreprenad på kartan"
              src={mapsUrl}
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
