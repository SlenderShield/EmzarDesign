import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navStyle =
    "text-black px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out hover:bg-sky-500 hover:text-black active:bg-sky-500";

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" exact="true" className="flex items-center">
              <img
                className="h-10 w-10 rounded-lg"
                src="/assets/logo.jpg"
                alt="Logo"
              />
              <p className="text-black text-xl font-bold px-4">Emzar Designs</p>
            </NavLink>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <NavLink
                to="/"
                className="text-black px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out hover:bg-sky-500 hover:text-black active"
                exact="true"
              >
                Home
              </NavLink>
              <NavLink
                to="/projects"
                className="text-black px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out hover:bg-sky-500 hover:text-black "
              >
                Projects
              </NavLink>
              <NavLink
                to="/gallery"
                className="text-black px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out hover:bg-sky-500 hover:text-black "
              >
                Gallery
              </NavLink>
              <NavLink
                to="/about-us"
                className="text-black px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out hover:bg-sky-500 hover:text-black "
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact-us"
                className="text-black px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out hover:bg-sky-500 hover:text-black "
              >
                Contact Us
              </NavLink>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-gray-400 hover:text-black focus:outline-none focus:text-black"
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
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink
                to="/"
                className="text-black block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out hover:bg-sky-500 hover:text-black"
                exact
                onClick={toggleMenu}
              >
                Home
              </NavLink>
              <NavLink
                to="/projects"
                className="text-black block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out hover:bg-sky-500 hover:text-black"
                onClick={toggleMenu}
              >
                Projects
              </NavLink>
              <NavLink
                to="/gallery"
                className="text-black block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out hover:bg-sky-500 hover:text-black "
                onClick={toggleMenu}
              >
                Gallery
              </NavLink>
              <NavLink
                to="/about-us"
                className="text-black block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out hover:bg-sky-500 hover:text-black "
                onClick={toggleMenu}
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact-us"
                className="text-black block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out hover:bg-sky-500 hover:text-black "
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
