import React from "react";

const Head = ({ pageTitle, backgroundImage, pageDescription }) => {
  const bgStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(70%)",
  };

  const backgroundColor = {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  };

  return (
    <div className="bg-white text-black m-1 rounded-md h-52" style={bgStyle}>
      <div className="container mx-auto h-full" style={backgroundColor}>
        <div className="p-4 md:p-8 lg:p-12 text-white ml-10">
          <p className="text-sm text-bold mb-1 uppercase">{pageDescription}</p>
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold uppercase">
            {pageTitle}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Head;
