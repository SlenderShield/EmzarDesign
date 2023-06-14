import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import Head from "../components/Head";
import images from "../images";

const ContactUsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 ">
      <Head
        pageTitle="Contact Us"
        backgroundImage={images["Srikara_Enclave"].dining_area}
        pageDescription="Contact us for a free consultation"
      />

      <div className="flex flex-wrap mx-auto my-5 w-4/5 justify-between">
        <div className="w-full lg:w-1/2 px-4 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
            <span className="font-bold border-b-2 border-blue-400 pb-1 ">
              Get in Touch :
            </span>
          </h2>
          {/* Contact form code goes here */}
          <ContactForm />
        </div>

        <div className="w-full lg:w-1/2 px-4 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
            <span className="font-bold border-b-2 border-blue-400 pb-1">
              Location :
            </span>
          </h2>
          <div className="mb-4">
            {/* Replace the iframe src attribute with your map embed code */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.640637464067!2d77.61560447494611!3d13.1219372872074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19889b3bb4dd%3A0x493f6d236c77867!2sEmzar%20Designs%20(Ayat%20Design)!5e0!3m2!1sen!2sin!4v1686156548991!5m2!1sen!2sin"
              width="100%"
              height="400"
              allowFullScreen={true}
              loading="lazy"
              title="Emzar Designs Location"
              className="rounded-md"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="w-full px-4">
          <h2 className="text-2xl font-bold mb-4 ">
            <span className="border-b-2 border-blue-400 pb-1">
              Communication Details :
            </span>
          </h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-4">
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="mr-2 text-blue-400" />

                <span className="font-bold border-b-2 border-blue-400 pb-1">
                  Address :
                </span>
              </div>
              <address>123 Main Street, City, Country</address>
            </div>

            <div className="w-full md:w-1/3 px-4 mb-4">
              <div className="flex items-center mb-2">
                <FaPhone className="mr-2 text-blue-400" />
                <span className="font-bold border-b-2 border-blue-400 pb-1">
                  Phone :
                </span>
              </div>
              <p>+1 234 567 890</p>
            </div>

            <div className="w-full md:w-1/3 px-4 mb-4">
              <div className="flex items-center mb-2">
                <FaEnvelope className="mr-2 text-blue-400 " />
                <span className="font-bold border-b-2 border-blue-400 pb-1">
                  Email :
                </span>
              </div>
              <p>info@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
