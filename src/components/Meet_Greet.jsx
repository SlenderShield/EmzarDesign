import React from "react";

const ContactButton = ({ link, description, height }) => {
  const handleRedirect = () => {
    window.open(link, "_blank");
  };
  const buttonStyle = {
    position: "fixed",
    bottom: `${height}px`,
    right: "8px",
  };

  return (
    <div style={buttonStyle}>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow"
        onClick={handleRedirect}
        formTarget="_blank"
      >
        {description}
      </button>
    </div>
  );
};

export default ContactButton;
