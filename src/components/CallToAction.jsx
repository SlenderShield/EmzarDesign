import React from "react";
import { Link } from "react-router-dom";
const CallToAction = ({ title, description, link }) => {
  return (
    <div className="flex flex-row justify-center mt-8 bg-slate-300">
      <p className="text-xl text-black m-6">{title}</p>
      <div className="flex justify-center m-5">
        <Link
          to={link}
          className="bg-blue-500 hover:bg-blue-700 hover:text-white text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out flex items-center"
        >
          {description}
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
