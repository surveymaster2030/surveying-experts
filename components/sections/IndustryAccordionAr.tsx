"use client";

import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

const TECHS = [
  { key: "gnss",    short: "GNSS & RTK" },
  { key: "ts",      short: "توتال ستيشن" },
  { key: "scan",    short: "ليزر سكانر" },
  { key: "mc",      short: "التحكم بالآليات" },
  { key: "gpr",     short: "GPR" },
  { key: "marine",  short: "المساحة البحرية" },
  { key: "drone",   short: "مسح الدرون" },
  { key: "maint",   short: "الصيانة" },
];

type TechKey = "gnss" | "ts" | "scan" | "mc" | "gpr" | "marine" | "drone" | "maint";
type Industry = {
  id: string;
  name: string;
  short: string;
  matrix: Partial<Record<TechKey, boolean>>;
  fieldNeeds: string[];
  families: string[];
  bestFit: string[];
  cta: string;
};

const INDUSTRIES: Industry[] = [
  {
    id: "contractors",
    name: "شركات المقاولات",
    short: "البناء والإنشاءات",
    matrix: { gnss: true, ts: true, mc: true, scan: true, drone: true, maint: true },
    fieldNeeds: ["توقيع المحاور", "ضبط المناسيب", "متابعة التقدم", "توثيق As-Built", "تقليل أخطاء التنفيذ", "توثيق الموقع"],
    families: ["GNSS/RTK", "التوتال ستيشن والتسوية", "التحكم بالآليات", "مسح ثلاثي الأبعاد / LiDAR / SLAM", "مسح الدرون والجوي", "الصيانة والمعايرة", "الإكسسوارات"],
    bestFit: ["E800", "eRTK25", "Total Stations", "Auto Levels", "Laser Levels", "Machine Control Systems", "S2 3D LiDAR Scanner", "P2 3D LiDAR Scanner", "OmniSLAM R8", "OmniSLAM R8+", "Mapping Drones"],
    cta: "تحدث مع أخصائي قطاع المقاولات",
  },
  {
    id: "survey",
    name: "مكاتب المساحة",
    short: "المساحة الميدانية اليومية والقياس",
    matrix: { gnss: true, ts: true, scan: true, gpr: true, marine: true, drone: true, maint: true },
    fieldNeeds: ["رفع مساحي دقيق", "توقيع نقاط التحكم", "إنتاج خرائط", "أجهزة متعددة الاستخدامات", "توثيق As-Built", "Mobile Mapping"],
    families: ["GNSS/RTK", "التوتال ستيشن", "مسح ثلاثي الأبعاد / LiDAR / SLAM", "مسح الدرون والجوي", "كشف تحت الأرض", "المساحة البحرية", "الصيانة والمعايرة", "الإكسسوارات"],
    bestFit: ["E800", "eRTK25", "E80/M60 System", "Total Stations", "NET20 Plus", "S2 3D LiDAR Scanner", "P2 3D LiDAR Scanner", "OmniSLAM R8", "OmniSLAM R8+", "Survey Drones", "Cobra GPR", "Marine GNSS Systems"],
    cta: "تحدث مع أخصائي المكاتب المساحية",
  },
  {
    id: "engineering",
    name: "الاستشارات الهندسية",
    short: "توثيق المواقع والتحقق من التنفيذ",
    matrix: { gnss: true, ts: true, scan: true, drone: true, maint: true },
    fieldNeeds: ["توثيق As-Built", "الإشراف الهندسي", "مطابقة الواقع مع التصميم", "توثيق المباني والمنشآت"],
    families: ["التوتال ستيشن", "أنظمة GNSS/RTK", "مسح ثلاثي الأبعاد / LiDAR / SLAM", "مسح الدرون والجوي", "الصيانة والمعايرة", "الإكسسوارات"],
    bestFit: ["Total Stations", "GNSS RTK Systems", "NET20 Plus", "S2 3D LiDAR Scanner", "P2 3D LiDAR Scanner", "OmniSLAM R8", "OmniSLAM R8+", "Mapping Drones"],
    cta: "تحدث مع أخصائي الاستشارات الهندسية",
  },
  {
    id: "infrastructure",
    name: "البنية التحتية والطرق",
    short: "الطرق والجسور والأنفاق والمرافق",
    matrix: { gnss: true, ts: true, mc: true, scan: true, gpr: true, drone: true, maint: true },
    fieldNeeds: ["أعمال الطرق والجسور والأنفاق", "الرفع الطولي والعرضي", "التحكم في المعدات والتسوية", "كشف التعارضات", "توثيق التقدم"],
    families: ["GNSS/RTK", "التحكم بالآليات", "التوتال ستيشن والتسوية", "مسح الدرون والجوي", "كشف تحت الأرض / GPR", "مسح ثلاثي الأبعاد", "الصيانة والمعايرة", "الإكسسوارات"],
    bestFit: ["E800", "eRTK25", "Machine Control Systems", "Total Stations", "Auto Levels", "Survey Drones", "Cobra GPR", "S2 3D LiDAR Scanner", "P2 3D LiDAR Scanner", "OmniSLAM R8", "OmniSLAM R8+"],
    cta: "تحدث مع أخصائي البنية التحتية",
  },
  {
    id: "utilities",
    name: "الخدمات والمرافق",
    short: "الكشف عن المرافق وما تحت السطح",
    matrix: { gnss: true, ts: true, scan: true, gpr: true, maint: true },
    fieldNeeds: ["كشف الكابلات والأنابيب", "تحديد مسارات الخدمات", "تقليل مخاطر الحفر", "ربط الشبكات بالخرائط"],
    families: ["كشف تحت الأرض / GPR", "أنظمة GNSS/RTK", "التوتال ستيشن", "مسح ثلاثي الأبعاد / SLAM", "الصيانة والمعايرة", "الإكسسوارات"],
    bestFit: ["Cobra GPR", "Cable Locators", "Pipe Locators", "GNSS RTK Systems", "Total Stations", "OmniSLAM R8", "OmniSLAM R8+"],
    cta: "تحدث مع أخصائي أجهزة GPR والكشف",
  },
  {
    id: "marine",
    name: "المسح البحري ومشاريع المياه",
    short: "قياس الأعماق والمسح الهيدروغرافي",
    matrix: { gnss: true, ts: true, marine: true, drone: true, maint: true },
    fieldNeeds: ["قياس الأعماق (Bathymetry)", "تحديد المواقع البحرية", "المسح الهيدروغرافي", "توثيق المناطق الساحلية"],
    families: ["المساحة البحرية", "أنظمة GNSS/RTK", "مسح الدرون والجوي", "التوتال ستيشن", "الصيانة والمعايرة", "الإكسسوارات"],
    bestFit: ["Echo Sounders", "Marine GNSS Systems", "Hydrographic Survey Systems", "Mapping Drones", "Total Stations", "E800", "eRTK25"],
    cta: "تحدث مع أخصائي المساحة البحرية",
  },
  {
    id: "drone",
    name: "فرق الطائرات المسيّرة",
    short: "رسم الخرائط الجوية وبيانات LiDAR",
    matrix: { gnss: true, scan: true, drone: true, maint: true },
    fieldNeeds: ["المسح الجوي", "LiDAR Mapping", "الفحص الحراري", "نقاط GCP للتحكم الأرضي", "دمج بيانات الطائرات مع المسح الأرضي"],
    families: ["مسح الدرون والجوي", "أنظمة GNSS/RTK", "مسح ثلاثي الأبعاد / LiDAR / SLAM", "الصيانة والمعايرة", "الإكسسوارات"],
    bestFit: ["Survey Drones", "RTK Drones", "LiDAR Payload Drones", "Thermal Drones", "E800", "eRTK25", "S2 3D LiDAR Scanner", "P2 3D LiDAR Scanner", "OmniSLAM R8", "OmniSLAM R8+"],
    cta: "تحدث مع أخصائي حلول الدرون",
  },
  {
    id: "government",
    name: "الجهات الحكومية والبلديات",
    short: "شاملة لجميع التقنيات والمشاريع العامة",
    matrix: { gnss: true, ts: true, scan: true, gpr: true, marine: true, drone: true, maint: true },
    fieldNeeds: ["مشاريع المدن والبنية التحتية", "الطرق والمرافق", "إدارة الأصول العامة", "التحول الرقمي للبيانات المكانية"],
    families: ["أنظمة GNSS/RTK", "التوتال ستيشن", "مسح الدرون والجوي", "مسح ثلاثي الأبعاد / LiDAR / SLAM", "كشف تحت الأرض / GPR", "المساحة البحرية", "الصيانة والمعايرة", "الإكسسوارات"],
    bestFit: ["GNSS RTK Systems", "Total Stations", "Survey Drones", "S2 3D LiDAR Scanner", "P2 3D LiDAR Scanner", "OmniSLAM R8", "OmniSLAM R8+", "Cobra GPR", "Marine Surveying Systems"],
    cta: "تحدث مع أخصائي القطاع العام",
  },
];

export function IndustryMatrixAr() {
  return (
    <div style={{ overflowX: "auto", borderRadius: "var(--radius-xl)", border: "1px solid var(--border-subtle)", boxShadow: "var(--shadow-sm)" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 720, background: "var(--se-white)" }}>
        <thead>
          <tr style={{ background: "var(--se-blue-dark)" }}>
            <th style={{ padding: "14px 18px", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 13, color: "rgba(255,255,255,0.7)", textAlign: "right", borderLeft: "1px solid rgba(255,255,255,0.08)", whiteSpace: "nowrap", minWidth: 180 }}>القطاع</th>
            {TECHS.map((t) => (
              <th key={t.key} style={{ padding: "14px 10px", fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 11, color: "rgba(255,255,255,0.75)", textAlign: "center", borderLeft: "1px solid rgba(255,255,255,0.08)", whiteSpace: "nowrap", letterSpacing: "0.02em" }}>{t.short}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {INDUSTRIES.map((ind, i) => (
            <tr key={ind.id} style={{ background: i % 2 === 0 ? "var(--se-white)" : "var(--se-gray-50)", transition: "background 0.15s" }}>
              <td style={{ padding: "13px 18px", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 13, color: "var(--text-strong)", borderLeft: "1px solid var(--border-subtle)", whiteSpace: "nowrap" }}>
                <div>{ind.name}</div>
                <div style={{ fontWeight: 400, fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>{ind.short}</div>
              </td>
              {TECHS.map((t) => (
                <td key={t.key} style={{ padding: "12px 10px", textAlign: "center", borderLeft: "1px solid var(--border-subtle)" }}>
                  {ind.matrix[t.key as TechKey] ? (
                    <div style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--se-teal)", color: "#fff", display: "inline-grid", placeItems: "center" }}>
                      <Check size={13} />
                    </div>
                  ) : (
                    <div style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--se-gray-50)", border: "1px solid var(--border-subtle)", display: "inline-block" }} />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function IndustryAccordionAr() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {INDUSTRIES.map((ind) => {
        const isOpen = open === ind.id;
        return (
          <div key={ind.id}
            style={{ borderRadius: "var(--radius-lg)", border: `1.5px solid ${isOpen ? "var(--se-teal)" : "var(--border-subtle)"}`, overflow: "hidden", background: "var(--se-white)", boxShadow: isOpen ? "0 4px 20px rgba(34,167,168,0.1)" : "var(--shadow-xs)", transition: "border-color 0.2s, box-shadow 0.2s" }}>
            <button
              onClick={() => setOpen(isOpen ? null : ind.id)}
              style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: "none", border: "none", cursor: "pointer", gap: 16, textAlign: "right" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: isOpen ? "var(--se-teal)" : "var(--se-gray-200)", flexShrink: 0, transition: "background 0.2s" }} />
                <div>
                  <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 15, color: "var(--text-strong)" }}>{ind.name}</div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-muted)", marginTop: 2 }}>{ind.short}</div>
                </div>
              </div>
              <ChevronDown size={18} style={{ color: "var(--text-muted)", transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s", flexShrink: 0 }} />
            </button>

            {isOpen && (
              <div style={{ padding: "0 22px 22px", borderTop: "1px solid var(--border-subtle)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, paddingTop: 20 }} className="kit-3col">
                  <div>
                    <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--se-teal)", marginBottom: 10 }}>احتياجات الميدان</div>
                    <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                      {ind.fieldNeeds.map((n) => (
                        <li key={n} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-muted)", lineHeight: 1.45 }}>
                          <Check size={13} style={{ color: "var(--se-teal)", flexShrink: 0, marginTop: 2 }} />
                          {n}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--se-blue)", marginBottom: 10 }}>الحلول الموصى بها</div>
                    <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                      {ind.families.map((f) => (
                        <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-muted)", lineHeight: 1.45 }}>
                          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--se-blue)", flexShrink: 0, marginTop: 5 }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text-muted)", marginBottom: 10 }}>المنتجات الأنسب</div>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {ind.bestFit.map((b) => (
                          <span key={b} style={{ display: "inline-block", fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, padding: "3px 9px", borderRadius: "var(--radius-pill)", background: "var(--se-blue-soft)", color: "var(--se-blue)", border: "1px solid rgba(53,80,97,0.25)", whiteSpace: "nowrap" }}>{b}</span>
                        ))}
                      </div>
                    </div>
                    <a href="/ar/contact"
                      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "10px 16px", background: "var(--se-teal)", color: "#fff", fontWeight: 700, fontSize: 13, borderRadius: "var(--radius-md)", textDecoration: "none", marginTop: 16 }}>
                      {ind.cta}
                    </a>
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
