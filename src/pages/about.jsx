import React from "react";
import Head from "../components/Head";
import images from "../images";
import { Carousel } from "react-responsive-carousel";

const AboutUsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head
        pageTitle="About Us"
        backgroundImage={images["Master Bedroom"].mb_side_wide}
        pageDescription="The company you can rely on."
      />

      <div className="mx-auto w-4/5 md:w-5/6 xl:w-4/5 mt-10 flex flex-col lg:flex-row">
        <div className="mb-8 lg:w-2/3 lg:pr-6">
          <h2 className="text-3xl font-bold mb-5">
            <span className="border-b-2 border-blue-400 pb-1">
              Company Details :
            </span>
          </h2>
          <p className=" text-justify mb-3">
            With expertise in both residential and commercial projects, we are
            dedicated to delivering inspired designs that go above and beyond
            our clients' expectations. Our team of talented designers is
            committed to understanding your individual preferences and
            requirements, ensuring that every detail is carefully considered and
            incorporated into the design.
          </p>
          <p className=" text-justify mb-3">
            At Emzar Designs, we believe that a well-designed space has the
            power to transform lives. Whether it's your dream home or a
            professional workspace, we strive to create interiors that are not
            only aesthetically pleasing but also highly functional. Our
            meticulous attention to detail and use of premium materials ensure
            that each project is of the highest quality.
          </p>
          <p className=" text-justify mb-3">
            With our focus on simplicity, we aim to make the entire design
            process smooth and enjoyable for our clients. From the initial
            concept to the final execution, we work closely with you, providing
            clear communication and regular updates, ensuring that your vision
            comes to life seamlessly.
          </p>
        </div>
        <div className="flex justify-center xl:w-1/3">
          <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="flex lg:flex-col gap-3 md:gap-8 justify-center items-center">
              <img
                src={images["Srikara_Enclave"].living_room}
                alt="Side Image"
                className="w-24 md:w-48 h-auto object-cover rounded-lg aspect-square"
              />
              <img
                src={images["Srikara_Enclave"].tv_room_side}
                alt="Side Image"
                className="w-24 md:w-48 h-auto object-cover rounded-lg aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-4/5 md:w-5/6 xl:w-4/5 mt-10">
        <h2 className="text-3xl font-bold mb-5">
          <span className="border-b-2 border-secondary_color pb-1">
            User Reviews:
          </span>
        </h2>
        <div className="bg-white rounded-lg p-4 shadow-md w-full md:w-5/6 xl:w-3/5">
          <Carousel
            showArrows={false}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            showIndicators={false}
            autoPlay={true}
            interval={5000}
          >
            <div>
              <p className="text-center mb-3">
                "Emzar Designs did an exceptional job in transforming my living
                space. The attention to detail and the use of premium materials
                truly exceeded my expectations."
              </p>
              <p className="text-right font-bold">- John Doe</p>
            </div>
            <div>
              <p className="text-center mb-3">
                "I couldn't be happier with the results. The design team at
                Emzar Designs is highly skilled and professional. They listened
                to my requirements and delivered a stunning interior."
              </p>
              <p className="text-right font-bold">- Jane Smith</p>
            </div>
            <div>
              <p className="text-center mb-3">
                "The level of craftsmanship and creativity displayed by Emzar
                Designs is outstanding. They transformed my office space into a
                modern and functional environment."
              </p>
              <p className="text-right font-bold">- Michael Johnson</p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
