interface StatCardProps {
  value: string;
  label: string;
  onDark?: boolean;
}

export function StatCard({ value, label, onDark = false }: StatCardProps) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "2rem 1.5rem",
        borderRadius: "var(--radius-xl)",
        background: onDark ? "rgba(255,255,255,0.06)" : "white",
        border: onDark ? "1px solid rgba(255,255,255,0.12)" : "1px solid var(--border-subtle)",
        boxShadow: onDark ? "none" : "var(--shadow-sm)",
      }}
    >
      <div
        style={{
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 700,
          color: onDark ? "var(--se-yellow)" : "var(--se-blue)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          marginBottom: "0.5rem",
          fontFamily: "var(--font-serif, 'IBM Plex Serif', Georgia, serif)",
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: "var(--text-sm)",
          color: onDark ? "rgba(255,255,255,0.65)" : "var(--text-muted)",
          fontWeight: 500,
        }}
      >
        {label}
      </div>
    </div>
  );
}
