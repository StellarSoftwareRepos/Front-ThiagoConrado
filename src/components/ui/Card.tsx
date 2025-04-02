import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-primary transition-all duration-200 shadow-modern hover-lift ${className}`}
    >
      {children}
    </div>
  );
}
