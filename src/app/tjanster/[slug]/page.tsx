import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { services, getService } from "@/content/services";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { CircularGallery, type GalleryItem } from "@/components/ui/circular-gallery";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  const galleryItems: GalleryItem[] = service.gallery.map((g) => ({
    common: g.label,
    binomial: service.title,
    photo: {
      url: g.src,
      text: g.label,
      pos: "center",
      by: "Beckomberga Entreprenad",
    },
  }));

  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc={service.coverImage}
      bgImageSrc={service.gallery[0]?.src ?? service.coverImage}
      title={service.title}
      scrollToExpand="Scrolla för att utforska"
    >
      {/* Content revealed after the hero expands */}
      <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
        <Link
          href="/tjanster"
          className="inline-flex items-center gap-1.5 text-xs mb-8 hover:gap-2.5 transition-all"
          style={{ color: "var(--text-secondary)" }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="m15 18-6-6 6-6" />
          </svg>
          Alla tjänster
        </Link>

        {/* Intro: description + actions */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16 items-start">
          <div className="space-y-5">
            <p className="eyebrow">Tjänst</p>
            <p className="text-xl leading-relaxed" style={{ color: "var(--text)" }}>
              {service.tagline}
            </p>
            <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {service.longDescription}
            </p>
          </div>

          <div className="space-y-4">
            {service.partner && (
              <div
                className="p-4 rounded-[var(--radius)] border border-[var(--border)] text-sm"
                style={{ background: "var(--surface)" }}
              >
                <p className="font-medium mb-1" style={{ color: "var(--text)" }}>Utförs via partner</p>
                <p style={{ color: "var(--text-secondary)" }}>
                  Vi samordnar och ansvarar för hela projektet via ett noggrant utvalt
                  partnernätverk. Du har ett kontaktnummer — vi sköter resten.
                </p>
              </div>
            )}
            <div className="flex flex-col gap-3">
              <Link
                href="/kontakt"
                className="px-6 py-3.5 rounded-[var(--radius-sm)] text-sm font-medium text-center"
                style={{ background: "var(--text)", color: "var(--dark-text)" }}
              >
                Begär offert
              </Link>
              <a
                href="tel:+46852027786"
                className="px-6 py-3.5 rounded-[var(--radius-sm)] text-sm font-medium border border-[var(--border)] hover:border-[var(--text)] transition-colors text-center"
                style={{ color: "var(--text)" }}
              >
                08-520 277 86
              </a>
            </div>
          </div>
        </div>

        {/* Circular gallery — no background, free-floating */}
        <div className="mt-16">
          <p className="eyebrow mb-3">Galleri</p>
          <h2
            className="text-[clamp(1.5rem,3vw,2.25rem)] font-[500] leading-[1.1] tracking-[-0.025em]"
            style={{ color: "var(--text)" }}
          >
            Utförda {service.title.toLowerCase()}-arbeten
          </h2>
          {/* Mobile: simple 2-col grid (circular gallery breaks at narrow widths) */}
          <div className="grid grid-cols-2 gap-3 mt-8 md:hidden">
            {galleryItems.map((item) => (
              <div key={item.photo.url} className="aspect-[4/3] rounded-lg overflow-hidden">
                <img src={item.photo.url} alt={item.common} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          {/* Desktop: circular 3D gallery */}
          <div className="hidden md:block w-full mt-8" style={{ height: "380px" }}>
            <CircularGallery
              items={galleryItems}
              radius={320}
              autoRotateSpeed={0.03}
              autoRotateOnly
            />
          </div>
        </div>

        {/* Other services */}
        <div className="mt-16">
          <p className="eyebrow mb-6">Fler tjänster</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {others.map((s) => (
              <Link
                key={s.slug}
                href={`/tjanster/${s.slug}`}
                className="group p-5 rounded-[var(--radius)] border border-[var(--border)] hover:border-[var(--text-secondary)] transition-colors space-y-2"
                style={{ background: "var(--surface)" }}
              >
                <h3 className="font-[500] group-hover:text-[var(--accent)] transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed line-clamp-2" style={{ color: "var(--text-secondary)" }}>
                  {s.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </ScrollExpandMedia>
  );
}
