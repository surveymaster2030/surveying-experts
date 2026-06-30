import type { Metadata } from "next";
import { IndustryMatrixAr, IndustryAccordionAr } from "@/components/sections/IndustryAccordionAr";

export const metadata: Metadata = {
  title: "حلول مساحية متكاملة حسب القطاع | المملكة العربية السعودية",
  description:
    "حلول مساحية احترافية لشركات المقاولات، البنية التحتية، المكاتب المساحية، الاستشارات الهندسية، والعمليات المتخصصة في أنحاء المملكة العربية السعودية.",
};

function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span style={{ display: "inline-block", fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: light ? "var(--accent)" : "var(--se-blue)", background: light ? "rgba(246,186,59,0.12)" : "var(--se-yellow-soft)", padding: "0.35em 0.85em", borderRadius: "var(--radius-pill)", marginBottom: "1.25rem" }}>
      {children}
    </span>
  );
}

function SecHead({ label, title, subtitle, centered }: { label?: string; title: string; subtitle?: string; centered?: boolean }) {
  return (
    <div style={{ marginBottom: "2.5rem", textAlign: centered ? "center" : "right" }}>
      {label && <Eyebrow>{label}</Eyebrow>}
      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.625rem, 3vw, 2.25rem)", color: "var(--text-strong)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: label ? "0.5rem 0 0.875rem" : "0 0 0.875rem" }}>{title}</h2>
      {subtitle && <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-md)", color: "var(--text-muted)", lineHeight: 1.65, maxWidth: centered ? "58ch" : undefined, margin: centered ? "0 auto" : 0 }}>{subtitle}</p>}
    </div>
  );
}

export default function ArSolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--se-blue-dark)", padding: "80px 0 64px", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.07) 1px, transparent 0)", backgroundSize: "22px 22px" }} />
        <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "var(--accent)" }} />
        <div className="se-container" style={{ position: "relative" }}>
          <Eyebrow light>الحلول حسب القطاع</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#fff", fontSize: "clamp(30px,4vw,52px)", lineHeight: 1.06, letterSpacing: "-0.02em", margin: "18px 0 16px", maxWidth: 640 }}>
            حلول مساحية 360 درجة لكل قطاع
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.7)", fontSize: 18, lineHeight: 1.65, maxWidth: 520, margin: 0 }}>
            معدات احترافية ودعم ميداني متكامل لشركات المقاولات، المكاتب المساحية، الاستشارات الهندسية، فرق البنية التحتية، والعمليات المتخصصة.
          </p>
        </div>
      </section>

      {/* Industry Matrix */}
      <section style={{ background: "var(--se-white)", position: "relative", overflow: "hidden", padding: "96px 0", backgroundImage: "radial-gradient(circle at 1px 1px, rgba(53,80,97,0.10) 1px, transparent 0)", backgroundSize: "22px 22px" }}>
        <div className="se-container">
          <SecHead
            label="مصفوفة القطاعات"
            title="شريك واحد لسير عملك الميداني"
            subtitle="كل قطاع له احتياجات مساحية مختلفة. اعرف الحلول المناسبة لفريقك أدناه."
            centered
          />
          <IndustryMatrixAr />
        </div>
      </section>

      {/* Industry Accordion */}
      <section style={{ background: "var(--se-gray-50)", position: "relative", overflow: "hidden", padding: "96px 0", backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.12) 1px, transparent 0)", backgroundSize: "20px 20px" }}>
        <div className="se-container">
          <SecHead
            label="تفاصيل القطاعات"
            title="كيف ندعم كل قطاع"
            centered
          />
          <IndustryAccordionAr />
        </div>
      </section>
    </>
  );
}
