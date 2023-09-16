import React from "react";

const InfoGraph = ({ heading, icons }) => {
  return (
    <section className="py-10">
      <div className="container mx-auto w-4/5">
        <h2 className="text-3xl font-semibold mb-8 text-center py-7 uppercase">
          {heading}
        </h2>
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-end">
          {icons.map((icon, index) => (
            <div key={index} className="sm:w-1/2 md:w-1/2 w-full px-2 mb-8">
              <div className=" flex justify-center items-center flex-col">
                {icon.icon}
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
