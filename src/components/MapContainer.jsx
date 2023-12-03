import React from 'react';
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';
import './MapContainer.css';

const mapStyles = {
  width: '100%',
  height: '400px', // or any desired height
};

const MapContainer = (props) => {
  return (
    <Map
      google={props.google}
      zoom={15}
      style={mapStyles}
      initialCenter={{ lat: 38.635, lng: -90.236}}
      >
      <Marker
      name='SLU Center For Global Citizenship'
      title='SLU Center For Global Citizenship'
      position={{ lat: 38.635, lng: -90.236}}
      >
      </Marker>
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAfa1aRhsnlG7wSm2Gbhv1hGtu8R-wuzv8'
})(MapContainer);
