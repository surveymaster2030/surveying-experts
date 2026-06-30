import { type ReactNode, type CSSProperties } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  onDark?: boolean;
  style?: CSSProperties;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  onDark = false,
  style,
}: SectionHeaderProps) {
  return (
    <div
      style={{
        textAlign: align,
        maxWidth: align === "center" ? "680px" : undefined,
        margin: align === "center" ? "0 auto 3.5rem" : "0 0 3rem",
        ...style,
      }}
    >
      {eyebrow && (
        <span
          className="se-eyebrow"
          style={{
            marginBottom: "1rem",
            display: "inline-block",
            background: onDark ? "rgba(246,186,59,0.15)" : "var(--surface-accent-soft)",
            color: onDark ? "var(--se-yellow)" : "var(--se-blue)",
          }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        style={{
          fontSize: "clamp(1.875rem, 4vw, 2.5rem)",
          fontWeight: 700,
          letterSpacing: "var(--tracking-tight)",
          lineHeight: "var(--leading-tight)",
          color: onDark ? "white" : "var(--text-strong)",
          margin: "0 0 1rem",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: "var(--text-md)",
            color: onDark ? "rgba(255,255,255,0.72)" : "var(--text-muted)",
            lineHeight: "var(--leading-relaxed, 1.65)",
            margin: 0,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
