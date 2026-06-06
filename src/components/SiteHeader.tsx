"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const nav = [
  { label: "Hem", href: "/" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Tjänster", href: "/tjanster" },
  { label: "Projekt", href: "/projekt" },
  { label: "Kontakt", href: "/kontakt" },
];

const social = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/beckombergaentreprenad/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" strokeWidth={0} />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/beckombergaentreprenad",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        scrolled || menuOpen
          ? {
              background: "rgba(244,244,242,0.92)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              borderBottom: "1px solid rgba(226,227,225,0.7)",
            }
          : { background: "transparent" }
      }
    >
      <div className="container-site flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 leading-none">
          {/* Heritage red diamond mark — nod to the original logo */}
          <img src="/logo.jpg" alt="" width={34} height={34} className="rounded-[3px] object-contain" aria-hidden />
          <span className="flex flex-col">
            <span className="text-[0.95rem] font-semibold tracking-tight text-[var(--text)]">
              Beckomberga
            </span>
            <span className="text-[0.7rem] tracking-widest uppercase text-[var(--text-secondary)]">
              Entreprenad
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors"
              style={{
                color: pathname === item.href ? "var(--text)" : "var(--text-secondary)",
              }}
            >
              {item.label}
            </Link>
          ))}
          <span className="border-l border-[var(--border)] h-5 ml-1" />
          {social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-8 h-8 rounded-[var(--radius-sm)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--border)] transition-colors"
            >
              {s.icon}
            </a>
          ))}
          <Link
            href="/kontakt"
            className="ml-2 px-5 py-2.5 rounded-[var(--radius-sm)] bg-white text-[var(--text)] text-sm font-semibold border border-[var(--border)] hover:bg-[var(--surface)] transition-colors"
          >
            Begär offert
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Meny"
        >
          <span
            className="block w-5 h-px bg-[var(--text)] transition-all duration-200"
            style={menuOpen ? { transform: "translateY(6px) rotate(45deg)" } : {}}
          />
          <span
            className="block w-5 h-px bg-[var(--text)] transition-all duration-200"
            style={menuOpen ? { opacity: 0 } : {}}
          />
          <span
            className="block w-5 h-px bg-[var(--text)] transition-all duration-200"
            style={menuOpen ? { transform: "translateY(-6px) rotate(-45deg)" } : {}}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[rgba(244,244,242,0.97)] backdrop-blur-md">
          <nav className="container-site py-6 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 text-base font-medium border-b border-[var(--border)] last:border-0"
                style={{
                  color: pathname === item.href ? "var(--text)" : "var(--text-secondary)",
                }}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-3 mt-4 pt-4 border-t border-[var(--border)]">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-[var(--radius-sm)] border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
