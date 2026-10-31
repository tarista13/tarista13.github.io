import React from "react";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import type { Role } from "../content";

interface ExperienceTimelineProps {
  company: string;
  location: string;
  logo: string;
  roles: Role[];
}

export default function ExperienceTimeline({
  company,
  location,
  logo,
  roles,
}: ExperienceTimelineProps) {
  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <Image
          src={logo}
          alt={`${company} logo`}
          width={126}
          height={24}
          className="h-6 w-auto"
        />
        <span className="font-mono text-xs text-muted">{location}</span>
      </div>

      <ol className="relative ml-1.5 space-y-8 border-l border-line-strong">
        {roles.map((role) => (
          <li key={role.title} className="relative pl-6">
            <span
              aria-hidden="true"
              className="absolute top-1.5 -left-[5px] h-[9px] w-[9px] rounded-full bg-accent ring-4 ring-surface"
            />
            <h3 className="text-lg leading-snug font-semibold text-white">
              {role.title}
            </h3>
            <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
              <span>{company}</span>
              <span aria-hidden="true">·</span>
              <span>{role.type}</span>
              <span aria-hidden="true">·</span>
              <time className="font-mono text-xs">{role.dates}</time>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink/90 sm:text-[15px]">
              {role.summary}
            </p>

            {role.details && (
              <details className="group mt-3">
                <summary className="inline-flex cursor-pointer items-center gap-1 rounded text-sm font-medium text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white">
                  <span className="group-open:hidden">Show more</span>
                  <span className="hidden group-open:inline">Show less</span>
                  <FiChevronDown
                    aria-hidden="true"
                    className="group-open:rotate-180"
                  />
                </summary>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink/90 marker:text-accent sm:text-[15px]">
                  {role.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </details>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
