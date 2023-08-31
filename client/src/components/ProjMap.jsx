import React, { useRef, useState } from 'react';
import {
  useJsApiLoader,
  GoogleMap,
  Autocomplete,
  DirectionsRenderer,
  MarkerF,
} from '@react-google-maps/api';

// import { Container, Title, Button } from 'flowbite';

const center = { lat: 52.52, lng: 13.405 };

const mapLibrary = ['places', 'directions'];

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY,

    libraries: mapLibrary,
  });

  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  console.log(distance);
  console.log(duration);

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destinationRef = useRef();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  async function calculateRoute(e) {
    e.preventDefault();
    if (originRef.current.value === '' || destinationRef.current.value === '') {
      return;
    }

    console.log('DASASSADADDSDASDSA');
    try {
      const directionsService = new google.maps.DirectionsService();
      const results = await directionsService.route({
        origin: originRef.current.value,
        destination: destinationRef.current.value,
        travelMode: google.maps.TravelMode.DRIVING,
      });
      console.log('RESSSSULT', results);
      setDirectionsResponse(results);
      setDistance(results.routes[0].legs[0].distance.value);
      setDuration(results.routes[0].legs[0].duration.value);
      /// calculations
      const baseFare = 12;
      const costPerMin = 0.75;
      const costPerKm = 0.75;
      const surgeBoostMultiplier = 1;
      const minPrice = 20;

      const distance = results.routes[0].legs[0].distance.value;
      const duration = results.routes[0].legs[0].duration.value;
      const durationCost = (costPerMin * duration) / 1000;
      const distanceCost = (costPerKm * distance) / 1000;
      let rideFare = (
        (baseFare + durationCost + distanceCost) *
        surgeBoostMultiplier
      ).toFixed(2);
      rideFare = rideFare < minPrice ? minPrice : rideFare;
      console.log('Priceeee', rideFare);
    } catch (error) {
      console.log('mapppppp errorrrrr', error);
    }
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance('');

    setDuration('');

    originRef.current.value = '';
    destinationRef.current.value = '';
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
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: '100vw', height: '800px' }}
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
        </GoogleMap>
        {/* ) : (
        <div>Loading Google Maps...</div>
      )} */}

        <div className="ml-96 mt-8 items-center justify-center">
          <form>
            <Autocomplete>
              {/* <input type='text' placeholder='Origin' ref={originRef} /> */}

              <div className="w-80 ml-12">
                <label
                  htmlFor="origin"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Origin
                </label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="PickupLocation"
                  ref={originRef}
                />
              </div>
            </Autocomplete>
            <Autocomplete>
              {/* <input
                type='text'
                placeholder='Destination'
                ref={destinationRef}
              /> */}

              <div className="w-80 ml-12 mt-4">
                <label
                  htmlFor="destination"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Destination
                </label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="PickupLocation"
                  ref={destinationRef}
                />
              </div>
            </Autocomplete>
            {/* <button  type='submit' onClick={calculateRoute}>
              Calculate Route
            </button> */}
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 ml-12 mr-4"
              onClick={calculateRoute}
            >
              Show Route
            </button>

            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 ml-12"
              onClick={clearRoute}
            >
              Clear Route
            </button>

            {/* <button onClick={clearRoute}>New Route</button> */}
          </form>

          <div className="mt-8 ml-12">
            <p>Distance: {distance}m </p>

            <p>Duration: {duration}s</p>
          </div>

          {/* <button onClick={() => {
              map.panTo(center)
              map.setZoom(15)
            }}
            >
              Move to Center
            </button> */}

          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 ml-12"
            onClick={() => {
              map.panTo(center);
              map.setZoom(15);
            }}
          >
            Center Map
          </button>
        </div>
      </div>
    </>
  );
};

export default Map;
