import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft, Download, ExternalLink,
  ShoppingCart, Compass, Globe, MapPin, Wrench, Users,
  Briefcase, Settings, Layers,
  FileText, Percent, HardHat, Shield, Award, Leaf, ShieldCheck, Activity,
  CreditCard, RefreshCw,
} from "lucide-react";

export const metadata: Metadata = {
  title: "من نحن | خبراء المساحة — شريكك المساحي في المملكة",
  description:
    "خبراء المساحة شركة سعودية متخصصة في المعدات المساحية الاحترافية والدعم الميداني المتكامل 360 درجة.",
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

function IconTile({ children, color = "teal" }: { children: React.ReactNode; color?: "teal" | "blue" }) {
  const bg = color === "teal" ? "var(--se-teal)" : "var(--se-blue)";
  return (
    <div style={{ width: 44, height: 44, borderRadius: "var(--radius-md)", background: bg, color: "#fff", display: "grid", placeItems: "center", flexShrink: 0 }}>
      {children}
    </div>
  );
}

const differentiators = [
  { n: "٠١", icon: <CreditCard size={20} />, accent: true,  title: "خيارات امتلاك وإيجار مرنة", text: "اختر طريقة الشراء التي تناسب مشروعك: بالتقسيط، أجهزة مستعملة، إيجار يومي أو أسبوعي أو شهري، أو إيجار ينتهي بالتملك." },
  { n: "٠٢", icon: <RefreshCw size={20} />,  accent: true,  title: "إيجار ينتهي بالتملك", text: "جرّب الجهاز شهراً أو شهرين، وإذا قررت الشراء تُخصم قيمة الإيجار التي دفعتها من سعر الجهاز." },
  { n: "٠٣", icon: <ShoppingCart size={20} />, accent: false, title: "متجر إلكتروني مبسّط", text: "بوابة رقمية لطلب الإكسسوارات واستكشاف حلول الأجهزة قبل التواصل مع فريق المبيعات." },
  { n: "٠٤", icon: <Compass size={20} />,    accent: false, title: "ترشيح الجهاز المناسب", text: "نساعد العملاء على اختيار الجهاز المناسب بناءً على متطلبات المشروع وظروف الميدان وطريقة عمل الفريق، لا قائمة عشوائية من المنتجات." },
  { n: "٠٥", icon: <Globe size={20} />,      accent: false, title: "تقنيات عالمية", text: "وصول إلى تقنيات المساحة الاحترافية من موردين عالميين وشركاء حلول موثوقين عبر GNSS/RTK والقياس البصري والمسح ثلاثي الأبعاد وSLAM والدرون والمسح البحري وكشف الخدمات والإكسسوارات." },
  { n: "٠٦", icon: <MapPin size={20} />,     accent: false, title: "دعم محلي وصيانة ومعايرة", text: "ندعم العملاء محلياً من خلال التواصل المباشر والفروع والخدمة الفنية والصيانة والمعايرة للحفاظ على أداء الأجهزة بعد الشراء." },
  { n: "٠٧", icon: <HardHat size={20} />,    accent: false, title: "خبرة ميدانية عملية", text: "نهجنا في الخدمة مبني على تحديات الميدان الحقيقية واحتياجات المساحة العملية وطريقة عمل الفرق في الموقع فعلياً." },
];

const teamRoles = [
  { icon: <Briefcase size={20} />, title: "مهندسو المبيعات", text: "يتولون استشارة المعدات وعروض الأسعار وطلبات المتجر الإلكتروني وتنسيق المشتريات." },
  { icon: <Wrench size={20} />, title: "مهندسو الصيانة", text: "مسؤولون عن فحص الأجهزة وخدمتها ومعايرتها والرعاية التقنية بعد الشراء." },
  { icon: <Settings size={20} />, title: "مهندسو الدعم الفني", text: "يدعمون العملاء في الإعداد والتوجيه التشغيلي واستكشاف الأعطال عبر جميع المعدات المدعومة." },
  { icon: <Layers size={20} />, title: "فرق التسويق وتقنية المعلومات والمالية", text: "النواة التشغيلية التي تدعم التواصل والبنية التحتية الرقمية واستمرارية الأعمال." },
];

const certifications = [
  { name: "السجل التجاري", icon: <FileText size={18} /> },
  { name: "ضريبة القيمة المضافة / هيئة الزكاة والضريبة", icon: <Percent size={18} /> },
  { name: "هيئة الاستثمار (MISA)", icon: <Globe size={18} /> },
  { name: "هيئة المقاولين السعوديين", icon: <HardHat size={18} /> },
  { name: "الدفاع المدني", icon: <Shield size={18} /> },
  { name: "ISO 9001", icon: <Award size={18} /> },
  { name: "ISO 14001", icon: <Leaf size={18} /> },
  { name: "ISO 45001", icon: <ShieldCheck size={18} /> },
  { name: "ISO/IEC 17025", icon: <Activity size={18} /> },
  { name: "تسجيلات الموردين والبائعين", icon: <Briefcase size={18} /> },
];

const visionCards = [
  { bg: "var(--se-blue)", label: "الرؤية", text: "أن نكون الشريك التقني الموثوق في المملكة العربية السعودية للمعدات المساحية الاحترافية والدعم الميداني 360 درجة.", dark: false },
  { bg: "var(--se-teal)", label: "المهمة", text: "توفير معدات مساحة عالية الجودة من علامات تجارية عالمية موثوقة، مدعومة بخبرة محلية ورعاية كاملة بعد البيع.", dark: false },
  { bg: "var(--accent)", label: "الهدف", text: "مساعدة فرق الهندسة والإنشاء السعودية على العمل بدقة أعلى وثقة أكبر.", dark: true },
  { bg: "var(--se-blue-dark)", label: "القيم", text: "الدقة والثقة والتوجيه العملي وعلاقات العملاء طويلة الأمد، لا مجرد مبيعات لمرة واحدة.", dark: false },
];

export default function ArAboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--se-blue-dark)", padding: "80px 0 64px", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.06) 1px, transparent 0)", backgroundSize: "22px 22px" }} />
        <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "var(--accent)" }} />
        <div className="se-container" style={{ position: "relative" }}>
          <Eyebrow light>من نحن</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, color: "#fff", fontSize: "clamp(30px,4vw,52px)", lineHeight: 1.06, letterSpacing: "-0.025em", margin: "18px 0 16px", maxWidth: 640 }}>
            خبراء المساحة
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.72)", fontSize: 18, lineHeight: 1.65, maxWidth: 520, margin: 0 }}>
            شريك سعودي للمعدات المساحية الاحترافية والشراء الإلكتروني المبسّط والدعم الميداني المتكامل.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section style={{ background: "var(--se-white)", position: "relative", overflow: "hidden", padding: "96px 0", backgroundImage: "linear-gradient(rgba(53,80,97,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(53,80,97,0.06) 1px,transparent 1px)", backgroundSize: "40px 40px" }}>
        <div className="se-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="kit-2col">
            <div>
              <SecHead title="نساعد الفرق الميدانية على اختيار المعدات المناسبة وشرائها واستخدامها" />
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.8, color: "var(--text-muted)", margin: "0 0 12px" }}>
                تقدم خبراء المساحة معدات مساحة احترافية ودعماً متكاملاً لفرق الإنشاء والبنية التحتية والمساحة والجيوماتيكس.
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.8, color: "var(--text-muted)", margin: "0 0 28px" }}>
                لسنا مجرد مورد. نحن شريك دعم مساحي 360 درجة، نرافق العملاء من أول توصية وحتى الاستخدام الميداني طويل الأمد.
              </p>
              <a href="https://drive.google.com/file/d/1pw2rTyozJbSaSbt8_G28zD81Qzdag7_a/view" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 20px", background: "var(--se-blue-soft)", color: "var(--se-blue)", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", border: "1.5px solid var(--se-blue)", textDecoration: "none" }}>
                <Download size={15} /> تحميل ملف الشركة
              </a>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {visionCards.map((c) => (
                <div key={c.label} style={{ borderRadius: "var(--radius-lg)", padding: "20px 16px", background: c.bg }}>
                  <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: c.dark ? "rgba(36,57,73,0.7)" : "rgba(255,255,255,0.6)", marginBottom: 8 }}>{c.label}</div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.55, color: c.dark ? "var(--se-blue-dark)" : "rgba(255,255,255,0.9)" }}>{c.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section style={{ background: "var(--se-gray-50)", position: "relative", overflow: "hidden", padding: "96px 0", backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.12) 1px, transparent 0)", backgroundSize: "20px 20px" }}>
        <div className="se-container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <Eyebrow>ما يميزنا</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--text-strong)", lineHeight: 1.2, letterSpacing: "-0.02em", margin: "0.5rem 0 0" }}>
              الجهاز المناسب. الدعم المناسب.<br />وطريقة امتلاك تناسبك.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
            {differentiators.map((d) => (
              <div key={d.title} style={{
                background: d.accent ? "linear-gradient(135deg, rgba(34,167,168,0.07) 0%, rgba(34,167,168,0.02) 100%)" : "var(--se-white)",
                border: d.accent ? "1px solid rgba(34,167,168,0.3)" : "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-xl)",
                padding: "28px 24px",
                boxShadow: d.accent ? "0 2px 12px rgba(34,167,168,0.08)" : "var(--shadow-sm)",
                position: "relative",
                overflow: "hidden",
              }}>
                <div aria-hidden style={{ position: "absolute", top: -10, left: 16, fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 80, color: d.accent ? "rgba(34,167,168,0.1)" : "rgba(53,80,97,0.04)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>{d.n}</div>
                <div style={{ position: "relative" }}>
                  <div style={{ width: 44, height: 44, borderRadius: "var(--radius-md)", background: d.accent ? "var(--se-teal)" : "var(--se-blue)", color: "#fff", display: "grid", placeItems: "center", marginBottom: 14 }}>
                    {d.icon}
                  </div>
                  <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 15, color: "var(--text-strong)", marginBottom: 8 }}>{d.title}</div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.65, color: "var(--text-muted)" }}>{d.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section style={{ background: "var(--se-white)", padding: "96px 0" }}>
        <div className="se-container">
          <SecHead label="فريقنا" title="فريق تكتيكي مبني للنجاح الميداني" subtitle="يعمل مهندسونا ومتخصصو المبيعات والتقنيون وفريق الدعم معاً لمساعدة العملاء على اختيار المعدات واستخدامها وصيانتها والاستفادة منها." centered />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {teamRoles.map((r) => (
              <div key={r.title} className="kit-team-card"
                style={{ borderRadius: "var(--radius-xl)", padding: "28px 24px", background: "linear-gradient(135deg, var(--se-blue-dark) 0%, var(--se-blue) 100%)", borderRight: "4px solid var(--se-teal)", boxShadow: "var(--shadow-md)" }}>
                <IconTile color="teal">{r.icon}</IconTile>
                <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 16, color: "#fff", margin: "14px 0 8px" }}>{r.title}</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,0.65)" }}>{r.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges — Certifications */}
      <section style={{ background: "var(--se-blue-darker)", position: "relative", overflow: "hidden", padding: "96px 0" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.07) 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(34,167,168,0.3), transparent)" }} />
        <div className="se-container" style={{ position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: "1.25rem" }}>
              <span style={{ display: "inline-block", width: 24, height: 2, background: "var(--se-teal)", borderRadius: 2 }} />
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--se-teal)" }}>موثّق ومعتمد</span>
              <span style={{ display: "inline-block", width: 24, height: 2, background: "var(--se-teal)", borderRadius: 2 }} />
            </div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.5rem,3vw,2.1rem)", color: "#fff", margin: "0 0 12px", letterSpacing: "-0.02em" }}>
              الاعتمادات والتراخيص
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "rgba(255,255,255,0.55)", maxWidth: "50ch", margin: "0 auto" }}>
              تمتلك خبراء المساحة ملفاً امتثالياً احترافياً كاملاً لتسجيل الموردين والمشتريات الحكومية وشراكات B2B.
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 40 }}>
            {certifications.map((c) => (
              <div key={c.name}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(34,167,168,0.25)",
                  borderRadius: "var(--radius-lg)",
                  padding: "12px 18px",
                  backdropFilter: "blur(4px)",
                }}>
                <div style={{ width: 32, height: 32, borderRadius: "var(--radius-md)", background: "rgba(34,167,168,0.2)", color: "var(--se-teal)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                  {c.icon}
                </div>
                <span style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 13, color: "rgba(255,255,255,0.85)", whiteSpace: "nowrap" }}>{c.name}</span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/ar/contact"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 20px", background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.75)", fontWeight: 700, fontSize: 14, borderRadius: "var(--radius-md)", border: "1px solid rgba(255,255,255,0.15)", textDecoration: "none" }}>
              <FileText size={14} /> طلب وثائق الشركة
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--se-blue-dark)", padding: "72px 0", position: "relative", overflow: "hidden", backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.12) 1px, transparent 0)", backgroundSize: "20px 20px" }}>
        <div className="se-container" style={{ position: "relative", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.5rem,3vw,2rem)", color: "#fff", marginBottom: "1.5rem" }}>هل تريد نظرة عامة على الشركة؟</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <a href="https://drive.google.com/file/d/1pw2rTyozJbSaSbt8_G28zD81Qzdag7_a/view" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 26px", background: "var(--accent)", color: "var(--se-blue-dark)", fontWeight: 700, fontSize: 16, borderRadius: "var(--radius-md)", textDecoration: "none" }}>
              <Download size={16} /> تحميل ملف الشركة
            </a>
            <a href="https://surveyingexperts-sa.com/collections/all" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 26px", background: "transparent", color: "#fff", fontWeight: 700, fontSize: 16, borderRadius: "var(--radius-md)", border: "1.5px solid rgba(255,255,255,0.4)", textDecoration: "none" }}>
              زيارة المتجر الإلكتروني <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
