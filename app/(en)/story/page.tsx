import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Map, Flag, SatelliteDish, Crosshair, ShoppingCart, ScanLine, Plane, Quote,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story | Surveying Experts Saudi Arabia",
  description:
    "How Surveying Experts grew from direct field experience into Saudi Arabia's 360 degree surveying equipment and support partner.",
};

function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span style={{ display: "inline-block", fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: light ? "var(--accent)" : "var(--se-blue)", background: light ? "rgba(246,186,59,0.12)" : "var(--se-yellow-soft)", padding: "0.35em 0.85em", borderRadius: "var(--radius-pill)", marginBottom: "1.25rem" }}>
      {children}
    </span>
  );
}

function SecHead({ label, title, subtitle, light, centered }: { label?: string; title: string; subtitle?: string; light?: boolean; centered?: boolean }) {
  return (
    <div style={{ marginBottom: "2.5rem", textAlign: centered ? "center" : "left" }}>
      {label && <Eyebrow light={light}>{label}</Eyebrow>}
      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.625rem, 3vw, 2.25rem)", color: light ? "#fff" : "var(--text-strong)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: label ? "0.5rem 0 0.875rem" : "0 0 0.875rem" }}>{title}</h2>
      {subtitle && <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-md)", color: light ? "rgba(255,255,255,0.65)" : "var(--text-muted)", lineHeight: 1.65, maxWidth: centered ? "58ch" : undefined, margin: centered ? "0 auto" : 0 }}>{subtitle}</p>}
    </div>
  );
}

const timeline = [
  { year: "2011", title: "Field Beginning", icon: <Map size={17} />, text: "The journey started from direct field work alongside engineers, surveyors, and contractors. Understanding their challenges became the foundation of everything we built." },
  { year: "2018", title: "Official Establishment", icon: <Flag size={17} />, text: "Surveying Experts was officially established in Jeddah, built on field experience and a clear focus on professional equipment and complete support." },
  { year: "2021", title: "eSurvey Partnership", icon: <SatelliteDish size={17} />, text: "Surveying Experts became the exclusive distributor of eSurvey in Saudi Arabia, bringing professional GNSS and RTK technologies with full local support." },
  { year: "2023", title: "Survey Master Partnership", icon: <Crosshair size={17} />, text: "The portfolio expanded through a partnership with Survey Master, adding Total Station, Auto Level, marine surveying, and advanced measurement systems." },
  { year: "2024", title: "Digital and Commercial Growth", icon: <ShoppingCart size={17} />, text: "The official online store launched, giving clients a streamlined procurement channel with full technical and after-sales backing." },
  { year: "2025", title: "New Solution Areas", icon: <ScanLine size={17} />, text: "Partnerships with Radarteam and OmniSLAM added GPR, underground detection, 3D scanning, and mobile mapping to the portfolio." },
  { year: "2026", title: "Drone Solutions Expansion", icon: <Plane size={17} />, text: "Drone-based surveying capabilities added through The Drone Center, bringing DJI and Quantum Systems technologies to Saudi field teams." },
];

const statsVision = [
  { v: "2,000+", l: "Projects Supported" },
  { v: "6", l: "Branches in KSA" },
  { v: "7+", l: "Years of Experience" },
  { v: "1,000+", l: "Active Clients" },
];

export default function StoryPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--se-blue-dark)", padding: "80px 0 64px", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.06) 1px, transparent 0)", backgroundSize: "22px 22px" }} />
        <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "var(--accent)" }} />
        <div className="se-container" style={{ position: "relative" }}>
          <Eyebrow light>Our Story</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, color: "#fff", fontSize: "clamp(30px,4vw,52px)", lineHeight: 1.06, letterSpacing: "-0.025em", margin: "18px 0 16px", maxWidth: 580 }}>
            From Field Experience to 360 Degree Surveying Support
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.72)", fontSize: 18, lineHeight: 1.65, maxWidth: 500, margin: 0 }}>
            How Surveying Experts grew from real field work into Saudi Arabia&apos;s 360 degree surveying equipment partner.
          </p>
        </div>
      </section>

      {/* The Beginning */}
      <section style={{ background: "var(--se-white)", position: "relative", overflow: "hidden", padding: "96px 0", backgroundImage: "linear-gradient(rgba(53,80,97,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(53,80,97,0.06) 1px,transparent 1px)", backgroundSize: "40px 40px" }}>
        <div className="se-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="kit-2col">
            <div>
              <SecHead label="The Beginning" title="We Started From the Field" />
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.8, color: "var(--text-muted)", margin: "0 0 14px" }}>
                Surveying Experts started from real field experience. We saw that many teams did not only need surveying equipment. They needed the right recommendation, reliable supply, practical support, maintenance, calibration, and someone to stay with them after the purchase.
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.8, color: "var(--text-muted)", margin: 0 }}>
                That is how Surveying Experts grew: from field support into a Saudi company focused on professional surveying equipment and complete customer support.
              </p>
            </div>
            {/* CEO Quote card */}
            <div style={{ background: "var(--se-blue-dark)", borderRadius: "var(--radius-xl)", padding: "32px 28px", position: "relative", overflow: "hidden" }}>
              <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.08) 1px, transparent 0)", backgroundSize: "22px 22px" }} />
              <div style={{ position: "relative" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--accent)", display: "grid", placeItems: "center", marginBottom: 20 }}>
                  <Quote size={18} style={{ color: "var(--se-blue-dark)" }} />
                </div>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.82)", margin: "0 0 24px", fontStyle: "italic" }}>
                  &quot;Since the beginning, our goal has been clear: to become the partner engineers trust when accuracy, reliability, and support truly matter. For us, quality is not only in the product. It is in the full experience before and after every purchase.&quot;
                </p>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 16 }}>
                  <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 15, color: "#fff" }}>Eng. Fathy Shehata</div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>Chief Executive Officer, Surveying Experts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: "var(--se-gray-50)", position: "relative", overflow: "hidden", padding: "96px 0", backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.12) 1px, transparent 0)", backgroundSize: "20px 20px" }}>
        <div className="se-container">
          <SecHead label="Our Journey" title="Key Milestones" centered />
          <div style={{ overflowX: "auto", paddingBottom: 16 }}>
            <div style={{ display: "flex", gap: 0, minWidth: 860, position: "relative" }}>
              <div aria-hidden style={{ position: "absolute", top: 20, left: "5%", right: "5%", height: 3, background: "var(--se-teal)" }} />
              {timeline.map((t) => (
                <div key={t.year} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "0 6px", position: "relative" }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--se-blue)", border: "3px solid var(--accent)", color: "#fff", display: "grid", placeItems: "center", position: "relative", zIndex: 1, marginBottom: 12, flexShrink: 0 }}>
                    {t.icon}
                  </div>
                  <div style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 16, color: "var(--accent)", marginBottom: 8, letterSpacing: "-0.01em" }}>{t.year}</div>
                  <div style={{ background: "var(--se-white)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", padding: "14px 10px", boxShadow: "var(--shadow-sm)", textAlign: "center", width: "100%" }}>
                    <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 13, color: "var(--text-strong)", marginBottom: 4, lineHeight: 1.3 }}>{t.title}</div>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, lineHeight: 1.5, color: "var(--text-muted)" }}>{t.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision 2030 */}
      <section style={{ background: "var(--se-blue-dark)", position: "relative", overflow: "hidden", padding: "80px 0", backgroundImage: "linear-gradient(rgba(34,167,168,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(34,167,168,0.05) 1px,transparent 1px)", backgroundSize: "36px 36px" }}>
        <div className="se-container" style={{ position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="kit-2col">
            <div>
              <SecHead label="Vision 2030" title="Supporting Saudi Arabia's Field Teams" light />
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.72)", margin: "0 0 28px" }}>
                Surveying Experts supports the Kingdom&apos;s construction, infrastructure, engineering, and geomatics sectors by helping teams access the right surveying equipment and the technical support needed to use it effectively.
              </p>
              <Link href="/contact"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 22px", background: "var(--se-teal)", color: "#fff", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", textDecoration: "none" }}>
                Request Consultation <ArrowRight size={15} />
              </Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {statsVision.map((s) => (
                <div key={s.l} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--radius-lg)", padding: "20px 16px", textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 32, color: "var(--accent)", lineHeight: 1, letterSpacing: "-0.02em" }}>{s.v}</div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 6 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
