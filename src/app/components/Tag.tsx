import React from "react";

interface TagProps {
  children: React.ReactNode;
  accent?: boolean;
}

export default function Tag({ children, accent = false }: TagProps) {
  const tone = accent
    ? "border-line-strong bg-white/[0.07] text-ink"
    : "border-line bg-white/[0.03] text-muted";

  return (
    <li
      className={`max-w-full rounded-md border px-2 py-0.5 font-mono text-xs leading-5 [overflow-wrap:anywhere] ${tone}`}
    >
      {children}
    </li>
  );
}
