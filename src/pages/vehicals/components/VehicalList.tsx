import React from "react";
import VehicleCard from "./VehicalCard";

const VehicalList = () => {
  const vehicalData = [
    {
      title: "Small Van",
      img: "/images/small-van.webp",
      height: "1.0",
      width: "1.2",
      length: "1.3",
      pallets: "1",
      weight: "400",
    },
    {
        title: "Short Wheel base",
        img: "/images/short-wheel-base.webp",
        height: "1.4",
        width: "1.2",
        length: "2.1",
        pallets: "2",
        weight: "800",
      },
      {
        title: "Long Wheel base",
        img: "/images/long-wheel-base.webp",
        height: "1.7",
        width: "1.2",
        length: "3.3",
        pallets: "3",
        weight: "1200",
      },
      {
        title: "Extra Long Wheel base",
        img: "/images/extra-long-wheel-base.webp",
        height: "1.75",
        width: "1.2",
        length: "4.2",
        pallets: "4",
        weight: "1000",
      },
      {
        title: "Luton Van",
        img: "/images/luton-van.webp",
        height: "2.1",
        width: "2",
        length: "4.2",
        pallets: "6",
        weight: "1000",
      },
      {
        title: "7.5 Tonne Truck",
        img: "/images/tonne-van.webp",
        height: "2.3",
        width: "2.4",
        length: "6",
        pallets: "10",
        weight: "2500",
      },
  ];
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Grid for 3 Cards in a Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicalData?.map((item: any) => (
          <VehicleCard key={item} item={item} />
        ))}
      </div>
    </div>
  );
};

export default VehicalList;
