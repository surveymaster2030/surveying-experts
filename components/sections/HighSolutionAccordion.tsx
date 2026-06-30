"use client";

import { useState } from "react";
import Link from "next/link";
import { ScanLine, Plane, Waves, Radar, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

const highSolutions = [
  {
    icon: <ScanLine size={22} />,
    title: "Laser Scanners & 3D Reality Capture",
    short: "Capture real-world environments as accurate digital data for documentation, analysis, and design workflows.",
    uses: ["As-built documentation", "BIM workflows", "Point cloud capture", "Industrial site documentation", "Tunnels and complex environments", "Building and infrastructure inspection"],
    for: ["Engineering consultants", "BIM teams", "Contractors", "Infrastructure teams", "Industrial facilities"],
    partner: "OmniSLAM + Survey Master",
  },
  {
    icon: <Plane size={22} />,
    title: "Drone & Aerial Mapping",
    short: "Capture large areas faster with aerial data for mapping, inspection, monitoring, and documentation.",
    uses: ["Land mapping", "Construction progress tracking", "Site inspection", "Stockpile and area documentation", "Infrastructure monitoring", "Hard-to-access area inspection"],
    for: ["Contractors", "Surveying teams", "Infrastructure projects", "Inspection teams", "Engineering consultants"],
    partner: "The Drone Center (DJI, Quantum Systems)",
  },
  {
    icon: <Waves size={22} />,
    title: "Marine Surveying",
    short: "Survey water-based environments using hydrographic technologies for depth measurement and marine data collection.",
    uses: ["Hydrographic surveying", "Depth measurement", "Water-based data collection", "Coastal and inland water projects", "Marine infrastructure documentation"],
    for: ["Hydrographic survey teams", "Infrastructure teams", "Water project teams", "Government and municipal entities"],
    partner: "Survey Master",
  },
  {
    icon: <Radar size={22} />,
    title: "GPR & Underground Detection",
    short: "Detect and map what is hidden below the surface before excavation, construction, or infrastructure work.",
    uses: ["Underground utility detection", "Pipeline and cable location", "Subsurface mapping", "Excavation risk reduction", "Pre-construction investigation"],
    for: ["Contractors", "Utility teams", "Infrastructure projects", "Surveying offices", "Municipal and public sector teams"],
    partner: "Radarteam",
  },
];

export function HighSolutionAccordion() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {highSolutions.map((h, i) => {
        const isOpen = active === i;
        return (
          <div key={h.title} style={{ borderRadius: "var(--radius-xl)", border: `1px solid ${isOpen ? "var(--se-teal)" : "rgba(34,167,168,0.2)"}`, overflow: "hidden", transition: "border-color 0.2s" }}>
            <button
              onClick={() => setActive(isOpen ? null : i)}
              style={{ width: "100%", background: isOpen ? "rgba(34,167,168,0.1)" : "rgba(255,255,255,0.03)", border: "none", cursor: "pointer", padding: "24px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: "var(--radius-md)", background: isOpen ? "var(--se-teal)" : "rgba(34,167,168,0.15)", color: isOpen ? "#fff" : "var(--se-teal)", display: "grid", placeItems: "center", flexShrink: 0, transition: "background 0.2s" }}>
                  {h.icon}
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19, color: "#fff", lineHeight: 1.2 }}>{h.title}</div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "rgba(255,255,255,0.55)", marginTop: 4 }}>{h.short}</div>
                </div>
              </div>
              <div style={{ color: "rgba(255,255,255,0.7)", flexShrink: 0 }}>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </button>
            {isOpen && (
              <div style={{ borderTop: "1px solid rgba(34,167,168,0.2)", padding: "24px 28px", background: "rgba(255,255,255,0.02)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }} className="kit-2col">
                  <div>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--se-teal)", marginBottom: 10 }}>What It Helps With</div>
                    {h.uses.map((u) => (
                      <div key={u} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--se-teal)", flexShrink: 0 }} />
                        <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,0.7)" }}>{u}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--se-teal)", marginBottom: 10 }}>Suitable For</div>
                    {h.for.map((f) => (
                      <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(34,167,168,0.5)", flexShrink: 0 }} />
                        <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,0.65)" }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--se-teal)", marginBottom: 2 }}>Partner</div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: "#fff" }}>{h.partner}</div>
                    <Link href="/contact"
                      style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 16px", background: "var(--se-teal)", color: "#fff", fontWeight: 700, fontSize: 13, borderRadius: "var(--radius-md)", textDecoration: "none" }}>
                      Talk to a Specialist <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
