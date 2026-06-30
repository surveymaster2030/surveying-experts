"use client";

import { CountUp } from "@/components/ui/CountUp";

const stats = [
  { value: 7,    label: "سنوات خبرة",          separator: false },
  { value: 3000, label: "عميل من قطاع الأعمال", separator: true,  prefix: "+" },
  { value: 2000, label: "مشروع إنشائي",          separator: true,  prefix: "+" },
  { value: 5,    label: "فروع في المملكة",       separator: false },
];

export function StatsSectionAr() {
  return (
    <section
      style={{
        background: "var(--se-blue-darker)",
        borderTop: "1px solid rgba(34,167,168,0.12)",
        borderBottom: "1px solid rgba(34,167,168,0.12)",
        padding: "3rem 0",
      }}
    >
      <div className="se-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "2rem",
            textAlign: "center",
          }}
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  color: "var(--se-teal)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  marginBottom: "0.4rem",
                }}
              >
                <CountUp to={s.value} separator={s.separator} prefix={s.prefix ?? ""} />
              </div>
              <div
                style={{
                  fontSize: "var(--text-sm)",
                  color: "rgba(255,255,255,0.55)",
                  fontWeight: 500,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
