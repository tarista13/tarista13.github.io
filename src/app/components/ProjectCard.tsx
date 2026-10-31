import React from "react";
import Image from "next/image";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import Tag from "./Tag";
import type { Project } from "../content";

function initials(title: string) {
  return title
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
}

export default function ProjectCard({ project }: { project: Project }) {
  const { title, type, techStack, description, image, imageAlt, imageFit, links } =
    project;
  // With a single link the whole card can be the click target; with several, each link stands alone.
  const stretchLink = links.length === 1;

  return (
    <article
      className={`group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-line bg-surface transition duration-200 hover:border-white/25 motion-safe:hover:-translate-y-0.5 ${
        stretchLink ? "focus-within:border-white/40" : ""
      }`}
    >
      <div className="relative aspect-video border-b border-line bg-black">
        {image ? (
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
            className={imageFit === "contain" ? "object-contain" : "object-cover object-top"}
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-full items-center justify-center bg-surface-raised"
          >
            <span className="font-mono text-4xl font-semibold text-accent">
              {initials(title)}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-xs tracking-wider text-muted uppercase">
          {type}
        </p>
        <h3 className="mt-1 text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tech stack">
          {techStack.map((tech) => (
            <Tag key={tech} accent>
              {tech}
            </Tag>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} – ${link.label === "Live" ? "live site" : "GitHub repository"} (opens in new tab)`}
              className={`inline-flex items-center gap-1.5 rounded-lg border border-line-strong px-3 py-1.5 text-sm font-medium text-ink transition-colors group-hover:border-white/60 group-hover:text-white ${
                stretchLink ? "after:absolute after:inset-0 after:content-['']" : ""
              }`}
            >
              {link.label === "GitHub" ? (
                <FiGithub aria-hidden="true" />
              ) : null}
              {link.label}
              <FiArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
