import React from "react";
import { Link } from "react-router-dom";
const CallToAction = ({ title, description, link }) => {
  return (
    <div className="flex flex-row justify-center mt-8 bg-accent_color">
      <p className="text-xl m-6 text-background_color">{title}</p>
      <div className="flex justify-center m-5">
        <Link
          to={link}
          className="bg-[#051641] hover:bg-white hover:text-primary_color text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out flex items-center"
        >
          {description}
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
