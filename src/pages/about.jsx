import React from "react";
import Head from "../components/Head";
import images from "../images";

const AboutUsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head
        pageTitle="About Us"
        backgroundImage={images["Master Bedroom"].mb_side_wide}
        pageDescription="The company you can rely on."
      />

      <div className="mx-auto w-4/5 mt-10 flex flex-col lg:flex-row">
        <div className="mb-8 lg:w-2/3 lg:pr-10">
          <h2 className="text-3xl font-bold mb-5">
            <span className="border-b-2 border-blue-400 pb-1">
              Company Details :
            </span>
          </h2>
          <p className="text-white text-justify mb-3">
            With expertise in both residential and commercial projects, we are
            dedicated to delivering inspired designs that go above and beyond
            our clients' expectations. Our team of talented designers is
            committed to understanding your individual preferences and
            requirements, ensuring that every detail is carefully considered and
            incorporated into the design.
          </p>
          <p className="text-white text-justify mb-3">
            At Emzar Designs, we believe that a well-designed space has the
            power to transform lives. Whether it's your dream home or a
            professional workspace, we strive to create interiors that are not
            only aesthetically pleasing but also highly functional. Our
            meticulous attention to detail and use of premium materials ensure
            that each project is of the highest quality.
          </p>
          <p className="text-white text-justify mb-3">
            With our focus on simplicity, we aim to make the entire design
            process smooth and enjoyable for our clients. From the initial
            concept to the final execution, we work closely with you, providing
            clear communication and regular updates, ensuring that your vision
            comes to life seamlessly.
          </p>
        </div>
        <div className="flex justify-center lg:w-1/3">
          <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="flex lg:flex-col gap-3 md:gap-8 justify-evenly items-stretch">
              <img
                src={images["Srikara_Enclave"].living_room}
                alt="Side Image"
                className="w-36 md:w-48 h-auto object-cover rounded-lg aspect-square"
              />
              <img
                src={images["Srikara_Enclave"].tv_room_side}
                alt="Side Image"
                className="w-36 md:w-48 h-auto object-cover rounded-lg aspect-square"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-10">
        <div className="w-4/5">
          <h2 className="text-3xl font-bold mb-5">
            <span className="border-b-2 border-blue-400 pb-1">The Team:</span>
          </h2>
          <div className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center md:flex-row md:items-start">
            <img
              src={images["features"].ceo}
              alt="Team Member"
              className="w-48 h-auto object-cover rounded-lg mb-4 sm:mb-0 sm:mr-4 aspect-auto"
            />
            <div className="text-center md:text-left py-2 md:py-0">
              <h3 className="text-2xl font-bold mb-2 text-black underline underline-offset-4">
                Ayesha Bhanu
              </h3>
              <p className="text-gray-600 text-lg mb-2">Founder & CEO</p>
              <p className="text-gray-600 lg:w-4/5 md:text-justify text-center">
                Ayesha Bhanu is the founder and CEO of our company. With her
                strong leadership and visionary approach, she has been
                instrumental in guiding our organization towards success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
