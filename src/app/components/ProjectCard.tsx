import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
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
        <Card className="bg-transparent text-white p-4 project-card">
            <div id="cardImage" className="flex items-center gap-6">
                <div className="relative w-[200px] h-[200px] flex-shrink-0 self-center">
                <Image
                    src={image}
                    alt={alt}
                    fill
                    className="object-contain rounded-md"
                />
                </div>
                <Card.Body className="p-0">
                <Card.Title className="text-xl font-semibold">{title}</Card.Title>
                {/* <div className="flex items-center gap-2 mb-2 text-sm">
                  <span className="text-gray-300 font-medium">{projectType}</span>
                  <span className="text-gray-500">|</span>
                  <span className="text-[#b7b3b3]">{techStack}</span>
                </div> */}
                <div className="flex flex-wrap gap-2 mb-2 text-xs">
                  <span className="bg-gray-700 text-white px-2 py-1 rounded-full">{projectType}</span>
                  <span className="bg-[#222] text-white px-2 py-1 rounded-full">{techStack}</span>
                </div>

                {/* <Card.Text>{projectType}</Card.Text>
                <Card.Text>{techStack}</Card.Text> */}
                <Card.Text className="text-sm leading-relaxed">
                    {description}
                </Card.Text>
                </Card.Body>
            </div>
        </Card>
    </a>
  );
}
