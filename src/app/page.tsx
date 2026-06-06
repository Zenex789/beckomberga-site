import HomeHero from "@/components/sections/HomeHero";
import StoryTeaser from "@/components/sections/StoryTeaser";
import ServicesOverview from "@/components/sections/ServicesOverview";
import Reviews from "@/components/sections/Reviews";
import FindUs from "@/components/sections/FindUs";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HomeHero />
      <StoryTeaser />
      <ServicesOverview limit={3} />

      {/* CTA band */}
      <section
        className="section-pad"
        style={{ background: "var(--dark)", color: "var(--dark-text)" }}
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div className="space-y-3">
              <p className="eyebrow" style={{ color: "var(--dark-secondary)" }}>Projekt</p>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-[500] leading-[1.1] tracking-[-0.025em]">
                Se våra utförda arbeten
              </h2>
              <p style={{ color: "var(--dark-secondary)" }}>
                Bläddra bland projekt — måleri, microcement och snickeri i Västerort.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/projekt"
                className="px-6 py-3.5 rounded-[var(--radius-sm)] text-sm font-medium text-center"
                style={{ background: "var(--dark-text)", color: "var(--dark)" }}
              >
                Visa projekt
              </Link>
              <Link
                href="/kontakt"
                className="px-6 py-3.5 rounded-[var(--radius-sm)] text-sm font-medium border text-center hover:bg-white/10 transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.2)", color: "var(--dark-text)" }}
              >
                Begär offert
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Reviews />
      <FindUs />
    </>
  );
}
