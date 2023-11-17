import React, { useEffect, useState } from "react";

const TestInformation = ({ order, setOrder }) => {
  const orders = order;
  const duration = orders.duration;
  const distance = orders.distance;
  const [price, setPrice] = useState(0);

  //   price calcuation
  useEffect(() => {
    const baseFare = 12;
    const costPerMin = 0.75;
    const costPerKm = 0.75;
    const surgeBoostMultiplier = 1;
    const minPrice = 20;

    const durationCost = (costPerMin * duration) / 1000;
    console.log(
      "🚀 ~ file: ProjMap.jsx:86 ~ calculateRoute ~ durationCost:",
      durationCost,
    );
    const distanceCost = (costPerKm * distance) / 1000;
    console.log(
      "🚀 ~ file: ProjMap.jsx:88 ~ calculateRoute ~ distanceCost:",
      distanceCost,
    );
    let rideFare = (
      (baseFare + durationCost + distanceCost) *
      surgeBoostMultiplier
    ).toFixed(2);
    rideFare = setPrice(rideFare < minPrice ? minPrice : rideFare);
    console.log("Priceeee", rideFare);
    setOrder({ ...order, ["price"]: price });
  }, [duration, distance]);

  return (
    <div className="bg-primary-400/75 mt-[2rem] p-[2rem] flex justify-between w-full">
      <div>
        <h2 className="text-xl pb-[2rem]">
          Please check carefully your order information:
        </h2>
        <div className="flex gap-[1rem]">
          <label htmlFor="distance" className="">
            Distance
          </label>
          <p className=" block text-center">
            {(distance / 1000).toFixed(1)} km
          </p>
        </div>
        <div className="flex gap-[1rem]">
          <label htmlFor="duration" className="flex gap-[1rem]">
            Duration
          </label>
          <p className="block text-center">{(duration / 60).toFixed(0)} min</p>
        </div>
        <div className="flex gap-[1rem]">
          <label htmlFor="duration" className="flex gap-[1rem]">
            Price
          </label>
          <p className="block text-center">{price} $</p>
        </div>
      </div>

      <button className="inline-flex items-center px-5 py-2.5 mt-10 text-md font-medium text-center text-black bg-primary-100 rounded-lg focus:ring-4 focus:ring-primary-300 shadow-lg">
        Place Order
      </button>
    </div>
  );
};

export default TestInformation;
