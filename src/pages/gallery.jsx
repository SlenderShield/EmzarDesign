import React, { useState, useEffect, useRef } from "react";
import Head from "../components/Head";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
  {
    id: 5,
    title: "Coffee Shop",
    images: [
      images["Coffee_Shop"].five,
      images["Coffee_Shop"].four,
      images["Coffee_Shop"].one,
      images["Coffee_Shop"].three,
      images["Coffee_Shop"].two,
      images["Coffee_Shop"].six,
    ],
  },
  {
    id: 6,
    title: "SNN Real Time",
    images: [
      images["SNN"].bedroom,
      images["SNN"].tv_area,
      images["SNN"].hall_way,
      images["SNN"].kitchen,
      images["SNN"].kitchen_main,
      images["SNN"].kitchen_two,
      images["SNN"].closet,
    ],
  },
];
const GalleryPage = () => {
  const [selectedProject, setSelectedProject] = useState("all");
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const carouselRef = useRef(null);

  const handleProjectChange = (project) => {
    setSelectedProject(project);
    setActiveImageIndex(null);
  };

  const handleImageClick = (index) => {
    setActiveImageIndex(index);
  };

  const handleScreenClick = (event) => {
    // Check if the click event originated from the carousel or its children
    const clickedOnCarousel = carouselRef.current;

    if (!clickedOnCarousel) {
      setActiveImageIndex(null);
    }
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
    document.addEventListener("click", handleScreenClick);
    return () => {
      document.removeEventListener("click", handleScreenClick);
    };
  }, []);

  const isCarouselActive =
    selectedProject !== "all" && activeImageIndex !== null;

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  return (
    <div
      className={`container mx-auto px-4 py-8 ${
        isCarouselActive ? "carousel-active" : ""
      }`}
    >
      <Head
        pageTitle="Gallery"
        pageDescription="Images that give an overview of our projects"
        backgroundImage={images["Srikara_Enclave"].dining_view}
      />

      <div className="mx-auto w-4/5">
        <div className="my-4 text-right">
          <select
            value={selectedProject}
            onChange={(e) => handleProjectChange(e.target.value)}
            className="px-2 py-1 border rounded-md bg-background_color"
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
              <span className="border-b-2 border-secondary_color pb-1">
                {filteredProject.title}
                {" :"}
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden"
                  style={{ aspectRatio: "1/1", cursor: "pointer" }}
                  onClick={() => !isMobile && handleImageClick(index)} // Add the check for isMobile
                >
                  <img
                    src={image}
                    alt="Gallery Image"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            {!isMobile &&
              activeImageIndex !== null && ( // Add the check for isMobile
                <div
                  className="fixed top-0 left-0 -bottom-24 right-0 m-auto w-2/3 h-2/3 flex items-center justify-center bg-black bg-opacity-10 carousel-overlay"
                  onClick={handleScreenClick} // Close carousel on click outside the image
                >
                  <Carousel
                    ref={carouselRef}
                    selectedItem={activeImageIndex}
                    showThumbs={false}
                    infiniteLoop={true}
                    emulateTouch={true}
                    swipeable={true}
                    showStatus={false}
                    onClickItem={() => setActiveImageIndex(null)}
                  >
                    {filteredImages.map((image, index) => (
                      <div key={index}>
                        <img src={image} alt="Gallery Image" />
                      </div>
                    ))}
                  </Carousel>
                </div>
              )}
          </>
        )}

        {!filteredProject && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden"
                style={{ aspectRatio: "1/1", cursor: "pointer" }}
                onClick={() => !isMobile && handleImageClick(index)} // Add the check for isMobile
              >
                <img
                  src={image}
                  alt="Gallery Image"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
