"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "ما هي الأجهزة التي تصونها وتعايرها؟",
    a: "نصون ونعاير أجهزة GNSS و RTK (الروفر والبيز)، وأجهزة التوتال ستيشن، وأجهزة الأوتو ليفل، وإكسسوارات مساحية مختارة. تواصل معنا للاستفسار عن أجهزة محددة.",
  },
  {
    q: "كم تستغرق عملية الصيانة أو المعايرة؟",
    a: "تستغرق معظم أعمال الصيانة والمعايرة ما بين يوم إلى ثلاثة أيام عمل، وتتوقف على نوع الجهاز وما يحتاجه. تواصل معنا للحصول على تقدير زمني دقيق لجهازك.",
  },
  {
    q: "هل توفرون شهادات معايرة معتمدة؟",
    a: "نعم، نوفر شهادات معايرة معتمدة لجميع الأجهزة المعايَرة. تلبي هذه الشهادات متطلبات التدقيق والمشتريات وتسجيل الموردين.",
  },
  {
    q: "ما الفرق بين الصيانة والمعايرة؟",
    a: "الصيانة تعني فحص الجهاز وتنظيفه وخدمته والتحقق من أجزائه الميكانيكية والإلكترونية لضمان أدائه. أما المعايرة فهي عملية قياس دقة الجهاز وضبطه وفق معايير محددة لضمان صحة القياسات وإصدار شهادة تُثبت ذلك.",
  },
  {
    q: "هل يمكنني طلب خدمة صيانة لأسطول أجهزتي بالكامل؟",
    a: "نعم، نقدم باقات صيانة مخصصة للشركات التي تملك عدة أجهزة. صُممت هذه الباقات لفرق التشغيل الكبيرة، وتشمل جدولة منتظمة وأولوية في الخدمة وخصومات على قطع الغيار.",
  },
];

export function MaintenanceFAQAr() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {FAQS.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={i}
            style={{ borderRadius: "var(--radius-lg)", border: `1.5px solid ${isOpen ? "var(--se-teal)" : "var(--border-subtle)"}`, overflow: "hidden", background: "var(--se-white)", transition: "border-color 0.2s, box-shadow 0.2s", boxShadow: isOpen ? "0 4px 16px rgba(34,167,168,0.08)" : "var(--shadow-xs)" }}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: "none", border: "none", cursor: "pointer", gap: 16, textAlign: "right" }}
            >
              <span style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 15, color: "var(--text-strong)", textAlign: "right" }}>{faq.q}</span>
              <ChevronDown size={18} style={{ color: "var(--text-muted)", transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s", flexShrink: 0 }} />
            </button>
            {isOpen && (
              <div style={{ padding: "0 22px 20px", borderTop: "1px solid var(--border-subtle)" }}>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.7, color: "var(--text-muted)", margin: "16px 0 0", textAlign: "right" }}>{faq.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
