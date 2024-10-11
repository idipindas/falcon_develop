import React from 'react';

function SectionThree() {
  const services = [
    { icon: "icon1.svg", title: "Air Freight" },
    { icon: "icon2.svg", title: "Ocean Freight" },
    { icon: "icon3.svg", title: "Land Transport" },
    { icon: "icon4.svg", title: "Warehousing" },
  ];

  return (
    <div className="bg-gray-100 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`
              bg-gray-200 relative flex flex-col 
              min-h-[300px] sm:min-h-[320px] lg:min-h-[340px]
              border-b border-gray-400 sm:border-b-0
              ${index % 2 === 0 ? 'sm:border-r' : ''}
              ${index < services.length - 2 ? 'sm:border-b' : ''}
              ${index < services.length - 1 ? 'lg:border-r lg:border-b-0' : ''}
            `}
          >
            <img 
              src={`/images/${service.icon}`} 
              alt={`${service.title} Icon`} 
              className="absolute top-8 right-8 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain" 
            />
            <div className="flex flex-col justify-end p-6 sm:p-8 flex-grow">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">{service.title}</h2>
              <p className="text-sm sm:text-base text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionThree;