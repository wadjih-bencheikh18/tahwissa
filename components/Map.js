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
      maxZoomLevel={22}
      onRegionChangeComplete={(region) => {
        if (geo && region.longitudeDelta < 1.5) {
          setRegion(region);
          setGeo(false);
        } else if (!geo && region.longitudeDelta > 1.5) {
          setRegion(region);
          setGeo(true);
        }
      }}
      onDoublePress={() => setRegion(algeria)}
    >
      <Marker
        coordinate={{
          latitude: 36.7538,
          longitude: 3.0588,
        }}
        onPress={() => navigation.navigate("Place")}
      >
        <Icon
          name="map-marker"
          group="font-awesome"
          width="30"
          height="30"
          color="#342861"
        />
      </Marker>
      <Marker
        coordinate={{
          latitude: 22.7903,
          longitude: 5.5193,
        }}
        onPress={() => navigation.navigate("Place")}
      >
        <Icon
          name="map-marker"
          group="font-awesome"
          width="30"
          height="30"
          color="#342861"
        />
      </Marker>
      {!geo && (
        <>
          <Marker
            coordinate={{
              latitude: 36.7338,
              longitude: 3.0188,
            }}
            onPress={() => navigation.navigate("Place")}
          >
            <Icon
              name="map-marker"
              group="font-awesome"
              width="30"
              height="30"
              color="#342861"
            />
          </Marker>
          <Marker
            coordinate={{
              latitude: 36.7938,
              longitude: 3.0188,
            }}
            onPress={() => navigation.navigate("Place")}
          >
            <Icon
              name="map-marker"
              group="font-awesome"
              width="30"
              height="30"
              color="#342861"
            />
          </Marker>
        </>
      )}
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
