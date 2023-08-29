import React from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 40.712776,
  lng: -74.005974,
};

const ProjMap = () => {
  const directionsCallback = (response) => {
    if (response !== null) {
      if (response.status === 'OK') {
        setDirections(response);
      } else {
        console.error('Directions request failed with status:', response.status);
      }
    }
  };

  const [directions, setDirections] = React.useState(null);

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <DirectionsService
          options={{
            destination: 'DESTINATION_LATITUDE,DESTINATION_LONGITUDE',
            origin: 'ORIGIN_LATITUDE,ORIGIN_LONGITUDE',
            travelMode: 'DRIVING',
          }}
          callback={directionsCallback}
        />

        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default ProjMap;
