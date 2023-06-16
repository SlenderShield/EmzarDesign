import React from "react";
import { Link } from "react-router-dom";
import Head from "../components/Head";
import images from "../images";

const projects = [
  {
    id: 1,
    title: "Master Bedroom Concepts",
    description:
      "Luxury and Elegance: The aim is to create a sophisticated and upscale ambiance using high-quality materials, plush bedding, and refined furniture pieces.",
    image: images["Master Bedroom"].mb_view,
  },
  {
    id: 2,
    title: "Srikara Enclave Design",
    description:
      "The enclave is designed with careful consideration of the placement and orientation of homes, green spaces, and common areas. ",
    image: images["Srikara_Enclave"].living_room,
  },
  {
    id: 3,
    title: "SNN Clermont Apartment",
    description:
      "The apartment is designed with careful consideration of the placement and orientation of homes, green spaces, and common areas. ",
    image: images["SNN_Clermont_Apartment"].tv_room_front,
  },
  {
    id: 3,
    title: "Study Gaming Room",
    description:
      " The study room is a space that should reflect a person’s character and individuality. ",
    image: images["Study_Gaming_Room"].tv_station,
  },
  // Add more projects as needed
];

const ProjectsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head
        pageTitle="Projects"
        backgroundImage={images["Master Bedroom"].mb_side_wide}
        pageDescription="Portfolio of our projects"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto w-4/5">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`} // Include project ID in the URL
            className="block rounded-lg overflow-hidden shadow-md m-4 bg-slate-600 hover:bg-slate-500 transition duration-300 ease-in-out"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-white">
                <span className="border-b-2 border-slate-400 py-1">
                  {project.title}{" "}
                </span>
              </h2>
              <p className="text-slate-200">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
