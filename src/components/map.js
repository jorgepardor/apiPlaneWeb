import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayerGroup,
  Circle,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";


const defposition = [43.3, -8.378];
const plane1 = [42.8, -8.378];
const plane2 = [43.5, -8.378];
const defzoom = [9];
const myIcon = L.icon({
  iconUrl:
    "https://res.cloudinary.com/jorgepardor/image/upload/v1669039588/apiplaneweb/logo/location_mark_wfj1tz.svg",
  iconSize: [16, 20],
  iconAnchor: [2, 20],
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
});
const planeIconActive = L.icon({
  iconUrl:
    "https://res.cloudinary.com/jorgepardor/image/upload/v1669042197/apiplaneweb/logo/airplane_marker_active_b30t0j.svg",
  iconSize: [16, 20],
  iconAnchor: [32, 64],
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
});
const rangeRadius = {
  color: "rgba(217, 217, 217, 0.2)",
  fillColor: "rgba(255, 255, 255, 0.08)",
};

export default function Map(props) {


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
      <Marker icon={myIcon} position={defposition}>
        <LayerGroup>
          <Circle
            center={defposition}
            pathOptions={rangeRadius}
            radius={46300}
          />
          <Circle
            center={defposition}
            pathOptions={rangeRadius}
            radius={92600}
          />
          <Circle
            center={defposition}
            pathOptions={rangeRadius}
            radius={185200}
          />
        </LayerGroup>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>

      <Marker icon={planeIconActive} position={plane1} />
      <Marker icon={planeIconActive} position={plane2} />
    </MapContainer>
  );
}
