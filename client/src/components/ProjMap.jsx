import React, { useEffect, useRef, useState } from 'react';

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

  //  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  // const [price,setPrice]=useState(0)
  // console.log(distance)
  // console.log(duration)

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  const destinationRef = useRef();

  useEffect(() => {
    const baseFare = 12;
    const costPerMin = 0.75;
    const costPerKm = 0.75;
    const surgeBoostMultiplier = 1;
    const minPrice = 20;

    //  const distance = results.routes[0].legs[0].distance.value;
    //  const duration = results.routes[0].legs[0].duration.value;
    const durationCost = (costPerMin * duration) / 1000;
    console.log(
      '🚀 ~ file: ProjMap.jsx:86 ~ calculateRoute ~ durationCost:',
      durationCost
    );
    const distanceCost = (costPerKm * distance) / 1000;
    console.log(
      '🚀 ~ file: ProjMap.jsx:88 ~ calculateRoute ~ distanceCost:',
      distanceCost
    );
    let rideFare = (
      (baseFare + durationCost + distanceCost) *
      surgeBoostMultiplier
    ).toFixed(2);
    rideFare = setPrice(rideFare < minPrice ? minPrice : rideFare);
    console.log('Priceeee', rideFare);
  }, [duration, distance]);

  /** @type React.MutableRefObject<HTMLInputElement> */
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
      const results = await directionsService
        .route({
          origin: originRef.current.value,
          //  origin:setPickupLocation(originRef.current.value),
          destination: destinationRef.current.value,
          //  destination:setDropLocation(destinationRef.current.value),
          travelMode: google.maps.TravelMode.DRIVING,
        })
        .then((res) => {
          console.log('🚀 ~ file: ProjMap.jsx:68 ~ .then ~ res:', res);
          setPickupLocation(originRef.current.value);
          setDropLocation(destinationRef.current.value);
          // console.log("RESSSSULT", results);
          setDirectionsResponse(res);
          setDistance(res.routes[0].legs[0].distance.value);
          setDuration(res.routes[0].legs[0].duration.value);
        });
      //   .then((res) => {
      //   const baseFare = 12;
      //   const costPerMin = 0.75;
      //   const costPerKm = 0.75;
      //   const surgeBoostMultiplier = 1;
      //   const minPrice = 20;

      //   //  const distance = results.routes[0].legs[0].distance.value;
      //   //  const duration = results.routes[0].legs[0].duration.value;
      //   const durationCost = (costPerMin * duration) / 1000;
      //   console.log("🚀 ~ file: ProjMap.jsx:86 ~ calculateRoute ~ durationCost:", durationCost)
      //   const distanceCost = (costPerKm * distance) / 1000;
      //   console.log("🚀 ~ file: ProjMap.jsx:88 ~ calculateRoute ~ distanceCost:", distanceCost)
      //   let rideFare = (
      //     (baseFare + durationCost + distanceCost) *
      //     surgeBoostMultiplier
      //   ).toFixed(2);
      //   rideFare = setPrice(rideFare < minPrice ? minPrice : rideFare);
      //   console.log("Priceeee", rideFare);
      // });
      /// calculations
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
      <h2 className="flex items-center justify-center text-2xl font-bold">
        Create Order
      </h2>

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
      <div className="flex items-center justify-center">
        <div>
          {/* {isLoaded ? ( */}
          <div className="flex items-center justify-center  h-[10rem] md:w-[45vw] md:h-[350px] border-2 border-black mt-12 md:ml-24">
            <GoogleMap
              center={center}
              zoom={15}
              mapContainerStyle={{ width: '100%', height: '100%' }}
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
          </div>
          <div className="flex items-center justify-center">
            <div className=" mt-8 flex-wrap  flex items-center justify-center overflow-auto  ">
              <form className="mt-12">
                <Autocomplete>
                  {/* <input type='text' placeholder='Origin' ref={originRef} /> */}

                  <div className="w-80 ml-12 ">
                    <label
                      htmlFor="origin"
                      className="block mb-2 text-lg font-medium text-gray-900 dark:text-white mt-4"
                    >
                      Origin
                    </label>
                    <input
                      type="text"
                      name="brand"
                      id="brand"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[60%] md:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 w-[15rem]"
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

                  <div className="w-80 ml-12 ">
                    <label
                      htmlFor="destination"
                      className="  block mb-2 text-lg font-medium text-gray-900 dark:text-white mt-4 "
                    >
                      Destination
                    </label>
                    <input
                      type="text"
                      name="brand"
                      id="brand"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[60%] md:w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 w-[15rem]"
                      placeholder="DropLocation"
                      ref={destinationRef}
                    />
                  </div>
                </Autocomplete>
                {/* <button  type='submit' onClick={calculateRoute}>
              Calculate Route
            </button> */}
                <button
                  type="submit"
                  className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 ml-12 "
                  onClick={calculateRoute}
                >
                  Show Route
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 ml-8"
                  onClick={clearRoute}
                >
                  Clear Form
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 md:ml-2 ml-16"
                  onClick={() => {
                    map.panTo(center);
                    map.setZoom(15);
                  }}
                >
                  Center Map
                </button>
                {/* <button onClick={clearRoute}>New Route</button> */}
              </form>

              <div className="ml-4 ">
                <div>
                  <label
                    htmlFor="distance"
                    className="block mb-2 mt-4 text-lg font-medium text-gray-900 dark:text-white"
                  >
                    Distance
                  </label>
                  <p className=" block mb-2 text-lg font-medium text-gray-900 dark:text-white bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 w-[16rem] md:w-80">
                    {' '}
                    {distance / 1000} km
                  </p>

                  <label
                    htmlFor="duration"
                    className="block mt-4 mb-2 text-lg font-medium text-gray-900 dark:text-white"
                  >
                    Duration
                  </label>
                  <p className="  block mb-2 text-sm font-medium text-gray-900 dark:text-white bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 w-[16rem] md:w-80">
                    {duration / 60} min
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <button onClick={() => {
              map.panTo(center)
              map.setZoom(15)
            }}
            >
              Move to Center
            </button> */}

          {/* <p className="ml-12 mt-8">Price for Delivery:  {price}</p> */}
        </div>
      </div>
    </>
  );
};

export default ProjMap;
