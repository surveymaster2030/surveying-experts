"use client";

interface MarqueeProps {
  items: React.ReactNode[];
  reverse?: boolean;
  speed?: number;
  dark?: boolean;
  gap?: number;
}

export function Marquee({ items, reverse = false, speed = 48, dark = false, gap = 0 }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className={`se-ticker-wrap${dark ? " dark" : ""}`}>
      <div
        className={reverse ? "se-ticker-track-rev" : "se-ticker-track"}
        style={{ animationDuration: `${speed}s`, gap }}
      >
        {doubled.map((item, i) => (
          <div key={i} style={{ flexShrink: 0 }}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
