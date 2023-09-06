import React from "react";
import Head from "../components/Head";
import images from "../images";
import { Carousel } from "react-responsive-carousel";
import { BsFillTelephoneFill } from "react-icons/bs";

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
          <p className="text-left sm:text-justify mb-3">
            With expertise in both residential and commercial projects, we are
            dedicated to delivering inspired designs that go above and beyond
            our clients' expectations. Our team of talented designers is
            committed to understanding your individual preferences and
            requirements, ensuring that every detail is carefully considered and
            incorporated into the design.
          </p>
          <p className=" text-left sm:text-justify mb-3">
            At Emzar Designs, we believe that a well-designed space has the
            power to transform lives. Whether it's your dream home or a
            professional workspace, we strive to create interiors that are not
            only aesthetically pleasing but also highly functional. Our
            meticulous attention to detail and use of premium materials ensure
            that each project is of the highest quality.
          </p>
          <p className=" text-left sm:text-justify mb-3">
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
          <span className="border-b-2 border-blue-400 pb-1">
            Factory Details :
          </span>
        </h2>

        <p className="text-left sm:text-justify mb-3">
          In the heart of our interior design company's operations lies our
          bustling factory, a place where creativity and craftsmanship converge.
          This dynamic space serves as the birthplace of our design concepts,
          where imagination transforms into reality. Our skilled artisans and
          craftsmen form the backbone of our factory, meticulously crafting
          custom furniture that reflects the essence of our clients' visions.
        </p>
        <p className="text-left sm:text-justify mb-3">
          Ultimately, our factory embodies the dedication and passion that
          define our interior design company. It's where the intangible
          transforms into the tangible, where dreams become fixtures, and where
          every detail is woven into the fabric of exceptional design.
        </p>
        <p className="">
          Siddiq Ahmed:{" "}
          <a href="tel:9108151481">
            <BsFillTelephoneFill className="inline-block mb-1 mr-1" />
            9108151481
          </a>
        </p>
      </div>
      <div className="mx-auto w-4/5 md:w-5/6 xl:w-4/5 mt-10">
        <h2 className="text-3xl font-bold mb-5">
          <span className="border-b-2 border-secondary_color pb-1">
            User Reviews:
          </span>
        </h2>
        <div className="bg-white rounded-lg p-4 shadow-md w-full ">
          <Carousel
            showArrows={false}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            showIndicators={true}
            autoPlay={true}
            interval={5000}
            className="flex justify-center w-full md:w-5/6 xl:w-4/5 mx-auto"
          >
            <div>
              <p className="text-center mb-3">
                "I am very happy with their work and service provided. Really
                good designers, great work ethics and are professional. ."
              </p>
              <p className="text-right font-bold">- Abhishek K</p>
            </div>
            <div>
              <p className="text-center mb-3">
                "Brilliant designing ability, understanding pulse of customer &
                seamless execution.Would definitely recommend to all in need of
                a trustworthy interior design team."
              </p>
              <p className="text-right font-bold">- Sree N</p>
            </div>
            <div>
              <p className="text-center mb-3">
                "They are best in service for your home interiors. They have
                great innovative ideas and customization as per your needs. Must
                go for it. one of the best interior designing company in
                Bangalore ,with Hassel free service."
              </p>
              <p className="text-right font-bold">- Ankitha B</p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
