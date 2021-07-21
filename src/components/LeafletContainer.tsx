import './ExploreContainer.css';
import 'leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

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
