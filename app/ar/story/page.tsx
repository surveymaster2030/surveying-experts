import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft, Map, Flag, SatelliteDish, Crosshair, ShoppingCart, ScanLine, Plane, Quote,
} from "lucide-react";

export const metadata: Metadata = {
  title: "قصتنا | خبراء المساحة في المملكة العربية السعودية",
  description:
    "كيف نمت خبراء المساحة من الخبرة الميدانية المباشرة لتصبح الشريك المساحي 360 درجة في المملكة العربية السعودية.",
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

const timeline = [
  { year: "2011", title: "البداية الميدانية", icon: <Map size={17} />, text: "انطلقت الرحلة من العمل الميداني المباشر إلى جانب المهندسين والمساحين والمقاولين. فهم تحدياتهم كان أساس كل ما بنيناه." },
  { year: "2018", title: "التأسيس الرسمي", icon: <Flag size={17} />, text: "تأسست خبراء المساحة رسمياً في جدة، بُنيت على خبرة ميدانية وتركيز واضح على المعدات الاحترافية والدعم المتكامل." },
  { year: "2021", title: "شراكة eSurvey", icon: <SatelliteDish size={17} />, text: "أصبحت خبراء المساحة الموزع الحصري لـ eSurvey في المملكة العربية السعودية، مما أتاح تقنيات GNSS و RTK الاحترافية بدعم محلي كامل." },
  { year: "2023", title: "شراكة Survey Master", icon: <Crosshair size={17} />, text: "توسعت المحفظة من خلال شراكة مع Survey Master، لتضم توتال ستيشن والترازيل والمسح البحري وأنظمة القياس المتقدمة." },
  { year: "2024", title: "النمو الرقمي والتجاري", icon: <ShoppingCart size={17} />, text: "أُطلق المتجر الإلكتروني الرسمي، ليمنح العملاء قناة شراء مبسّطة بدعم تقني وما بعد بيع متكامل." },
  { year: "2025", title: "مجالات حلول جديدة", icon: <ScanLine size={17} />, text: "أضافت الشراكات مع Radarteam وOmniSLAM تقنيات الرادار الأرضي والكشف تحت الأرض والمسح ثلاثي الأبعاد ورسم الخرائط المتنقلة إلى المحفظة." },
  { year: "2026", title: "توسع الطائرات المسيّرة", icon: <Plane size={17} />, text: "أُضيفت قدرات المسح بالطائرات المسيّرة من خلال The Drone Center، لتوفير تقنيات DJI وQuantum Systems لفرق الميدان السعودية." },
];

const statsVision = [
  { v: "+2,000", l: "مشروع مدعوم" },
  { v: "5", l: "فروع في المملكة" },
  { v: "+7", l: "سنوات خبرة" },
  { v: "+3,000", l: "عميل نشط" },
];

export default function ArStoryPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--se-blue-dark)", padding: "80px 0 64px", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.06) 1px, transparent 0)", backgroundSize: "22px 22px" }} />
        <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "var(--accent)" }} />
        <div className="se-container" style={{ position: "relative" }}>
          <Eyebrow light>قصتنا</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, color: "#fff", fontSize: "clamp(30px,4vw,52px)", lineHeight: 1.06, letterSpacing: "-0.025em", margin: "18px 0 16px", maxWidth: 580 }}>
            من الخبرة الميدانية إلى دعم المساحة 360 درجة
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.72)", fontSize: 18, lineHeight: 1.65, maxWidth: 500, margin: 0 }}>
            كيف نمت خبراء المساحة من العمل الميداني الحقيقي لتصبح الشريك المساحي 360 درجة في المملكة العربية السعودية.
          </p>
        </div>
      </section>

      {/* The Beginning */}
      <section style={{ background: "var(--se-white)", position: "relative", overflow: "hidden", padding: "96px 0", backgroundImage: "linear-gradient(rgba(53,80,97,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(53,80,97,0.06) 1px,transparent 1px)", backgroundSize: "40px 40px" }}>
        <div className="se-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="kit-2col">
            <div>
              <SecHead label="البداية" title="بدأنا من الميدان" />
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.8, color: "var(--text-muted)", margin: "0 0 14px" }}>
                انطلقت خبراء المساحة من خبرة ميدانية حقيقية. رأينا أن الفرق لا تحتاج معدات المساحة فحسب. إنها تحتاج التوصية الصحيحة والتوريد الموثوق والدعم العملي والصيانة والمعايرة وشخصاً يبقى معها بعد الشراء.
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.8, color: "var(--text-muted)", margin: 0 }}>
                هكذا نمت خبراء المساحة: من دعم ميداني إلى شركة سعودية تركّز على المعدات المساحية الاحترافية ودعم العملاء المتكامل.
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
                  &quot;منذ البداية كان هدفنا واضحاً: أن نكون الشريك الذي يثق به المهندسون حين تكون الدقة والموثوقية والدعم أمراً لا مساومة فيه. الجودة عندنا ليست في المنتج فحسب، بل في التجربة الكاملة قبل كل عملية شراء وبعدها.&quot;
                </p>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 16 }}>
                  <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 15, color: "#fff" }}>م. فتحي شحاتة</div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>الرئيس التنفيذي، خبراء المساحة</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: "var(--se-gray-50)", position: "relative", overflow: "hidden", padding: "96px 0", backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.12) 1px, transparent 0)", backgroundSize: "20px 20px" }}>
        <div className="se-container">
          <SecHead label="رحلتنا" title="المحطات الرئيسية" centered />
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
              <SecHead label="رؤية 2030" title="دعم الفرق الميدانية في المملكة" light />
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.72)", margin: "0 0 28px" }}>
                تدعم خبراء المساحة قطاعات الإنشاء والبنية التحتية والهندسة والجيوماتيكس في المملكة، من خلال مساعدة الفرق على الوصول إلى معدات المساحة المناسبة والدعم التقني اللازم لاستخدامها بكفاءة.
              </p>
              <Link href="/ar/contact"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 22px", background: "var(--se-teal)", color: "#fff", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", textDecoration: "none" }}>
                <ArrowLeft size={15} /> طلب استشارة
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
