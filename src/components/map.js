import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const defposition = [43.3, -8.378];
const defzoom = [9];

export default function Map() {
  return (
    <MapContainer
      center={defposition}
      zoom={defzoom}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        url="https://api.mapbox.com/styles/v1/jorgepardor/cl41jp1fo000614o0fae6p97g/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoiam9yZ2VwYXJkb3IiLCJhIjoiY2xhcXBubnA3MWlmcDN4bjZlZGUzZTJmdiJ9.rq1aWUqm3lDnEVQ6bTrCSw"
        attribution='© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>'
      />
      <Marker position={[43.3, -8.378]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
