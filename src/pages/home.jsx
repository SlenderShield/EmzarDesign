import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeroSection from "../components/Hero";
import ProjectsOverview from "../components/ProjectsOverview";

const Home = () => {
  const images = [
    {
      src: "/assets/master_bedroom/main_bedroom.png",
      alt: "Main bedroom",
      heading: "The Main Bedroom",
      description: "Bedroom tailored to your needs",
    },
    {
      src: "/assets/srikara_enclave/dining.png",
      alt: "Dining Place",
      heading: "Dinning Place",
      description: "Place to enjoy your meals with your family",
    },
    {
      src: "/assets/SNN Clermont apartment/kitchen.png",
      alt: "Kitchen",
      heading: "Kitchen Area",
      description: "Kitchen with all the modern amenities",
    },
    {
      src: "/assets/study-gaming room/Study.png",
      alt: "Study & Gaming Room",
      heading: "Study & Gaming Room",
      description: "Study & Gaming Room for your kids",
    },
    // Add more images with their respective details
  ];
  return (
    <div className="container mx-auto">
      <div className="flex justify-center ">
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          transitionTime={500}
          interval={3000}
          stopOnHover={true}
          emulateTouch={true}
          swipeable={true}
          dynamicHeight={false}
        >
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover h-96 w-96"
              />
              <div className="absolute bottom-1/3 left-0 right-0 bg-opacity-80 p-4">
                <h2 className="text-4xl font-bold text-white">
                  {image.heading}
                </h2>
                <p className="text-white mt-2">{image.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <HeroSection />
      <ProjectsOverview />
      <div className="flex flex-row justify-center mt-8 bg-slate-300 ">
        <p className="text-xl text-black m-6">Ready to get started?</p>
        <div className="flex justify-center m-5">
          <Link
            to="/contact-us"
            className="bg-blue-500 hover:bg-blue-700 hover:text-white text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out flex items-center"
          >
            Get Free Consultancy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
