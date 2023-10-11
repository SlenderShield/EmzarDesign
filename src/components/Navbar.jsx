import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import images from "../images";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navStyle =
    "text-stone-50 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out hover:text-black hover:bg-stone-50 active:bg-sky-500";

  return (
    <nav className="bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" exact="true" className="flex items-center">
              <img
                className="h-10 w-10 rounded-lg "
                src={images["features"].logo}
                alt="Logo"
              />
              <p className="text-white  text-xl font-bold px-4 font-serif">
                Emzar Designs
              </p>
            </NavLink>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <NavLink
                to="/"
                className="text-stone-50 font-medium px-3 py-2 rounded-md  transition duration-300 ease-in-out hover:text-black hover:bg-stone-50 active"
                exact="true"
              >
                Home
              </NavLink>
              <NavLink
                to="/projects"
                className="text-stone-50 px-3 py-2 rounded-md  font-medium transition duration-300 ease-in-out hover:text-black hover:bg-stone-50 "
              >
                Projects
              </NavLink>
              <NavLink
                to="/gallery"
                className="text-stone-50 px-3 py-2 rounded-md  font-medium transition duration-300 ease-in-out hover:text-black hover:bg-stone-50 "
              >
                Gallery
              </NavLink>
              <NavLink
                to="/about-us"
                className="text-stone-50 px-3 py-2 rounded-md font-medium transition duration-300 ease-in-out hover:text-black hover:bg-stone-50 "
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact-us"
                className="text-stone-50 px-3 py-2 rounded-md  font-medium transition duration-300 ease-in-out hover:text-black hover:bg-stone-50 "
              >
                Contact Us
              </NavLink>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <a
              type="button"
              onClick={toggleMenu}
              className="text-white  focus:outline-none bg-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}

        <div className="md:hidden">
          <div className="fixed flex bottom-0 right-0 w-full z-10 bg-white justify-evenly ">
            <NavLink
              to="/"
              className="text-black flex flex-col justify-center items-center"
              exact
            >
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-glyphs/30/home.png"
                alt="home"
              />
              <p className="text-sm">Home</p>
            </NavLink>
            <NavLink
              to="/projects"
              className="text-black flex flex-col justify-center items-center"
            >
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-glyphs/30/home.png"
                alt="home"
              />
              <p className="text-sm">Projects</p>
            </NavLink>
            <NavLink
              to="/gallery"
              className="text-black flex flex-col justify-center items-center"
            >
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-glyphs/30/home.png"
                alt="home"
              />
              <p className="text-sm"> Gallery</p>
            </NavLink>
            <NavLink
              to="/about-us"
              className="text-black flex flex-col justify-center items-center"
            >
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-glyphs/30/home.png"
                alt="home"
              />
              <p className="text-sm">About Us</p>
            </NavLink>
            <NavLink
              to="/contact-us"
              className="text-black flex flex-col justify-center items-center"
            >
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-glyphs/30/home.png"
                alt="home"
              />
              <p className="text-sm">Contact Us</p>
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink
                to="/"
                className="text-stone-50 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out hover:text-black hover:bg-stone-50"
                exact
                onClick={toggleMenu}
              >
                Home
              </NavLink>
              <NavLink
                to="/projects"
                className="text-stone-50 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out hover:text-black hover:bg-stone-50"
                onClick={toggleMenu}
              >
                Projects
              </NavLink>
              <NavLink
                to="/gallery"
                className="text-stone-50 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out hover:text-black hover:bg-stone-50 "
                onClick={toggleMenu}
              >
                Gallery
              </NavLink>
              <NavLink
                to="/about-us"
                className="text-stone-50 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out hover:text-black hover:bg-stone-50 "
                onClick={toggleMenu}
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact-us"
                className="text-stone-50 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out hover:text-black hover:bg-stone-50 "
                onClick={toggleMenu}
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
