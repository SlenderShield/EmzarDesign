import React from "react";
import Head from "../components/Head";

const AboutUsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head
        pageTitle="About Us"
        backgroundImage="/public/assets/master_bedroom/MBTwo.png"
        pageDescription="The company you can rely on."
      />

      <div className="mx-auto w-2/3 mt-10">
        <div className="mb-8 ">
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
      </div>
      <div className="flex justify-center">
        <div className="w-70">
          <h2 className="text-xl font-bold mb-2 text-center">
            <span className="border-b-2 border-blue-400 pb-1">Our team :</span>
          </h2>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="flex justify-center">
              <img
                src="team-member.jpg"
                alt="Team Member"
                className="w-48 h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-lg font-bold mb-2 text-center">John Doe</h3>
            <p className="text-gray-600 text-center">Founder & CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
