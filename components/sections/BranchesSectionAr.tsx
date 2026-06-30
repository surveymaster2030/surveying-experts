"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, Wrench, Mail } from "lucide-react";

const branches = [
  {
    city: "الرياض",
    region: "منطقة الرياض",
    address: "حي الملز، شارع صلاح الدين الأيوبي",
    phone: "+966 54 064 6245",
    hours: "السبت–الخميس، 9:00–18:00",
    primary: true,
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.724433932085!2d46.72745977482045!3d24.667611852948205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f05461d63aa37%3A0x5e26372f65c6de26!2z2LTYsdmD2Kkg2K7YqNix2KfYoSDYp9mE2YXYs9in2K3YqSDYp9mE2YHZhtmK2Kkg2YTZhNin2LPYqtir2YXYp9ix!5e0!3m2!1sen!2ssa!4v1782393791715!5m2!1sen!2ssa",
    mapsUrl: "https://www.google.com/maps?cid=6784170565390753318",
  },
  {
    city: "جدة",
    region: "منطقة مكة المكرمة",
    address: "حي الروابي، طريق الملك عبدالعزيز",
    phone: "+966 54 064 6245",
    hours: "السبت–الخميس، 9:00–18:00",
    primary: false,
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.6311200568775!2d50.123486574878484!3d26.435378080441865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fb004c549b31%3A0xf897907a103fba86!2z2LTYsdmD2Kkg2K7YqNix2KfYoSDYp9mE2YXYs9in2K3YqQ!5e0!3m2!1sen!2ssa!4v1782393441029!5m2!1sen!2ssa",
    mapsUrl: "https://www.google.com/maps?cid=17912944896822459014",
  },
  {
    city: "الدمام",
    region: "المنطقة الشرقية",
    address: "حي الفيصلية، طريق الملك فهد",
    phone: "+966 54 064 6245",
    hours: "السبت–الخميس، 9:00–18:00",
    primary: false,
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800423.6155369845!2d34.3156249125!3d21.533119199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d127b9b7a8b1%3A0x9317c778f210e8ee!2z2YXYpNiz2LPYqSDYrtio2LHYp9ihINin2YTZhdiz2KfYrdipINmE2YTYqtis2KfYsdip!5e0!3m2!1sen!2ssa!4v1782393467256!5m2!1sen!2ssa",
    mapsUrl: "https://www.google.com/maps?cid=10599159570310949102",
  },
  {
    city: "تبوك",
    region: "منطقة تبوك",
    address: "حي العزيزية، طريق الملك فهد",
    phone: "+966 54 064 6245",
    hours: "السبت–الخميس، 9:00–18:00",
    primary: false,
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.2638030414055!2d36.56531667494857!3d28.411295794093913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15a9ad00658ad97b%3A0x4884da357ee349d1!2z2LTYsdmD2Kkg2K7YqNix2KfYoSDYp9mE2YXYs9in2K3ZhyDZhNmE2KrYrNin2LHYqSBTdXJ2ZXlpbmcgZXhwZXJ0cyBjb21wYW55!5e0!3m2!1sen!2ssa!4v1782393482953!5m2!1sen!2ssa",
    mapsUrl: "https://www.google.com/maps?cid=5225541390953564625",
  },
  {
    city: "خميس مشيط",
    region: "منطقة عسير",
    address: "حي المنهل، طريق المطار",
    phone: "+966 54 064 6245",
    hours: "السبت–الخميس، 9:00–18:00",
    primary: false,
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878908.224433262!2d37.85331101250001!3d18.301776800000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15fb5b8038dfffc9%3A0x12d57fabf42eac5b!2z2LTYsdmD2Kkg2K7YqNix2KfYoSDYp9mE2YXYs9in2K3YqQ!5e0!3m2!1sen!2ssa!4v1782393512218!5m2!1sen!2ssa",
    mapsUrl: "https://www.google.com/maps?cid=1357131239234907227",
  },
];

export function BranchesSectionAr() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = branches[activeIdx];

  return (
    <section
      id="branches"
      style={{
        background: "var(--se-gray-50)",
        position: "relative",
        overflow: "hidden",
        padding: "80px 0",
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.10) 1px, transparent 0)",
        backgroundSize: "22px 22px",
        direction: "rtl",
      }}
    >
      <div className="se-container">
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span style={{ display: "inline-block", fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", color: "var(--se-blue)", background: "var(--se-yellow-soft)", padding: "0.35em 0.85em", borderRadius: "var(--radius-pill)", marginBottom: "1.25rem" }}>
            فروعنا
          </span>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.625rem, 3vw, 2.25rem)", color: "var(--text-strong)", lineHeight: 1.2, margin: "0.5rem 0 0.875rem" }}>
            أقرب لفريقك في جميع أنحاء المملكة
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-muted)", maxWidth: "50ch", margin: "0 auto" }}>
            خمسة فروع منتشرة في أنحاء المملكة لدعم مبيعاتك، استفساراتك التقنية، وخدمات الصيانة والمعايرة.
          </p>
        </div>

        {/* Branch tabs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 28 }}>
          {branches.map((b, i) => (
            <button
              key={b.city}
              onClick={() => setActiveIdx(i)}
              style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                padding: "9px 18px",
                background: i === activeIdx ? "var(--se-blue-dark)" : "var(--se-white)",
                color: i === activeIdx ? "#fff" : "var(--text-body)",
                border: i === activeIdx ? "1.5px solid var(--se-blue-dark)" : "1.5px solid var(--border-subtle)",
                borderRadius: "var(--radius-pill)",
                fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: i === activeIdx ? 700 : 500,
                cursor: "pointer", transition: "all 0.15s ease",
              }}
            >
              <MapPin size={12} style={{ opacity: i === activeIdx ? 1 : 0.5 }} />
              {b.city}
              {b.primary && i === activeIdx && (
                <span style={{ fontSize: 9, fontWeight: 800, background: "var(--accent)", color: "var(--se-blue-dark)", padding: "1px 5px", borderRadius: "var(--radius-pill)" }}>الرئيسي</span>
              )}
            </button>
          ))}
        </div>

        {/* Map + branch list (RTL: map on left, cards on right visually) */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, alignItems: "start" }} className="kit-2col">

          {/* Branch cards — first in DOM = right side in RTL */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {branches.map((b, i) => (
              <button
                key={b.city}
                onClick={() => setActiveIdx(i)}
                style={{
                  background: i === activeIdx ? (b.primary ? "rgba(246,186,59,0.06)" : "rgba(34,167,168,0.06)") : "var(--se-white)",
                  border: `1.5px solid ${i === activeIdx ? (b.primary ? "var(--accent)" : "var(--se-teal)") : "var(--border-subtle)"}`,
                  borderRadius: "var(--radius-lg)",
                  padding: "16px 18px",
                  boxShadow: i === activeIdx && b.primary ? "0 4px 20px rgba(246,186,59,0.12)" : "var(--shadow-xs)",
                  display: "flex", alignItems: "flex-start", gap: 14,
                  cursor: "pointer", textAlign: "right", width: "100%",
                  transition: "all 0.15s ease",
                }}
              >
                <div style={{ width: 40, height: 40, borderRadius: "var(--radius-md)", background: b.primary ? "var(--se-blue)" : "var(--se-gray-50)", color: b.primary ? "#fff" : "var(--se-blue)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                  <MapPin size={17} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <span style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 15, color: "var(--text-strong)" }}>{b.city}</span>
                    {b.primary && <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 700, background: "var(--accent)", color: "var(--se-blue-dark)", padding: "2px 7px", borderRadius: "var(--radius-pill)" }}>الرئيسي</span>}
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "var(--text-muted)" }}>{b.region}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 5, marginBottom: 5 }}>
                    <MapPin size={11} style={{ color: "var(--se-teal)", flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--text-muted)", lineHeight: 1.5 }}>{b.address}</span>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "3px 14px" }}>
                    <a href={`tel:${b.phone.replace(/\s/g, "")}`} onClick={e => e.stopPropagation()} dir="ltr" style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "var(--font-sans)", fontSize: 11, color: "var(--text-muted)", textDecoration: "none" }}>
                      <Phone size={10} style={{ color: "var(--se-teal)" }} />{b.phone}
                    </a>
                    <span style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "var(--font-sans)", fontSize: 11, color: "var(--text-muted)" }}>
                      <Clock size={10} style={{ color: "var(--se-teal)" }} />{b.hours}
                    </span>
                  </div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 5, marginTop: 8, padding: "3px 8px", borderRadius: "var(--radius-pill)", background: "rgba(246,186,59,0.1)", border: "1px solid rgba(246,186,59,0.2)" }}>
                    <Wrench size={10} style={{ color: "var(--se-teal)" }} />
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600, color: "var(--se-teal)" }}>صيانة ومعايرة</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Google Map — second in DOM = left side in RTL */}
          <div style={{ background: "var(--se-white)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-xl)", overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
            <iframe
              key={active.mapSrc}
              src={active.mapSrc}
              width="100%"
              height="400"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`خريطة فرع خبراء المساحة في ${active.city}`}
            />
            <div style={{ padding: "12px 16px", borderTop: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--text-muted)" }}>
                فرع {active.city}
              </span>
              <a
                href={active.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, color: "var(--se-teal)", textDecoration: "none" }}
              >
                ← فتح في خرائط جوجل
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 44 }}>
          <a href="mailto:Sales@surveyingexperts-sa.com"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", background: "var(--se-teal)", color: "#fff", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", textDecoration: "none" }}>
            <Mail size={16} /> مراسلة أقرب فرع
          </a>
        </div>
      </div>
    </section>
  );
}
