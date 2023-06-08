import React from "react";
import { Link } from "react-router-dom";
import Head from "../components/Head";

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

const ProjectsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head pageTitle="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`} // Include project ID in the URL
            className="block rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
