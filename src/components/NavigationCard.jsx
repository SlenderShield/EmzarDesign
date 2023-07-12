import React from "react";
import { Link } from "react-router-dom";

const NavigationMenu = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  return (
    <div className="flex justify-center py-4">
      <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4 w-3/4 max-w-screen-xl mx-auto">
        <Link to="/projects" className="card-link" onClick={handleLinkClick}>
          <div className="card bg-gradient-to-r from-accent_color to-primary_color rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-2 aspect-auto">
            <h2 className="card-title text-xl font-semibold mb-2 text-white">
              Projects
            </h2>
            <p className="card-description text-slate-200">
              Explore our projects
            </p>
          </div>
        </Link>
        <Link to="/gallery" className="card-link" onClick={handleLinkClick}>
          <div className="card bg-gradient-to-r from-accent_color to-primary_color rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-2">
            <h2 className="card-title text-xl font-semibold mb-2 text-white">
              Gallery
            </h2>
            <p className="card-description text-slate-200">
              Browse our image gallery
            </p>
          </div>
        </Link>

        <Link to="/about-us" className="card-link" onClick={handleLinkClick}>
          <div className="card bg-gradient-to-r from-accent_color to-primary_color rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-2">
            <h2 className="card-title text-xl font-semibold mb-2 text-white">
              About
            </h2>
            <p className="card-description text-slate-200">
              Learn more about us
            </p>
          </div>
        </Link>

        <Link to="/contact-us" className="card-link" onClick={handleLinkClick}>
          <div className="card bg-gradient-to-r from-accent_color to-primary_color rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-2">
            <h2 className="card-title text-xl font-semibold mb-2 text-white">
              Contact Us
            </h2>
            <p className="card-description text-slate-200">
              Contact us anytime
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavigationMenu;
