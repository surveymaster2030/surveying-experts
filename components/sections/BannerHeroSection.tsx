"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ExternalLink, ArrowRight, ShieldCheck, MapPin, Users, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    img: "/images/photos/slam-scanning.jpg",
    eyebrow: "360° Surveying Solutions | Saudi Arabia",
    h1Line1: "The Right Equipment.",
    h1Line2: "Complete Field Support.",
    subtitle:
      "Professional surveying technologies from trusted global brands, backed by consultation, maintenance, calibration, and after-sales service across Saudi Arabia.",
    ctaPrimary: { label: "Visit Online Store", href: "https://surveyingexperts-sa.com/collections/all", external: true },
    ctaSecondary: { label: "Request Consultation", href: "/contact", external: false },
  },
  {
    img: "/images/photos/gnss-ertk25.jpg",
    eyebrow: "Professional Equipment Range",
    h1Line1: "GNSS, Total Station,",
    h1Line2: "3D Scanning and More.",
    subtitle:
      "From RTK receivers to laser scanners, drones and GPR — a complete range of professional surveying equipment from globally trusted brands, available across all branches.",
    ctaPrimary: { label: "Browse Equipment", href: "https://surveyingexperts-sa.com/collections/all", external: true },
    ctaSecondary: { label: "Find Your Solution", href: "/solutions", external: false },
  },
  {
    img: "/images/photos/showroom-interior.jpg",
    eyebrow: "Maintenance and Calibration",
    h1Line1: "Keep Your Equipment",
    h1Line2: "Accurate and Field-Ready.",
    subtitle:
      "Certified maintenance, calibration, and after-sales support for your surveying equipment. Package plans available for company fleets across all 5 branches.",
    ctaPrimary: { label: "View Service Plans", href: "/maintenance-calibration", external: false },
    ctaSecondary: { label: "Contact Us", href: "/contact", external: false },
  },
];

const trustBadges = [
  { icon: <Users size={14} />, text: "3,000+ B2B Clients" },
  { icon: <MapPin size={14} />, text: "5 Branches, KSA" },
  { icon: <ShieldCheck size={14} />, text: "ISO 9001:2015" },
  { icon: <Briefcase size={14} />, text: "2,000+ Projects" },
];

export function BannerHeroSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const next = useCallback(() => setActive((a) => (a + 1) % slides.length), []);
  const prev = useCallback(() => setActive((a) => (a - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    setProgress(0);
    const interval = 6000;
    const step = 50;
    const inc = (step / interval) * 100;
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { next(); return 0; }
        return p + inc;
      });
    }, step);
    return () => clearInterval(timer);
  }, [active, paused, next]);

  const slide = slides[active];

  return (
    <section
      style={{ position: "relative", overflow: "hidden", minHeight: 640, display: "flex", flexDirection: "column" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background images (all loaded, only active visible) */}
      {slides.map((s, i) => (
        <div
          key={i}
          aria-hidden
          style={{
            position: "absolute", inset: 0,
            transition: "opacity 0.8s ease",
            opacity: i === active ? 1 : 0,
            zIndex: 0,
          }}
        >
          <img
            src={s.img}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, rgba(13,22,30,0.82) 0%, rgba(13,22,30,0.55) 55%, rgba(13,22,30,0.35) 100%)" }} />
        </div>
      ))}

      {/* Dot grid */}
      <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 1, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.06) 1px, transparent 0)", backgroundSize: "22px 22px" }} />

      {/* Top accent bar */}
      <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, zIndex: 2, background: "linear-gradient(90deg, var(--accent) 0%, var(--se-teal) 60%, var(--accent) 100%)" }} />

      {/* Content */}
      <div className="se-container" style={{ position: "relative", zIndex: 3, flex: 1, display: "flex", alignItems: "center", padding: "120px 0 80px" }}>
        <div style={{ maxWidth: 620 }}>
          {/* Eyebrow */}
          <div
            key={`ey-${active}`}
            style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: "1.25rem", animation: "se-fade-up 0.5s cubic-bezier(0.22,1,0.36,1) both" }}
          >
            <span style={{ display: "inline-block", width: 24, height: 2, background: "var(--se-teal)", borderRadius: 2, flexShrink: 0 }} />
            <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.18em", color: "var(--se-teal)" }}>
              {slide.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h1
            key={`h1-${active}`}
            style={{
              fontWeight: 700, color: "#fff",
              fontSize: "clamp(36px, 5vw, 66px)",
              lineHeight: 1.05, letterSpacing: "-0.025em",
              margin: "0 0 22px",
              animation: "se-fade-up 0.5s cubic-bezier(0.22,1,0.36,1) 60ms both",
            }}
          >
            {slide.h1Line1}
            <br />
            <span style={{ color: "var(--se-teal)" }}>{slide.h1Line2}</span>
          </h1>

          {/* Subtitle */}
          <p
            key={`sub-${active}`}
            style={{
              color: "rgba(255,255,255,0.72)", fontSize: 17, lineHeight: 1.75,
              maxWidth: 520, margin: "0 0 36px",
              animation: "se-fade-up 0.5s cubic-bezier(0.22,1,0.36,1) 120ms both",
            }}
          >
            {slide.subtitle}
          </p>

          {/* CTAs */}
          <div
            key={`cta-${active}`}
            style={{ display: "flex", flexWrap: "wrap" as const, gap: 12, marginBottom: 40, animation: "se-fade-up 0.5s cubic-bezier(0.22,1,0.36,1) 180ms both" }}
          >
            {slide.ctaPrimary.external ? (
              <a href={slide.ctaPrimary.href} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 24px", background: "var(--accent)", color: "var(--se-blue-dark)", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", textDecoration: "none" }}>
                {slide.ctaPrimary.label} <ExternalLink size={15} />
              </a>
            ) : (
              <Link href={slide.ctaPrimary.href}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 24px", background: "var(--se-teal)", color: "#fff", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", textDecoration: "none" }}>
                {slide.ctaPrimary.label} <ArrowRight size={15} />
              </Link>
            )}
            {slide.ctaSecondary.external ? (
              <a href={slide.ctaSecondary.href} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 24px", background: "transparent", color: "#fff", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", border: "1.5px solid rgba(255,255,255,0.35)", textDecoration: "none" }}>
                {slide.ctaSecondary.label}
              </a>
            ) : (
              <Link href={slide.ctaSecondary.href}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 24px", background: "transparent", color: "#fff", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", border: "1.5px solid rgba(255,255,255,0.35)", textDecoration: "none" }}>
                {slide.ctaSecondary.label}
              </Link>
            )}
          </div>

          {/* Trust badges */}
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" as const }}>
            {trustBadges.map((b) => (
              <div key={b.text} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
                <span style={{ color: "var(--se-teal)" }}>{b.icon}</span>
                {b.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom controls */}
      <div style={{ position: "relative", zIndex: 3, display: "flex", alignItems: "center", justifyContent: "center", gap: 24, paddingBottom: 32 }}>
        {/* Prev arrow */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", cursor: "pointer", display: "grid", placeItems: "center", backdropFilter: "blur(8px)" }}
        >
          <ChevronLeft size={18} />
        </button>

        {/* Dots with progress */}
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setActive(i); setProgress(0); }}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === active ? 32 : 8, height: 8,
                borderRadius: 4,
                background: i === active ? "var(--se-teal)" : "rgba(255,255,255,0.3)",
                border: "none", cursor: "pointer", padding: 0,
                transition: "width 0.3s ease, background 0.3s ease",
                overflow: "hidden", position: "relative",
              }}
            >
              {i === active && (
                <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${progress}%`, background: "rgba(255,255,255,0.4)", transition: "none" }} />
              )}
            </button>
          ))}
        </div>

        {/* Next arrow */}
        <button
          onClick={next}
          aria-label="Next slide"
          style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", cursor: "pointer", display: "grid", placeItems: "center", backdropFilter: "blur(8px)" }}
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Slide counter */}
      <div style={{ position: "absolute", bottom: 38, right: "max(24px, calc(50% - 580px))", zIndex: 3, fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em" }}>
        {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>
    </section>
  );
}
