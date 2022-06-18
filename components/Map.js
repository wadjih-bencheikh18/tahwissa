import MapView, { Marker, Geojson } from "react-native-maps";
import Icon from "react-native-ico";
// import alg from "./algeria.json";
import alger from "./alger.json";
import tamanrasset from "./tamanrasset.json";
const algeria = {
  latitude: 28.0339,
  longitude: 1.6596,
  latitudeDelta: 0,
  longitudeDelta: 21,
};
export default function Map() {
  return (
    <MapView
      tabIndex={0}
      followUserLocation={true}
      region={algeria}
      showsUserLocation={true}
      style={{
        width: "100%",
        height: "100%",
      }}
      zoomEnabled={true}
    >
      <Marker
        coordinate={{
          latitude: 36.7538,
          longitude: 3.0588,
        }}
        pinColor="#342861"
      >
        <Icon
          name="map-marker"
          group="font-awesome"
          style={{ width: 30, height: 30 }}
        />
      </Marker>
      <Geojson geojson={alger} strokeColor="#8168DD" fillColor="#8168DD" />
      <Geojson
        geojson={tamanrasset}
        strokeColor="#8168DD"
        fillColor="#8168DD"
      />
    </MapView>
  );
}
