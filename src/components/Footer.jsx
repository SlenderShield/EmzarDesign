import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { AiOutlineMail, AiTwotonePhone } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="p-5 text-center bg-slate-800 text-white">
      <div className="container mx-auto flex flex-wrap sm:justify-evenly flex-col sm:flex-row">
        <div className="flex flex-col">
          <h3 className="text-lg font-bold mb-2 sm:mb-4 ">
            <span className="border-b-2 border-blue-400 pb-1">Quick Links</span>
          </h3>
          <ul>
            <li>
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-white">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="text-white">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="text-lg font-bold mb-2 sm:mb-4  mt-4 sm:mt-0">
            <span className="border-b-2 border-blue-400 pb-1">
              Social Links
            </span>
          </h3>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/emzardesigns/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaInstagram className="mr-2 inline" />
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/Emzardesigns"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaFacebook className="mr-2 inline" />
                Facebook
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="text-lg font-bold mb-2 sm:mb-4 mt-4 sm:mt-0">
            <span className="border-b-2 border-blue-400 pb-1">
              Company Info
            </span>
          </h3>
          <address>
            <p>250 Dwarkanagar, Bagalur cross,</p>
            <p>IAF Post Yelahanka Bengaluru</p>
            <p>Karnataka 560063 India</p>
          </address>
          <a href="tel:6362037006" className="text-white">
            <AiTwotonePhone className="inline-block mb-1 mr-1" />
            6362037006
          </a>
          <a href="mailto:Emzardesign@gmail.com" className="text-white mr-2">
            <AiOutlineMail className="inline-block mr-1" />
            Emzardesign@gmail.com
          </a>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-bold mb-2 sm:mb-4 mt-4 sm:mt-0">
            <span className="border-b-2 border-blue-400 pb-1">
              Factory Info
            </span>
          </h3>
          <address>
            <p>250 Dwarkanagar, Bagalur cross,</p>
            <p>IAF Post Yelahanka Bengaluru</p>
            <p>Karnataka 560063 India</p>
          </address>
        </div>
      </div>

      <div className="container mx-auto text-center mt-6">
        <p>
          Made with <span className="text-red-500">&hearts;</span> by{" "}
          <a
            href="https://github.com/slendershield"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400"
          >
            SlenderShield
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
