import React, { useState } from "react";
import Head from "../components/Head";
const projects = [
  {
    id: 1,
    title: "Project 1",
    images: [
      "image1.jpg",
      "image2.jpg",
      "image3.jpg",
      "image4.jpg",
      "image5.jpg",
    ],
  },
  {
    id: 2,
    title: "Project 2",
    images: ["image6.jpg", "image7.jpg", "image8.jpg"],
  },
  // Add more projects as needed
];

const GalleryPage = () => {
  const [selectedProject, setSelectedProject] = useState("all");

  const handleProjectChange = (project) => {
    setSelectedProject(project);
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

  return (
    <div className="container mx-auto px-4 py-8">
      <Head
        pageTitle="Gallery"
        pageDescription="Images that give about our overview"
        backgroundImage="/public/assets/srikara_enclave/dining.png"
      />

      <div className="mx-auto w-4/5">
        <div className="flex justify-center mb-8">
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
            <h2 className="text-xl font-bold mb-4">{filteredProject.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="Gallery Image"
                  className="w-full h-auto object-cover"
                />
              ))}
            </div>
          </>
        )}

        {!filteredProject && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Gallery Image"
                className="w-full h-auto object-cover"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
