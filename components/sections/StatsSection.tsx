"use client";

import { Calendar, Users, Briefcase, MapPin } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";
import { AnimateIn } from "@/components/ui/AnimateIn";

const stats = [
  { value: 7,    suffix: "+",   label: "Years of Experience",        icon: <Calendar size={20} /> },
  { value: 3000, suffix: "+",   label: "B2B Clients Served",         icon: <Users size={20} />,    separator: true },
  { value: 2000, suffix: "+",   label: "Construction Projects",       icon: <Briefcase size={20} />, separator: true },
  { value: 5,    suffix: "",    label: "Branches Across KSA",        icon: <MapPin size={20} /> },
];

export function StatsSection() {
  return (
    <section
      style={{
        background: "var(--se-blue-darker)",
        padding: "72px 0",
        borderTop: "1px solid rgba(34,167,168,0.15)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.07) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: "10%",
          right: "10%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, var(--se-teal), transparent)",
          opacity: 0.5,
        }}
      />
      <div className="se-container" style={{ position: "relative" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }}
          className="kit-stats"
        >
          {stats.map((s, i) => (
            <AnimateIn key={s.label} delay={i * 80} from="up">
              <div
                style={{
                  textAlign: "center",
                  padding: "0 24px",
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none",
                }}
              >
                <div
                  className="se-glow-teal se-pulse-teal"
                  style={{
                    width: 48, height: 48,
                    borderRadius: "var(--radius-md)",
                    background: "var(--se-teal)",
                    color: "#fff",
                    display: "grid",
                    placeItems: "center",
                    margin: "0 auto 18px",
                    animationDelay: `${i * 0.4}s`,
                  }}
                >
                  {s.icon}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 800,
                    fontSize: "clamp(40px,4vw,56px)",
                    color: "var(--accent)",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                  }}
                >
                  <CountUp to={s.value} suffix={s.suffix} separator={s.separator} />
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    color: "rgba(255,255,255,0.55)",
                    marginTop: 10,
                    lineHeight: 1.45,
                  }}
                >
                  {s.label}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
