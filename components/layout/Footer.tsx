"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Globe, MapPin, ExternalLink } from "lucide-react";

function IconFacebook() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function IconYouTube() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}
function IconTikTok() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/SurveyingExp1",           icon: <IconFacebook /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/surveyingexperts", icon: <IconLinkedIn /> },
  { label: "YouTube",  href: "https://www.youtube.com/@surveyingexperts-sa",      icon: <IconYouTube /> },
  { label: "TikTok",   href: "https://www.tiktok.com/@surveying.experts",         icon: <IconTikTok /> },
];

const footerLinks = {
  Company: [
    { label: "About Us",    href: "/about" },
    { label: "Our Story",   href: "/story" },
    { label: "Media",       href: "/media" },
    { label: "Contact & Branches", href: "/contact" },
  ],
  Solutions: [
    { label: "Solutions by Industry", href: "/solutions" },
    { label: "Advanced Solutions",    href: "/advanced-solutions" },
    { label: "GNSS and RTK",          href: "/solutions#gnss" },
    { label: "Total Station",         href: "/solutions#total-station" },
    { label: "3D Scanning & LiDAR",   href: "/solutions#scanning" },
    { label: "Underground Detection", href: "/advanced-solutions#gpr" },
    { label: "Marine Surveying",      href: "/advanced-solutions#marine" },
    { label: "Drone Mapping",         href: "/advanced-solutions#drone" },
  ],
  Support: [
    { label: "Maintenance & Calibration", href: "/maintenance-calibration" },
    { label: "Request Consultation",      href: "/contact" },
    { label: "Online Store",              href: "https://surveyingexperts-sa.com/collections/all", external: true },
    { label: "Company Profile",           href: "https://drive.google.com/file/d/1Bgu4lldhOTQgDpDXV2MpO2--AG5OEvOK/view", external: true },
  ],
};

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--se-blue-dark)",
        color: "var(--text-on-dark)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Yellow top rule */}
      <div style={{ height: 4, background: "var(--se-yellow)", width: "100%" }} />

      {/* Grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(246,186,59,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(246,186,59,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />

      <div className="se-container" style={{ position: "relative", padding: "4rem 1.5rem 2.5rem" }}>
        {/* Top: brand + links */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand col */}
          <div style={{ gridColumn: "span 1" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <div style={{ width: 52, height: 52, borderRadius: "var(--radius-md)", background: "#fff", display: "grid", placeItems: "center", flexShrink: 0, padding: 7 }}>
                <Image src="/images/logo-icon.png" alt="" width={38} height={38} style={{ width: 38, height: 38, objectFit: "contain" }} />
              </div>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19, color: "white", letterSpacing: "-0.01em" }}>
                Surveying <span style={{ color: "var(--se-yellow)" }}>Experts</span>
              </span>
            </div>
            <p style={{ fontSize: "var(--text-xs)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--se-yellow)", marginBottom: "0.75rem" }}>
              Professional Equipment. Complete Field Support.
            </p>
            <p style={{ fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.6)", lineHeight: 1.65, margin: "0 0 1.5rem" }}>
              A Saudi company connecting field teams with professional surveying technologies from trusted global brands, backed by local consultation, maintenance, calibration, and after-sales service.
            </p>

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.25rem" }}>
              <a href="tel:+966540646245" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                <Phone size={13} style={{ color: "var(--se-yellow)", flexShrink: 0 }} />
                +966 54 064 6245
              </a>
              <a href="mailto:Sales@surveyingexperts-sa.com" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                <Mail size={13} style={{ color: "var(--se-yellow)", flexShrink: 0 }} />
                Sales@surveyingexperts-sa.com
              </a>
              <a href="https://surveyingexperts-sa.com" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                <Globe size={13} style={{ color: "var(--se-yellow)", flexShrink: 0 }} />
                surveyingexperts-sa.com
              </a>
              <span style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.7)" }}>
                <MapPin size={13} style={{ color: "var(--se-yellow)", flexShrink: 0 }} />
                Riyadh, Saudi Arabia | 5 Branches across KSA
              </span>
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 8 }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 36,
                    height: 36,
                    borderRadius: "var(--radius-md)",
                    background: "rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.65)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    transition: "background 0.15s, color 0.15s",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "var(--se-teal)";
                    el.style.color = "#fff";
                    el.style.borderColor = "var(--se-teal)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(255,255,255,0.08)";
                    el.style.color = "rgba(255,255,255,0.65)";
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 style={{ fontSize: "var(--text-xs)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.4)", marginBottom: "1rem" }}>
                {group}
              </h4>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "color 0.15s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--se-yellow)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                      >
                        {link.label}
                        <ExternalLink size={11} />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        style={{ fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "color 0.15s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--se-yellow)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal info row */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "1.5rem",
            marginBottom: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)", marginBottom: 4 }}>Legal Name</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>khubara almasaha alfanniyya Company For Investment</div>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)", marginBottom: 4 }}>رقم السجل التجاري</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>1009010757</div>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)", marginBottom: 4 }}>الرقم الوطني الموحد</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>7035999759</div>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)", marginBottom: 4 }}>Address</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>RIYADH · Al Malaz Dist. · Salahuddin Al Ayyubi</div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "1.25rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.75rem",
          }}
        >
          <p style={{ fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.35)", margin: 0 }}>
            © {new Date().getFullYear()} Surveying Experts. All rights reserved.
          </p>
          <p style={{ fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.25)", margin: 0 }}>
            Professional Surveying Equipment and Field Support | Saudi Arabia
          </p>
        </div>
      </div>
    </footer>
  );
}
