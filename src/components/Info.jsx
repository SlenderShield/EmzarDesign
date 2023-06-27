import React from "react";
import { AiOutlineMail, AiTwotonePhone } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Info = () => {
  return (
    <div className="flex justify-between items-center m-4 mx-10">
      {/* Mail Link */}
      <div className="flex flex-col sm:flex-row ">
        <a
          href="mailto:contact@example.com"
          className="text-white mb-2 sm:mr-2"
        >
          <AiOutlineMail className="inline-block mr-1" />
          contact@example.com
        </a>
        <a href="tel:6362037006" className="text-white hidden sm:block ">
          <AiTwotonePhone className="inline-block mb-1 mr-1" />
          6362037006
        </a>
      </div>

      {/* Social Links */}
      <div className="flex items-center">
        <a href="https://facebook.com" className="text-white mr-2">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" className="text-white mr-2">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" className="text-white mr-2">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" className="text-white">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Info;
