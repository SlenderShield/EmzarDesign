import React from "react";
import { Link } from "react-router-dom";
import Head from "../components/Head";
import images from "../images";

const projects = [
  {
    id: 1,
    title: "Master Bedroom Concepts",
    description:
      "The aim is to create a sophisticated and upscale ambiance using high-quality materials, plush bedding, and refined furniture pieces.",
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
    id: 4,
    title: "Study Gaming Room",
    description:
      " The study room is a space that should reflect a person’s character and individuality. ",
    image: images["Study_Gaming_Room"].tv_station,
  },
  // Add more projects as needed
];
const ProjectsPage = () => {
  const commonLinkClasses =
    "block rounded-lg overflow-hidden shadow-md m-4 bg-primary_color hover:bg-cyan-700 transition duration-300 ease-in-out";

  return (
    <div className="container mx-auto px-4 py-8">
      <Head
        pageTitle="Projects"
        backgroundImage={images["Master Bedroom"].mb_side_wide}
        pageDescription="Portfolio of our projects"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mx-auto w-full lg:w-11/12">
        {projects.map(({ id, title, description, image }) => (
          <Link
            key={id}
            to={`/projects/${id}`} // Include project ID in the URL
            className={commonLinkClasses}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-sec_bg_color">
                <span className="py-1 uppercase">{title} </span>
              </h2>
              <p className="text-slate-200">{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;