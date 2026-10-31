import React from "react";
import Image from "next/image";
import Tag from "./Tag";

interface EducationCardProps {
  image: string;
  school: string;
  degree: string;
  coursework: string[];
}

export default function EducationCard({
  image,
  school,
  degree,
  coursework,
}: EducationCardProps) {
  return (
    <div>
      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt="Calvin University Logo"
          width={56}
          height={56}
          className="h-14 w-14 flex-shrink-0 rounded-xl bg-white/[0.04] p-1.5"
        />
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-white">{school}</h3>
          <p className="text-sm text-muted">{degree}</p>
        </div>
      </div>
      <p className="mt-5 mb-2 text-xs font-medium text-muted">Relevant coursework</p>
      <ul className="flex flex-wrap gap-1.5">
        {coursework.map((course) => (
          <Tag key={course}>{course}</Tag>
        ))}
      </ul>
    </div>
  );
}
