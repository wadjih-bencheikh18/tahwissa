import MapView, { Marker, Geojson } from "react-native-maps";
import { useState } from "react";
import Icon from "react-native-ico";
// import alg from "./algeria.json";
import alger from "./alger.json";
import tamanrasset from "./tamanrasset.json";
const algeria = {
  latitude: 28.0339,
  longitude: 1.6596,
  latitudeDelta: 0,
  longitudeDelta: 20,
};
export default function Map() {
  const [data, setData] = useState({ region: algeria });

  return (
    <MapView
      followUserLocation={true}
      region={data.region}
      initialRegion={algeria}
      showsUserLocation={true}
      style={{
        width: "100%",
        height: "100%",
      }}
      zoomEnabled={true}
      on
    >
      <Marker
        coordinate={{
          latitude: 36.7538,
          longitude: 3.0588,
        }}
        title="test"
        description="tttt"
        pinColor="#342861"
      >
        <Icon
          name="map-marker"
          group="font-awesome"
          style={{ width: 30, height: 30 }}
        />
      </Marker>
      <Geojson
        geojson={alger}
        strokeColor="#8168DD"
        fillColor="#8168DD"
        strokeWidth={2}
      />
      <Geojson
        geojson={tamanrasset}
        fillColor="#8168DD"
        strokeColor="#8168DD"
        strokeWidth={2}
      />
    </MapView>
  );
}
