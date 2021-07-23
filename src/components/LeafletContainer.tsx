import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './ExploreContainer.css';
import 'leaflet/dist/leaflet.css';

const LeafletContainer: React.FC = () => {

  const [activePark, setActivePark] = React.useState(null);


  return (
    <div className="leaflet-container">

      <MapContainer center={[45.4, -75.7]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>

    </div>
  );
};

export default LeafletContainer;
