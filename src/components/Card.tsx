import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-amber-100/80 bg-white/80 p-6 shadow-[0_20px_60px_-40px_rgba(31,24,16,0.6)] backdrop-blur ${className}`.trim()}
    >
      {children}
    </div>
  );
}
