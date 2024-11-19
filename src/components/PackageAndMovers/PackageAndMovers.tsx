import Image from "next/image";
import React from "react";

const servicesData = [
  {
    title: "House Removals",
    description:
      "Efficient and secure removal of household items. We pack and transport with care.",
    image: "/images/house-removal.jpeg", // Replace with real image URL
  },
  {
    title: "Office Removals",
    description:
      "Professional office relocation service ensuring minimal downtime for your business.",
    image: "/images/office-move.jpg", // Replace with real image URL
  },
];

const PackageAndMovers = () => {
  return (
    <>
      <div className="w-full lg:w-full text-center lg:text-center p-4 bg-[#0f313a] sm:p-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 mt-3 sm:mb-6">
          FALCON PACKERS AND MOVERS
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 p-12 bg-[#0f313a]">
        {/* Map over servicesData to create dynamic cards */}
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 "
          >
            {/* Image Section */}
            <Image
              height={800} // Increased image height from 600 to 800
              width={500}
              src={service.image}
              alt={service.title}
              className="w-full h-80 object-cover object-top" 
            />
            {/* Card Content */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PackageAndMovers;