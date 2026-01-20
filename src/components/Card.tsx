import type { CSSProperties, ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export default function Card({ children, className = "", style }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-cyan-200/20 bg-white/5 p-6 shadow-[0_25px_70px_-45px_rgba(15,25,60,0.85)] backdrop-blur ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
