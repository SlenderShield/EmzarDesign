import React from "react";
import images from "../images";
import { Carousel } from "react-responsive-carousel";

const HeroSection = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold text-center lg:text-left mb-5 font-serif">
              Welcome to Emzar Designs
            </h1>
            <h2 className="text-2xl font-bold text-center lg:text-left mb-2">
              Desire meets a new Design
            </h2>
            <p className="text-lg text-center lg:text-left mr-5">
              Emzar Designs, located in the vibrant city of Bangalore, is a
              leading premium interior brand that specializes in urban and
              innovative design.
            </p>
            <p className="text-lg text-center lg:text-left mr-5">
              Our core belief is centered around creating 100% customized spaces
              that truly reflect our clients' unique vision and style.
            </p>
          </div>
          <div className="lg:w-1/4 w-1/2 m-10 lg:mt-0">
            <div className="border-4 rounded-xl overflow-hidden h-25">
              <Carousel
                showArrows={false}
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                autoPlay={true}
                showIndicators={false}
                interval={3000}
              >
                <div className="carousel-image-container">
                  <img
                    src={images["objects"].one_object}
                    alt="Hero Image 1"
                    className="carousel-image"
                  />
                </div>
                <div className="carousel-image-container">
                  <img
                    src={images["objects"].dinner_set}
                    alt="Hero Image 2"
                    className="carousel-image"
                  />
                </div>
                <div className="carousel-image-container">
                  <img
                    src={images["objects"].lounge}
                    alt="Hero Image 3"
                    className="carousel-image"
                  />
                </div>
                <div className="carousel-image-container">
                  <img
                    src={images["objects"].drawer}
                    alt="Hero Image 4"
                    className="carousel-image"
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
