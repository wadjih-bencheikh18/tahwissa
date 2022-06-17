import React, { useState, useEffect, useRef } from "react";
import { View, Text, PermissionsAndroid } from "react-native";
import MapView, { Marker, AnimatedRegion } from "react-native-maps";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TailwindProvider } from "tailwindcss-react-native";
const algeria = {
  latitude: 28.0339,
  longitude: 1.6596,
  latitudeDelta: 0,
  longitudeDelta: 20,
};
function HomeScreen() {
  const [data, setData] = useState({ region: algeria });

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
        region={data.region}
        initialRegion={algeria}
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
          pinColor="green"
        ></Marker>
        <Marker
          coordinate={{
            latitude: 36.7538,
            longitude: 3.0588,
          }}
        >
          <Text className="text-3xl">bouraoui</Text>
        </Marker>
      </MapView>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Map" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
