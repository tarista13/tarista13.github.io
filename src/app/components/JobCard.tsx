import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

interface JobCardProps {
  title: string;
  company: string;
  image: string;
  alt: string;
  year: string;
  description: string;
}

export default function JobCard({
  title,
  company,
  image,
  alt,
  year,
  description,
}: JobCardProps) {
  return (
    <Card className="bg-transparent text-white p-4">
      <div className="flex items-center gap-6">
        <div className="relative w-[200px] h-[120px] flex-shrink-0 self-center">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-contain rounded-md"
          />
        </div>
        <Card.Body className="p-0">
          <Card.Title className="text-lg font-semibold mb-1">
            {title} | {company}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-gray-400">{year}</Card.Subtitle>
          <Card.Text className="text-sm leading-relaxed">
            {description}
          </Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
}
