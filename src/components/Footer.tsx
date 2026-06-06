import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--dark)", color: "var(--dark-text)", borderTop: "3px solid var(--red)" }}>
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <p className="text-base font-semibold tracking-tight">Beckomberga Entreprenad AB</p>
              <p className="text-sm mt-1" style={{ color: "var(--dark-secondary)" }}>
                Din hantverkspartner i Bromma & Stockholm
              </p>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--dark-secondary)" }}>
              Vi utför måleri, microcement, snickeri och samordnar fler hantverkstjänster
              för BRF, företag och privatpersoner i Västerort.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.instagram.com/beckombergaentreprenad/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-[6px] border border-white/10 flex items-center justify-center hover:border-white/30 transition-colors"
                style={{ color: "var(--dark-secondary)" }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" strokeWidth={0} />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/beckombergaentreprenad"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-[6px] border border-white/10 flex items-center justify-center hover:border-white/30 transition-colors"
                style={{ color: "var(--dark-secondary)" }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <p className="eyebrow" style={{ color: "var(--dark-secondary)" }}>Navigering</p>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Hem", href: "/" },
                { label: "Om oss", href: "/om-oss" },
                { label: "Tjänster", href: "/tjanster" },
                { label: "Projekt", href: "/projekt" },
                { label: "Kontakt & offert", href: "/kontakt" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm hover:text-[var(--dark-text)] transition-colors w-fit"
                  style={{ color: "var(--dark-secondary)" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <p className="eyebrow" style={{ color: "var(--dark-secondary)" }}>Kontakt</p>
            <div className="space-y-2 text-sm" style={{ color: "var(--dark-secondary)" }}>
              <p>
                <a href="tel:+46852027786" className="hover:text-[var(--dark-text)] transition-colors">
                  08-520 277 86
                </a>
              </p>
              <p>
                <a href="mailto:hej@beckombergaentreprenad.com" className="hover:text-[var(--dark-text)] transition-colors break-all">
                  hej@beckombergaentreprenad.com
                </a>
              </p>
              <p>Snårvindevägen 271<br />165 74 Hässelby</p>
            </div>
            <div className="pt-2 space-y-1 text-xs" style={{ color: "var(--dark-secondary)", opacity: 0.6 }}>
              <p>Org.nr: 559263-8869</p>
              <p>F-skattsedel innehas</p>
            </div>
          </div>
        </div>

        <div
          className="mt-12 pt-6 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs"
          style={{ borderColor: "rgba(255,255,255,0.08)", color: "var(--dark-secondary)", opacity: 0.6 }}
        >
          <p>© {new Date().getFullYear()} Beckomberga Entreprenad AB. Alla rättigheter förbehållna.</p>
          <p>ROT-avdrag · F-skatt · Reco 4.9 <span style={{ color: "var(--red-light)" }}>★</span></p>
        </div>
      </div>
    </footer>
  );
}
