import MapView, { Marker, Geojson } from "react-native-maps";
import Icon from "react-native-ico";
import { useState } from "react";
// import alg from "./algeria.json";
import alger from "./alger.json";
import tamanrasset from "./tamanrasset.json";
const algeria = {
  latitude: 28.0339,
  longitude: 1.6596,
  latitudeDelta: 0,
  longitudeDelta: 22,
};
export default function Map({ navigation }) {
  const [geo, setGeo] = useState(true);
  const [region, setRegion] = useState(algeria);
  return (
    <MapView
      followUserLocation={true}
      region={region}
      showsUserLocation={true}
      style={{
        width: "100%",
        height: "100%",
      }}
      zoomEnabled={true}
      onRegionChangeComplete={(region) => {
        if (geo && region.longitudeDelta < 2) {
          setRegion(region);
          setGeo(false);
        } else if (!geo && region.longitudeDelta > 2) {
          setRegion(region);
          setGeo(true);
        }
      }}
    >
      <Marker
        coordinate={{
          latitude: 36.7538,
          longitude: 3.0588,
        }}
        pinColor="#342861"
        onPress={() => navigation.navigate("Place")}
      >
        {}
        <Icon name="map-marker" group="font-awesome" width="30" height="30" />
      </Marker>
      <Geojson
        geojson={alger}
        strokeColor="#8168DD"
        fillColor={geo ? "#8168DD" : "#0000"}
      />
      <Geojson
        geojson={tamanrasset}
        strokeColor="#8168DD"
        fillColor={geo ? "#8168DD" : "#0000"}
      />
    </MapView>
  );
}
