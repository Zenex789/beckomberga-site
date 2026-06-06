import type { Metadata } from "next";
import { LinkPreview } from "@/components/ui/link-preview";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    "Beckomberga Entreprenad — din hantverkspartner i Bromma & Stockholm. Vi utför måleri, microcement och snickeri med hög servicenivå och snabba ledtider.",
};

// Wixstatic CDN (real project photos from beckombergaentreprenad.com)
const WX = (id: string) =>
  `https://static.wixstatic.com/media/${id}/v1/fill/w_400,h_250,al_c,q_85,usm_0.66_1.00_0.01/photo.jpg`;

const previewLinkClass =
  "font-medium text-[var(--accent)] underline decoration-[var(--accent)]/30 underline-offset-2 hover:decoration-[var(--accent)] transition-colors";

export default function OmOss() {
  return (
    <div style={{ paddingTop: "5rem" }}>
      {/* Hero */}
      <section
        className="section-pad"
        style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <p className="eyebrow">Om oss</p>
              <h1 className="text-[clamp(2.25rem,5vw,4rem)] font-[500] leading-[1.05] tracking-[-0.03em]">
                Hantverkare som<br />levererar i tid
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Beckomberga Entreprenad är ditt trygga val av hantverkare i Hässelby,
                Bromma och övriga Västerort. Vi utför arbetet noggrant, levererar
                inom avtalad tid — och du behöver bara ringa ett nummer.
              </p>
            </div>

            <div
              className="relative rounded-[var(--radius-lg)] overflow-hidden"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src="https://static.wixstatic.com/media/b3fd8b_6f6de8ed7a6f4ccfa0d023ef344e2f69~mv2.jpg/v1/fill/w_1200,h_900,al_c,q_85,usm_0.66_1.00_0.01/photo.jpg"
                alt="Beckomberga Entreprenad — målarna på plats"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
            <div className="space-y-3 lg:pt-2">
              <p className="eyebrow">Vår berättelse</p>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-[500] leading-[1.1] tracking-[-0.025em]">
                Varför vi finns
              </h2>
            </div>

            <div className="space-y-5 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              <p>
                Beckomberga Entreprenad grundades med en tydlig ambition: att vara den hantverkspartner
                som bostadsrättsföreningar, företag och privatpersoner i Västerort faktiskt kan lita på.
                En partner som svarar när man ringer, levererar det som lovats och gör det i tid.
              </p>
              <p>
                Vi är specialiserade på måleri och microcement, men vi vet att ett renoveringsprojekt
                sällan stannar vid ett enda hantverk. Därför har vi byggt upp ett nätverk av
                noggrant utvalda partners — snickare, golvslipare, elektriker och rörmokare — som
                vi samordnar åt dig. Du har ett kontaktnummer. Vi sköter resten.
              </p>
              <p>
                Resultatet talar för sig självt: Reco 4.9 baserat på 61+ omdömen, och utsedda
                till Sveriges 3:e bästa måleriföretag av Reco 2026.
              </p>
              <p>
                Vi delar våra projekt löpande — följ vårt arbete på{" "}
                <LinkPreview
                  url="https://www.instagram.com/beckombergaentreprenad/"
                  imageSrc={WX("b3fd8b_14bb52713d8f4dcb859bb717a9538a71~mv2.jpg")}
                  isStatic
                  className={previewLinkClass}
                >
                  Instagram
                </LinkPreview>{" "}
                och{" "}
                <LinkPreview
                  url="https://www.facebook.com/beckombergaentreprenad"
                  imageSrc={WX("b3fd8b_6f6de8ed7a6f4ccfa0d023ef344e2f69~mv2.jpg")}
                  isStatic
                  className={previewLinkClass}
                >
                  Facebook
                </LinkPreview>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="section-pad"
        style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
            <div>
              <p className="eyebrow mb-4">Hur vi arbetar</p>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-[500] leading-[1.1] tracking-[-0.025em]">
                Vad du kan räkna med
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Toppenservice",
                  text: "Vi svarar, vi kommunicerar och vi håller det vi lovar. Punktlighet och transparens är grundläggande.",
                },
                {
                  title: "Snabba ledtider",
                  text: "Vi prioriterar effektivitet utan att kompromissa med kvaliteten. Ditt projekt startar när du vill.",
                },
                {
                  title: "Ett nummer räcker",
                  text: "Behöver projektet flera hantverkare? Vi samordnar dem åt dig — du slipper hålla reda på flera bolag.",
                },
                {
                  title: "F-skatt & ROT",
                  text: "Vi innehar F-skattsedel. Privatpersoner kan utnyttja ROT-avdrag för kvalificerade arbeten.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-[var(--radius)] border border-[var(--border)] space-y-2"
                  style={{ background: "var(--bg)" }}
                >
                  <h3 className="text-base font-[500]" style={{ color: "var(--text)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-pad" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="container-site">
          <div className="flex flex-wrap items-end gap-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 flex-1">
              {[
                { number: "4.9", label: "Reco-betyg" },
                { number: "61+", label: "Omdömen" },
                { number: "#3", label: "Sverige — Reco 2026" },
                { number: "1", label: "Kontaktnummer för alla" },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p
                    className="text-[clamp(2rem,5vw,3.5rem)] font-[500] tracking-[-0.04em] leading-none"
                    style={{ color: "var(--text)" }}
                  >
                    {stat.number}
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{stat.label}</p>
                </div>
              ))}
            </div>
            <a
              href="https://www.reco.se/beckomberga-entreprenad"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity shrink-0"
              aria-label="Rekommenderat 3 år i rad — reco.se"
            >
              <img src="/reco-badge.webp" alt="Rekommenderat 3 år i rad" width={88} height={88} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
