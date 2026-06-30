"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight, Gift } from "lucide-react";

export function ReferralPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("referral_popup_shown")) return;
    const t = setTimeout(() => setVisible(true), 10000);
    return () => clearTimeout(t);
  }, []);

  function close() {
    setVisible(false);
    sessionStorage.setItem("referral_popup_shown", "1");
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
      }}>
        {/* Accent bar */}
        <div style={{ height: 4, background: "linear-gradient(90deg, var(--se-teal) 0%, var(--accent) 100%)" }} />

        {/* Close button */}
        <button
          onClick={close}
          aria-label="Close"
          style={{
            position: "absolute", top: 16, right: 16,
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
            fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase",
            padding: "0.35em 0.9em", borderRadius: "var(--radius-pill)", marginBottom: 16,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor", display: "inline-block" }} />
            Coming Soon
          </span>

          {/* Icon */}
          <div style={{
            width: 52, height: 52, borderRadius: "var(--radius-md)",
            background: "var(--se-teal-soft)", color: "var(--se-teal)",
            display: "grid", placeItems: "center", marginBottom: 16,
          }}>
            <Gift size={24} />
          </div>

          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22,
            color: "var(--text-strong)", lineHeight: 1.1,
            letterSpacing: "-0.02em", margin: "0 0 12px",
          }}>
            Turn Your Professional Network Into Rewards!
          </h2>
          <p style={{
            fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--text-muted)",
            lineHeight: 1.7, margin: "0 0 24px",
          }}>
            Join the waitlist for Referral Experts and earn cash rewards when you refer new clients to Surveying Experts.
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link
              href="/referral-program"
              onClick={close}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "11px 22px", background: "var(--se-teal)", color: "#fff",
                fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 14,
                borderRadius: "var(--radius-md)", textDecoration: "none",
                boxShadow: "0 4px 16px rgba(34,167,168,0.3)",
              }}
            >
              Join the Waitlist <ArrowRight size={15} />
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
              Maybe Later
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
