import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Define the map container styles
const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

// Set the initial map center coordinates
const defaultCenter = {
  lat: 8.699780,
  lng: 77.732382,
};

// Set the initial zoom level
const defaultZoom = 8;

const MapComponent: React.FC = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAP1A0hESJ8pLIbOW-t_noe9Wy-2nuADPk">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={defaultCenter} zoom={defaultZoom}>
        {/* Add markers or other map components as needed */}
        <Marker position={defaultCenter} title="SATHI SYSTEMS PRIVATE LIMITED" />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
