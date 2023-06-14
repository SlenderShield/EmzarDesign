import React from "react";
import { Link } from "react-router-dom";
import images from "../images";

const HeroSection = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold text-center lg:text-left mb-5">
              Welcome to Emzar Designs
            </h1>
            <p className="text-lg text-center lg:text-left mr-5">
              Emzar Designs, located in the vibrant city of Bangalore,
              Karnataka, is a leading premium interior brand that specializes in
              urban and innovative design.
            </p>
            <p className="text-lg text-center lg:text-left mr-5">
              Our core belief is centered around creating 100% customized spaces
              that truly reflect our clients' unique vision and style.
            </p>
          </div>
          <div className="lg:w-1/4 w-1/2 m-10 lg:mt-0">
            <div className="border-4 rounded-xl overflow-hidden h-25">
              <img
                src={images["features"].one}
                alt="Hero Image"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
