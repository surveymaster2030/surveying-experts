"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, ArrowLeft, Gift } from "lucide-react";

export function ReferralPopupAr() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("referral_popup_shown_ar")) return;
    const t = setTimeout(() => setVisible(true), 10000);
    return () => clearTimeout(t);
  }, []);

  function close() {
    setVisible(false);
    sessionStorage.setItem("referral_popup_shown_ar", "1");
  }

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={close}
        style={{
          position: "fixed", inset: 0, zIndex: 9998,
          background: "rgba(13,22,30,0.6)", backdropFilter: "blur(4px)",
          animation: "se-fade-in 0.25s ease",
        }}
      />

      {/* Modal card */}
      <div style={{
        position: "fixed", zIndex: 9999,
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "min(480px, calc(100vw - 32px))",
        background: "var(--se-white)",
        borderRadius: "var(--radius-xl)",
        boxShadow: "0 24px 64px rgba(13,22,30,0.35)",
        overflow: "hidden",
        animation: "se-popup-in 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        direction: "rtl",
      }}>
        {/* Accent bar */}
        <div style={{ height: 4, background: "linear-gradient(270deg, var(--se-teal) 0%, var(--accent) 100%)" }} />

        {/* Close button */}
        <button
          onClick={close}
          aria-label="إغلاق"
          style={{
            position: "absolute", top: 16, left: 16,
            width: 32, height: 32, borderRadius: "50%",
            background: "var(--se-gray-50)", border: "1px solid var(--border-subtle)",
            color: "var(--text-muted)", display: "grid", placeItems: "center",
            cursor: "pointer",
          }}
        >
          <X size={15} />
        </button>

        <div style={{ padding: "28px 32px 32px" }}>
          {/* Badge */}
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            background: "rgba(246,186,59,0.15)", border: "1px solid rgba(246,186,59,0.4)",
            color: "var(--se-yellow, #f6ba3b)", fontFamily: "var(--font-sans)",
            fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
            padding: "0.35em 0.9em", borderRadius: "var(--radius-pill)", marginBottom: 16,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor", display: "inline-block" }} />
            قريباً
          </span>

          {/* Icon */}
          <div style={{
            width: 52, height: 52, borderRadius: "var(--radius-md)",
            background: "var(--se-teal-soft)", color: "var(--se-teal)",
            display: "grid", placeItems: "center", marginBottom: 16, marginRight: "auto",
          }}>
            <Gift size={24} />
          </div>

          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22,
            color: "var(--text-strong)", lineHeight: 1.2,
            margin: "0 0 12px", textAlign: "right",
          }}>
            حوّل علاقاتك المهنية إلى عوائد قيّمة!
          </h2>
          <p style={{
            fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--text-muted)",
            lineHeight: 1.8, margin: "0 0 24px", textAlign: "right",
          }}>
            انضم الآن لقائمة الانتظار في خبراء الترشيح، واكسب مكافآت مالية عند ترشيح عملاء جدد لـ خبراء المساحة.
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "flex-end" }}>
            <Link
              href="/ar/referral-program"
              onClick={close}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "11px 22px", background: "var(--se-teal)", color: "#fff",
                fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 14,
                borderRadius: "var(--radius-md)", textDecoration: "none",
                boxShadow: "0 4px 16px rgba(34,167,168,0.3)",
              }}
            >
              <ArrowLeft size={15} />
              سجل اهتمامك الآن
            </Link>
            <button
              onClick={close}
              style={{
                padding: "11px 18px", background: "none",
                fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 14,
                color: "var(--text-muted)", border: "1.5px solid var(--border-subtle)",
                borderRadius: "var(--radius-md)", cursor: "pointer",
              }}
            >
              لاحقاً
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes se-fade-in { from { opacity: 0 } to { opacity: 1 } }
        @keyframes se-popup-in { from { opacity: 0; transform: translate(-50%, -46%) scale(0.94) } to { opacity: 1; transform: translate(-50%, -50%) scale(1) } }
      `}</style>
    </>
  );
}
