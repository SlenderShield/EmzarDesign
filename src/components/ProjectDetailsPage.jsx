import React from "react";
import { useParams } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "This is the description of Project 1",
    images: ["image1.jpg", "image2.jpg", "image3.jpg"],
  },
  {
    id: 2,
    title: "Project 2",
    description: "This is the description of Project 2",
    images: ["image4.jpg", "image5.jpg", "image6.jpg"],
  },
  // Add more projects as needed
];

const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === parseInt(projectId));

  if (!project) {
    return <p>Project not found.</p>;
  }

  const { title, description, images } = project;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="carousel">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={title}
              className="w-full h-auto object-cover"
            />
          ))}
        </div>

        <div>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
