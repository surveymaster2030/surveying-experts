import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { type ReactNode } from "react";

interface CTA {
  label: string;
  href: string;
  variant?: "primary" | "outline-white";
  external?: boolean;
}

interface CTABannerProps {
  title: string;
  body?: string;
  ctas: CTA[];
  eyebrow?: string;
  children?: ReactNode;
}

export function CTABanner({ title, body, ctas, eyebrow, children }: CTABannerProps) {
  return (
    <section
      style={{
        background: "var(--se-blue-dark)",
        position: "relative",
        overflow: "hidden",
        padding: "5rem 0",
      }}
    >
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(246,186,59,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(246,186,59,0.05) 1px, transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />

      <div className="se-container" style={{ position: "relative", textAlign: "center" }}>
        {eyebrow && (
          <span
            style={{
              display: "inline-block",
              fontSize: "var(--text-xs)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: "var(--se-yellow)",
              background: "rgba(246,186,59,0.12)",
              padding: "0.35em 0.85em",
              borderRadius: "999px",
              marginBottom: "1.25rem",
            }}
          >
            {eyebrow}
          </span>
        )}
        <h2
          style={{
            fontSize: "clamp(1.875rem, 4vw, 2.75rem)",
            fontWeight: 700,
            color: "white",
            letterSpacing: "var(--tracking-tight)",
            lineHeight: "var(--leading-tight)",
            marginBottom: body ? "1rem" : "2rem",
          }}
        >
          {title}
        </h2>
        {body && (
          <p
            style={{
              fontSize: "var(--text-md)",
              color: "rgba(255,255,255,0.72)",
              maxWidth: "600px",
              margin: "0 auto 2.5rem",
              lineHeight: 1.65,
            }}
          >
            {body}
          </p>
        )}
        {children}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
          {ctas.map((cta, i) => {
            const isOutline = cta.variant === "outline-white";
            const buttonStyle = {
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.875rem 1.75rem",
              fontSize: "var(--text-sm)",
              fontWeight: 700,
              borderRadius: "var(--radius-md)",
              transition: "all var(--dur-base) var(--ease-out)",
              cursor: "pointer",
              textDecoration: "none",
              background: isOutline ? "transparent" : "var(--se-yellow)",
              color: isOutline ? "white" : "var(--se-blue-dark)",
              border: isOutline ? "2px solid rgba(255,255,255,0.35)" : "2px solid transparent",
            };

            if (cta.external) {
              return (
                <a key={i} href={cta.href} target="_blank" rel="noopener noreferrer" style={buttonStyle}>
                  {cta.label}
                  <ExternalLink size={14} />
                </a>
              );
            }

            return (
              <Link key={i} href={cta.href} style={buttonStyle}>
                {cta.label}
                <ArrowRight size={14} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
