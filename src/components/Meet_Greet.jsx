import React from "react";
import { BsWhatsapp } from "react-icons/bs";
const ContactButton = ({ link, description, height }) => {
  const handleRedirect = () => {
    window.open(link, "_blank");
  };
  const buttonStyle = {
    position: "fixed",
    bottom: `${height}px`,
    right: "16px",
  };
  if (description === "Whatsapp") {
    description = <BsWhatsapp className="text-2xl m-1" />;
  }

  return (
    <div style={buttonStyle}>
      <button
        className="bg-blue-500 hover:bg-white hover:text-blue-500 text-white px-4 py-2 rounded-full shadow border-none transition duration-300 ease-in-out"
        onClick={handleRedirect}
        formTarget="_blank"
      >
        {description}
      </button>
    </div>
  );
};

export default ContactButton;
