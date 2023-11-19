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

  const [order, setOrder] = useState("");
  const [showOrder, setShowOrder] = useState(false);

  /** @type React.MutableRefObject<HTMLInputElement> */
  if (!isLoaded) {
    return <div>Loading...</div>;
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
        <div>
          <TestForm
            setOrder={setOrder}
            order={order}
            setShowOrder={setShowOrder}
            setDirectionsResponse={setDirectionsResponse}
          />
        </div>
        <div>
          {showOrder && <TestInformation setOrder={setOrder} order={order} />}
        </div>
      </div>
    </>
  );
};

export default ProjMap;
