import React from "react";

const InfoCard = ({ item }) => {
  return (
    <div className="text-gray-600 bg-gray-200 rounded-lg p-4 shadow-md">
      <p className="capitalize text-sm mb-2 font-semibold">
        {item[0].split("_").join(" ")}
      </p>
      <h2 className="text-lg font-bold text-gray-800">{item[1]}</h2>
    </div>
  );
};

export default InfoCard;


