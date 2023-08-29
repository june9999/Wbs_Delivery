import React, { useState } from 'react';
import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api';

const MapContainer = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const onLoad = (autocomplete) => {
    autocomplete.setComponentRestrictions({ country: 'de' }); // Restrict results to Germany
    autocomplete.setTypes(['(cities)']); // Restrict results to cities
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      if (place && place.formatted_address.includes('Berlin')) {
        setSelectedPlace(place);
      } else {
        setSelectedPlace(null);
      }
    }
  };

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        center={{ lat: 52.520008, lng: 13.404954 }}
        zoom={10}
        mapContainerStyle={{ height: '400px', width: '100%' }}
      >
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <input type="text" placeholder="Enter a location" />
        </Autocomplete>
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;