import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import ContactForm from "../components/ContactForm";

const ContactUsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/2 px-4 mb-8">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          {/* Contact form code goes here */}
          <ContactForm />
        </div>

        <div className="w-full lg:w-1/2 px-4 mb-8">
          <h2 className="text-2xl font-bold mb-4">Location</h2>
          <div className="mb-4">
            {/* Replace the iframe src attribute with your map embed code */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6397023331283!2d-73.98191428459407!3d40.73258897932951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f267f899b7%3A0x3995f259eb3e49c2!2sTimes%20Square%2C%20New%20York%2C%20NY%2010018%2C%20USA!5e0!3m2!1sen!2sin!4v1625162499594!5m2!1sen!2sin"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              title="Map Location"
              className="rounded-md"
            ></iframe>
          </div>
        </div>

        <div className="w-full px-4">
          <h2 className="text-2xl font-bold mb-4">Communication Details</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-4">
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="mr-2 text-gray-600" />
                <span className="font-bold">Address:</span>
              </div>
              <p>123 Main Street, City, Country</p>
            </div>

            <div className="w-full md:w-1/3 px-4 mb-4">
              <div className="flex items-center mb-2">
                <FaPhone className="mr-2 text-gray-600" />
                <span className="font-bold">Phone:</span>
              </div>
              <p>+1 234 567 890</p>
            </div>

            <div className="w-full md:w-1/3 px-4 mb-4">
              <div className="flex items-center mb-2">
                <FaEnvelope className="mr-2 text-gray-600" />
                <span className="font-bold">Email:</span>
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
