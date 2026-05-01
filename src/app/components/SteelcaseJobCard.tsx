'use client';

import React from "react";
import Image from "next/image";
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
    <Card className="mb-[10px] rounded-xl bg-transparent p-4 text-white shadow-md sm:p-6">
    <div id="cardImage" className="flex flex-col items-center gap-6 steelcase-card sm:flex-row sm:items-start">
      <div className="relative h-[100px] w-full max-w-[260px] flex-shrink-0 overflow-hidden rounded-lg sm:h-[110px] sm:w-[180px] sm:max-w-none lg:h-[120px] lg:w-[200px]">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-contain p-2"
        />
      </div>

      <Card.Body className="w-full space-y-4 p-0 text-left">
        <Card.Title className="mb-2 text-2xl font-semibold sm:text-3xl">
          {company} <span className="block text-lg text-gray-400 sm:inline sm:text-inherit">| {location}</span>
        </Card.Title>

        <div id="position_03" className="border-l-4 border-[#E0E0E0] pl-4">
          <Card.Title className="mb-1 text-lg font-semibold sm:text-xl">
            {title_03}
          </Card.Title>
          <Card.Subtitle className="mb-1 text-base text-gray-300 sm:text-lg">
            {jobtype_03}
          </Card.Subtitle>
          <Card.Subtitle className="text-sm mb-2 text-gray-400">
            {year_03}
          </Card.Subtitle>
          <Card.Text className="text-sm leading-relaxed text-gray-300 sm:text-base">
            {description_03}
          </Card.Text>
        </div>

        <div id="position_02" className="border-l-4 border-[#8B8B8B] pl-4">
          <Card.Title className="mb-1 text-lg font-semibold sm:text-xl">
            {title_02}
          </Card.Title>
          <Card.Subtitle className="mb-1 text-base text-gray-300 sm:text-lg">
            {jobtype_02}
          </Card.Subtitle>
          <Card.Subtitle className="text-sm mb-2 text-gray-400">
            {year_02}
          </Card.Subtitle>
          <Card.Text className="text-sm leading-relaxed text-gray-300 sm:text-base">
            {description_02}
          </Card.Text>
        </div>

        <div id="position_01" className="border-l-4 border-[#5F5F5F] pl-4">
          <Card.Title className="mb-1 text-lg font-semibold sm:text-xl">
            {title_01}
          </Card.Title>
          <Card.Subtitle className="mb-1 text-base text-gray-300 sm:text-lg">
            {jobtype_01}
          </Card.Subtitle>
          <Card.Subtitle className="text-sm mb-2 text-gray-400">
            {year_01}
          </Card.Subtitle>
          <Card.Text className="text-sm leading-relaxed text-gray-300 sm:text-base">
            {description_01}
          </Card.Text>
        </div>
      </Card.Body>
    </div>
  </Card>

  );
}
