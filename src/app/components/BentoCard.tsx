import React from "react";

interface BentoCardProps {
  id?: string;
  label?: string;
  className?: string;
  children: React.ReactNode;
}

export default function BentoCard({
  id,
  label,
  className = "",
  children,
}: BentoCardProps) {
  const headingId = id && label ? `${id}-heading` : undefined;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`min-w-0 scroll-mt-24 rounded-2xl border border-line bg-surface p-5 transition-colors duration-200 hover:border-line-strong sm:p-6 ${className}`}
    >
      {label && (
        <h2
          id={headingId}
          className="mb-4 flex items-center gap-2 font-mono text-xs font-medium tracking-[0.18em] text-muted uppercase"
        >
          <span aria-hidden="true" className="h-2 w-2 rounded-[2px] bg-accent" />
          {label}
        </h2>
      )}
      {children}
    </section>
  );
}
