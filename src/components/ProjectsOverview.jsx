import React from "react";

const ProjectOverview = () => {
  const projects = [
    {
      id: 1,
      title: "Residential Interior Design",
      description: "Create personalized and functional living spaces.",
      image: "/assets/master_bedroom/main_bedroom.png",
      attributes: ["Attribute 1", "Attribute 2", "Attribute 3"],
    },
    {
      id: 2,
      title: "Commercial Interior Design",
      description: "Enhance productivity and professionalism in workspaces.",
      image: "/images/commercial.jpg",
      attributes: ["Attribute 1", "Attribute 2", "Attribute 3"],
    },
    // Add more projects as needed
  ];

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Our Projects</h2>
      {projects.map((project) => (
        <div
          key={project.id}
          className="flex flex-col md:flex-row bg-gray-100 p-4 mb-8"
        >
          <div className="w-full md:w-1/2">
            <div className="border-4 rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-4 mt-4 md:mt-0">
            <h2 className="text-2xl font-bold text-black">{project.title}</h2>
            <p className="text-gray-700 mt-2">{project.description}</p>
            <ul className="list-disc mt-4 pl-4">
              {project.attributes.map((attribute, index) => (
                <li
                  key={index}
                  className="text-gray-700 flex items-center mb-2"
                >
                  <svg
                    className="w-4 h-4 mr-2 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 17.243l-6.364-6.364a1 1 0 111.414-1.414L9 14.414l9.95-9.95a1 1 0 111.414 1.414L9 17.243z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {attribute}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectOverview;
