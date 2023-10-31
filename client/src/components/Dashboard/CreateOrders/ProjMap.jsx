import React, { useEffect, useRef, useState } from "react";

import {
  useJsApiLoader,
  GoogleMap,
  Autocomplete,
  DirectionsRenderer,
  MarkerF,
} from "@react-google-maps/api";

const center = { lat: 52.52, lng: 13.405 };
const mapLibrary = ["places", "directions"];

const ProjMap = ({
  price,
  setPrice,
  pickupLocation,
  setPickupLocation,
  dropLocation,
  setDropLocation,
  distance,
  setDistance,
}) => {
  console.log(price);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY,
    libraries: mapLibrary,
  });

  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);

  const [duration, setDuration] = useState("");

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  const destinationRef = useRef();

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
  }, [duration, distance]);

  /** @type React.MutableRefObject<HTMLInputElement> */
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  async function calculateRoute(e) {
    e.preventDefault();
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      return;
    }

    console.log("DASASSADADDSDASDSA");
    try {
      const directionsService = new google.maps.DirectionsService();
      const results = await directionsService
        .route({
          origin: originRef.current.value,
          //  origin:setPickupLocation(originRef.current.value),
          destination: destinationRef.current.value,
          //  destination:setDropLocation(destinationRef.current.value),
          travelMode: google.maps.TravelMode.DRIVING,
        })
        .then(res => {
          console.log("🚀 ~ file: ProjMap.jsx:68 ~ .then ~ res:", res);
          setPickupLocation(originRef.current.value);
          setDropLocation(destinationRef.current.value);
          // console.log("RESSSSULT", results);
          setDirectionsResponse(res);
          setDistance(res.routes[0].legs[0].distance.value);
          setDuration(res.routes[0].legs[0].duration.value);
        });
    } catch (error) {
      console.log("mapppppp errorrrrr", error);
    }
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");

    originRef.current.value = "";
    destinationRef.current.value = "";
  }

  return (
    <>
      <h2 className="mb-10 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        Create Order
      </h2>

      <div className="flex items-center justify-center">
        <div>
          <div className="flex items-center justify-center   md:h-[350px] border-2 border-gray-200 mt-12 mx-auto">
            <GoogleMap
              center={center}
              zoom={15}
              mapContainerStyle={{ width: "100%", height: "100%" }}
              onLoad={map => setMap(map)}
            >
              <MarkerF position={center} />

              {directionsResponse && (
                <DirectionsRenderer directions={directionsResponse} />
              )}
            </GoogleMap>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex mt-1 gap-6">
              <div>
                <label
                  htmlFor="distance"
                  className="block text-center mb-2 mt-4 text-md font-medium text-gray-900 dark:text-white"
                >
                  {/* Distance */}
                </label>
                <p className=" block mb-2 text-md font-medium text-gray-900 dark:text-white bg-primary-50 border border-gray-300  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 w-[16rem] md:w-80">
                  {" "}
                  {(distance / 1000).toFixed(1)} km
                </p>
              </div>
              <div>
                <label
                  htmlFor="duration"
                  className="block mt-4 text-center mb-2 text-md font-medium text-gray-900 dark:text-white"
                >
                  {/* Duration */}
                </label>
                <p className="block mb-2 text-md font-medium text-gray-900 dark:text-white bg-primary-50 border border-gray-300 text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 w-[16rem] md:w-80">
                  {(duration / 60).toFixed(0)} min
                </p>
              </div>
            </div>
            <div>
              <form className="mt-8">
                <Autocomplete>
                  <div className="w-80">
                    <label
                      htmlFor="origin"
                      className="block mb-2 text-md font-medium text-gray-900 dark:text-white mt-4"
                    >
                      From
                    </label>
                    <input
                      type="text"
                      name="brand"
                      id="brand"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block md:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="PickupLocation"
                      ref={originRef}
                    />
                  </div>
                </Autocomplete>
                <Autocomplete>
                  <div className="w-80">
                    <label
                      htmlFor="destination"
                      className="block mb-2 text-md font-medium text-gray-900 dark:text-white mt-4"
                    >
                      To
                    </label>
                    <input
                      type="text"
                      name="brand"
                      id="brand"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block md:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 "
                      placeholder="DropLocation"
                      ref={destinationRef}
                    />
                  </div>
                </Autocomplete>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="inline-flex items-center px-5 py-2.5 mt-10 text-md font-medium text-center text-white bg-primary-500 rounded-lg focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 hover:bg-primary-800 shadow-lg"
                    onClick={calculateRoute}
                  >
                    Calculate
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjMap;
