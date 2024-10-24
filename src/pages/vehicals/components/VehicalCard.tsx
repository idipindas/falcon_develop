import React from "react";
interface Prop {
  item: any;
}
const VehicleCard: React.FC<Prop> = ({ item }) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      {/* Image Section */}
      <div className="flex justify-center items-center mb-4">
        <img
          src={item?.img} // Replace with your image URL
          alt="FALCON Logistics Van"
          className="w-full object-contain"
        />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-center mb-4">{item?.title}</h2>

      {/* Specifications Section */}
      <div className="grid grid-cols-2 gap-4 text-center bg-white p-4 rounded-lg shadow-md">
        {/* Height */}
        <div className="flex flex-col items-center">
          <img alt="height" src="/images/box-car.png" height={40} width={40} />
          <p className="text-gray-700 font-semibold">
            HEIGHT: {item?.height} METER
          </p>
        </div>

        {/* Length */}
        <div className="flex flex-col items-center">
          <img
            alt="height"
            src="/images/flat-bed-truck.png"
            height={40}
            width={40}
          />

          <p className="text-gray-700 font-semibold">
            LENGTH: {item?.length} METER
          </p>
        </div>

        {/* Max Weight */}
        <div className="flex flex-col items-center">
          <img
            alt="height"
            src="/images/shopping-bag.png"
            height={30}
            width={30}
          />

          <p className="text-gray-700 font-semibold">
            MAX WEIGHT: {item?.weight}KG
          </p>
        </div>

        {/* Pallets */}
        <div className="flex flex-col items-center">
          <img alt="height" src="/images/box.png" height={30} width={30} />

          <p className="text-gray-700 font-semibold">
            PALLETS: UP TO {item?.pallets}
          </p>
        </div>

        {/* Width */}
        <div className="flex flex-col items-center">
          <img alt="height" src="/images/box-car.png" height={40} width={40} />

          <p className="text-gray-700 font-semibold">
            WIDTH: {item?.width} METER
          </p>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
