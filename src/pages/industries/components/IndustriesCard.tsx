import Image from "next/image";
import React from "react";

const IndustriesCard = () => {
  const cardData = [
    {
      image: "/images/aviation.webp",
      title: "Aviation",
    },
    {
      image: "/images/construction.webp",
      title: "Construction",
    },
    {
      image: "/images/e-commerce.webp",
      title: "Ecommerce & Retail",
    },
    {
      image: "/images/hospitality.webp",
      title: "Hospitality",
    },
    {
      image: "/images/farming.webp",
      title: "Farming & Horticulture",
    },
  ];

  return (
    <div className="flex  bg-blue">
      {cardData.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden mx-2 my-4 transform transition-all duration-300 hover:shadow-xl w-full sm:w-1/2 md:w-1/3 lg:w-1/5 relative" // Added relative for positioning
          >
          
             <div className="max-w-sm mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="flex justify-center items-center mb-4">
        <div className="relative">
          <img
            src={item.image}
            alt="Ecommerce"
            className="w-45 h-40"
          />
         
        </div>
      </div>

      {/* Text Section */}
      <div className="text-center">
        <h2 className="text-xl font-semibold">{item?.title}</h2>
      </div>
    </div>
          </div>
        );
      })}
    </div>
  );
};

export default IndustriesCard;
