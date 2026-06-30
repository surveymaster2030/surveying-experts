"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";

function IconFacebook() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function IconYouTube() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}
function IconTikTok() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

const socials = [
  { label: "Facebook",  href: "https://www.facebook.com/SurveyingExp1",         icon: <IconFacebook /> },
  { label: "LinkedIn",  href: "https://www.linkedin.com/company/surveyingexperts", icon: <IconLinkedIn /> },
  { label: "YouTube",   href: "https://www.youtube.com/@surveyingexperts-sa",    icon: <IconYouTube /> },
  { label: "TikTok",    href: "https://www.tiktok.com/@surveying.experts",       icon: <IconTikTok /> },
];

const nav = [
  { label: "About", href: "/about" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Solutions by Industry", href: "/solutions" },
      { label: "Advanced Solutions",    href: "/advanced-solutions" },
    ],
  },
  { label: "Maintenance & Calibration", href: "/maintenance-calibration" },
  { label: "Our Story", href: "/story" },
  { label: "Media",     href: "/media" },
  { label: "Contact",   href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const arHref = pathname === "/" ? "/ar" : `/ar${pathname}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const socialLinkStyle: React.CSSProperties = {
    display: "flex", alignItems: "center", justifyContent: "center",
    width: 28, height: 28, borderRadius: "var(--radius-sm)",
    color: "rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.08)",
    transition: "color 0.15s, background 0.15s", flexShrink: 0,
  };

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200 }}>
      {/* ── Top social / info bar ── */}
      <div style={{ background: "var(--se-blue-darker)", borderBottom: "1px solid rgba(255,255,255,0.06)", height: 36, display: "flex", alignItems: "center" }}>
        <div className="se-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          {/* Left: phone + email */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <a href="tel:+966540646245" style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "rgba(255,255,255,0.55)", textDecoration: "none", whiteSpace: "nowrap" }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--se-teal)", flexShrink: 0 }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +966 54 064 6245
            </a>
            <a href="mailto:Sales@surveyingexperts-sa.com" style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "rgba(255,255,255,0.55)", textDecoration: "none", whiteSpace: "nowrap" }} className="kit-topbar-email">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--se-teal)", flexShrink: 0 }}>
                <rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="2,4 12,13 22,4" />
              </svg>
              Sales@surveyingexperts-sa.com
            </a>
          </div>
          {/* Right: socials + language switcher */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} style={socialLinkStyle}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#fff"; (e.currentTarget as HTMLElement).style.background = "var(--se-teal)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; }}
              >{s.icon}</a>
            ))}
            <div style={{ width: 1, height: 14, background: "rgba(255,255,255,0.12)", margin: "0 2px" }} />
            <Link href={arHref} style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "rgba(255,255,255,0.55)", textDecoration: "none", padding: "2px 8px", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 4 }}>
              عربي
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main header ── */}
      <header style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
        boxShadow: scrolled ? "var(--shadow-sm)" : "none",
        transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      }}>
        <div className="se-container" style={{ display: "flex", alignItems: "center", height: "68px", gap: "2rem" }}>
          {/* Logo — icon + wordmark */}
          <Link href="/" aria-label="Surveying Experts" style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0, textDecoration: "none" }}>
            <Image src="/images/logo-icon.png" alt="Surveying Experts" width={46} height={46} priority style={{ height: 46, width: 46, objectFit: "contain" }} />
            <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.05 }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--se-blue-dark)", letterSpacing: "-0.01em" }}>
                Surveying <span style={{ color: "var(--se-teal)" }}>Experts</span>
              </span>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 8.5, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--text-muted)", marginTop: 3 }}>Surveying Equipment & Support</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="kit-desktop-only" style={{ display: "flex", alignItems: "center", gap: "0.15rem", marginLeft: "auto" }}>
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} style={{ position: "relative" }}
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}>
                  <button style={{
                    display: "flex", alignItems: "center", gap: "0.25rem",
                    padding: "0.45rem 0.7rem", fontSize: 13, fontWeight: 500,
                    color: openDropdown === item.label ? "var(--se-blue)" : "var(--text-body)",
                    background: openDropdown === item.label ? "var(--se-blue-soft)" : "none",
                    border: "none", cursor: "pointer", borderRadius: "var(--radius-md)",
                    transition: "color 0.15s, background 0.15s", whiteSpace: "nowrap",
                  }}>
                    {item.label}
                    <ChevronDown size={13} style={{ opacity: 0.6, transform: openDropdown === item.label ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
                  </button>
                  {openDropdown === item.label && (
                    <div style={{ position: "absolute", top: "calc(100% + 4px)", left: 0, minWidth: 210, background: "white", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-lg)", border: "1px solid var(--border-subtle)", padding: "6px", zIndex: 200 }}>
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href}
                          style={{ display: "block", padding: "8px 12px", fontSize: 13, color: "var(--text-body)", borderRadius: "var(--radius-md)", fontWeight: 400 }}
                          onMouseEnter={(e) => { const el = e.currentTarget; el.style.background = "var(--se-blue-soft)"; el.style.color = "var(--se-blue)"; }}
                          onMouseLeave={(e) => { const el = e.currentTarget; el.style.background = "none"; el.style.color = "var(--text-body)"; }}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.href} href={item.href}
                  style={{ padding: "0.45rem 0.7rem", fontSize: 13, fontWeight: 500, color: "var(--text-body)", borderRadius: "var(--radius-md)", transition: "color 0.15s, background 0.15s", whiteSpace: "nowrap" }}
                  onMouseEnter={(e) => { const el = e.currentTarget; el.style.background = "var(--se-blue-soft)"; el.style.color = "var(--se-blue)"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget; el.style.background = "none"; el.style.color = "var(--text-body)"; }}>
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA buttons */}
          <div className="kit-desktop-only" style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexShrink: 0 }}>
            <a href="https://surveyingexperts-sa.com/collections/all" target="_blank" rel="noopener noreferrer"
              className="se-btn"
              style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "8px 14px", fontSize: 13, fontWeight: 600, color: "var(--se-blue)", border: "1.5px solid var(--se-blue)", borderRadius: "var(--radius-md)", textDecoration: "none", background: "transparent" }}>
              Store <ExternalLink size={12} />
            </a>
            <Link href="/contact" className="se-btn se-btn-yellow"
              style={{ display: "inline-flex", alignItems: "center", padding: "8px 16px", fontSize: 13, fontWeight: 700, color: "var(--se-blue-dark)", background: "var(--se-yellow)", borderRadius: "var(--radius-md)", textDecoration: "none" }}>
              Consultation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="kit-mobile-only"
            style={{ marginLeft: "auto", alignItems: "center", justifyContent: "center", background: "none", border: "none", cursor: "pointer", padding: "0.5rem", color: "var(--text-strong)" }}
            aria-label="Toggle menu">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{ borderTop: "1px solid var(--border-subtle)", padding: "1rem 1.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.25rem", background: "white" }}>
            {nav.map((item) => (
              <div key={item.label}>
                <Link href={item.href} onClick={() => setMobileOpen(false)}
                  style={{ display: "block", padding: "0.625rem 0", fontSize: 15, fontWeight: 500, color: "var(--text-body)", borderBottom: "1px solid var(--border-subtle)" }}>
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)}
                    style={{ display: "block", padding: "0.5rem 1rem", fontSize: 13, color: "var(--text-muted)" }}>
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <div style={{ display: "flex", gap: 10, marginTop: "0.75rem" }}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: "var(--radius-md)", background: "var(--se-blue-soft)", color: "var(--se-blue)" }}>
                  {s.icon}
                </a>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "0.75rem" }}>
              <a href="https://surveyingexperts-sa.com/collections/all" target="_blank"
                style={{ textAlign: "center", padding: "0.75rem", fontSize: 13, fontWeight: 600, color: "var(--se-blue)", border: "1.5px solid var(--se-blue)", borderRadius: "var(--radius-md)", textDecoration: "none" }}>
                Online Store
              </a>
              <Link href="/contact" onClick={() => setMobileOpen(false)}
                style={{ textAlign: "center", padding: "0.75rem", fontSize: 13, fontWeight: 700, color: "var(--se-blue-dark)", background: "var(--se-yellow)", borderRadius: "var(--radius-md)", textDecoration: "none" }}>
                Request Consultation
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
