import type { CSSProperties, ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export default function Card({ children, className = "", style }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-cyan-200/25 bg-white/8 p-6 shadow-[0_30px_80px_-50px_rgba(8,20,40,0.85)] backdrop-blur ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
