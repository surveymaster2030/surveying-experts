import React from "react";

interface ImagePlaceholderProps {
  width?: string | number;
  height?: string | number;
  label?: string;
  icon?: React.ReactNode;
  dark?: boolean;
  teal?: boolean;
  style?: React.CSSProperties;
  borderRadius?: string;
  overlay?: React.ReactNode;
  aspectRatio?: string;
  src?: string;
  alt?: string;
  objectPosition?: string;
}

export function ImagePlaceholder({
  width = "100%",
  height,
  label,
  icon,
  dark = false,
  teal = false,
  style,
  borderRadius = "var(--radius-xl)",
  overlay,
  aspectRatio,
  src,
  alt = "",
  objectPosition = "center",
}: ImagePlaceholderProps) {
  const bg = teal
    ? "linear-gradient(135deg, #1a8b8c 0%, #0d5e5f 100%)"
    : dark
    ? "linear-gradient(135deg, var(--se-blue) 0%, var(--se-blue-darker) 100%)"
    : "linear-gradient(135deg, var(--se-gray-100) 0%, var(--se-gray-200) 60%, var(--se-gray-100) 100%)";

  const patternColor = dark || teal
    ? "rgba(34,167,168,0.1)"
    : "rgba(53,80,97,0.07)";

  const iconBg = dark || teal ? "rgba(34,167,168,0.2)" : "rgba(53,80,97,0.1)";
  const iconColor = dark || teal ? "var(--se-teal)" : "var(--se-blue)";
  const labelColor = dark || teal ? "rgba(255,255,255,0.35)" : "var(--se-gray-400)";

  return (
    <div
      className="se-img-ph"
      style={{
        width,
        height: aspectRatio ? undefined : height,
        aspectRatio,
        borderRadius,
        background: bg,
        backgroundSize: "200% 200%",
        flexShrink: 0,
        ...style,
      }}
    >
      {/* Real image (when provided) */}
      {src && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition,
            borderRadius,
          }}
        />
      )}
      {/* Grid pattern (placeholder only) */}
      {!src && (
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(${patternColor} 1px, transparent 1px), linear-gradient(90deg, ${patternColor} 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
            borderRadius,
          }}
        />
      )}
      {/* Content (placeholder only) */}
      {!src && (
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: 24 }}>
        {icon && (
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "var(--radius-lg)",
              background: iconBg,
              color: iconColor,
              display: "grid",
              placeItems: "center",
              margin: "0 auto 12px",
            }}
          >
            {icon}
          </div>
        )}
        {label && (
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: labelColor,
            }}
          >
            {label}
          </div>
        )}
      </div>
      )}
      {/* Optional overlay (e.g. info cards at bottom) */}
      {overlay && (
        <div style={{ position: "absolute", inset: 0, zIndex: 2, borderRadius }}>
          {overlay}
        </div>
      )}
    </div>
  );
}
