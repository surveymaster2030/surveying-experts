"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HardHat, Compass, PenTool, GitBranch, Layers, Waves, Plane, Landmark,
  ChevronDown, ChevronUp, ArrowRight, ExternalLink, Check,
} from "lucide-react";

function TealChip({ label }: { label: string }) {
  return (
    <span style={{ display: "inline-block", fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, padding: "4px 10px", borderRadius: "var(--radius-pill)", background: "var(--se-teal-soft)", color: "var(--se-teal)", border: "1px solid rgba(34,167,168,0.2)", whiteSpace: "nowrap" }}>
      {label}
    </span>
  );
}

const industryData = [
  {
    icon: <HardHat size={18} />,
    name: "Construction Contractors",
    solutions: ["GNSS & RTK", "Total Station & Leveling", "Machine Control", "3D Scanning & LiDAR", "Drone & Aerial Mapping", "Maintenance & Calibration"],
    fieldNeeds: ["Site axis layout", "Leveling and elevation control", "Progress tracking", "As-built documentation", "Reducing execution errors", "Site documentation"],
    families: ["GNSS/RTK Systems", "Total Station & Leveling", "Machine Control", "3D Scanning / LiDAR / SLAM", "Drone & Aerial Mapping", "Maintenance & Calibration", "Accessories"],
    bestFit: ["E800", "eRTK25", "Total Stations", "Auto Levels", "Laser Levels", "Machine Control Systems", "S2 3D LiDAR Scanner", "P2 3D LiDAR Scanner", "OmniSLAM R8", "OmniSLAM R8+", "Mapping Drones"],
    cta: "Talk to a Contractor Specialist",
  },
  {
    icon: <Compass size={18} />,
    name: "Surveying Offices",
    solutions: ["GNSS & RTK", "Total Station & Leveling", "3D Scanning & LiDAR", "Drone & Aerial Mapping", "Underground Detection", "Marine Surveying", "Maintenance & Calibration"],
    fieldNeeds: ["Accurate topographic survey", "Control point stakeout", "Map production", "Multi-purpose devices", "As-built documentation", "Mobile Mapping"],
    families: ["GNSS/RTK Systems", "Total Station", "3D Scanning / LiDAR / SLAM", "Drone & Aerial Mapping", "Underground Detection", "Marine Surveying", "Maintenance & Calibration", "Accessories"],
    bestFit: ["E800", "eRTK25", "E80/M60 System", "Total Stations", "NET20 Plus", "S2 3D LiDAR Scanner", "P2 3D LiDAR Scanner", "OmniSLAM R8", "OmniSLAM R8+", "Survey Drones", "Cobra GPR", "Marine GNSS Systems"],
    cta: "Talk to a Surveying Office Specialist",
  },
  {
    icon: <PenTool size={18} />,
    name: "Engineering Consultants",
    solutions: ["Total Station & Leveling", "GNSS & RTK", "3D Scanning & LiDAR", "Drone & Aerial Mapping", "Maintenance & Calibration"],
    fieldNeeds: ["As-built documentation", "Engineering supervision", "Design-to-reality verification", "Building documentation"],
    families: ["Total Station", "GNSS/RTK Systems", "3D Scanning / LiDAR / SLAM", "Drone & Aerial Mapping", "Maintenance & Calibration", "Accessories"],
    bestFit: ["Total Stations", "GNSS RTK Systems", "NET20 Plus", "S2 3D LiDAR Scanner", "P2 3D LiDAR Scanner", "OmniSLAM R8", "OmniSLAM R8+", "Mapping Drones"],
    cta: "Talk to a Consultant Specialist",
  },
  {
    icon: <GitBranch size={18} />,
    name: "Infrastructure & Roads",
    solutions: ["GNSS & RTK", "Machine Control", "Total Station & Leveling", "Drone & Aerial Mapping", "Underground Detection", "3D Scanning & LiDAR", "Maintenance & Calibration"],
    fieldNeeds: ["Road, bridge, and tunnel works", "Longitudinal and cross-section surveys", "Machine control and grading", "Conflict detection", "Progress documentation"],
    families: ["GNSS/RTK Systems", "Machine Control", "Total Station & Leveling", "Drone & Aerial Mapping", "Underground Detection / GPR", "3D Scanning", "Maintenance & Calibration", "Accessories"],
    bestFit: ["E800", "eRTK25", "Machine Control Systems", "Total Stations", "Auto Levels", "Survey Drones", "Cobra GPR", "S2 3D LiDAR Scanner", "P2 3D LiDAR Scanner", "OmniSLAM R8", "OmniSLAM R8+"],
    cta: "Talk to an Infrastructure Specialist",
  },
  {
    icon: <Layers size={18} />,
    name: "Utilities & Underground Works",
    solutions: ["Underground Detection", "GNSS & RTK", "Total Station & Leveling", "3D Scanning & LiDAR", "Maintenance & Calibration"],
    fieldNeeds: ["Cable and pipe detection", "Utility route identification", "Reducing excavation risk", "Integrating utility networks with maps"],
    families: ["Underground Detection / GPR", "GNSS/RTK Systems", "Total Station", "3D Scanning / SLAM", "Maintenance & Calibration", "Accessories"],
    bestFit: ["Cobra GPR", "Cable Locators", "Pipe Locators", "GNSS RTK Systems", "Total Stations", "OmniSLAM R8", "OmniSLAM R8+"],
    cta: "Talk to an Underground Detection Specialist",
  },
  {
    icon: <Waves size={18} />,
    name: "Marine & Water Projects",
    solutions: ["Marine Surveying", "GNSS & RTK", "Drone & Aerial Mapping", "Total Station & Leveling", "Maintenance & Calibration"],
    fieldNeeds: ["Depth measurement (bathymetry)", "Marine positioning", "Hydrographic surveys", "Coastal area documentation"],
    families: ["Marine Surveying", "GNSS/RTK Systems", "Drone & Aerial Mapping", "Total Station", "Maintenance & Calibration", "Accessories"],
    bestFit: ["Echo Sounders", "Marine GNSS Systems", "Hydrographic Survey Systems", "Mapping Drones", "Total Stations", "E800", "eRTK25"],
    cta: "Talk to a Marine Surveying Specialist",
  },
  {
    icon: <Plane size={18} />,
    name: "Drone & Aerial Data Teams",
    solutions: ["Drone & Aerial Mapping", "GNSS & RTK", "3D Scanning & LiDAR", "Maintenance & Calibration"],
    fieldNeeds: ["Aerial mapping workflows", "LiDAR mapping", "Thermal inspection", "GCP control points", "Merging aerial and ground survey data"],
    families: ["Drone & Aerial Mapping", "GNSS/RTK Systems", "3D Scanning / LiDAR / SLAM", "Maintenance & Calibration", "Accessories"],
    bestFit: ["Survey Drones", "RTK Drones", "LiDAR Payload Drones", "Thermal Drones", "E800", "eRTK25", "S2 3D LiDAR Scanner", "P2 3D LiDAR Scanner", "OmniSLAM R8", "OmniSLAM R8+"],
    cta: "Talk to a Drone Solutions Specialist",
  },
  {
    icon: <Landmark size={18} />,
    name: "Government & Municipal Teams",
    solutions: ["GNSS & RTK", "Total Station & Leveling", "Drone & Aerial Mapping", "Underground Detection", "3D Scanning & LiDAR", "Marine Surveying", "Maintenance & Calibration"],
    fieldNeeds: ["City and infrastructure projects", "Roads and utilities management", "Asset documentation", "Digital transformation of spatial data"],
    families: ["GNSS/RTK Systems", "Total Station", "Drone & Aerial Mapping", "3D Scanning / LiDAR / SLAM", "Underground Detection / GPR", "Marine Surveying", "Maintenance & Calibration", "Accessories"],
    bestFit: ["GNSS RTK Systems", "Total Stations", "Survey Drones", "S2 3D LiDAR Scanner", "P2 3D LiDAR Scanner", "OmniSLAM R8", "OmniSLAM R8+", "Cobra GPR", "Marine Surveying Systems"],
    cta: "Talk to a Public Sector Specialist",
  },
];

const MATRIX_COLS = ["GNSS & RTK", "Total Stn.", "3D / LiDAR", "Machine Ctrl.", "Underground", "Marine", "Drone", "M&C"];
const COL_MATCH: Record<string, string> = {
  "GNSS & RTK": "GNSS",
  "Total Stn.": "Total Station",
  "3D / LiDAR": "3D Scanning",
  "Machine Ctrl.": "Machine Control",
  "Underground": "Underground",
  "Marine": "Marine",
  "Drone": "Drone",
  "M&C": "Maintenance",
};

export function IndustryMatrix() {
  return (
    <div style={{ overflowX: "auto", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-subtle)", boxShadow: "var(--shadow-sm)" }}>
      <table style={{ width: "100%", minWidth: 760, borderCollapse: "collapse", background: "var(--se-white)" }}>
        <thead>
          <tr style={{ borderBottom: "2px solid var(--border-subtle)" }}>
            <th style={{ padding: "14px 18px", textAlign: "left", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 700, color: "var(--text-strong)", background: "var(--se-gray-50)", borderRight: "1px solid var(--border-subtle)", minWidth: 180 }}>Industry</th>
            {MATRIX_COLS.map((col) => (
              <th key={col} style={{ padding: "10px 8px", textAlign: "center", fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 700, color: "var(--se-teal)", background: "var(--se-gray-50)", borderRight: "1px solid var(--se-gray-100)", minWidth: 78, lineHeight: 1.3 }}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {industryData.map((ind, ri) => (
            <tr key={ind.name} style={{ borderBottom: "1px solid var(--se-gray-100)", background: ri % 2 === 0 ? "var(--se-white)" : "var(--se-gray-50)" }}>
              <td style={{ padding: "12px 18px", borderRight: "1px solid var(--border-subtle)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 28, height: 28, borderRadius: "var(--radius-sm)", background: "var(--se-blue-soft)", color: "var(--se-blue)", display: "grid", placeItems: "center", flexShrink: 0 }}>{ind.icon}</div>
                  <span style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 13, color: "var(--text-strong)" }}>{ind.name}</span>
                </div>
              </td>
              {MATRIX_COLS.map((col) => {
                const match = ind.solutions.some((s) => s.includes(COL_MATCH[col]));
                return (
                  <td key={col} style={{ textAlign: "center", borderRight: "1px solid var(--se-gray-100)" }}>
                    {match
                      ? <div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--se-teal)", margin: "0 auto" }} />
                      : <div style={{ width: 6, height: 1, background: "var(--se-gray-200)", margin: "0 auto" }} />
                    }
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function IndustryAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {industryData.map((ind, i) => {
          const isOpen = openIdx === i;
          return (
            <div key={ind.name} style={{ background: "var(--se-white)", border: `1px solid ${isOpen ? "var(--se-teal)" : "var(--border-subtle)"}`, borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: isOpen ? "var(--shadow-md)" : "var(--shadow-xs)", transition: "box-shadow 0.2s, border-color 0.2s" }}>
              <button
                onClick={() => setOpenIdx(isOpen ? null : i)}
                style={{ width: "100%", background: "none", border: "none", cursor: "pointer", padding: "18px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 38, height: 38, borderRadius: "var(--radius-md)", background: isOpen ? "var(--se-teal-soft)" : "var(--se-blue-soft)", color: isOpen ? "var(--se-teal)" : "var(--se-blue)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                    {ind.icon}
                  </div>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, color: "var(--text-strong)" }}>{ind.name}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "flex-end" }}>
                    {ind.solutions.slice(0, 3).map((s) => <TealChip key={s} label={s} />)}
                  </div>
                  {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </button>
              {isOpen && (
                <div style={{ padding: "0 22px 24px", borderTop: "1px solid var(--border-subtle)" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 28, marginTop: 20 }} className="kit-3col">
                    <div>
                      <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text-muted)", marginBottom: 10 }}>Field Needs</div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                        {ind.fieldNeeds.map((n) => (
                          <div key={n} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                            <Check size={13} style={{ color: "var(--se-teal)", flexShrink: 0, marginTop: 2 }} />
                            <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-body)", lineHeight: 1.5 }}>{n}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--se-blue)", marginBottom: 10 }}>Recommended Solutions</div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                        {ind.families.map((f) => (
                          <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--se-blue)", flexShrink: 0, marginTop: 5 }} />
                            <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-body)", lineHeight: 1.5 }}>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                      <div>
                        <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text-muted)", marginBottom: 10 }}>Best-fit Products</div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                          {ind.bestFit.map((b) => (
                            <span key={b} style={{ display: "inline-block", fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, padding: "3px 9px", borderRadius: "var(--radius-pill)", background: "var(--se-blue-soft)", color: "var(--se-blue)", border: "1px solid rgba(53,80,97,0.25)", whiteSpace: "nowrap" }}>{b}</span>
                          ))}
                        </div>
                      </div>
                      <Link href="/contact"
                        style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 16px", background: "var(--se-teal)", color: "#fff", fontWeight: 700, fontSize: 13, borderRadius: "var(--radius-md)", textDecoration: "none", marginTop: 16 }}>
                        {ind.cta} <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div style={{ textAlign: "center", marginTop: 36 }}>
        <a href="https://surveyingexperts-sa.com/collections/all" target="_blank" rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", background: "var(--accent)", color: "var(--se-blue-dark)", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", textDecoration: "none" }}>
          Browse Online Store <ExternalLink size={15} />
        </a>
        <Link href="/contact"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", background: "var(--se-blue-soft)", color: "var(--se-blue)", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", border: "1.5px solid var(--se-blue)", textDecoration: "none", marginLeft: 14 }}>
          Request Consultation
        </Link>
      </div>
    </>
  );
}
