import React from "react";

const Head = ({ pageTitle }) => {
  return (
    <div className="bg-white text-black m-1 rounded-md ">
      <div className="container mx-auto p-5">
        <h1 className="text-3xl font-bold text-center">{pageTitle}</h1>
      </div>
    </div>
  );
};

export default Head;
