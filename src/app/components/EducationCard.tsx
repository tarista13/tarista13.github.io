import React from "react";
import Image from "next/image";
import Card from "react-bootstrap/Card";

interface EducationCardProps {
  image: string;
  alt: string;
  school: string;
  major: string;
  relevantCourses: string;
}

export default function EducationCard({
  image,
  alt,
  school,
  major,
  relevantCourses,
}: EducationCardProps) {
  return (
    <Card id="entireCard" className="mt-4 bg-transparent p-3 text-white sm:p-4">
      <div id="cardImage" className="flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:gap-6 education-card">
        <div className="relative h-[115px] w-[115px] flex-shrink-0 self-center sm:h-[180px] sm:w-[180px] lg:h-[200px] lg:w-[200px]">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-contain rounded-md"
          />
        </div>
        <Card.Body id="cardDetails" className="w-full p-0 text-left">
          <Card.Title className="text-xl font-semibold sm:text-2xl">{school}</Card.Title>
          <Card.Subtitle className="mb-2 text-sm text-gray-400 sm:text-base">{major}</Card.Subtitle>
          <Card.Text className="text-sm leading-relaxed text-gray-200 sm:text-base">
            {relevantCourses}
          </Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
}
