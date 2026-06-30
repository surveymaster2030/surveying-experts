import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Database, Layers, Shield, TrendingUp,
  MessageSquare, Compass, Package, Settings, ShieldCheck,
  Plane, ScanLine, Radar, Waves,
} from "lucide-react";
import { HighSolutionAccordion } from "@/components/sections/HighSolutionAccordion";

export const metadata: Metadata = {
  title: "High Solutions | Advanced Surveying Technologies | Surveying Experts",
  description:
    "Advanced surveying solutions including 3D laser scanning, drone mapping, marine surveying, and GPR underground detection for complex field work in Saudi Arabia.",
};

function Eyebrow({ children, teal }: { children: React.ReactNode; teal?: boolean }) {
  return (
    <span style={{ display: "inline-block", fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: teal ? "var(--se-teal)" : "var(--accent)", background: teal ? "rgba(34,167,168,0.15)" : "rgba(246,186,59,0.12)", padding: "0.35em 0.85em", borderRadius: "var(--radius-pill)", marginBottom: "1.25rem" }}>
      {children}
    </span>
  );
}

function SecHead({ label, title, subtitle, light, centered, teal }: { label?: string; title: string; subtitle?: string; light?: boolean; centered?: boolean; teal?: boolean }) {
  return (
    <div style={{ marginBottom: "2.5rem", textAlign: centered ? "center" : "left" }}>
      {label && <Eyebrow teal={teal}>{label}</Eyebrow>}
      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.625rem, 3vw, 2.25rem)", color: light ? "#fff" : "var(--text-strong)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: label ? "0.5rem 0 0.875rem" : "0 0 0.875rem" }}>{title}</h2>
      {subtitle && <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-md)", color: light ? "rgba(255,255,255,0.65)" : "var(--text-muted)", lineHeight: 1.65, maxWidth: centered ? "58ch" : undefined, margin: centered ? "0 auto" : 0 }}>{subtitle}</p>}
    </div>
  );
}

const awareness = [
  { icon: <Database size={18} />, title: "Capture More Data", text: "Advanced technologies help teams collect rich field data from land, air, water, and underground environments." },
  { icon: <Layers size={18} />, title: "Understand Complex Sites", text: "Laser scanning, drones, marine systems, and GPR help reveal details that traditional workflows may miss." },
  { icon: <Shield size={18} />, title: "Reduce Field Risk", text: "Better data helps teams identify site conditions, underground utilities, access challenges, and documentation gaps." },
  { icon: <TrendingUp size={18} />, title: "Improve Project Decisions", text: "Accurate field data supports design review, construction planning, progress tracking, and technical reporting." },
];

const layers = [
  { icon: <Plane size={15} />, label: "Air Layer", sub: "Drone Mapping" },
  { icon: <ScanLine size={15} />, label: "Ground Layer", sub: "3D Scanning" },
  { icon: <Radar size={15} />, label: "Underground", sub: "GPR Detection" },
  { icon: <Waves size={15} />, label: "Water Layer", sub: "Marine Surveying" },
];

const support = [
  { n: "01", icon: <MessageSquare size={20} />, title: "Understand the Application", text: "We start by understanding the project, site, deliverables, and technical requirements." },
  { n: "02", icon: <Compass size={20} />, title: "Recommend the Right Technology", text: "We identify which advanced solution fits: laser scanning, drone mapping, GPR, marine, or a combined workflow." },
  { n: "03", icon: <Package size={20} />, title: "Supply the Equipment", text: "We support the purchase with direct consultation, fast quotation, and online store access." },
  { n: "04", icon: <Settings size={20} />, title: "Guide the Operation", text: "We support teams with setup guidance, product orientation, and workflow understanding." },
  { n: "05", icon: <ShieldCheck size={20} />, title: "Support After Purchase", text: "Technical support, follow-up, maintenance coordination, calibration when applicable, and after-sales care." },
];

export default function HighSolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "#0d1e2a", position: "relative", overflow: "hidden", padding: "100px 0 80px", minHeight: 440 }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(34,167,168,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(34,167,168,0.05) 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "var(--se-teal)", opacity: 0.7 }} />
        <div className="se-container" style={{ position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "start" }} className="kit-2col">
            <div>
              <Eyebrow teal>High Solutions</Eyebrow>
              <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#fff", fontSize: "clamp(30px,4.5vw,56px)", lineHeight: 1.06, letterSpacing: "-0.02em", margin: "18px 0 20px", maxWidth: 620 }}>
                Advanced Surveying Solutions for Complex Field Work
              </h1>
              <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.68)", fontSize: 18, lineHeight: 1.65, maxWidth: 520, margin: "0 0 32px" }}>
                From 3D laser scanning and drone mapping to marine surveying and underground detection, we help field teams capture better data and work with more confidence.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <Link href="#high-solutions-detail"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 22px", background: "var(--se-teal)", color: "#fff", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", textDecoration: "none" }}>
                  Explore Solutions
                </Link>
                <Link href="/contact"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 22px", background: "transparent", color: "#fff", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", border: "1.5px solid rgba(255,255,255,0.4)", textDecoration: "none" }}>
                  Talk to a Specialist
                </Link>
              </div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,0.35)", margin: "18px 0 0" }}>
                When traditional surveying is not enough, advanced data capture gives teams a clearer view of the field.
              </p>
            </div>
            {/* Layer labels */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20, paddingTop: 20 }} className="kit-layers">
              {layers.map((l) => (
                <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", border: "1.5px solid rgba(34,167,168,0.5)", background: "rgba(34,167,168,0.1)", color: "var(--se-teal)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                    {l.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--se-teal)" }}>{l.label}</div>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "rgba(255,255,255,0.45)" }}>{l.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section style={{ background: "#0d1e2a", position: "relative", overflow: "hidden", padding: "72px 0", backgroundImage: "linear-gradient(rgba(34,167,168,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(34,167,168,0.05) 1px,transparent 1px)", backgroundSize: "36px 36px" }}>
        <div className="se-container" style={{ position: "relative" }}>
          <SecHead label="Why It Matters" title="Why Advanced Surveying Solutions Matter" light centered teal />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {awareness.map((a) => (
              <div key={a.title} style={{ background: "rgba(34,167,168,0.06)", border: "1px solid rgba(34,167,168,0.2)", borderRadius: "var(--radius-lg)", padding: "22px 18px" }}>
                <div style={{ width: 40, height: 40, borderRadius: "var(--radius-md)", background: "rgba(34,167,168,0.15)", color: "var(--se-teal)", display: "grid", placeItems: "center", marginBottom: 14 }}>
                  {a.icon}
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 8 }}>{a.title}</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.6)" }}>{a.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional vs High */}
      <section style={{ background: "var(--se-white)", padding: "96px 0" }}>
        <div className="se-container">
          <SecHead label="The Difference" title="Beyond Measurement. Toward Complete Field Intelligence." centered />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="kit-2col">
            <div style={{ borderRadius: "var(--radius-xl)", padding: "32px 28px", background: "var(--se-blue-soft)", border: "1px solid var(--se-blue-light)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--se-blue)", marginBottom: 20 }}>Traditional Surveying</div>
              {["Points and coordinates", "Layout and leveling", "Site control", "Standard field measurement", "Manual documentation"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--se-blue)", flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-body)" }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ borderRadius: "var(--radius-xl)", padding: "32px 28px", background: "var(--se-teal-soft)", border: "1px solid rgba(34,167,168,0.3)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--se-teal-dark)", marginBottom: 20 }}>High Solutions</div>
              {["3D reality capture", "Aerial mapping", "Underground detection", "Hydrographic surveying", "Digital site documentation", "Large-area data capture", "Safer access to difficult areas"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--se-teal)", flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-body)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accordion */}
      <section id="high-solutions-detail" style={{ background: "#0d1e2a", padding: "88px 0", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(34,167,168,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(34,167,168,0.04) 1px,transparent 1px)", backgroundSize: "44px 44px" }} />
        <div className="se-container" style={{ position: "relative" }}>
          <SecHead label="Our High Solution Areas" title="Advanced Technologies We Support" subtitle="We provide access, consultation, equipment supply, operation guidance, and after-sales support for each area." light centered teal />
          <HighSolutionAccordion />
        </div>
      </section>

      {/* Support Process */}
      <section style={{ background: "var(--se-gray-50)", position: "relative", overflow: "hidden", padding: "96px 0", backgroundImage: "radial-gradient(circle at 1px 1px, rgba(53,80,97,0.10) 1px, transparent 0)", backgroundSize: "22px 22px" }}>
        <div className="se-container">
          <SecHead label="How We Support You" title="Advanced Technology Needs the Right Support" centered />
          <div style={{ display: "flex", alignItems: "flex-start", gap: 0, overflowX: "auto" }}>
            {support.map((s, i) => (
              <div key={s.title} style={{ display: "flex", alignItems: "flex-start" }}>
                <div style={{ flex: "0 0 160px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                  <div style={{ width: 50, height: 50, borderRadius: "50%", background: "var(--se-teal)", color: "#fff", display: "grid", placeItems: "center", flexShrink: 0 }}>
                    {s.icon}
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 11, color: "var(--se-teal)", marginTop: 10, letterSpacing: "0.08em" }}>{s.n}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: "var(--text-strong)", marginTop: 4, lineHeight: 1.3 }}>{s.title}</div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-muted)", lineHeight: 1.55, marginTop: 6, maxWidth: "18ch" }}>{s.text}</div>
                </div>
                {i < support.length - 1 && (
                  <div style={{ height: 2, background: "var(--se-teal)", opacity: 0.25, width: 24, marginTop: 25, flexShrink: 0 }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0d1e2a", position: "relative", overflow: "hidden", padding: "80px 0", backgroundImage: "linear-gradient(rgba(34,167,168,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(34,167,168,0.05) 1px,transparent 1px)", backgroundSize: "36px 36px" }}>
        <div className="se-container" style={{ position: "relative", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.5rem,3vw,2rem)", color: "#fff", marginBottom: "1rem" }}>Need Advanced Data for a Complex Site?</h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-md)", color: "rgba(255,255,255,0.65)", marginBottom: "2rem" }}>Tell us about your project and our team will recommend the right high solution.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <Link href="/contact"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 26px", background: "var(--se-teal)", color: "#fff", fontWeight: 700, fontSize: 16, borderRadius: "var(--radius-md)", textDecoration: "none" }}>
              Talk to a High Solutions Specialist <ArrowRight size={16} />
            </Link>
            <Link href="/contact"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 26px", background: "transparent", color: "#fff", fontWeight: 700, fontSize: 16, borderRadius: "var(--radius-md)", border: "1.5px solid rgba(255,255,255,0.4)", textDecoration: "none" }}>
              Request Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
