"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqItems = [
  { q: "What equipment do you service?", a: "Total Station, GNSS and RTK, and Auto Level devices. For other types, contact our team to discuss options." },
  { q: "Do you offer field maintenance or only center-based?", a: "Our primary service is center-based. Field maintenance may be arranged for specific situations. Contact us to discuss." },
  { q: "How long does maintenance take?", a: "Routine calibration typically takes one to three business days. Package clients receive priority turnaround as defined in their plan. We confirm estimated timing at the point of receiving." },
  { q: "Do I receive a calibration certificate?", a: "Yes. All individual calibration services and all packages include a calibration certificate. Platinum plan clients also receive a website-verifiable certificate." },
  { q: "Can I track my company's devices?", a: "Platinum plan clients receive a private dashboard to track devices, service history, and calibration status." },
];

export function MaintenanceFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", gap: 10 }}>
      {faqItems.map((item, i) => {
        const isOpen = openIdx === i;
        return (
          <div key={item.q} style={{ border: `1px solid ${isOpen ? "var(--se-teal)" : "var(--border-subtle)"}`, borderRadius: "var(--radius-lg)", overflow: "hidden", transition: "border-color 0.2s" }}>
            <button
              onClick={() => setOpenIdx(isOpen ? null : i)}
              style={{ width: "100%", background: isOpen ? "var(--se-teal-soft)" : "var(--se-white)", border: "none", cursor: "pointer", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, textAlign: "left" }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: "var(--text-strong)" }}>{item.q}</span>
              {isOpen ? <ChevronUp size={18} style={{ flexShrink: 0, color: "var(--se-teal)" }} /> : <ChevronDown size={18} style={{ flexShrink: 0, color: "var(--text-muted)" }} />}
            </button>
            {isOpen && (
              <div style={{ padding: "0 20px 18px", background: "var(--se-teal-soft)", fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: 1.7, color: "var(--text-muted)" }}>
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
