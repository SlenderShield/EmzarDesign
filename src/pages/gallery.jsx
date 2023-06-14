import React, { useState, useEffect } from "react";
import Head from "../components/Head";
import images from "../images";
const projects = [
  {
    id: 1,
    title: "Master Bedroom",
    images: [
      images["Master Bedroom"].mb_side_view,
      images["Master Bedroom"].mb_side_wide,
      images["Master Bedroom"].mb_tv,
      images["Master Bedroom"].mb_tv_side,
      images["Master Bedroom"].mb_view,
    ],
  },
  {
    id: 2,
    title: "SNN Clermont Apartment",
    images: [
      images["SNN_Clermont_Apartment"].dining,
      images["SNN_Clermont_Apartment"].foyer,
      images["SNN_Clermont_Apartment"].kitchen_front,
      images["SNN_Clermont_Apartment"].kitchen_side,
      images["SNN_Clermont_Apartment"].kitchen_side_two,
      images["SNN_Clermont_Apartment"].tv_room_front,
      images["SNN_Clermont_Apartment"].tv_room_side,
    ],
  },
  {
    id: 3,
    title: "Srikara Enclave",
    images: [
      images["Srikara_Enclave"].Bedroom_sideview,
      images["Srikara_Enclave"].TV_room,
      images["Srikara_Enclave"].dining_area,
      images["Srikara_Enclave"].dining_view,
      images["Srikara_Enclave"].hall,
      images["Srikara_Enclave"].hall_side,
      images["Srikara_Enclave"].living_room,
      images["Srikara_Enclave"].tv_front,
      images["Srikara_Enclave"].tv_room_side,
    ],
  },
  {
    id: 4,
    title: "Study Gaming Room",
    images: [
      images["Study_Gaming_Room"].gaming_view,
      images["Study_Gaming_Room"].sofa_set,
      images["Study_Gaming_Room"].tv_station,
      images["Study_Gaming_Room"].wide_sofa,
      images["Study_Gaming_Room"].wide_view,
    ],
  },
];
const GalleryPage = () => {
  const [selectedProject, setSelectedProject] = useState("all");
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleProjectChange = (project) => {
    setSelectedProject(project);
  };

  const handleImageClick = (image) => {
    setEnlargedImage(image);
  };

  const handleImageClose = () => {
    setEnlargedImage(null);
  };

  const filteredProject =
    selectedProject === "all"
      ? null
      : projects.find((project) => project.id === parseInt(selectedProject));

  const filteredImages =
    selectedProject === "all"
      ? projects.flatMap((project) => project.images)
      : filteredProject?.images || [];

  const projectOptions = [
    { id: "all", title: "All Projects" },
    ...projects.map((project) => ({
      id: project.id.toString(),
      title: project.title,
    })),
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (enlargedImage && !event.target.closest(".enlarged-image")) {
        handleImageClose();
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [enlargedImage]);

  return (
    <div className="container mx-auto px-4 py-8">
      <Head
        pageTitle="Gallery"
        pageDescription="Images that give about our overview"
        backgroundImage={images["Srikara_Enclave"].dining_view}
      />

      <div className="mx-auto w-4/5">
        <div className="my-8 text-center">
          <select
            value={selectedProject}
            onChange={(e) => handleProjectChange(e.target.value)}
            className="px-4 py-2 border rounded-md"
          >
            {projectOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.title}
              </option>
            ))}
          </select>
        </div>

        {filteredProject && (
          <>
            <h2 className="text-xl font-bold mb-4">
              <span className="border-b-2 border-blue-400 pb-1">
                {filteredProject.title}
                {" :"}
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden"
                  style={{ aspectRatio: "1/1" }}
                >
                  <img
                    src={image}
                    alt="Gallery Image"
                    className="w-full h-full object-cover cursor-pointer transform hover:scale-110 transition-transform duration-300"
                    onClick={() => handleImageClick(image)}
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {!filteredProject && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden"
                style={{ aspectRatio: "1/1" }}
              >
                <img
                  src={image}
                  alt="Gallery Image"
                  className="w-full h-full object-cover cursor-pointer transform hover:scale-110 transition-transform duration-300"
                  onClick={() => handleImageClick(image)}
                />
              </div>
            ))}
          </div>
        )}

        {enlargedImage && (
          <div
            className="fixed top-0 left-0 -bottom-44 right-0 m-auto w-2/3 h-2/3 flex items-center justify-center bg-black bg-opacity-75"
            onClick={handleImageClose}
          >
            <img
              src={enlargedImage}
              alt="Enlarged Image"
              className="max-h-full max-w-full"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
