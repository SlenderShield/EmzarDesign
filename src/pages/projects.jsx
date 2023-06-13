import React from "react";
import { Link } from "react-router-dom";
import Head from "../components/Head";

const projects = [
  {
    id: 1,
    title: "Master Bedroom Concepts",
    description:
      "Luxury and Elegance: The aim is to create a sophisticated and upscale ambiance using high-quality materials, plush bedding, and refined furniture pieces.",
    image: "/public/assets/master_bedroom/MBThree.png",
  },
  {
    id: 2,
    title: "Srikara Enclave Design",
    description:
      "The enclave is designed with careful consideration of the placement and orientation of homes, green spaces, and common areas. ",
    image: "/public/assets/srikara_enclave/LivingRoom.png",
  },
  // Add more projects as needed
];

const ProjectsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head
        pageTitle="Projects"
        backgroundImage="/public/assets/master_bedroom/MBTwo.png"
        pageDescription="The projects that will tell you how yourz will be like.."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto w-4/5">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`} // Include project ID in the URL
            className="block rounded-lg overflow-hidden shadow-md m-4"
          >
            <img
              src={project.image}
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
