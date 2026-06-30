import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Award, Building2, Globe, Shield,
  CheckSquare, ClipboardList, Layers, Users, Leaf, Star, Wrench, FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Certifications & Approvals | Surveying Experts Saudi Arabia",
  description:
    "Surveying Experts holds industry certifications and maintains standards recognized across construction, infrastructure, and engineering sectors in Saudi Arabia.",
};

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

const certifications = [
  { icon: <Award size={22} />, name: "ISO 9001:2015", body: "Quality Management System", desc: "Quality management principles across all service and operational functions." },
  { icon: <Shield size={22} />, name: "ISO 45001:2018", body: "Occupational Health & Safety", desc: "Health and safety management standards for our team and clients." },
  { icon: <Leaf size={22} />, name: "ISO 14001:2015", body: "Environmental Management", desc: "Environmental management practices aligned with international standards." },
  { icon: <Building2 size={22} />, name: "SASO Approval", body: "Saudi Standards Authority", desc: "Equipment meets Saudi standards for accuracy and calibration." },
  { icon: <Globe size={22} />, name: "Authorized Distributors", body: "Major Surveying Brands", desc: "Authorized distribution and after-sales support for leading brands." },
  { icon: <CheckSquare size={22} />, name: "Calibration Traceability", body: "Reference Standard Alignment", desc: "All calibrations traceable to international measurement standards." },
  { icon: <ClipboardList size={22} />, name: "MOMRA Compliance", body: "Ministry of Municipal Affairs", desc: "Products and services aligned with Saudi municipal and engineering requirements." },
  { icon: <Users size={22} />, name: "COWI Partnership", body: "Engineering Collaboration", desc: "Technical collaboration with international engineering partners." },
  { icon: <Layers size={22} />, name: "Leica Geosystems Partner", body: "Authorized Dealer", desc: "Authorized reseller and service center for Leica Geosystems equipment." },
  { icon: <Star size={22} />, name: "Topcon Authorized", body: "Authorized Dealer", desc: "Authorized reseller and support partner for Topcon products." },
  { icon: <Wrench size={22} />, name: "Trimble Authorized", body: "Authorized Dealer", desc: "Authorized reseller and technical support for Trimble solutions." },
  { icon: <FileText size={22} />, name: "Saudi Zakat & Tax", body: "CR Registration", desc: "Registered and compliant with Saudi commercial and tax regulations." },
];

export default function CertificationsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--se-blue-dark)", padding: "80px 0 64px", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.07) 1px, transparent 0)", backgroundSize: "22px 22px" }} />
        <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "var(--accent)" }} />
        <div className="se-container" style={{ position: "relative" }}>
          <Eyebrow light>Certifications & Approvals</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#fff", fontSize: "clamp(30px,4vw,52px)", lineHeight: 1.06, letterSpacing: "-0.02em", margin: "18px 0 16px", maxWidth: 640 }}>
            Standards That Back Our Work
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.7)", fontSize: 18, lineHeight: 1.65, maxWidth: 520, margin: 0 }}>
            Our certifications, partnerships, and approvals reflect the standards behind every device, service, and client relationship.
          </p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section style={{ background: "var(--se-white)", position: "relative", overflow: "hidden", padding: "96px 0", backgroundImage: "radial-gradient(circle at 1px 1px, rgba(53,80,97,0.10) 1px, transparent 0)", backgroundSize: "22px 22px" }}>
        <div className="se-container">
          <SecHead label="Our Credentials" title="Certifications & Authorizations" subtitle="A record of the standards, authorizations, and partnerships that support our operations." centered />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 16 }}>
            {certifications.map((cert) => (
              <div key={cert.name} style={{ background: "var(--se-white)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", padding: "22px 18px", boxShadow: "var(--shadow-xs)", textAlign: "center" }}>
                <div style={{ width: 52, height: 52, borderRadius: "var(--radius-md)", background: "var(--se-teal-soft)", color: "var(--se-teal)", display: "grid", placeItems: "center", margin: "0 auto 14px" }}>
                  {cert.icon}
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: "var(--text-strong)", marginBottom: 4, lineHeight: 1.3 }}>{cert.name}</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--se-teal)", marginBottom: 8 }}>{cert.body}</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--text-muted)", lineHeight: 1.55 }}>{cert.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--se-blue-dark)", position: "relative", overflow: "hidden", padding: "80px 0" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.07) 1px, transparent 0)", backgroundSize: "22px 22px" }} />
        <div className="se-container" style={{ position: "relative", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.5rem,3vw,2rem)", color: "#fff", marginBottom: "0.875rem" }}>Need Documentation or a Company Profile?</h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-md)", color: "rgba(255,255,255,0.65)", marginBottom: "2rem" }}>Contact our team for certification documentation, approved-vendor packages, or a formal company profile.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <Link href="/contact"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 26px", background: "var(--accent)", color: "var(--se-blue-dark)", fontWeight: 700, fontSize: 16, borderRadius: "var(--radius-md)", textDecoration: "none" }}>
              Contact Our Team <ArrowRight size={16} />
            </Link>
            <a href="https://drive.google.com/file/d/1Bgu4lldhOTQgDpDXV2MpO2--AG5OEvOK/view" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 26px", background: "transparent", color: "#fff", fontWeight: 700, fontSize: 16, borderRadius: "var(--radius-md)", border: "1.5px solid rgba(255,255,255,0.4)", textDecoration: "none" }}>
              Download Company Profile
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
