import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { AiOutlineMail, AiTwotonePhone } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="p-5 text-center bg-background_color">
      <div className="container mx-auto flex flex-wrap sm:justify-evenly flex-col sm:flex-row">
        <div className="flex flex-col">
          <h3 className="text-lg font-bold mb-2 sm:mb-4 ">
            <span className="border-b-2 border-blue-400 pb-1">Quick Links</span>
          </h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
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
          <a href="tel:6362037006">
            <AiTwotonePhone className="inline-block mb-1 mr-1" />
            6362037006
          </a>
          <a href="mailto:contact@example.com" className=" mr-2">
            <AiOutlineMail className="inline-block mr-1" />
            contact@example.com
          </a>
        </div>
      </div>

      <div className="container mx-auto text-center mt-6">
        <p>
          Made with <span className="text-red-500">&hearts;</span> by{" "}
          <a
            href="https://github.com/slendershield"
            target="_blank"
            rel="noopener noreferrer"
          >
            SlenderShield
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
