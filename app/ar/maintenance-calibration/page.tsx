import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft, ExternalLink, Check,
  SatelliteDish, Crosshair, Compass, Wrench,
} from "lucide-react";
import { MaintenanceFAQAr } from "@/components/sections/MaintenanceFAQAr";

export const metadata: Metadata = {
  title: "الصيانة والمعايرة | معدات مساحة احترافية | خبراء المساحة",
  description:
    "صيانة ومعايرة معتمدة لمعدات GNSS وتوتال ستيشن وأوتو ليفل في المملكة العربية السعودية. باقات للشركات وشهادات معايرة رسمية.",
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

const equipmentCards = [
  { icon: <SatelliteDish size={22} />, name: "GNSS و RTK", desc: "أجهزة الروفر والبيز: فحص الإشارة، تحديث Firmware، المودم الداخلي والراديو." },
  { icon: <Crosshair size={22} />, name: "التوتال ستيشن", desc: "دقة الزوايا، معايرة EDM، الضبط البصري، وإصدار شهادة المعايرة." },
  { icon: <Compass size={22} />, name: "الأوتو ليفل", desc: "فحص الدقة، ضبط خط الرؤية (Line-of-sight)، والتشحيم الميكانيكي." },
  { icon: <Wrench size={22} />, name: "الإكسسوارات المختارة", desc: "الحوامل والموشورات والشواخص. تواصل معنا للاستفسار عن أجهزة محددة." },
];

const packages = [
  {
    name: "الباقة الأساسية",
    price: "12,750",
    original: "15,000",
    range: "لأقل من 25 جهاز",
    featured: false,
    features: [
      "فحص شامل لجميع الأجهزة",
      "صيانة دورية مجدولة",
      "تقرير حالة مفصل",
      "دعم فني عبر الهاتف",
      "شهادة رسمية رقمية",
      "لوحة تحكم الأجهزة",
    ],
  },
  {
    name: "الباقة الاحترافية",
    price: "25,500",
    original: "30,000",
    range: "30 إلى 50 جهاز",
    featured: false,
    features: [
      "كل مزايا الباقة الأساسية",
      "خصم 20% على قطع الغيار",
      "أولوية في الاستجابة",
      "دعم ميداني في الموقع",
      "شهادة رسمية رقمية",
      "لوحة تحكم الأجهزة",
    ],
  },
  {
    name: "الباقة الذهبية",
    price: "34,000",
    original: "40,000",
    range: "30 إلى 50 جهاز",
    featured: true,
    features: [
      "كل مزايا الباقة الاحترافية",
      "خصم 30% على قطع الغيار",
      "جدولة صيانة مرنة",
      "أولوية قصوى في التسليم",
      "شهادة رسمية رقمية",
      "لوحة تحكم الأجهزة",
    ],
  },
  {
    name: "الباقة البلاتينية",
    price: "42,500",
    original: "50,000",
    range: "30 إلى 50 جهاز",
    featured: false,
    features: [
      "كل مزايا الباقة الذهبية",
      "خصم 40% على قطع الغيار",
      "إدارة أسطول كاملة",
      "تقرير امتثال موثق",
      "شهادة رسمية رقمية",
      "لوحة تحكم الأجهزة",
    ],
  },
];

const calibrationServices = [
  {
    name: "معايرة الأوتو ليفل",
    price: "200",
    original: "250",
    includes: ["فحص الدقة", "ضبط خط الرؤية", "التشحيم الميكانيكي"],
  },
  {
    name: "معايرة التوتال ستيشن",
    price: "400",
    original: "450",
    includes: ["فحص دقة الزوايا", "معايرة EDM", "الضبط البصري", "شهادة المعايرة"],
  },
  {
    name: "خدمة GPS/GNSS",
    price: "800",
    original: "900",
    includes: ["تحديث Firmware", "فحص تتبع الأقمار الاصطناعية", "فحص المودم والراديو"],
  },
];

const maintSteps = [
  { n: "01", label: "التواصل والجدولة" },
  { n: "02", label: "استقبال الجهاز" },
  { n: "03", label: "الفحص والتشخيص" },
  { n: "04", label: "تنفيذ الخدمة" },
  { n: "05", label: "معايرة وتحقق" },
  { n: "06", label: "إصدار الشهادة وإعادة الجهاز" },
];

const calibSteps = [
  { n: "01", label: "استقبال الجهاز" },
  { n: "02", label: "قياسات ما قبل المعايرة" },
  { n: "03", label: "الضبط والمعايرة" },
  { n: "04", label: "قياسات ما بعد المعايرة" },
  { n: "05", label: "إصدار شهادة المعايرة" },
];

export default function ArMaintenanceCalibrationPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--se-blue-dark)", padding: "80px 0 64px", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.07) 1px, transparent 0)", backgroundSize: "22px 22px" }} />
        <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "var(--accent)" }} />
        <div className="se-container" style={{ position: "relative" }}>
          <Eyebrow light>الصيانة والمعايرة</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#fff", fontSize: "clamp(30px,4vw,52px)", lineHeight: 1.06, letterSpacing: "-0.02em", margin: "18px 0 16px", maxWidth: 600 }}>
            صيانة ومعايرة المعدات المساحية
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.7)", fontSize: 18, lineHeight: 1.65, maxWidth: 520, margin: "0 0 28px" }}>
            حافظ على دقة أجهزتك وجاهزيتها الميدانية. الاستخدام الشاق ودرجات الحرارة والاهتزازات تؤثر على الأداء، والجهاز غير المعاير يقدم إحداثيات خاطئة دون تحذير.
          </p>
        </div>
      </section>

      {/* Equipment We Service */}
      <section style={{ background: "var(--se-white)", position: "relative", overflow: "hidden", padding: "80px 0", backgroundImage: "linear-gradient(rgba(53,80,97,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(53,80,97,0.06) 1px,transparent 1px)", backgroundSize: "40px 40px" }}>
        <div className="se-container">
          <SecHead label="الأجهزة التي نصونها" title="نصون ونعاير هذه المعدات" centered />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {equipmentCards.map((e) => (
              <div key={e.name} style={{ background: "var(--se-gray-50)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", padding: "22px 20px", boxShadow: "var(--shadow-xs)" }}>
                <div style={{ width: 44, height: 44, borderRadius: "var(--radius-md)", background: "var(--se-teal)", color: "#fff", display: "grid", placeItems: "center", marginBottom: 14 }}>
                  {e.icon}
                </div>
                <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 15, color: "var(--text-strong)", marginBottom: 8 }}>{e.name}</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.65, color: "var(--text-muted)" }}>{e.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Packages */}
      <section style={{ background: "var(--se-gray-50)", position: "relative", overflow: "hidden", padding: "96px 0", backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.12) 1px, transparent 0)", backgroundSize: "20px 20px" }}>
        <div className="se-container">
          <SecHead label="باقات الشركات" title="باقات صيانة المعدات للشركات" subtitle="مصممة للشركات التي تمتلك عدة أجهزة توتال ستيشن وأوتو ليفل للقيام بصيانة مجدولة." centered />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
            {packages.map((pkg) => (
              <div key={pkg.name}
                style={{ background: "var(--se-white)", border: `${pkg.featured ? "2px solid var(--accent)" : "1px solid var(--border-subtle)"}`, borderRadius: "var(--radius-xl)", overflow: "hidden", boxShadow: pkg.featured ? "0 12px 32px rgba(246,186,59,0.15)" : "var(--shadow-sm)", position: "relative" }}>
                {pkg.featured && (
                  <div style={{ background: "var(--accent)", color: "var(--se-blue-dark)", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 11, textAlign: "center", padding: "7px 0", letterSpacing: "0.08em" }}>
                    الأنسب للشركات
                  </div>
                )}
                <div style={{ padding: "24px 22px" }}>
                  <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 16, color: "var(--text-strong)", marginBottom: 6 }}>{pkg.name}</div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--text-muted)", marginBottom: 16 }}>{pkg.range}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 4 }}>
                    <span style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 26, color: pkg.featured ? "var(--se-blue)" : "var(--text-strong)", letterSpacing: "-0.02em" }}>{pkg.price}</span>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)" }}>ريال</span>
                  </div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--text-muted)", textDecoration: "line-through", marginBottom: 20 }}>{pkg.original} ريال</div>
                  <ul style={{ listStyle: "none", margin: "0 0 22px", padding: 0, display: "flex", flexDirection: "column", gap: 9 }}>
                    {pkg.features.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                        <Check size={13} style={{ color: "var(--se-teal)", flexShrink: 0, marginTop: 3 }} />
                        <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-muted)", lineHeight: 1.45 }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/ar/contact"
                    style={{ display: "block", textAlign: "center", padding: "11px", background: pkg.featured ? "var(--accent)" : "transparent", color: pkg.featured ? "var(--se-blue-dark)" : "var(--se-teal)", border: `1.5px solid ${pkg.featured ? "var(--accent)" : "var(--se-teal)"}`, borderRadius: "var(--radius-md)", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
                    طلب هذه الباقة
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Calibration Services */}
      <section style={{ background: "var(--se-white)", padding: "80px 0" }}>
        <div className="se-container">
          <SecHead label="المعايرة الفردية" title="خدمات المعايرة الفردية" subtitle="للأجهزة الفردية أو حين تحتاج إلى شهادة معايرة معتمدة." centered />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
            {calibrationServices.map((svc) => (
              <div key={svc.name} style={{ background: "var(--se-gray-50)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-xl)", padding: "28px 24px", boxShadow: "var(--shadow-sm)" }}>
                <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 17, color: "var(--text-strong)", marginBottom: 8 }}>{svc.name}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4 }}>
                  <span style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 28, color: "var(--se-blue)", letterSpacing: "-0.02em" }}>{svc.price}</span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)" }}>ريال</span>
                </div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--text-muted)", textDecoration: "line-through", marginBottom: 18 }}>{svc.original} ريال</div>
                <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--se-teal)", marginBottom: 10 }}>تشمل</div>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {svc.includes.map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <Check size={13} style={{ color: "var(--se-teal)", flexShrink: 0 }} />
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-muted)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steppers */}
      <section style={{ background: "var(--se-gray-50)", padding: "80px 0" }}>
        <div className="se-container">
          <SecHead label="العملية" title="كيف تسير الخدمة" centered />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="kit-2col">
            {/* Maintenance steps */}
            <div>
              <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--se-blue)", marginBottom: 20 }}>خطوات الصيانة</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {maintSteps.map((s, i) => (
                  <div key={s.n} style={{ display: "flex", gap: 14 }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--se-blue)", color: "#fff", display: "grid", placeItems: "center", fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 11, flexShrink: 0 }}>{s.n}</div>
                      {i < maintSteps.length - 1 && <div style={{ width: 2, flex: 1, background: "var(--border-subtle)", margin: "4px 0" }} />}
                    </div>
                    <div style={{ paddingBottom: i < maintSteps.length - 1 ? 18 : 0, paddingTop: 5 }}>
                      <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 14, color: "var(--text-strong)" }}>{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Calibration steps */}
            <div>
              <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--se-teal)", marginBottom: 20 }}>خطوات المعايرة</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {calibSteps.map((s, i) => (
                  <div key={s.n} style={{ display: "flex", gap: 14 }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--se-teal)", color: "#fff", display: "grid", placeItems: "center", fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 11, flexShrink: 0 }}>{s.n}</div>
                      {i < calibSteps.length - 1 && <div style={{ width: 2, flex: 1, background: "var(--border-subtle)", margin: "4px 0" }} />}
                    </div>
                    <div style={{ paddingBottom: i < calibSteps.length - 1 ? 18 : 0, paddingTop: 5 }}>
                      <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 14, color: "var(--text-strong)" }}>{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store CTA */}
      <section style={{ background: "var(--se-blue-dark)", padding: "56px 0" }}>
        <div className="se-container" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
          <div>
            <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 6 }}>استمر في العمل أثناء الصيانة</div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "rgba(255,255,255,0.65)", margin: 0 }}>
              تصفح متجرنا الإلكتروني للحوامل والموشورات والشواخص والبطاريات البديلة.
            </p>
          </div>
          <a href="https://surveyingexperts-sa.com/collections/all" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 22px", background: "var(--accent)", color: "var(--se-blue-dark)", fontWeight: 700, fontSize: 14, borderRadius: "var(--radius-md)", textDecoration: "none", flexShrink: 0 }}>
            تصفح المتجر الإلكتروني <ExternalLink size={14} />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--se-white)", padding: "80px 0" }}>
        <div className="se-container" style={{ maxWidth: 760, margin: "0 auto" }}>
          <SecHead label="الأسئلة الشائعة" title="أسئلة يطرحها عملاؤنا" centered />
          <MaintenanceFAQAr />
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: "var(--se-blue-dark)", padding: "72px 0", textAlign: "center", position: "relative", overflow: "hidden", backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.12) 1px, transparent 0)", backgroundSize: "20px 20px" }}>
        <div className="se-container" style={{ position: "relative" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.5rem,3vw,2rem)", color: "#fff", marginBottom: "1rem" }}>
            هل معداتك بحاجة إلى صيانة أو معايرة؟
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "rgba(255,255,255,0.65)", marginBottom: "2rem" }}>
            تواصل معنا لجدولة موعد الخدمة أو الاستفسار عن الباقات المناسبة لشركتك.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <Link href="/ar/contact"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 26px", background: "var(--accent)", color: "var(--se-blue-dark)", fontWeight: 700, fontSize: 16, borderRadius: "var(--radius-md)", textDecoration: "none" }}>
              <ArrowLeft size={15} /> طلب خدمة الصيانة أو المعايرة
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
