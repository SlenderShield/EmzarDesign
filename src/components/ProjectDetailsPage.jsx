import React from "react";
import { useParams, Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import images from "../images";

const projects = [
  {
    id: 1,
    title: "Master Bedroom Concepts",
    tagLine: "Elevate Your Restful Haven with Timeless Designs",
    description:
      "At Emzar Designs, we understand the importance of creating a master bedroom that truly reflects your personal style and offers an oasis of tranquility. Our expert designers specialize in crafting exceptional concepts that go beyond the ordinary, bringing together elegance, comfort, and functionality. From luxurious retreats inspired by classic aesthetics to modern sanctuaries with sleek lines and innovative features, we transform your vision into reality. Immerse yourself in a world of serene living, where every detail is thoughtfully curated to enhance your relaxation and rejuvenation. With our master bedroom concepts, experience the art of design, tailored to your unique preferences, and indulge in the beauty of a space designed just for you.",
    image_arr: [
      images["Master Bedroom"].mb_tv,
      images["Master Bedroom"].mb_tv_side,
      images["Master Bedroom"].mb_view,
    ],
  },
  {
    id: 2,
    title: "Project 2",
    tagLine: "Elevate Your Restful Haven with Timeless Designs",
    description: "This is the description of Project 2",
    image_arr: [
      images["SNN_Clermont_Apartment"].kitchen_side,
      images["SNN_Clermont_Apartment"].kitchen_side_two,
      images["SNN_Clermont_Apartment"].tv_room_front,
    ],
  },
  {
    id: 3,
    title: "Project 3",
    tagLine: "Elevate Your Restful Haven with Timeless Designs",
    description: "This is the description of Project 3",
    image_arr: [
      images["SNN_Clermont_Apartment"].kitchen_side,
      images["SNN_Clermont_Apartment"].kitchen_side_two,
      images["SNN_Clermont_Apartment"].tv_room_front,
    ],
  },
  {
    id: 4,
    title: "Project 4",
    tagLine: "Elevate Your Restful Haven with Timeless Designs",
    description: "This is the description of Project 4",
    image_arr: [
      images["SNN_Clermont_Apartment"].kitchen_side,
      images["SNN_Clermont_Apartment"].kitchen_side_two,
      images["SNN_Clermont_Apartment"].tv_room_front,
    ],
  },
];

const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === parseInt(projectId));

  if (!project) {
    return <p>Project not found.</p>;
  }

  const { title, description, image_arr, tagLine } = project;

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-4 text-white font-mono">{title}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="carousel">
          <Carousel showStatus={false} showThumbs={false}>
            {image_arr.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={title}
                  className="w-full h-auto object-cover rounded-md"
                />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="text-left">
          <h2 className="text-2xl ">{tagLine}</h2>
          <br />
          <p className="text-lg">{description}</p>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Link
          to={`/gallery`}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          View in Gallery
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
