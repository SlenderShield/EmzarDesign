import React from "react";

const InfoGraph = ({ heading, icons }) => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">{heading}</h2>
        <div className="flex flex-wrap justify-center -mx-4">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 mb-8"
            >
              <div className="text-center">
                <i className={`text-5xl text-blue-500 ${icon.icon}`}></i>
                <p className="mt-2 text-lg font-medium">{icon.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default InfoGraph;
