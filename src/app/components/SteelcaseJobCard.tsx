'use client';

import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

interface JobCardProps {
  company: string;
  location: string;
  image: string;
  alt: string;
  title_01: string;
  jobtype_01: string;
  year_01: string;
  description_01: string;
  title_02: string;
  jobtype_02: string;
  year_02: string;
  description_02: string;
  title_03: string;
  jobtype_03: string;
  year_03: string;
  description_03: string;
}

export default function SteelcaseJobCard({
  company,
  location,
  image,
  alt,
  title_01,
  jobtype_01,
  year_01,
  description_01,
  title_02,
  jobtype_02,
  year_02,
  description_02,
  title_03,
  jobtype_03,
  year_03,
  description_03
}: JobCardProps) {
  return (
    <Card className="bg-transparent text-white p-6 rounded-xl shadow-md">
  <div className="flex items-start gap-6 steelcase-card">
    <div className="relative w-[200px] h-[120px] flex-shrink-0 rounded-lg overflow-hidden">
      <Image
        src={image}
        alt={alt}
        fill
        className="object-contain p-2"
      />
    </div>

    <Card.Body className="p-0 space-y-4">
      <Card.Title className="text-3xl font-semibold mb-2">
        {company} <span className="text-gray-400">| {location}</span>
      </Card.Title>

      <div id="position_03" className="border-l-4 border-[#E0E0E0] pl-4">
        <Card.Title className="text-xl font-semibold mb-1">
          {title_03}
        </Card.Title>
        <Card.Subtitle className="text-lg mb-1 text-gray-300">
          {jobtype_03}
        </Card.Subtitle>
        <Card.Subtitle className="text-sm mb-2 text-gray-400">
          {year_03}
        </Card.Subtitle>
        <Card.Text className="text-sm leading-relaxed text-gray-300">
          {description_03}
        </Card.Text>
      </div>

      <div id="position_02" className="border-l-4 border-[#8B8B8B] pl-4">
        <Card.Title className="text-xl font-semibold mb-1">
          {title_02}
        </Card.Title>
        <Card.Subtitle className="text-lg mb-1 text-gray-300">
          {jobtype_02}
        </Card.Subtitle>
        <Card.Subtitle className="text-sm mb-2 text-gray-400">
          {year_02}
        </Card.Subtitle>
        <Card.Text className="text-sm leading-relaxed text-gray-300">
          {description_02}
        </Card.Text>
      </div>

      <div id="position_01" className="border-l-4 border-[#5F5F5F] pl-4">
        <Card.Title className="text-xl font-semibold mb-1">
          {title_01}
        </Card.Title>
        <Card.Subtitle className="text-lg mb-1 text-gray-300">
          {jobtype_01}
        </Card.Subtitle>
        <Card.Subtitle className="text-sm mb-2 text-gray-400">
          {year_01}
        </Card.Subtitle>
        <Card.Text className="text-sm leading-relaxed text-gray-300">
          {description_01}
        </Card.Text>
      </div>
    </Card.Body>
  </div>
</Card>

  );
}
