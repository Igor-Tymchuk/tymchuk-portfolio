import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngTuple } from "leaflet";
import s from "./Location.module.css";

const position: LatLngTuple = [50.1833, 27.0665];

const Location = () => {
  return (
    <MapContainer
      center={position}
      zoom={13}
      className={s.customMap}
      style={{
        height: "400px",
        width: "100%",
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Шепетівка, Україна</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Location;
