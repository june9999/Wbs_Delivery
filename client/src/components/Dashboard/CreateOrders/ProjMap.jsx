import React, { useEffect, useRef, useState } from "react";

import {
  useJsApiLoader,
  GoogleMap,
  DirectionsRenderer,
  MarkerF,
} from "@react-google-maps/api";
import TestInformation from "./TestInformation";
import TestForm from "./TestForm";

const center = { lat: 52.52, lng: 13.405 };
const mapLibrary = ["places", "directions"];

const ProjMap = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY,
    libraries: mapLibrary,
  });

  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  const destinationRef = useRef();
  const [order, setOrder] = useState("");

  /** @type React.MutableRefObject<HTMLInputElement> */
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  async function calculateRoute(e) {
    e.preventDefault();
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      return;
    }
    try {
      const directionsService = new google.maps.DirectionsService();
      const results = await directionsService
        .route({
          origin: originRef.current.value,
          destination: destinationRef.current.value,
          travelMode: google.maps.TravelMode.DRIVING,
        })
        .then(res => {
          console.log("🚀 ~ file: ProjMap.jsx:68 ~ .then ~ res:", res);
          setDirectionsResponse(res);
          setOrder({
            ...order,
            ["distance"]: res.routes[0].legs[0].distance.value,
            ["duration"]: res.routes[0].legs[0].duration.value,
            ["pickupLocation"]: originRef.current.value,
            ["dropLocation"]: destinationRef.current.value,
          });
          console.log(order);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h2 className="mb-10 text-4xl tracking-tight font-extrabold text-center text-gray-900">
        Create Order
      </h2>

      <div className="w-[100%]">
        <div className="w-[80%] h-[20rem] md:w-full">
          <GoogleMap
            center={center}
            zoom={12}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            onLoad={map => setMap(map)}
          >
            <MarkerF position={center} />

            {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )}
          </GoogleMap>
        </div>
        <div className="">
          <TestForm
            originRef={originRef}
            destinationRef={destinationRef}
            calculateRoute={calculateRoute}
            setOrder={setOrder}
            order={order}
          />
        </div>
        <div>
          <TestInformation setOrder={setOrder} order={order} />
        </div>
      </div>
    </>
  );
};

export default ProjMap;
