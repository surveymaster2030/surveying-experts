"use client";

import { useState } from "react";
import { X, Download } from "lucide-react";

function IconWhatsApp() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

const labels = {
  en: { whatsapp: "WhatsApp", profile: "Company Profile", profileUrl: "https://drive.google.com/file/d/1Bgu4lldhOTQgDpDXV2MpO2--AG5OEvOK/view" },
  ar: { whatsapp: "واتساب",   profile: "ملف الشركة",      profileUrl: "https://drive.google.com/file/d/1pw2rTyozJbSaSbt8_G28zD81Qzdag7_a/view" },
};

export function FloatingCTA({ lang = "en" }: { lang?: "en" | "ar" }) {
  const [open, setOpen] = useState(true);
  const t = labels[lang];

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        aria-label="Open quick actions"
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 999,
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: "var(--se-blue-dark)",
          color: "#fff",
          border: "2px solid var(--se-teal)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
        }}
      >
        <IconWhatsApp />
      </button>
    );
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        alignItems: "flex-end",
      }}
    >
      {/* Dismiss button */}
      <button
        onClick={() => setOpen(false)}
        aria-label="Close"
        style={{
          background: "rgba(0,0,0,0.45)",
          border: "none",
          color: "rgba(255,255,255,0.7)",
          borderRadius: "50%",
          width: 24,
          height: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          alignSelf: "flex-end",
        }}
      >
        <X size={13} />
      </button>

      {/* WhatsApp */}
      <a
        href="https://wa.me/966540646245"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "11px 16px",
          background: "#25D366",
          color: "#fff",
          borderRadius: 50,
          textDecoration: "none",
          fontFamily: "var(--font-sans)",
          fontWeight: 700,
          fontSize: 14,
          boxShadow: "0 4px 20px rgba(37,211,102,0.45)",
          whiteSpace: "nowrap",
          transition: "transform 0.15s, box-shadow 0.15s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(37,211,102,0.55)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(37,211,102,0.45)";
        }}
      >
        <IconWhatsApp />
        {t.whatsapp}
      </a>

      {/* Company Profile */}
      <a
        href={t.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "11px 16px",
          background: "var(--se-blue-dark)",
          color: "#fff",
          borderRadius: 50,
          textDecoration: "none",
          fontFamily: "var(--font-sans)",
          fontWeight: 700,
          fontSize: 14,
          border: "1.5px solid rgba(34,167,168,0.4)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          whiteSpace: "nowrap",
          transition: "transform 0.15s, border-color 0.15s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
          (e.currentTarget as HTMLElement).style.borderColor = "var(--se-teal)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "";
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(34,167,168,0.4)";
        }}
      >
        <Download size={16} />
        {t.profile}
      </a>
    </div>
  );
}
