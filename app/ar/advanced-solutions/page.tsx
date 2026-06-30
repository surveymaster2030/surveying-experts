import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft, ScanLine, Plane, Waves, Radar,
  Check, Layers, Mountain, Activity, Crosshair,
} from "lucide-react";
import { HighSolutionAccordionAr } from "@/components/sections/HighSolutionAccordionAr";

export const metadata: Metadata = {
  title: "الحلول المتقدمة | ليزر سكانر، درون، مسح بحري، GPR | خبراء المساحة",
  description:
    "تقنيات متقدمة للأعمال الميدانية المعقدة: ليزر سكانر، طائرات مسيّرة، مسح بحري، وأجهزة GPR. مدعومة محلياً في المملكة العربية السعودية.",
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
    <div style={{ marginBottom: "2.5rem", textAlign: centered ? "center" : "right" }}>
      {label && <Eyebrow light={light}>{label}</Eyebrow>}
      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.625rem, 3vw, 2.25rem)", color: light ? "#fff" : "var(--text-strong)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: label ? "0.5rem 0 0.875rem" : "0 0 0.875rem" }}>{title}</h2>
      {subtitle && <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-md)", color: light ? "rgba(255,255,255,0.65)" : "var(--text-muted)", lineHeight: 1.65, maxWidth: centered ? "58ch" : undefined, margin: centered ? "0 auto" : 0 }}>{subtitle}</p>}
    </div>
  );
}

const layers = [
  { icon: <Plane size={16} />, label: "جوي", color: "var(--se-teal)" },
  { icon: <Mountain size={16} />, label: "أرضي", color: "var(--se-blue)" },
  { icon: <Layers size={16} />, label: "تحت الأرض", color: "var(--se-blue-dark)" },
  { icon: <Waves size={16} />, label: "مائي", color: "#22a7a8" },
];

const whyCards = [
  { icon: <Activity size={20} />, title: "مخرجات أكثر تفصيلاً", text: "المشاريع الحديثة تتطلب أكثر من إحداثيات: نماذج ثلاثية الأبعاد، توأم رقمي، وبيانات تحت السطح." },
  { icon: <Crosshair size={20} />, title: "دقة أعلى", text: "ليزر سكانر والطائرات المسيّرة تلتقط تفاصيل مستحيلة بالمعدات التقليدية." },
  { icon: <Check size={20} />, title: "تغطية أوسع", text: "مسح مساحات ضخمة بوقت أقل دون المساس بجودة البيانات." },
  { icon: <Layers size={20} />, title: "كشف الخفي", text: "كشف شبكات المرافق المدفونة وظروف ما تحت السطح قبل الحفر." },
];

const supportSteps = [
  { n: "01", title: "فهم التطبيق", text: "نبدأ بمعرفة المخرجات المطلوبة وبيئة الموقع." },
  { n: "02", title: "توصية التقنية", text: "نختار الحل المناسب: ليزر سكانر أو دورن أو GPR أو بحري." },
  { n: "03", title: "التوريد السريع", text: "عروض أسعار سريعة وتوريد من شركائنا العالميين." },
  { n: "04", title: "توجيه التشغيل", text: "دعم الإعداد وتوجيه مبدئي لتقليل أخطاء الاستخدام." },
  { n: "05", title: "متابعة ما بعد الشراء", text: "الدعم الفني والصيانة على المدى البعيد." },
];

export default function ArAdvancedSolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--se-blue-darker)", padding: "80px 0 64px", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(34,167,168,0.3) 1.5px, transparent 1.5px), radial-gradient(circle, rgba(34,167,168,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px, 36px 36px", backgroundPosition: "0 0, 28px 18px", opacity: 0.5 }} />
        <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "var(--se-teal)" }} />
        <div className="se-container" style={{ position: "relative" }}>
          <Eyebrow light>الحلول المتقدمة</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#fff", fontSize: "clamp(30px,4vw,52px)", lineHeight: 1.06, letterSpacing: "-0.02em", margin: "18px 0 16px", maxWidth: 640 }}>
            الحلول المساحية المتقدمة للأعمال الميدانية المعقدة
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.7)", fontSize: 18, lineHeight: 1.65, maxWidth: 540, margin: "0 0 28px" }}>
            تقنيات الليزر سكانر، مسح الدرون، المساحة البحرية، وأجهزة GPR. مدعومة محلياً بالاستشارة والتوريد والتشغيل.
          </p>
          {/* Layer labels */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {layers.map((l) => (
              <div key={l.label} style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "7px 14px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "var(--radius-pill)", color: "#fff" }}>
                <span style={{ color: l.color }}>{l.icon}</span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600 }}>{l.label}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 28 }}>
            <Link href="/ar/contact"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", background: "var(--se-teal)", color: "#fff", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", textDecoration: "none" }}>
              <ArrowLeft size={15} /> تحدث مع متخصص
            </Link>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section style={{ background: "#0d1e2a", padding: "80px 0", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.07) 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="se-container" style={{ position: "relative" }}>
          <SecHead label="لماذا تهم الحلول المتقدمة؟" title="ما وراء القياسات التقليدية" light centered />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {whyCards.map((c) => (
              <div key={c.title} style={{ background: "rgba(34,167,168,0.06)", border: "1px solid rgba(34,167,168,0.18)", borderRadius: "var(--radius-lg)", padding: "22px 20px" }}>
                <div style={{ width: 44, height: 44, borderRadius: "var(--radius-md)", background: "var(--se-teal)", color: "#fff", display: "grid", placeItems: "center", marginBottom: 14 }}>
                  {c.icon}
                </div>
                <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 8 }}>{c.title}</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.65, color: "rgba(255,255,255,0.6)" }}>{c.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional vs Advanced */}
      <section style={{ background: "var(--se-white)", padding: "80px 0" }}>
        <div className="se-container">
          <SecHead label="المقارنة" title="التقليدي مقابل المتقدم" centered />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }} className="kit-2col">
            <div style={{ background: "var(--se-gray-50)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-xl)", padding: "28px 24px" }}>
              <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)", marginBottom: 16 }}>المساحة التقليدية</div>
              {["الإحداثيات النقطية", "تخطيط الموقع والميزانية", "شبكات التحكم", "القياسات السطحية فقط"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--text-muted)", flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)" }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ background: "var(--se-blue-dark)", border: "1px solid rgba(34,167,168,0.3)", borderRadius: "var(--radius-xl)", padding: "28px 24px" }}>
              <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--se-teal)", marginBottom: 16 }}>الحلول المتقدمة</div>
              {["التقاط بيئات ثلاثية الأبعاد كاملة", "الرفع المساحي الجوي بالدرون", "كشف المرافق المدفونة تحت الأرض", "قياس الأعماق والمسح المائي"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <Check size={14} style={{ color: "var(--se-teal)", flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "rgba(255,255,255,0.85)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Accordion */}
      <section style={{ background: "var(--se-blue-darker)", padding: "96px 0", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.06) 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="se-container" style={{ position: "relative" }}>
          <SecHead label="نظرة على الحلول" title="أربعة حلول. كل الطبقات." light centered />
          <HighSolutionAccordionAr />
        </div>
      </section>

      {/* Support Process */}
      <section style={{ background: "var(--se-blue-dark)", padding: "80px 0", position: "relative", overflow: "hidden", backgroundImage: "linear-gradient(rgba(34,167,168,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(34,167,168,0.05) 1px,transparent 1px)", backgroundSize: "36px 36px" }}>
        <div className="se-container" style={{ position: "relative" }}>
          <SecHead label="عملية الدعم" title="كيف ندعم الحلول المتقدمة" light centered />
          <div style={{ position: "relative" }}>
            <div aria-hidden style={{ position: "absolute", top: 28, left: "8%", right: "8%", height: 2, background: "linear-gradient(90deg, transparent, var(--se-teal), transparent)" }} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12 }} className="kit-5col">
              {supportSteps.map((s, i) => (
                <div key={s.n} style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "0 6px" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--se-teal)", color: "#fff", display: "grid", placeItems: "center", position: "relative", zIndex: 1, marginBottom: 12, boxShadow: "0 4px 16px rgba(34,167,168,0.4)", flexShrink: 0, fontFamily: "var(--font-mono)", fontWeight: 800, fontSize: 14 }}>
                    {s.n}
                  </div>
                  <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 13, color: "#fff", textAlign: "center", marginBottom: 6, lineHeight: 1.3 }}>{s.title}</div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, lineHeight: 1.55, color: "rgba(255,255,255,0.55)", textAlign: "center" }}>{s.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--se-white)", padding: "72px 0", textAlign: "center" }}>
        <div className="se-container">
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.5rem,3vw,2rem)", color: "var(--text-strong)", marginBottom: "1rem" }}>
            هل مشروعك يتطلب أكثر من المساحة التقليدية؟
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-muted)", marginBottom: "2rem", maxWidth: "50ch", margin: "0 auto 2rem" }}>
            تحدث مع متخصصينا للحصول على توصية مخصصة لنوع مشروعك وبيئة موقعك.
          </p>
          <Link href="/ar/contact"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 26px", background: "var(--se-teal)", color: "#fff", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", textDecoration: "none" }}>
            <ArrowLeft size={15} /> طلب استشارة
          </Link>
        </div>
      </section>
    </>
  );
}
