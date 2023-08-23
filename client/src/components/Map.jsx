import React, { useRef, useState } from 'react';
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
 
  DirectionsRenderer,
  MarkerF,
} from '@react-google-maps/api';

const center = { lat: 48.8584, lng: 2.2945 };

const mapLibrary=['places'];

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries:mapLibrary ,
  });

  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  const originRef = useRef();
  const destinationRef = useRef();

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
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance('');
    setDuration('');
    originRef.current.value = '';
    destinationRef.current.value = '';
  }

  return (
    <div>
      {isLoaded ? (
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: '800px', height: '800px' }}
          // options={{
          //   zoomControl: false,
          //   streetViewControl: false,
          //   mapTypeControl: false,
          //   fullscreenControl: false,
          // }}
          onLoad={map => setMap(map)}
        >
          <MarkerF position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      ) : (
        <div>Loading Google Maps...</div>
      )}
    </div>
  );
};

export default Map;
