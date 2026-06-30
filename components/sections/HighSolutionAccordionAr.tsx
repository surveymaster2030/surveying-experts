"use client";

import { useState } from "react";
import { ChevronDown, Check, ScanLine, Plane, Waves, Radar } from "lucide-react";

type Solution = {
  id: string;
  icon: React.ReactNode;
  title: string;
  tagline: string;
  partner: string;
  uses: string[];
  for: string[];
  description: string;
};

const SOLUTIONS: Solution[] = [
  {
    id: "omnislam",
    icon: <ScanLine size={22} />,
    title: "الليزر سكانر والتقاط الواقع ثلاثي الأبعاد",
    tagline: "بيانات بوينت كلاود دقيقة للتوثيق والنمذجة",
    partner: "OmniSLAM + Survey Master",
    uses: [
      "توثيق الأعمال المنفذة (As-built)",
      "نمذجة معلومات البناء (BIM)",
      "التوأم الرقمي (Digital Twin)",
      "توثيق المنشآت الصناعية",
      "قياس الأنفاق والمشاريع تحت الأرض",
    ],
    for: ["مكاتب المساحة", "الاستشارات الهندسية", "فرق BIM", "مشاريع التوثيق"],
    description: "التقاط بيئات كاملة كبيانات رقمية دقيقة (Point Cloud) لتوثيق أعمال As-built وسير عمل نمذجة معلومات البناء BIM.",
  },
  {
    id: "drone",
    icon: <Plane size={22} />,
    title: "الدرون والمسح الجوي",
    tagline: "تغطية مساحات شاسعة بسرعة وكفاءة عالية",
    partner: "The Drone Center (DJI, Quantum Systems)",
    uses: [
      "الرفع المساحي وخرائط الطبوغرافيا",
      "حساب كميات القطع والردم",
      "تتبع تقدم البناء",
      "فحص البنية التحتية",
      "استخراج صور الأورثوفوتو",
    ],
    for: ["شركات المقاولات", "مكاتب المساحة", "فرق مسح الدرون", "مشاريع البنية التحتية"],
    description: "التقاط البيانات الجوية واستخراج الخرائط الطبوغرافية لمساحات شاسعة بسرعة أكبر بكثير من المساحة التقليدية.",
  },
  {
    id: "marine",
    icon: <Waves size={22} />,
    title: "المساحة البحرية",
    tagline: "تقنيات هيدروغرافية للمشاريع المائية",
    partner: "Survey Master",
    uses: [
      "قياس الأعماق (Bathymetry)",
      "مسح الخزانات والبحيرات",
      "تخطيط البنية التحتية الساحلية",
      "رسم خرائط قيعان البحار",
    ],
    for: ["مشاريع مائية وساحلية", "البنية التحتية البحرية", "هيئات حكومية"],
    description: "تقنيات متخصصة لعمليات الرفع المساحي في البيئات المائية وقياس الأعماق للمشاريع الهيدروغرافية.",
  },
  {
    id: "gpr",
    icon: <Radar size={22} />,
    title: "أجهزة GPR والكشف تحت الأرض",
    tagline: "الكشف عن المرافق المدفونة قبل الحفر",
    partner: "Radarteam",
    uses: [
      "كشف شبكات المرافق المدفونة",
      "تحديد مسارات الأنابيب والكابلات",
      "تقليل مخاطر وتكاليف إتلاف الكابلات",
      "رسم خرائط ما تحت السطح",
    ],
    for: ["المرافق وأعمال الحفر", "شركات البنية التحتية", "المقاولون", "هيئات المرافق"],
    description: "الكشف عن شبكات المرافق المدفونة وظروف ما تحت السطح ورسم خرائطها قبل البدء بأعمال الحفر أو البناء.",
  },
];

export function HighSolutionAccordionAr() {
  const [open, setOpen] = useState<string | null>(SOLUTIONS[0].id);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {SOLUTIONS.map((sol) => {
        const isOpen = open === sol.id;
        return (
          <div key={sol.id}
            style={{ borderRadius: "var(--radius-lg)", border: `1.5px solid ${isOpen ? "var(--se-teal)" : "rgba(34,167,168,0.2)"}`, overflow: "hidden", background: "rgba(34,167,168,0.04)", transition: "border-color 0.2s, box-shadow 0.2s", boxShadow: isOpen ? "0 4px 24px rgba(34,167,168,0.12)" : "none" }}>
            <button
              onClick={() => setOpen(isOpen ? null : sol.id)}
              style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: "none", border: "none", cursor: "pointer", gap: 16, textAlign: "right" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: "var(--radius-md)", background: isOpen ? "var(--se-teal)" : "rgba(34,167,168,0.15)", color: isOpen ? "#fff" : "var(--se-teal)", display: "grid", placeItems: "center", flexShrink: 0, transition: "background 0.2s, color 0.2s" }}>
                  {sol.icon}
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 15, color: "#fff" }}>{sol.title}</div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,0.55)", marginTop: 2 }}>{sol.tagline}</div>
                </div>
              </div>
              <ChevronDown size={18} style={{ color: "rgba(255,255,255,0.5)", transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s", flexShrink: 0 }} />
            </button>

            {isOpen && (
              <div style={{ padding: "0 22px 22px", borderTop: "1px solid rgba(34,167,168,0.15)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, paddingTop: 20 }}>
                  <div>
                    <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--se-teal)", marginBottom: 10 }}>التطبيقات</div>
                    <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
                      {sol.uses.map((u) => (
                        <li key={u} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,0.72)", lineHeight: 1.45 }}>
                          <Check size={13} style={{ color: "var(--se-teal)", flexShrink: 0, marginTop: 2 }} />
                          {u}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.5)", marginBottom: 10 }}>مناسب لـ</div>
                    <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
                      {sol.for.map((f) => (
                        <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,0.72)", lineHeight: 1.45 }}>
                          <div style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(255,255,255,0.4)", flexShrink: 0, marginTop: 6 }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.5)", marginBottom: 10 }}>الشريك</div>
                      <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,0.72)", lineHeight: 1.55 }}>{sol.partner}</div>
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.6, margin: "12px 0 0" }}>{sol.description}</p>
                    </div>
                    <a href="/ar/contact"
                      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "10px 16px", background: "var(--se-teal)", color: "#fff", fontWeight: 700, fontSize: 13, borderRadius: "var(--radius-md)", textDecoration: "none", marginTop: 16 }}>
                      طلب استشارة
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
