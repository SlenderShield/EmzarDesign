import React from "react";

const ProjectsOverview = () => {
  const projectsOverview = [
    {
      title: "Modern Living Room",
      description: "Create a sleek and contemporary living room space.",
      imageUrl: "/images/living-room.jpg",
    },
    {
      title: "Luxurious Bedroom",
      description: "Design a luxurious and comfortable bedroom retreat.",
      imageUrl: "/images/bedroom.jpg",
    },
    {
      title: "Elegant Kitchen",
      description: "Transform your kitchen into a stylish culinary space.",
      imageUrl: "/images/kitchen.jpg",
    },
  ];

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Projects Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projectsOverview.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsOverview;
