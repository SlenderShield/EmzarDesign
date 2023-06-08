import React from "react";

const Head = ({ pageTitle }) => {
  return (
    <div className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold">{pageTitle}</h1>
      </div>
    </div>
  );
};

export default Head;
