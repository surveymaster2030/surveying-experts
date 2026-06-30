"use client";

import { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, Send, ChevronDown } from "lucide-react";

const contactCards = [
  {
    icon: <Phone size={22} />,
    title: "هاتف",
    value: "+966 54 064 6245",
    href: "tel:+966540646245",
    color: "var(--se-blue)",
    bg: "var(--se-blue-soft)",
    desc: "للاستفسارات العامة وعروض الأسعار وطلبات المبيعات",
  },
  {
    icon: <MessageCircle size={22} />,
    title: "واتساب",
    value: "+966 54 064 6245",
    href: "https://wa.me/966540646245",
    color: "#25D366",
    bg: "rgba(37,211,102,0.10)",
    desc: "للرد السريع والدعم الفني ومتابعة الطلبات",
  },
  {
    icon: <Mail size={22} />,
    title: "البريد الإلكتروني",
    value: "Sales@surveyingexperts-sa.com",
    href: "mailto:Sales@surveyingexperts-sa.com",
    color: "var(--se-teal)",
    bg: "var(--se-teal-soft)",
    desc: "للمراسلات الرسمية وعروض الأسعار التفصيلية والوثائق",
  },
  {
    icon: <MapPin size={22} />,
    title: "الفروع",
    value: "5 فروع في السعودية",
    href: "#branches",
    color: "var(--accent)",
    bg: "rgba(246,186,59,0.12)",
    desc: "الرياض، جدة، الدمام، تبوك، خميس مشيط",
  },
];

const SUBJECTS = [
  "استفسار مبيعات",
  "دعم فني",
  "الصيانة والمعايرة",
  "طلب من المتجر الإلكتروني",
  "طلب ملف الشركة",
  "استفسار عام",
];

export function ContactPageClientAr() {
  const [subject, setSubject] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--se-blue-dark)", padding: "80px 0 64px", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.07) 1px, transparent 0)", backgroundSize: "22px 22px" }} />
        <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "var(--accent)" }} />
        <div className="se-container" style={{ position: "relative" }}>
          <span style={{ display: "inline-block", fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--accent)", background: "rgba(246,186,59,0.12)", padding: "0.35em 0.85em", borderRadius: "var(--radius-pill)", marginBottom: "1.25rem" }}>
            تواصل معنا
          </span>
          <h1 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, color: "#fff", fontSize: "clamp(30px,4vw,52px)", lineHeight: 1.06, letterSpacing: "-0.025em", margin: "18px 0 16px", maxWidth: 580 }}>
            تحدث مع فريقنا
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.7)", fontSize: 18, lineHeight: 1.65, maxWidth: 500, margin: 0 }}>
            لاستفسارات المبيعات، الدعم الفني، الصيانة والمعايرة، أو أي مسألة تتعلق بمعداتك.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section style={{ background: "var(--se-white)", padding: "80px 0", position: "relative", overflow: "hidden", backgroundImage: "linear-gradient(rgba(53,80,97,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(53,80,97,0.05) 1px,transparent 1px)", backgroundSize: "40px 40px" }}>
        <div className="se-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginBottom: 64 }}>
            {contactCards.map((c) => (
              <a key={c.title} href={c.href}
                style={{ display: "flex", flexDirection: "column", padding: "24px 20px", background: "var(--se-white)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-sm)", textDecoration: "none", transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--se-teal)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-subtle)"; e.currentTarget.style.transform = "none"; }}
              >
                <div style={{ width: 48, height: 48, borderRadius: "var(--radius-md)", background: c.bg, color: c.color, display: "grid", placeItems: "center", marginBottom: 16, flexShrink: 0 }}>
                  {c.icon}
                </div>
                <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", marginBottom: 6 }}>{c.title}</div>
                <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 15, color: "var(--text-strong)", marginBottom: 8, wordBreak: "break-all" }}>{c.value}</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.55, color: "var(--text-muted)", marginTop: "auto" }}>{c.desc}</div>
              </a>
            ))}
          </div>

          {/* Form */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }} className="kit-2col">
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.375rem,2.5vw,1.875rem)", color: "var(--text-strong)", margin: "0 0 12px", letterSpacing: "-0.02em" }}>أرسل لنا رسالة</h2>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--text-muted)", lineHeight: 1.65, margin: 0 }}>
                أكمل النموذج وسيتواصل معك أحد متخصصي فريقنا في أقرب وقت ممكن.
              </p>
            </div>

            {sent ? (
              <div style={{ background: "var(--se-teal-soft)", border: "1px solid rgba(34,167,168,0.3)", borderRadius: "var(--radius-xl)", padding: "40px 32px", textAlign: "center" }}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: "var(--se-teal)", color: "#fff", display: "grid", placeItems: "center", margin: "0 auto 16px" }}>
                  <Send size={22} />
                </div>
                <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 18, color: "var(--text-strong)", marginBottom: 8 }}>تم إرسال رسالتك!</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)" }}>سيتواصل معك أحد متخصصينا قريباً.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}
                style={{ background: "var(--se-gray-50)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-xl)", padding: "32px 28px", display: "flex", flexDirection: "column", gap: 18 }}>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <label style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 13, color: "var(--text-strong)", display: "block", marginBottom: 6 }}>الاسم</label>
                    <input required placeholder="اسمك" style={{ width: "100%", padding: "11px 14px", fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-strong)", background: "var(--se-white)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", outline: "none", boxSizing: "border-box", direction: "rtl" }} />
                  </div>
                  <div>
                    <label style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 13, color: "var(--text-strong)", display: "block", marginBottom: 6 }}>الشركة</label>
                    <input placeholder="اسم شركتك" style={{ width: "100%", padding: "11px 14px", fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-strong)", background: "var(--se-white)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", outline: "none", boxSizing: "border-box", direction: "rtl" }} />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <label style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 13, color: "var(--text-strong)", display: "block", marginBottom: 6 }}>الهاتف / الواتساب</label>
                    <input required type="tel" placeholder="+966 5X XXX XXXX" style={{ width: "100%", padding: "11px 14px", fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-strong)", background: "var(--se-white)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", outline: "none", boxSizing: "border-box", direction: "ltr" }} />
                  </div>
                  <div>
                    <label style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 13, color: "var(--text-strong)", display: "block", marginBottom: 6 }}>المدينة</label>
                    <input placeholder="مدينتك في السعودية" style={{ width: "100%", padding: "11px 14px", fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-strong)", background: "var(--se-white)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", outline: "none", boxSizing: "border-box", direction: "rtl" }} />
                  </div>
                </div>

                <div>
                  <label style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 13, color: "var(--text-strong)", display: "block", marginBottom: 6 }}>نوع الاستفسار</label>
                  <div style={{ position: "relative" }}>
                    <select required value={subject} onChange={(e) => setSubject(e.target.value)}
                      style={{ width: "100%", padding: "11px 14px", fontFamily: "var(--font-sans)", fontSize: 14, color: subject ? "var(--text-strong)" : "var(--text-muted)", background: "var(--se-white)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", outline: "none", appearance: "none", boxSizing: "border-box", direction: "rtl" }}>
                      <option value="" disabled>اختر نوع الاستفسار</option>
                      {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <ChevronDown size={14} style={{ position: "absolute", top: "50%", left: 14, transform: "translateY(-50%)", color: "var(--text-muted)", pointerEvents: "none" }} />
                  </div>
                </div>

                <div>
                  <label style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 13, color: "var(--text-strong)", display: "block", marginBottom: 6 }}>الرسالة</label>
                  <textarea required rows={4} placeholder="أخبرنا عن مشروعك أو استفسارك..." style={{ width: "100%", padding: "11px 14px", fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-strong)", background: "var(--se-white)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", outline: "none", resize: "vertical", boxSizing: "border-box", direction: "rtl" }} />
                </div>

                <button type="submit"
                  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px 24px", background: "var(--se-teal)", color: "#fff", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", border: "none", cursor: "pointer", transition: "opacity 0.15s" }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = "0.88"}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
                >
                  <Send size={15} /> إرسال الرسالة
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
