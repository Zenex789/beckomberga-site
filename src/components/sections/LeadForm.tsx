"use client";
import { useState } from "react";
import { services } from "@/content/services";

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  honeypot: string;
}

type Status = "idle" | "loading" | "success" | "error";

export default function LeadForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    honeypot: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.honeypot) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", phone: "", service: "", message: "", honeypot: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass = `
    w-full px-4 py-3 rounded-[var(--radius-sm)] border border-[var(--border)]
    bg-[var(--surface)] text-[var(--text)] text-base sm:text-sm
    focus:outline-none focus:border-[var(--accent)] transition-colors
    placeholder:text-[var(--text-secondary)]
  `;

  return (
    <section
      className="section-pad"
      style={{ background: "var(--surface)", borderTop: "1px solid var(--border)" }}
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
          {/* Left — info */}
          <div className="space-y-6">
            <div>
              <p className="eyebrow mb-4">Offert</p>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-[500] leading-[1.1] tracking-[-0.025em]">
                Berätta om<br />ditt projekt
              </h2>
            </div>
            <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Fyll i formuläret så återkommer vi med en kostnadsfri offert.
              Vanligtvis svarar vi inom ett par timmar under vardagar.
            </p>
            <div className="space-y-3 pt-2">
              {[
                { icon: "✓", text: "Kostnadsfri offert" },
                { icon: "✓", text: "Snabba ledtider" },
                { icon: "✓", text: "F-skattsedel & ROT-avdrag" },
                { icon: "✓", text: "Reco 4.9 — 61+ omdömen" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-sm font-semibold" style={{ color: "var(--accent)" }}>
                    {item.icon}
                  </span>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot */}
            <input
              name="honeypot"
              value={form.honeypot}
              onChange={handleChange}
              className="hidden"
              tabIndex={-1}
              aria-hidden
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-medium" style={{ color: "var(--text)" }}>
                  Namn <span style={{ color: "var(--accent)" }}>*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Ditt namn"
                  className={inputClass}
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="phone" className="text-xs font-medium" style={{ color: "var(--text)" }}>
                  Telefon
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="070-xxx xx xx"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-medium" style={{ color: "var(--text)" }}>
                E-post <span style={{ color: "var(--accent)" }}>*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="din@epost.se"
                className={inputClass}
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="service" className="text-xs font-medium" style={{ color: "var(--text)" }}>
                Tjänst
              </label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Välj tjänst…</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.title}
                  </option>
                ))}
                <option value="annat">Annat / Vet ej</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-medium" style={{ color: "var(--text)" }}>
                Beskrivning <span style={{ color: "var(--accent)" }}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Beskriv projektet — vad ska göras, var, ungefär när?"
                className={inputClass}
                style={{ resize: "vertical" }}
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3.5 px-6 rounded-[var(--radius-sm)] text-sm font-medium transition-colors disabled:opacity-60"
              style={{ background: "var(--text)", color: "var(--dark-text)" }}
            >
              {status === "loading" ? "Skickar…" : "Skicka förfrågan"}
            </button>

            {status === "success" && (
              <div
                className="p-4 rounded-[var(--radius-sm)] border text-sm"
                style={{ borderColor: "#C5D9C5", background: "#F0F7F0", color: "#2E5B2E" }}
              >
                Tack! Vi återkommer till dig så snart som möjligt.
              </div>
            )}

            {status === "error" && (
              <div
                className="p-4 rounded-[var(--radius-sm)] border text-sm"
                style={{ borderColor: "var(--border)", background: "var(--bg)", color: "var(--text-secondary)" }}
              >
                Något gick fel. Ring oss på{" "}
                <a href="tel:+46852027786" style={{ color: "var(--text)" }}>08-520 277 86</a> istället.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
