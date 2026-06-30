"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Mail, ChevronDown, Menu, X, ExternalLink } from "lucide-react";

function IconFacebook() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function IconYouTube() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}
function IconTikTok() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/SurveyingExp1",          icon: <IconFacebook /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/surveyingexperts", icon: <IconLinkedIn /> },
  { label: "YouTube",  href: "https://www.youtube.com/@surveyingexperts-sa",     icon: <IconYouTube /> },
  { label: "TikTok",   href: "https://www.tiktok.com/@surveying.experts",        icon: <IconTikTok /> },
];

const navItems = [
  { label: "من نحن",           href: "/ar/about" },
  {
    label: "الحلول",
    children: [
      { label: "الحلول حسب القطاع", href: "/ar/solutions" },
      { label: "الحلول المتقدمة",    href: "/ar/advanced-solutions" },
    ],
  },
  { label: "الصيانة والمعايرة", href: "/ar/maintenance-calibration" },
  { label: "قصتنا",             href: "/ar/story" },
  { label: "المركز الإعلامي",   href: "/ar/media" },
  { label: "اتصل بنا",         href: "/ar/contact" },
];

export function HeaderAr() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [scrolled, setScrolled]         = useState(false);
  const pathname = usePathname();
  const enHref = pathname === "/ar" ? "/" : pathname.replace(/^\/ar/, "") || "/";

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
      {/* ── Top bar (dark — identical to EN) ── */}
      <div style={{ background: "var(--se-blue-darker)", borderBottom: "1px solid rgba(255,255,255,0.06)", height: 36, display: "flex", alignItems: "center" }}>
        <div className="se-container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          {/* Contact info */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <a href="tel:+966540646245" dir="ltr" style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "rgba(255,255,255,0.55)", textDecoration: "none", whiteSpace: "nowrap", unicodeBidi: "embed" }}>
              <Phone size={11} style={{ color: "var(--se-teal)", flexShrink: 0 }} />
              <span dir="ltr">+966 54 064 6245</span>
            </a>
            <a href="mailto:Sales@surveyingexperts-sa.com" style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "rgba(255,255,255,0.55)", textDecoration: "none", whiteSpace: "nowrap" }} className="kit-topbar-email">
              <Mail size={11} style={{ color: "var(--se-teal)", flexShrink: 0 }} />
              Sales@surveyingexperts-sa.com
            </a>
          </div>
          {/* Socials + language switcher */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} style={socialLinkStyle}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#fff"; (e.currentTarget as HTMLElement).style.background = "var(--se-teal)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; }}
              >{s.icon}</a>
            ))}
            <div style={{ width: 1, height: 14, background: "rgba(255,255,255,0.12)", margin: "0 2px" }} />
            <Link href={enHref} style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "rgba(255,255,255,0.55)", textDecoration: "none", padding: "2px 8px", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 4 }}>
              EN
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main header (white — identical to EN) ── */}
      <header style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
        boxShadow: scrolled ? "var(--shadow-sm)" : "none",
        transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      }}>
        <div className="se-container" style={{ display: "flex", alignItems: "center", height: "68px", gap: "2rem" }}>
          {/* Logo — icon + wordmark */}
          <Link href="/ar" aria-label="خبراء المساحة" style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0, textDecoration: "none" }}>
            <Image src="/images/logo-icon.png" alt="خبراء المساحة" width={46} height={46} priority style={{ height: 46, width: 46, objectFit: "contain" }} />
            <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.05 }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19, color: "var(--se-blue-dark)", letterSpacing: "-0.01em" }}>
                خبراء <span style={{ color: "var(--se-teal)" }}>المساحة</span>
              </span>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", color: "var(--text-muted)", marginTop: 3 }}>أجهزة المساحة والدعم الفني</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="kit-desktop-only" style={{ display: "flex", alignItems: "center", gap: "0.15rem", marginRight: "auto" }}>
            {navItems.map((item) =>
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
                    fontFamily: "var(--font-sans)",
                  }}>
                    {item.label}
                    <ChevronDown size={13} style={{ opacity: 0.6, transform: openDropdown === item.label ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
                  </button>
                  {openDropdown === item.label && (
                    <div style={{ position: "absolute", top: "calc(100% + 4px)", right: 0, minWidth: 210, background: "white", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-lg)", border: "1px solid var(--border-subtle)", padding: "6px", zIndex: 200 }}>
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
                <Link key={item.href} href={item.href!}
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
              style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "8px 14px", fontSize: 13, fontWeight: 600, color: "var(--se-blue)", border: "1.5px solid var(--se-blue)", borderRadius: "var(--radius-md)", textDecoration: "none", background: "transparent" }}>
              المتجر <ExternalLink size={12} />
            </a>
            <Link href="/ar/contact"
              style={{ display: "inline-flex", alignItems: "center", padding: "8px 16px", fontSize: 13, fontWeight: 700, color: "var(--se-blue-dark)", background: "var(--se-yellow)", borderRadius: "var(--radius-md)", textDecoration: "none" }}>
              طلب استشارة
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="kit-mobile-only"
            style={{ marginRight: "auto", alignItems: "center", justifyContent: "center", background: "none", border: "none", cursor: "pointer", padding: "0.5rem", color: "var(--text-strong)" }}
            aria-label="القائمة">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div style={{ borderTop: "1px solid var(--border-subtle)", padding: "1rem 1.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.25rem", background: "white" }}>
            {navItems.map((item) => (
              <div key={item.label}>
                {item.href ? (
                  <Link href={item.href} onClick={() => setMobileOpen(false)}
                    style={{ display: "block", padding: "0.625rem 0", fontSize: 15, fontWeight: 500, color: "var(--text-body)", borderBottom: "1px solid var(--border-subtle)" }}>
                    {item.label}
                  </Link>
                ) : (
                  <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text-muted)", padding: "0.625rem 0 0.25rem" }}>{item.label}</div>
                )}
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
              <a href="https://surveyingexperts-sa.com/collections/all" target="_blank" rel="noopener noreferrer"
                style={{ textAlign: "center", padding: "0.75rem", fontSize: 13, fontWeight: 600, color: "var(--se-blue)", border: "1.5px solid var(--se-blue)", borderRadius: "var(--radius-md)", textDecoration: "none" }}>
                المتجر الإلكتروني
              </a>
              <Link href="/ar/contact" onClick={() => setMobileOpen(false)}
                style={{ textAlign: "center", padding: "0.75rem", fontSize: 13, fontWeight: 700, color: "var(--se-blue-dark)", background: "var(--se-yellow)", borderRadius: "var(--radius-md)", textDecoration: "none" }}>
                طلب استشارة
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
