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

const mapLibrary = ['places'];

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

  async function calculateRoute() {
    if (originRef.current.value === '' || destinationRef.current.value === '') {
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
        </GoogleMap>
        {/* ) : (
        <div>Loading Google Maps...</div>
      )} */}

        <form>
          <Autocomplete>
            <input type="text" placeholder="Origin" ref={originRef} />
          </Autocomplete>
          <Autocomplete>
            <input type="text" placeholder="Destination" ref={destinationRef} />
          </Autocomplete>
          <button type="submit" onClick={calculateRoute}>
            Calculate Route
          </button>
          <button onClick={clearRoute}>New Route</button>
        </form>

        <p>Distance: {distance} </p>

        <p>Duration: {duration}</p>

        <button
          onClick={() => {
            map.panTo(center);
            map.setZoom(15);
          }}
        >
          Move to Center
        </button>
      </div>
    </>
  );
};

export default Map;
