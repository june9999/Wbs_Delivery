import React, { useRef, useState } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Autocomplete,
  DirectionsRenderer,
  MarkerF,
} from "@react-google-maps/api";

// import { Container, Title, Button } from 'flowbite';

export const center = { lat: 52.52, lng: 13.405 };

const mapLibrary = ["places"];

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY,

    libraries: mapLibrary,
  });

  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  console.log(distance);
  console.log(duration);

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destinationRef = useRef();

  if (!isLoaded) {
    return;
    return <div>Loading...</div>;
  }

  async function calculateRoute() {
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      return;
    }

    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.value);
    setDuration(results.routes[0].legs[0].duration.value);
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
      {/* <div>
    <Container padding="4" bg="gray-200" rounded="md">
    <Title size="lg" weight="bold">
      Hello, Flowbite!
    </Title>
    <Button color="blue" mt="2">
      Click Me
    </Button>
  </Container>
  </div> */}
      <div>
        {/* {isLoaded ? ( */}

        {/* <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: '1200px', height: '800px' }}
          // options={{
          //   zoomControl: false,
          //   streetViewControl: false,
          //   mapTypeControl: false,
          //   fullscreenControl: false,
          // }}
          onLoad={(map) => setMap(map)}
        >
          <MarkerF position={center} />

          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap> */}

        {/* ) : (
        <div>Loading Google Maps...</div>
      )} */}

        <form>
          <div className="mb-4">
            <Autocomplete>
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                type="text"
                placeholder="Origin"
                ref={originRef}
                style={{ width: "20rem" }}
              />
            </Autocomplete>
            <br />
            <Autocomplete>
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                type="text"
                placeholder="Destination"
                ref={destinationRef}
                style={{ width: "20rem" }}
              />
            </Autocomplete>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            <button type="submit" onClick={calculateRoute}>
              Get started
            </button>
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>

          {/* <button type="submit" onClick={calculateRoute}>
            Next
          </button> */}
          {/* <button onClick={clearRoute}>New Route</button> */}
        </form>
        {/* 
        <p>Distance: {distance} </p>

        <p>Duration: {duration}</p>

        <button
          onClick={() => {
            map.panTo(center);
            map.setZoom(15);
          }}
        >
          Move to Center
        </button> */}
      </div>
    </>
  );
};

export default Map;
