import React from "react";
import { BiMailSend } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Info = () => {
  return (
    <div className="flex justify-between items-center m-4 mx-10 text-xl">
      {/* Mail Link */}
      <div className="flex flex-row ">
        <a
          href="mailto:Emzardesign@gmail.com"
          className="text-black pb-1 sm:mr-2"
        >
          <BiMailSend className="inline-block mr-1 text-2xl" />
        </a>
        <a href="tel:6362037006" className="text-black text-base">
          <BsFillTelephoneFill className="inline-block mr-1" />
        </a>
      </div>

      {/* Social Links */}
      <div className="flex items-center">
        <a
          href="https://www.facebook.com/Emzardesigns"
          className="text-black mr-2"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.youtube.com/@Emzardesigns"
          className="text-black mr-2"
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.instagram.com/emzardesigns/"
          className=" text-black mr-2"
        >
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" className="text-black">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Info;
