import React from "react";
import { Link } from "react-router-dom";
const CallToAction = ({ title, description, link }) => {
  return (
    <div className="flex flex-row justify-center mt-8 bg-blue-400">
      <p className="text-xl m-6 text-black">{title}</p>
      <div className="flex justify-center m-5">
        <Link
          to={link}
          className="bg-blue-500 hover:bg-white hover:text-blue-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out flex items-center"
        >
          {description}
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
