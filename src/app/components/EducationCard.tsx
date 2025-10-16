import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
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
    <Card className="bg-transparent text-white p-4">
      <div className="flex items-center gap-6 education-card">
        <div className="relative w-[200px] h-[200px] flex-shrink-0 self-center">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-contain rounded-md"
          />
        </div>
        <Card.Body className="p-0">
          <Card.Title className="text-xl font-semibold">{school}</Card.Title>
          <Card.Subtitle className="mb-2 text-gray-400">{major}</Card.Subtitle>
          <Card.Text className="text-sm leading-relaxed">
            {relevantCourses}
          </Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
}
