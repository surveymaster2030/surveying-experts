"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone, Mail, MessageSquare, MapPin, ExternalLink, ArrowRight,
  CheckCircle2, ChevronDown,
} from "lucide-react";

function Eyebrow({ children, light, teal }: { children: React.ReactNode; light?: boolean; teal?: boolean }) {
  return (
    <span style={{ display: "inline-block", fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: teal ? "var(--se-teal)" : light ? "var(--accent)" : "var(--se-blue)", background: teal ? "rgba(34,167,168,0.15)" : light ? "rgba(246,186,59,0.12)" : "var(--se-yellow-soft)", padding: "0.35em 0.85em", borderRadius: "var(--radius-pill)", marginBottom: "1.25rem" }}>
      {children}
    </span>
  );
}

function SecHead({ label, title, subtitle, light, centered, teal }: { label?: string; title: string; subtitle?: string; light?: boolean; centered?: boolean; teal?: boolean }) {
  return (
    <div style={{ marginBottom: "2.5rem", textAlign: centered ? "center" : "left" }}>
      {label && <Eyebrow light={light} teal={teal}>{label}</Eyebrow>}
      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.625rem, 3vw, 2.25rem)", color: light ? "#fff" : "var(--text-strong)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: label ? "0.5rem 0 0.875rem" : "0 0 0.875rem" }}>{title}</h2>
      {subtitle && <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-md)", color: light ? "rgba(255,255,255,0.65)" : "var(--text-muted)", lineHeight: 1.65, maxWidth: centered ? "58ch" : undefined, margin: centered ? "0 auto" : 0 }}>{subtitle}</p>}
    </div>
  );
}

const contactTypes = [
  { icon: <Phone size={22} />, label: "Phone", value: "+966 54 064 6245", href: "tel:+966540646245", cta: "Call Now" },
  { icon: <MessageSquare size={22} />, label: "WhatsApp", value: "Quick message via WhatsApp", href: "https://wa.me/966540646245", cta: "Open WhatsApp" },
  { icon: <Mail size={22} />, label: "Email", value: "Sales@surveyingexperts-sa.com", href: "mailto:Sales@surveyingexperts-sa.com", cta: "Send Email" },
  { icon: <MapPin size={22} />, label: "Branches", value: "Riyadh, Jeddah, Dammam, Tabuk, Khamis Mushait", href: "#branches", cta: "See on Map", internal: true },
];

const subjects = [
  "Product Inquiry",
  "Technical Support",
  "Maintenance & Calibration",
  "Request a Quote",
  "Partnership",
  "Other",
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  border: "1.5px solid var(--border-default)",
  borderRadius: "var(--radius-md)",
  padding: "11px 14px",
  fontFamily: "var(--font-sans)",
  fontSize: 15,
  color: "var(--text-strong)",
  background: "var(--se-white)",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.15s",
};

export function ContactPageClient() {
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", subject: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  const focusStyle = (field: string): React.CSSProperties => ({
    ...inputStyle,
    borderColor: focused === field ? "var(--se-teal)" : "var(--border-default)",
    boxShadow: focused === field ? "0 0 0 3px rgba(34,167,168,0.12)" : "none",
  });

  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--se-blue-dark)", padding: "80px 0 64px", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.07) 1px, transparent 0)", backgroundSize: "22px 22px" }} />
        <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "var(--accent)" }} />
        <div className="se-container" style={{ position: "relative" }}>
          <Eyebrow light>Contact & Branches</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#fff", fontSize: "clamp(30px,4vw,52px)", lineHeight: 1.06, letterSpacing: "-0.02em", margin: "18px 0 16px", maxWidth: 620 }}>
            Talk to Our Team
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.7)", fontSize: 18, lineHeight: 1.65, maxWidth: 520, margin: 0 }}>
            Whether you need a quote, technical support, or want to find the nearest branch — we're here to help across Saudi Arabia.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section style={{ background: "var(--se-white)", position: "relative", overflow: "hidden", padding: "80px 0 64px", backgroundImage: "radial-gradient(circle at 1px 1px, rgba(53,80,97,0.10) 1px, transparent 0)", backgroundSize: "22px 22px" }}>
        <div className="se-container">
          <SecHead label="Reach Us" title="Ways to Contact Us" centered />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginBottom: 64 }}>
            {contactTypes.map((ct) => (
              <div key={ct.label} style={{ background: "var(--se-white)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", padding: "24px 20px", boxShadow: "var(--shadow-xs)", display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ width: 48, height: 48, borderRadius: "var(--radius-md)", background: "var(--se-teal-soft)", color: "var(--se-teal)", display: "grid", placeItems: "center" }}>
                  {ct.icon}
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text-muted)", marginBottom: 4 }}>{ct.label}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "var(--text-strong)", lineHeight: 1.3 }}>{ct.value}</div>
                </div>
                {ct.internal ? (
                  <Link href={ct.href}
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 14px", background: "var(--se-teal)", color: "#fff", fontWeight: 700, fontSize: 13, borderRadius: "var(--radius-md)", textDecoration: "none", alignSelf: "flex-start" }}>
                    {ct.cta} <ArrowRight size={13} />
                  </Link>
                ) : (
                  <a href={ct.href} target={ct.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 14px", background: "var(--se-teal)", color: "#fff", fontWeight: 700, fontSize: 13, borderRadius: "var(--radius-md)", textDecoration: "none", alignSelf: "flex-start" }}>
                    {ct.cta} {ct.href.startsWith("http") ? <ExternalLink size={13} /> : <ArrowRight size={13} />}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Form */}
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <SecHead label="Send a Message" title="Send Us a Message" centered />
            {sent ? (
              <div style={{ textAlign: "center", padding: "48px 24px", background: "var(--se-teal-soft)", border: "1.5px solid var(--se-teal)", borderRadius: "var(--radius-xl)" }}>
                <CheckCircle2 size={48} style={{ color: "var(--se-teal)", margin: "0 auto 16px" }} />
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--text-strong)", marginBottom: 10 }}>Message Received</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-muted)", marginBottom: 24 }}>Our team will get back to you shortly.</div>
                <button onClick={() => { setSent(false); setForm({ name: "", company: "", email: "", phone: "", subject: "", message: "" }); }}
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", background: "var(--se-teal)", color: "#fff", fontWeight: 700, fontSize: 14, borderRadius: "var(--radius-md)", border: "none", cursor: "pointer" }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="kit-2col">
                  <div>
                    <label style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 700, color: "var(--text-strong)", marginBottom: 6 }}>Full Name *</label>
                    <input required name="name" value={form.name} onChange={handleChange}
                      onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
                      placeholder="Your name"
                      style={focusStyle("name")} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 700, color: "var(--text-strong)", marginBottom: 6 }}>Company</label>
                    <input name="company" value={form.company} onChange={handleChange}
                      onFocus={() => setFocused("company")} onBlur={() => setFocused(null)}
                      placeholder="Company name (optional)"
                      style={focusStyle("company")} />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="kit-2col">
                  <div>
                    <label style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 700, color: "var(--text-strong)", marginBottom: 6 }}>Email *</label>
                    <input required type="email" name="email" value={form.email} onChange={handleChange}
                      onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                      placeholder="you@company.com"
                      style={focusStyle("email")} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 700, color: "var(--text-strong)", marginBottom: 6 }}>Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                      onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)}
                      placeholder="+966 5X XXX XXXX"
                      style={focusStyle("phone")} />
                  </div>
                </div>
                <div style={{ position: "relative" }}>
                  <label style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 700, color: "var(--text-strong)", marginBottom: 6 }}>Subject *</label>
                  <select required name="subject" value={form.subject} onChange={handleChange}
                    onFocus={() => setFocused("subject")} onBlur={() => setFocused(null)}
                    style={{ ...focusStyle("subject"), appearance: "none", WebkitAppearance: "none", paddingRight: 40 }}>
                    <option value="">Select a subject</option>
                    {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <ChevronDown size={16} style={{ position: "absolute", right: 14, bottom: 12, color: "var(--text-muted)", pointerEvents: "none" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 700, color: "var(--text-strong)", marginBottom: 6 }}>Message *</label>
                  <textarea required name="message" value={form.message} onChange={handleChange}
                    onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                    placeholder="Tell us how we can help…"
                    rows={5}
                    style={{ ...focusStyle("message"), resize: "vertical", minHeight: 120 }} />
                </div>
                <button type="submit"
                  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px 28px", background: "var(--se-teal)", color: "#fff", fontWeight: 700, fontSize: 16, borderRadius: "var(--radius-md)", border: "none", cursor: "pointer" }}>
                  Send Message <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
