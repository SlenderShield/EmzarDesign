import React from "react";
import Head from "../components/Head";
const AboutUsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head pageTitle="About Us" />

      <div className="w-3/4 mx-auto mb-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Company Details</h2>
          <p className="text-gray-700">
            <strong>Company Name:</strong> ABC Interiors
          </p>
          <p className="text-gray-700">
            <strong>Location:</strong> City, State, Country
          </p>
          <p className="text-gray-700">
            <strong>Contact:</strong> +1 123 456 7890
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> info@abcinteriors.com
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">About Our Company</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            vehicula erat ac nisi ultricies, in lobortis nunc interdum. Morbi
            consectetur laoreet quam, at vulputate dolor tincidunt a. Nullam ut
            imperdiet tortor. Aliquam erat volutpat. Nulla facilisi. Donec
            scelerisque nunc quis ante feugiat tempus. Aenean lobortis viverra
            justo vitae vestibulum. Morbi id placerat justo. Phasellus ut semper
            ligula. Fusce rhoncus odio eget neque dapibus placerat.
          </p>
          <p className="text-gray-700 mt-2">
            Vestibulum nec lacinia sem. Fusce dignissim, dui non suscipit
            interdum, nunc lectus feugiat ipsum, eu cursus justo lectus in nunc.
            Donec auctor facilisis ipsum, a vulputate nulla pulvinar eu. Nulla a
            risus tellus. Sed nec gravida elit. Mauris lobortis rutrum purus,
            non blandit lectus ullamcorper et. Proin eget feugiat justo, id
            scelerisque mi. Nunc placer
          </p>
        </div>

        {/* Add more cool things about the company */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <img
            src="/assets/ayesha.jpg"
            alt="Owner"
            className="w-64 h-64 rounded-full mb-4 md:mb-0 md:mr-8"
          />
          <div>
            <h2 className="text-2xl font-bold mb-2">John Doe</h2>
            <p className="text-gray-600">Founder & CEO</p>
            <p className="text-gray-700 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              vehicula erat ac nisi ultricies, in lobortis nunc interdum. Morbi
              consectetur laoreet quam, at vulputate dolor tincidunt a. Nullam
              ut imperdiet tortor. Aliquam erat volutpat. Nulla facilisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
