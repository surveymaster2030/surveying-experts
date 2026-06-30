"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft, CheckCircle2, ChevronDown, ChevronUp,
  UserPlus, Send, BadgeCheck, Gift,
  Store, Banknote, Users, Building2,
  Tag, X, ShieldAlert,
} from "lucide-react";

// ─── Design helpers ────────────────────────────────────────────────────────────

function Eyebrow({ children, light, teal }: { children: React.ReactNode; light?: boolean; teal?: boolean }) {
  return (
    <span style={{
      display: "inline-block", fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 700,
      textTransform: "uppercase", letterSpacing: "0.1em",
      color: teal ? "var(--se-teal)" : light ? "var(--accent)" : "var(--se-blue)",
      background: teal ? "rgba(34,167,168,0.15)" : light ? "rgba(246,186,59,0.12)" : "var(--se-yellow-soft)",
      padding: "0.35em 0.85em", borderRadius: "var(--radius-pill)", marginBottom: "1.25rem",
    }}>
      {children}
    </span>
  );
}

function SecHead({ label, title, subtitle, light, centered, teal }: {
  label?: string; title: string; subtitle?: string; light?: boolean; centered?: boolean; teal?: boolean;
}) {
  return (
    <div style={{ marginBottom: "2.5rem", textAlign: centered ? "center" : "right" }}>
      {label && <Eyebrow light={light} teal={teal}>{label}</Eyebrow>}
      <h2 style={{
        fontFamily: "var(--font-display)", fontWeight: 700,
        fontSize: "clamp(1.625rem, 3vw, 2.25rem)",
        color: light ? "#fff" : "var(--text-strong)",
        lineHeight: 1.2, margin: label ? "0.5rem 0 0.875rem" : "0 0 0.875rem", direction: "rtl",
      }}>{title}</h2>
      {subtitle && (
        <p style={{
          fontFamily: "var(--font-sans)", fontSize: "var(--text-md)",
          color: light ? "rgba(255,255,255,0.65)" : "var(--text-muted)",
          lineHeight: 1.8, maxWidth: centered ? "58ch" : undefined,
          margin: centered ? "0 auto" : 0, direction: "rtl",
        }}>{subtitle}</p>
      )}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%", border: "1.5px solid var(--border-default)",
  borderRadius: "var(--radius-md)", padding: "11px 14px",
  fontFamily: "var(--font-sans)", fontSize: 15,
  color: "var(--text-strong)", background: "var(--se-white)",
  outline: "none", boxSizing: "border-box", transition: "border-color 0.15s",
  textAlign: "right", direction: "rtl",
};

// ─── Data ──────────────────────────────────────────────────────────────────────

const steps = [
  {
    icon: <UserPlus size={22} />, num: "١", title: "الانضمام والتسجيل",
    desc: "سجّل في قائمة الانتظار اليوم. عند الإطلاق، ستتلقى دعوة رسمية لتفعيل حسابك كشريك ترشيح معتمد.",
  },
  {
    icon: <Send size={22} />, num: "٢", title: "ترشيح العملاء",
    desc: "وجّه الشركات أو المهندسين الذين يحتاجون إلى أجهزة GNSS، توتال ستيشن، ليزر سكانر، أو خدمات المعايرة الاحترافية إلينا.",
  },
  {
    icon: <BadgeCheck size={22} />, num: "٣", title: "المراجعة والاعتماد",
    desc: "يقوم فريق المبيعات بمراجعة الترشيح. بمجرد تحوله إلى عملية شراء مؤكدة ومكتملة، يتم اعتماد ترشيحك في النظام.",
  },
  {
    icon: <Gift size={22} />, num: "٤", title: "استلام المكافآت",
    desc: "تُضاف النقاط إلى رصيدك تلقائياً. يمكنك استبدالها كرصيد مشتريات في متجرنا الإلكتروني أو طلب تحويلها كنقد.",
  },
];

const equipmentTags = [
  "أجهزة التوتال ستيشن (Total Station)",
  "أنظمة GNSS و RTK",
  "أجهزة الليزر سكانر ثلاثي الأبعاد",
  "حلول مسح الدرون (Drone Mapping)",
  "أجهزة الـ GPR (الكشف تحت الأرض)",
  "معدات المساحة البحرية",
  "باقات الصيانة والمعايرة للشركات",
];

const conditions = [
  {
    q: "التسجيل عبر البوابة الرقمية فقط",
    a: "تُعتمد الترشيحات المُسجلة رسمياً عبر بوابة البرنامج فقط. لا يمكن تتبع الترشيحات الشفهية أو غير الرسمية أو مكافأتها.",
  },
  {
    q: "عملاء جدد حصراً",
    a: "يجب أن تكون الجهة المُرشَّحة عميلاً جديداً لشركة خبراء المساحة، دون أي سجل شراء سابق.",
  },
  {
    q: "اعتماد الشراء",
    a: "تُحتسب النقاط وتُعتمد فقط بعد اكتمال عملية الدفع واستلام العميل لمعداته.",
  },
  {
    q: "استقلالية الترشيح",
    a: "لا يُسمح بترشيح نفسك، أو الكيان التجاري الذي تعمل به بشكل مباشر.",
  },
  {
    q: "صلاحية النقاط 12 شهراً",
    a: "تنتهي صلاحية النقاط المجمعة بعد 12 شهراً من عدم النشاط. كل ترشيح ناجح جديد يُعيد تشغيل عداد فترة الخمول.",
  },
  {
    q: "استقلالية العروض — عدم التجميع",
    a: "لا يمكن دمج مكافآت الترشيح مع عروض أو خصومات ترويجية أخرى.",
  },
];

// ─── Main component ────────────────────────────────────────────────────────────

export function ReferralPageClientAr() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [focused, setFocused] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "", company: "", phone: "", email: "",
    referType: "", rewardPref: "", notes: "",
  });
  const [consent, setConsent] = useState(false);
  const [policyOpen, setPolicyOpen] = useState(false);
  const [policyAgreed, setPolicyAgreed] = useState(false);

  useEffect(() => {
    // TODO: replace with real analytics
    console.debug("[analytics] referral_waitlist_view");
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => { const n = { ...prev }; delete n[name]; return n; });
  }

  function validate() {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "الاسم الكامل مطلوب.";
    if (!form.company.trim()) errs.company = "اسم الشركة أو الجهة مطلوب.";
    if (!form.phone.trim()) errs.phone = "رقم الجوال مطلوب.";
    if (!form.email.trim()) {
      errs.email = "البريد الإلكتروني مطلوب.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "يرجى إدخال بريد إلكتروني صحيح.";
    }
    if (!consent) errs.consent = "يرجى الموافقة على الشروط للمتابعة.";
    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setPolicyAgreed(false);
    setPolicyOpen(true);
  }

  function handlePolicyConfirm() {
    if (!policyAgreed) return;
    setPolicyOpen(false);
    // TODO: replace with real backend — Resend/EmailJS or Next.js API route
    console.debug("[analytics] referral_waitlist_submit", form);
    setSent(true);
    console.debug("[analytics] referral_waitlist_success");
  }

  const focusStyle = (field: string): React.CSSProperties => ({
    ...inputStyle,
    borderColor: errors[field] ? "var(--se-red, #e63535)" : focused === field ? "var(--se-teal)" : "var(--border-default)",
    boxShadow: errors[field] ? "0 0 0 3px rgba(230,53,53,0.10)" : focused === field ? "0 0 0 3px rgba(34,167,168,0.12)" : "none",
  });

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--se-blue-dark)", padding: "90px 0 72px", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.07) 1px, transparent 0)", backgroundSize: "22px 22px" }} />
        <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(270deg, var(--se-teal) 0%, var(--accent) 100%)" }} />
        <div className="se-container" style={{ position: "relative", textAlign: "center", direction: "rtl" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(246,186,59,0.15)", border: "1px solid rgba(246,186,59,0.35)", color: "var(--se-yellow)", fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", padding: "0.4em 1em", borderRadius: "var(--radius-pill)", marginBottom: "1.5rem" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--se-yellow)", display: "inline-block" }} />
            خبراء الترشيح | قريباً
          </span>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#fff", fontSize: "clamp(32px, 5vw, 58px)", lineHeight: 1.15, margin: "0 0 20px", maxWidth: 760, marginInline: "auto" }}>
            حوّل علاقاتك المهنية إلى عوائد.
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.75)", fontSize: 18, lineHeight: 1.8, maxWidth: 620, marginInline: "auto", marginBottom: 36 }}>
            احصل على مكافآت قيّمة عند ترشيح عملاء جدد لتقنيات وخدمات المساحة الاحترافية في المملكة العربية السعودية. سجّل اهتمامك الآن لتكون من أوائل شركائنا المعتمدين عند الإطلاق.
          </p>
          <a href="#waitlist" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 32px", background: "var(--se-teal)", color: "#fff", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 16, borderRadius: "var(--radius-md)", textDecoration: "none", boxShadow: "0 4px 24px rgba(34,167,168,0.35)" }}>
            <ArrowLeft size={18} />
            انضم لقائمة الانتظار
          </a>
          <div style={{ marginTop: 52, display: "flex", justifyContent: "center", gap: "clamp(24px, 5vw, 56px)", flexWrap: "wrap" }}>
            {[
              { val: "الربع الرابع 2025", label: "موعد الإطلاق المخطط" },
              { val: "4 خطوات", label: "عملية احترافية وواضحة" },
              { val: "خياران", label: "مرونة في نوع المكافأة" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(20px,3vw,28px)", color: "var(--se-teal)" }}>{s.val}</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--se-white)", padding: "88px 0 72px" }}>
        <div className="se-container">
          <SecHead label="آلية العمل" title="أربع خطوات مباشرة نحو شراكة ناجحة" subtitle="بمجرد إطلاق البرنامج الرسمي، ستكون عملية الترشيح منظمة وشفافة بالكامل." centered />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginTop: 12, direction: "rtl" }}>
            {steps.map((step, i) => (
              <div key={i} style={{ background: "var(--se-gray-50)", borderRadius: "var(--radius-xl)", padding: "28px 24px", border: "1px solid var(--border-subtle)", position: "relative", overflow: "hidden", textAlign: "right" }}>
                <div aria-hidden style={{ position: "absolute", top: 16, left: 20, fontFamily: "var(--font-display)", fontSize: 56, fontWeight: 800, color: "var(--se-teal)", opacity: 0.07, lineHeight: 1, userSelect: "none" }}>{step.num}</div>
                <div style={{ width: 48, height: 48, borderRadius: "var(--radius-md)", background: "var(--se-teal-soft)", color: "var(--se-teal)", display: "grid", placeItems: "center", marginBottom: 16, marginRight: "auto" }}>{step.icon}</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "var(--se-teal)", marginBottom: 6 }}>الخطوة {step.num}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--text-strong)", margin: "0 0 10px" }}>{step.title}</h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reward Options ────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--se-gray-50)", padding: "80px 0 72px", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="se-container">
          <SecHead label="خيارات المكافآت" title="طريقتان لاستثمار نقاطك" subtitle="اختر الطريقة التي تناسب احتياجاتك المهنية. كلا الخيارين سيكون متاحاً عند الإطلاق." centered />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, maxWidth: 760, marginInline: "auto", direction: "rtl" }}>
            <div style={{ background: "var(--se-white)", borderRadius: "var(--radius-xl)", padding: "36px 28px", border: "2px solid var(--se-teal)", boxShadow: "var(--shadow-md)", textAlign: "right" }}>
              <div style={{ width: 56, height: 56, borderRadius: "var(--radius-md)", background: "var(--se-teal-soft)", color: "var(--se-teal)", display: "grid", placeItems: "center", marginBottom: 20, marginRight: "auto" }}><Store size={26} /></div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--text-strong)", margin: "0 0 8px" }}>رصيد في المتجر الإلكتروني</h3>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px,4vw,38px)", fontWeight: 800, color: "var(--se-teal)", margin: "12px 0", direction: "ltr", textAlign: "center" }}>1 نقطة = 1 ريال</div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
                اجمع النقاط واستخدمها كقيمة شرائية كاملة (بدون حد أدنى) لطلب المعدات أو الإكسسوارات من متجرنا الإلكتروني الرسمي.
              </p>
            </div>
            <div style={{ background: "var(--se-white)", borderRadius: "var(--radius-xl)", padding: "36px 28px", border: "2px solid var(--border-subtle)", boxShadow: "var(--shadow-md)", textAlign: "right" }}>
              <div style={{ width: 56, height: 56, borderRadius: "var(--radius-md)", background: "var(--se-yellow-soft)", color: "var(--se-blue-dark)", display: "grid", placeItems: "center", marginBottom: 20, marginRight: "auto" }}><Banknote size={26} /></div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--text-strong)", margin: "0 0 8px" }}>مكافآت مالية مباشرة</h3>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px,4vw,38px)", fontWeight: 800, color: "var(--se-blue-dark)", margin: "12px 0", direction: "ltr", textAlign: "center" }}>2 نقطة = 1 ريال</div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)", lineHeight: 1.8, margin: 0 }}>
                تفضل العوائد النقدية؟ حوّل نقاطك إلى مبالغ نقدية تُصرف لك فور بلوغك الحد الأدنى للصرف.
              </p>
            </div>
          </div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-muted)", textAlign: "center", marginTop: 24, maxWidth: 600, marginInline: "auto", fontStyle: "italic", lineHeight: 1.8, direction: "rtl" }}>
            ملاحظة: آلية احتساب النقاط، القيم النهائية، وجداول الصرف خاضعة للشروط والأحكام الرسمية للبرنامج عند إطلاقه.
          </p>
        </div>
      </section>

      {/* ── Who Can Join ─────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--se-white)", padding: "80px 0 64px" }}>
        <div className="se-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px, 5vw, 72px)", alignItems: "center", direction: "rtl" }} className="kit-2col">
            <div>
              <SecHead label="الأهلية" title="مُصمم للمحترفين في القطاع الميداني" />
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-body)", lineHeight: 1.85, marginBottom: 20, direction: "rtl" }}>
                برنامج الترشيح مخصص للأفراد والكيانات التجارية المقيمة في السعودية، ممن لديهم ارتباط مهني بقطاعات المساحة، البناء، الاستشارات الهندسية، والبنية التحتية.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12, justifyContent: "flex-end" }}>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--text-body)", lineHeight: 1.6, textAlign: "right" }}><strong>الأفراد المهنيون</strong> — مهندسون، مساحون، مديرو مشاريع.</span>
                  <span style={{ color: "var(--se-teal)", marginTop: 2, flexShrink: 0 }}><Users size={18} /></span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12, justifyContent: "flex-end" }}>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--text-body)", lineHeight: 1.6, textAlign: "right" }}><strong>الكيانات التجارية</strong> — شركات المقاولات، المكاتب الهندسية.</span>
                  <span style={{ color: "var(--se-teal)", marginTop: 2, flexShrink: 0 }}><Building2 size={18} /></span>
                </div>
              </div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-muted)", lineHeight: 1.7, fontStyle: "italic", margin: 0, textAlign: "right" }}>
                تخضع جميع طلبات الانضمام للمراجعة والموافقة لضمان جودة الشبكة المهنية.
              </p>
            </div>
            <div>
              <div style={{ background: "var(--se-gray-50)", borderRadius: "var(--radius-xl)", padding: "32px 28px", border: "1px solid var(--border-subtle)", textAlign: "right" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, justifyContent: "flex-end" }}>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)" }}>المنتجات والخدمات المشمولة</span>
                  <Tag size={18} style={{ color: "var(--se-teal)", flexShrink: 0 }} />
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "flex-end" }}>
                  {equipmentTags.map((tag) => (
                    <span key={tag} style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "var(--se-blue-dark)", background: "var(--se-white)", border: "1.5px solid var(--border-subtle)", borderRadius: "var(--radius-pill)", padding: "6px 14px", lineHeight: 1, direction: "rtl" }}>{tag}</span>
                  ))}
                </div>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--text-muted)", marginTop: 16, marginBottom: 0, fontStyle: "italic", textAlign: "right" }}>
                  ستُنشر القائمة النهائية للمنتجات المشمولة عند الإطلاق.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Conditions Accordion ─────────────────────────────────────────────── */}
      <section style={{ background: "var(--se-gray-50)", padding: "80px 0 72px", borderTop: "1px solid var(--border-subtle)" }}>
        <div className="se-container">
          <SecHead label="الأحكام التنظيمية" title="معايير مهنية واضحة" subtitle="لضمان الشفافية، سيخضع البرنامج للضوابط التالية." centered />
          <div style={{ maxWidth: 760, marginInline: "auto", direction: "rtl" }}>
            {conditions.map((item, i) => (
              <div key={i} style={{ borderBottom: i < conditions.length - 1 ? "1px solid var(--border-subtle)" : "none" }}>
                <button onClick={() => setOpenAccordion(openAccordion === i ? null : i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "20px 0", background: "none", border: "none", cursor: "pointer", textAlign: "right", direction: "rtl" }}>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 600, color: openAccordion === i ? "var(--se-teal)" : "var(--text-strong)", lineHeight: 1.4, transition: "color 0.15s" }}>{item.q}</span>
                  {openAccordion === i
                    ? <ChevronUp size={18} style={{ flexShrink: 0, color: "var(--se-teal)" }} />
                    : <ChevronDown size={18} style={{ flexShrink: 0, color: "var(--text-muted)" }} />
                  }
                </button>
                {openAccordion === i && (
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)", lineHeight: 1.85, margin: "0 0 20px", textAlign: "right" }}>{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Company Disclaimer ────────────────────────────────────────────────── */}
      <section style={{ background: "var(--se-white)", padding: "72px 0 64px" }}>
        <div className="se-container">
          <div style={{ maxWidth: 760, marginInline: "auto", direction: "rtl", background: "rgba(246,186,59,0.08)", border: "1.5px solid rgba(246,186,59,0.35)", borderRadius: "var(--radius-xl)", padding: "32px 36px", borderRight: "4px solid var(--se-yellow)" }}>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--se-blue-dark)", marginBottom: 12, opacity: 0.7 }}>إخلاء مسؤولية قانوني</div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-body)", lineHeight: 1.9, margin: 0, textAlign: "right" }}>
              تُقدم هذه الصفحة خطة مبدئية لبرنامج ترشيح لم يُطلق رسمياً بعد. جميع التفاصيل، بما فيها نسب المكافآت ومعايير الأهلية، قابلة للتعديل. تسجيلك في قائمة الانتظار لا يمثل التزاماً تعاقدياً، وسيتم تزويدك بالشروط والأحكام النهائية عند الإطلاق.
            </p>
          </div>
        </div>
      </section>

      {/* ── Waiting List Form ─────────────────────────────────────────────────── */}
      <section id="waitlist" style={{ background: "var(--se-gray-50)", padding: "88px 0 80px", borderTop: "1px solid var(--border-subtle)" }}>
        <div className="se-container">
          <SecHead label="قائمة الانتظار" title="سجّل اهتمامك اليوم" subtitle="كن من أوائل المنضمين لشبكة شركائنا. سنتواصل معك لتزويدك بالتفاصيل الكاملة ورابط التفعيل فور إطلاق البرنامج." centered />
          <div style={{ maxWidth: 680, marginInline: "auto" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "56px 32px", direction: "rtl", background: "var(--se-teal-soft)", border: "1.5px solid var(--se-teal)", borderRadius: "var(--radius-xl)" }}>
                <CheckCircle2 size={52} style={{ color: "var(--se-teal)", margin: "0 auto 20px", display: "block" }} />
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24, color: "var(--text-strong)", margin: "0 0 12px" }}>أنت في القائمة!</h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-muted)", margin: "0 0 28px", lineHeight: 1.8 }}>
                  سنتواصل معك فور إطلاق خبراء الترشيح لتزويدك بتفاصيل التفعيل الكاملة.
                </p>
                <button onClick={() => { setSent(false); setForm({ name: "", company: "", phone: "", email: "", referType: "", rewardPref: "", notes: "" }); setConsent(false); }} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 22px", background: "var(--se-teal)", color: "#fff", fontWeight: 700, fontSize: 14, borderRadius: "var(--radius-md)", border: "none", cursor: "pointer", fontFamily: "var(--font-sans)" }}>
                  تسجيل آخر
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ background: "var(--se-white)", borderRadius: "var(--radius-xl)", padding: "clamp(24px, 4vw, 40px)", border: "1px solid var(--border-subtle)", boxShadow: "var(--shadow-md)", display: "flex", flexDirection: "column", gap: 20, direction: "rtl" }}>
                {/* Name + Company */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="kit-2col">
                  <div>
                    <label style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 700, color: "var(--text-strong)", marginBottom: 6 }}>الاسم الكامل <span style={{ color: "var(--se-teal)" }}>*</span></label>
                    <input required name="name" value={form.name} onChange={handleChange} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} placeholder="اسمك الثنائي" style={focusStyle("name")} />
                    {errors.name && <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--se-red, #e63535)", margin: "4px 0 0" }}>{errors.name}</p>}
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 700, color: "var(--text-strong)", marginBottom: 6 }}>اسم الشركة أو الجهة <span style={{ color: "var(--se-teal)" }}>*</span></label>
                    <input required name="company" value={form.company} onChange={handleChange} onFocus={() => setFocused("company")} onBlur={() => setFocused(null)} placeholder="الكيان الذي تمثله" style={focusStyle("company")} />
                    {errors.company && <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--se-red, #e63535)", margin: "4px 0 0" }}>{errors.company}</p>}
                  </div>
                </div>
                {/* Phone + Email */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="kit-2col">
                  <div>
                    <label style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 700, color: "var(--text-strong)", marginBottom: 6 }}>رقم الجوال <span style={{ color: "var(--se-teal)" }}>*</span></label>
                    <input required type="tel" name="phone" value={form.phone} onChange={handleChange} onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)} placeholder="+966 5X XXX XXXX" dir="ltr" style={{ ...focusStyle("phone"), textAlign: "left" }} />
                    {errors.phone && <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--se-red, #e63535)", margin: "4px 0 0" }}>{errors.phone}</p>}
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 700, color: "var(--text-strong)", marginBottom: 6 }}>البريد الإلكتروني <span style={{ color: "var(--se-teal)" }}>*</span> <span style={{ fontWeight: 400, color: "var(--text-muted)" }}>(المهني أفضل)</span></label>
                    <input required type="email" name="email" value={form.email} onChange={handleChange} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} placeholder="you@company.com" dir="ltr" style={{ ...focusStyle("email"), textAlign: "left" }} />
                    {errors.email && <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--se-red, #e63535)", margin: "4px 0 0" }}>{errors.email}</p>}
                  </div>
                </div>
                {/* Refer Type */}
                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 700, color: "var(--text-strong)", marginBottom: 10 }}>من هي الفئة التي تخطط لترشيحها غالباً؟</label>
                  <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "flex-end" }}>
                    {[{ val: "individuals", label: "أفراد" }, { val: "companies", label: "شركات" }, { val: "both", label: "كلاهما" }].map((opt) => (
                      <label key={opt.val} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-body)" }}>
                        {opt.label}
                        <input type="radio" name="referType" value={opt.val} checked={form.referType === opt.val} onChange={handleChange} style={{ accentColor: "var(--se-teal)", width: 16, height: 16 }} />
                      </label>
                    ))}
                  </div>
                </div>
                {/* Reward Pref */}
                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 700, color: "var(--text-strong)", marginBottom: 10 }}>نوع المكافأة المفضل مبدئياً</label>
                  <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "flex-end" }}>
                    {[{ val: "store-credit", label: "رصيد في المتجر" }, { val: "cash", label: "مكافآت مالية" }, { val: "undecided", label: "لم أحدد بعد" }].map((opt) => (
                      <label key={opt.val} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-body)" }}>
                        {opt.label}
                        <input type="radio" name="rewardPref" value={opt.val} checked={form.rewardPref === opt.val} onChange={handleChange} style={{ accentColor: "var(--se-teal)", width: 16, height: 16 }} />
                      </label>
                    ))}
                  </div>
                </div>
                {/* Notes */}
                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 700, color: "var(--text-strong)", marginBottom: 6 }}>
                    ملاحظات إضافية <span style={{ fontWeight: 400, color: "var(--text-muted)" }}>(اختياري)</span>
                  </label>
                  <textarea name="notes" value={form.notes} onChange={handleChange} onFocus={() => setFocused("notes")} onBlur={() => setFocused(null)} placeholder="أي معلومات حول شبكتك المهنية أو طبيعة عملك…" rows={4} style={{ ...focusStyle("notes"), resize: "vertical", minHeight: 100 }} />
                </div>
                {/* Consent */}
                <div>
                  <label style={{ display: "flex", alignItems: "flex-start", gap: 12, cursor: "pointer", padding: "16px", borderRadius: "var(--radius-md)", background: errors.consent ? "rgba(230,53,53,0.06)" : "var(--se-gray-50)", border: errors.consent ? "1.5px solid rgba(230,53,53,0.35)" : "1.5px solid var(--border-subtle)", direction: "rtl" }}>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-body)", lineHeight: 1.7, flex: 1, textAlign: "right" }}>
                      أتفهم أن هذا تسجيل مبكر في قائمة الانتظار، وأوافق على التواصل معي عند الإطلاق الرسمي للبرنامج. <span style={{ color: "var(--se-teal)", fontWeight: 700 }}>*</span>
                    </span>
                    <input type="checkbox" checked={consent} onChange={(e) => { setConsent(e.target.checked); if (errors.consent) setErrors((p) => { const n = { ...p }; delete n.consent; return n; }); }} style={{ accentColor: "var(--se-teal)", width: 16, height: 16, marginTop: 2, flexShrink: 0 }} />
                  </label>
                  {errors.consent && <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--se-red, #e63535)", margin: "4px 0 0", textAlign: "right" }}>{errors.consent}</p>}
                </div>
                <button type="submit" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "14px 32px", background: "var(--se-teal)", color: "#fff", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 16, borderRadius: "var(--radius-md)", border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(34,167,168,0.3)" }}>
                  <ArrowLeft size={18} />
                  انضم لقائمة الانتظار
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── Policy Modal ─────────────────────────────────────────────────────── */}
      {policyOpen && (
        <>
          <div onClick={() => setPolicyOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 9998, background: "rgba(13,22,30,0.65)", backdropFilter: "blur(4px)" }} />
          <div style={{ position: "fixed", zIndex: 9999, top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "min(560px, calc(100vw - 32px))", maxHeight: "85vh", overflowY: "auto", background: "var(--se-white)", borderRadius: "var(--radius-xl)", boxShadow: "0 24px 64px rgba(13,22,30,0.35)", direction: "rtl" }}>
            <div style={{ height: 4, background: "linear-gradient(270deg, var(--se-teal) 0%, var(--accent) 100%)", borderRadius: "var(--radius-xl) var(--radius-xl) 0 0" }} />
            <button onClick={() => setPolicyOpen(false)} aria-label="إغلاق" style={{ position: "absolute", top: 16, left: 16, width: 32, height: 32, borderRadius: "50%", background: "var(--se-gray-50)", border: "1px solid var(--border-subtle)", color: "var(--text-muted)", display: "grid", placeItems: "center", cursor: "pointer" }}>
              <X size={15} />
            </button>
            <div style={{ padding: "28px 32px 32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, justifyContent: "flex-end" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--text-strong)", margin: 0, textAlign: "right" }}>شروط البرنامج وإخلاء المسؤولية</h3>
                <div style={{ width: 44, height: 44, borderRadius: "var(--radius-md)", background: "rgba(246,186,59,0.15)", color: "var(--se-yellow, #f6ba3b)", display: "grid", placeItems: "center", flexShrink: 0 }}><ShieldAlert size={22} /></div>
              </div>
              <div style={{ background: "var(--se-gray-50)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", padding: "20px", marginBottom: 20, maxHeight: 320, overflowY: "auto" }}>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-body)", lineHeight: 1.85, margin: "0 0 14px", textAlign: "right" }}><strong>يرجى القراءة بعناية قبل تقديم طلبك:</strong></p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-body)", lineHeight: 1.85, margin: "0 0 14px", textAlign: "right" }}>
                  تُقدم هذه الصفحة خطة مبدئية لبرنامج ترشيح <strong>لم يُطلق رسمياً بعد</strong>. جميع التفاصيل قابلة للتعديل. تسجيلك لا يمثل التزاماً تعاقدياً.
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-body)", lineHeight: 1.85, margin: "0 0 10px", textAlign: "right" }}><strong>الضوابط المخططة الرئيسية:</strong></p>
                <ul style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-muted)", lineHeight: 1.85, margin: 0, paddingRight: 20, textAlign: "right" }}>
                  <li>تُعتمد فقط الترشيحات المُسجلة عبر البوابة الرسمية بعد الإطلاق.</li>
                  <li>يجب أن تكون الجهة المُرشَّحة عميلاً جديداً لخبراء المساحة.</li>
                  <li>تُحتسب النقاط فقط بعد اكتمال الدفع واستلام العميل لمعداته.</li>
                  <li>لا يُسمح بترشيح نفسك أو الكيان التجاري الذي تعمل به مباشرة.</li>
                  <li>تنتهي النقاط بعد 12 شهراً من عدم النشاط.</li>
                  <li>لا يمكن دمج المكافآت مع عروض أو خصومات ترويجية أخرى.</li>
                </ul>
              </div>
              <label style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "16px", borderRadius: "var(--radius-md)", background: policyAgreed ? "var(--se-teal-soft)" : "var(--se-gray-50)", border: policyAgreed ? "1.5px solid var(--se-teal)" : "1.5px solid var(--border-subtle)", cursor: "pointer", marginBottom: 20, transition: "all 0.15s", direction: "rtl" }}>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-body)", lineHeight: 1.7, flex: 1, textAlign: "right" }}>
                  لقد قرأت وفهمت إخلاء المسؤولية والشروط المخططة للبرنامج أعلاه. أوافق على أن هذا تسجيل في قائمة انتظار وليس تسجيلاً مؤكداً.
                </span>
                <input type="checkbox" checked={policyAgreed} onChange={(e) => setPolicyAgreed(e.target.checked)} style={{ accentColor: "var(--se-teal)", width: 16, height: 16, marginTop: 2, flexShrink: 0 }} />
              </label>
              <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
                <button onClick={() => setPolicyOpen(false)} style={{ padding: "12px 18px", background: "none", fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 14, color: "var(--text-muted)", border: "1.5px solid var(--border-subtle)", borderRadius: "var(--radius-md)", cursor: "pointer" }}>إلغاء</button>
                <button onClick={handlePolicyConfirm} disabled={!policyAgreed} style={{ padding: "12px 24px", background: policyAgreed ? "var(--se-teal)" : "var(--se-gray-50)", color: policyAgreed ? "#fff" : "var(--text-muted)", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", border: policyAgreed ? "none" : "1.5px solid var(--border-subtle)", cursor: policyAgreed ? "pointer" : "not-allowed", transition: "all 0.15s", display: "flex", alignItems: "center", gap: 8 }}>
                  {policyAgreed ? <><CheckCircle2 size={16} /> تأكيد وإرسال</> : "اقرأ وافق للمتابعة"}
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ── Final CTA ────────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--se-blue-dark)", padding: "72px 0 64px", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.07) 1px, transparent 0)", backgroundSize: "22px 22px" }} />
        <div className="se-container" style={{ position: "relative", textAlign: "center", direction: "rtl" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#fff", fontSize: "clamp(24px, 3.5vw, 38px)", lineHeight: 1.2, margin: "0 0 16px" }}>هل لديك استفسارات حول البرنامج؟</h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, color: "rgba(255,255,255,0.65)", margin: "0 0 32px", lineHeight: 1.8 }}>
            فريقنا مستعد للإجابة على أي أسئلة حول هيكل الشراكة وبرنامج الترشيح القادم.
          </p>
          <Link href="/ar/contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "13px 30px", background: "var(--se-teal)", color: "#fff", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", textDecoration: "none", boxShadow: "0 4px 20px rgba(34,167,168,0.35)" }}>
            <ArrowLeft size={16} />
            تواصل معنا الآن
          </Link>
        </div>
      </section>
    </>
  );
}
