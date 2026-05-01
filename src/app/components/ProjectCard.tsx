import React from "react";
import Image from "next/image";
import Card from "react-bootstrap/Card";

interface ProjectCardProps {
  link: string;
  image: string;
  alt: string;
  title: string;
  projectType: string;
  techStack: string;
  description: string;
}

export default function ProjectCard({
  link,
  image,
  alt,
  title,
  projectType,
  techStack,
  description,
}: ProjectCardProps) {
  return (
    <a href={link} style={{textDecoration: "None"}} target="_blank">
        <Card className="mt-4 bg-transparent p-3 text-white transition-transform duration-200 hover:-translate-y-1 project-card sm:p-4">
            <div id="cardImage" className="flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:gap-6">
                <div className="relative h-[160px] w-full max-w-[280px] flex-shrink-0 self-center overflow-hidden rounded-lg sm:h-[180px] sm:w-[180px] sm:max-w-none lg:h-[200px] lg:w-[200px]">
                <Image
                    src={image}
                    alt={alt}
                    fill
                    className="object-contain rounded-md"
                />
                </div>
                <Card.Body className="w-full p-0 text-left">
                <Card.Title className="text-xl font-semibold sm:text-2xl">{title}</Card.Title>
                {/* <div className="flex items-center gap-2 mb-2 text-sm">
                  <span className="text-gray-300 font-medium">{projectType}</span>
                  <span className="text-gray-500">|</span>
                  <span className="text-[#b7b3b3]">{techStack}</span>
                </div> */}
                <div className="mb-2 flex flex-wrap justify-start gap-2 text-xs">
                  <span className="bg-gray-700 text-white px-2 py-1 rounded-full">{projectType}</span>
                  <span className="bg-[#222] text-white px-2 py-1 rounded-full">{techStack}</span>
                </div>

                {/* <Card.Text>{projectType}</Card.Text>
                <Card.Text>{techStack}</Card.Text> */}
                <Card.Text className="text-sm leading-relaxed text-gray-200 sm:text-base">
                    {description}
                </Card.Text>
                </Card.Body>
            </div>
        </Card>
    </a>
  );
}
