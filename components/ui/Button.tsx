import Link from "next/link";
import { type ReactNode, type CSSProperties } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: ReactNode;
  style?: CSSProperties;
}

const sizes: Record<Size, CSSProperties> = {
  sm: { padding: "0.5rem 0.9rem", fontSize: "var(--text-sm)" },
  md: { padding: "0.75rem 1.4rem", fontSize: "var(--text-sm)" },
  lg: { padding: "0.95rem 1.9rem", fontSize: "var(--text-base)" },
};

const variants: Record<Variant, CSSProperties> = {
  primary: {
    background: "var(--se-yellow)",
    color: "var(--se-blue-dark)",
    border: "2px solid transparent",
  },
  secondary: {
    background: "var(--se-blue)",
    color: "white",
    border: "2px solid transparent",
  },
  outline: {
    background: "transparent",
    color: "var(--se-blue)",
    border: "2px solid var(--se-blue)",
  },
  ghost: {
    background: "transparent",
    color: "var(--se-blue)",
    border: "2px solid transparent",
  },
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  fullWidth,
  disabled,
  type = "button",
  onClick,
  children,
  style,
}: ButtonProps) {
  const base: CSSProperties = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    fontFamily: "var(--font-sans)",
    fontWeight: 700,
    lineHeight: 1,
    borderRadius: "var(--radius-md)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "background var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
    whiteSpace: "nowrap",
    textDecoration: "none",
    ...sizes[size],
    ...variants[variant],
    ...style,
  };

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" style={base}>
        {children}
      </a>
    ) : (
      <Link href={href} style={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} style={base}>
      {children}
    </button>
  );
}
