"use client";

import { useEffect, useRef } from "react";

type Direction = "up" | "left" | "right" | "scale";

interface AnimateInProps {
  children: React.ReactNode;
  from?: Direction;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
  threshold?: number;
}

export function AnimateIn({
  children,
  from = "up",
  delay = 0,
  className = "",
  style,
  as: Tag = "div",
  threshold = 0.12,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("se-revealed");
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -24px 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  const dirClass =
    from === "left" ? "from-left" :
    from === "right" ? "from-right" :
    from === "scale" ? "from-scale" : "";

  return (
    <Tag
      ref={ref}
      className={`se-reveal ${dirClass} ${className}`.trim()}
      style={{ transitionDelay: delay > 0 ? `${delay}ms` : undefined, ...style }}
    >
      {children}
    </Tag>
  );
}
