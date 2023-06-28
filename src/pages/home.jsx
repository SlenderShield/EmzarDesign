import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeroSection from "../components/Hero";
import NavigationMenu from "../components/NavigationCard";
import CallToAction from "../components/CallToAction";
import images from "../images";

const Home = () => {
  const image_array = [
    {
      src: images["Master Bedroom"].mb_view,
      alt: "Main bedroom",
      heading: "The Bedroom",
      description: "Bedroom tailored to your needs",
    },
    {
      src: images["Srikara_Enclave"].dining_area,
      alt: "Dining Place",
      heading: "Dinning Place",
      description: "Place to enjoy your meals with your family",
    },
    {
      src: images["SNN_Clermont_Apartment"].kitchen_front,
      alt: "Kitchen",
      heading: "Kitchen Area",
      description: "Kitchen with all the modern amenities",
    },
    {
      src: images["Study_Gaming_Room"].gaming_view,
      alt: "Study & Gaming Room",
      heading: "Study Room",
      description: "Study Room for your kids",
    },
  ];

  const backgroundColor = {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  };
  return (
    <section className="container mx-auto">
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
          swipeable={false}
          dynamicHeight={false}
        >
          {image_array.map((image, index) => (
            <div key={index} className="relative h-screen">
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover md:object-cover h-full w-full brightness-75"
              />
              <div className="absolute bottom-1/2 left-0 right-0 bg-opacity-80 p-4">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white uppercase">
                  {image.heading}
                </h2>
                <p className="text-white mt-2 text-xl md:text-2xl">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <HeroSection />
      <NavigationMenu />
      <CallToAction
        title={"Ready to get started?"}
        description={"Get Free Consultancy"}
        link={"contact-us"}
      />
    </section>
  );
};

export default Home;
