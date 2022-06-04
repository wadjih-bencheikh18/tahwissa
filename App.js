import React, { useState, useEffect, useRef } from "react";
import { View, Text, PermissionsAndroid } from "react-native";
import MapView, { Marker, AnimatedRegion } from "react-native-maps";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Geolocation from "react-native-geolocation-service";
const algeria = {
  latitude: 28.0339,
  longitude: 1.6596,
  latitudeDelta: 0,
  longitudeDelta: 20,
};
function HomeScreen() {
  const [data, setData] = useState({ region: algeria });
  // const mapView = useRef(null);
  // async function getCurrentLocation() {
  //   Geolocation.getCurrentLocation(
  //     (position) => {
  //       alert("test");
  //       const region = {
  //         latitude: parseFloat(position.coords.latitude),
  //         longitude: parseFloat(position.coords.longitude),
  //         latitudeDelta: 5,
  //         longitudeDelta: 5,
  //       };
  //       setData({
  //         initialRegion: region,
  //       });
  //     },
  //     (error) => alert(error),
  //     {
  //       enableHighAccuracy: true,
  //       timeout: 100,
  //       maximumAge: 1000,
  //     }
  //   );
  // }
  // useEffect(() => {
  //   getCurrentLocation();
  // }, []);
  // function goToInitialLocation() {
  //   const initialRegion = data.initialRegion;
  //   mapView.current.animateToRegion(initialRegion, 2000);
  // }
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MapView
        followUserLocation={true}
        initialRegion={data.region}
        showsUserLocation={true}
        style={{
          width: "100%",
          height: "100%",
        }}
        // ref={(ref) => (mapView.current = ref)}
        zoomEnabled={true}
        // onMapReady={() => goToInitialLocation()}
      >
        <Marker
          coordinate={{
            latitude: 36.7538,
            longitude: 3.0588,
          }}
          pinColor="green"
        ></Marker>
        <Marker
          coordinate={{
            latitude: 36.7538,
            longitude: 3.0588,
          }}
        >
          <Text>bouraoui</Text>
        </Marker>
      </MapView>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Map" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
