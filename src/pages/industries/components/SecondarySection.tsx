import React from "react";

const SecondarySectionData = {
  title: "Whatever Your Industry, We’ve Got You Covered",
  subtitle: "",
  description:
    "Whether you operate in manufacturing, healthcare, retail, or any other sector, FALCON provides comprehensive B2B logistics services tailored to meet your specific needs and strengthen your supply chain. Our commitment to excellence ensures that your goodsare handled with precision and care, no matter your industry requirements.",
};

const SecondarySection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Centered Heading */}
        <div className="text-center mb-8">
          <h2 className="text-5xl md:text-5xl font-bold mb-2">
            {SecondarySectionData.title}
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold">
            {SecondarySectionData?.subtitle}
          </h3>
        </div>

        {/* Paragraph */}
        <div className="w-full mx-auto text-center">
          <p className="text-gray-600">{SecondarySectionData.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SecondarySection;
